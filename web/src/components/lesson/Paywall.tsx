import { LockIcon } from "@/components/Icons";
import styles from "./Lesson.module.css";

/** Shown in place of a Pro lesson's breakdown and questions. Receives counts only, never the content. */
export function Paywall({ partCount, questionCount }: { partCount: number; questionCount: number }) {
  return (
    <section id="pro" className={styles.paywall}>
      <span className={styles.paywallIcon}>
        <LockIcon width={18} height={18} />
      </span>
      <h2 className={styles.paywallTitle}>Continue with LeetLit Pro</h2>
      <p>
        The {partCount}-part breakdown and {questionCount} discussion questions for this lesson are part of Pro. The
        introduction and the reading list are always free.
      </p>
      <button type="button" className="btn btn-primary" disabled>
        Subscriptions coming soon
      </button>
      <p className={styles.paywallHint}>
        Prototype: switch <strong>Preview</strong> to <strong>Pro</strong> in the header to see the full lesson.
      </p>
    </section>
  );
}
