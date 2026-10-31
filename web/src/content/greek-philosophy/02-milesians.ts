import type { RoadmapNode } from "../types";
import { burnet, kirkRavenSchofield, waterfieldFirst } from "./translations";

export const milesians: RoadmapNode = {
  id: "milesians",
  title: "The Milesians",
  era: "c. 585–525 BC",
  summary:
    "In the Ionian city of Miletus, three thinkers asked what everything is made of and answered with water, 'the boundless' and air: the first attempts to explain nature in terms of nature.",
  position: { x: 1, y: 1 },
  requires: ["foundations"],
  lessons: [
    {
      id: "thales",
      title: "Thales: Everything Is Water",
      minutes: 20,
      access: "free",
      intro: [
        "Thales of Miletus (active around 585 BC) is traditionally the first philosopher. No writing of his survives, and perhaps he wrote none. We know him through anecdotes and through Aristotle, who reports that Thales made water the origin and principle (*archē*) of all things.",
        "That makes this lesson an exercise in reading sources. Aristotle writes more than two centuries after Thales, in his own vocabulary, and openly guesses at Thales' reasons. Keep one question in mind: what makes 'everything is water' a philosophical claim rather than another myth?",
      ],
      reading: {
        author: "Aristotle, Herodotus and Plato",
        work: "Reports on Thales (DK 11)",
        date: "5th–4th centuries BC",
        selection:
          "Aristotle, *Metaphysics* A.3 983b6–984a5; *On the Soul* I.2 405a19–21 and I.5 411a7–8; Herodotus, *Histories* 1.74; Plato, *Theaetetus* 174a; Aristotle, *Politics* I.11 1259a6–18",
        locatorSystem: "Bekker numbers (Aristotle), book and chapter (Herodotus), Stephanus pages (Plato)",
        translations: [burnet, kirkRavenSchofield, waterfieldFirst],
      },
      breakdown: [
        {
          locator: "Metaphysics 983b6–18",
          title: "Aristotle's question",
          summary:
            "Aristotle says most of the first philosophers recognized only material principles: the thing from which everything comes to be and into which it perishes, while the thing itself persists through every change.",
          points: [
            "*Archē* and 'material cause' are Aristotle's terms. We see Thales through Aristotle's own theory of causes.",
          ],
        },
        {
          locator: "Metaphysics 983b20–27",
          title: "Water",
          summary:
            "Thales, the founder of this kind of philosophy, says the principle is water, and so declares that the earth rests on water. Aristotle suggests he may have been led to this by seeing that the nourishment of all things is moist and that seeds are moist by nature.",
          points: [
            "Note Aristotle's hedging: 'perhaps he got the idea from…'. He is reconstructing, not reporting.",
            "An earth floating on water also appears in Near Eastern cosmologies.",
          ],
        },
        {
          locator: "On the Soul 405a19–21, 411a7–8",
          title: "Soul and gods",
          summary:
            "Thales apparently held that the magnet has a soul, because it moves iron, and that 'all things are full of gods'.",
          points: [
            "Soul here means whatever causes movement, so the world as a whole is alive.",
            "Divinity is not abolished. It is spread through nature.",
          ],
        },
        {
          locator: "Herodotus 1.74",
          title: "The eclipse",
          summary:
            "Herodotus reports that Thales foretold the year of a solar eclipse that halted a battle between the Lydians and the Medes. Astronomers date it to 28 May 585 BC.",
          points: [
            "He probably relied on Babylonian records of eclipse cycles. The date gives Greek philosophy its conventional starting point.",
          ],
        },
        {
          locator: "Theaetetus 174a; Politics 1259a6–18",
          title: "Two stories about the philosopher",
          summary:
            "Plato tells of Thales falling into a well while gazing at the stars and being mocked by a Thracian servant girl. Aristotle tells of him foreseeing a large olive harvest, renting all the olive presses cheaply and making a fortune, to show that philosophers could be rich if they cared to.",
          points: [
            "Two lasting images of the philosopher: absent-minded and impractical, or practical when it matters.",
          ],
        },
      ],
      questions: [
        "What evidence could count for or against 'everything is water'?",
        "Aristotle reports Thales' view and supplies the reasons himself. How should we use a source who interprets as he reports?",
      ],
    },
    {
      id: "anaximander-anaximenes",
      title: "Anaximander and Anaximenes: The Boundless and Air",
      minutes: 25,
      access: "free",
      intro: [
        "Anaximander, a younger fellow citizen of Thales, wrote the first known prose book on nature. He refused to make any familiar stuff the origin of things and posited instead the *apeiron*: the boundless, or indefinite. He also argued that the earth hangs unsupported at the center of the cosmos, and gave a naturalistic account of how living things began.",
        "Anaximenes, a generation later, went back to a familiar stuff, air, but added something new: a mechanism. Air thins into fire and thickens into wind, cloud, water, earth and stone. Together the two show early philosophy doing something myth never did: correcting itself.",
      ],
      reading: {
        author: "Anaximander and Anaximenes",
        work: "Fragments and reports (DK 12, 13)",
        date: "6th century BC",
        selection:
          "Anaximander B1; Aristotle, *Physics* III.4 203b6–15 and *On the Heavens* II.13 295b10–16; reports on the cosmos and the first animals (DK 12A10, A11, A30); Anaximenes A5 and B2",
        locatorSystem: "Diels–Kranz (DK) numbers and Bekker numbers",
        translations: [burnet, kirkRavenSchofield, waterfieldFirst],
      },
      breakdown: [
        {
          locator: "DK 12B1",
          title: "The oldest sentence in philosophy",
          summary:
            "Things perish into the things from which they came to be, 'according to necessity; for they pay penalty and retribution to each other for their injustice according to the ordering of time'. The words survive because Simplicius quotes them from Theophrastus.",
          points: [
            "Probably the earliest surviving sentence of Western philosophy, though how much of the wording is Anaximander's own is disputed.",
            "Opposites such as hot and cold encroach on each other and are made to pay: a cosmic justice that keeps the balance.",
          ],
        },
        {
          locator: "Physics 203b6–15",
          title: "Why the boundless?",
          summary:
            "Aristotle reports that the boundless has no beginning, because it is itself the beginning. It is ungenerated and indestructible, and it surrounds and steers all things.",
          points: [
            "A likely motive: if the source of everything were water, say, it would overpower its opposite, fire. A neutral source takes no side.",
            "Notice how much Aristotle's description sounds like a description of a god.",
          ],
        },
        {
          locator: "On the Heavens 295b10–16",
          title: "Why the earth stays put",
          summary:
            "Some, like Anaximander, say the earth stays at rest because it is equally distant from everything: there is no reason for it to move up rather than down or sideways.",
          points: [
            "One of the first uses of what is now called the principle of sufficient reason.",
            "No Atlas and no water underneath: a picture built from geometry, not myth.",
          ],
        },
        {
          locator: "DK 12A10, A11, A30",
          title: "A cosmos and its creatures",
          summary:
            "Later reports say the cosmos formed when something productive of hot and cold separated off from the boundless, and a sphere of flame grew around the air surrounding the earth. The earth is a squat cylinder, a third as deep as it is wide. The first animals arose in moisture, and humans first developed inside fish-like creatures.",
          points: [
            "Speculative, but entirely naturalistic: origins explained by processes, not by the births of gods.",
          ],
        },
        {
          locator: "DK 13A5",
          title: "Anaximenes: one stuff, many forms",
          summary:
            "Anaximenes made the underlying stuff air, unlimited in extent. Rarefied, it becomes fire; condensed, it becomes wind, then cloud, then water, then earth, then stones. Everything else comes from these.",
          points: [
            "The first mechanism of change: differences in quality explained by differences in density.",
            "He reportedly pointed out that breath from pursed lips feels cool and breath from an open mouth feels warm (DK 13B1).",
          ],
        },
        {
          locator: "DK 13B2",
          title: "Air and soul",
          summary:
            "'Just as our soul, being air, holds us together, so breath and air surround the whole cosmos.'",
          points: ["A parallel between the person and the world. The wording may be later than Anaximenes."],
        },
      ],
      questions: [
        "Anaximander's source of all things is something no one has ever observed. Is that a weakness or a strength?",
        "Is Anaximenes' return to a familiar stuff a step backward or forward?",
      ],
    },
  ],
};
