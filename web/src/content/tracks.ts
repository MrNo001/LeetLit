import { greekPhilosophy } from "./greek-philosophy";
import type { Track, UpcomingTrack } from "./types";

export const tracks: Track[] = [greekPhilosophy];

export const upcomingTracks: UpcomingTrack[] = [
  {
    id: "literature",
    discipline: "literature",
    title: "Literature",
    tagline: "Close reading, period by period, from Homer to the moderns.",
  },
  {
    id: "art",
    discipline: "art",
    title: "Art",
    tagline: "Learn to look: the periods, the works and the words to describe them.",
  },
];

/**
 * Progress records point at lessons by id alone, so lesson ids must be unique
 * across every track, and every prerequisite must name a node in the same track.
 */
function validate(all: Track[]) {
  const lessonIds = new Set<string>();
  for (const track of all) {
    const nodeIds = new Set(track.nodes.map((node) => node.id));
    for (const node of track.nodes) {
      for (const required of node.requires) {
        if (!nodeIds.has(required)) {
          throw new Error(`Node "${node.id}" requires unknown node "${required}" in track "${track.id}"`);
        }
      }
      for (const lesson of node.lessons) {
        if (lessonIds.has(lesson.id)) throw new Error(`Duplicate lesson id "${lesson.id}"`);
        lessonIds.add(lesson.id);
      }
    }
  }
}

validate(tracks);
