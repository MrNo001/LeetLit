import { access, readFile } from "node:fs/promises";
import path from "node:path";
import type { ReadingText } from "@/content/types";

// Built by `npm run readings`. Readings that use a text still in copyright are
// written to private/, which git ignores, so they exist only where they were built.
// Each path is written out where it is used, so the build traces only these folders.

/** Whether a lesson has a reading text, without loading it. Safe to call for locked lessons. */
export async function hasReadingText(lessonId: string): Promise<boolean> {
  const exists = (file: Promise<void>) => file.then(() => true, () => false);
  return (
    (await exists(access(path.join(process.cwd(), "src/content/readings", `${lessonId}.json`)))) ||
    (await exists(access(path.join(process.cwd(), "src/content/readings/private", `${lessonId}.json`))))
  );
}

/** Loads a lesson's reading text. Call only after the access check: the text is the lesson's content. */
export async function loadReadingText(lessonId: string): Promise<ReadingText | undefined> {
  const text =
    (await readFile(path.join(process.cwd(), "src/content/readings", `${lessonId}.json`), "utf8").catch(missing)) ??
    (await readFile(path.join(process.cwd(), "src/content/readings/private", `${lessonId}.json`), "utf8").catch(missing));
  return text === undefined ? undefined : (JSON.parse(text) as ReadingText);
}

/** A missing file means the lesson has no text yet; any other error is a real one. */
function missing(error: NodeJS.ErrnoException): undefined {
  if (error.code !== "ENOENT") throw error;
  return undefined;
}
