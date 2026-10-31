import type { RoadmapNode } from "../types";
import { burnet, kirkRavenSchofield, waterfieldFirst } from "./translations";

export const pythagorasXenophanes: RoadmapNode = {
  id: "pythagoras-xenophanes",
  title: "Pythagoras & Xenophanes",
  era: "c. 570–475 BC",
  summary:
    "Two Ionians who moved west. Pythagoras founded a way of life built on number, harmony and the reborn soul; Xenophanes, a wandering poet, attacked Homer's gods and asked how much humans can know.",
  position: { x: 0, y: 2 },
  requires: ["milesians"],
  lessons: [
    {
      id: "pythagoreans",
      title: "Pythagoras and the Pythagoreans: Number and the Soul",
      minutes: 25,
      access: "free",
      intro: [
        "Pythagoras of Samos (c. 570–490 BC) left Ionia for Croton in southern Italy, where he founded a community bound by rules about diet, silence and secrecy. He wrote nothing, and later admirers credited him with almost everything, including a theorem Babylonian mathematicians already knew. The first task is to separate early evidence from legend.",
        "Two ideas are well attested. The soul survives death and is reborn in other bodies, human and animal. And the order of the cosmos can be expressed in numbers, as the musical intervals can. Both run straight into Plato.",
      ],
      reading: {
        author: "Xenophanes, Heraclitus, Aristotle and Philolaus",
        work: "Reports and fragments on the Pythagoreans (DK 14, 44, 58)",
        date: "6th–4th centuries BC",
        selection:
          "Xenophanes B7; Heraclitus B40 and B129; Aristotle, *Metaphysics* A.5 985b23–986b8; Philolaus B1–B6",
        locatorSystem: "Diels–Kranz (DK) numbers and Bekker numbers",
        translations: [
          burnet,
          kirkRavenSchofield,
          {
            translator: "Carl A. Huffman",
            title: "Philolaus of Croton: Pythagorean and Presocratic",
            year: 1993,
            publicDomain: false,
          },
        ],
      },
      breakdown: [
        {
          locator: "Xenophanes B7",
          title: "The beaten puppy",
          summary:
            "The earliest report comes from a contemporary. Passing a puppy that is being beaten, Pythagoras says: 'Stop! It is the soul of a friend; I recognized it when I heard it cry out.'",
          points: [
            "It is satire, but it is also evidence: within his lifetime Pythagoras was known for teaching that souls pass from body to body.",
          ],
        },
        {
          locator: "Heraclitus B40, B129",
          title: "A hostile witness",
          summary:
            "Heraclitus complains that much learning does not teach understanding, or it would have taught Hesiod and Pythagoras, and accuses Pythagoras of stitching together a wisdom of his own from other people's writings.",
          points: ["Even an enemy confirms his fame for wide-ranging inquiry (*historiē*)."],
        },
        {
          locator: "Metaphysics 985b23–986a21",
          title: "'All things are numbers'",
          summary:
            "The 'so-called Pythagoreans' took the principles of mathematics to be the principles of all things. They saw that the properties and ratios of musical scales are numerical, and concluded that the whole heaven is a harmony and a number.",
          points: [
            "Aristotle never attributes these views to Pythagoras himself; 'so-called' marks his distance.",
            "The octave, the fifth and the fourth correspond to the ratios 2:1, 3:2 and 4:3.",
          ],
        },
        {
          locator: "Metaphysics 986a22–26",
          title: "The table of opposites",
          summary:
            "Some Pythagoreans listed ten pairs of principles: limit and unlimited, odd and even, one and many, right and left, male and female, resting and moving, straight and curved, light and darkness, good and bad, square and oblong.",
          points: [
            "Mathematics, cosmology and values in a single list. Notice which column 'female' falls into, alongside 'bad'.",
          ],
        },
        {
          locator: "Philolaus B1–B6",
          title: "Limiters and unlimiteds",
          summary:
            "Philolaus of Croton (late 5th century BC), the first Pythagorean known to have written a book, says the cosmos was fitted together from things that limit and things that are unlimited, and that everything known has number: without it nothing could be thought or known.",
          points: ["Our best direct evidence for early Pythagorean theory: number as the condition of knowledge, not just of things."],
        },
      ],
      questions: [
        "Why might the discovery that musical intervals are simple ratios seem like a key to the whole cosmos?",
        "What changes when a philosophy is also a way of life, with rules for eating and speaking?",
      ],
    },
    {
      id: "xenophanes",
      title: "Xenophanes: Gods Made in Our Image",
      minutes: 20,
      access: "free",
      intro: [
        "Xenophanes of Colophon (c. 570–475 BC) left Ionia as a young man and spent the rest of a long life as a traveling poet. By his own count he had been tossing his thoughts up and down Greece for sixty-seven years (B8).",
        "His verses go after Homer and Hesiod. If there are gods, they cannot be thieves, adulterers and deceivers, and the very shape we give them betrays that we made them up. He then offers a new idea of god and one of the first statements of the limits of human knowledge.",
      ],
      reading: {
        author: "Xenophanes of Colophon",
        work: "Fragments (DK 21)",
        date: "6th–5th centuries BC",
        selection:
          "B11, B12 and B14–B16 (the gods of the poets); B23–B26 (one god); B18 and B34 (the limits of knowledge); B2 (wisdom against athletics)",
        locatorSystem: "Diels–Kranz (DK) numbers",
        translations: [
          burnet,
          {
            translator: "J. H. Lesher",
            title: "Xenophanes of Colophon: Fragments",
            year: 1992,
            publicDomain: false,
          },
          waterfieldFirst,
        ],
      },
      breakdown: [
        {
          locator: "B11–B12",
          title: "Gods behaving badly",
          summary:
            "Homer and Hesiod attributed to the gods everything that is shameful and blameworthy among humans: theft, adultery and deceiving one another.",
          points: ["An ethical argument: whatever is divine must be good, so the poets' stories cannot be true."],
        },
        {
          locator: "B14–B16",
          title: "Gods in our image",
          summary:
            "Mortals suppose that gods are born and have clothes, voices and bodies like their own. Ethiopians say their gods are snub-nosed and black, Thracians that theirs are blue-eyed and red-haired. If cattle, horses or lions had hands and could draw, horses would draw gods like horses and cattle gods like cattle.",
          points: [
            "The projection argument: our pictures of the gods tell us about ourselves.",
            "One of the earliest observations of cultural variation in belief.",
          ],
        },
        {
          locator: "B23–B26",
          title: "One god",
          summary:
            "One god, greatest among gods and humans, like mortals neither in body nor in thought. He sees as a whole, thinks as a whole and hears as a whole; without effort he shakes all things by the thought of his mind; he always stays in the same place and does not move.",
          points: [
            "'Greatest among gods': is this monotheism? Scholars disagree.",
            "A single, unmoving divine being will matter for Parmenides.",
          ],
        },
        {
          locator: "B18, B34",
          title: "What can we know?",
          summary:
            "The gods did not reveal everything to mortals from the start; by searching, in time, they find out better. Yet no one has known, or will know, the clear truth about the gods and the things I speak of: even if someone happened to say exactly what is so, he would not know it. Opinion is allotted to all.",
          points: [
            "One of the first sharp lines between true belief and knowledge, a distinction Plato's *Meno* takes up.",
            "Progress through inquiry, without certainty: an early fallibilism.",
          ],
        },
        {
          locator: "B2",
          title: "Wisdom versus athletics",
          summary:
            "Olympic victors are honored with front-row seats and meals at public expense, yet 'our wisdom is better than the strength of men and horses'. A good wrestler does not make a city well governed.",
          points: ["Remember this when Socrates proposes free meals for himself in the *Apology* (36d)."],
        },
      ],
      questions: [
        "If the projection argument works against Homer's gods, does it also work against Xenophanes' own god?",
        "B34 says you might hit on the truth without knowing it. What would be missing?",
      ],
    },
  ],
};
