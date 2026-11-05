import type { RoadmapNode } from "../types";
import { irwinEthics, rackhamEthics, rossEthics } from "./translations";

export const aristotleEthics: RoadmapNode = {
  id: "aristotle-ethics",
  title: "Aristotle: Ethics & Politics",
  era: "c. 335–322 BC",
  summary:
    "How to live well. The *Nicomachean Ethics* defines happiness as the soul's activity in accordance with virtue, explains virtue as a mean learned by habit and ends with the life of contemplation; the *Politics* calls the human being a political animal.",
  position: { x: 2, y: 7 },
  requires: ["plato-republic"],
  lessons: [
    {
      id: "ethics-happiness",
      title: "Nicomachean Ethics I: Happiness and the Human Function",
      minutes: 40,
      access: "free",
      intro: [
        "Every action aims at some good. If there is one good we want for its own sake, and everything else for the sake of it, then knowing it would be like an archer having a target to aim at. Everyone agrees on its name, *eudaimonia*: happiness, flourishing, living well. They disagree about what it is.",
        "Book I of the *Nicomachean Ethics* argues that the answer can be found by asking what the distinctive function of a human being is. Its method matters as much as its conclusion: start from what people already believe, and expect only as much precision as the subject allows.",
      ],
      reading: {
        author: "Aristotle",
        work: "*Nicomachean Ethics*, Book I",
        date: "4th century BC",
        selection: "The whole of Book I (1094a1–1103a10)",
        locatorSystem: "Bekker numbers",
        translations: [
          rossEthics,
          rackhamEthics,
          irwinEthics,
          { translator: "Roger Crisp", title: "Nicomachean Ethics", year: 2000, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "I.1–2 (1094a1–b11)",
          title: "The highest good",
          summary:
            "'Every craft and every inquiry, and similarly every action and choice, seems to aim at some good.' Ends form chains: bridle-making serves horsemanship, and horsemanship serves generalship. There must be a highest end, and the science that studies it is politics.",
          points: ["An ethics built on goals rather than rules."],
        },
        {
          locator: "I.3 (1094b11–1095a13)",
          title: "How precise can ethics be?",
          summary:
            "It is the mark of an educated person to look for precision in each kind of thing only as far as the subject allows. The young make poor students of ethics, since they lack experience of life and follow their feelings.",
          points: ["Ethics deals in what holds 'for the most part', not in proofs."],
        },
        {
          locator: "I.4–5 (1095a14–1096a10)",
          title: "Three lives",
          summary:
            "The many identify happiness with pleasure, the refined with honor, and a few with contemplation. The life of making money is not a real candidate, since wealth is only useful for something else.",
          points: ["The lives of pleasure, politics and thought: keep them in mind for Book X."],
        },
        {
          locator: "I.6 (1096a11–1097a14)",
          title: "Against Plato's Form of the Good",
          summary:
            "Though Plato and his followers are friends, Aristotle says, piety requires honoring the truth above friends. 'Good' is said in as many ways as 'being', and a single, separate Form of the Good would be of no use to a doctor or a weaver.",
          points: [
            "The source of the Latin saying 'Plato is a friend, but truth is a greater friend'.",
            "Ethics as practical knowledge, not a theory of Forms.",
          ],
        },
        {
          locator: "I.7 (1097a15–1098b8)",
          title: "The function argument",
          summary:
            "Happiness is complete and self-sufficient. Just as a flute player's good lies in playing well, the human good lies in the human function: activity of the soul in accordance with reason. So the human good is activity of the soul in accordance with virtue (*aretē*), over a complete life, for 'one swallow does not make a spring'.",
          points: ["The most debated argument in ancient ethics. Does 'what a human being is for' even make sense?"],
        },
        {
          locator: "I.8–13 (1098b9–1103a10)",
          title: "Luck and the parts of the soul",
          summary:
            "Happiness needs some external goods: no one calls Priam happy after his misfortunes. The soul has a rational part and a part that can listen to reason, which gives two kinds of virtue: intellectual and moral.",
          points: ["This division organizes the rest of the *Ethics*: Books II–V treat moral virtue, Book VI intellectual virtue."],
        },
      ],
      questions: [
        "Is happiness the final goal of everything you do? Try to find a counterexample.",
        "What, if anything, is a human being 'for'?",
      ],
    },
    {
      id: "ethics-virtue",
      title: "Nicomachean Ethics II–III: Virtue and the Mean",
      minutes: 45,
      access: "free",
      intro: [
        "How do we become good? Not by learning a theory, says Aristotle, but by practice: we become just by doing just acts, as we become builders by building.",
        "Book II defines virtue of character as a settled state that lies in a mean between excess and deficiency, as courage lies between rashness and cowardice. Book III asks when we are responsible for what we do, and argues that we are responsible even for the characters our actions have formed.",
      ],
      reading: {
        author: "Aristotle",
        work: "*Nicomachean Ethics*, Books II–III",
        date: "4th century BC",
        selection: "Book II (1103a14–1109b26) and Book III.1–5 (1109b30–1115a3)",
        locatorSystem: "Bekker numbers",
        translations: [rossEthics, rackhamEthics, irwinEthics],
      },
      breakdown: [
        {
          locator: "II.1–2 (1103a14–1104b3)",
          title: "Virtue by habit",
          summary:
            "Virtue of character comes from habit (*ethos*, the root of 'ethics'). We become just by doing just things and temperate by doing temperate things, and lawgivers make citizens good by training their habits.",
          points: ["Character as something formed by practice, like a skill."],
        },
        {
          locator: "II.3 (1104b3–1105a16)",
          title: "Pleasure as a sign",
          summary:
            "The pleasure or pain that follows an action shows your state: someone who gives up bodily pleasures and enjoys doing so is temperate; someone who resents it is self-indulgent.",
          points: ["Virtue is not only right action but right feeling."],
        },
        {
          locator: "II.5–6 (1105b19–1107a27)",
          title: "The definition",
          summary:
            "Virtue is 'a state that decides, consisting in a mean relative to us, defined by reason, as the person of practical wisdom would define it'. The mean is relative to us: what is a modest meal for Milo the wrestler is a feast for a beginner. Some actions have no mean at all, such as adultery, theft and murder.",
          points: ["'Mean' does not mean mediocrity: sometimes the right response is strong anger or great generosity."],
        },
        {
          locator: "II.7 (1107a28–1108b10)",
          title: "A table of virtues",
          summary:
            "Courage, temperance, generosity, magnificence, greatness of soul, proper ambition, mildness, truthfulness, wit and friendliness, each between two vices, together with the mean states of feeling, modesty and righteous indignation.",
          points: ["A portrait of good character in fourth-century Athens. Which items fit your world, and which don't?"],
        },
        {
          locator: "II.9 (1109a20–b26)",
          title: "Hitting the mean",
          summary:
            "Anyone can get angry, but to be angry with the right person, to the right extent, at the right time, for the right reason and in the right way is not easy. Steer away from the worse extreme, and pull yourself toward the opposite one, as people straighten a bent stick.",
          points: ["Practical advice for changing your own character."],
        },
        {
          locator: "III.1–5 (1109b30–1115a3)",
          title: "Responsibility",
          summary:
            "Actions are involuntary when forced or done in ignorance; throwing cargo overboard in a storm is a mixed case. Decision is deliberate desire for things in our power, and we deliberate about how to reach ends, not about the ends themselves. We are responsible for our characters too, since our actions formed them.",
          points: ["The ancestor of later debates about free will and moral luck."],
        },
      ],
      questions: [
        "Pick a virtue you care about. What are its two opposing vices, and which do you lean toward?",
        "If character is formed by habits in childhood, are we responsible for it?",
      ],
    },
    {
      id: "contemplation-and-the-city",
      title: "Contemplation and the Political Animal",
      minutes: 45,
      access: "pro",
      intro: [
        "The *Ethics* ends where the *Republic* began, with the relation between the good person and the good city. Book X argues that the happiest life is one of contemplation, the activity of our most divine part, while the life of practical virtue is happy 'in a secondary way'.",
        "The last chapter hands the reader on to politics, and the *Politics* opens by arguing that the city exists by nature, because a human being is by nature a political animal. It also contains one of philosophy's darkest arguments, the defense of natural slavery, which we read critically.",
      ],
      reading: {
        author: "Aristotle",
        work: "*Nicomachean Ethics* X and *Politics* I",
        date: "4th century BC",
        selection: "*Nicomachean Ethics* X.6–9 (1176a30–1181b23); *Politics* I.1–7 (1252a1–1255b40)",
        locatorSystem: "Bekker numbers",
        translations: [
          rossEthics,
          rackhamEthics,
          { translator: "Benjamin Jowett", title: "Politics", year: 1885, publicDomain: true },
          { translator: "C. D. C. Reeve", title: "Politics", year: 1998, publicDomain: false },
        ],
      },
      breakdown: [
        {
          locator: "Ethics X.6–7 (1176a30–1178a8)",
          title: "The life of contemplation",
          summary:
            "If happiness is activity in accordance with virtue, it should accord with the highest virtue, that of intellect. Contemplation is the most continuous, most pleasant and most self-sufficient activity, loved for its own sake and done at leisure. We should not think only human thoughts but, as far as possible, make ourselves immortal.",
          points: [
            "This seems to clash with Book I's picture of a full human life. Scholars argue over 'dominant' and 'inclusive' readings.",
          ],
        },
        {
          locator: "Ethics X.8 (1178a9–1179a32)",
          title: "The second-best life",
          summary:
            "The life of the other virtues is happy in a secondary way, since it is a human life. The gods cannot be just or brave, for they make no contracts and face no dangers; their only activity is contemplation.",
          points: ["What would the gods be doing, Aristotle asks, if not thinking?"],
        },
        {
          locator: "Ethics X.9 (1179a33–1181b23)",
          title: "From ethics to legislation",
          summary:
            "Arguments alone do not make most people good; upbringing and laws do. So the student of ethics must study legislation, and the *Ethics* ends by announcing the *Politics*.",
          points: ["The *Ethics* and the *Politics* form one inquiry into the human good."],
        },
        {
          locator: "Politics I.1–2 (1252a1–1253a7)",
          title: "The natural city",
          summary:
            "Households join into villages and villages into the city (*polis*), which comes to be for the sake of living but exists for the sake of living well. The city exists by nature, and 'a human being is by nature a political animal'. Anyone without a city by nature is either a beast or a god.",
          points: ["Contrast the sophists' view that cities rest on mere convention."],
        },
        {
          locator: "Politics I.2 (1253a7–39)",
          title: "Speech and justice",
          summary:
            "Bees and herd animals live together, but only humans have speech (*logos*), which makes clear what is beneficial and harmful, just and unjust. The city is prior by nature to the individual, as a whole is to its parts: a hand cut off from the body is a hand in name only.",
          points: ["Political life grounded in human nature rather than in a contract."],
        },
        {
          locator: "Politics I.3–7 (1253b1–1255b40)",
          title: "A dark chapter: natural slavery",
          summary:
            "Aristotle argues that some people are slaves by nature and that being ruled benefits them. He admits that many actual slaves were enslaved by war and convention rather than by nature.",
          points: [
            "Read this critically. It shows how a philosophical framework can be used to rationalize injustice, and why arguments from 'nature' need scrutiny.",
          ],
        },
      ],
      questions: [
        "Is a life of thinking really happier than a life of action? Would you choose it?",
        "Aristotle says a person outside the city is a beast or a god. What would he make of a hermit, or of a citizen of the internet?",
      ],
    },
  ],
};
