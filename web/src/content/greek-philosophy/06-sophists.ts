import type { RoadmapNode } from "../types";
import { jowett } from "./translations";

export const sophists: RoadmapNode = {
  id: "sophists",
  title: "The Sophists",
  era: "c. 450–380 BC",
  summary:
    "Paid teachers of rhetoric and 'excellence' who came to democratic Athens. They turned philosophy from nature to human affairs: knowledge, language, persuasion, and whether law and morality are natural or merely convention.",
  position: { x: 0, y: 4 },
  requires: ["eleatics"],
  lessons: [
    {
      id: "protagoras",
      title: "Protagoras: Man the Measure",
      minutes: 30,
      access: "free",
      intro: [
        "Protagoras of Abdera (c. 490–420 BC) was the most famous of the sophists, professional teachers who promised to make young men excellent (*aretē*) at speaking and at managing their households and their city. His book *Truth* opened with the most quoted sentence in the history of relativism: 'Of all things the measure is a human being: of the things that are, that they are, and of the things that are not, that they are not.'",
        "This lesson reads that sentence, his agnosticism about the gods, and Plato's two portraits of him: the target of a famous refutation in the *Theaetetus*, and a thoughtful defender of democracy in the *Protagoras*.",
      ],
      reading: {
        author: "Protagoras of Abdera, with Plato and Herodotus",
        work: "Fragments (DK 80) and Plato's portraits",
        date: "5th–4th centuries BC",
        selection:
          "Protagoras B1 and B4; Plato, *Theaetetus* 151e–152c, 161c–162a and 170e–171c; Plato, *Protagoras* 320c–328d; Herodotus, *Histories* 3.38",
        locatorSystem: "Diels–Kranz (DK) numbers and Stephanus pages",
        translations: [
          jowett,
          {
            translator: "M. J. Levett, rev. Myles Burnyeat",
            title: "Theaetetus",
            year: 1990,
            publicDomain: false,
          },
          {
            translator: "Stanley Lombardo and Karen Bell",
            title: "Protagoras",
            year: 1992,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "B1",
          title: "The measure doctrine",
          summary:
            "'Of all things the measure is a human being: of the things that are, that they are, and of the things that are not, that they are not.'",
          points: [
            "Which human: each individual, or humankind? A measure of what: perceptions only, or every belief? Plato reads it in the most individual way.",
          ],
        },
        {
          locator: "B4",
          title: "On the gods",
          summary:
            "'Concerning the gods I am not able to know whether they exist or do not exist, nor what they are like in form; for many things prevent knowledge: the obscurity of the subject and the shortness of human life.'",
          points: ["Agnosticism, not atheism. Later stories say his books were burned in Athens; they may be legend."],
        },
        {
          locator: "Theaetetus 151e–152c",
          title: "The wind is cold for me",
          summary:
            "Socrates ties the measure doctrine to Theaetetus' proposal that knowledge is perception. When the same wind blows, one person feels cold and another does not; so, for Protagoras, the wind is cold for the one and not cold for the other.",
          points: ["Relativism about perception is attractive. Is there any further fact about the wind in itself?"],
        },
        {
          locator: "Theaetetus 161c–162a, 170e–171c",
          title: "The argument that turns around",
          summary:
            "Socrates first asks why a pig or a baboon should not be the measure of all things. Then comes the decisive argument: if every belief is true for whoever holds it, then the belief of those who think Protagoras is wrong is true too, so by his own standard his doctrine is false.",
          points: ["The 'turning around' (*peritropē*) argument is still the standard objection to sweeping relativism."],
        },
        {
          locator: "Protagoras 320c–328d",
          title: "The Great Speech",
          summary:
            "Protagoras tells a myth. Epimetheus hands out speed, claws and fur to the animals and leaves nothing for humans; Prometheus steals fire and technical skill for them; Zeus sends Hermes to give respect (*aidōs*) and justice (*dikē*) to everyone, so that cities can survive.",
          points: [
            "A defense of democracy: every citizen has a share of political virtue, which the whole community teaches, as it teaches its language.",
          ],
        },
        {
          locator: "Herodotus 3.38",
          title: "Custom is king",
          summary:
            "The Persian king Darius asks some Greeks what it would take for them to eat their dead fathers, and some Callatian Indians, who do eat theirs, what it would take for them to burn them. Both are horrified.",
          points: ["The central debate of the age: does morality rest on nature (*physis*) or on convention (*nomos*)?"],
        },
      ],
      questions: [
        "Is 'the wind is cold for me' a reasonable thing to say? Does it extend to 'cruelty is wrong for me'?",
        "Does the turning-around argument defeat every form of relativism, or only the most sweeping one?",
      ],
    },
    {
      id: "gorgias",
      title: "Gorgias: The Power of Speech",
      minutes: 25,
      access: "free",
      intro: [
        "Gorgias of Leontini (c. 485–380 BC) came to Athens in 427 BC as an ambassador from Sicily and dazzled the assembly with his style. He claimed to teach not virtue but the power of speech: the ability to persuade any audience of anything.",
        "Two works show his range. *On What Is Not* turns the Eleatics' methods against them to 'prove' that nothing exists. The *Encomium of Helen* defends the most blamed woman in Greek myth by arguing that persuasion is a force no one can resist, which raises a question that runs through Plato: if words can compel, who is responsible?",
      ],
      reading: {
        author: "Gorgias of Leontini",
        work: "*Encomium of Helen* and *On What Is Not* (DK 82)",
        date: "late 5th century BC",
        selection:
          "*Encomium of Helen* (B11), complete; *On What Is Not* (B3), as summarized by Sextus Empiricus, *Against the Logicians* I.65–87",
        locatorSystem: "Section numbers",
        translations: [
          {
            translator: "Rosamond Kent Sprague (ed.)",
            title: "The Older Sophists",
            year: 1972,
            publicDomain: false,
          },
          {
            translator: "John Dillon and Tania Gergel",
            title: "The Greek Sophists",
            year: 2003,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "Helen 1–5",
          title: "The task",
          summary:
            "Gorgias announces that he will free Helen from blame, and her accusers from ignorance, by showing the truth.",
          points: ["A display speech (*epideixis*): an advertisement for what his teaching can do."],
        },
        {
          locator: "Helen 6",
          title: "Four possible causes",
          summary:
            "Helen went to Troy either by the will of fate, the gods and necessity; or because she was taken by force; or because she was persuaded by speech; or because she was overcome by love. In every case she is not to blame.",
          points: ["Argument by exhausting the cases. Is the list really complete?"],
        },
        {
          locator: "Helen 8–14",
          title: "Speech is a mighty master",
          summary:
            "Speech is a powerful lord that, with the smallest and least visible body, accomplishes the most divine works: it can stop fear, remove grief, create joy and increase pity. Its effect on the soul is like the effect of drugs on the body.",
          points: [
            "If persuasion works like a drug, the persuaded are victims, not agents. Plato's *Gorgias* and *Phaedrus* are long replies to this.",
          ],
        },
        {
          locator: "Helen 15–20",
          title: "Love",
          summary:
            "If love was the cause, then either love is a god, and no human can resist a god, or it is a sickness of the soul, a misfortune rather than a crime.",
          points: ["Emotion as something that happens to us rather than something we do."],
        },
        {
          locator: "Helen 21",
          title: "A plaything",
          summary: "Gorgias ends by saying he wrote the speech as praise of Helen and as a plaything (*paignion*) for himself.",
          points: ["How seriously should we take an argument its author calls a game?"],
        },
        {
          locator: "On What Is Not",
          title: "Three theses",
          summary:
            "First, nothing exists. Second, even if something exists, it cannot be known by humans. Third, even if it can be known, it cannot be communicated to anyone else.",
          points: [
            "Parody of Parmenides or serious skepticism? Either way, Eleatic methods are turned against Eleatic conclusions.",
          ],
        },
      ],
      questions: [
        "If persuasion works like a drug, is a persuaded person responsible for what they do?",
        "Where is the line between teaching someone to argue well and teaching them to manipulate?",
      ],
    },
  ],
};
