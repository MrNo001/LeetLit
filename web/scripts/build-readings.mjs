// Builds src/content/readings/<lessonId>.json from the downloaded sources and
// the recipes in scripts/readings/recipes/. Run `npm run sources` first.
// Usage: npm run readings [-- <lessonId> ...]

import { readFileSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { catalog, leetlit } from "../sources/catalog.mjs";
import { applyFixes, select, splitAll, trimEach } from "./readings/doc.mjs";
import { parseHanover, parseMit, parseMitHtml, parsePatrick, parsePerseus, parseWikisource, toRoman } from "./readings/parsers.mjs";

const web = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(web, "src", "content", "readings");
// Readings that use a text still in copyright go here, and git ignores the folder.
const privateDir = path.join(outDir, "private");
const require = createRequire(import.meta.url);

// --- Lesson content, loaded straight from the TypeScript sources -------------

function loadContent() {
  const ts = require("typescript");
  const cache = new Map();
  const resolve = (from, spec) => {
    const base = path.resolve(path.dirname(from), spec);
    for (const file of [`${base}.ts`, path.join(base, "index.ts")]) {
      try {
        readFileSync(file);
        return file;
      } catch {}
    }
    throw new Error(`Cannot resolve ${spec} from ${from}`);
  };
  const load = (file) => {
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} };
    cache.set(file, module);
    const { outputText } = ts.transpileModule(readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    });
    const localRequire = (spec) => (spec.startsWith(".") ? load(resolve(file, spec)) : require(spec));
    new Function("require", "module", "exports", outputText)(localRequire, module, module.exports);
    return module.exports;
  };
  const { tracks } = load(path.join(web, "src", "content", "tracks.ts"));
  const lessons = new Map();
  for (const track of tracks) for (const node of track.nodes) for (const lesson of node.lessons) lessons.set(lesson.id, lesson);
  return lessons;
}

// --- Sources -----------------------------------------------------------------

const PERSEUS_OPTIONS = {
  "diogenes-laertius": { runOn: true, divs: { section: { label: (p) => p.at(-1) } } },
  "hesiod-theogony": { lines: true },
  // Chapters carry their full number in the margin and sections after the first their own ("1.74", "2", "3").
  herodotus: {
    paragraphs: "milestones",
    divs: { chapter: { label: (p) => `${p[0]}.${p[1]}` }, section: { label: (p) => (p.at(-1) === "1" ? undefined : p.at(-1)) } },
  },
  "plato-republic": { sections: true, divs: { book: { heading: (p) => `Book ${toRoman(Number(p[0]))}` } } },
  "aristotle-nicomachean-ethics": {
    bekker: true,
    runOn: true,
    divs: { book: { heading: (p) => `Book ${toRoman(Number(p[0]))}` }, section: { heading: (p) => `Chapter ${p.at(-1)}` } },
  },
  "epictetus-enchiridion": { divs: { chapter: { label: (p) => p.at(-1) } } },
};

const PARSERS = {
  perseus: (text, source) => parsePerseus(text, PERSEUS_OPTIONS[source.id] ?? { sections: source.id.startsWith("plato-") }),
  mit: (text) => parseMit(text),
  "mit-html": (text) => parseMitHtml(text),
  "gutenberg-patrick": (text) => parsePatrick(text),
  wikisource: (text, source) => parseWikisource(text, source.id === "gorgias-helen" ? { sections: true } : { fragments: true }),
  hanover: (text) => parseHanover(text),
};

const sourcesById = new Map([...catalog, leetlit].map((source) => [source.id, source]));
const docs = new Map();

async function doc(id) {
  const entry = sourcesById.get(id);
  if (!entry) throw new Error(`Unknown source "${id}"`);
  // An entry that shares another's file (the second volume of a two-volume work) is parsed as that one.
  const source = entry.shares ? sourcesById.get(entry.shares) : entry;
  if (docs.has(source.id)) return docs.get(source.id);
  const parse = PARSERS[source.format];
  if (!parse) throw new Error(`Source "${id}" has no parser; give its passages as literal blocks`);
  const text = await readFile(path.join(web, "sources", source.file), "utf8");
  const parsed = parse(text, source);
  docs.set(source.id, parsed);
  return parsed;
}

// --- Recipes -> reading text ---------------------------------------------------

