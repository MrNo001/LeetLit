// Hellenistic philosophy: Epicurus as Diogenes Laertius preserves him (Hicks), Epictetus's Handbook (Higginson)
// and Sextus Empiricus (Patrick).

export default {
  epicurus: [
    {
      source: "diogenes-laertius",
      title: "Epicurus, *Letter to Menoeceus* (Diogenes Laertius, *Lives* X.122–135)",
      from: { text: "Epicurus to Menoeceus, greeting" },
      end: 'living in the midst of immortal blessings."',
      parts: [
        [1, { text: "Epicurus to Menoeceus" }],
        [2, "10.1.123"],
        [3, { text: "Accustom thyself to believe that death" }],
        [4, { text: "We must also reflect that of desires" }],
        [5, { text: "Of all this the beginning and the greatest good is prudence" }],
      ],
    },
    {
      source: "diogenes-laertius",
      part: 6,
      title: "Epicurus, *Principal Doctrines* 1–5 (Diogenes Laertius, *Lives* X.139–140)",
      from: "10.1.139",
      to: { text: "6. In order to obtain security" },
    },
  ],
  // The whole Handbook; each part starts at the chapter its summary begins with.
  epictetus: [
    {
      source: "epictetus-enchiridion",
      parts: [[1, "1"], [2, "3"], [3, "5"], [4, "8"], [5, "17"], [6, "48"]],
      // Scanning slips, and the "-H." left after the citations in chapter 53.
      fixes: [
        ["ever} creature", "every creature"],
        ["be .nobody", "be nobody"],
        ["his- correction", "his correction"],
        ["time, -that", "time,—that"],
        ["drink, -the", "drink,—the"],
        ["itself,- for", "itself,—for"],
        ["trembling, -but", "trembling,—but"],
        ["” -H.", "”"],
      ],
    },
  ],
  // Patrick's chapters, which carry the section numbers of Outlines of Pyrrhonism I in the margin.
  "sextus-empiricus": [
    { source: "sextus-patrick", part: 1, from: "ch1", to: "ch2" },
    { source: "sextus-patrick", part: 2, from: "ch4", to: "ch5" },
    { source: "sextus-patrick", part: 3, from: "ch6", to: "ch13" },
    { source: "sextus-patrick", part: 4, from: "ch14", to: { text: "The First Trope" } },
    { source: "sextus-patrick", part: 5, from: "ch15", to: "ch16" },
  ],
};
