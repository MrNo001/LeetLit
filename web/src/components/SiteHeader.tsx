import Link from "next/link";
import { PlanPreview } from "./PlanPreview";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            Λ
          </span>
          LeetLit
        </Link>
        <nav className={styles.nav} aria-label="Main">
          <Link href="/">Roadmaps</Link>
          <Link href="/tracks/greek-philosophy">Greek Philosophy</Link>
        </nav>
        <div className={styles.account}>
          <PlanPreview />
          {/* Account slot. Until accounts exist, everyone is a guest and progress stays in the browser. */}
          <button
            type="button"
            className={styles.signIn}
            disabled
            title="Accounts are coming soon. Until then, progress is saved in this browser."
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
