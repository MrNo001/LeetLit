"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { localProgressStore, type ProgressStore } from "@/lib/progress/store";

interface ProgressContextValue {
  /** False until saved progress has loaded in the browser. */
  ready: boolean;
  isComplete(lessonId: string): boolean;
  setComplete(lessonId: string, completed: boolean): void;
  countComplete(lessonIds: readonly string[]): number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({
  children,
  store = localProgressStore,
}: {
  children: ReactNode;
  store?: ProgressStore;
}) {
  const [completed, setCompleted] = useState<ReadonlySet<string>>(() => new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    store.list().then((ids) => {
      if (cancelled) return;
      setCompleted(new Set(ids));
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [store]);

  const setComplete = useCallback(
    (lessonId: string, done: boolean) => {
      setCompleted((previous) => {
        const next = new Set(previous);
        if (done) next.add(lessonId);
        else next.delete(lessonId);
        return next;
      });
      void store.setCompleted(lessonId, done);
    },
    [store],
  );

  const value = useMemo<ProgressContextValue>(
    () => ({
      ready,
      isComplete: (lessonId) => completed.has(lessonId),
      setComplete,
      countComplete: (lessonIds) => lessonIds.filter((id) => completed.has(id)).length,
    }),
    [completed, ready, setComplete],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used inside <ProgressProvider>");
  return context;
}