/** `*italic*` in literal recipe text becomes emphasis. */
function literal(text) {
  return text.split(/(\*[^*]+\*)/).filter(Boolean).map((piece) => (piece.startsWith("*") && piece.endsWith("*") && piece.length > 2 ? { em: piece.slice(1, -1) } : piece));
}

/**
 * Curly quotes and apostrophes, for the sources typed with straight ones. A quote
 * mark opens when it follows a space or bracket and comes before a word; otherwise
 * it closes. References are skipped over when looking at the neighbours.
 */
function smarten(text) {
  const runs = text.map((segment) => (typeof segment === "string" ? segment : (segment.em ?? "")));
  const after = (i, j) => {
    for (let k = i, at = j + 1; k < runs.length; k++, at = 0) if (at < runs[k].length) return runs[k][at];
    return "";
  };
  let prev = "";
  return text.map((segment, i) => {
    if (typeof segment === "object" && segment.ref) return segment;
    let out = "";
    for (let j = 0; j < runs[i].length; j++) {
      const ch = runs[i][j];
      const opens = /^$|[\s(\[{—–-]/.test(prev) && /\S/.test(after(i, j));
      if (ch === '"') out += opens ? "“" : "”";
      else if (ch === "'") out += /[\p{L}\d]/u.test(prev) && /\p{L}/u.test(after(i, j)) ? "’" : opens || prev === "“" ? "‘" : "’";
      else out += ch;
      prev = out.at(-1);
    }
    return typeof segment === "string" ? out : { em: out };
  });
}

function toBlocks(paras) {
  const blocks = [];
  let carry = [];
  for (const para of paras) {
    if (para.end) continue;
    const text = [...carry];
    carry = [];
    for (const seg of para.segs) {
      if (seg.text !== undefined) {
        const last = text.at(-1);
        if (!seg.em && typeof last === "string") text[text.length - 1] = last + seg.text;
        else text.push(seg.em ? { em: seg.text } : seg.text);
      } else if (seg.label) {
        // Two references with no text between them (a Bekker page and its first line): keep the finer one.
        if (typeof text.at(-1) === "object" && text.at(-1).ref) text.pop();
        text.push({ ref: seg.label });
      }
    }
    // A reference at the very end of a paragraph belongs to the next one.
    while (text.length && typeof text.at(-1) === "object" && text.at(-1).ref) carry.unshift(text.pop());
    const hasText = text.some((s) => (typeof s === "string" ? s.trim() : s.em?.trim()));
    if (!hasText) {
      carry.unshift(...text.filter((s) => s.ref));
      carry = carry.slice(-1);
      continue;
    }
    while (carry.length > 1) carry.shift();
    const block = { text: smarten(trimEnds(text)) };
    if (para.heading) block.heading = true;
    else {
      if (para.speaker) block.speaker = para.speaker;
      if (para.cont) block.cont = true;
      if (para.verse) block.verse = true;
    }
    blocks.push(block);
  }
  return blocks;
}

function trimEnds(text) {
  const out = text.map((s) => (typeof s === "object" ? { ...s } : s));
  const firstText = out.findIndex((s) => typeof s === "string" || s.em !== undefined);
  const lastText = out.findLastIndex((s) => typeof s === "string" || s.em !== undefined);
  const trim = (i, fn) => {
    if (typeof out[i] === "string") out[i] = fn(out[i]);
    else out[i].em = fn(out[i].em);
  };
  trim(firstText, (s) => s.replace(/^\s+/, ""));
  trim(lastText, (s) => s.replace(/\s+$/, ""));
  return out.filter((s) => s !== "");
}

async function buildSections(recipe) {
  const sections = [];
  const used = new Set();
  for (const item of recipe) {
    used.add(item.source);
    const base = { source: item.source };
    if (item.title) base.title = item.title;
    if (item.blocks) {
      const blocks = item.blocks.map((b) => {
        const text = smarten(literal(b.text));
        if (b.ref) text.unshift({ ref: b.ref });
        const block = { text };
        if (b.speaker) block.speaker = b.speaker;
        if (b.verse) block.verse = true;
        if (b.heading) block.heading = true;
        return block;
      });
      sections.push({ ...base, ...(item.part ? { part: item.part } : {}), blocks, ...(item.note ? { note: item.note } : {}) });
      continue;
    }
    let paras = select(await doc(item.source), item);
    if (item.trim) paras = trimEach(paras, item.trim);
    if (item.fixes) paras = applyFixes(paras, item.fixes);
    const pieces = item.parts ? splitAll(paras, item.parts.map(([, cut]) => cut)) : [paras];
    const first = sections.length;
    pieces.forEach((piece, i) => {
      const blocks = toBlocks(piece);
      if (!blocks.length) return;
      // The first piece with text (the one before the first cut is often empty) carries the title and reference.
      const opening = sections.length === first;
      const [part, , partRef] = item.parts ? (item.parts[i - 1] ?? []) : [item.part];
      const section = opening ? { ...base } : { source: item.source };
      if (part) section.part = part;
      // A reference given in the recipe, for the item or one of its parts, stands in for one the source puts at the very start.
      const ref = partRef ?? (opening ? item.ref : undefined);
      if (ref) blocks[0].text.splice(0, blocks[0].text[0]?.ref ? 1 : 0, { ref });
      section.blocks = blocks;
      sections.push(section);
    });
    if (item.note && sections.length > first) sections.at(-1).note = item.note;
  }
  return { sections, used };
}

function sourceInfo(id) {
  const { author, work, translator, title, year, publicDomain, provider, page, note } = sourcesById.get(id);
  return { id, author, work, translator, title, year, publicDomain, provider, url: page, ...(note ? { note } : {}) };
}

/** One block per line keeps the generated files diffable. */
function serialize(reading) {
  const lines = [`{"sources":${JSON.stringify(reading.sources)},`, `"sections":[`];
  reading.sections.forEach((section, i) => {
    const { blocks, ...head } = section;
    lines.push(`${JSON.stringify(head).slice(0, -1)},"blocks":[`);
    blocks.forEach((block, j) => lines.push(JSON.stringify(block) + (j < blocks.length - 1 ? "," : "")));
    lines.push(`]}${i < reading.sections.length - 1 ? "," : ""}`);
  });
  lines.push("]}");
  return lines.join("\n") + "\n";
}

// --- Main ----------------------------------------------------------------------

const lessons = loadContent();
const only = process.argv.slice(2);
const recipeDir = path.join(web, "scripts", "readings", "recipes");
const recipes = {};
for (const file of (await readdir(recipeDir)).filter((f) => f.endsWith(".mjs")).sort()) {
  Object.assign(recipes, (await import(pathToFileURL(path.join(recipeDir, file)))).default);
}

await mkdir(privateDir, { recursive: true });
let errors = 0;
for (const [lessonId, recipe] of Object.entries(recipes)) {
  if (only.length && !only.includes(lessonId)) continue;
  const lesson = lessons.get(lessonId);
  if (!lesson) {
    console.error(`✗ ${lessonId}: no such lesson`);
    errors++;
    continue;
  }
  try {
    const { sections, used } = await buildSections(recipe);
    const parts = new Set(sections.map((s) => s.part).filter(Boolean));
    const problems = [];
    for (const n of parts) if (n < 1 || n > lesson.breakdown.length) problems.push(`part ${n} is outside the breakdown`);
    for (let n = 1; n <= lesson.breakdown.length; n++) if (!parts.has(n)) problems.push(`part ${n} (${lesson.breakdown[n - 1].locator}) has no place in the text`);
    // When a reading gathers several sources, each change of source is named, so every passage is credited.
    if (used.size > 1) {
      sections.forEach((section, i) => {
        if (!section.title && sections[i - 1]?.source !== section.source) problems.push(`section ${i + 1} (${section.source}) needs a title`);
      });
    }
    if (problems.length) throw new Error(problems.join("; "));
    const reading = { sources: [...used].map(sourceInfo), sections };
    const words = sections.flatMap((s) => s.blocks).flatMap((b) => b.text).reduce((n, s) => n + (typeof s === "string" ? s : s.em ?? "").split(/\s+/).filter(Boolean).length, 0);
    const open = reading.sources.every((source) => source.publicDomain);
    await writeFile(path.join(open ? outDir : privateDir, `${lessonId}.json`), serialize(reading));
    await rm(path.join(open ? privateDir : outDir, `${lessonId}.json`), { force: true });
    console.log(`✓ ${lessonId}: ${sections.length} sections, ${words.toLocaleString("en")} words${open ? "" : " (private: not all public domain)"}`);
  } catch (error) {
    console.error(`✗ ${lessonId}: ${error.message}`);
    errors++;
  }
}
const missing = [...lessons.keys()].filter((id) => !recipes[id]);
if (missing.length && !only.length) console.log(`\nNo reading yet: ${missing.join(", ")}`);
if (errors) process.exitCode = 1;
