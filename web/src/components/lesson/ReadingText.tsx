import { Fragment } from "react";
import { Inline } from "@/components/Prose";
import type { BreakdownSection, ReadingBlock, ReadingSource, ReadingText as Text } from "@/content/types";
import styles from "./Lesson.module.css";

const LEETLIT = "leetlit";

function credit(source: ReadingSource) {
  return source.id === LEETLIT ? "Translated for LeetLit from the Greek" : `Translated by ${source.translator} (${source.year})`;
}

function Segments({ text }: { text: ReadingBlock["text"] }) {
  return text.map((segment, i) =>
    typeof segment === "string" ? (
      <Fragment key={i}>{segment}</Fragment>
    ) : "ref" in segment ? (
      <span key={i} className={styles.ref}>
        {segment.ref}
      </span>
    ) : (
      <em key={i}>{segment.em}</em>
    ),
  );
}

function Block({ block }: { block: ReadingBlock }) {
  if (block.heading) {
    return (
      <h4 className={styles.textHeading}>
        <Segments text={block.text} />
      </h4>
    );
  }
  return (
    <p className={block.verse ? styles.verse : undefined}>
      {block.speaker && !block.cont && <span className={styles.speaker}>{block.speaker}</span>}
      <Segments text={block.text} />
    </p>
  );
}

function SourceBadge({ source }: { source: ReadingSource }) {
  return (
    <span className={source.publicDomain ? styles.publicDomain : styles.copyright}>
      {source.id === LEETLIT ? "Original translation" : source.publicDomain ? "Public domain" : "In copyright"}
    </span>
  );
}

function SourceLine({ source }: { source: ReadingSource }) {
  return (
    <>
      <span>
        {source.id === LEETLIT ? (
          "LeetLit's own translation, made where no public-domain English version could be found"
        ) : (
          <>
            {source.translator}, <em>{source.title}</em> ({source.year})
            {source.url && (
              <>
                {" · "}
                <a href={source.url} target="_blank" rel="noreferrer" className={styles.sourceLink}>
                  {source.provider} ↗
                </a>
              </>
            )}
          </>
        )}
        {source.note && <span className={styles.sourceNote}>{source.note}</span>}
      </span>
      <SourceBadge source={source} />
    </>
  );
}

/**
 * The reading itself. Reference numbers sit in the margin beside the line they
 * belong to, and each breakdown part is marked where it begins.
 */
export function ReadingText({ text, parts }: { text: Text; parts: BreakdownSection[] }) {
  const sources = new Map(text.sources.map((source) => [source.id, source]));
  const single = text.sources.length === 1 ? text.sources[0] : undefined;

  return (
    <div id="text" className={styles.text}>
      <div className={styles.textHead}>
        <p className={styles.translationsTitle}>The text</p>
        {single ? (
          <p className={styles.textSource}>
            <SourceLine source={single} />
          </p>
        ) : (
          <p className={styles.textSource}>
            <span>Passages from {text.sources.length} translations, each credited where it begins. Sources are listed at the end.</span>
          </p>
        )}
      </div>

      <div className={styles.textBody}>
        {text.sections.map((section, i) => {
          const source = sources.get(section.source);
          const part = section.part ? parts[section.part - 1] : undefined;
          return (
            <Fragment key={i}>
              {part && (
                <a id={`text-part-${section.part}`} href={`#part-${section.part}`} className={styles.textPart}>
                  <span className={styles.textPartNumber}>{section.part}</span>
                  <span className={styles.textPartTitle}>
                    <Inline text={part.title} />
                  </span>
                  <span className={styles.textPartLink}>Summary ↓</span>
                </a>
              )}
              {section.title && (
                <div className={styles.passage}>
                  <h3 className={styles.passageTitle}>
                    <Inline text={section.title} />
                  </h3>
                  {!single && source && <p className={styles.passageCredit}>{credit(source)}</p>}
                </div>
              )}
              {section.blocks.map((block, j) => (
                <Block key={j} block={block} />
              ))}
              {section.note && (
                <p className={styles.passageNote}>
                  <Inline text={section.note} />
                </p>
              )}
            </Fragment>
          );
        })}
      </div>

      {!single && (
        <div className={styles.translations}>
          <p className={styles.translationsTitle}>Sources</p>
          <ul>
            {text.sources.map((source) => (
              <li key={source.id}>
                <SourceLine source={source} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
