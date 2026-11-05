// Aristotle on logic, nature and the soul, in the Oxford translation from the Internet Classics Archive.

export default {
  "aristotle-logic": [
    {
      source: "aristotle-categories",
      title: "Aristotle, *Categories* 1–5",
      from: "1",
      to: "6",
      parts: [[1, "1"], [2, "2"], [3, "4"], [4, "5"]],
      fixes: [["genus 'animal,—are", "genus 'animal'—are"]],
    },
    { source: "aristotle-prior-analytics", part: 5, title: "Aristotle, *Prior Analytics* I.1", from: "I.1", to: "I.2" },
    { source: "aristotle-prior-analytics", part: 6, title: "*Prior Analytics* I.4", from: "I.4", to: "I.5" },
  ],
  "aristotle-physics": [
    {
      source: "aristotle-physics",
      title: "*Physics*, Book II",
      from: "II",
      to: "III",
      parts: [[1, "II.1"], [2, "II.2"], [3, "II.3"], [4, "II.4"], [5, "II.8"], [6, "II.9"]],
    },
  ],
  // Smith's translation is in copyright in the US until 1 January 2027, so this reading is built into private/.
  "aristotle-de-anima": [
    { source: "aristotle-on-the-soul", title: "*On the Soul* II.1–3", from: "II.1", to: "II.4", parts: [[1, "II.1"], [2, "II.2"]] },
    { source: "aristotle-on-the-soul", part: 3, title: "*On the Soul* II.12", from: "II.12", to: "III" },
    { source: "aristotle-on-the-soul", title: "*On the Soul* III.4–5", from: "III.4", to: "III.6", parts: [[4, "III.4"], [5, "III.5"]] },
  ],
};
