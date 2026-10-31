"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import { ProgressBar } from "@/components/Badges";
import { useProgress } from "@/components/ProgressProvider";
import type { NodeSummary } from "@/lib/curriculum";
import { NodeDrawer } from "./NodeDrawer";
import styles from "./Roadmap.module.css";

const ROW_HEIGHT = 148;
const NODE_HEIGHT = 84;
/** Edge coordinates run from 0 to 1000 across the canvas, whatever its pixel width. */
const VIEW_WIDTH = 1000;

interface RoadmapProps {
  trackId: string;
  columns: number;
  nodes: NodeSummary[];
}

export function Roadmap({ trackId, columns, nodes }: RoadmapProps) {
  const { ready, isComplete, countComplete } = useProgress();
  const [openId, setOpenId] = useState<string | null>(null);

  const byId = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);
  const lessons = useMemo(() => nodes.flatMap((node) => node.lessons), [nodes]);

  // Deep link: ?topic=<node id> opens that topic's drawer.
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    if (topic && byId.has(topic)) setOpenId(topic);
  }, [byId]);

  const open = useCallback((id: string | null) => {
    setOpenId(id);
    window.history.replaceState(null, "", id ? `?topic=${encodeURIComponent(id)}` : window.location.pathname);
  }, []);
  const close = useCallback(() => open(null), [open]);

  const doneIn = (node: NodeSummary) => (ready ? countComplete(node.lessons.map((lesson) => lesson.id)) : 0);
  const completed = ready ? countComplete(lessons.map((lesson) => lesson.id)) : 0;
  const nextLesson = ready ? lessons.find((lesson) => !isComplete(lesson.id)) : undefined;
  const nextNodeId = nextLesson && nodes.find((node) => node.lessons.includes(nextLesson))?.id;

  const rows = Math.max(...nodes.map((node) => node.position.y)) + 1;
  const height = (rows - 1) * ROW_HEIGHT + NODE_HEIGHT;
  const centerX = (column: number) => ((column + 0.5) / columns) * VIEW_WIDTH;

  const openNode = openId ? byId.get(openId) : undefined;

  return (
    <>
      <div className={styles.summary}>
        <div className={styles.summaryProgress}>
          <span>
            <strong>{completed}</strong> of {lessons.length} lessons complete
          </span>
          <ProgressBar value={completed} total={lessons.length} label="Lessons completed in this roadmap" />
        </div>
        {nextLesson && (
          <Link href={`/tracks/${trackId}/${nextLesson.id}`} className="btn btn-primary">
            {completed === 0 ? "Start" : "Continue"}: {nextLesson.title} →
          </Link>
        )}
      </div>

      <div
        className={styles.canvas}
        style={
          {
            "--columns": columns,
            "--row-h": `${ROW_HEIGHT}px`,
            "--node-h": `${NODE_HEIGHT}px`,
            "--canvas-h": `${height}px`,
          } as CSSProperties
        }
      >
        <svg
          className={styles.edges}
          viewBox={`0 0 ${VIEW_WIDTH} ${height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.flatMap((node) =>
            node.requires.map((requiredId) => {
              const from = byId.get(requiredId);
              if (!from) return null;
              const x1 = centerX(from.position.x);
              const y1 = from.position.y * ROW_HEIGHT + NODE_HEIGHT;
              const x2 = centerX(node.position.x);
              const y2 = node.position.y * ROW_HEIGHT;
              const midY = (y1 + y2) / 2;
              const fromDone = ready && doneIn(from) === from.lessons.length;
              return (
                <path
                  key={`${requiredId}->${node.id}`}
                  d={`M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`}
                  className={fromDone ? styles.edgeDone : styles.edge}
                  vectorEffect="non-scaling-stroke"
                />
              );
            }),
          )}
        </svg>

        {nodes.map((node) => {
          const done = doneIn(node);
          const total = node.lessons.length;
          const isNext = node.id === nextNodeId;
          return (
            <button
              key={node.id}
              type="button"
              className={styles.node}
              data-state={done === total ? "complete" : done > 0 ? "started" : "new"}
              data-next={isNext || undefined}
              style={{ "--x": node.position.x, "--y": node.position.y } as CSSProperties}
              onClick={() => open(node.id)}
              aria-haspopup="dialog"
            >
              {isNext && <span className={styles.nextTag}>Up next</span>}
              <span className={styles.nodeTitle}>{node.title}</span>
              <span className={styles.nodeMeta}>
                {node.era} · {done}/{total}
              </span>
              <span className={styles.nodeBar}>
                <span style={{ width: `${(done / total) * 100}%` }} />
              </span>
            </button>
          );
        })}
      </div>

      {openNode && (
        <NodeDrawer
          trackId={trackId}
          node={openNode}
          prerequisites={openNode.requires.flatMap((id) => byId.get(id) ?? [])}
          onClose={close}
          onSelect={open}
        />
      )}
    </>
  );
}
