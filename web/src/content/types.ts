/**
 * Content model for LeetLit roadmaps.
 *
 * Content is static and versioned with the code. Everything a learner owns
 * (progress, notes, subscription) lives elsewhere and points at content by id,
 * so lesson and node ids must never change once published.
 *
 * Text fields support two pieces of inline markup: *italic* and **bold**.
 */

export type Discipline = "philosophy" | "literature" | "art";

/** Who can open a lesson's full content. Enforced on the server in the lesson route. */
export type Access = "free" | "pro";

export interface Translation {
  translator: string;
  title: string;
  year: number;
  /** Public domain in the US. Licensing still has to be checked per market. */
  publicDomain: boolean;
}

export interface Reading {
  author: string;
  /** The work or collection, e.g. "*Euthyphro*" or "Fragments (DK 22)". */
  work: string;
  date?: string;
  /** What to read, e.g. "The whole dialogue (2a–16a)". */
  selection: string;
  /** The reference system used by the breakdown, e.g. "Stephanus pages". */
  locatorSystem: string;
  translations: Translation[];
  /** Interactive aids to keep open while reading, e.g. a family tree of the characters. */
  companions?: Companion[];
}

export interface Companion {
  title: string;
  description: string;
  /** Site path of the companion page, e.g. "/companions/theogony-family-tree". */
  href: string;
}

/**
 * A lesson's reading text, built by `npm run readings` from the downloaded
 * sources (see web/sources/) into src/content/readings/<lessonId>.json.
 * It is loaded on the server, after the access check, never imported.
 */
export interface ReadingText {
  sources: ReadingSource[];
  sections: ReadingSection[];
}

/** The edition a passage is taken from. */
export interface ReadingSource {
  id: string;
  author?: string;
  work?: string;
  translator: string;
  title: string;
  year: number;
  /** Public domain in the US. */
  publicDomain: boolean;
  /** Where the digital text comes from, e.g. "Perseus Digital Library". */
  provider: string;
  url?: string;
  note?: string;
}

/** A run of text from one source. `part` marks where a breakdown part begins (1-based). */
export interface ReadingSection {
  source: string;
  part?: number;
  /** Names the passage when a reading gathers several, e.g. "Aristotle, *Metaphysics* I.3". */
  title?: string;
  note?: string;
  blocks: ReadingBlock[];
}

/** Plain text, a reference number for the margin, or emphasis. */
export type ReadingSegment = string | { ref: string } | { em: string };

export interface ReadingBlock {
  speaker?: string;
  /** The speech carries on from the previous block, so its speaker isn't repeated. */
  cont?: boolean;
  verse?: boolean;
  heading?: boolean;
  text: ReadingSegment[];
}

export interface BreakdownSection {
  /** Where this part sits in the reading, e.g. "2a–5d", "Book II", "B30". */
  locator: string;
  title: string;
  summary: string;
  /** Things to notice while reading this part. */
  points?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  access: Access;
  /** A short introduction, one string per paragraph. */
  intro: string[];
  reading: Reading;
  breakdown: BreakdownSection[];
  questions?: string[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  era: string;
  summary: string;
  /** Grid cell on the roadmap: column (0-based) and row. */
  position: { x: number; y: number };
  /** Ids of the nodes this one builds on; drawn as edges on the roadmap. */
  requires: string[];
  lessons: Lesson[];
}

export interface Track {
  id: string;
  discipline: Discipline;
  title: string;
  tagline: string;
  description: string;
  /** Number of columns in the roadmap grid. */
  columns: number;
  nodes: RoadmapNode[];
}

/** A track that is announced but has no content yet. */
export interface UpcomingTrack {
  id: string;
  discipline: Discipline;
  title: string;
  tagline: string;
}
