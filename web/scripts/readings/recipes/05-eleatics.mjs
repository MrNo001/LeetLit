// The Eleatics: Parmenides and Zeno in Burnet, Plato's Parmenides (Fowler), Aristotle's Physics (Hardie and Gaye).

const PARMENIDES_NUMBERING =
  "Burnet numbers the two ways of inquiry differently: his fragments 4 and 5 are B2 and B3. The numbers beside the poem count its lines.";

export default {
  parmenides: [
    { source: "burnet-parmenides", part: 1, ref: "B1", from: "fr.1", to: { text: "The Way of Truth" } },
    { source: "burnet-parmenides", part: 2, ref: "B2–3", from: "fr.4", count: 1 },
    { source: "burnet-parmenides", part: 3, ref: "B6", from: "fr.6", count: 1 },
    { source: "burnet-parmenides", ref: "B7", from: "fr.7", count: 1 },
    {
      source: "burnet-parmenides",
      ref: "B8",
      from: "fr.8",
      to: "fr.9",
      parts: [[4, "fr.8"], [5, { text: "Nor is it divisible" }, "22"], [6, { text: "The Way of Belief" }]],
      note: PARMENIDES_NUMBERING,
    },
  ],
  // Aristotle states the arrow twice (239b5–9 and 239b30–33); both passages are gathered under part 4.
  zeno: [
    {
      source: "plato-parmenides",
      part: 1,
      title: "Plato, *Parmenides* 127b–128e",
      from: "127a",
      start: "Antiphon, then, said",
      end: "you guessed its meaning pretty well.",
    },
    {
      source: "aristotle-physics",
      part: 2,
      title: "Aristotle, *Physics* VI.9, 239b9–14",
      ref: "239b9",
      from: "VI.9",
      start: "Zeno's arguments about motion",
      end: "This we have discussed above.",
    },
    {
      source: "aristotle-physics",
      part: 3,
      title: "Aristotle, *Physics* VI.9, 239b14–29",
      ref: "239b14",
      from: "VI.9",
      start: "The second is the so-called",
      end: "These then are two of his arguments.",
    },
    {
      source: "aristotle-physics",
      part: 4,
      title: "Aristotle, *Physics* VI.9, 239b5–9 and 239b30–33",
      ref: "239b5",
      from: "VI.9",
      start: "Zeno's reasoning, however, is fallacious",
      end: "composed of indivisibles.",
    },
    { source: "aristotle-physics", ref: "239b30", from: "VI.9", start: "The third is that already given above", end: "the conclusion will not follow." },
    {
      source: "aristotle-physics",
      part: 5,
      title: "Aristotle, *Physics* VI.9, 239b33–240a18",
      ref: "239b33",
      from: "VI.9",
      start: "The fourth argument is that concerning",
      end: "presupposed the aforesaid fallacious assumption.",
    },
    { source: "burnet-younger-eleatics", part: 6, title: "Zeno, fragments B1–B3, quoted by Simplicius", ref: "B1", from: "fr.1", count: 1 },
    { source: "burnet-younger-eleatics", ref: "B2", from: "fr.2", count: 1 },
    { source: "burnet-younger-eleatics", ref: "B3", from: "fr.3", count: 1 },
  ],
};
