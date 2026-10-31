import { Inline } from "@/components/Prose";
import type { BreakdownSection } from "@/content/types";
import styles from "./Lesson.module.css";

export function Breakdown({ sections }: { sections: BreakdownSection[] }) {
  return (
    <ol className={styles.breakdown}>
      {sections.map((section, i) => (
        <li key={i} id={`part-${i + 1}`} className={styles.part}>
          <span className={styles.partNumber} aria-hidden="true">
            {i + 1}
          </span>
          <div className={styles.partBody}>
            <p className={styles.partLocator}>{section.locator}</p>
            <h3 className={styles.partTitle}>
              <Inline text={section.title} />
            </h3>
            <p className={styles.partSummary}>
              <Inline text={section.summary} />
            </p>
            {section.points && section.points.length > 0 && (
              <div className={styles.notice}>
                <p className={styles.noticeLabel}>Notice</p>
                <ul>
                  {section.points.map((point, j) => (
                    <li key={j}>
                      <Inline text={point} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
