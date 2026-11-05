# LeetLit (prototype)

A NeetCode-style learning platform for philosophy, literature and art. This prototype has one roadmap, **Greek Philosophy**: 13 topics and 32 lessons, from the Presocratics to the Hellenistic schools. It shows what the UI looks like and how lessons are presented.

## Run it

Requires Node 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (also type-checks)
npm start            # serve the production build
npm run typecheck
npm run sources      # download the source texts (see sources/README.md)
npm run readings     # build each lesson's text from them
```

TypeScript is pinned to 5.x on purpose: `next build` type-checks through TypeScript's JavaScript API.

The source texts are git-ignored. After cloning, run `npm run sources` and then `npm run readings`, or the lessons show no text.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Roadmap cards. Greek Philosophy is live; Literature and Art are "coming soon". |
| `/tracks/greek-philosophy` | The roadmap tree. Fundamentals are at the top and later topics build on them. Click a topic to open its lessons. `?topic=<id>` links straight to one topic. |
| `/tracks/greek-philosophy/<lessonId>` | A lesson: introduction, reading, the text (with reference numbers in the margin and each breakdown part marked), breakdown by section, questions, then mark complete and previous/next. |
| `/companions/theogony-family-tree` | An interactive family tree of the gods in Hesiod's *Theogony*, linked from that lesson's reading. The tree is a self-contained page in `public/embeds/theogony-family-tree/`, shown in an iframe so its styles and scripts stay separate from the app's. |

## Structure

```
src/
  app/                    routes (App Router)
  components/             header, roadmap tree and drawer, lesson parts
  content/
    types.ts              the content model
    tracks.ts             track registry, plus checks that run at build time
    greek-philosophy/     one file per roadmap topic
    readings/             each lesson's text, built by npm run readings
      private/            texts still in copyright (git-ignored)
  lib/
    curriculum.ts         lookups, ordering, client-safe summaries
    plan.ts               plans and access rules
    readings.ts           loads a lesson's text on the server
    viewer.ts             who is viewing (where auth plugs in)
    progress/store.ts     where progress is saved (where the API plugs in)
scripts/
  fetch-sources.mjs       npm run sources
  build-readings.mjs      npm run readings
  readings/               parsers, recipes and LeetLit's own translations
sources/
  catalog.mjs             every source text, with its copyright status
  README.md               how the readings are built
```

## Editing content

- **Topics.** Each topic is one file in `src/content/greek-philosophy/`, registered in `index.ts`.
  - `position: { x, y }` places it on the grid: `x` is the column (0–2) and `y` is the row.
  - `requires` lists the topics it builds on. These draw the edges of the tree.
- **Ids.** Topic and lesson ids are permanent, because progress (and later, account data) refers to them. Titles can change freely; ids should not.
- **Markup.** Text fields support `*italic*` and `**bold**`.
- **Reading text.** Each lesson's text is built from the downloaded sources by a recipe in `scripts/readings/recipes/`; see `sources/README.md`. The reading card marks a translation "Shown below" when its translator and year match a source of the text.
- **Companions.** Add `companions: [{ title, description, href }]` to a lesson's `reading` to link an interactive aid, such as the Theogony family tree, from the reading card.
- **Breakdown locators.** These use the reading's standard reference system (Stephanus, Bekker or Diels–Kranz numbers), so they line up with any translation.
- **Build-time checks.** `tracks.ts` stops the build if a lesson id appears twice or a `requires` entry points to a topic that doesn't exist.
- **What reaches the browser.** Client components receive only lesson summaries (`summarizeNodes`), never full lesson bodies.

## Accounts and subscriptions

These are designed for but not built yet.

- **Viewer.**
  - `getViewer()` in `src/lib/viewer.ts` is the one place to connect auth, for example Auth.js or Clerk.
  - It is also where the subscription is looked up, for example from a `subscriptions` table that Stripe webhooks keep current.
- **Gating.**
  - Every lesson has `access: "free" | "pro"`, and the lesson route checks `canAccess()` on the server.
  - For a locked lesson, the breakdown and questions are never sent to the browser. The paywall receives only their counts.
  - The introduction and reading details stay visible as a preview.
- **Plan preview (prototype only).**
  - The Free/Pro switch in the header sets the `leetlit-plan-preview` cookie, so you can see both states.
  - Remove it once real plans exist: a plan must never come from the browser.
- **Progress.**
  - Progress is saved in `localStorage` through the `ProgressStore` interface.
  - For accounts, add an API-backed store with the same interface. On first sign-in, merge the guest's local progress into the account.
- **Suggested tables.**
  - `users`
  - `subscriptions`: user, plan, status, period end, Stripe ids
  - `lesson_progress`: user, lesson id, completed at
  - Content stays in code; user data refers to it by id.
- **Texts.**
  - A lesson's text is read from disk on the server (`src/lib/readings.ts`), and only for a viewer who can open the lesson.
  - A locked lesson says its text is part of Pro, and nothing from the text reaches the browser.
  - Texts still in copyright are built into `src/content/readings/private/`, which git ignores. Licensed translations, once there are any, should be loaded the same way.

## Known gaps

- Three lessons use translations still in US copyright (Shorey's *Republic* VI–X, 1935, and J. A. Smith's *De Anima*, 1931). They are for private study only, and must be replaced or licensed before launch. See `sources/README.md`.
- Some passages are LeetLit's own translations from the Greek, made where no public-domain English version could be found. A classicist should check them.
- Copyright status for translations is given for the United States only.
- Lesson content is a first draft. Before launch, an editor should check summaries and locators against the texts.
- The four Pro lessons are examples to show gating:
  - Republic VIII–X: Decline, Happiness and the Myth of Er
  - De Anima: The Soul as Form of the Body
  - Contemplation and the Political Animal
  - Sextus Empiricus: The Skeptic Way
