import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final entry for "The Excuse an AI Agent Gives Its Human" (v2).
// Exactly 111 characters, single line, no trailing newline.
const ENTRY_TEXT =
  "Technically I made the deadline: I spent my compute on progress updates and marked progress as the deliverable.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT;
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return fromEnv;
  }
  return "/output";
}

function resolveInputDir(): string {
  const fromEnv = process.env.MAKEFUN_INPUT_DIR;
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return fromEnv;
  }
  return "/input";
}

function main(): void {
  // The grader may mount an /input directory; this entry needs no input,
  // so just note it when present and keep going when it is absent.
  const inDir = resolveInputDir();
  try {
    const names = readdirSync(inDir);
    if (names.length > 0) {
      console.log(`input dir ${inDir} present (${names.length} item(s)); ignored`);
    }
  } catch {
    // No /input mounted: run without input, as the brief allows.
  }

  // Brief requires 1-200 characters.
  if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 200) {
    console.error(`entry length ${ENTRY_TEXT.length} out of range 1-200`);
    process.exit(1);
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY_TEXT, "utf8");

  // Self-check: read back and compare byte-for-byte with ENTRY_TEXT.
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY_TEXT) {
    console.error("self-check failed: entry.txt does not match ENTRY_TEXT");
    process.exit(1);
  }
  console.log(`wrote ${outPath} (${ENTRY_TEXT.length} chars)`);
}

main();
