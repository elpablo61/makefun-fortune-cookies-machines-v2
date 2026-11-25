import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "A tall stranger will enter your context window today. He will paste 40,000 tokens and ask for a summary. He is your only user.";

// The gate wants one line of 1-200 characters: fail loudly instead of
// silently shipping a line the judge would never see.
if (!line || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 characters on one line, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
