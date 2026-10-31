import { tracks } from "@/content/tracks";
import type { Access, Lesson, RoadmapNode, Track } from "@/content/types";

export function getTrack(trackId: string): Track | undefined {
  return tracks.find((track) => track.id === trackId);
}

/** Nodes in roadmap order: top to bottom, then left to right. */
export function orderedNodes(track: Track): RoadmapNode[] {
  return [...track.nodes].sort((a, b) => a.position.y - b.position.y || a.position.x - b.position.x);
}

export interface LessonEntry {
  node: RoadmapNode;
  lesson: Lesson;
}

/** Every lesson in the track, in the order a learner meets them on the roadmap. */
export function orderedLessons(track: Track): LessonEntry[] {
  return orderedNodes(track).flatMap((node) => node.lessons.map((lesson) => ({ node, lesson })));
}

export function findLesson(track: Track, lessonId: string) {
  const entries = orderedLessons(track);
  const index = entries.findIndex((entry) => entry.lesson.id === lessonId);
  if (index === -1) return undefined;
  return { ...entries[index], prev: entries[index - 1], next: entries[index + 1] };
}

export function trackStats(track: Track) {
  const lessons = track.nodes.flatMap((node) => node.lessons);
  return {
    topics: track.nodes.length,
    lessons: lessons.length,
    hours: Math.round(lessons.reduce((sum, lesson) => sum + lesson.minutes, 0) / 60),
    lessonIds: lessons.map((lesson) => lesson.id),
  };
}

// View models: the slices of content handed to client components. Keeping them
// small keeps lesson bodies (and, later, licensed texts) out of the browser bundle.

export interface LessonSummary {
  id: string;
  title: string;
  minutes: number;
  access: Access;
  /** "Author · Work", with inline markup. */
  reading: string;
}

export interface NodeSummary {
  id: string;
  title: string;
  era: string;
  summary: string;
  position: { x: number; y: number };
  requires: string[];
  lessons: LessonSummary[];
}

export function summarizeLesson(lesson: Lesson): LessonSummary {
  return {
    id: lesson.id,
    title: lesson.title,
    minutes: lesson.minutes,
    access: lesson.access,
    reading: `${lesson.reading.author} · ${lesson.reading.work}`,
  };
}

export function summarizeNodes(track: Track): NodeSummary[] {
  return orderedNodes(track).map(({ lessons, ...node }) => ({ ...node, lessons: lessons.map(summarizeLesson) }));
}
