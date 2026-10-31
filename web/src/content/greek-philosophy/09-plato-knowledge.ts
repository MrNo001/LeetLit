import type { RoadmapNode } from "../types";
import { fowler, grubeCooper, jowett } from "./translations";

export const platoKnowledge: RoadmapNode = {
  id: "plato-knowledge",
  title: "Plato: Knowledge & the Soul",
  era: "c. 385–370 BC",
  summary:
    "Plato moves from Socrates' questions to answers of his own: learning is the recollection of what the soul already knows, the soul is immortal, and the most real things are unchanging Forms.",
  position: { x: 0, y: 6 },
  requires: ["socrates"],
  lessons: [
    {
      id: "meno",
      title: "Meno: Can Virtue Be Taught?",
      minutes: 50,
      access: "free",
      intro: [
        "Meno, a rich young Thessalian, opens with a blunt question: can virtue be taught, or does it come by practice, by nature or in some other way? Socrates says he cannot answer without first knowing what virtue is, and the search for a definition stalls.",
        "Then Meno raises a paradox that threatens all inquiry: how can you look for something if you do not already know what it is? Plato's reply, the theory of recollection, is demonstrated live on an untaught slave boy doing geometry. The dialogue ends with the first clear distinction between knowledge and true belief.",
      ],
      reading: {
        author: "Plato",
        work: "*Meno*",
        date: "c. 385 BC",
        selection: "The whole dialogue (70a–100c)",
        locatorSystem: "Stephanus pages",
        translations: [
          jowett,
          {
            translator: "W. R. M. Lamb",
            title: "Plato II (Loeb Classical Library)",
            year: 1924,
            publicDomain: true,
          },
          grubeCooper,
        ],
      },
      breakdown: [
        {
          locator: "70a–79e",
          title: "Defining virtue",
          summary:
            "Meno offers a swarm of virtues (one for a man, one for a woman, one for a child), then 'the ability to rule', then 'desiring fine things and being able to get them'. Each time Socrates asks for the one thing common to all cases.",
          points: ["Compare Euthyphro's first answer: a list of examples is not a definition."],
        },
        {
          locator: "80a–80e",
          title: "The stingray and the paradox",
          summary:
            "Meno compares Socrates to a stingray that numbs whoever touches it. Then the paradox: you cannot search for what you know, since you already know it, nor for what you do not know, since you would not know what to look for.",
          points: ["'Meno's paradox' challenges any account of how inquiry is possible."],
        },
        {
          locator: "81a–86c",
          title: "Recollection and the slave boy",
          summary:
            "Priests and poets say the soul is immortal and has learned everything; learning is recollection (*anamnēsis*). Socrates questions a slave boy about doubling the area of a square. The boy is first confident and wrong, then perplexed, and finally finds the answer: the square built on the diagonal.",
          points: [
            "Is Socrates teaching through leading questions? Draw the squares and judge for yourself.",
            "Perplexity as progress: the boy is better off once he knows he does not know (84a–c).",
          ],
        },
        {
          locator: "86d–89c",
          title: "Reasoning from a hypothesis",
          summary:
            "Borrowing the geometers' method, Socrates reasons conditionally: if virtue is knowledge, it can be taught. Virtue is good, and every good benefits us only when guided by knowledge, so virtue seems to be knowledge.",
          points: ["How to make progress when a definition is not available."],
        },
        {
          locator: "89c–96d",
          title: "Anytus and the missing teachers",
          summary:
            "If virtue can be taught, where are its teachers? Anytus, later one of Socrates' accusers, scorns the sophists, yet the great Athenian statesmen failed to make their own sons good. Anytus leaves with a warning to Socrates to be careful.",
          points: ["Dramatic irony: the reader knows how Anytus' warning will end."],
        },
        {
          locator: "96d–100c",
          title: "True belief and the statues of Daedalus",
          summary:
            "A true belief about the road to Larissa guides you as well as knowledge does. But true beliefs run away, like the statues of Daedalus, unless they are tied down by working out the reason why (98a). For now, virtue seems to come to good people by divine gift, until we learn what virtue is.",
          points: ["The first statement of the difference between knowledge and true belief, still central to epistemology."],
        },
      ],
      questions: [
        "Think of something you learned recently. Did you know what you were looking for before you found it?",
        "What is the difference between knowing the way to Larissa and having a true belief about it?",
      ],
    },
    {
      id: "phaedo",
      title: "Phaedo: The Soul and Its Immortality",
      minutes: 75,
      access: "free",
      intro: [
        "On his last day, in prison, Socrates spends hours arguing that the soul is immortal, then drinks the hemlock. The *Phaedo*, narrated by an eyewitness, is both a philosophical treatise and one of the most moving death scenes in literature.",
        "Its arguments introduce the theory of Forms: Equality itself, Beauty itself and the Good itself, unchanging realities grasped by thought rather than by the senses. Read the arguments critically; Socrates' friends do, and he welcomes it.",
      ],
      reading: {
        author: "Plato",
        work: "*Phaedo*",
        date: "c. 380s BC",
        selection: "The whole dialogue (57a–118a); the core arguments run from 63e to 107b",
        locatorSystem: "Stephanus pages",
        translations: [jowett, fowler, grubeCooper],
      },
      breakdown: [
        {
          locator: "57a–63e",
          title: "The last day",
          summary:
            "Phaedo tells Echecrates about the day. Socrates, freed from his chains, reflects on how pleasure and pain follow each other, and explains why suicide is wrong even though a philosopher should welcome death.",
          points: ["Plato names himself as absent: 'Plato, I believe, was ill' (59b)."],
        },
        {
          locator: "63e–69e",
          title: "Philosophy as practice for dying",
          summary:
            "The philosopher tries to free the soul from the body and to think by reason alone. Those who practice philosophy rightly are practicing for dying and being dead (64a).",
          points: ["A sharp split between soul and body, and virtue as a kind of purification."],
        },
        {
          locator: "69e–84b",
          title: "Three arguments",
          summary:
            "The cyclical argument: opposites come from opposites, so the living come from the dead. The recollection argument: we judge equal sticks to fall short of Equality itself, so we must have known Equality before birth. The affinity argument: the soul is more like the invisible, unchanging Forms than the visible, changing body.",
          points: ["Here the Forms enter. Note what each argument proves at most."],
        },
        {
          locator: "84c–95a",
          title: "Objections, and the danger of misology",
          summary:
            "Simmias suggests the soul is like the tuning of a lyre, destroyed with the instrument. Cebes suggests it may outlast many bodies, like a weaver who wears out many cloaks, and still perish in the end. Socrates warns against misology, the hatred of arguments that comes from trusting bad ones.",
          points: ["Philosophical honesty in the face of grief."],
        },
        {
          locator: "95e–107b",
          title: "Socrates' story and the final argument",
          summary:
            "Disappointed by Anaxagoras, Socrates took a 'second sailing': explaining things through Forms, so that beautiful things are beautiful because of Beauty. The soul always brings life, and what essentially brings life cannot admit death, so the soul is deathless and cannot be destroyed.",
          points: ["Forms as causes: the core of Plato's metaphysics."],
        },
        {
          locator: "107c–118a",
          title: "The myth and the death",
          summary:
            "A myth of the true earth and the fate of souls. Socrates bathes, says goodbye to his family and drinks the poison. His last words: 'Crito, we owe a cock to Asclepius; pay it and do not neglect it.'",
          points: ["The dialogue ends by calling him the best, wisest and most just of the men they had known (118a)."],
        },
      ],
      questions: [
        "Which argument for immortality is strongest? Which premise would you attack?",
        "What does it mean to 'practice dying'? Is it a healthy ideal or a morbid one?",
      ],
    },
  ],
};
