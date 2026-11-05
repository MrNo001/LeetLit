// Pythagoras and Xenophanes: fragments in Burnet, Aristotle in Ross, Philolaus in LeetLit's translation.
// Burnet numbers Xenophanes as Diels does; his Heraclitus numbers are Bywater's (16 is B40, 17 is B129).

import { philolaus, philolausNote } from "../leetlit.mjs";

/** One of Xenophanes' fragments in Burnet, labelled with its number. */
const xenophanes = (n, extra = {}) => ({ source: "burnet-science-and-religion", from: `fr.${n}`, count: 1, ref: `B${n}`, ...extra });

export default {
  pythagoreans: [
    xenophanes(7, { part: 1, title: "Xenophanes, fragment B7" }),
    { source: "burnet-heraclitus", part: 2, title: "Heraclitus, fragments B40 and B129", ref: "B40", from: "fr.16", count: 1 },
    { source: "burnet-heraclitus", ref: "B129", from: "fr.17", count: 1 },
    {
      source: "aristotle-metaphysics",
      part: 3,
      title: "Aristotle, *Metaphysics* I.5, 985b23–986a21",
      ref: "985b23",
      from: "I.5",
      start: "Contemporaneously with these philosophers",
      end: "the whole heaven, as has been said, is numbers.",
      fixes: [
        ["come into being-more than", "come into being—more than"],
        ["opportunity-and similarly", "opportunity—and similarly"],
      ],
    },
    {
      source: "aristotle-metaphysics",
      part: 4,
      title: "Aristotle, *Metaphysics* I.5, 986a22–b8",
      ref: "986a22",
      from: "I.5",
      start: "Other members of this same school",
      end: "they say substance is composed and moulded.",
      fixes: [["cognates-limit", "cognates—limit"], ["contraricties", "contrarieties"]],
    },
    { source: "leetlit", part: 5, title: "Philolaus, fragments B1–B6", blocks: philolaus, note: philolausNote },
  ],
  xenophanes: [
    xenophanes(11, { part: 1 }),
    xenophanes(12),
    xenophanes(14, { part: 2 }),
    xenophanes(15),
    xenophanes(16),
    xenophanes(23, { part: 3 }),
    xenophanes(24),
    xenophanes(25),
    xenophanes(26),
    xenophanes(18, { part: 4 }),
    xenophanes(34),
    xenophanes(2, { part: 5, fixes: [["him,-what", "him,—what"]] }),
  ],
};
