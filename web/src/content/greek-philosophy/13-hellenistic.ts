import type { RoadmapNode } from "../types";
import { hicksLives } from "./translations";

export const hellenistic: RoadmapNode = {
  id: "hellenistic",
  title: "The Hellenistic Schools",
  era: "c. 300 BC – AD 200",
  summary:
    "After Alexander, philosophy became a therapy for the soul. Epicureans sought tranquility through pleasure rightly understood, Stoics through virtue and accepting what is not up to us, and Skeptics through suspending judgment.",
  position: { x: 1, y: 8 },
  requires: ["aristotle-nature", "aristotle-ethics"],
  lessons: [
    {
      id: "epicurus",
      title: "Epicurus: Pleasure and the Fear of Death",
      minutes: 30,
      access: "free",
      intro: [
        "Epicurus (341–270 BC) founded his school in a garden in Athens, open to women and to slaves. Building on Democritus' atoms, he taught that the gods do not interfere with the world and that the soul dissolves at death, and he drew a startling conclusion: there is nothing to fear.",
        "His goal was *ataraxia*, freedom from disturbance. The *Letter to Menoeceus*, preserved by Diogenes Laertius, compresses his whole ethics into a few pages.",
      ],
      reading: {
        author: "Epicurus",
        work: "*Letter to Menoeceus* and *Principal Doctrines* 1–5",
        date: "c. 300 BC",
        selection:
          "Diogenes Laertius, *Lives* X.122–135 (the letter) and X.139–140 (*Principal Doctrines* 1–5)",
        locatorSystem: "Book and section numbers in Diogenes Laertius",
        translations: [
          hicksLives,
          { translator: "Cyril Bailey", title: "Epicurus: The Extant Remains", year: 1926, publicDomain: true },
          {
            translator: "Brad Inwood and L. P. Gerson",
            title: "The Epicurus Reader",
            year: 1994,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "X.122",
          title: "Philosophy at any age",
          summary:
            "No one should put off philosophy when young or tire of it when old, for no one is too young or too old to secure the health of the soul.",
          points: ["Philosophy as medicine, not scholarship."],
        },
        {
          locator: "X.123–124",
          title: "The gods",
          summary:
            "The gods exist, immortal and blessed, but they are not as most people imagine. They neither reward nor punish, and attributing anger and favor to them is the real impiety.",
          points: ["Compare Xenophanes' attack on the gods of the poets."],
        },
        {
          locator: "X.124–127",
          title: "Death is nothing to us",
          summary:
            "All good and bad lie in sensation, and death is the end of sensation. So death is nothing to us: while we exist, death is not present, and when death is present, we do not exist. Understanding this makes mortal life enjoyable.",
          points: ["If death harms no one, what exactly is bad about it? Philosophers still argue over this."],
        },
        {
          locator: "X.127–132",
          title: "Desires and pleasure",
          summary:
            "Some desires are natural and necessary, some natural but unnecessary, and some empty. Pleasure is the beginning and end of the blessed life, but not the pleasures of the profligate: it is the absence of pain in the body and of disturbance in the soul. Bread and water give the greatest pleasure to someone who needs them.",
          points: ["Epicurean hedonism is closer to minimalism than to indulgence."],
        },
        {
          locator: "X.132–135",
          title: "Prudence and freedom",
          summary:
            "Prudence (*phronēsis*) is the greatest good, more precious even than philosophy, because one cannot live pleasantly without living prudently, honorably and justly. Some things happen by necessity, some by chance and some through us, and what is up to us is free. 'You will live as a god among men.'",
          points: [
            "To make room for free choice, Epicurus' atoms occasionally 'swerve' from their paths, a doctrine known mainly from the Roman poet Lucretius.",
          ],
        },
        {
          locator: "X.139–140",
          title: "The fourfold cure",
          summary:
            "The first *Principal Doctrines* were later summed up as the *tetrapharmakos*, the four-part remedy: god is not to be feared, death is not to be worried about, the good is easy to get, and the terrible is easy to endure.",
          points: ["The summary comes from the later Epicurean Philodemus: a whole philosophy in four memorable lines."],
        },
      ],
      questions: [
        "Is 'death is nothing to us' convincing? What about the good things death takes away?",
        "Sort five of your current desires into Epicurus' three kinds. What do you notice?",
      ],
    },
    {
      id: "epictetus",
      title: "Epictetus: What Is Up to Us",
      minutes: 30,
      access: "free",
      intro: [
        "Stoicism was founded in Athens around 300 BC by Zeno of Citium, who taught in the Painted Stoa, the porch that gave the school its name. Its best-known teacher in the Roman era, Epictetus (c. AD 50–135), was born a slave.",
        "Epictetus wrote nothing. His student Arrian recorded his lectures and condensed them into the *Handbook* (*Enchiridion*), a manual for living that begins with a single distinction: some things are up to us and some are not. Much of Stoic ethics follows from taking that distinction seriously.",
      ],
      reading: {
        author: "Epictetus, recorded by Arrian",
        work: "*Handbook* (*Enchiridion*)",
        date: "early 2nd century AD",
        selection: "The whole *Handbook* (53 short chapters), focusing on chapters 1, 3, 5, 8, 11, 17, 48 and 53",
        locatorSystem: "Chapter numbers",
        translations: [
          { translator: "Elizabeth Carter", title: "All the Works of Epictetus", year: 1758, publicDomain: true },
          {
            translator: "W. A. Oldfather",
            title: "Epictetus II (Loeb Classical Library)",
            year: 1928,
            publicDomain: true,
          },
          { translator: "Nicholas White", title: "The Handbook of Epictetus", year: 1983, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "Ch. 1",
          title: "What is up to us",
          summary:
            "Some things are up to us and some are not. Up to us are judgment, impulse, desire and aversion: whatever is our own doing. Not up to us are body, property, reputation and office: whatever is not our own doing. Treat what is not up to you as not your own, and no one will be able to hinder or harm you.",
          points: ["The foundation of Stoic practice. Where would you put your health?"],
        },
        {
          locator: "Ch. 3, 11",
          title: "Preparing for loss",
          summary:
            "With everything you love, remind yourself what kind of thing it is: when you kiss your child, tell yourself you are kissing a mortal. Never say of anything 'I have lost it', only 'I have given it back'.",
          points: ["Some of the hardest teaching in ancient ethics. Is it wisdom, or detachment taken too far?"],
        },
        {
          locator: "Ch. 5",
          title: "Judgments, not things",
          summary:
            "People are disturbed not by things but by their judgments about things. Death is not terrible, or it would have seemed so to Socrates; the terror lies in the judgment that death is terrible.",
          points: ["Founders of cognitive therapy, such as Albert Ellis, cited this idea as a source."],
        },
        {
          locator: "Ch. 8",
          title: "Wish for what happens",
          summary:
            "Do not seek to have events happen as you wish, but wish them to happen as they do happen, and your life will go well.",
          points: ["Acceptance, not passivity: you still act, but you stop demanding that the world comply."],
        },
        {
          locator: "Ch. 17",
          title: "Playing your part",
          summary:
            "You are an actor in a play whose author chooses the part, whether short or long, a beggar, a disabled person, a ruler or a private citizen. Your task is to play the part well; choosing it belongs to another.",
          points: ["Role ethics: duties that follow from the positions we occupy."],
        },
        {
          locator: "Ch. 48, 53",
          title: "Progress, and Socrates again",
          summary:
            "Someone making progress blames no one and praises no one, and watches himself like an enemy lying in wait. The *Handbook* ends with lines to keep at hand, among them Socrates' words from the *Apology*: 'Anytus and Meletus can kill me, but they cannot harm me.'",
          points: ["The roadmap comes full circle: the Stoics took Socrates as their model."],
        },
      ],
      questions: [
        "List three things that bothered you this week. Which parts were up to you?",
        "Is the line between what is and is not up to us too sharp? Where do your health and reputation fall?",
      ],
    },
    {
      id: "sextus-empiricus",
      title: "Sextus Empiricus: The Skeptic Way",
      minutes: 35,
      access: "pro",
      intro: [
        "Pyrrho of Elis (c. 360–270 BC), who traveled to India with Alexander's army, wrote nothing but left a legend of perfect calm. Some five centuries later the doctor Sextus Empiricus (around AD 200) set down the method of Pyrrhonian skepticism: for every argument, find an equally strong argument against it, suspend judgment, and tranquility follows 'as a shadow follows a body'.",
        "The *Outlines of Pyrrhonism* is the fullest surviving account of ancient skepticism. Its rediscovery in the sixteenth century fed directly into Montaigne and Descartes, which makes it a natural bridge out of ancient philosophy.",
      ],
      reading: {
        author: "Sextus Empiricus",
        work: "*Outlines of Pyrrhonism*, Book I",
        date: "c. AD 200",
        selection: "Book I, sections 1–30 (what skepticism is), 35–39 (the Ten Modes) and 164–177 (the Five Modes)",
        locatorSystem: "Book and section numbers",
        translations: [
          {
            translator: "Mary Mills Patrick",
            title: "Sextus Empiricus and Greek Scepticism",
            year: 1899,
            publicDomain: true,
          },
          {
            translator: "Julia Annas and Jonathan Barnes",
            title: "Outlines of Scepticism (2nd ed.)",
            year: 2000,
            publicDomain: false,
          },
          { translator: "Benson Mates", title: "The Skeptic Way", year: 1996, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "I.1–4",
          title: "Three kinds of philosopher",
          summary:
            "Anyone investigating a question either finds the answer, denies it can be found, or keeps investigating. The dogmatists, such as the followers of Aristotle, Epicurus and the Stoics, think they have found the truth; the Academics say it cannot be found; the skeptics are still looking.",
          points: [
            "'Skeptic' comes from *skeptesthai*, to investigate. Skepticism is a practice of inquiry, not the doctrine that nothing can be known.",
          ],
        },
        {
          locator: "I.8–10",
          title: "What skepticism is",
          summary:
            "Skepticism is an ability to set out oppositions among things that appear and things that are thought, in any way at all. Because the opposed objects and arguments have equal force (*isostheneia*), we come first to suspension of judgment (*epochē*) and then to tranquility (*ataraxia*).",
          points: ["Equal force, then suspension, then calm: the whole method in one sequence."],
        },
        {
          locator: "I.12–30",
          title: "Living without beliefs, and the painter's sponge",
          summary:
            "The skeptic lives by appearances without holding beliefs, following nature, the necessities of feeling, the laws and customs of their society and the teaching of the crafts. Tranquility came by surprise, like the painter Apelles, who could not paint a horse's foam until he gave up and threw his sponge at the picture, and the sponge made the foam.",
          points: ["Can anyone really live without beliefs? Critics said the skeptic could not act at all."],
        },
        {
          locator: "I.35–39",
          title: "The Ten Modes",
          summary:
            "Ten standard ways of producing opposition: differences among animals, among humans, among the senses, in circumstances, in positions and distances, in mixtures, in quantities, in relations, in frequency, and in ways of life, customs and laws. Sextus works through each at length (I.40–163).",
          points: ["Compare Protagoras' cold wind and Herodotus' story of Darius."],
        },
        {
          locator: "I.164–177",
          title: "The Five Modes",
          summary:
            "Five ways any attempt at proof breaks down: disagreement, infinite regress, relativity, arbitrary assumption and circular reasoning.",
          points: ["Usually attributed to Agrippa. The regress problem still frames debates about knowledge."],
        },
      ],
      questions: [
        "Pick a belief you hold strongly and build the strongest case against it. Did you reach suspension of judgment, or only discomfort?",
        "Can a person live entirely by appearances, without beliefs?",
      ],
    },
  ],
};
