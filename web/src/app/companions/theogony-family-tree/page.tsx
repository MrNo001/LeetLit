import type { Metadata } from "next";
import Link from "next/link";
import { findLesson, getTrack } from "@/lib/curriculum";
import styles from "./companion.module.css";

// A self-contained page in public/, framed so its styles and scripts stay separate from the app's.
// ?theme=dark matches the site; without it the tree follows the OS setting.
const EMBED_SRC = "/embeds/theogony-family-tree/index.html?theme=dark";

export const metadata: Metadata = {
  title: "Theogony Family Tree",
  description:
    "An interactive family tree of the gods in Hesiod's Theogony, from Chaos to the heroes, with the lines where each one appears.",
};

export default function TheogonyFamilyTreePage() {
  const track = getTrack("greek-philosophy");
  const lesson = track && findLesson(track, "hesiod-theogony")?.lesson;

  return (
    <div className={styles.page}>
      <div className={styles.bar}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          {track && lesson && (
            <>
              <Link href={`/tracks/${track.id}`}>{track.title}</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/tracks/${track.id}/${lesson.id}`}>{lesson.title}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span>Family tree</span>
        </nav>
        <a href={EMBED_SRC} target="_blank" rel="noopener" className={styles.fullScreen}>
          Open full screen <span aria-hidden="true">↗</span>
        </a>
      </div>
      <iframe src={EMBED_SRC} title="Theogony family tree" className={styles.frame} />
    </div>
  );
}
