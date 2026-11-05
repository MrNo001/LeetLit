// The common shape every source is parsed into, and the operations recipes use on it.
//
// A document is a list of paragraphs. A paragraph has optional props (speaker,
// cont for a speech that carries on after a break, verse, heading) and a list
// of segments: { text, em? } runs and { mark, label? } positions. Marks are the
// reference points recipes select by (Stephanus sections, line numbers,
// chapters, fragment numbers). A mark with a label is also shown in the margin.

export class Builder {
  paras = [];
  cur = null;
  pending = [];

  /** Starts a paragraph. Marks that arrived between paragraphs open it. */
  open(props = {}) {
    this.close();
    this.cur = { ...props, segs: this.pending };
    this.pending = [];
  }

  close() {
    if (!this.cur) return;
    const para = this.cur;
    this.cur = null;
    tidy(para);
    if (para.segs.some((seg) => seg.text?.trim())) this.paras.push(para);
    else this.pending.push(...para.segs.filter((seg) => seg.mark));
  }

  text(text, em = false) {
    if (!this.cur) {
      if (!text.trim()) return;
      this.open();
    }
    const last = this.cur.segs.at(-1);
    if (last && last.text !== undefined && !!last.em === em) last.text += text;
    else this.cur.segs.push(em ? { text, em: true } : { text });
  }

  mark(mark, label) {
    const seg = label ? { mark, label } : { mark };
    (this.cur ? this.cur.segs : this.pending).push(seg);
  }

  finish() {
    this.close();
    // Marks after the last paragraph (an end-of-text milestone) stay addressable.
    if (this.pending.length) this.paras.push({ end: true, segs: this.pending });
    return this.paras;
  }
}

/** Collapses whitespace inside a paragraph and trims its ends. Verse keeps its line breaks. */
export function tidy(para) {
  for (const seg of para.segs) {
    if (seg.text === undefined) continue;
    seg.text = para.verse
      ? seg.text.replace(/[ \t\r\f\v ]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{2,}/g, "\n")
      : seg.text.replace(/\s+/g, " ");
    seg.text = seg.text
      // A dropped footnote can leave the comma before it and the one after it side by side.
      .replace(/,\s*,/g, ",")
      // Typesetting habits and slips in the sources: "once ?", "philosopher) ;", "Socrates,that", "strings.One".
      .replace(/([^\s.]) +([,;:!?])/g, "$1$2")
      .replace(/([a-z]),([a-z])/g, "$1, $2")
      .replace(/([a-z]{2})\.([A-Z][a-z])/g, "$1. $2");
  }
  // Join runs split by nothing, then trim the paragraph's outer whitespace.
  const segs = [];
  for (const seg of para.segs) {
    const last = segs.at(-1);
    if (seg.text !== undefined && last?.text !== undefined && !!last.em === !!seg.em) last.text += seg.text;
    else segs.push({ ...seg });
  }
  const texts = segs.filter((seg) => seg.text !== undefined);
  // Spaces the sources leave inside quotation marks, and on both sides of a reference.
  texts.forEach((seg, i) => {
    seg.text = seg.text.replace(/([“‘]) +/g, "$1").replace(/ +”/g, "”");
    const prev = texts[i - 1];
    if (!prev) return;
    if (/[\s“‘]$/.test(prev.text)) seg.text = seg.text.replace(/^ +/, "");
    if (/^[”,.;:!?]/.test(seg.text)) prev.text = prev.text.replace(/ +$/, "");
  });
  if (texts.length) {
    texts[0].text = texts[0].text.replace(/^\s+/, "");
    texts.at(-1).text = texts.at(-1).text.replace(/\s+$/, "");
  }
  // Runs left side by side once an emptied one between them is dropped are joined too.
  para.segs = [];
  for (const seg of segs) {
    if (seg.text === "") continue;
    const last = para.segs.at(-1);
    if (seg.text !== undefined && last?.text !== undefined && !!last.em === !!seg.em) last.text = (last.text + seg.text).replace(/ {2,}/g, " ");
    else para.segs.push(seg);
  }
  return para;
}

export const plain = (para) => para.segs.map((seg) => seg.text ?? "").join("");

const clone = (para) => ({ ...para, segs: para.segs.map((seg) => ({ ...seg })) });

/** Splits one paragraph at a character offset into its plain text. Marks at the cut go with the second half. */
function splitAt(para, offset) {
  const before = { ...para, segs: [] };
  const after = { ...para, segs: [] };
  if (para.speaker || para.cont) after.cont = true;
  let pos = 0;
  for (const seg of para.segs) {
    if (seg.text === undefined) {
      (pos < offset ? before : after).segs.push({ ...seg });
      continue;
    }
    const end = pos + seg.text.length;
    if (end <= offset) before.segs.push({ ...seg });
    else if (pos >= offset) after.segs.push({ ...seg });
    else {
      before.segs.push({ ...seg, text: seg.text.slice(0, offset - pos) });
      after.segs.push({ ...seg, text: seg.text.slice(offset - pos) });
    }
    pos = end;
  }
  return [tidy(before), tidy(after)];
}

function splitAtMark(para, mark) {
  const at = para.segs.findIndex((seg) => seg.mark === mark);
  const before = tidy({ ...para, segs: para.segs.slice(0, at) });
  const after = tidy({ ...para, segs: para.segs.slice(at) });
  if (before.segs.some((seg) => seg.text) && (para.speaker || para.cont)) after.cont = true;
  return [before, after];
}

