import Link from "next/link";
import { BookIcon, TreeIcon } from "@/components/Icons";
import { Inline, Prose } from "@/components/Prose";
import type { Reading } from "@/content/types";
import styles from "./Lesson.module.css";

const SKELETON_LINES = [92, 100, 96, 88, 98, 61];

export function ReadingCard({ reading }: { reading: Reading }) {
  return (
    <div className={styles.reading}>
      <div className={styles.readingHead}>
        <span className={styles.readingIcon}>
          <BookIcon />
        </span>
        <div>
          <p className={styles.readingWork}>
            <Inline text={reading.work} />
          </p>
          <p className={styles.readingAuthor}>
            {reading.author}
            {reading.date ? ` · ${reading.date}` : ""}
          </p>
        </div>
      </div>

      <dl className={styles.readingFacts}>
        <div>
          <dt>What to read</dt>
          <dd>
            <Inline text={reading.selection} />
          </dd>
        </div>
        <div>
          <dt>References</dt>
          <dd>{reading.locatorSystem}</dd>
        </div>
      </dl>

      {reading.companions?.map((companion) => (
        <Link key={companion.href} href={companion.href} className={styles.companion}>
          <span className={styles.companionIcon}>
            <TreeIcon />
          </span>
          <span className={styles.companionBody}>
            <span className={styles.companionTitle}>{companion.title}</span>
            <span className={styles.companionText}>
              <Inline text={companion.description} />
            </span>
          </span>
          <span className={styles.companionArrow} aria-hidden="true">
            →
          </span>
        </Link>
      ))}

      {reading.text ? (
        <Prose paragraphs={reading.text} className={styles.readingText} />
      ) : (
        <div className={styles.placeholder} role="note">
          <p className={styles.placeholderTitle}>Reading text coming soon</p>
          <p>
            The text will appear here in a licensed or public-domain translation, with its reference numbers in the
            margin linked to the breakdown below. Until then, read it in one of the translations listed.
          </p>
          <div className={styles.skeleton} aria-hidden="true">
            {SKELETON_LINES.map((width, i) => (
              <span key={i} style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
      )}

      <div className={styles.translations}>
        <p className={styles.translationsTitle}>Translations</p>
        <ul>
          {reading.translations.map((translation) => (
            <li key={`${translation.translator}-${translation.year}`}>
              <span>
                {translation.translator}, <em>{translation.title}</em> ({translation.year})
              </span>
              <span className={translation.publicDomain ? styles.publicDomain : styles.copyright}>
                {translation.publicDomain ? "Public domain" : "In copyright"}
              </span>
            </li>
          ))}
        </ul>
        <p className={styles.translationsNote}>Copyright status is for the United States.</p>
      </div>
    </div>
  );
}
