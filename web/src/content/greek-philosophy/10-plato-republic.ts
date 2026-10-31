import type { RoadmapNode } from "../types";
import { republicTranslations } from "./translations";

const reading = {
  author: "Plato",
  work: "*Republic*",
  date: "c. 375 BC",
  locatorSystem: "Stephanus pages",
  translations: republicTranslations,
};

export const platoRepublic: RoadmapNode = {
  id: "plato-republic",
  title: "Plato: The Republic",
  era: "c. 375 BC",
  summary:
    "Plato's masterpiece asks what justice is and whether the just life is happier than the unjust one. To answer, it builds an ideal city, a theory of the soul, an education for philosopher-rulers and the allegory of the Cave.",
  position: { x: 2, y: 6 },
  requires: ["socrates"],
  lessons: [
    {
      id: "republic-1-2",
      title: "Republic I–II: Why Be Just?",
      minutes: 60,
      access: "free",
      intro: [
        "The *Republic* opens with a casual conversation at the house of the old merchant Cephalus and becomes a ten-book investigation of justice. Book I tests and refutes three traditional answers, ending with the sophist Thrasymachus' claim that justice is simply the advantage of the stronger.",
        "Book II then sets the challenge the rest of the work must meet: show that justice is worth having for its own sake, even if it brought no rewards at all.",
      ],
      reading: { ...reading, selection: "Book I and the opening of Book II (327a–367e)" },
      breakdown: [
        {
          locator: "327a–331d",
          title: "Cephalus: tell the truth and pay your debts",
          summary:
            "At the house of the wealthy old Cephalus, talk turns to what makes old age bearable. Cephalus values wealth because it means he never has to cheat anyone or die owing a debt. Socrates turns this into a definition, telling the truth and paying back what you owe, and refutes it: should you return a weapon to a friend who has gone mad?",
          points: ["The first of many counterexamples. Rules break down in hard cases."],
        },
        {
          locator: "331d–336a",
          title: "Polemarchus: help friends, harm enemies",
          summary:
            "Cephalus' son inherits the argument: justice is giving each what is owed, which means benefiting friends and harming enemies. Socrates argues that harming people makes them worse, and a just person cannot make anyone worse.",
          points: ["Compare the *Crito*: never do wrong, even in return for a wrong."],
        },
        {
          locator: "336b–354c",
          title: "Thrasymachus: the advantage of the stronger",
          summary:
            "The sophist Thrasymachus bursts in: justice is nothing but the advantage of the stronger, since rulers make laws to suit themselves. Injustice on a large enough scale is stronger, freer and more profitable than justice. Socrates answers with arguments about the craft of ruling and the function of the soul.",
          points: [
            "Socrates wins the arguments but convinces no one, and Book I ends with him admitting he still does not know what justice is.",
          ],
        },
        {
          locator: "357a–358d",
          title: "Three kinds of good",
          summary:
            "Glaucon distinguishes goods we value for themselves (harmless pleasures), goods we value only for their results (medicine, earning money), and goods we value for both (seeing, health). Socrates puts justice in the best class: valued both for itself and for its results.",
          points: ["The task of the whole *Republic* is set: show that justice is good in itself."],
        },
        {
          locator: "358e–362c",
          title: "The ring of Gyges",
          summary:
            "Glaucon argues that justice is a compromise among the weak, who agree not to wrong one another because they cannot get away with it. Give anyone the shepherd Gyges' ring of invisibility and they would act unjustly. Then compare a perfectly unjust man with a reputation for justice and a perfectly just man thought unjust, whipped and impaled: who is happier?",
          points: ["A thought experiment still used in debates about morality and reputation."],
        },
        {
          locator: "362d–367e",
          title: "Adeimantus: praise justice itself",
          summary:
            "Adeimantus adds that parents and poets praise justice only for its rewards, and even suggest the gods can be bought off with sacrifices. He asks Socrates to show what justice itself does to the soul of the person who has it.",
          points: ["Everything from here to the end of Book IX answers this challenge."],
        },
      ],
      questions: [
        "If you had Gyges' ring, would you behave differently? What does your answer suggest about why you are just?",
        "Is Thrasymachus describing how things are or how they ought to be?",
      ],
    },
    {
      id: "republic-2-4",
      title: "Republic II–IV: The City and the Soul",
      minutes: 75,
      access: "free",
      intro: [
        "To find justice in a single soul, Socrates proposes looking first at a whole city, where justice is written in larger letters. He builds one in speech, from a simple community of craftsmen to a city with a class of guardians whose education in stories, music and physical training is planned in detail.",
        "Once the city's four virtues have been found, he turns to the soul and argues that it, too, has three parts, so that justice is the same in both: each part doing its own work.",
      ],
      reading: { ...reading, selection: "Book II from 367e through the end of Book IV (367e–445e)" },
      breakdown: [
        {
          locator: "367e–372d",
          title: "Justice writ large",
          summary:
            "To see justice in one soul, look first at a city, where it is written in larger letters. The first city grows out of need: a farmer, a builder, a weaver and a shoemaker, each doing the one job that suits his nature.",
          points: ["The principle 'one person, one job' will turn out to define justice."],
        },
        {
          locator: "372e–376c",
          title: "A feverish city and its guardians",
          summary:
            "Glaucon calls the simple city fit only for pigs. Add luxuries and the city needs more land, which means war, which means a class of guardians: fierce to enemies and gentle to friends, like well-bred dogs.",
          points: ["Specialization extended to soldiers, and eventually to rulers."],
        },
        {
          locator: "376c–403c",
          title: "Education through stories and music",
          summary:
            "The guardians' first education is in stories, so the stories must be controlled. Gods must be shown as good and unchanging, heroes must not lament, and imitation is restricted. Musical modes and rhythms are chosen for the character they produce.",
          points: [
            "Compare Xenophanes' attack on Homer's gods.",
            "Censorship of poetry: is any of it defensible?",
          ],
        },
        {
          locator: "403c–417b",
          title: "Rulers and the noble lie",
          summary:
            "The rulers are chosen from the best of the guardians. All citizens are to be told a 'noble lie': that the god mixed gold into the souls of rulers, silver into those of auxiliaries, and bronze and iron into farmers and craftsmen. The guardians live in common, without private property.",
          points: ["Is a founding myth ever justified? Who gets to decide?"],
        },
        {
          locator: "427c–434d",
          title: "The four virtues of the city",
          summary:
            "The finished city is wise through its rulers, courageous through its auxiliaries, and moderate because everyone agrees on who should rule. Justice is what remains: each class doing its own work and not meddling in the work of others.",
          points: ["Justice is a property of how the whole is arranged, not a rule individuals follow."],
        },
        {
          locator: "434d–445e",
          title: "The three-part soul",
          summary:
            "The same thing cannot do or undergo opposites in the same respect at the same time (436b). So a thirsty person who refuses to drink must contain two parts, appetite and reason. Anger reveals a third, spirit. Justice in the soul matches justice in the city: reason rules, with spirit as its ally, over appetite.",
          points: [
            "Leontius, disgusted with himself for wanting to stare at corpses, shows spirit siding with reason against appetite (439e–440a).",
          ],
        },
      ],
      questions: [
        "Where does the analogy between city and soul strain?",
        "Leontius was angry with himself for wanting to look. Is that best explained by parts of the soul?",
      ],
    },
    {
      id: "republic-5-7",
      title: "Republic V–VII: Philosophers, the Sun, the Line and the Cave",
      minutes: 90,
      access: "free",
      intro: [
        "Pressed by his friends, Socrates faces three 'waves' of objection: women guardians, the abolition of the family among the guardians, and the most shocking of all, that cities will have no rest from evils until philosophers rule.",
        "Explaining what a philosopher is leads to the heart of Plato's metaphysics: the difference between knowledge and opinion, the Form of the Good, and three linked images, the Sun, the Divided Line and the Cave.",
      ],
      reading: { ...reading, selection: "Books V–VII (449a–541b)" },
      breakdown: [
        {
          locator: "449a–471c",
          title: "The first two waves",
          summary:
            "Socrates' friends make him explain two shocking proposals. Women with the right natures will be educated and serve as guardians alongside men, since the sexes differ in strength, not in the nature that fits someone to guard. And among the guardians there will be no private families: spouses and children are held in common.",
          points: [
            "Radical for its time, but justified by the city's unity, 'the greatest good for a city' (462a–b), not by individual rights.",
          ],
        },
        {
          locator: "471c–480a",
          title: "The third wave: philosopher-kings",
          summary:
            "Cities will have no rest from evils until philosophers rule as kings, or kings and rulers genuinely philosophize (473c–d). To explain who counts as a philosopher, Socrates separates knowledge, which is of what is, from opinion, which wanders between being and not being.",
          points: ["The 'lovers of sights and sounds' love beautiful things but not Beauty itself."],
        },
        {
          locator: "484a–502c",
          title: "The ship of state",
          summary:
            "Adeimantus objects that philosophers are useless or vicious. Socrates answers with the image of a ship whose owner is large but nearsighted, while the sailors quarrel over who should steer and mock the true navigator, who studies the seasons, the sky and the stars.",
          points: ["A sharp critique of Athenian democracy. Who are the sailors today?"],
        },
        {
          locator: "502c–511e",
          title: "The Sun and the Line",
          summary:
            "The Form of the Good is to the world of thought what the sun is to the visible world: it makes things knowable, as the sun makes them visible, and gives them their being, as the sun gives growth. A line divided into four segments ranks images, visible things, mathematical objects and Forms, each with its own state of mind.",
          points: ["Levels of reality paired with levels of knowledge: imagining, belief, thought and understanding."],
        },
        {
          locator: "514a–521b",
          title: "The Cave",
          summary:
            "Prisoners chained since childhood see only shadows on a wall and take them for reality. One is freed, dragged up into the sunlight, and slowly learns to see. If he went back down to free the others, they would laugh at him and, if they could, kill him.",
          points: [
            "Education is not putting sight into blind eyes but turning the whole soul around (518c–d).",
            "The prisoners' threat points at Socrates' fate.",
          ],
        },
        {
          locator: "521c–541b",
          title: "The philosopher's curriculum",
          summary:
            "Future rulers study arithmetic, plane and solid geometry, astronomy and harmonics, and then dialectic. The most able begin advanced mathematics around twenty and dialectic at thirty, serve in public office from thirty-five, and at fifty turn to the Good and take their turn at ruling.",
          points: ["One of the first designed curricula in Western thought. Compare the medieval liberal arts."],
        },
      ],
      questions: [
        "What would it take for you to believe you were living in a cave? What would count as getting out?",
        "Is rule by experts compatible with democracy? Where would you draw the line?",
      ],
    },
    {
      id: "republic-8-10",
      title: "Republic VIII–X: Decline, Happiness and the Myth of Er",
      minutes: 75,
      access: "pro",
      intro: [
        "Having described the best city and the best soul, Plato traces their corruption through four worse forms, timocracy, oligarchy, democracy and tyranny, each matched by a type of person.",
        "He then gives three proofs that the just person is happier than the tyrant, banishes imitative poetry from the city, and closes the whole work with a myth about how souls choose their next lives.",
      ],
      reading: { ...reading, selection: "Books VIII–X (543a–621d)" },
      breakdown: [
        {
          locator: "543a–550c",
          title: "Timocracy",
          summary:
            "The ideal city decays when its rulers err in arranging marriages and births, and a rule of honor-lovers, timocracy, replaces it, like the Spartan constitution.",
          points: ["The spirited part of the soul takes over from reason."],
        },
        {
          locator: "550c–555b",
          title: "Oligarchy",
          summary: "Rule by the wealthy, in a city split in two: the rich and the poor, plotting against each other.",
          points: ["The appetite for money is in charge."],
        },
        {
          locator: "555b–562a",
          title: "Democracy",
          summary:
            "Freedom and free speech for all, every kind of person and way of life, like a cloak embroidered with every color. The democratic person treats all desires as equal and follows whichever comes along.",
          points: ["A hostile but vivid portrait. Test it against democracy as you know it."],
        },
        {
          locator: "562a–576b",
          title: "Tyranny",
          summary:
            "Too much freedom turns into slavery. A champion of the people becomes a tyrant, and the tyrannical person is enslaved by lawless desires that otherwise surface only in dreams.",
          points: ["The tyrant, apparently the freest of men, is the least free."],
        },
        {
          locator: "576c–592b",
          title: "Who is happiest?",
          summary:
            "Three proofs that the just person is happier than the tyrant: the tyrant's soul is the most enslaved; the philosopher has experienced every kind of pleasure and so judges best; and the philosopher's pleasures are the most real. The ideal city may exist nowhere except as 'a pattern laid up in heaven' (592b).",
          points: ["Has Glaucon's challenge from Book II been answered?"],
        },
        {
          locator: "595a–608b",
          title: "The quarrel with poetry",
          summary:
            "Painting and poetry imitate appearances, at a third remove from the truth: there is the Form of bed, the carpenter's bed and the painter's picture of a bed. Imitative poetry feeds the emotions reason should govern, so it is banished from the city unless it can defend itself.",
          points: ["The founding text of the long argument about art, truth and morality."],
        },
        {
          locator: "608c–621d",
          title: "The myth of Er",
          summary:
            "Er, a soldier killed in battle, revives on his funeral pyre and reports how the dead choose their next lives. Choosing well depends on what one has learned; Odysseus, cured of ambition, chooses the quiet life of a private man.",
          points: ["'The responsibility belongs to the chooser; the god is not responsible' (617e)."],
        },
      ],
      questions: [
        "Plato ranks democracy just above tyranny. What is his strongest argument?",
        "Is Plato's critique of poetry relevant to film, social media or advertising?",
      ],
    },
  ],
};
