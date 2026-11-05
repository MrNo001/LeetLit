// The Sophists: Protagoras in Diogenes Laertius (Hicks), Plato (Fowler, Lamb) and Herodotus (Godley);
// Gorgias's Helen in Van Hook's translation, with the sections it leaves out and On What Is Not in LeetLit's.

import { helen11to14, helen16to18, helenNote, onWhatIsNot, onWhatIsNotNote } from "../leetlit.mjs";

export default {
  protagoras: [
    { source: "diogenes-laertius", part: 1, title: "Diogenes Laertius, *Lives* IX.51", from: "9.8.51", end: 'of things that are not that they are not."' },
    {
      source: "diogenes-laertius",
      part: 2,
      title: "Diogenes Laertius, *Lives* IX.51–52",
      ref: "51",
      from: "9.8.51",
      start: "In another work he began thus",
      end: "who had copies in their possession.",
    },
    {
      source: "plato-theaetetus",
      part: 3,
      title: "Plato, *Theaetetus* 151e–152c",
      from: "151d",
      to: "152d",
      start: "Well then, Socrates, since you are so urgent",
    },
    { source: "plato-theaetetus", part: 4, title: "Plato, *Theaetetus* 161c–162a", from: "161c", end: "to follow your suggestions very carefully." },
    { source: "plato-theaetetus", title: "Plato, *Theaetetus* 170e–171c", from: "170e", end: "we are running my friend too hard." },
    {
      source: "plato-protagoras",
      part: 5,
      title: "Plato, *Protagoras* 320c–328d",
      from: "320b",
      to: { text: "After this great and fine performance" },
      start: "So if you can demonstrate to us more explicitly",
    },
    { source: "herodotus", part: 6, title: "Herodotus, *Histories* 3.38", from: "3.38", to: "3.39" },
  ],
  gorgias: [
    { source: "gorgias-helen", title: "Gorgias, *Encomium of Helen* 1–10", from: "§1", to: "§15", parts: [[1, "§1"], [2, "§6"], [3, "§8"]] },
    { source: "leetlit", title: "*Encomium of Helen* 11–14", blocks: helen11to14, note: helenNote },
    { source: "gorgias-helen", part: 4, title: "*Encomium of Helen* 15", from: "§15", to: "§19" },
    { source: "leetlit", title: "*Encomium of Helen* 16–18", blocks: helen16to18 },
    { source: "gorgias-helen", title: "*Encomium of Helen* 19–21", from: "§19", end: "my own delectation.", parts: [[5, "§21"]] },
    { source: "leetlit", part: 6, title: "Sextus Empiricus, *Against the Logicians* I.65–87", blocks: onWhatIsNot, note: onWhatIsNotNote },
  ],
};
