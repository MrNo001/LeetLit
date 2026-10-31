"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PLAN_PREVIEW_COOKIE, type Plan } from "@/lib/plan";
import styles from "./SiteHeader.module.css";

const ONE_YEAR = 60 * 60 * 24 * 365;

function readPlan(): Plan {
  return document.cookie.split("; ").includes(`${PLAN_PREVIEW_COOKIE}=pro`) ? "pro" : "free";
}

/** Prototype-only switch for previewing the site as a free or a Pro member. */
export function PlanPreview() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan>("free");

  useEffect(() => setPlan(readPlan()), []);

  function choose(next: Plan) {
    document.cookie = `${PLAN_PREVIEW_COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
    setPlan(next);
    router.refresh(); // server components read the cookie, so re-render them
  }

  return (
    <div
      className={styles.preview}
      role="group"
      aria-label="Preview the site as a free or Pro member"
      title="Prototype only: switch between free and Pro access"
    >
      <span className={styles.previewLabel}>Preview</span>
      {(["free", "pro"] as const).map((option) => (
        <button
          key={option}
          type="button"
          data-plan={option}
          aria-pressed={plan === option}
          className={styles.previewOption}
          onClick={() => choose(option)}
        >
          {option === "free" ? "Free" : "Pro"}
        </button>
      ))}
    </div>
  );
}
