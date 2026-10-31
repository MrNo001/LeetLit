import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "80px 0", textAlign: "center" }}>
      <h1>Page not found</h1>
      <p style={{ margin: "12px 0 28px", color: "var(--text-muted)" }}>That page isn&apos;t on any roadmap.</p>
      <Link href="/" className="btn btn-primary">
        Back to roadmaps
      </Link>
    </div>
  );
}
