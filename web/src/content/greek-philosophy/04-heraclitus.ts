import type { RoadmapNode, Translation } from "../types";
import { burnet, waterfieldFirst } from "./translations";

const translations: Translation[] = [
  burnet,
  {
    translator: "Charles H. Kahn",
    title: "The Art and Thought of Heraclitus",
    year: 1979,
    publicDomain: false,
  },
  waterfieldFirst,
];

export const heraclitus: RoadmapNode = {
  id: "heraclitus",
  title: "Heraclitus",
  era: "c. 500 BC",
  summary:
    "The 'riddler' of Ephesus: a world of constant change, held together by a hidden order, the *logos*, in which opposites turn out to be one.",
  position: { x: 2, y: 2 },
  requires: ["milesians"],
  lessons: [
    {
      id: "heraclitus-logos",
      title: "Heraclitus: The Logos and the Unity of Opposites",
      minutes: 25,
      access: "free",
      intro: [
        "Heraclitus of Ephesus (active around 500 BC) wrote a book of compressed, paradoxical sayings, of which about 130 survive. Ancient readers called him 'the obscure'. His complaint against humanity is that people meet the truth every day and still fail to grasp it.",
        "That truth is the *logos*: the account, measure or structure by which everything happens. It shows that opposites such as day and night, up and down, living and dead belong together as one. Read the fragments slowly, one at a time; they were written to be puzzled over.",
      ],
      reading: {
        author: "Heraclitus of Ephesus",
        work: "Fragments (DK 22)",
        date: "c. 500 BC",
        selection:
          "B1, B2 and B50 (the logos); B60, B61, B88 and B103 (opposites); B51, B53 and B80 (strife and harmony); B93 and B123 (hidden nature)",
        locatorSystem: "Diels–Kranz (DK) numbers",
        translations,
      },
      breakdown: [
        {
          locator: "B1–B2",
          title: "The logos everyone ignores",
          summary:
            "Although this logos holds always, humans fail to understand it, both before they have heard it and once they have heard it. Though the logos is common to all, most people live as if they had a private understanding of their own.",
          points: [
            "*Logos* can mean word, account, reckoning or ratio. Heraclitus seems to use all these senses at once.",
            "The many are compared to sleepers, each shut in a private world.",
          ],
        },
        {
          locator: "B50",
          title: "All things are one",
          summary: "'Listening not to me but to the logos, it is wise to agree that all things are one.'",
          points: [
            "Heraclitus presents himself as a messenger for something anyone could grasp, not as an authority to be believed.",
          ],
        },
        {
          locator: "B60, B61, B88, B103",
          title: "The same and not the same",
          summary:
            "The road up and the road down are one and the same. Sea water is the purest and the foulest: drinkable and life-giving for fish, undrinkable and deadly for humans. Living and dead, waking and sleeping, young and old are the same, for these change into those and those back into these. On a circle, beginning and end are common.",
          points: [
            "Several kinds of unity are mixed here: one thing seen from different points of view, opposites that turn into each other, and opposites defined by their contrast. Try to sort the examples.",
          ],
        },
        {
          locator: "B51, B53, B80",
          title: "Harmony through tension",
          summary:
            "People do not understand how what is at variance agrees with itself: it is a harmony that turns back on itself, like that of the bow and the lyre. War is the father of all and king of all; war is common, and justice is strife.",
          points: [
            "Stability produced by opposing forces, like the tension in a strung bow.",
            "Contrast Anaximander, for whom the encroachment of opposites was an injustice to be paid for.",
          ],
        },
        {
          locator: "B93, B123",
          title: "Nature loves to hide",
          summary:
            "'The lord whose oracle is at Delphi neither speaks nor conceals, but gives a sign.' 'Nature loves to hide.'",
          points: ["Why Heraclitus writes in riddles: like the oracle, he gives signs that make the reader do the work."],
        },
      ],
      questions: [
        "Pick a pair of opposites from your own life. In which of Heraclitus' senses, if any, are they one?",
        "Is 'justice is strife' a description of how the world works or an endorsement of conflict?",
      ],
    },
    {
      id: "heraclitus-flux",
      title: "Heraclitus: Fire, Rivers and the Soul",
      minutes: 20,
      access: "free",
      intro: [
        "The idea most often linked to Heraclitus, that 'everything flows' (*panta rhei*), appears in no surviving fragment; it comes from Plato and later summaries. What the fragments say is subtler: the cosmos is an ever-living fire that kindles and goes out in measures, a river stays the same because its waters change, and the soul is a fiery, deepening thing that thrives when it is dry.",
        "This lesson separates Heraclitus from the 'Heracliteans' of Plato's day, who took him to mean that nothing is ever stable enough to be known.",
      ],
      reading: {
        author: "Heraclitus of Ephesus",
        work: "Fragments (DK 22)",
        date: "c. 500 BC",
        selection:
          "B30, B31 and B90 (fire); B12 and B91, with Plato, *Cratylus* 402a (rivers); B36, B45, B117 and B118 (the soul); B101 and B119 (the self)",
        locatorSystem: "Diels–Kranz (DK) numbers and Stephanus pages",
        translations,
      },
      breakdown: [
        {
          locator: "B30",
          title: "An ever-living fire",
          summary:
            "This cosmos, the same for all, no god or human made; it always was and is and will be: an ever-living fire, kindling in measures and going out in measures.",
          points: [
            "An uncreated cosmos: a direct break with Hesiod's genealogy.",
            "The 'measures' are the point: change governed by constant proportions.",
          ],
        },
        {
          locator: "B31, B90",
          title: "Fire as currency",
          summary:
            "Fire turns into sea, and half of the sea into earth, half into a fiery storm. All things are exchanged for fire and fire for all things, as goods for gold and gold for goods.",
          points: [
            "Fire works less like Thales' water, the stuff everything is made of, and more like money: what everything can be exchanged for.",
          ],
        },
        {
          locator: "B12, B91; Cratylus 402a",
          title: "The river",
          summary:
            "'On those stepping into the same rivers, different and different waters flow.' The famous version, that you cannot step into the same river twice, comes from Plato's *Cratylus* and from Plutarch.",
          points: [
            "B12 may mean that the river stays the same river precisely because its waters keep changing: identity through change, not the denial of identity.",
          ],
        },
        {
          locator: "B36, B45, B117, B118",
          title: "The soul",
          summary:
            "For souls it is death to become water, and for water death to become earth; from earth water is born, and from water soul. You could not find the limits of the soul by traveling every road, so deep is its logos. A drunk man, his soul wet, is led stumbling by a boy; a dry soul is wisest and best.",
          points: ["Psychology continuous with physics: the soul is part of fire's cycle."],
        },
        {
          locator: "B101, B119",
          title: "Searching oneself",
          summary: "'I searched out myself.' 'A person's character is their fate (*daimōn*).'",
          points: ["A turn inward that Socrates will put at the center of philosophy."],
        },
      ],
      questions: [
        "Does a river that stays 'the same' because its water keeps changing tell us anything about personal identity?",
        "Why might later readers have turned Heraclitus into a philosopher of pure flux?",
      ],
    },
  ],
};
