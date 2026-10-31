"use client";

import { CheckIcon } from "@/components/Icons";
import { useProgress } from "@/components/ProgressProvider";
import styles from "./Lesson.module.css";

export function CompleteButton({ lessonId }: { lessonId: string }) {
  const { ready, isComplete, setComplete } = useProgress();
  const done = ready && isComplete(lessonId);

  return (
    <button
      type="button"
      className={`btn ${done ? styles.completeDone : "btn-primary"}`}
      disabled={!ready}
      aria-pressed={done}
      onClick={() => setComplete(lessonId, !done)}
    >
      {done ? (
        <>
          <CheckIcon /> Completed
        </>
      ) : (
        "Mark as complete"
      )}
    </button>
  );
}
