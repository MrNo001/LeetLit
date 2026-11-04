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
```

TypeScript is pinned to 5.x on purpose: `next build` type-checks through TypeScript's JavaScript API.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Roadmap cards. Greek Philosophy is live; Literature and Art are "coming soon". |
| `/tracks/greek-philosophy` | The roadmap tree. Fundamentals are at the top and later topics build on them. Click a topic to open its lessons. `?topic=<id>` links straight to one topic. |
| `/tracks/greek-philosophy/<lessonId>` | A lesson: introduction, reading, breakdown by section, questions, then mark complete and previous/next. |
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
  lib/
    curriculum.ts         lookups, ordering, client-safe summaries
    plan.ts               plans and access rules
    viewer.ts             who is viewing (where auth plugs in)
    progress/store.ts     where progress is saved (where the API plugs in)
```

## Editing content

- **Topics.** Each topic is one file in `src/content/greek-philosophy/`, registered in `index.ts`.
  - `position: { x, y }` places it on the grid: `x` is the column (0–2) and `y` is the row.
  - `requires` lists the topics it builds on. These draw the edges of the tree.
- **Ids.** Topic and lesson ids are permanent, because progress (and later, account data) refers to them. Titles can change freely; ids should not.
- **Markup.** Text fields support `*italic*` and `**bold**`.
- **Reading text.** Add `text: [...]` (one string per paragraph) to a lesson's `reading` to replace the placeholder.
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
- **Licensed translations.**
  - Keep these out of the repo.
  - Load them on the server per request, after the access check, rather than adding them as `text` in content files.

## Known gaps

- Reading texts are placeholders; each one names its suggested translations.
- Copyright status for translations is given for the United States only.
- Lesson content is a first draft. Before launch, an editor should check summaries and locators against the texts.
- The four Pro lessons are examples to show gating:
  - Republic VIII–X: Decline, Happiness and the Myth of Er
  - De Anima: The Soul as Form of the Body
  - Contemplation and the Political Animal
  - Sextus Empiricus: The Skeptic Way
