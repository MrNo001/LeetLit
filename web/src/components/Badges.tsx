import type { Access } from "@/content/types";
import { LockIcon } from "./Icons";

/** Marks Pro lessons; free lessons get no badge. */
export function AccessBadge({ access }: { access: Access }) {
  if (access === "free") return null;
  return (
    <span className="badge badge-pro" title="Part of LeetLit Pro">
      <LockIcon /> Pro
    </span>
  );
}

export function ProgressBar({ value, total, label }: { value: number; total: number; label: string }) {
  const percent = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={value}
    >
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