const QUOTES = { "‘": "'", "’": "'", "“": '"', "”": '"' };

/** Normalizes whitespace and curly quotes, keeping a map back to offsets in the original. */
function squash(text) {
  let out = "";
  const map = [];
  for (let i = 0; i < text.length; i++) {
    const ch = /\s/.test(text[i]) ? " " : (QUOTES[text[i]] ?? text[i]);
    if (ch === " " && out.endsWith(" ")) continue;
    out += ch;
    map.push(i);
  }
  map.push(text.length);
  return { out, map };
}

const OPENING = /[“‘]/;
const CLOSING = /[”’]/;

/**
 * Finds a cut point: a mark id, or { text } for the place where a phrase begins
 * (or, with { after }, where it ends). A quotation mark opening just before the
 * phrase, or closing just after it, goes with it. Returns [paraIndex, kind, value] or null.
 */
function locate(paras, cut, fromPara = 0) {
  if (typeof cut === "string") {
    for (let i = fromPara; i < paras.length; i++) if (paras[i].segs.some((seg) => seg.mark === cut)) return [i, "mark", cut];
    return null;
  }
  const phrase = squash(cut.text ?? cut.after).out.trim();
  for (let i = fromPara; i < paras.length; i++) {
    const text = plain(paras[i]);
    const { out, map } = squash(text);
    const at = out.indexOf(phrase);
    if (at === -1) continue;
    let offset;
    if (cut.after) {
      offset = map[at + phrase.length - 1] + 1;
      while (CLOSING.test(text[offset] ?? "") || (text[offset] === '"' && !/\S/.test(text[offset + 1] ?? ""))) offset++;
    } else {
      offset = map[at];
      while (OPENING.test(text[offset - 1] ?? "") || (text[offset - 1] === '"' && !/\S/.test(text[offset - 2] ?? ""))) offset--;
    }
    return [i, "offset", offset];
  }
  return null;
}

/** Cuts the paragraph list at a cut point: returns [before, after]. */
function cutAt(paras, found) {
  const [i, kind, value] = found;
  const [head, tail] = kind === "mark" ? splitAtMark(paras[i], value) : splitAt(paras[i], value);
  const before = [...paras.slice(0, i), head].filter((p) => p.segs.length);
  const after = [tail, ...paras.slice(i + 1)].filter((p) => p.segs.length);
  return [before, after];
}

const describe = (cut) => (typeof cut === "string" ? `mark "${cut}"` : `phrase "${cut.text ?? cut.after}"`);

/**
 * Selects a stretch of a document. `from`/`to` are cuts (to is exclusive); `start` and
 * `end` are optional phrases that narrow the selection further (end is inclusive), and
 * `count` keeps only that many paragraphs (a single fragment, say).
 */
export function select(doc, { from, to, start, end, count }) {
  let paras = doc.map(clone);
  if (from !== undefined) {
    const found = locate(paras, from);
    if (!found) throw new Error(`select: ${describe(from)} not found`);
    paras = cutAt(paras, found)[1];
  }
  if (to !== undefined) {
    const found = locate(paras, to, 0);
    if (!found) throw new Error(`select: ${describe(to)} not found after the start`);
    paras = cutAt(paras, found)[0];
  }
  if (start !== undefined) {
    const found = locate(paras, { text: start });
    if (!found) throw new Error(`select: start phrase "${start}" not found`);
    paras = cutAt(paras, found)[1];
  }
  if (end !== undefined) {
    const found = locate(paras, { after: end });
    if (!found) throw new Error(`select: end phrase "${end}" not found`);
    paras = cutAt(paras, found)[0];
  }
  if (count !== undefined) paras = paras.filter((p) => !p.end).slice(0, count);
  // A selection that starts mid-speech still says who is speaking.
  if (paras[0]?.cont && paras[0].speaker) delete paras[0].cont;
  return paras.filter((p) => !p.end);
}

/** Cuts off whatever matches `pattern` at the end of each paragraph, e.g. a source citation. */
export function trimEach(paras, pattern) {
  const re = new RegExp(`(?:${pattern.source})$`, pattern.flags);
  return paras.map((para) => {
    const m = plain(para).match(re);
    return m ? splitAt(para, m.index)[0] : para;
  });
}

/** Corrects slips in a source's text: each [find, replace] pair must match somewhere in the selection. */
export function applyFixes(paras, fixes) {
  for (const [find, replace] of fixes) {
    let found = false;
    for (const para of paras) {
      for (const seg of para.segs) {
        if (!seg.text?.includes(find)) continue;
        seg.text = seg.text.replaceAll(find, replace);
        found = true;
      }
    }
    if (!found) throw new Error(`fix: "${find}" not found`);
  }
  return paras;
}

/**
 * Splits a selection into consecutive pieces at the given cuts, in order.
 * Returns pieces[0] (text before the first cut, often empty) and one piece per cut.
 */
export function splitAll(paras, cuts) {
  const pieces = [];
  let rest = paras;
  for (const cut of cuts) {
    const found = locate(rest, cut);
    if (!found) throw new Error(`split: ${describe(cut)} not found`);
    const [before, after] = cutAt(rest, found);
    pieces.push(before);
    rest = after;
  }
  pieces.push(rest);
  return pieces;
}
