// The Republic in Shorey's Loeb translation. Book marks ("2", "6", …) are used
// where a part starts with a book, so the book's heading opens that part.
// Books VI–X come from Shorey's second volume (1935), which is still in copyright.

export default {
  "republic-1-2": [
    {
      source: "plato-republic",
      from: "1",
      to: "367e",
      parts: [[1, "1"], [2, "331d"], [3, "336b"], [4, "2"], [5, "358e"], [6, "362d"]],
      // A citation of Euripides that the encoders left in the text (365c).
      fixes: [["’, and Eur. Orest. 236 as the wise", "’, as the wise"]],
    },
  ],
  "republic-2-4": [
    { source: "plato-republic", from: "367e", to: "5", parts: [[1, "367e"], [2, "372e"], [3, "376c"], [4, "403c"], [5, "427c"], [6, "434d"]] },
  ],
  "republic-5-7": [
    { source: "plato-republic", title: "Plato, *Republic* V", from: "5", to: "6", parts: [[1, "5"], [2, "471c"]] },
    { source: "plato-republic-vi-x", title: "Plato, *Republic* VI–VII", from: "6", to: "8", parts: [[3, "6"], [4, "502c"], [5, "7"], [6, "521c"]] },
  ],
  "republic-8-10": [
    {
      source: "plato-republic-vi-x",
      from: "8",
      parts: [[1, "8"], [2, "550c"], [3, "555b"], [4, "562a"], [5, "576c"], [6, "10"], [7, "608c"]],
      fixes: [["self- control", "self-control"]],
    },
  ],
};
