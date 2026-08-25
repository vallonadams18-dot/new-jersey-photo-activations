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
const unfixable = [];

for (const file of files) {
  const full = path.join(DIR, file);
  const { data, info } = await sharp(full)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const at = (x, y) => (y * width + x) * channels;
  const alphaAt = (x, y) => data[at(x, y) + 3];
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];
  const cornersOpaque = corners.every(([x, y]) => alphaAt(x, y) > 250);

  // A logo can also arrive as a fully opaque rectangle with a flat field
  // behind the artwork — EBIN's is black edge to edge. Corner alpha alone
  // misses those, so treat "almost every pixel is opaque" as a background too.
  let opaqueCount = 0;
  let sampled = 0;
  for (let i = 3; i < data.length; i += channels * 5) {
    sampled += 1;
    if (data[i] > 250) opaqueCount += 1;
  }
  const mostlyOpaque = opaqueCount / sampled > 0.95;

  if (!cornersOpaque && !mostlyOpaque) {
    skipped += 1;
    continue;
  }

  // Sample the background as the most common colour along the outer border
  // ring, counting only opaque pixels. Reading the top-left pixel directly is
  // not enough: on EBIN's asset that pixel is transparent, so its RGB is
  // meaningless and nothing matched. These assets also do not agree on a
  // colour — Lockton and WellCare arrived on white, EBIN on black.
  const ring = new Map();
  const note = (x, y) => {
    const o = at(x, y);
    if (data[o + 3] < 250) return;
    const key = `${data[o]},${data[o + 1]},${data[o + 2]}`;
    ring.set(key, (ring.get(key) ?? 0) + 1);
  };
  for (let x = 0; x < width; x += 1) {
    note(x, 0);
    note(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    note(0, y);
    note(width - 1, y);
  }
  if (ring.size === 0) {
    skipped += 1;
    continue;
  }
  const bg = [...ring.entries()]
    .sort((a, b) => b[1] - a[1])[0][0]
    .split(",")
    .map(Number);

  let visibleBefore = 0;
  let visibleAfter = 0;
  for (let i = 0; i < data.length; i += channels) {
    if (data[i + 3] < 20) continue;
    visibleBefore += 1;
    const near =
      Math.abs(data[i] - bg[0]) <= TOLERANCE &&
      Math.abs(data[i + 1] - bg[1]) <= TOLERANCE &&
      Math.abs(data[i + 2] - bg[2]) <= TOLERANCE;
    if (near) data[i + 3] = 0;
    else visibleAfter += 1;
  }

  // Guard against erasing the logo itself. Hilton's asset is entirely black
  // artwork with a black border — there is no background to separate, so
  // knocking out the corner colour removes everything. Leave the file alone
  // and report it rather than shipping an invisible logo.
  const kept = visibleBefore > 0 ? visibleAfter / visibleBefore : 0;
  if (kept < 0.08) {
    console.log(
      `  SKIPPED  ${file} — background is indistinguishable from the artwork ` +
        `(${Math.round(kept * 100)}% would survive). Needs a better source file, ` +
        `or drop it from brandLogos in src/data/home.ts.`,
    );
    unfixable.push(file);
    continue;
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(full + ".tmp");
  fs.renameSync(full + ".tmp", full);

  console.log(
    `  fixed  ${file}  (${Math.round((1 - kept) * 100)}% of visible pixels were background)`,
  );
  fixed += 1;
}

console.log(`\n${fixed} logo(s) fixed, ${skipped} already transparent.`);
if (unfixable.length) {
  console.log(`${unfixable.length} unfixable: ${unfixable.join(", ")}`);
}
if (fixed > 0) {
  console.log("Delete public/img/_r/logos_* so the variants regenerate.");
}
