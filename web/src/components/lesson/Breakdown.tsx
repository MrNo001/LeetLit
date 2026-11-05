import { Inline } from "@/components/Prose";
import type { BreakdownSection } from "@/content/types";
import styles from "./Lesson.module.css";

/** `linkText` adds a link from each part to the place in the reading text where it begins. */
export function Breakdown({ sections, linkText = false }: { sections: BreakdownSection[]; linkText?: boolean }) {
  return (
    <ol className={styles.breakdown}>
      {sections.map((section, i) => (
        <li key={i} id={`part-${i + 1}`} className={styles.part}>
          <span className={styles.partNumber} aria-hidden="true">
            {i + 1}
          </span>
          <div className={styles.partBody}>
            <p className={styles.partHead}>
              <span className={styles.partLocator}>{section.locator}</span>
              {linkText && (
                <a href={`#text-part-${i + 1}`} className={styles.partRead}>
                  Read this part ↑
                </a>
              )}
            </p>
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
