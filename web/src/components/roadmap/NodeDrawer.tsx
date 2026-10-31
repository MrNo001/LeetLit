"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AccessBadge, ProgressBar } from "@/components/Badges";
import { CloseIcon } from "@/components/Icons";
import { Inline } from "@/components/Prose";
import { useProgress } from "@/components/ProgressProvider";
import type { NodeSummary } from "@/lib/curriculum";
import styles from "./Roadmap.module.css";

interface NodeDrawerProps {
  trackId: string;
  node: NodeSummary;
  prerequisites: NodeSummary[];
  onClose(): void;
  onSelect(nodeId: string): void;
}

/** Side panel listing a topic's lessons, opened from the roadmap. */
export function NodeDrawer({ trackId, node, prerequisites, onClose, onSelect }: NodeDrawerProps) {
  const { ready, isComplete, setComplete, countComplete } = useProgress();
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
  }, [node.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const done = ready ? countComplete(node.lessons.map((lesson) => lesson.id)) : 0;

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <aside
        ref={panelRef}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-title"
        tabIndex={-1}
      >
        <div className={styles.drawerHead}>
          <div>
            <p className={styles.drawerEra}>{node.era}</p>
            <h2 id="topic-title" className={styles.drawerTitle}>
              {node.title}
            </h2>
          </div>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <p className={styles.drawerSummary}>
          <Inline text={node.summary} />
        </p>

        {prerequisites.length > 0 && (
          <div className={styles.requires}>
            <span>Builds on</span>
            {prerequisites.map((prerequisite) => (
              <button
                key={prerequisite.id}
                type="button"
                className={styles.chip}
                onClick={() => onSelect(prerequisite.id)}
              >
                {prerequisite.title}
              </button>
            ))}
          </div>
        )}

        <div className={styles.drawerProgress}>
          <span>
            {done} of {node.lessons.length} lessons complete
          </span>
          <ProgressBar value={done} total={node.lessons.length} label={`Lessons completed in ${node.title}`} />
        </div>

        <ol className={styles.lessons}>
          {node.lessons.map((lesson) => {
            const complete = ready && isComplete(lesson.id);
            return (
              <li key={lesson.id} className={styles.lesson} data-complete={complete || undefined}>
                <input
                  type="checkbox"
                  className={styles.check}
                  checked={complete}
                  disabled={!ready}
                  onChange={(event) => setComplete(lesson.id, event.target.checked)}
                  aria-label={`Mark "${lesson.title}" as complete`}
                />
                <div className={styles.lessonBody}>
                  <Link href={`/tracks/${trackId}/${lesson.id}`} className={styles.lessonTitle}>
                    {lesson.title}
                  </Link>
                  <span className={styles.lessonReading}>
                    <Inline text={lesson.reading} />
                  </span>
                </div>
                <div className={styles.lessonSide}>
                  <AccessBadge access={lesson.access} />
                  <span>{lesson.minutes} min</span>
                </div>
              </li>
            );
          })}
        </ol>
      </aside>
    </>
  );
}
