"use client";

import { ProgressBar } from "./Badges";
import { useProgress } from "./ProgressProvider";

export function TrackProgress({ lessonIds, className }: { lessonIds: string[]; className?: string }) {
  const { ready, countComplete } = useProgress();
  const done = ready ? countComplete(lessonIds) : 0;
  return (
    <div className={className}>
      <ProgressBar value={done} total={lessonIds.length} label="Lessons completed" />
      <span>
        {done} / {lessonIds.length} lessons complete
      </span>
    </div>
  );
}
