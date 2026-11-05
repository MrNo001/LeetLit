// Downloads every source in sources/catalog.mjs that is not already on disk.
// Usage: npm run sources [-- --force] [-- <id> ...]

import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { catalog } from "../sources/catalog.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "sources");
const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((arg) => !arg.startsWith("--"));

async function exists(file) {
  try {
    return (await stat(file)).size > 0;
  } catch {
    return false;
  }
}

async function download(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "LeetLit/0.1 (private study; sources catalog)" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (error) {
      if (attempt === 3) throw error;
      await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
    }
  }
}

let failed = 0;
for (const source of catalog) {
  if (only.length && !only.includes(source.id)) continue;
  // Entries that read another entry's file (two volumes in one download) have nothing to fetch.
  if (source.shares) continue;
  const file = path.join(root, source.file);
  if (!force && (await exists(file))) continue;
  process.stdout.write(`${source.id} … `);
  try {
    let body = await download(source.url);
    // The Wikisource API wraps the rendered page in JSON; keep just the HTML.
    if (source.format === "wikisource") body = JSON.parse(body).parse.text;
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, body);
    console.log(`${Math.round(body.length / 1024)} KB`);
  } catch (error) {
    failed++;
    console.log(`failed: ${error.message}`);
  }
}
if (failed) process.exitCode = 1;
