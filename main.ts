// Make the AI Judge Feel Nostalgic: A Childhood Memory
// Entry: a single sentence, at most 280 characters, that brings back a
// childhood memory. This program writes that sentence to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every grandmother's cookie tin was a sewing kit in disguise, and every time I opened one, I fell for the same heartbreaking trick.";

// The gate requires 1-280 characters of UTF-8 text and nothing else, so
// write the sentence exactly as-is: no trailing newline, no extra text.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
