---
title: "LeetLit Learning Roadmap: Research Report (Phase 1)"
date: 2026-10-29
scope: "How premier institutions and the most popular learning sources structure philosophy, literature and art"
corpus: "59 source files in 7 folders"
status: "Phase 1 (research) complete. Phase 2 (choosing paths, disciplines and specializations, and how to implement them in the app) is next."
---

# LeetLit Learning Roadmap: Research Report

> **Question:** how do premier institutions teach philosophy, literature and art, and how do the most popular learning sources structure a lecture?
> **Corpus:** 59 sources, each documented in its own file in this folder: 15 university programs and courses, 3 standardized curricula, 5 online courses, 7 podcasts, 9 video and TV series, 17 books, and 3 reference taxonomies.

## Contents
1. [Executive summary](#1-executive-summary)
2. [Method](#2-method)
3. [How premier institutions teach](#3-how-premier-institutions-teach)
4. [How popular sources structure a lecture](#4-how-popular-sources-structure-a-lecture)
5. [Organizing principles compared](#5-organizing-principles-compared)
6. [The shared canon](#6-the-shared-canon)
7. [Skill and pattern taxonomies: the NeetCode analog](#7-skill-and-pattern-taxonomies-the-neetcode-analog)
8. [Progression and prerequisites](#8-progression-and-prerequisites)
9. [Disciplines and specializations](#9-disciplines-and-specializations)
10. [Gaps and biases](#10-gaps-and-biases)
11. [Open questions for phase 2](#11-open-questions-for-phase-2)
- [Appendix A: Source index](#appendix-a-source-index)
- [Appendix B: Verification notes](#appendix-b-verification-notes)

---

## 1. Executive summary

1. **Philosophy starts with problems, literature with periods, and art with periods plus looking.**
   - The analytic philosophy programs examined (Cambridge Part IA, Oxford PPE Prelims, MIT 24.00, AQA) open with problems, anchored by a few classic texts. The US majors then require history of philosophy as one of four areas.
   - Literature programs organize by period (Oxford's date bands, the Norton's six volumes, the MLA's period forums) and add one skills component: practical criticism or close reading.
   - Art programs cross a period-by-region spine with trained looking (Columbia Art Hum, AP Art History, Smarthistory).
   - The exception is the great-books colleges (Columbia's Core, Yale's Directed Studies, St. John's). They read primary texts chronologically across all disciplines.

2. **The atomic unit is small and repeats.** One text, argument, poem or artwork per session is the norm everywhere:
   - one tutorial essay per week at Oxford and Cambridge;
   - one dilemma and one theorist per Sandel lecture;
   - one problem per 10-minute Crash Course episode;
   - one question per 15-minute *Philosophy Bites*;
   - one artwork per 4–15-minute Smarthistory video.

3. **Elite teaching is production plus defense, not consumption.**
   - At Oxford and Cambridge, students write a weekly essay and defend it against a tutor's objections. Columbia's Lit Hum and St. John's teach by discussing primary texts, with no lectures. Princeton adds argument practice in small precepts.
   - The closest thing to a LeetCode problem is the **unseen exercise**:
     - Cambridge Practical Criticism (passages stripped of author and date);
     - AP Lit's unseen poem and prose passage;
     - AP Art History's "attribution of an unknown work."

4. **Popular lectures share a five-beat skeleton:** hook → context → core (argument, close reading or close looking) → pressure (objection, counterexample, second voice) → payoff (recap, legacy, cliffhanger).
   - Formats differ mainly in which beat they stretch.
   - They also differ in who supplies the pressure: a second person (Magee, *In Our Time*, Smarthistory, HarvardX) or the presenter alone (Crash Course, *History of Philosophy Without Any Gaps*).

5. **A small shared canon exists.**
   - **Philosophy:** Kant appears in all nine core philosophy sources, Locke in eight, Descartes in seven (six name his *Meditations*), and Hume, Leibniz and Mill in six.
   - **Literature:** Homer and Shakespeare appear in six of nine literature paths. Dante, Augustine, Cervantes, Milton, Goethe and Woolf appear in five.
   - **Art** converges on a period spine and a looking protocol, not a list of works. AP's 250 required works is the only fixed list.

6. **The humanities already have "pattern" taxonomies, but no problem banks attached to them.** Existing taxonomies include:
   - AP Lit's 6 big ideas and 7 skill categories;
   - Foster's ~26 literary patterns;
   - AP Art History's 8 thinking skills;
   - AQA's argument skills;
   - Adler's 4 reading levels and 15 rules;
   - the Syntopicon's 102 Great Ideas;
   - the theory lenses surveyed by Fry and Eagleton.

   None of them comes with a large, graded bank of practice problems.

7. **Progression is explicit in a few places:**
   - Cambridge publishes a prerequisite graph between papers.
   - Oxford, Cambridge and Princeton funnel students from a compulsory core to options to a dissertation.
   - AP Lit spirals the same skills three times.
   - Harvard and Princeton define a "complete" major with distribution rules over four areas.

8. **Each discipline has a specialization map:**
   - **Philosophy:** PhilPapers (7 areas, ~38 subfields).
   - **Literature:** the MLA's ~155 forums, structured as language/region × period plus genre, theory and interdisciplinary lenses.
   - **Art:** the Met's Heilbrunn Timeline (~300 region × period chronologies).

9. **The default canon is Western and mostly male, but counterweights are documented:**
   - *History of Philosophy Without Any Gaps* covers the Islamic world, India, Africana and China.
   - HarvardX teaches world literature.
   - AP Art History puts 71 of its 250 works in Units 5–9 (Indigenous Americas, Africa, Asia and the Pacific).
   - Columbia's lists now include Enheduanna, Ibn 'Arabi, Sor Juana, Ambedkar, Fanon and the Combahee River Collective.

10. **No source reviewed combines a canon map, a graded practice bank and feedback on written answers.**
    - Institutions give feedback (tutorials), but publish no problem bank.
    - AP has skills and exam items, but over a narrow canon.
    - Popular media have reach, but almost no practice. The exceptions are Edinburgh's quizzes, *Literature and History*'s quizzes and Adler's Appendix B.

    That combination is the gap LeetLit would fill.

---

## 2. Method

- **Selection:**
  - premier institutions with published curricula (Columbia, Yale, Harvard, Princeton, MIT, Oxford, Cambridge, St. John's College);
  - standardized curricula that define skills and assessment (College Board AP, AQA);
  - the most widely used popular sources in each medium (MOOCs, podcasts, video and TV, books);
  - reference taxonomies for specializations (PhilPapers, MLA, the Met).
- **One file per source,** named after the source and filed by type. Every file has the same frontmatter: `source_type`, `disciplines`, `organizing_principle`, `unit_of_study`, `format`, `assessment`, `url`, `verified`. Every file also has the same sections: the path, how a session or episode works, takeaways for LeetLit, and sources.
- **Coverage by discipline:** 36 files touch philosophy, 27 literature and 15 art. A file can count toward more than one discipline. Art is the thinnest area and the first candidate for further research.
- **Verification:** primary documents were used wherever possible: course bulletins, faculty handbooks and course guides, exam specifications and course descriptions, and official episode lists. Wikipedia and secondary sources filled in where official sites blocked automated access. Unverified details are flagged inside each file (see [Appendix B](#appendix-b-verification-notes)).

---

## 3. How premier institutions teach

### 3.1 Five institutional models
| Model | Where | Unit of study | What students produce | Assessment |
|---|---|---|---|---|
| **Great-books seminar** | Columbia Core (Lit Hum, CC, Art Hum), Yale Directed Studies, St. John's College | One primary text or monument per 1–2 weeks, in chronological order | Discussion; papers that develop arguments first tested aloud | Columbia CC: ≥3 papers + 2 exams. DS, per track: 3 essays (60%) + final + participation. St. John's: "don rag" oral review, annual essays, senior essay with public oral exam |
| **Tutorial / supervision** | Oxford (English; PPE), Cambridge (Philosophy; English) | One topic per week | An essay (typically 1,500–2,500 words in PPE) defended live against the tutor's objections | Oxford: three-hour finals papers. Cambridge: "answer three questions out of at least ten set," plus optional extended essays or a dissertation |
| **Lecture + small section** | Harvard (*Justice*), Princeton (precepts), Yale DS (lecture + 2 seminars a week) | A lecture series organized by problem or theory | Section discussion; papers | Papers and exams |
| **Distribution major** | Harvard Philosophy (one course in each of four areas); Princeton (two courses in three of four areas) | Semester course | Electives chosen within area rules; independent work | Course grades; Princeton junior paper + year-long senior thesis |
| **Standardized skills curriculum** | AP English Literature, AP Art History, AQA A-level Philosophy | A skill applied to a text or work; a content item tied to set-text passages | Timed analytical essays; short answers | AP Lit: 55 MCQ + 3 essays. AP Art History: 80 MCQ + 6 free-response. AQA: four topics at 25% each |

### 3.2 The funnel: core → options → specialization
| Program | Year 1 (compulsory core) | Middle | Final |
|---|---|---|---|
| **Cambridge Philosophy** | Part IA: Metaphysics · Ethics and Political Philosophy · Meaning · Set Texts (Plato *Meno*, Descartes *Meditations*, Mill *On Liberty* and *The Subjection of Women*) · Formal Methods | Part IB: one compulsory paper (Knowledge, Language and the World) + 3 options | Part II: 4 papers chosen freely + General Paper or dissertation |
| **Oxford English** | Prelims: a skills paper (approaches to reading, theory, the English language) + three period papers | Finals: period papers 1350–1830 + a Shakespeare portfolio | Special Options (6,000-word essay) + 8,000-word dissertation |
| **Oxford PPE (philosophy)** | Prelims: General Philosophy (knowledge, scepticism, mind and body, personal identity, free will) · Moral Philosophy (via Mill's *Utilitarianism*) · Introductory Logic | Finals: a menu of numbered papers shared across Oxford philosophy degrees (101 Early Modern, 102 Knowledge and Reality, 103 Ethics, 104 Philosophy of Mind, 115 Plato's *Republic*…) | |
| **Princeton Philosophy** | | ≥8 courses: 6 must cover two courses in three of four areas | Junior paper → senior thesis |
| **Columbia Core** | Everyone reads the same books: no specialization inside the Core | | |

### 3.3 The disciplines start differently
- **Philosophy starts with problems and requires history later.**
  - Cambridge IA, Oxford's General Philosophy, MIT 24.00 ("systematic rather than historical") and AQA's four topics all open with problems. AQA's topics are epistemology, moral philosophy, the metaphysics of God and the metaphysics of mind.
  - A few classic texts serve as anchors: *Meno*, the *Meditations*, Mill.
  - History of philosophy comes back as a required area (Harvard Area 4, Princeton area 4).
  - Exceptions: the great-books colleges read philosophy chronologically, and Sandel and Kagan each build a course around one big question.
- **Literature combines periods with one skills paper.**
  - Oxford organizes English by date bands with no set texts, plus an introductory skills paper (Paper 1).
  - Cambridge pairs period papers with Practical Criticism and a Shakespeare paper.
  - Close reading usually comes first: Oxford Paper 1, Cambridge Practical Criticism and AP Lit all train reading before (or alongside) surveying.
- **Art combines periods and regions with trained looking.**
  - Columbia Art Hum is explicitly "not a historical survey." It has ten units of monuments and artists, and students visit the Met, MoMA and the Cloisters.
  - AP Art History fixes 250 works in ten region-and-era areas and tests eight thinking skills.

### 3.4 What students are asked to do
- **Write and defend.** The Oxford PPE tutorial runs in four steps:
  1. The tutor sets a question and a reading list: a classic text plus 4–8 articles.
  2. The student writes an essay that takes a position.
  3. In the tutorial, the tutor presses objections, and the student defends, concedes or revises.
  4. Next week brings a new topic and a new essay.
- **Analyze the unseen.** Examples: Cambridge Practical Criticism, AP Lit's unseen poem and prose passage, and AP Art History's analysis and attribution of unknown works.
- **Discuss from the text.** St. John's seminars open with a single question, and the conversation must stay anchored in the text. Columbia Lit Hum has no lectures.
- **Look before interpreting.** Columbia Art Hum moves from form, material and composition to context and meaning, in front of the real objects.
- **Choose, and don't recycle.** Cambridge exams ask students to answer three of at least ten questions. They give no credit for "using essentially the same content to make essentially the same point."

---

## 4. How popular sources structure a lecture

### 4.1 Anatomy by source
| Source | Length | Anatomy |
|---|---|---|
| Harvard *Justice* (Sandel) | ~55 min | Dilemma hook → show-of-hands poll → cross-examination of named students → name the theory (Bentham, Kant, Rawls…) → objection + cliffhanger |
| Yale *Death* (Kagan) | 50 min | Thesis stated up front → premises made explicit → counterexamples and thought experiments → conclusions carried into later lectures |
| Yale ENGL 300 (Fry) | 50 min | The school's context → the anthology essay explained → demonstration on a literary example → how it answers the previous school |
| Crash Course Philosophy | ~10 min | Pop-culture cold open → argument in standard form → animated thought experiment → objections → recap + preview |
| Crash Course Literature | ~10–15 min | Part 1: context, plot, how the language works → Part 2: themes and interpretive debates |
| Crash Course Art History | ~12 min | Provocative case → question → cross-cultural examples → competing answers → a "way of looking" |
| *Philosophy Bites* | ~15 min | Topic + guest → definitional question → core argument → interviewer's objections → replies |
| *In Our Time* | ~42–50 min | Framing with three academics → chronological walk with expert handoffs → synthesis → reading list |
| *History of Philosophy Without Any Gaps* | ~20 min | Scripted narrative with one idea, recap and preview. An interview with a specialist every few episodes |
| *Philosophize This!* | ~30–60 min | Everyday hook → context, with callbacks to earlier episodes → core idea through analogies → stakes + tee-up |
| *The Partially Examined Life* | long, often 2 parts | Hosts read the text in advance → summary of its structure → free debate → wrap-up |
| Magee, *The Great Philosophers* | ~45 min | Place in history → naive learner's questions → expert explains, Magee paraphrases back, expert corrects → what survives |
| The Great Courses | ~30 min | Biography and context → core ideas → influence → assessment. A guidebook adds "questions to consider" |
| Edinburgh (Coursera) | ~1–2 h per module | 4–7 short videos + 2–3 readings + a quiz. A review module every two topics |
| ModPo (Coursera) | one poem per video | Group close reading around a table; a weekly ~90-min live webcast; learner-made group readings |
| HarvardX *Masterpieces of World Literature* | weekly | Two professors in dialogue → how the work traveled and was translated → key passages |
| Smarthistory | 4–15 min | Two art historians at the real object: what do we see → what is it made of, and how → who made it, for whom, why → what changed |
| *Great Art Explained* | ~15 min | Hook (fame or mystery) → biography → close looking at zoomed details → context → legacy |
| *The Lonely Palette* | 30–40 min | Museum visitors' first reactions (vox pops) → deep dive → return to looking |
| *The School of Life* | 5–10 min | A life problem → "the thinker who can help" → one idea → a consoling takeaway |
| *Literature and History* | ~2 h | Introduction → full summary assuming no prior knowledge → analysis. Transcripts and quizzes |
| BBC *Civilisation*, *The Shock of the New*, *Ways of Seeing* | 30–60 min | A presenter at the works with a personal, opinionated voice. Berger asks viewers to be skeptical of *him*; the book's pictorial essays have no text |

### 4.2 The common skeleton
| Beat | Philosophy version | Literature version | Art version |
|---|---|---|---|
| **1. Hook** | Dilemma (Sandel); pop-culture case (Crash Course); everyday puzzle (*Philosophize This!*) | Why this book matters; "How and Why We Read" | Fame or mystery (*Great Art Explained*); untrained first reactions (*Lonely Palette*); a provocative case (Crash Course's $150,000 banana) |
| **2. Context** | Whom the thinker was answering | Author, era, translation, circulation | Artist, patron, movement |
| **3. Core** | The argument in explicit premises | Close reading of lines and passages | Close looking: form, material, technique |
| **4. Pressure** | Objections, counterexamples, a second expert | Competing interpretations; the next school's attack | Competing answers; reception |
| **5. Payoff** | Recap; cliffhanger to the next theory | Themes; how the work "became world literature" | Legacy; a new "way of looking" |

Observations:
- **Each discipline stretches different beats.** Philosophy stretches beats 3–4 (argument and objection). Literature stretches beats 2–3 (context and close reading). Art insists on beat 3 *before* beat 2: look first, then contextualize (Columbia Art Hum, Smarthistory, *Lonely Palette*).
- **A second voice is the strongest way to model thinking.** Each of these supplies beat 4 live rather than as a scripted objection:
  - Magee's paraphrase-and-correct loop;
  - *In Our Time*'s expert handoffs;
  - Smarthistory's two-person conversation;
  - HarvardX's two-professor dialogue;
  - Sandel's cross-examination of named students.
- **Three length tiers:**
  - **Micro (5–15 min):** Crash Course, *School of Life*, *Philosophy Bites*, Smarthistory, *Great Art Explained*.
  - **Standard (20–60 min):** *History of Philosophy Without Any Gaps*, *Philosophize This!*, *In Our Time*, Magee, university lectures.
  - **Long-form (90 min–2 h):** *The Partially Examined Life*, *Literature and History*, ModPo's live webcast.
- **Sequenced vs. browsable.**
  - *Sequenced:* *History of Philosophy Without Any Gaps*, *Philosophize This!*, Crash Course Philosophy and Kagan assume you go in order, using callbacks and cumulative arguments.
  - *Random-access atlases:* *Philosophy Bites*, *In Our Time*, *Great Art Explained*, *The Lonely Palette* and Very Short Introductions.

---

## 5. Organizing principles compared
| Principle | Sources | Strength | Weakness |
|---|---|---|---|
| **Chronological great books** | Columbia Lit Hum and CC, Yale DS, St. John's, Britannica Great Books, Harvard Classics, Adler's list, Russell, Durant, Warburton, Gaarder, *History of Philosophy Without Any Gaps*, Great Courses, *Literature and History*, Magee | Context accumulates; texts answer each other | The hardest texts come first; defaults to a Western canon |
| **Problems first** | Cambridge IA, Oxford PPE Prelims, MIT 24.00, Edinburgh, Crash Course Philosophy, AQA, Nagel, Blackburn, Sandel, Kagan | Immediate engagement; trains argument | History and primary texts shrink to quotations |
| **Period survey** | Oxford English, Norton, MLA period forums, Gombrich, Smarthistory, Heilbrunn, AP Art History, *Civilisation* | Coverage; maps directly onto specializations | Breadth over depth |
| **Skills spiral** | AP Lit, AP Art History, Cambridge Practical Criticism, Adler, Bauer | Transferable and testable | Leaves the choice of texts open |
| **Single-work deep dive** | Columbia Art Hum, *Great Art Explained*, *The Lonely Palette*, *The Partially Examined Life*, Crash Course Literature, *Literature and History*, ModPo | Depth; close reading | No map of the whole |
| **Thematic / pattern catalog** | Crash Course Art History, *The Shock of the New*, *Ways of Seeing*, Foster, the Syntopicon, *The School of Life*, *The Daily Stoic* | Cross-cutting connections | Can strip works of their context |
| **Unsequenced archive** | *In Our Time*, *Philosophy Bites*, Very Short Introductions, PhilPapers | Breadth on demand | No path |
| **Centrality / influence** | Bloom (Shakespeare at the center) | Shows who shaped whom | Idiosyncratic and contested |

**The strongest designs combine two axes:**
- Columbia CC runs chronologically but groups texts into thematic units.
- Blackburn's *Think* is problems-first, but works each problem through a classic text.
- Oxford English pairs periods with a skills paper and a Shakespeare paper.
- AP Art History crosses regions with skills.
- The Syntopicon indexes a chronological set by 102 ideas.
- Yale DS runs three synchronized tracks through the same centuries.

---

## 6. The shared canon
**How to read the counts:** a work or author counts once per source if it is named in that source's path, as documented in this folder. The counts are conservative keyword matches, not weighted by time spent. Method details are in [Appendix B](#appendix-b-verification-notes).

### 6.1 Philosophy
**Nine core philosophy sources:** Columbia CC, Yale DS, St. John's, Oxford PPE, Cambridge Philosophy, AQA, Harvard *Justice*, Blackburn's *Think*, Crash Course Philosophy.

| Sources (of 9) | Authors and texts |
|---|---|
| 9 | Kant |
| 8 | Locke |
| 7 | Descartes (6 name the *Meditations*) |
| 6 | Hume · Leibniz · Mill |
| 5 | Berkeley |
| 4 | Plato's *Meno* · Aristotle's *Nicomachean Ethics* · Kant's *Groundwork* · Mill's *Utilitarianism* · Anselm · Aquinas |
| 3 | Plato's *Republic*, *Phaedo* and *Apology/Crito/Euthyphro* · Aristotle's *Politics* · Augustine · Machiavelli · Hobbes · Rousseau · the Elisabeth–Descartes correspondence · Marx · Nietzsche · Beauvoir |

- **Recurring problems** across the same nine (keyword counts, so a floor): skepticism and the external world (6), the existence of God (4), mind and body (4), free will (3), personal identity, and the normative-ethics triad (utilitarian, Kantian, virtue).
- **Curricula and popular histories disagree in a useful way.** Eight popular histories were compared: Russell, Durant, Warburton, Gaarder, Magee, the Great Courses, *History of Philosophy Without Any Gaps* and *Philosophize This!*.

  | Thinker | Core curricula (of 9) | Popular histories (of 8) |
  |---|---|---|
  | Plato · Aristotle | 6 · 8 | 8 · 8 |
  | Descartes | 7 | 7 |
  | Hegel | 2 | 7 |
  | Spinoza | 2 | 6 |
  | Mill | 6 | 3 |

  Curricula favor short, teachable arguments; histories favor system-builders.

→ **Convergent first-year core:**
- **Texts:** Plato (*Meno*, *Republic*, *Phaedo*, *Euthyphro*) · Aristotle (*Ethics*) · Descartes (*Meditations*) · Locke, Berkeley, Hume · Leibniz · Kant (*Groundwork*) · Mill (*Utilitarianism*).
- **Problems:** knowledge and skepticism · God · mind and body · free will · personal identity · normative ethics.

Programs diverge after this core.

### 6.2 Literature
**Nine literature paths that name works:** Columbia Lit Hum, Yale DS (Literature), St. John's, HarvardX, Crash Course Literature, Bloom, the Harvard Classics, Bauer, Oxford English.

| Sources (of 9) | Works and authors |
|---|---|
| 6 | Homer · Shakespeare |
| 5 | Dante · Augustine · Cervantes · Milton · Goethe · Woolf |
| 4 | Virgil · Montaigne · Austen |
| 3 | *Gilgamesh* · the Hebrew Bible · Sappho · Aeschylus · Sophocles · Chaucer · Tolstoy · Dickinson · Morrison |

- **Shakespeare is singled out by every kind of structure:**
  - a dedicated paper at both Oxford and Cambridge;
  - one of only two single-author MLA forums (the other is Chaucer);
  - the center of Bloom's canon.
- **The US high-school canon barely overlaps with the great-books lists.** Crash Course Literature (*Gatsby*, *Mockingbird*, *Catcher*, *1984*…) shares only Homer, Sophocles, Shakespeare, Austen, Dickinson, Woolf and Morrison with them.

→ **Convergent spine:** *Gilgamesh* → Homer → Greek tragedy → Virgil → Augustine → Dante → Chaucer → Montaigne, Cervantes, Shakespeare → Milton → Goethe → Austen → Tolstoy → Woolf → Morrison. Augustine and Montaigne also sit on philosophy lists, as do Plato and Beauvoir in the great-books cores. That makes them natural cross-discipline nodes.

### 6.3 Art: a shared spine and a looking protocol, not a list
- **Only AP fixes a list:** 250 required works in 10 content areas.
  - Columbia Art Hum fixes ten units: the Parthenon; Córdoba and Amiens; Raphael, Anguissola, Michelangelo; Bernini, Roldán; Peeters, Rembrandt; David, Kauffman, Goya; Monet, Manet, Morisot, Cassatt; Wright, Le Corbusier; Picasso, Bearden; Warhol, Basquiat, Sherman.
  - Popular art media choose their works freely.
- **The overlaps that do occur are small.** Ten art sources were compared.
  - In 3 of 10: Michelangelo, Gothic cathedrals (Amiens, Chartres) and Monet.
  - In 2 of 10: the Parthenon, Picasso, Warhol, Rembrandt, Raphael, Bernini and David.
- **The shared spine:** prehistory → ancient Mediterranean → medieval → Renaissance → Baroque → 18th century → 19th century → modernism → contemporary.
  - This is the order of Gombrich's 28 chapters, AP's Units 1–4 and 10, Smarthistory's survey, and *Civilisation*.
  - Non-Western art appears either as parallel tracks (AP Units 5–9, Heilbrunn's regions) or as brief chapters (Gombrich chapters 1, 5 and 7).
- **The shared looking protocol:** describe → materials and technique → context (who, for whom, why) → meaning → legacy. It appears in Columbia Art Hum, Smarthistory, *Great Art Explained*, *The Lonely Palette*, and AP's visual and contextual analysis skills.

---

## 7. Skill and pattern taxonomies: the NeetCode analog
NeetCode works because it does three things:
- names patterns (two pointers, sliding window…);
- attaches curated problems to each pattern;
- explains the solution.

The humanities equivalents already exist, in pieces:

| Taxonomy | Source | Discipline | Kind | Size |
|---|---|---|---|---|
| Big ideas (Character, Setting, Structure, Narration, Figurative Language, Literary Argumentation) + skill categories, each progressing identify → explain → interpret | AP English Literature | Literature | Patterns + skills | 6 + 7 |
| Literary conventions (quest, communion, weather, baptism, Christ figure, illness, irony…) | Foster | Literature | Pattern catalog | ~26 chapters |
| Practical criticism checklist (diction, syntax, meter, imagery, tone, form, voice; paired comparison) | Cambridge English | Literature | Unseen-text skills | — |
| Theory lenses (New Criticism → phenomenology and reader-response → structuralism → deconstruction → psychoanalysis → political criticism; plus MLA's Marxism, gender, race, postcolonial, ecocriticism… forums) | Fry ENGL 300, Eagleton, MLA | Literature | Lenses | 26 lectures / 7 parts / 28 forums |
| Art-historical thinking skills (visual analysis, contextual analysis, comparison, traditions, unknown works, attribution, interpretations, argumentation) | AP Art History | Art | Skills | 8 |
| Looking protocol (see → how it was made → context → meaning → legacy) | Columbia Art Hum, Smarthistory, *Great Art Explained* | Art | Protocol | 4–5 steps |
| Argument skills (premises and conclusions; deduction, induction, abduction; circularity, contradiction, question-begging; core terms such as a priori/a posteriori) | AQA | Philosophy | Skills | — |
| Reading levels (elementary → inspectional → analytical, with 15 rules → syntopical) | Adler and Van Doren | All | Skill ladder | 4 levels |
| Three-pass reading (grammar → logic → rhetoric) + genre question sets | Bauer | All | Skill ladder | 3 passes |
| Great Ideas → topics → passages | The Syntopicon | All | Concept index | 102 ideas |
| Problem areas → subfields | PhilPapers; Cambridge IA papers; AQA topics | Philosophy | Topic tree | 7 → ~38 |
| Big questions with rival positions and survey data | PhilPapers Surveys | Philosophy | Question bank | 30 (2009), 100 (2020) |

**The unseen exercise is the closest thing to a LeetCode problem, and all three disciplines have one:**
- **Literature:** a passage or poem with author and date removed (Cambridge Practical Criticism, AP Lit Section II).
- **Art:** an unknown work to analyze and attribute by style (AP Art History).
- **Philosophy:** an unfamiliar question or case. Examples: Sandel's dilemma → principle → test case; Oxford and Cambridge essay questions; PhilPapers Survey questions.

Each gives the learner a new input and a known toolkit. The answer can then be scored against a rubric, as AP exams do, or defended against objections, as in a tutorial.

---

## 8. Progression and prerequisites
| Mechanism | Example | Detail |
|---|---|---|
| **Explicit prerequisite graph** | Cambridge Philosophy | IA Meaning + Formal Methods → IB Knowledge, Language and the World → II Philosophical Logic and Wittgenstein. IA Metaphysics → II Metaphysics. IA Set Texts + IB Early Modern → II Kant and Philosophy of Mind. IA Formal Methods + IB KLW → II Mathematical Logic |
| **Paper prerequisites** | Oxford PPE | Finals paper 107 Philosophy of Religion normally presumes 101 or 102 |
| **Funnel** | Cambridge, Oxford, Princeton | Compulsory core → options → free specialization → dissertation or thesis |
| **Spiral** | AP Lit | Three genres × three passes. Each skill grows from identify → explain → interpret |
| **Cumulative levels** | Adler; Bauer | Each level presupposes the last: inspectional → analytical → syntopical; grammar → logic → rhetoric |
| **Cumulative argument** | Kagan; *Philosophize This!*; Fry | Later units build on earlier conclusions (Kagan: identity → death → badness → how to respond). Fry frames each theory school as a reaction to the one before |
| **Synchronized tracks** | Yale DS | Literature, philosophy and political thought move through the same centuries in the same weeks |
| **Completion rules** | Harvard; Princeton; Cambridge | One course in each of four areas; two courses in three of four areas; three answers from at least ten questions |
| **Spaced review** | Edinburgh (Coursera) | A review module every two topics |
| **Daily cadence** | Harvard Classics (1916); *The Daily Stoic* | One ~15-minute reading for every day of the year; one page a day under a monthly theme |

---

## 9. Disciplines and specializations

### Philosophy
- **The four-area partition is standard.** Harvard, Princeton, Cambridge Part IA and PhilPapers' top level all use it:
  1. metaphysics and epistemology;
  2. value theory;
  3. logic and philosophy of science;
  4. history of philosophy.
- **PhilPapers adds a fifth area, Philosophical Traditions:** African/Africana, Asian, Continental, European, the Americas. It splits all five areas into ~38 subfields.
- **Historical traditions as parallel tracks.** *History of Philosophy Without Any Gaps* has ten series: Classical Greek, Later Antiquity, Islamic World, Medieval, Byzantine, Renaissance/Reformation, Early Modern, India, Africana and China.
- **What specialization looks like in practice:**
  - Cambridge Part II papers: Metaphysics, Philosophy of Mind, Ethics, Kant, Philosophy in the Long Middle Ages, Philosophy of Science, Mathematical Logic…
  - Oxford's numbered Finals papers: Early Modern, Knowledge and Reality, Ethics, Philosophy of Mind, Philosophy of Religion, Plato's *Republic*…

### Literature
- **The MLA forums form a matrix:**
  - language/region × period (78 forums);
  - comparative (20);
  - genre (9);
  - theory and method (7);
  - interdisciplinary lenses (21);
  - media (4);
  - plus linguistics, writing and the profession.
- **The period spine is stable.** The Norton's volumes A–F, Oxford's period papers and the MLA's English forums use nearly the same bands: medieval → 16th/early 17th century → Restoration and 18th century → Romantic → Victorian → 20th–21st century.
- **Genre axes:**
  - AP Lit: short fiction, poetry, longer fiction and drama.
  - Bauer: fiction, autobiography, history, drama, poetry, science.
  - MLA Genre Studies: poetry, prose fiction, drama, life writing, children's literature, comics, speculative fiction…
- **A lens axis:** the theory schools (Fry, Eagleton) and the MLA's interdisciplinary forums.

### Art
- **A region × period grid:** the Heilbrunn Timeline's ~300 chronologies and AP's 10 content areas. Gombrich and Smarthistory follow the same periods in a single sequence.
- **Facets for tagging:** the Heilbrunn keywords cover movement and style, maker, geography, period, material and technique, object type, and subject matter.
- **Themes and media:** *The Shock of the New* (modern art by theme), *Ways of Seeing* (images and power), and the Heilbrunn thematic essays.

### Across disciplines
- **Integrated cores:**
  - Columbia: Lit Hum + CC + Art Hum.
  - Yale DS: three synchronized tracks.
  - St. John's: philosophy, literature, mathematics, science and music in one sequence.
- **Shared concept layers:** the Syntopicon's 102 ideas, the MLA's "Philosophy and Literature" forum, and *In Our Time*'s archive spanning all three disciplines.

---

## 10. Gaps and biases
- **A Western, mostly male default.**
  - St. John's, Russell, Durant, Bloom and *Civilisation* are Western in scope.
  - Gombrich's first edition had no women artists, and his 16th has one.
  - Bloom cast newer critical schools as a "School of Resentment."
  - Mary Beard criticized *Civilisation*'s treatment of women. The BBC's 2018 *Civilisations* (Schama, Beard, Olusoga) widened the frame.
- **Counterweights already in the corpus:**
  - **Women and writers of color added to core lists:**
    - Columbia Lit Hum: Enheduanna, Sappho, Marie de France, Sor Juana, Morrison, Rankine.
    - Columbia CC: Christine de Pizan, Wollstonecraft, Douglass, Truth, Du Bois, Beauvoir, the Combahee River Collective.
    - Columbia Art Hum: Anguissola, Roldán, Kauffman, Morisot, Cassatt, Sherman, Basquiat.
    - Yale DS reads Elisabeth of Bohemia and Anne Conway beside Descartes and Leibniz; AQA sets the Elisabeth–Descartes correspondence.
  - **Non-Western traditions:**
    - *History of Philosophy Without Any Gaps*: Islamic world, Byzantine, India, Africana, China.
    - HarvardX: world literature.
    - AP Art History: Units 5–9 hold 71 of 250 works (~28%).
    - Heilbrunn's global grid and the MLA's 78 language and region forums.
    - Columbia: Ibn 'Arabi, Ibn Khaldun, the Qur'an, Ambedkar, Gandhi, Fanon.
  - **A ready counter-path to Gombrich:** Katy Hessel's *The Story of Art Without Men*.
- **Canons drift.** The Norton is in its 11th edition and Gombrich in his 16th. Eagleton needed an afterword, Columbia revises its lists, and Bloom disowned his own appendix. A path is a snapshot, not a fixture.
- **Accessibility can cost accuracy.**
  - Grayling, Copleston, Scruton and Steiner fault Russell's history.
  - *The School of Life* draws critiques for simplification.
  - *The Daily Stoic* works in quotation-sized fragments.
- **Assessment is rare outside institutions.** Among popular sources, only Edinburgh (quizzes), *Literature and History* (quizzes) and Adler (Appendix B exercises) include practice. None grades a written argument.
- **Art is the thinnest discipline in this corpus** (15 of 59 files), and no art source fixes a canon except AP.

---

## 11. Open questions for phase 2
These are the decisions the research raises. They are listed here, not answered; phase 2 is where we choose.
1. **Default organizing principle per discipline.** Should we follow the institutions (problems-first for philosophy, periods for literature, region × period for art) or the Core (chronological great books across all three)? Which alternatives become secondary views?
2. **What is a LeetLit "problem"?** Candidates from the research:
   - an unseen passage or artwork;
   - a dilemma that must be turned into a principle;
   - a survey question with rival positions;
   - a pattern drill;
   - a syntopical comparison across authors.
3. **Feedback on written answers at scale.** The tutorial is the gold standard but doesn't scale. Models: rubrics (AP), rule checklists (Adler's critical rules), objection-and-reply loops (the Oxford tutorial, Magee).
4. **The MVP canon.** The convergent core in [Section 6](#6-the-shared-canon), a broader global set, or both? And how do we show the curator and criteria behind every list (the Bloom lesson)?
5. **The pattern taxonomy.** Adopt existing frameworks (AP Lit, AP Art History, AQA, Foster, the Syntopicon), or build one LeetLit taxonomy that maps onto them?
6. **The specialization backbone.** Use PhilPapers, the MLA forums and the Heilbrunn grid?
7. **Lesson format.** Micro (~10 min), standard (20–45 min) or tiered? Monologue or dialogue?
8. **Cadence.** A daily problem (Harvard Classics, *The Daily Stoic*), a weekly essay (the tutorial), or both?
9. **Primary texts and images.** Public-domain texts and open-access images, or excerpts and links? Modern works are under copyright.
10. **A social layer.** Seminars, precepts and ModPo's community close readings suggest cohorts or discussion around each problem.

---

## Appendix A: Source index
| # | Source file | Type | Disciplines | Organizing principle |
|---|---|---|---|---|
| | **1 Universities** | | | |
| 1 | [Columbia University - Art Humanities (Core Curriculum)](<1 Universities/Columbia University - Art Humanities (Core Curriculum).md>) | university-course | art | Single monuments and artists in chronological order ("not a historical survey") |
| 2 | [Columbia University - Contemporary Civilization (Core Curriculum)](<1 Universities/Columbia University - Contemporary Civilization (Core Curriculum).md>) | university-course | philosophy, political thought | Great books, chronological, with thematic units |
| 3 | [Columbia University - Literature Humanities (Core Curriculum)](<1 Universities/Columbia University - Literature Humanities (Core Curriculum).md>) | university-course | literature, philosophy | Great books, roughly chronological |
| 4 | [Harvard University - Justice (Michael Sandel)](<1 Universities/Harvard University - Justice (Michael Sandel).md>) | university-course | philosophy | Dilemma → theory → test case |
| 5 | [Harvard University - Philosophy Concentration](<1 Universities/Harvard University - Philosophy Concentration.md>) | university-program | philosophy | Four-area distribution + tutorials |
| 6 | [MIT OpenCourseWare - 24.00 Problems of Philosophy](<1 Universities/MIT OpenCourseWare - 24.00 Problems of Philosophy.md>) | university-course | philosophy | Problems ("systematic rather than historical") |
| 7 | [Princeton University - Philosophy Major](<1 Universities/Princeton University - Philosophy Major.md>) | university-program | philosophy | Distribution + junior paper and senior thesis |
| 8 | [St. John's College - Great Books Program](<1 Universities/St. John's College - Great Books Program.md>) | university-program | philosophy, literature, art, music, mathematics, science | Great books, strictly chronological over four years |
| 9 | [University of Cambridge - English Tripos (Practical Criticism)](<1 Universities/University of Cambridge - English Tripos (Practical Criticism).md>) | university-program | literature | Skills paper + Shakespeare + period papers |
| 10 | [University of Cambridge - Philosophy Tripos](<1 Universities/University of Cambridge - Philosophy Tripos.md>) | university-program | philosophy | Compulsory problems core → options → specialization |
| 11 | [University of Oxford - English Language and Literature](<1 Universities/University of Oxford - English Language and Literature.md>) | university-program | literature | Period papers + skills paper + Shakespeare + options + dissertation |
| 12 | [University of Oxford - PPE Philosophy (Prelims and Finals)](<1 Universities/University of Oxford - PPE Philosophy (Prelims and Finals).md>) | university-program | philosophy | Problems-first Prelims → menu of Finals papers |
| 13 | [Yale University - Directed Studies](<1 Universities/Yale University - Directed Studies.md>) | university-program | literature, philosophy, political thought | Great books in three synchronized chronological tracks |
| 14 | [Yale University (Open Yale Courses) - ENGL 300 (Paul Fry)](<1 Universities/Yale University (Open Yale Courses) - ENGL 300 Introduction to Theory of Literature (Paul Fry).md>) | university-course | literature, philosophy | Theory schools in historical order |
| 15 | [Yale University (Open Yale Courses) - PHIL 176 Death (Shelly Kagan)](<1 Universities/Yale University (Open Yale Courses) - PHIL 176 Death (Shelly Kagan).md>) | university-course | philosophy | One big question, decomposed into sub-problems |
| | **2 Standardized Curricula** | | | |
| 16 | [AQA - A-level Philosophy](<2 Standardized Curricula/AQA - A-level Philosophy.md>) | standardized-curriculum | philosophy | Four problem areas + set texts + argument skills |
| 17 | [College Board - AP Art History](<2 Standardized Curricula/College Board - AP Art History.md>) | standardized-curriculum | art | 250 works in 10 region/era areas + 8 skills |
| 18 | [College Board - AP English Literature and Composition](<2 Standardized Curricula/College Board - AP English Literature and Composition.md>) | standardized-curriculum | literature | Skills spiral: 3 genres × 3 passes, 6 big ideas |
| | **3 Online Courses** | | | |
| 19 | [Coursera - Introduction to Philosophy (University of Edinburgh)](<3 Online Courses/Coursera - Introduction to Philosophy (University of Edinburgh).md>) | mooc | philosophy | One question per module, each by a different specialist |
| 20 | [Coursera - ModPo (UPenn)](<3 Online Courses/Coursera - ModPo Modern and Contemporary American Poetry (UPenn).md>) | mooc | literature | Chronological by poetic movement; one poem per video |
| 21 | [HarvardX - Masterpieces of World Literature](<3 Online Courses/HarvardX - Masterpieces of World Literature.md>) | mooc | literature | World literature, roughly chronological |
| 22 | [Smarthistory and Khan Academy - Art History](<3 Online Courses/Smarthistory and Khan Academy - Art History.md>) | mooc | art | Period × region survey; one artwork per video |
| 23 | [The Great Courses - Great Minds of the Western Intellectual Tradition](<3 Online Courses/The Great Courses - Great Minds of the Western Intellectual Tradition.md>) | mooc | philosophy, intellectual history | Chronological, one thinker per lecture |
| | **4 Podcasts** | | | |
| 24 | [BBC Radio 4 - In Our Time](<4 Podcasts/BBC Radio 4 - In Our Time.md>) | podcast | all three + history, religion, science | One topic per episode; archive by category |
| 25 | [History of Philosophy Without Any Gaps (Peter Adamson)](<4 Podcasts/History of Philosophy Without Any Gaps (Peter Adamson).md>) | podcast | philosophy | Strictly chronological within traditions, incl. non-Western |
| 26 | [Literature and History (Doug Metzger)](<4 Podcasts/Literature and History (Doug Metzger).md>) | podcast | literature, history | Strictly chronological world literature from Sumer |
| 27 | [Philosophize This! (Stephen West)](<4 Podcasts/Philosophize This! (Stephen West).md>) | podcast | philosophy, literature | Chronological early on, then thematic series |
| 28 | [Philosophy Bites (Warburton and Edmonds)](<4 Podcasts/Philosophy Bites (Warburton and Edmonds).md>) | podcast | philosophy | One narrow question per episode; no sequence |
| 29 | [The Lonely Palette (Tamar Avishai)](<4 Podcasts/The Lonely Palette (Tamar Avishai).md>) | podcast | art | One artwork per episode; no sequence |
| 30 | [The Partially Examined Life](<4 Podcasts/The Partially Examined Life.md>) | podcast | philosophy, literature | One primary text per episode; browsable by topic |
| | **5 Video and TV** | | | |
| 31 | [BBC - Civilisation (Kenneth Clark)](<5 Video and TV/BBC - Civilisation (Kenneth Clark).md>) | tv-series | art, history, literature, music | Chronological Western cultural history, on location |
| 32 | [BBC - The Great Philosophers (Bryan Magee)](<5 Video and TV/BBC - The Great Philosophers (Bryan Magee).md>) | tv-series | philosophy | Chronological; one philosopher per expert dialogue |
| 33 | [BBC - The Shock of the New (Robert Hughes)](<5 Video and TV/BBC - The Shock of the New (Robert Hughes).md>) | tv-series | art | Modern art by theme, not decade |
| 34 | [BBC - Ways of Seeing (John Berger)](<5 Video and TV/BBC - Ways of Seeing (John Berger).md>) | tv-series | art, criticism | Thematic critique of how images make meaning |
| 35 | [Crash Course Art History](<5 Video and TV/Crash Course Art History.md>) | video-series | art | Thematic, question-driven |
| 36 | [Crash Course Literature](<5 Video and TV/Crash Course Literature.md>) | video-series | literature | Book by book (US school canon) |
| 37 | [Crash Course Philosophy](<5 Video and TV/Crash Course Philosophy.md>) | video-series | philosophy | Problems by branch |
| 38 | [Great Art Explained (James Payne)](<5 Video and TV/Great Art Explained (James Payne).md>) | video-series | art | One masterpiece per video; no sequence |
| 39 | [The School of Life](<5 Video and TV/The School of Life.md>) | video-series | philosophy, literature, art, psychology | Thinker playlists + life topics |
| | **6 Books** | | | |
| 40 | [Bertrand Russell - A History of Western Philosophy](<6 Books/Bertrand Russell - A History of Western Philosophy.md>) | book | philosophy | Chronological in three books, with social context |
| 41 | [Charles W. Eliot - The Harvard Classics (Five-Foot Shelf)](<6 Books/Charles W. Eliot - The Harvard Classics (Five-Foot Shelf).md>) | book | philosophy, literature, history, science, religion | Thematic volumes + a daily 15-minute reading plan |
| 42 | [E. H. Gombrich - The Story of Art](<6 Books/E. H. Gombrich - The Story of Art.md>) | book | art | One chronological narrative of problems of representation |
| 43 | [Encyclopaedia Britannica - Great Books of the Western World (Syntopicon)](<6 Books/Encyclopaedia Britannica - Great Books of the Western World (Syntopicon).md>) | book | philosophy, literature, history, science, mathematics | Chronological set + 102-idea concept index |
| 44 | [Harold Bloom - The Western Canon](<6 Books/Harold Bloom - The Western Canon.md>) | book | literature | 26 authors in three ages, Shakespeare at the center |
| 45 | [Jostein Gaarder - Sophie's World](<6 Books/Jostein Gaarder - Sophie's World.md>) | book | philosophy, literature | Chronological history inside a novel |
| 46 | [Mortimer Adler and Charles Van Doren - How to Read a Book](<6 Books/Mortimer Adler and Charles Van Doren - How to Read a Book.md>) | book | philosophy, literature, method | Four cumulative reading levels + reading list |
| 47 | [Nigel Warburton - A Little History of Philosophy](<6 Books/Nigel Warburton - A Little History of Philosophy.md>) | book | philosophy | Chronological, one short chapter per thinker |
| 48 | [Oxford University Press - Very Short Introductions](<6 Books/Oxford University Press - Very Short Introductions.md>) | book | all subjects | Standalone one-topic primers; no path |
| 49 | [Ryan Holiday and Stephen Hanselman - The Daily Stoic](<6 Books/Ryan Holiday and Stephen Hanselman - The Daily Stoic.md>) | book | philosophy | Calendar: 366 entries, 12 monthly themes |
| 50 | [Simon Blackburn - Think](<6 Books/Simon Blackburn - Think.md>) | book | philosophy | Problems-first, each through a classic text |
| 51 | [Susan Wise Bauer - The Well-Educated Mind](<6 Books/Susan Wise Bauer - The Well-Educated Mind.md>) | book | literature, philosophy, history, science | Genre lists + three-pass trivium reading |
| 52 | [Terry Eagleton - Literary Theory An Introduction](<6 Books/Terry Eagleton - Literary Theory An Introduction.md>) | book | literature, theory | Theory schools, argued as political |
| 53 | [Thomas C. Foster - How to Read Literature Like a Professor](<6 Books/Thomas C. Foster - How to Read Literature Like a Professor.md>) | book | literature | Pattern catalog |
| 54 | [Thomas Nagel - What Does It All Mean](<6 Books/Thomas Nagel - What Does It All Mean.md>) | book | philosophy | Problems-first, no history or names |
| 55 | [W. W. Norton - The Norton Anthology of English Literature](<6 Books/W. W. Norton - The Norton Anthology of English Literature.md>) | book | literature | Six period volumes |
| 56 | [Will Durant - The Story of Philosophy](<6 Books/Will Durant - The Story of Philosophy.md>) | book | philosophy | Great-thinker biographies, chronological |
| | **7 Reference and Taxonomies** | | | |
| 57 | [Modern Language Association (MLA) - Forum Structure](<7 Reference and Taxonomies/Modern Language Association (MLA) - Forum Structure.md>) | reference | literature, language, theory, media | Language/region × period + genre, method and lens forums |
| 58 | [PhilPapers - Category Taxonomy](<7 Reference and Taxonomies/PhilPapers - Category Taxonomy.md>) | reference | philosophy | 7 areas → ~38 subfields → topics |
| 59 | [The Metropolitan Museum of Art - Heilbrunn Timeline of Art History](<7 Reference and Taxonomies/The Metropolitan Museum of Art - Heilbrunn Timeline of Art History.md>) | reference | art | Region × period grid + essays + keyword facets |

---

## Appendix B: Verification notes
- **Blocked or unreliable automated access.** Data for these sources came from official PDFs, mirrors, Wikipedia or library guides instead, and each file's *Sources* section says which:
  - college.columbia.edu, ox.ac.uk, smarthistory.org and philpapers.org returned 403;
  - some Oxford and Cambridge English pages returned 404;
  - bbc.co.uk was blocked;
  - metmuseum.org returned 429;
  - MIT OCW redirected in a loop;
  - the OUP series page returned no content.
- **PDF sources** (course guides, specifications, course and exam descriptions) were read by extracting their text locally where the fetch tool could not parse them. The Cambridge Philosophy *Guide to Courses* is one example.
- **Flagged as unverified inside files:** for example, the Princeton senior thesis length (third-party figures), parts of MIT 24.00's reading lists, and the thinker summaries per chapter in Eagleton. These are marked where they appear.
- **How the canon counts in Section 6 were made:**
  - For each source file, only the text before "Takeaways for LeetLit" was searched: frontmatter, path and anatomy sections.
  - Each author or work was counted once per source when it was named there, using keyword patterns (for example, "Homer|Iliad|Odyssey").
  - The counts measure *presence in the documented path*, not emphasis or time spent. They undercount sources whose files summarize a path without listing every work (for example, *In Our Time* and *Literature and History*).
- **Dates:** all files were verified on 2026-10-29. Curricula change yearly, so check `verified` in each file's frontmatter before relying on its specifics.
