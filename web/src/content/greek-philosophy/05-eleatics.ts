import type { RoadmapNode } from "../types";
import { burnet, jowett } from "./translations";

export const eleatics: RoadmapNode = {
  id: "eleatics",
  title: "Parmenides & Zeno",
  era: "c. 515–430 BC",
  summary:
    "At Elea in southern Italy, Parmenides argued from reason alone that what is cannot come to be, change or be divided. Zeno defended him with paradoxes of motion and plurality that are still argued over.",
  position: { x: 1, y: 3 },
  requires: ["pythagoras-xenophanes", "heraclitus"],
  lessons: [
    {
      id: "parmenides",
      title: "Parmenides: The Way of Truth",
      minutes: 30,
      access: "free",
      intro: [
        "Parmenides of Elea (born around 515 BC) wrote a poem in hexameters, the meter of Homer. A young man rides a chariot to an unnamed goddess, who promises to teach him both 'the unshaken heart of well-rounded truth' and the opinions of mortals, 'in which there is no true trust'.",
        "The truth turns out to be a ruthless argument. You can think and speak only of what is; what is not cannot be thought. It follows that coming to be, perishing, change and plurality are all impossible. Almost every later Greek philosopher had to answer him.",
      ],
      reading: {
        author: "Parmenides of Elea",
        work: "*On Nature*, fragments (DK 28)",
        date: "early 5th century BC",
        selection:
          "B1 (the proem); B2, B3, B6 and B7 (the routes of inquiry); B8 (the signs of what is, and the turn to mortal opinions)",
        locatorSystem: "Diels–Kranz (DK) numbers, with line numbers within B8",
        translations: [
          burnet,
          {
            translator: "David Gallop",
            title: "Parmenides of Elea: Fragments",
            year: 1984,
            publicDomain: false,
          },
          {
            translator: "A. H. Coxon",
            title: "The Fragments of Parmenides (rev. ed.)",
            year: 2009,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "B1",
          title: "The journey to the goddess",
          summary:
            "Mares carry the young man along the road of the goddess, escorted by the daughters of the Sun, through the gates of the paths of Night and Day, whose keys are kept by Justice. The goddess welcomes him and sets out what he will learn.",
          points: ["Truth is framed as a revelation, yet the goddess tells him to judge her account by reasoning (B7)."],
        },
        {
          locator: "B2, B3",
          title: "Two routes",
          summary:
            "Only two routes of inquiry can be thought. One, that it is and cannot not be, is the path of persuasion, which follows truth. The other, that it is not and must not be, cannot be learned at all, since you could neither know nor point out what is not. 'For the same thing is for thinking and for being.'",
          points: [
            "What is the subject of 'it is'? Parmenides never says. Readers argue over whether 'is' means exists, is something, or is true.",
          ],
        },
        {
          locator: "B6, B7",
          title: "Two-headed mortals",
          summary:
            "Mortals who know nothing wander two-headed, carried along deaf and blind, believing that being and not being are the same and not the same. Do not let habit force your eye, ear and tongue down this road; judge by reasoning the much-contested refutation.",
          points: [
            "A third route, mixing being and not being: the road of ordinary belief. Some think it is aimed at Heraclitus.",
            "An early, explicit rejection of the senses in favor of argument.",
          ],
        },
        {
          locator: "B8.1–21",
          title: "Ungenerated and imperishable",
          summary:
            "There are many signs on the route 'it is': it is ungenerated and imperishable, whole, unique, unshaken and complete. It never was, nor will be, since it is now, all together, one, continuous. What birth could you look for? It cannot grow out of what is not, and why would it start at one time rather than another?",
          points: [
            "'Why then rather than earlier?' is an early form of the principle of sufficient reason.",
            "Past and future are ruled out; only an unchanging 'now' remains.",
          ],
        },
        {
          locator: "B8.22–49",
          title: "Indivisible, motionless, like a sphere",
          summary:
            "It is not divisible, since it is all alike. It stays motionless in the bonds of mighty chains. It is complete, like the bulk of a well-rounded sphere, equally balanced from the middle in every direction.",
          points: ["Is the sphere literal, so that what is has a shape, or a simile for perfect completeness?"],
        },
        {
          locator: "B8.50–61",
          title: "The opinions of mortals",
          summary:
            "The goddess ends her trustworthy account of truth and turns to the 'deceptive order' of her words: a cosmology built from Light and Night, the opinions of mortals.",
          points: ["Why teach a cosmology you have just declared false? This is the great puzzle of the poem."],
        },
      ],
      questions: [
        "You can think about things that do not exist, like unicorns or tomorrow's weather. How would Parmenides reply?",
        "If an argument proves that change is impossible, should you reject the argument or the evidence of your senses?",
      ],
    },
    {
      id: "zeno",
      title: "Zeno's Paradoxes",
      minutes: 25,
      access: "free",
      intro: [
        "Zeno of Elea, Parmenides' younger associate, wrote a book of arguments meant to show that common sense is in worse trouble than Parmenides: if there are many things, or if anything moves, contradictions follow.",
        "His paradoxes of motion (the racecourse, Achilles and the tortoise, the arrow and the moving rows) survive mainly in Aristotle's attempts to refute them. They have shaped thinking about infinity, space and time ever since.",
      ],
      reading: {
        author: "Plato, Aristotle and Simplicius",
        work: "Zeno's paradoxes (DK 29)",
        date: "5th century BC, reported from the 4th century BC onward",
        selection: "Plato, *Parmenides* 127b–128e; Aristotle, *Physics* VI.9 239b5–240a18; Zeno B1–B3, quoted by Simplicius",
        locatorSystem: "Stephanus pages, Bekker numbers and Diels–Kranz (DK) numbers",
        translations: [
          jowett,
          {
            translator: "Mary Louise Gill and Paul Ryan",
            title: "Parmenides",
            year: 1996,
            publicDomain: false,
          },
          {
            translator: "Robin Waterfield",
            title: "Aristotle: Physics",
            year: 1996,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "Parmenides 127b–128e",
          title: "What Zeno was doing",
          summary:
            "In Plato's dialogue, Zeno explains that his book defends Parmenides against those who mock him: the hypothesis that there are many things leads to consequences even more absurd than the hypothesis that all is one.",
          points: [
            "Reduction to absurdity: assume your opponent's view and derive a contradiction from it.",
            "Aristotle reportedly called Zeno the inventor of dialectic.",
          ],
        },
        {
          locator: "Physics 239b11–14",
          title: "The racecourse",
          summary:
            "Motion is impossible, because a runner must first reach the halfway point, then half of the remaining distance, and so on without end, and no one can pass through infinitely many points in a finite time.",
          points: [
            "Aristotle's answer: time can be divided just as distance can, so infinitely many shrinking stretches of distance take infinitely many shrinking stretches of time.",
          ],
        },
        {
          locator: "Physics 239b14–29",
          title: "Achilles and the tortoise",
          summary:
            "The slowest runner will never be overtaken by the fastest, because the pursuer must first reach the point the pursued has just left, by which time the pursued has moved on.",
          points: [
            "The same structure as the racecourse. The modern answer uses convergent series: infinitely many ever-shorter intervals can add up to a finite time.",
          ],
        },
        {
          locator: "Physics 239b5–9, 239b30–33",
          title: "The arrow",
          summary:
            "A flying arrow is at rest. At every instant it occupies a space equal to itself, and what occupies a space equal to itself is not moving; so it is at rest at every instant of its flight.",
          points: ["Aristotle replies that time is not made up of indivisible instants. Does motion at an instant make sense?"],
        },
        {
          locator: "Physics 239b33–240a18",
          title: "The moving rows",
          summary:
            "Two rows of bodies pass each other in opposite directions beside a stationary row. Zeno concludes that half a given time is equal to double that time.",
          points: ["Often read as an argument against the idea that space and time come in smallest, indivisible units."],
        },
        {
          locator: "DK 29B1–B3",
          title: "Paradoxes of plurality",
          summary:
            "If there are many things, they must be exactly as many as they are, and so finite in number; but between any two there is always another, so they are infinite in number. And they must be both so small as to have no size and so large as to be unlimited.",
          points: ["Infinity and continuity become philosophical problems for the first time."],
        },
      ],
      questions: [
        "Does the mathematical fact that 1/2 + 1/4 + 1/8 + … = 1 fully answer the racecourse? What might Zeno say back?",
        "Zeno only shows that his opponents' view leads to absurdity. Is that enough to establish Parmenides' view?",
      ],
    },
  ],
};
