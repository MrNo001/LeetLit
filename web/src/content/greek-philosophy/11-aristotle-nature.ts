import type { RoadmapNode } from "../types";

export const aristotleNature: RoadmapNode = {
  id: "aristotle-nature",
  title: "Aristotle: Logic, Nature & Soul",
  era: "384–322 BC",
  summary:
    "Plato's student for twenty years, Aristotle built the tools of logic and studied nature as a world of real, changing substances, explained by four kinds of cause, with the soul as the form of a living body.",
  position: { x: 0, y: 7 },
  requires: ["plato-knowledge"],
  lessons: [
    {
      id: "aristotle-logic",
      title: "Categories and the Syllogism",
      minutes: 35,
      access: "free",
      intro: [
        "Aristotle (384–322 BC) came to Plato's Academy at seventeen and stayed twenty years. He later tutored the young Alexander the Great and founded his own school at the Lyceum in Athens. His surviving works are dense lecture notes rather than polished dialogues; read them slowly, with a pencil.",
        "We start with the toolkit later editors collected as the *Organon*, 'the instrument'. The *Categories* sorts everything there is into ten kinds, with individual substances at the center. The *Prior Analytics* invents formal logic: valid argument as a matter of form, with letters standing in for terms.",
      ],
      reading: {
        author: "Aristotle",
        work: "*Categories* and *Prior Analytics*",
        date: "4th century BC",
        selection: "*Categories* 1–5 (1a1–4b19); *Prior Analytics* I.1 (24a10–24b30) and I.4 (25b26–26b33)",
        locatorSystem: "Bekker numbers",
        translations: [
          { translator: "Octavius Freire Owen", title: "The Organon", year: 1853, publicDomain: true },
          { translator: "E. M. Edghill", title: "Categoriae (The Works of Aristotle, vol. I)", year: 1928, publicDomain: true },
          { translator: "A. J. Jenkinson", title: "Analytica Priora (The Works of Aristotle, vol. I)", year: 1928, publicDomain: true },
          {
            translator: "J. L. Ackrill",
            title: "Categories and De Interpretatione",
            year: 1963,
            publicDomain: false,
          },
          { translator: "Robin Smith", title: "Prior Analytics", year: 1989, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "Categories 1 (1a1–15)",
          title: "Same name, different things",
          summary:
            "Things are homonymous when they share a name but not a definition: in Greek, both a man and a picture of a man can be called *zōon*. They are synonymous when they share both name and definition, as a man and an ox are both animals.",
          points: ["Ambiguity is the first thing a careful thinker checks for."],
        },
        {
          locator: "Categories 2 (1a20–1b9)",
          title: "Said of, present in",
          summary:
            "Some things are said of a subject without being in it (man, of Socrates); some are in a subject without being said of it (a particular white, in a body); some are both (knowledge, which is in the soul and said of grammar); and some are neither: this individual man, this individual horse.",
          points: ["The individual, which is neither said of nor in anything, is the base everything else depends on."],
        },
        {
          locator: "Categories 4 (1b25–2a4)",
          title: "Ten categories",
          summary:
            "Every simple expression signifies a substance (man), a quantity (four feet long), a quality (white), a relation (double), a place (in the Lyceum), a time (yesterday), a position (lying down), a having (has shoes on), an acting (cutting) or a being acted on (being cut).",
          points: [
            "Is this a list of the kinds of things there are, or of the kinds of things we can say? Commentators have argued about it for two thousand years.",
          ],
        },
        {
          locator: "Categories 5 (2a11–4b19)",
          title: "Primary substance",
          summary:
            "Primary substances, individual things such as this man or this horse, are neither said of a subject nor in one. If they did not exist, nothing else could. A substance can take on contrary qualities while remaining one and the same: the same man is pale at one time and dark at another.",
          points: ["A pointed contrast with Plato, for whom the Forms, not individuals, are most real."],
        },
        {
          locator: "Prior Analytics I.1 (24b18–20)",
          title: "What a deduction is",
          summary:
            "'A deduction is an argument in which, certain things being laid down, something other than these follows of necessity from their being so.'",
          points: ["Validity as necessary consequence, whatever the subject matter."],
        },
        {
          locator: "Prior Analytics I.4 (25b26–26b33)",
          title: "The first figure",
          summary:
            "If A belongs to every B, and B to every C, then A must belong to every C. Aristotle works through which combinations of 'every', 'no' and 'some' yield a conclusion and which do not, using letters as variables.",
          points: [
            "Letters as variables are Aristotle's invention, and with them formal logic as a discipline.",
            "Medieval logicians named this first pattern 'Barbara'.",
          ],
        },
      ],
      questions: [
        "Place five objects in your room into the ten categories. Do any resist?",
        "Is the logic of 'all', 'some' and 'no' enough for everyday reasoning? What does it leave out?",
      ],
    },
    {
      id: "aristotle-physics",
      title: "Physics II: Nature and the Four Causes",
      minutes: 35,
      access: "free",
      intro: [
        "For Aristotle, nature (*physis*) is neither one underlying stuff, as for the Milesians, nor a realm of shadows, as in Plato's Cave. It is a source of change and rest inside things such as plants, animals and the elements themselves.",
        "*Physics* II explains what it is to explain something. There are four kinds of cause (*aitia*), four ways of answering the question 'why?'. And Aristotle defends the claim that nature acts for the sake of something, against Empedocles and the atomists, who thought chance and necessity were enough.",
      ],
      reading: {
        author: "Aristotle",
        work: "*Physics*, Book II",
        date: "4th century BC",
        selection: "The whole of Book II (192b8–200b10)",
        locatorSystem: "Bekker numbers",
        translations: [
          {
            translator: "R. P. Hardie and R. K. Gaye",
            title: "Physica (The Works of Aristotle, vol. II)",
            year: 1930,
            publicDomain: true,
          },
          { translator: "Robin Waterfield", title: "Physics", year: 1996, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "II.1 (192b8–193b21)",
          title: "What nature is",
          summary:
            "Natural things have within themselves a source of change and rest; artifacts do not. If you planted a wooden bed and it sprouted, Antiphon pointed out, what grew would be wood, not a bed. Nature is both matter and form, but form more than matter.",
          points: ["Why form? A thing is more fully what it is when it has reached its form than when it is only potentially that thing."],
        },
        {
          locator: "II.2 (193b22–194b15)",
          title: "Physicist and mathematician",
          summary:
            "The mathematician studies shapes in abstraction from bodies. The student of nature studies forms that cannot be separated from their matter, like snubness, which is concavity in a nose.",
          points: ["Form in matter, not apart from it: the core of Aristotle's disagreement with Plato."],
        },
        {
          locator: "II.3 (194b16–195b30)",
          title: "The four causes",
          summary:
            "The material cause is what a thing is made of (the bronze of a statue); the formal cause is its form or definition; the efficient cause is the source of the change (the sculptor, or a father of his child); the final cause is that for the sake of which (health is why someone goes for a walk).",
          points: ["Each answers a different 'why?'. A complete explanation may need all four."],
        },
        {
          locator: "II.4–6 (195b31–198a13)",
          title: "Luck and chance",
          summary:
            "Chance events are incidental results among things that could have happened for a purpose: you go to the market for some other reason and happen to meet someone who owes you money.",
          points: ["Even chance is defined by reference to purpose."],
        },
        {
          locator: "II.8 (198b10–199b33)",
          title: "Does nature act for an end?",
          summary:
            "The objection: rain falls of necessity, not in order to make crops grow; teeth come up sharp in front and broad at the back by chance, and the creatures that happened to be well put together survived, while others, like Empedocles' 'man-faced ox-creatures', perished. Aristotle replies that what happens always or for the most part cannot be due to chance.",
          points: ["A strikingly modern objection, close to natural selection, and an influential answer."],
        },
        {
          locator: "II.9 (199b34–200b10)",
          title: "Conditional necessity",
          summary: "If a saw is to cut, it must be made of iron. Matter is necessary, but only on the condition of the end it serves.",
          points: ["Purpose and necessity are not rivals: the end explains why the matter must be as it is."],
        },
      ],
      questions: [
        "Give the four causes for a smartphone and for an oak tree. Which is harder?",
        "Has modern biology refuted Aristotle's teleology, or translated it into talk of 'function'?",
      ],
    },
    {
      id: "aristotle-de-anima",
      title: "De Anima: The Soul as Form of the Body",
      minutes: 40,
      access: "pro",
      intro: [
        "What is the soul? In Plato's *Phaedo* it is a separate, immortal thing temporarily imprisoned in a body. Aristotle's answer is subtler: the soul is the form of a living body, its organization for living, as the shape stamped into wax is the form of the wax.",
        "Every living thing has a soul, plants included, and the soul's capacities stack up like a ladder: nutrition, then perception, then thought. Only intellect raises the old question of survival, in one of the most debated passages in philosophy.",
      ],
      reading: {
        author: "Aristotle",
        work: "*On the Soul* (*De Anima*)",
        date: "4th century BC",
        selection: "II.1–3 (412a3–415a13), II.12 (424a17–424b18) and III.4–5 (429a10–430a25)",
        locatorSystem: "Bekker numbers",
        translations: [
          { translator: "R. D. Hicks", title: "De Anima", year: 1907, publicDomain: true },
          // In the US public domain from 1 January 2027.
          { translator: "J. A. Smith", title: "De Anima (The Works of Aristotle, vol. III)", year: 1931, publicDomain: false },
          {
            translator: "Hugh Lawson-Tancred",
            title: "De Anima (On the Soul)",
            year: 1986,
            publicDomain: false,
          },
          { translator: "C. D. C. Reeve", title: "De Anima", year: 2017, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "II.1 (412a3–413a10)",
          title: "The definition",
          summary:
            "The soul is 'the first actuality of a natural body that has life potentially', that is, of a body with organs. So we need not ask whether soul and body are one, any more than whether the wax and its shape are one. If the eye were an animal, sight would be its soul.",
          points: ["Between Plato's dualism and the atomists' materialism: the soul is neither a separate thing nor mere stuff."],
        },
        {
          locator: "II.2–3 (413a11–415a13)",
          title: "A ladder of capacities",
          summary:
            "Plants have only the nutritive soul: nourishment, growth and reproduction. Animals add perception and desire, and some add movement; humans add thought. Each higher capacity presupposes the lower, as a square contains a triangle.",
          points: ["Soul as a biological idea: what living things can do."],
        },
        {
          locator: "II.12 (424a17–24)",
          title: "Perception",
          summary:
            "A sense receives the form of what it perceives without the matter, as wax takes the imprint of a signet ring without the iron or gold.",
          points: ["An ancestor of later theories of mental representation."],
        },
        {
          locator: "III.4 (429a10–430a9)",
          title: "Thinking",
          summary:
            "Before it thinks, the intellect is actually none of the things it can think: it is like a writing tablet on which nothing has yet been written.",
          points: ["The source of the image of the mind as a blank slate (*tabula rasa*)."],
        },
        {
          locator: "III.5 (430a10–25)",
          title: "The active intellect",
          summary:
            "There is an intellect that becomes all things and another that makes all things, like light. This second intellect alone is separable, deathless and eternal.",
          points: [
            "About fifteen lines that produced two thousand years of commentary, from Alexander of Aphrodisias to Averroes and Aquinas.",
          ],
        },
      ],
      questions: [
        "Is the wax analogy convincing? What would the Socrates of the *Phaedo* object?",
        "Does the modern view of the mind as what the brain does look more like Plato's view or Aristotle's?",
      ],
    },
  ],
};
