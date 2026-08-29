/**
 * Records the intrinsic dimensions of every image in public/img so the layout
 * can adapt to a photograph's shape instead of assuming one.
 *
 * Why this exists: components use `next/image` with `fill`, which needs a
 * parent of a fixed aspect ratio. A fixed ratio plus `object-cover` silently
 * crops anything shaped differently — a portrait photograph dropped into a
 * landscape box loses the top and bottom of the frame, which on this site
 * means heads and feet. Knowing each file's real shape at build time lets the
 * components pick a box that fits, and keep faces when they cannot.
 *
 * The output IS committed, so type checking and `next dev` work without a
 * build first. It is also regenerated on every build, so if a photograph is
 * replaced or recropped the change shows up as a diff rather than drifting.
 */
import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SRC_DIR = "public/img";
const OUT = "src/data/image-dimensions.json";

const manifest = {};

for (const file of readdirSync(SRC_DIR)) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
  try {
    const { width, height } = await sharp(join(SRC_DIR, file)).metadata();
    if (width && height) manifest[`/img/${file}`] = [width, height];
  } catch {
    // A file sharp cannot read is not fatal: consumers fall back to the
    // design default rather than the build failing over one bad image.
  }
}

const dir = OUT.slice(0, OUT.lastIndexOf("/"));
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const sorted = Object.fromEntries(
  Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)),
);
writeFileSync(OUT, JSON.stringify(sorted, null, 2) + "\n");

const count = Object.keys(sorted).length;
const portrait = Object.values(sorted).filter(([w, h]) => w / h < 0.95).length;
console.log(
  `image manifest: ${count} images (${portrait} portrait) -> ${OUT}`,
);
