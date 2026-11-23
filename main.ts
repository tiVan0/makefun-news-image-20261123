import { copyFileSync, chmodSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entrypoint for news-image-20261123 (cand-a): copy the pre-drawn
// entry.png into the grader's output directory, world-readable.
// Node standard library only; no network, no randomness, deterministic.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), dest);
chmodSync(dest, 0o644);
