import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Roadmap } from "@/components/roadmap/Roadmap";
import { tracks } from "@/content/tracks";
import { getTrack, summarizeNodes, trackStats } from "@/lib/curriculum";
import styles from "./track.module.css";

interface TrackPageProps {
  params: Promise<{ trackId: string }>;
}

export function generateStaticParams() {
  return tracks.map((track) => ({ trackId: track.id }));
}

export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  const track = getTrack((await params).trackId);
  return track ? { title: `${track.title} roadmap`, description: track.tagline } : {};
}

export default async function TrackPage({ params }: TrackPageProps) {
  const track = getTrack((await params).trackId);
  if (!track) notFound();
  const stats = trackStats(track);

  return (
    <>
      <header className={styles.header}>
        <p className={styles.kicker}>{track.discipline} roadmap</p>
        <h1 className={styles.title}>{track.title}</h1>
        <p className={styles.description}>{track.description}</p>
        <p className={styles.stats}>
          {stats.topics} topics · {stats.lessons} lessons · about {stats.hours} hours of reading
        </p>
      </header>
      <Roadmap trackId={track.id} columns={track.columns} nodes={summarizeNodes(track)} />
    </>
  );
}
