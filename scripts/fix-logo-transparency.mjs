/**
 * Knocks the white background out of client logos that shipped as opaque PNGs.
 *
 * The logo row flattens every mark to a single ink (`brightness-0 invert` on
 * dark grounds). That works on a transparent PNG — the artwork becomes a white
 * silhouette — but on a logo with an opaque white background it turns the whole
 * rectangle white, and the logo renders as a solid block.
 *
 * This rewrites those files in place, making near-white pixels transparent.
 * Safe to re-run: already-transparent logos are detected and skipped.
 *
 * Run manually after adding a logo:  node scripts/fix-logo-transparency.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = path.resolve("public/img/logos");
// How far a pixel may sit from the sampled background colour and still count
// as background. Generous, because these are compressed PNGs and the flat
// areas are not perfectly flat.
const TOLERANCE = 24;

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".png"));
let fixed = 0;
let skipped = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const { data, info } = await sharp(full)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const alphaAt = (x, y) => data[(y * width + x) * channels + 3];
  const cornersOpaque = [
    alphaAt(0, 0),
    alphaAt(width - 1, 0),
    alphaAt(0, height - 1),
    alphaAt(width - 1, height - 1),
  ].every((a) => a > 250);

  if (!cornersOpaque) {
    skipped += 1;
    continue;
  }

  // Sample the background from the top-left corner rather than assuming it is
  // white. These assets are inconsistent: Lockton and WellCare came with white
  // backgrounds, Hilton with a black one.
  const bg = [data[0], data[1], data[2]];

  let cleared = 0;
  for (let i = 0; i < data.length; i += channels) {
    if (data[i + 3] === 0) continue;
    const near =
      Math.abs(data[i] - bg[0]) <= TOLERANCE &&
      Math.abs(data[i + 1] - bg[1]) <= TOLERANCE &&
      Math.abs(data[i + 2] - bg[2]) <= TOLERANCE;
    if (near) {
      data[i + 3] = 0;
      cleared += 1;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(full + ".tmp");
  fs.renameSync(full + ".tmp", full);

  const pct = Math.round((cleared / (width * height)) * 100);
  console.log(`  fixed  ${file}  (${pct}% of pixels made transparent)`);
  fixed += 1;
}

console.log(`\n${fixed} logo(s) fixed, ${skipped} already transparent.`);
if (fixed > 0) {
  console.log("Delete public/img/_r/logos_* so the variants regenerate.");
}
