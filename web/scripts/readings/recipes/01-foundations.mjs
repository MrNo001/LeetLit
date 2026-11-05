// Foundations: the prologue of Diogenes Laertius (Hicks) and the opening of the Theogony (Evelyn-White).

export default {
  "what-is-greek-philosophy": [
    {
      source: "diogenes-laertius",
      from: "1.prol.1",
      to: "1.1",
      parts: [[1, "1.prol.1"], [2, "1.prol.12"], [3, "1.prol.13"], [4, "1.prol.16"], [5, "1.prol.18"]],
    },
  ],
  // Lines 116 and 139 fall inside the translation's groups of lines, so those parts start at a phrase and give their line number.
  "hesiod-theogony": [
    {
      source: "hesiod-theogony",
      end: "vengeance for it would come afterwards.",
      parts: [[1, "1"], [2, "35"], [3, { text: "In truth at first Chaos" }, "116"], [4, { text: "And again, she bore the Cyclopes" }, "139"]],
    },
  ],
};
