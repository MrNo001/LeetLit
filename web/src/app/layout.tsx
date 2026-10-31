import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ProgressProvider } from "@/components/ProgressProvider";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "LeetLit", template: "%s · LeetLit" },
  description:
    "Roadmaps for philosophy, literature and art. Every lesson pairs a short introduction with the primary reading and a part-by-part breakdown.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>
          <SiteHeader />
          <main className="main">{children}</main>
        </ProgressProvider>
      </body>
    </html>
  );
}
