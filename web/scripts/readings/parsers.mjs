// One parser per source format. Each returns a document (see doc.mjs).

import { Builder, plain, tidy, trimEach } from "./doc.mjs";
import { decode, walk } from "./markup.mjs";

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100 };
export function fromRoman(numeral) {
  let total = 0;
  for (let i = 0; i < numeral.length; i++) {
    const value = ROMAN[numeral[i]];
    total += value < (ROMAN[numeral[i + 1]] ?? 0) ? -value : value;
  }
  return total;
}
export function toRoman(n) {
  const table = [[100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let out = "";
  for (const [value, numeral] of table) while (n >= value) (out += numeral), (n -= value);
  return out;
}

// ---------------------------------------------------------------------------
// Perseus TEI XML

const PERSEUS_SKIP = new Set(["note", "head", "bibl", "label", "del", "sic", "orig", "reg", "teiheader", "speaker"]);
const PERSEUS_EM = new Set(["foreign", "emph", "title", "term"]);
const PERSEUS_EMPTY = new Set(["milestone", "l", "lb", "pb", "gap"]);
const hasText = (para) => para?.segs.some((seg) => seg.text?.trim());
// A paragraph that holds nothing but an opening quotation mark has not really begun.
const hasWords = (para) => para?.segs.some((seg) => seg.text?.replace(/[“”‘’]/g, "").trim());

/**
 * Options:
 * - sections: show Stephanus-style section milestones (unit="section") as references.
 * - bekker: show Bekker page and line milestones as references.
 * - lines: treat <l n="…"> as numbered prose groups (Hesiod), not verse.
 * - paragraphs: "milestones" where <milestone unit="para"/> marks the paragraphs and each <p> only holds a section (Herodotus).
 * - runOn: join a paragraph that stops mid-sentence to the next, where sections were encoded as paragraphs.
 * - divs: { [subtype]: { label?: (path) => string, heading?: (path) => string } } for textpart divs.
 */
export function parsePerseus(xml, options = {}) {
  const { sections = false, bekker = false, lines = false, paragraphs = "p", runOn = false, divs = {} } = options;
  const byMilestone = paragraphs === "milestones";
  const body = xml.slice(xml.indexOf("<body"));
  const b = new Builder();
  const path = [];
  const divStack = [];
  let speaker = null;
  // Whether the next paragraph carries on the current speech rather than starting it.
  let speechGoesOn = false;
  let quoteDepth = 0;
  let verse = false;
  // Whether the current verse passage or quotation has had a line of text yet.
  let lineText = false;
  let page = null;
  let em = 0;
  // A footnote was just dropped; the encoders often left no space in its place.
  let afterNote = false;
  let lastText = "";

  const resume = (props = {}) => b.open(speaker ? { speaker, cont: true, ...props } : props);
  const openQuote = (single) => {
    b.text(single || quoteDepth % 2 === 1 ? "‘" : "“", em > 0);
    quoteDepth++;
    // Verse lines quoted inline are joined with slashes, counting from the quote's first line.
    if (!verse) lineText = false;
  };
  const closeQuote = (single) => {
    quoteDepth--;
    b.text(single || quoteDepth % 2 === 1 ? "’" : "”", em > 0);
  };
  const skip = (name) => {
    if (!PERSEUS_SKIP.has(name)) return false;
    if (name === "note") afterNote = true;
    return true;
  };

  for (const token of walk(body, { skip })) {
    const { kind, name, attrs = {} } = token;
    if (kind === "text") {
      let text = token.text.replace(/\s+/g, " ");
      if (afterNote && text) {
        if (/^[\p{L}\d“‘(]/u.test(text) && /[\p{L}\d.,;:!?)”’]$/u.test(lastText)) text = ` ${text}`;
        afterNote = false;
      }
      if (text.trim()) lineText = true;
      if (text) lastText = text;
      b.text(text, em > 0);
      continue;
    }
    if (kind === "open" && token.empty && !PERSEUS_EMPTY.has(name)) continue;
    if (kind === "open") {
      switch (name) {
        case "div": {
          const subtype = (attrs.subtype ?? "").toLowerCase();
          const isPart = attrs.type === "textpart";
          divStack.push(isPart);
          if (!isPart) break;
          path.push(attrs.n);
          const id = path.join(".");
          const rule = divs[subtype] ?? {};
          if (rule.heading) {
            b.close();
            b.mark(id);
            b.open({ heading: true });
            b.text(rule.heading(path));
            b.close();
          } else {
            b.mark(id, rule.label?.(path));
          }
          break;
        }
        case "p":
          if (byMilestone) b.text(" ");
          else if (!verse) {
            b.open(speaker ? { speaker, ...(speechGoesOn ? { cont: true } : {}) } : {});
            speechGoesOn = !!speaker;
          }
          break;
        case "said":
          if (attrs.who && !token.stack.some((el) => el.name === "said")) {
            speaker = attrs.who.replace(/^#/, "").replace(/_/g, " ");
            speechGoesOn = attrs.rend === "merge";
            const props = { speaker, ...(speechGoesOn ? { cont: true } : {}) };
            if (b.cur && !hasText(b.cur)) Object.assign(b.cur, props);
            else b.open(props);
          } else {
            openQuote(false);
          }
          break;
        case "q":
          openQuote(attrs.rend === "single");
          break;
        case "quote":
          if ((attrs.rend ?? "").includes("block")) {
            b.close();
            b.open({ verse: true });
            verse = true;
            lineText = false;
          } else openQuote(false);
          break;
        case "lg":
          if (!verse) lineText = false;
          break;
        case "l":
          // Lines come wrapped in <l> or separated by an empty <l/>; either way, every line after the first starts a new one.
          if (lines) {
            if (attrs.n) b.mark(attrs.n, attrs.n);
          } else if (verse) {
            if (lineText) b.text("\n");
          } else if (token.stack.some((el) => el.name === "quote" || el.name === "lg")) {
            if (lineText && b.cur?.segs.some((seg) => seg.text?.trim())) b.text(" / ");
          }
          break;
        case "milestone": {
          const unit = attrs.unit;
          if (unit === "section" && sections) b.mark(attrs.n, attrs.n);
          else if (unit === "para") {
            if (hasWords(b.cur)) {
              b.close();
              resume();
            }
          } else if (unit === "card" && lines) {
            b.close();
            b.open();
          } else if (bekker && attrs.resp === "Bekker") {
            if (unit === "page") {
              page = attrs.n;
              b.mark(page, page);
            } else if (unit === "line" && page) b.mark(`${page}${attrs.n}`, `${page}${attrs.n}`);
          }
          break;
        }
        case "gap":
          b.text(" … ", em > 0);
          break;
        case "lb":
        case "pb":
          b.text(" ", em > 0);
          break;
        case "hi":
          if (/ital/.test(attrs.rend ?? "")) em++;
          break;
        default:
          if (PERSEUS_EM.has(name)) em++;
      }
      continue;
    }
    // close
    switch (name) {
      case "div":
        if (divStack.pop()) path.pop();
        break;
      case "p":
        if (!verse && !byMilestone) b.close();
        break;
      case "said": {
        const nested = token.stack.some((el) => el.name === "said");
        if (attrs.who && !nested) speaker = null;
        else closeQuote(false);
        break;
      }
      case "q":
        closeQuote(attrs.rend === "single");
        break;
      case "quote":
        if ((attrs.rend ?? "").includes("block")) {
          b.close();
          verse = false;
          resume();
        } else closeQuote(false);
        break;
      case "hi":
        if (/ital/.test(attrs.rend ?? "")) em--;
        break;
      default:
        if (PERSEUS_EM.has(name)) em--;
    }
  }
  const doc = b.finish();
  return runOn ? joinRunOns(doc) : doc;
}

/** Joins each prose paragraph that stops mid-sentence to the prose paragraph after it. */
function joinRunOns(doc) {
  const prose = (para) => para && !para.verse && !para.heading && !para.end;
  const out = [];
  for (const para of doc) {
    const prev = out.at(-1);
    if (prose(prev) && prose(para) && prev.speaker === para.speaker && !/[.?!”’")\]]$/.test(plain(prev).trim())) {
      prev.segs.push({ text: " " }, ...para.segs);
      tidy(prev);
    } else out.push(para);
  }
  return out;
}

// ---------------------------------------------------------------------------
// The Internet Classics Archive: plain text with BOOK and Part headings.

/**
 * The Archive types dashes as hyphens: "--", or a single "-" against punctuation ("soul?-an answer",
 * "'by chance'-it", "investigated-'what"). A hyphen between two words stays one; recipes fix those dashes.
 */
function mitDashes(text) {
  return text
    .replace(/--/g, "—")
    .replace(/([?!)'",;:])-(?=\s?[\w'"(])/g, "$1—")
    .replace(/(\w)-(['"])(?=\w)/g, "$1—$2");
}

export function parseMit(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  // The text runs from the first dashed rule to "THE END"; further rules separate the books.
  const rule = (line) => /^-{20,}/.test(line);
  const start = lines.findIndex(rule) + 1;
  let end = lines.findIndex((line) => /^\s*THE END\s*$/.test(line));
  if (end === -1) end = lines.findLastIndex(rule);
  const b = new Builder();
  let book = null;
  let buffer = [];
  const flush = () => {
    if (!buffer.length) return;
    let text = mitDashes(buffer.join(" "));
    // Some files open every paragraph with a quotation mark that is never closed.
    if (text.startsWith('"') && text.split('"').length % 2 === 0) text = text.slice(1);
    b.open();
    b.text(text);
    b.close();
    buffer = [];
  };
  for (const raw of lines.slice(start, end)) {
    const line = raw.trim();
    let m;
    if (!line || rule(line)) flush();
    else if ((m = line.match(/^BOOK ([IVXLC]+)$/))) {
      flush();
      book = m[1];
      b.mark(book);
    } else if (/^SECTION \d+$/.test(line)) flush();
    else if ((m = line.match(/^Part (\d+)\s*"?$/))) {
      flush();
      b.mark(book ? `${book}.${m[1]}` : m[1]);
      b.open({ heading: true });
      b.text(`Chapter ${m[1]}`);
      b.close();
    } else buffer.push(line);
  }
  flush();
  return b.finish();
}

/** The Internet Classics Archive's HTML pages (used where the text download is broken). */
export function parseMitHtml(html) {
  const start = html.indexOf('<A NAME="start">');
  const end = html.indexOf("<HR", start);
  const body = html.slice(start, end).replace(/<A NAME="[^"]*"><\/A>/gi, "");
  const b = new Builder();
  for (const chunk of body.split(/<BR>\s*<BR>/i)) {
    const part = chunk.match(/<B>\s*Part ([IVXLC]+)\s*<\/B>/i);
    // This page sets its dashes as a hyphen and a space: "over better subjects- for example".
    const text = mitDashes(decode(chunk.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()).replace(/(\w)- (?=\w)/g, "$1—");
    if (part) {
      const n = fromRoman(part[1]);
      b.mark(String(n));
      b.open({ heading: true });
      b.text(`Chapter ${n}`);
      b.close();
      const rest = text.replace(/^Part [IVXLC]+\s*/, "");
      if (rest) {
        b.open();
        b.text(rest);
        b.close();
      }
    } else if (text) {
      // Quoted verse stands between breaks of its own: "It is meet that Hellenes should rule over barbarians; "
      const verse = /^".*"$/.test(text) && text.length < 300;
      b.open(verse ? { verse: true } : {});
      b.text(verse ? text.replace(/\s+"$/, '"') : text);
      b.close();
    }
  }
  return b.finish();
}

// ---------------------------------------------------------------------------
// Project Gutenberg: Patrick's Sextus, with section numbers in the right margin.

/** Adds a run of plain text, turning `_italics_` and `[Greek: …]` transliterations into emphasis. */
function addInline(b, text) {
  for (const piece of text.split(/(\[Greek:[^\]]*\]|_[^_]+_)/)) {
    if (!piece) continue;
    if (piece.startsWith("[Greek:")) {
      const greek = piece.slice(7, -1).trim().replace(/ê/g, "ē").replace(/ô/g, "ō");
      b.text(greek, true);
    } else if (piece.startsWith("_") && piece.endsWith("_") && piece.length > 2) b.text(piece.slice(1, -1), true);
    else b.text(piece);
  }
}

export function parsePatrick(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  // The translation begins at the second "PYRRHONIC SKETCHES" heading (the first is the essay's).
  const heads = lines.flatMap((line, i) => (line.trim() === "PYRRHONIC SKETCHES" ? [i] : []));
  const start = heads.at(-1);
  const end = lines.findIndex((line) => line.startsWith("*** END"));
  const b = new Builder();
  let buffer = [];
  let chapter = null;
  const flush = () => {
    if (!buffer.length) return;
    b.open();
    for (const { section, text } of buffer) {
      if (section) b.mark(section, section);
      addInline(b, text.replace(/\[\d+\]/g, "") + " ");
    }
    b.close();
    buffer = [];
  };
  for (let i = start + 1; i < end; i++) {
    const raw = lines[i];
    const line = raw.trim();
    let m;
    if (!line) {
      flush();
      continue;
    }
    if ((m = line.match(/^CHAPTER ([IVXLC]+)\.$/))) {
      flush();
      chapter = fromRoman(m[1]);
      let title = "";
      let j = i + 1;
      while (j < end && !lines[j].trim()) j++;
      const t = lines[j].trim().match(/^_(.+)\._?$|^_(.+)_$/);
      if (t) {
        title = (t[1] ?? t[2]).replace(/\.$/, "");
        i = j;
      }
      b.mark(`ch${chapter}`);
      b.open({ heading: true });
      b.text(`Chapter ${m[1]}${title ? `. ${title}` : ""}`);
      b.close();
      continue;
    }
    if (/^(BOOK I\.|BY|SEXTUS EMPIRICUS\.)$/.test(line)) continue;
    if (/^THE [A-Z]+ TROPE\.$/.test(line)) {
      flush();
      b.open({ heading: true });
      b.text(line.replace(/\.$/, "").replace(/\B[A-Z]+/g, (w) => w.toLowerCase()));
      b.close();
      continue;
    }
    if (/^\s{4}\[\d+\]/.test(raw)) {
      // A footnote: skip it and its continuation lines.
      while (i + 1 < end && lines[i + 1].trim()) i++;
      continue;
    }
    const margin = raw.match(/^(.*?\S)\s{2,}(\d{1,3})\s*$/);
    if (margin) buffer.push({ section: margin[2], text: margin[1].trim() });
    else buffer.push({ text: line });
  }
  flush();
  return b.finish();
}

// ---------------------------------------------------------------------------
// Wikisource pages, as rendered HTML from the parse API.

const BLOCK = new Set(["p", "div", "dd", "dt", "li", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "td", "th", "tr"]);

/**
 * Options:
 * - fragments: turn "(12)" headings or prefixes into fr.12 marks (Burnet).
 * - sections: turn "[12]" prefixes into §12 marks shown as references (Van Hook).
 */
export function parseWikisource(html, { fragments = false, sections = false } = {}) {
  const b = new Builder();
  let em = 0;
  let sidenote = null;
  let caps = 0;
  let capsText = "";
  let otherText = "";
  const closeBlock = () => {
    // A short paragraph set wholly in small capitals is a heading ("The Way of Truth").
    if (b.cur && capsText.trim() && !otherText.trim() && capsText.trim().length < 80) b.cur.heading = true;
    capsText = otherText = "";
    b.close();
  };
  const skip = (name, attrs) => {
    const cls = attrs.class ?? "";
    return (
      name === "style" ||
      name === "script" ||
      (name === "sup" && cls.includes("reference")) ||
      cls.includes("pagenum") ||
      cls.includes("mw-editsection") ||
      cls.includes("reflist") ||
      cls.includes("references") ||
      cls.includes("ws-noexport") ||
      cls.includes("wst-header") ||
      cls.includes("ws-header") ||
      cls.includes("authority-control") ||
      name === "table"
    );
  };
  for (const token of walk(html, { skip })) {
    const { kind, name, attrs = {} } = token;
    const smallcaps = name === "span" && (attrs.class ?? "").includes("smallcaps");
    if (kind === "text") {
      if (sidenote !== null) sidenote += token.text;
      else {
        b.text(token.text.replace(/[\s​]+/g, " "), em > 0);
        if (caps) capsText += token.text;
        else otherText += token.text;
      }
    } else if (kind === "open") {
      if (BLOCK.has(name)) closeBlock();
      if (name === "span" && (attrs.class ?? "").includes("wst-sidenote-inner")) sidenote = "";
      if (smallcaps) caps++;
      if (name === "i" || name === "em") em++;
      if (name === "br") b.text(" ");
    } else {
      if (sidenote !== null && name === "span") {
        const n = sidenote.trim();
        if (n) b.mark(`l${n}`, n);
        sidenote = null;
      }
      if (smallcaps) caps--;
      if (name === "i" || name === "em") em--;
      if (BLOCK.has(name)) closeBlock();
    }
  }
  let paras = b.finish();

  if (fragments || sections) {
    const out = [];
    let carry = [];
    for (const para of paras) {
      if (para.end) continue;
      const text = plain(para).trim();
      const head = fragments && text.match(FRAGMENT_HEAD);
      if (head) {
        carry.push(...para.segs.filter((s) => s.mark), ...fragmentMarks(head[1]));
        continue;
      }
      const lead = fragments ? text.match(FRAGMENT_LEAD) : sections ? text.match(/^\[(\d+)\]\s+/) : null;
      if (lead) {
        stripLeading(para, lead[0].length);
        carry.push(...(fragments ? fragmentMarks(lead[1]) : [{ mark: `§${lead[1]}`, label: lead[1] }]));
      }
      para.segs = [...carry, ...para.segs];
      carry = [];
      out.push(tidy(fragments ? stripRitterPreller(para) : para));
    }
    paras = out;
  }
  return paras;
}

// Burnet heads each fragment with its number, alone or before the text: "(12)", "(41, 42)", "(74–76)", "(51a)".
const FRAGMENT_NUMBERS = String.raw`\((\d+[a-z]?(?:\s*[,–-]\s*\d+[a-z]?)*)\)`;
const FRAGMENT_HEAD = new RegExp(`^${FRAGMENT_NUMBERS}$`);
const FRAGMENT_LEAD = new RegExp(String.raw`^${FRAGMENT_NUMBERS}\s+`);

/** fr.N marks for every number in a fragment head, filling in ranges. */
function fragmentMarks(numbers) {
  const marks = [];
  for (const piece of numbers.split(/\s*,\s*/)) {
    const [first, last] = piece.split(/\s*[–-]\s*/);
    if (last && /^\d+$/.test(first) && /^\d+$/.test(last)) {
      for (let n = Number(first); n <= Number(last); n++) marks.push({ mark: `fr.${n}` });
    } else marks.push({ mark: `fr.${first}` });
  }
  return marks;
}

function stripLeading(para, count) {
  let left = count;
  for (const seg of para.segs) {
    if (seg.text === undefined || left === 0) continue;
    // Leading whitespace was already trimmed, so the prefix sits in the first text runs.
    const cut = Math.min(left, seg.text.length);
    seg.text = seg.text.slice(cut);
    left -= cut;
  }
}

const RITTER_PRELLER = /\s*R\s?\.\s?P\s?\.?\s*(?:ib\.?|\d+)(?:[.,]?\s*(?:\d+|[a-zA-Z]\b))*\.?\s*$/;

/** Removes Burnet's "R. P. 35 b." references to Ritter and Preller (the "ib." may be italic), and margin marks left hanging after them. */
function stripRitterPreller(para) {
  const [stripped] = trimEach([para], RITTER_PRELLER);
  const last = stripped.segs.findLastIndex((seg) => seg.text !== undefined);
  if (last !== -1) stripped.segs = stripped.segs.slice(0, last + 1);
  return stripped;
}

// ---------------------------------------------------------------------------
// Hanover Historical Texts Project (Fairbanks). Passages break across printed
// pages; page markers and footnotes are dropped and the halves rejoined.

export function parseHanover(html) {
  const b = new Builder();
  let em = 0;
  const skip = (name) => name === "script" || name === "style" || name === "head" || name === "sup";
  for (const token of walk(html, { skip })) {
    const { kind, name } = token;
    // Some Greek is escaped twice (&amp;alpha;), so it is decoded once more.
    if (kind === "text") b.text(decode(token.text).replace(/\s+/g, " "), em > 0);
    else if (kind === "open") {
      if (BLOCK.has(name)) b.close();
      if (name === "i") em++;
    } else {
      if (name === "i") em--;
      if (BLOCK.has(name)) b.close();
    }
  }
  const out = [];
  for (const para of b.finish()) {
    if (para.end) continue;
    const text = plain(para).trim();
    if (/^\[Page \d+\]$/.test(text) || /^\d+\.\s/.test(text)) continue;
    const prev = out.at(-1);
    if (prev && /^[a-z]/.test(text) && !/[.:;?!”"]$/.test(plain(prev).trim())) {
      prev.segs.push({ text: " " }, ...para.segs);
      tidy(prev);
    } else out.push(para);
  }
  return out;
}
