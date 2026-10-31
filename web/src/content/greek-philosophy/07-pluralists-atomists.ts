import type { RoadmapNode } from "../types";
import { burnet, waterfieldFirst } from "./translations";

export const pluralistsAtomists: RoadmapNode = {
  id: "pluralists-atomists",
  title: "Pluralists & Atomists",
  era: "c. 495–370 BC",
  summary:
    "How to save the visible world after Parmenides: make reality many unchanging things that mix and separate. Empedocles' four roots, Anaxagoras' Mind, and the atoms and void of Leucippus and Democritus.",
  position: { x: 2, y: 4 },
  requires: ["eleatics"],
  lessons: [
    {
      id: "empedocles-anaxagoras",
      title: "Empedocles and Anaxagoras: Mixture and Mind",
      minutes: 30,
      access: "free",
      intro: [
        "Empedocles of Acragas and Anaxagoras of Clazomenae both accepted Parmenides' rule that nothing comes from nothing and nothing passes into nothing. What we call birth and death, they argued, is only the mixing and separating of ingredients that are themselves eternal.",
        "Empedocles posited four 'roots' (earth, water, air and fire) moved by two forces, Love and Strife. Anaxagoras posited countless ingredients, a portion of everything in everything, set in motion by Mind (*nous*). Socrates, Plato tells us, read Anaxagoras with excitement and was bitterly disappointed.",
      ],
      reading: {
        author: "Empedocles and Anaxagoras, with Plato",
        work: "Fragments (DK 31, 59)",
        date: "5th century BC",
        selection: "Empedocles B6, B8, B17 and B117; Anaxagoras B1, B12 and B17; Plato, *Phaedo* 97b–99c",
        locatorSystem: "Diels–Kranz (DK) numbers and Stephanus pages",
        translations: [
          burnet,
          {
            translator: "Brad Inwood",
            title: "The Poem of Empedocles (rev. ed.)",
            year: 2001,
            publicDomain: false,
          },
          {
            translator: "Patricia Curd",
            title: "Anaxagoras of Clazomenae",
            year: 2007,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "Empedocles B6",
          title: "The four roots",
          summary:
            "'Hear first the four roots of all things': shining Zeus, life-bringing Hera, Aidoneus and Nestis, divine names for fire, air, earth and water. Which god stands for which element was disputed even in antiquity.",
          points: ["The origin of the four elements, which dominated Western science until modern chemistry."],
        },
        {
          locator: "B8, B17",
          title: "Love and Strife",
          summary:
            "There is no birth of any mortal thing and no end in death, only mixing and the separating of what was mixed; 'birth' is just a name people use. Empedocles tells a double story: at one time things grow into one out of many, at another they grow apart into many from one. Love brings them together and Strife drives them apart, in an endless cycle.",
          points: [
            "Causes of motion, not just a stuff. Aristotle credits Empedocles as one of the first to see that change needs a mover.",
          ],
        },
        {
          locator: "B117",
          title: "Reincarnation",
          summary: "'For already I have been a boy and a girl, a bush and a bird, and a leaping fish from the sea.'",
          points: [
            "The poet of physics was also a religious teacher. A papyrus published in 1999, the Strasbourg papyrus, showed the two sides were more closely tied than scholars had thought.",
          ],
        },
        {
          locator: "Anaxagoras B1, B17",
          title: "All things together",
          summary:
            "'All things were together, unlimited in number and in smallness.' The Greeks are wrong to speak of coming to be and passing away: nothing comes to be or passes away; things are mixed together and separated.",
          points: [
            "Elsewhere he says there is a portion of everything in everything (B6, B11). That explains how bread can become flesh and hair.",
          ],
        },
        {
          locator: "B12",
          title: "Mind",
          summary:
            "Everything else has a portion of everything, but Mind is unlimited, self-ruling and mixed with nothing. It is the finest and purest of all things, has all knowledge about everything, and set the whole revolution of the cosmos going.",
          points: ["The first explicit cosmic Mind in Greek philosophy."],
        },
        {
          locator: "Phaedo 97b–99c",
          title: "Socrates' disappointment",
          summary:
            "Socrates says he was delighted to hear that Mind arranges everything, expecting Anaxagoras to explain why each thing is best as it is. Instead he found airs, aethers and waters, as if one explained why Socrates sits in prison by his bones and sinews rather than by his choice to stay.",
          points: ["The demand for explanation by purpose: the bridge to Plato's Forms and Aristotle's final cause."],
        },
      ],
      questions: [
        "Empedocles' Love and Strife are forces, not stuffs. What problem do they solve that Thales' water could not?",
        "Is Socrates right that a cosmic Mind ought to explain why things are best as they are?",
      ],
    },
    {
      id: "atomists",
      title: "Leucippus and Democritus: Atoms and the Void",
      minutes: 25,
      access: "free",
      intro: [
        "Leucippus and his pupil Democritus of Abdera (c. 460–370 BC) gave the most radical answer to Parmenides. What is, is real, but it is broken into countless tiny, solid bodies that cannot be cut: atoms (*atomos*, 'uncuttable'). What is not is real too: the void through which the atoms move.",
        "Every quality we perceive, from color to taste to warmth, results from atoms of different shapes, arrangements and positions. Democritus also wrote widely on ethics, recommending a cheerful, moderate life. A century later Epicurus will build a whole philosophy on this foundation.",
      ],
      reading: {
        author: "Leucippus and Democritus, with Aristotle",
        work: "Fragments and reports (DK 67, 68)",
        date: "5th–4th centuries BC",
        selection:
          "Aristotle, *Metaphysics* A.4 985b4–20 and *On Generation and Corruption* I.8 325a23–b5; Democritus B9, B117 and B125; the ethical fragments B3, B171 and B191",
        locatorSystem: "Bekker numbers and Diels–Kranz (DK) numbers",
        translations: [
          burnet,
          {
            translator: "C. C. W. Taylor",
            title: "The Atomists: Leucippus and Democritus",
            year: 1999,
            publicDomain: false,
          },
          waterfieldFirst,
        ],
      },
      breakdown: [
        {
          locator: "Metaphysics 985b4–20",
          title: "The full and the empty",
          summary:
            "Leucippus and Democritus say the elements are the full and the empty, calling one 'what is' and the other 'what is not'. Atoms differ only in shape, arrangement and position, as A differs from N in shape, AN from NA in arrangement, and Z from N in position.",
          points: ["The alphabet analogy: a few kinds of difference, endless combinations."],
        },
        {
          locator: "On Generation and Corruption 325a23–b5",
          title: "Answering the Eleatics",
          summary:
            "Leucippus, Aristotle says, thought he had arguments that agreed with perception and would not abolish coming to be, passing away, motion or plurality. He granted the Eleatics that there is no motion without a void, but held that the void, though it is 'what is not', is real.",
          points: [
            "Atomism keeps Parmenides' account of what is (unchanging, uncuttable) and denies only that what is not is unthinkable.",
          ],
        },
        {
          locator: "B9, B125",
          title: "By convention",
          summary:
            "'By convention sweet, by convention bitter, by convention hot, by convention cold, by convention color; in reality, atoms and void.' But the senses answer back: 'Wretched mind, you take your evidence from us and then you overthrow us? Our overthrow is your fall.'",
          points: [
            "The first distinction between qualities things really have and qualities that depend on us, later called primary and secondary qualities.",
            "Democritus sees the cost: the theory undercuts the evidence it rests on.",
          ],
        },
        {
          locator: "B117",
          title: "Truth in the depths",
          summary: "'In reality we know nothing, for truth is in the depths.'",
          points: ["A skeptical strand that later skeptics claimed as part of their ancestry."],
        },
        {
          locator: "B3, B171, B191",
          title: "Cheerfulness",
          summary:
            "Good spirits (*euthymia*) come from moderation in pleasure and a life in proportion. Whoever wants to be cheerful should not take on too many activities. Happiness does not live in herds of cattle or in gold; the soul is the dwelling place of one's fate.",
          points: ["An ethics of inner calm that anticipates the Hellenistic schools."],
        },
      ],
      questions: [
        "If colors exist only 'by convention', is the red of an apple less real than its shape? Why?",
        "Can a world of atoms moving by necessity leave room for choice? Keep this question for Epicurus.",
      ],
    },
  ],
};
