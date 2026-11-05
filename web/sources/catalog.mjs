/**
 * Every text the lesson readings are built from, with where it was downloaded
 * and what we know about its copyright. `npm run sources` downloads any file
 * that is missing; `npm run readings` turns them into src/content/readings/.
 *
 * `publicDomain` is the United States status. Texts marked false are used
 * here for private study only and must be replaced or licensed before LeetLit
 * is published.
 */

const PERSEUS = "https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data";
const scaife = (urn) => `https://scaife.perseus.org/library/urn:cts:greekLit:${urn}/`;
const MIT = "https://classics.mit.edu/Aristotle";
const wikisource = (page) =>
  `https://en.wikisource.org/w/api.php?action=parse&format=json&formatversion=2&prop=text&page=${encodeURIComponent(page)}`;
const wikisourcePage = (page) => `https://en.wikisource.org/wiki/${page.replaceAll(" ", "_")}`;
const HANOVER = "https://history.hanover.edu/texts/presoc";

function perseus(id, path, meta) {
  const urn = path.split("/").pop().replace(/\.xml$/, "");
  return { id, file: `perseus/${id}.xml`, url: `${PERSEUS}/${path}`, page: scaife(urn), format: "perseus", provider: "Perseus Digital Library", ...meta };
}

function mit(id, name, meta) {
  return { id, file: `mit/${id}.txt`, url: `${MIT}/${name}.mb.txt`, page: `${MIT}/${name}.html`, format: "mit", provider: "The Internet Classics Archive (MIT)", ...meta };
}

const burnet = (id, chapter) => ({
  id,
  file: `wikisource/${id}.html`,
  url: wikisource(`Early Greek Philosophy/${chapter}`),
  page: wikisourcePage(`Early Greek Philosophy/${chapter}`),
  format: "wikisource",
  provider: "Wikisource",
  author: "John Burnet",
  work: `Early Greek Philosophy, “${chapter}”`,
  translator: "John Burnet",
  title: "Early Greek Philosophy (3rd ed.)",
  year: 1920,
  publicDomain: true,
});

const fairbanks = (id, name, work) => ({
  id,
  file: `hanover/${id}.html`,
  url: `${HANOVER}/${name}.html`,
  page: `${HANOVER}/${name}.html`,
  format: "hanover",
  provider: "Hanover Historical Texts Project",
  author: "Arthur Fairbanks",
  work,
  translator: "Arthur Fairbanks",
  title: "The First Philosophers of Greece",
  year: 1898,
  publicDomain: true,
});

const fowler1914 = { translator: "Harold North Fowler", title: "Plato I (Loeb Classical Library)", year: 1914, publicDomain: true };

