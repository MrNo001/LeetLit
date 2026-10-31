import type { RoadmapNode, Translation } from "../types";
import { fowler, grubeCooper, jowett } from "./translations";

const translations: Translation[] = [jowett, fowler, grubeCooper];

export const socrates: RoadmapNode = {
  id: "socrates",
  title: "Socrates on Trial",
  era: "469–399 BC",
  summary:
    "Socrates wrote nothing; we meet him mainly in Plato's dialogues. Three short works show his method of cross-examination, his mission and his death: *Euthyphro*, *Apology* and *Crito*.",
  position: { x: 1, y: 5 },
  requires: ["sophists", "pluralists-atomists"],
  lessons: [
    {
      id: "euthyphro",
      title: "Euthyphro: What Is Piety?",
      minutes: 40,
      access: "free",
      intro: [
        "Socrates is on his way to answer the charges that will lead to his execution when he meets Euthyphro, a self-assured religious expert who is prosecuting his own father for the death of a laborer. If anyone knows what piety is, Euthyphro does. Over five attempts at a definition, Socrates shows that he does not.",
        "The dialogue is the clearest example of Socrates' method, the *elenchus* or cross-examination: ask for a definition, draw out its consequences, and show that it conflicts with something else the speaker believes.",
        "A note on sources: Socrates (469–399 BC) wrote nothing. Plato, Xenophon and the comic poet Aristophanes all portray him, and their portraits differ. In these lessons, 'Socrates' means Plato's Socrates.",
      ],
      reading: {
        author: "Plato",
        work: "*Euthyphro*",
        date: "written c. 399–390 BC; set in 399 BC",
        selection: "The whole dialogue (2a–16a)",
        locatorSystem: "Stephanus pages",
        translations,
      },
      breakdown: [
        {
          locator: "2a–5d",
          title: "Two court cases",
          summary:
            "The two men meet outside the office of the magistrate who handles religious cases. Socrates has been indicted by Meletus for corrupting the young and not believing in the city's gods. Euthyphro is prosecuting his father, who left a laborer bound in a ditch, where he died.",
          points: ["Dramatic irony: the man on trial for impiety interviews the expert on piety."],
        },
        {
          locator: "5d–6e",
          title: "First answer: an example",
          summary:
            "Piety is doing what I am doing now: prosecuting wrongdoers. Socrates wants not an example but the form (*eidos*) itself, the one character that makes all pious things pious.",
          points: ["The Socratic question 'What is F?' and the difference between an example and a definition."],
        },
        {
          locator: "6e–9e",
          title: "'What the gods love'",
          summary:
            "Piety is what is dear to the gods. But by Euthyphro's own stories the gods quarrel, so the same act would be both pious and impious. Amended: piety is what all the gods love.",
          points: ["Refutation by internal inconsistency, using the speaker's own beliefs."],
        },
        {
          locator: "10a–11b",
          title: "The dilemma",
          summary:
            "Is the pious loved by the gods because it is pious, or is it pious because it is loved? Euthyphro chooses the first, which means being god-loved is only something that happens to piety, not what piety is.",
          points: ["The 'Euthyphro dilemma' still structures debates about whether morality depends on divine command."],
        },
        {
          locator: "11b–14a",
          title: "Piety as part of justice",
          summary:
            "Piety is the part of justice concerned with care of the gods. But care improves what it cares for: do we make the gods better? Perhaps it is service, then; but service to produce what?",
          points: ["Here Socrates helps build the definition he goes on to test."],
        },
        {
          locator: "14b–16a",
          title: "Prayer and sacrifice",
          summary:
            "Piety is knowing how to sacrifice and pray: giving to the gods and asking from them, 'a kind of trading skill'. The argument circles back to 'what is dear to the gods', and Euthyphro hurries off.",
          points: ["*Aporia*, an impasse: the typical ending of an early Platonic dialogue."],
        },
      ],
      questions: [
        "Answer the dilemma yourself: is something good because God (or society) approves of it, or approved because it is good?",
        "Socrates ends without an answer. What, if anything, has been gained?",
      ],
    },
    {
      id: "apology",
      title: "Apology: The Examined Life",
      minutes: 50,
      access: "free",
      intro: [
        "In 399 BC Socrates, then seventy, stood before a jury of 501 Athenians on charges of corrupting the young and not believing in the gods of the city. The *Apology* (from the Greek *apologia*, 'defense speech') is Plato's version of what he said. Plato was in the audience.",
        "It is not an apology in the modern sense. Socrates explains why he has spent his life questioning people, refuses to stop, and accepts death rather than give up philosophy. It contains the most famous sentence on this roadmap: the unexamined life is not worth living.",
      ],
      reading: {
        author: "Plato",
        work: "*Apology*",
        date: "written c. 399–390 BC; set in 399 BC",
        selection: "The whole speech (17a–42a)",
        locatorSystem: "Stephanus pages",
        translations,
      },
      breakdown: [
        {
          locator: "17a–19a",
          title: "Plain speaking and old slanders",
          summary:
            "Socrates asks to be allowed to speak in his usual way. His real danger, he says, is not his present accusers but years of slander: that he investigates things in the sky and under the earth and makes the weaker argument the stronger, as in Aristophanes' comedy *Clouds*.",
          points: ["He separates himself from both the natural philosophers and the sophists. Is the distinction fair?"],
        },
        {
          locator: "20c–23c",
          title: "The oracle",
          summary:
            "Socrates' friend Chaerephon asked the oracle at Delphi whether anyone was wiser than Socrates, and the answer was no. Puzzled, Socrates questioned politicians, poets and craftsmen, and found that each thought he knew things he did not. His own wisdom was only this: he did not think he knew what he did not know.",
          points: [
            "The origin of his mission, and of his unpopularity.",
            "'Human wisdom' means knowing the limits of one's knowledge.",
          ],
        },
        {
          locator: "24b–28a",
          title: "Cross-examining Meletus",
          summary:
            "Socrates questions his accuser in court. Who makes the young better? Would anyone corrupt his companions on purpose, knowing they would harm him in return? How can someone believe in divine activities without believing in divinities?",
          points: ["The elenchus used as a courtroom weapon. Notice how it humiliates as well as refutes."],
        },
        {
          locator: "28b–35d",
          title: "The gadfly",
          summary:
            "Socrates would not stop philosophizing even if he were acquitted on that condition. The god has attached him to Athens like a gadfly to a large, sluggish horse. A divine sign has kept him out of politics, and he refused unjust orders both under the democracy and under the Thirty Tyrants.",
          points: [
            "'A better man cannot be harmed by a worse' (30c–d).",
            "Conscience above obedience. Compare this with the *Crito*.",
          ],
        },
        {
          locator: "35e–38b",
          title: "The penalty",
          summary:
            "Found guilty, Socrates proposes as his 'penalty' free meals in the town hall, the honor given to Olympic victors. He says that 'the unexamined life is not worth living for a human being' (38a), and finally offers a fine guaranteed by his friends.",
          points: ["Compare Xenophanes' complaint about honors for athletes (B2)."],
        },
        {
          locator: "38c–42a",
          title: "After the sentence",
          summary:
            "To those who condemned him: it is harder to escape wickedness than death. To those who voted to acquit: death is either a dreamless sleep or a journey to a place where he can question Homer, Hesiod and the heroes, and either would be a gain. 'Now it is time to go, I to die and you to live; which of us goes to the better is unclear to all but the god.'",
          points: ["Calm in the face of death becomes a model for the Stoics and Epicureans."],
        },
      ],
      questions: [
        "Socrates says the unexamined life is not worth living. Is that true for everyone?",
        "Was Socrates' refusal to stop philosophizing a form of civil disobedience? Hold your answer until you have read the *Crito*.",
      ],
    },
    {
      id: "crito",
      title: "Crito: Should Socrates Escape?",
      minutes: 30,
      access: "free",
      intro: [
        "Socrates sits in prison awaiting execution. His old friend Crito arrives before dawn with everything arranged: guards bribed, money ready, a refuge in Thessaly. Socrates will go only if escaping is just.",
        "The dialogue builds his answer in two stages: first the principle that one must never do wrong, not even in return for a wrong; then a speech in the voice of the Laws of Athens, who argue that escaping would break an agreement Socrates has kept all his life. It is one of the first arguments in political philosophy about why we should obey the law.",
      ],
      reading: {
        author: "Plato",
        work: "*Crito*",
        date: "written c. 399–390 BC; set in 399 BC",
        selection: "The whole dialogue (43a–54e)",
        locatorSystem: "Stephanus pages",
        translations,
      },
      breakdown: [
        {
          locator: "43a–44b",
          title: "Waiting for the ship",
          summary:
            "Executions in Athens wait while the sacred ship is away at Delos, and it is due back. Socrates has dreamed of a woman in white who quoted Homer: 'on the third day you will come to fertile Phthia'.",
          points: ["A calm opening. The dream tells Socrates when he will die."],
        },
        {
          locator: "44b–46a",
          title: "Crito's case",
          summary:
            "Escape would protect Crito's reputation, since people will think he was too stingy to pay; the money is ready; staying hands victory to Socrates' enemies, abandons his sons and is a kind of cowardice.",
          points: ["Arguments from reputation, consequences and duty to family. Which is strongest?"],
        },
        {
          locator: "46b–48d",
          title: "Whose opinion matters",
          summary:
            "We should heed the expert, not the many, as an athlete heeds his trainer. What matters is not living but living well, and living well means living honorably and justly.",
          points: ["This reduces all of Crito's considerations to one question: would escaping be just?"],
        },
        {
          locator: "48d–50a",
          title: "Never do wrong",
          summary:
            "One must never do wrong, not even in return for a wrong, nor harm anyone, whatever one has suffered at their hands. Few people believe this, Socrates admits, and those who do and those who don't can find no common ground.",
          points: ["A radical break with the traditional Greek rule: help your friends and harm your enemies."],
        },
        {
          locator: "50a–54d",
          title: "The speech of the Laws",
          summary:
            "The Laws ask whether escaping would not destroy them, as far as Socrates is able. They gave him birth, nurture and education. He stayed in Athens for seventy years when he was free to leave, and so agreed to obey them or else persuade them otherwise. Escape would also ruin his friends and disgrace his teaching.",
          points: [
            "An early version of the argument from tacit consent, a root of later social contract theory.",
            "Can this be squared with the *Apology*, where Socrates says he would disobey an order to stop philosophizing?",
          ],
        },
        {
          locator: "54d–e",
          title: "The Corybants",
          summary:
            "Socrates says the Laws' words echo in his ears like the flutes in the ears of the Corybants, the ecstatic dancers, so that he can hear nothing else. 'Let us act in this way, since this is the way the god is leading us.'",
          points: ["Has Socrates been persuaded by an argument, or carried away by something closer to possession?"],
        },
      ],
      questions: [
        "Do you have a duty to obey the laws of a state you could have left? What about one you could not leave?",
        "Can the *Crito* (obey the Laws) and the *Apology* (I will not stop philosophizing) be reconciled?",
      ],
    },
  ],
};
