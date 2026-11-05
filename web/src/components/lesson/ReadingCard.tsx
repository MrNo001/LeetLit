import Link from "next/link";
import { BookIcon, LockIcon, TreeIcon } from "@/components/Icons";
import { Inline } from "@/components/Prose";
import type { Reading, ReadingSource } from "@/content/types";
import styles from "./Lesson.module.css";

const SKELETON_LINES = [92, 100, 96, 88, 98, 61];

/**
 * What the reading is and where to find it. The text itself, when there is one,
 * follows the card (see ReadingText); `text` says whether it is shown, locked or not ready.
 */
export function ReadingCard({
  reading,
  text,
  shown = [],
}: {
  reading: Reading;
  text: "shown" | "locked" | "missing";
  shown?: ReadingSource[];
}) {
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

      {text === "locked" && (
        <div className={styles.placeholder} role="note">
          <p className={styles.placeholderTitle}>
            <LockIcon /> The text is part of Pro
          </p>
          <p>
            Pro lessons include the full text, with its reference numbers in the margin and each part of the breakdown
            marked where it begins. The translations below are all published, so you can also read it in one of them.
          </p>
        </div>
      )}

      {text === "missing" && (
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
              <span className={styles.badges}>
                {shown.some((source) => source.translator === translation.translator && source.year === translation.year) && (
                  <span className={styles.shownHere}>Shown below</span>
                )}
                <span className={translation.publicDomain ? styles.publicDomain : styles.copyright}>
                  {translation.publicDomain ? "Public domain" : "In copyright"}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className={styles.translationsNote}>Copyright status is for the United States.</p>
      </div>
    </div>
  );
}
