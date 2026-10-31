"use client";

import Link from "next/link";
import { CheckIcon, LockIcon } from "@/components/Icons";
import { useProgress } from "@/components/ProgressProvider";
import type { LessonSummary } from "@/lib/curriculum";
import styles from "./Lesson.module.css";

interface LessonSidebarProps {
  trackId: string;
  trackTitle: string;
  nodeId: string;
  nodeTitle: string;
  nodeEra: string;
  lessons: LessonSummary[];
  currentId: string;
}

/** The lessons in the current topic, with the learner's progress. */
export function LessonSidebar({ trackId, trackTitle, nodeId, nodeTitle, nodeEra, lessons, currentId }: LessonSidebarProps) {
  const { ready, isComplete } = useProgress();

  return (
    <nav className={styles.sidebar} aria-label={`Lessons in ${nodeTitle}`}>
      <Link href={`/tracks/${trackId}?topic=${nodeId}`} className={styles.back}>
        ← {trackTitle} roadmap
      </Link>
      <p className={styles.sidebarEra}>{nodeEra}</p>
      <p className={styles.sidebarTitle}>{nodeTitle}</p>
      <ol className={styles.sidebarList}>
        {lessons.map((lesson, i) => {
          const done = ready && isComplete(lesson.id);
          return (
            <li key={lesson.id}>
              <Link
                href={`/tracks/${trackId}/${lesson.id}`}
                className={styles.sidebarLink}
                aria-current={lesson.id === currentId ? "page" : undefined}
              >
                <span className={styles.status} data-done={done || undefined}>
                  {done ? <CheckIcon /> : i + 1}
                </span>
                <span>{lesson.title}</span>
                {lesson.access === "pro" && (
                  <>
                    <LockIcon className={styles.sidebarLock} />
                    <span className="sr-only">(Pro)</span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