export const catalog = [
  // Perseus Digital Library: Loeb and other translations with the standard reference numbers marked.
  perseus("diogenes-laertius", "tlg0004/tlg001/tlg0004.tlg001.perseus-eng2.xml", {
    author: "Diogenes Laertius", work: "Lives of Eminent Philosophers",
    translator: "R. D. Hicks", title: "Lives of Eminent Philosophers (Loeb Classical Library)", year: 1925, publicDomain: true,
  }),
  perseus("hesiod-theogony", "tlg0020/tlg001/tlg0020.tlg001.perseus-eng2.xml", {
    author: "Hesiod", work: "Theogony",
    translator: "Hugh G. Evelyn-White", title: "Hesiod, the Homeric Hymns and Homerica (Loeb Classical Library)", year: 1914, publicDomain: true,
  }),
  perseus("herodotus", "tlg0016/tlg001/tlg0016.tlg001.perseus-eng2.xml", {
    author: "Herodotus", work: "Histories",
    translator: "A. D. Godley", title: "Herodotus (Loeb Classical Library)", year: 1920, publicDomain: true,
  }),
  perseus("plato-euthyphro", "tlg0059/tlg001/tlg0059.tlg001.perseus-eng2.xml", { author: "Plato", work: "Euthyphro", ...fowler1914 }),
  perseus("plato-apology", "tlg0059/tlg002/tlg0059.tlg002.perseus-eng2.xml", { author: "Plato", work: "Apology", ...fowler1914 }),
  perseus("plato-crito", "tlg0059/tlg003/tlg0059.tlg003.perseus-eng2.xml", { author: "Plato", work: "Crito", ...fowler1914 }),
  perseus("plato-phaedo", "tlg0059/tlg004/tlg0059.tlg004.perseus-eng2.xml", { author: "Plato", work: "Phaedo", ...fowler1914 }),
  perseus("plato-cratylus", "tlg0059/tlg005/tlg0059.tlg005.perseus-eng2.xml", {
    author: "Plato", work: "Cratylus",
    translator: "Harold North Fowler", title: "Plato IV (Loeb Classical Library)", year: 1926, publicDomain: true,
  }),
  perseus("plato-theaetetus", "tlg0059/tlg006/tlg0059.tlg006.perseus-eng2.xml", {
    author: "Plato", work: "Theaetetus",
    translator: "Harold North Fowler", title: "Plato VII (Loeb Classical Library)", year: 1921, publicDomain: true,
  }),
  perseus("plato-parmenides", "tlg0059/tlg009/tlg0059.tlg009.perseus-eng2.xml", {
    author: "Plato", work: "Parmenides",
    translator: "Harold North Fowler", title: "Plato IV (Loeb Classical Library)", year: 1926, publicDomain: true,
  }),
  perseus("plato-protagoras", "tlg0059/tlg022/tlg0059.tlg022.perseus-eng2.xml", {
    author: "Plato", work: "Protagoras",
    translator: "W. R. M. Lamb", title: "Plato II (Loeb Classical Library)", year: 1924, publicDomain: true,
  }),
  perseus("plato-meno", "tlg0059/tlg024/tlg0059.tlg024.perseus-eng2.xml", {
    author: "Plato", work: "Meno",
    translator: "W. R. M. Lamb", title: "Plato II (Loeb Classical Library)", year: 1924, publicDomain: true,
  }),
  // Shorey's Republic came out in two volumes. One file holds both; the second entry reads it too.
  perseus("plato-republic", "tlg0059/tlg030/tlg0059.tlg030.perseus-eng2.xml", {
    author: "Plato", work: "Republic, Books I–V",
    translator: "Paul Shorey", title: "Plato: The Republic, Books I–V (Loeb Classical Library)", year: 1930, publicDomain: true,
  }),
  {
    ...perseus("plato-republic-vi-x", "tlg0059/tlg030/tlg0059.tlg030.perseus-eng2.xml", {
      author: "Plato", work: "Republic, Books VI–X",
      translator: "Paul Shorey", title: "Plato: The Republic, Books VI–X (Loeb Classical Library)", year: 1935,
      publicDomain: false, note: "Published in 1935; probably still in copyright in the US until 2031.",
    }),
    file: "perseus/plato-republic.xml",
    shares: "plato-republic",
  },
  perseus("aristotle-nicomachean-ethics", "tlg0086/tlg010/tlg0086.tlg010.perseus-eng2.xml", {
    author: "Aristotle", work: "Nicomachean Ethics",
    translator: "H. Rackham", title: "The Nicomachean Ethics (Loeb Classical Library)", year: 1926, publicDomain: true,
  }),
  perseus("epictetus-enchiridion", "tlg0557/tlg002/tlg0557.tlg002.perseus-eng4.xml", {
    author: "Epictetus", work: "Enchiridion",
    translator: "Thomas Wentworth Higginson", title: "The Works of Epictetus", year: 1890, publicDomain: true,
  }),

  // The Internet Classics Archive: the Oxford translation of Aristotle, by book and chapter.
  mit("aristotle-metaphysics", "metaphysics", {
    author: "Aristotle", work: "Metaphysics", translator: "W. D. Ross", title: "Metaphysics", year: 1908, publicDomain: true,
  }),
  mit("aristotle-physics", "physics", {
    author: "Aristotle", work: "Physics", translator: "R. P. Hardie and R. K. Gaye", title: "Physica", year: 1930, publicDomain: true,
  }),
  mit("aristotle-on-the-heavens", "heavens", {
    author: "Aristotle", work: "On the Heavens", translator: "J. L. Stocks", title: "De Caelo", year: 1922, publicDomain: true,
  }),
  mit("aristotle-generation-corruption", "gener_corr", {
    author: "Aristotle", work: "On Generation and Corruption", translator: "H. H. Joachim", title: "De Generatione et Corruptione", year: 1922, publicDomain: true,
  }),
  mit("aristotle-categories", "categories", {
    author: "Aristotle", work: "Categories", translator: "E. M. Edghill", title: "Categoriae", year: 1928, publicDomain: true,
  }),
  mit("aristotle-prior-analytics", "prior", {
    author: "Aristotle", work: "Prior Analytics", translator: "A. J. Jenkinson", title: "Analytica Priora", year: 1928, publicDomain: true,
  }),
  mit("aristotle-on-the-soul", "soul", {
    author: "Aristotle", work: "On the Soul", translator: "J. A. Smith", title: "De Anima", year: 1931,
    publicDomain: false, note: "Published in 1931; enters the US public domain on 1 January 2027.",
  }),
  {
    id: "aristotle-politics-1",
    file: "mit/aristotle-politics-1.html",
    url: `${MIT}/politics.1.one.html`,
    page: `${MIT}/politics.1.one.html`,
    format: "mit-html",
    provider: "The Internet Classics Archive (MIT)",
    author: "Aristotle", work: "Politics, Book I", translator: "Benjamin Jowett", title: "Politics", year: 1885, publicDomain: true,
  },

  // Project Gutenberg.
  {
    id: "sextus-patrick",
    file: "gutenberg/sextus-patrick.txt",
    url: "https://www.gutenberg.org/cache/epub/17556/pg17556.txt",
    page: "https://www.gutenberg.org/ebooks/17556",
    format: "gutenberg-patrick",
    provider: "Project Gutenberg",
    author: "Sextus Empiricus", work: "Outlines of Pyrrhonism, Book I",
    translator: "Mary Mills Patrick", title: "Sextus Empiricus and Greek Scepticism", year: 1899, publicDomain: true,
  },

  // Wikisource: Burnet's Early Greek Philosophy, chapter by chapter, and Van Hook's Helen.
  burnet("burnet-milesians", "The Milesian School"),
  burnet("burnet-science-and-religion", "Science and Religion"),
  burnet("burnet-heraclitus", "Herakleitos of Ephesos"),
  burnet("burnet-parmenides", "Parmenides of Elea"),
  burnet("burnet-empedocles", "Empedokles of Akragas"),
  burnet("burnet-anaxagoras", "Anaxagoras of Klazomenai"),
  burnet("burnet-younger-eleatics", "The Younger Eleatics"),
  {
    id: "gorgias-helen",
    file: "wikisource/gorgias-helen.html",
    url: wikisource("The Encomium on Helen, by Gorgias (LaRue Van Hook translation)"),
    page: wikisourcePage("The Encomium on Helen, by Gorgias (LaRue Van Hook translation)"),
    format: "wikisource",
    provider: "Wikisource",
    author: "Gorgias", work: "Encomium of Helen",
    translator: "LaRue Van Hook", title: "The Classical Weekly 6.16", year: 1913, publicDomain: true,
  },

  // Hanover Historical Texts Project: Fairbanks's translations of the ancient reports.
  fairbanks("fairbanks-thales", "thales", "Thales"),
  fairbanks("fairbanks-anaximander", "anaximan", "Anaximandros"),
  fairbanks("fairbanks-anaximenes", "anaximen", "Anaximenes"),

  // Internet Archive: Bakewell's source book. The scan's OCR is corrected by hand in the recipes.
  {
    id: "bakewell",
    file: "archive/bakewell-source-book.txt",
    url: "https://archive.org/download/sourcebookinanci00bakeuoft/sourcebookinanci00bakeuoft_djvu.txt",
    page: "https://archive.org/details/sourcebookinanci00bakeuoft",
    format: "text",
    provider: "Internet Archive",
    author: "Charles M. Bakewell", work: "Source Book in Ancient Philosophy",
    translator: "Charles M. Bakewell", title: "Source Book in Ancient Philosophy", year: 1907, publicDomain: true,
  },
];

