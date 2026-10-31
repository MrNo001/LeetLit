import type { Translation } from "../types";

// Translations shared by several lessons. One-off translations live in the node files.

export const burnet: Translation = {
  translator: "John Burnet",
  title: "Early Greek Philosophy (3rd ed.)",
  year: 1920,
  publicDomain: true,
};

export const kirkRavenSchofield: Translation = {
  translator: "G. S. Kirk, J. E. Raven and M. Schofield",
  title: "The Presocratic Philosophers (2nd ed.)",
  year: 1983,
  publicDomain: false,
};

export const waterfieldFirst: Translation = {
  translator: "Robin Waterfield",
  title: "The First Philosophers",
  year: 2000,
  publicDomain: false,
};

export const jowett: Translation = {
  translator: "Benjamin Jowett",
  title: "The Dialogues of Plato",
  year: 1871,
  publicDomain: true,
};

export const fowler: Translation = {
  translator: "Harold North Fowler",
  title: "Plato I (Loeb Classical Library)",
  year: 1914,
  publicDomain: true,
};

export const grubeCooper: Translation = {
  translator: "G. M. A. Grube, rev. John M. Cooper",
  title: "Five Dialogues (2nd ed.)",
  year: 2002,
  publicDomain: false,
};

export const republicTranslations: Translation[] = [
  jowett,
  {
    translator: "G. M. A. Grube, rev. C. D. C. Reeve",
    title: "Republic",
    year: 1992,
    publicDomain: false,
  },
  {
    translator: "Allan Bloom",
    title: "The Republic of Plato",
    year: 1968,
    publicDomain: false,
  },
];

export const rossEthics: Translation = {
  translator: "W. D. Ross",
  title: "Nicomachean Ethics",
  year: 1908,
  publicDomain: true,
};

export const irwinEthics: Translation = {
  translator: "Terence Irwin",
  title: "Nicomachean Ethics (2nd ed.)",
  year: 1999,
  publicDomain: false,
};

export const hicksLives: Translation = {
  translator: "R. D. Hicks",
  title: "Lives of Eminent Philosophers (Loeb Classical Library)",
  year: 1925,
  publicDomain: true,
};
