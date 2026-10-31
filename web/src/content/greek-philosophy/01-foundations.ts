import type { RoadmapNode } from "../types";
import { hicksLives } from "./translations";

export const foundations: RoadmapNode = {
  id: "foundations",
  title: "From Myth to Logos",
  era: "Start here",
  summary:
    "Where Greek philosophy came from, how its story was first told, and the picture of the world it set out to replace: Hesiod's family tree of the gods.",
  position: { x: 1, y: 0 },
  requires: [],
  lessons: [
    {
      id: "what-is-greek-philosophy",
      title: "What Was Greek Philosophy?",
      minutes: 25,
      access: "free",
      intro: [
        "Greek philosophy runs for about a thousand years: from Thales of Miletus, said to have predicted the solar eclipse of 585 BC, to AD 529, when the emperor Justinian banned pagans from teaching, the date conventionally given for the closing of the Athenian schools. Its thinkers asked what the world is made of, what can be known and how a person should live, and they answered with arguments rather than appeals to tradition.",
        "This lesson is your map. The reading is the oldest surviving attempt to tell the history of philosophy as a whole, written some eight centuries after Thales. It sorts philosophers into schools and lines of teachers, and divides philosophy into physics, ethics and logic, categories you will meet again and again.",
        "You will also meet the three citation systems used throughout this roadmap. Fragments of the early philosophers are cited by Diels–Kranz (DK) number: DK 22B30 means chapter 22 (Heraclitus), section B (his own words), fragment 30. Plato is cited by Stephanus page and section (*Republic* 514a), Aristotle by Bekker page, column and line (*Nicomachean Ethics* 1094a1).",
      ],
      reading: {
        author: "Diogenes Laertius",
        work: "*Lives of Eminent Philosophers*, Prologue",
        date: "3rd century AD",
        selection: "Book I, sections 1–21",
        locatorSystem: "Book and section numbers",
        translations: [
          hicksLives,
          {
            translator: "Pamela Mensch",
            title: "Lives of the Eminent Philosophers (ed. James Miller)",
            year: 2018,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "I.1–11",
          title: "Did philosophy begin in Greece?",
          summary:
            "Diogenes reports the claim that philosophy began among non-Greeks: the Persian Magi, the Chaldaeans of Babylon, the 'naked sages' of India and the Druids of the Celts. He rejects it and insists that philosophy, like its very name, is Greek.",
          points: [
            "Modern scholars take Near Eastern influence on early Greek science and cosmology seriously. The question is still open.",
            "Diogenes is a late and uncritical compiler, but for many philosophers he is one of our main sources. Treat him as a witness, not an authority.",
          ],
        },
        {
          locator: "I.12",
          title: "The name 'philosophy'",
          summary:
            "Pythagoras is said to have been the first to call himself a *philosophos*, a lover of wisdom, because no human is wise; only a god is. Before him the wise were called *sophoi*, as in the Seven Sages.",
          points: [
            "The story is probably a later legend, but the contrast it draws, between having wisdom and loving it, shapes how Plato's Socrates describes himself.",
          ],
        },
        {
          locator: "I.13–15",
          title: "Two family trees",
          summary:
            "Philosophy has two starting points: an Ionian line beginning with Anaximander and an Italian line beginning with Pythagoras. Diogenes traces each as a succession of teachers and pupils down to the schools of later times.",
          points: [
            "The 'succession' (*diadochē*) was the standard way to organize the history of philosophy in antiquity. Many of its links are guesses.",
            "Compare this roadmap, which is a tree of topics rather than of teachers.",
          ],
        },
        {
          locator: "I.16–17",
          title: "Dogmatists, doubters and school names",
          summary:
            "Some philosophers assert doctrines; others suspend judgment. Some wrote books; others, like Socrates and Pyrrho, wrote nothing. Schools take their names from cities, places, founders or habits: the Academy and the Stoa from buildings, the Peripatetics from walking about, the Cynics from a jibe.",
        },
        {
          locator: "I.18–21",
          title: "The three parts of philosophy",
          summary:
            "Philosophy has three parts: physics (the world and what is in it), ethics (life and what concerns us) and dialectic (the reasoning both rely on). Physics, Diogenes says, lasted until Archelaus, ethics began with Socrates, and dialectic goes back to Zeno of Elea.",
          points: [
            "The three-part division was standard from the Hellenistic schools onward. This roadmap follows the same arc: nature first, then the turn to human life with the Sophists and Socrates.",
          ],
        },
      ],
      questions: [
        "Diogenes divides philosophy into physics, ethics and dialectic. Which of your own big questions fall under each?",
        "What evidence would settle whether philosophy 'began' in Greece? What would beginning even mean here?",
      ],
    },
    {
      id: "hesiod-theogony",
      title: "Hesiod and the World Before Philosophy",
      minutes: 30,
      access: "free",
      intro: [
        "Before anyone asked what the world is made of, Greeks asked where it came from, and Hesiod's *Theogony* (around 700 BC) gave the most influential answer: a family tree of gods, from Chaos and Earth down to the reign of Zeus. The poem explains the world through birth, marriage and violent succession.",
        "We read it as the baseline philosophy pushed against. Historians once described the change as a move 'from myth to logos', from story to reasoned account. The slogan is too neat: early philosophers kept gods, wrote in verse and borrowed Hesiod's questions. But they changed what counts as an answer, and seeing what they kept makes it clearer what they changed.",
      ],
      reading: {
        author: "Hesiod",
        work: "*Theogony*",
        date: "c. 700 BC",
        selection: "Lines 1–210: the Muses and the first generations of gods",
        locatorSystem: "Line numbers",
        translations: [
          {
            translator: "Hugh G. Evelyn-White",
            title: "Hesiod, the Homeric Hymns and Homerica (Loeb Classical Library)",
            year: 1914,
            publicDomain: true,
          },
          {
            translator: "M. L. West",
            title: "Theogony and Works and Days",
            year: 1988,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "1–34",
          title: "The Muses on Helicon",
          summary:
            "Hesiod describes his calling. The Muses met him while he was herding sheep below Mount Helicon, gave him a laurel staff and breathed a divine voice into him. They warn that they know how to tell many lies that sound like the truth, and how to speak the truth when they wish.",
          points: [
            "Truth here is a gift from the gods, and even that gift might deceive. Philosophers will look for truths that anyone can check by reasoning.",
          ],
        },
        {
          locator: "35–115",
          title: "Hymn and invocation",
          summary:
            "A hymn to the Muses, daughters of Zeus and Memory, who sing of the gods and give kings persuasive speech. Hesiod then asks them to tell how the gods, the earth, the rivers and the stars came to be, and which of them came first.",
          points: [
            "'What came first?' is exactly the question the Milesian philosophers will answer in a new way.",
          ],
        },
        {
          locator: "116–138",
          title: "First came Chaos",
          summary:
            "First came Chaos, a yawning gap; then broad Earth (Gaia), misty Tartarus and Eros. From Chaos came Erebus and Night. Earth bore Sky (Ouranos) to cover her, then the mountains and the Sea, and then, with Sky, the Titans.",
          points: [
            "Chaos is not disorder but a gap or opening. Ask whether anything here is explained, or only named.",
            "Eros, desire, appears at the very start, as the force behind generation.",
          ],
        },
        {
          locator: "139–210",
          title: "The overthrow of Sky",
          summary:
            "Sky hides his children away inside Earth. Earth makes a sickle, and her youngest son, Kronos, ambushes and castrates his father. From the blood spring the Furies and the Giants; from the severed parts, cast into the sea, rises Aphrodite.",
          points: [
            "Cosmic order comes about through crime and punishment between generations. Compare Anaximander's fragment in the next topic, where things 'pay penalty' to one another.",
          ],
        },
      ],
      questions: [
        "The Muses can tell lies that resemble the truth. How could you tell the difference without asking the Muses?",
        "Hesiod explains the world with a family tree. What would a better explanation have to do?",
      ],
    },
  ],
};
