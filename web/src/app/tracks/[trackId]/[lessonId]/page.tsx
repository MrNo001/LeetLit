import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AccessBadge } from "@/components/Badges";
import { Breakdown } from "@/components/lesson/Breakdown";
import { CompleteButton } from "@/components/lesson/CompleteButton";
import styles from "@/components/lesson/Lesson.module.css";
import { LessonSidebar } from "@/components/lesson/LessonSidebar";
import { Paywall } from "@/components/lesson/Paywall";
import { ReadingCard } from "@/components/lesson/ReadingCard";
import { Inline, Prose, plainText } from "@/components/Prose";
import { findLesson, getTrack, summarizeLesson } from "@/lib/curriculum";
import { canAccess } from "@/lib/plan";
import { getViewer } from "@/lib/viewer";

interface LessonPageProps {
  params: Promise<{ trackId: string; lessonId: string }>;
}

async function load(params: LessonPageProps["params"]) {
  const { trackId, lessonId } = await params;
  const track = getTrack(trackId);
  const found = track && findLesson(track, lessonId);
  return track && found ? { track, ...found } : undefined;
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const page = await load(params);
  return page ? { title: plainText(page.lesson.title), description: plainText(page.lesson.intro[0]) } : {};
}

export default async function LessonPage({ params }: LessonPageProps) {
  const page = await load(params);
  if (!page) notFound();
  const { track, node, lesson, prev, next } = page;

  // Gate on the server: a locked lesson's breakdown and questions are never sent to the browser.
  const viewer = await getViewer();
  const unlocked = canAccess(viewer.plan, lesson.access);
  const hasQuestions = unlocked && (lesson.questions?.length ?? 0) > 0;

  return (
    <div className={styles.layout}>
      <LessonSidebar
        trackId={track.id}
        trackTitle={track.title}
        nodeId={node.id}
        nodeTitle={node.title}
        nodeEra={node.era}
        lessons={node.lessons.map(summarizeLesson)}
        currentId={lesson.id}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href={`/tracks/${track.id}`}>{track.title}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/tracks/${track.id}?topic=${node.id}`}>{node.title}</Link>
          </nav>
          <h1 className={styles.title}>{lesson.title}</h1>
          <div className={styles.meta}>
            <span>
              Lesson {node.lessons.indexOf(lesson) + 1} of {node.lessons.length}
            </span>
            <span>About {lesson.minutes} min</span>
            {lesson.access === "pro" ? <AccessBadge access="pro" /> : <span>Free</span>}
          </div>
        </header>

        <section id="introduction" className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <Prose paragraphs={lesson.intro} className={styles.prose} />
        </section>

        <section id="reading" className={styles.section}>
          <h2 className={styles.sectionTitle}>Reading</h2>
          <ReadingCard reading={lesson.reading} />
        </section>

        {unlocked ? (
          <section id="breakdown" className={styles.section}>
            <h2 className={styles.sectionTitle}>Breakdown</h2>
            <p className={styles.sectionLede}>
              The reading, part by part. Read each part first, then use the summary to check what you took from it.
            </p>
            <Breakdown sections={lesson.breakdown} />
          </section>
        ) : (
          <Paywall partCount={lesson.breakdown.length} questionCount={lesson.questions?.length ?? 0} />
        )}

        {hasQuestions && (
          <section id="questions" className={styles.section}>
            <h2 className={styles.sectionTitle}>Questions to consider</h2>
            <ol className={styles.questions}>
              {lesson.questions?.map((question, i) => (
                <li key={i}>
                  <Inline text={question} />
                </li>
              ))}
            </ol>
          </section>
        )}

        <footer className={styles.footer}>
          {unlocked && <CompleteButton lessonId={lesson.id} />}
          <div className={styles.pager}>
            {prev && (
              <Link href={`/tracks/${track.id}/${prev.lesson.id}`} className={styles.pagerLink}>
                <span>Previous</span>
                {prev.lesson.title}
              </Link>
            )}
            {next && (
              <Link href={`/tracks/${track.id}/${next.lesson.id}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
                <span>Next</span>
                {next.lesson.title}
              </Link>
            )}
          </div>
        </footer>
      </article>

      <nav className={styles.toc} aria-label="On this page">
        <p className={styles.tocTitle}>On this page</p>
        <ol>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#reading">Reading</a>
          </li>
          {unlocked ? (
            <li>
              <a href="#breakdown">Breakdown</a>
              <ol>
                {lesson.breakdown.map((section, i) => (
                  <li key={i}>
                    <a href={`#part-${i + 1}`}>
                      <Inline text={section.title} />
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          ) : (
            <li>
              <a href="#pro">Breakdown (Pro)</a>
            </li>
          )}
          {hasQuestions && (
            <li>
              <a href="#questions">Questions</a>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
}
