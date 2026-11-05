// The pluralists and the atomists: fragments in Burnet (numbered as in Diels–Kranz), Plato's Phaedo (Fowler),
// Aristotle (Ross, Joachim), Diogenes Laertius (Hicks), and Democritus in Bakewell's source book and LeetLit's translation.

import { democritusB125, democritusB171, democritusNote } from "../leetlit.mjs";

/** One of Burnet's fragments, labelled with its number. */
const fr = (source, n, extra = {}) => ({ source, from: `fr.${n}`, count: 1, ref: `B${n}`, ...extra });

// Bakewell's text, with the scan's OCR errors corrected.
const B9 = [
  {
    ref: "B9",
    text: "[Democritus] says: By convention (*νόμῳ*) sweet is sweet, by convention bitter is bitter, by convention hot is hot, by convention cold is cold, by convention color is color. But in reality there are atoms and the void. That is, the objects of sense are supposed to be real and it is customary to regard them as such, but in truth they are not. Only the atoms and the void are real.",
  },
  {
    text: "In fact we do not know anything infallibly, but only that which changes according to the condition of our body and of the [influences] that reach and impinge upon it.",
  },
];

const B3andB191 = [
  {
    ref: "B3",
    text: "He who intends to enjoy life should not be busy about many things, and in what he does should not undertake what exceeds his natural capacity. On the contrary, he should have himself so in hand that even when fortune comes his way, and is apparently ready to lead him on to higher things, he should put her aside and not o'erreach his powers. For a being of moderate size is safer than one that bulks too big.",
  },
  {
    ref: "B191",
    text: "Men achieve tranquillity through moderation in pleasure and through the symmetry of life. Want and superfluity are apt to upset them and to cause great perturbations in the soul. The souls that are rent by violent conflicts are neither stable nor tranquil. One should therefore set his mind upon the things that are within his power, and be content with his opportunities, nor let his memory dwell very long on the envied and admired of men, nor idly sit and dream of them. Rather, he should contemplate the lives of those who suffer hardship, and vividly bring to mind their sufferings, so that your own present situation may appear to you important and to be envied, and so that it may no longer be your portion to suffer torture in your soul by your longing for more. For he who admires those who have, and whom other men deem blest of fortune, and who spends all his time idly dreaming of them, will be forced to be always contriving some new device because of his [insatiable] desire, until he ends by doing some desperate deed forbidden by the laws. And therefore one ought not to desire other men's blessings, and one ought not to envy those who have more, but rather, comparing his life with that of those who fare worse, and laying to heart their sufferings, deem himself blest of fortune in that he lives and fares so much better than they. Holding fast to this saying you will pass your life in greater tranquillity and will avert not a few of the plagues of life—envy and jealousy and bitterness of mind.",
  },
];

export default {
  "empedocles-anaxagoras": [
    fr("burnet-empedocles", 6, { part: 1, title: "Empedocles, fragments" }),
    fr("burnet-empedocles", 8, { part: 2 }),
    { source: "burnet-empedocles", ref: "B17", from: "fr.17", to: "fr.18" },
    fr("burnet-empedocles", 117, { part: 3 }),
    fr("burnet-anaxagoras", 1, { part: 4, title: "Anaxagoras, fragments" }),
    fr("burnet-anaxagoras", 17),
    fr("burnet-anaxagoras", 12, { part: 5 }),
    {
      source: "plato-phaedo",
      part: 6,
      title: "Plato, *Phaedo* 97b–99d",
      ref: "97b",
      from: "97b",
      start: "Then one day I heard a man reading",
      end: "my second voyage in quest of the cause?",
    },
  ],
  atomists: [
    {
      source: "aristotle-metaphysics",
      part: 1,
      title: "Aristotle, *Metaphysics* I.4, 985b4–20",
      ref: "985b4",
      from: "I.4",
      start: "Leucippus and his associate Democritus",
      end: "lazily neglected.",
      fixes: [["non-being-the full", "non-being—the full"], ["movement-whence", "movement—whence"], ["things-these thinkers", "things—these thinkers"]],
    },
    {
      source: "aristotle-generation-corruption",
      part: 2,
      title: "Aristotle, *On Generation and Corruption* I.8, 325a23–b5",
      ref: "325a23",
      from: "I.8",
      start: "Leucippus, however, thought he had a theory",
      end: "creeping in to fill the void places.'",
      fixes: [['it is a many"', 'it is a "many"'], ["growth-solids", "growth—solids"]],
    },
    { source: "bakewell", part: 3, title: "Democritus, fragment B9, quoted by Sextus Empiricus", blocks: B9 },
    { source: "leetlit", title: "Democritus, fragment B125, quoted by Galen", blocks: democritusB125, note: democritusNote },
    { source: "diogenes-laertius", part: 4, title: "Diogenes Laertius, *Lives* IX.72 (DK B117)", from: "9.11.72", end: "for truth is in a well." },
    { source: "bakewell", part: 5, title: "Democritus, fragments B3 and B191, quoted by Stobaeus", blocks: B3andB191 },
    { source: "leetlit", title: "Democritus, fragment B171, quoted by Stobaeus", blocks: democritusB171 },
  ],
};
