# Sources and reading texts

Every lesson shows its text below the reading card. The text has reference numbers in the margin (Stephanus, Bekker, line or Diels–Kranz numbers), and a marker where each breakdown part begins. This folder holds the texts those readings are built from.

```bash
npm run sources                 # download any source in catalog.mjs that is missing
npm run readings                # build every reading
npm run readings -- thales zeno # build only these lessons
```

The downloaded files are git-ignored; `catalog.mjs` records where each one came from. Run `npm run sources` after cloning, then `npm run readings`.

## How a reading is built

1. **Catalog.** `catalog.mjs` lists each source: its file, download URL, translator, year and copyright status.
2. **Parsers.** `scripts/readings/parsers.mjs` turns each format into one document shape: paragraphs of text with marks at the reference points (see `scripts/readings/doc.mjs`).
3. **Recipes.** `scripts/readings/recipes/` has one file per topic. A recipe says which passages a lesson shows and where each breakdown part begins.
4. **Output.** `scripts/build-readings.mjs` writes `src/content/readings/<lessonId>.json`. The lesson page loads that file on the server, after the access check.

The build stops a lesson with an error if a mark or phrase isn't found, a fix matches nothing, a breakdown part has no place in the text, or a passage from a new source has no title.

## Copyright

`publicDomain` is the United States status.

A reading that uses any source marked `false` is written to `src/content/readings/private/` instead. Git ignores that folder, so those texts stay on this machine, for private study. Two sources are affected now:

| Source | Lessons | Status |
| --- | --- | --- |
| Paul Shorey, *Republic* VI–X (Loeb, 1935) | `republic-5-7`, `republic-8-10` | Probably in US copyright until 2031 |
| J. A. Smith, *De Anima* (Oxford, 1931) | `aristotle-de-anima` | US public domain from 1 January 2027 |

Before launch, replace these with public-domain translations or license them. A clone without `private/` shows these three lessons without their text.

## LeetLit's own translations

Where no public-domain English version could be found, LeetLit translated the passage from the Greek. These translations are in `scripts/readings/leetlit.mjs`. The reader sees each one credited as "Translated for LeetLit from the Greek", with a note naming the edition used.

| Passage | Greek text |
| --- | --- |
| Philolaus B1–B6 | Diels–Kranz |
| Democritus B125 and B171 | Diels–Kranz |
| Gorgias, *Encomium of Helen* 11–14 and 16–18 (Van Hook's translation leaves them out) | Blass (Teubner, 1908) |
| Gorgias, *On What Is Not*, in Sextus, *Against the Logicians* I.65–87 | Mutschmann and Mau (Teubner, 1914) |

The two Teubner texts are in the catalog as `greek` entries, from First Thousand Years of Greek. They are kept for reference; no parser reads them. A classicist should check these translations before launch.

## Writing a recipe

A recipe maps a lesson id to a list of passages, in reading order:

```js
// The Stephanus section where each breakdown part starts.
euthyphro: [{ source: "plato-euthyphro", parts: [[1, "2a"], [2, "5d"], [3, "6e"], [4, "10a"], [5, "11b"], [6, "14b"]] }],
```

| Field | Meaning |
| --- | --- |
| `source` | A catalog id. |
| `from`, `to` | Where the passage starts and stops. Give a mark (below), or `{ text: "…" }` to cut where a phrase begins. `to` is exclusive. |
| `start`, `end` | Phrases that narrow the passage further. `end` is inclusive. A quotation mark that opens just before `start`, or closes just after `end`, comes along. |
| `count` | Keep only the first N paragraphs, for example one fragment. |
| `part` | The breakdown part this passage begins. |
| `parts` | `[[part, cut, ref?], …]` splits the passage where each part starts. `ref` puts a reference number in the margin at that point, for parts that start between two marked lines. |
| `title` | Names the passage, with `*italic*`. Required wherever the source changes in a reading built from several sources. |
| `ref` | A reference number for the margin at the start of the passage. |
| `note` | Shown after the passage. |
| `trim` | A pattern cut from the end of each paragraph, such as Burnet's source citations. |
| `fixes` | `[[find, replace], …]` for slips in the source. Each must match somewhere in the passage. |
| `blocks` | Literal text instead of a selection: `[{ text, ref?, speaker?, verse?, heading? }]`, with `*italic*`. Used for LeetLit's translations and for the hand-corrected Bakewell scan. |

Marks by format:

| Format | Marks |
| --- | --- |
| `perseus` (Plato) | Stephanus sections (`"17a"`); the *Republic* also has book marks (`"1"`–`"10"`) |
| `perseus` (other) | Division numbers joined by dots: Diogenes `"9.8.51"` (book, chapter, section); Herodotus `"1.74"`; the *Ethics* `"2"` (book) and `"2.7"` (chapter); Epictetus `"5"`; Hesiod lines `"35"` |
| `mit` | `"II"` (book) and `"II.1"` (book and chapter), or `"1"` in a work without books |
| `mit-html` | Chapters `"1"`–`"13"` (*Politics* I) |
| `gutenberg-patrick` | Chapters `"ch14"`; section numbers `"36"` |
| `wikisource` | Burnet's fragments `"fr.12"`; Van Hook's sections `"§12"` |
| `hanover` | None; cut by phrases |
| `text` | No parser; give the passages as `blocks` |

To see a source's paragraphs and marks while writing a recipe, parse it with `parsers.mjs` and print the result.

## Adding a source

Add an entry to `catalog.mjs` with `id`, `file`, `url`, `page` (the page a reader can visit), `format`, `provider`, `author`, `work`, `translator`, `title`, `year` and `publicDomain`. If the copyright status needs explaining, add a `note`; it is shown with the credit.

Then run `npm run sources`. A new format needs a parser in `parsers.mjs` and an entry in `PARSERS` in `build-readings.mjs`.