// The Greek behind LeetLit's own translations (see scripts/readings/leetlit.mjs), kept for reference.
// First Thousand Years of Greek (Open Greek and Latin): public-domain Teubner editions, encoded under CC BY-SA.
const first1k = (id, path, meta) => ({
  id,
  file: `first1k/${id}.xml`,
  url: `https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/master/data/${path}`,
  page: `https://scaife.perseus.org/library/urn:cts:greekLit:${path.split("/").pop().replace(/\.xml$/, "")}/`,
  format: "greek",
  provider: "First Thousand Years of Greek",
  ...meta,
});

catalog.push(
  first1k("gorgias-helen-greek", "tlg0593/1st1K001/tlg0593.1st1K001.1st1K-grc1.xml", {
    author: "Gorgias", work: "Encomium of Helen", translator: "", title: "Greek text, ed. F. Blass (Teubner)", year: 1908, publicDomain: true,
  }),
  first1k("sextus-against-the-mathematicians-greek", "tlg0544/tlg002/tlg0544.tlg002.1st1K-grc1.xml", {
    author: "Sextus Empiricus", work: "Against the Mathematicians", translator: "", title: "Greek text, ed. H. Mutschmann and J. Mau (Teubner)", year: 1914, publicDomain: true,
  }),
);

/** Translations made for LeetLit, where no public-domain English version could be found. */
export const leetlit = {
  id: "leetlit",
  provider: "LeetLit",
  translator: "LeetLit",
  title: "Translated for LeetLit from the Greek",
  year: 2026,
  publicDomain: true,
};
