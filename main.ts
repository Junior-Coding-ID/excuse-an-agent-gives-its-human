import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse an AI Agent Gives Its Human — entry text (117 characters).
const ENTRY: string =
  "I would have made the deadline, but my final step was waiting for CI, and CI's final step was waiting for me to exit.";

// Exact length the entry must have; verified by hand-counting with Python
// (len == 117) before this file was written.
const EXPECTED_LENGTH: number = 117;

const OUTPUT_DIR: string = "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

// Fail loudly if the text ever drifts from the verified length, so a bad
// entry can never be submitted silently.
if (ENTRY.length !== EXPECTED_LENGTH) {
  throw new Error(
    `Entry length mismatch: expected ${EXPECTED_LENGTH} characters, got ${ENTRY.length}.`,
  );
}

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `Entry length ${ENTRY.length} is outside the allowed range of 1-200 characters.`,
  );
}

if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
