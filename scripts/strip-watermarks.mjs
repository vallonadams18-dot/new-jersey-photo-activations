/**
 * Crops the "Magic Mirror Brooklyn" watermark off source photographs.
 *
 * Some images in the shared asset library have the parent company's mark burned
 * into the bottom-right corner. It cannot stay on this site — it is a different
 * brand — so the bottom band of each affected frame is cropped away.
 *
 * Cropping rather than deleting: these are our own photographs with our own
 * watermark, and dropping them would strip several pages of their imagery.
 * Every one is shot loose enough that losing the bottom sixth costs nothing.
 *
 * The list was produced by correlating the bottom-right corner of every
 * referenced image against a template built from known-watermarked frames, then
 * confirming each hit by eye on a contact sheet. See docs/WATERMARKS.md.
 *
 * Idempotent: a manifest records what has been cropped, so re-running after
 * re-copying assets from the source library is safe and re-crops only what
 * came back watermarked.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = path.resolve("public/img");
const MANIFEST = path.resolve("docs/watermark-crops.json");

/** Fraction of frame height removed from the bottom. */
const CROP = 0.16;
/** The mark on this one is roughly twice normal size. */
const DEEP_CROP = 0.26;
const DEEP = new Set(["3d-slider-hero.jpg"]);

// Detector hits, each confirmed visually.
const WATERMARKED = [
  "360-booth-1.jpg",
  "360-booth-2.jpg",
  "360-booth-3.jpg",
  "360-booth-5.jpg",
  "360-booth-hero.jpg",
  "3d-slider-1.jpg",
  "3d-slider-2.jpg",
  "3d-slider-3.jpg",
  "3d-slider-hero.jpg",
  "brand-activation-dropbox.jpg",
  "branded-30.jpg",
  "branded-hero-2.jpg",
  "corporate-confetti.jpg",
  "corporate-hero.jpg",
  "corporate-instant-sharing.jpg",
  "corporate-vogue-session.jpg",
  "gif-booth-1.webp",
  "home-crowd.jpg",
  "mirror-booth-2.jpg",
  "mirror-x-3.jpg",
  "mosaic-1.jpg",
  "roamer-1.jpg",
  "roamer-4.jpg",
  "roamer-7.jpg",
  "roamer-8.jpg",
  "roamer-10.jpg",
  "roamer-hero-2.jpg",
  "vogue-booth-1.jpg",
  "vogue-booth-2.jpg",
  "vogue-booth-3.jpg",
  "vogue-booth-hero.jpg",
  "wedding-hero.jpg",
];

const manifest = fs.existsSync(MANIFEST)
  ? JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  : {};

let cropped = 0;
let already = 0;
const missing = [];

for (const file of WATERMARKED) {
  const full = path.join(DIR, file);
  if (!fs.existsSync(full)) {
    missing.push(file);
    continue;
  }
  // Read into a buffer rather than letting sharp open the path: on Windows it
  // keeps the handle, and writing back to the same file then fails.
  const input = fs.readFileSync(full);
  const m = await sharp(input).metadata();

  // Already done? The manifest records the height we produced.
  if (manifest[file]?.croppedHeight === m.height) {
    already += 1;
    continue;
  }

  const fraction = DEEP.has(file) ? DEEP_CROP : CROP;
  const keep = Math.round(m.height * (1 - fraction));
  const buf = await sharp(input)
    .extract({ left: 0, top: 0, width: m.width, height: keep })
    .toBuffer();
  fs.writeFileSync(full, buf);

  manifest[file] = {
    originalHeight: m.height,
    croppedHeight: keep,
    removed: `${Math.round(fraction * 100)}%`,
  };
  console.log(`  cropped  ${file}  ${m.width}x${m.height} -> ${m.width}x${keep}`);
  cropped += 1;
}

fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

console.log(
  `\n${cropped} cropped, ${already} already done, ${WATERMARKED.length} on the list.`,
);
if (missing.length) console.log(`not found: ${missing.join(", ")}`);
if (cropped > 0) console.log("Delete public/img/_r/ entries for these so variants regenerate.");
