import type { Track } from "../types";
import { foundations } from "./01-foundations";
import { milesians } from "./02-milesians";
import { pythagorasXenophanes } from "./03-pythagoras-xenophanes";
import { heraclitus } from "./04-heraclitus";
import { eleatics } from "./05-eleatics";
import { sophists } from "./06-sophists";
import { pluralistsAtomists } from "./07-pluralists-atomists";
import { socrates } from "./08-socrates";
import { platoKnowledge } from "./09-plato-knowledge";
import { platoRepublic } from "./10-plato-republic";
import { aristotleNature } from "./11-aristotle-nature";
import { aristotleEthics } from "./12-aristotle-ethics";
import { hellenistic } from "./13-hellenistic";

export const greekPhilosophy: Track = {
  id: "greek-philosophy",
  discipline: "philosophy",
  title: "Greek Philosophy",
  tagline: "From Thales to the Stoics: the questions that started Western philosophy.",
  description:
    "Thirteen topics, from the first attempts to explain nature without myth to the schools that turned philosophy into a way of life. Topics higher on the map prepare you for the ones below, but you can open any of them at any time.",
  columns: 3,
  nodes: [
    foundations,
    milesians,
    pythagorasXenophanes,
    heraclitus,
    eleatics,
    sophists,
    pluralistsAtomists,
    socrates,
    platoKnowledge,
    platoRepublic,
    aristotleNature,
    aristotleEthics,
    hellenistic,
  ],
};
