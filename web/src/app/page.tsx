import Link from "next/link";
import { TrackProgress } from "@/components/TrackProgress";
import { tracks, upcomingTracks } from "@/content/tracks";
import { trackStats } from "@/lib/curriculum";
import styles from "./home.module.css";

export default function HomePage() {
  const [firstTrack] = tracks;

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.kicker}>Philosophy · Literature · Art</p>
        <h1 className={styles.headline}>A better way to read the classics.</h1>
        <p className={styles.lede}>
          Follow a roadmap from first questions to the hardest texts. Every lesson gives you a short introduction, the
          primary reading and a part-by-part breakdown.
        </p>
        <div className={styles.actions}>
          <Link href={`/tracks/${firstTrack.id}`} className="btn btn-primary">
            Start with {firstTrack.title} →
          </Link>
          <span className={styles.note}>Free to start. Progress is saved in this browser.</span>
        </div>
      </section>

      <section aria-labelledby="roadmaps">
        <h2 id="roadmaps" className={styles.sectionTitle}>
          Roadmaps
        </h2>
        <div className={styles.grid}>
          {tracks.map((track) => {
            const stats = trackStats(track);
            return (
              <Link key={track.id} href={`/tracks/${track.id}`} className={styles.card}>
                <span className={styles.discipline}>{track.discipline}</span>
                <h3 className={styles.cardTitle}>{track.title}</h3>
                <p className={styles.cardText}>{track.tagline}</p>
                <p className={styles.stats}>
                  {stats.topics} topics · {stats.lessons} lessons · about {stats.hours} hours
                </p>
                <TrackProgress lessonIds={stats.lessonIds} className={styles.cardProgress} />
              </Link>
            );
          })}
          {upcomingTracks.map((track) => (
            <div key={track.id} className={`${styles.card} ${styles.upcoming}`}>
              <span className={styles.discipline}>{track.discipline}</span>
              <h3 className={styles.cardTitle}>{track.title}</h3>
              <p className={styles.cardText}>{track.tagline}</p>
              <span className={styles.soon}>Coming soon</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="how" className={styles.how}>
        <h2 id="how" className={styles.sectionTitle}>
          How a lesson works
        </h2>
        <ol className={styles.steps}>
          <li>
            <strong>Introduction.</strong> Who wrote it, when, and why it matters, in a few paragraphs.
          </li>
          <li>
            <strong>Reading.</strong> The primary text itself, with recommended translations.
          </li>
          <li>
            <strong>Breakdown.</strong> The reading part by part, with what to notice in each.
          </li>
        </ol>
      </section>
    </>
  );
}
