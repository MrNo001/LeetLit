// Heraclitus in Burnet's translation. Burnet numbers the fragments as Bywater did;
// each is labelled here with its Diels–Kranz number.

const NUMBERING = "Burnet numbers the fragments in Bywater's order; here each is labelled with its Diels–Kranz number.";

/** Burnet's fragment `bywater`, labelled `dk`. */
const fr = (bywater, dk, extra = {}) => ({ source: "burnet-heraclitus", from: `fr.${bywater}`, count: 1, ref: dk, ...extra });

export default {
  "heraclitus-logos": [
    fr(2, "B1", { part: 1 }),
    fr(92, "B2"),
    fr(1, "B50", { part: 2 }),
    fr(69, "B60", { part: 3 }),
    fr(52, "B61"),
    fr(78, "B88"),
    fr(70, "B103"),
    fr(45, "B51", { part: 4 }),
    fr(44, "B53"),
    fr(62, "B80"),
    fr(11, "B93", { part: 5 }),
    fr(10, "B123", { note: NUMBERING }),
  ],
  "heraclitus-flux": [
    fr(20, "B30", { part: 1, title: "Heraclitus, fragments" }),
    fr(21, "B31a", { part: 2 }),
    fr(23, "B31b"),
    fr(22, "B90"),
    fr(41, "B12, B91", { part: 3 }),
    { source: "plato-cratylus", title: "Plato, *Cratylus* 402a", from: "402a", end: "into the same stream." },
    fr(68, "B36", { part: 4, title: "Heraclitus, fragments" }),
    fr(71, "B45"),
    fr(73, "B117"),
    fr(74, "B118"),
    fr(80, "B101", { part: 5 }),
    fr(121, "B119", { note: NUMBERING }),
  ],
};
