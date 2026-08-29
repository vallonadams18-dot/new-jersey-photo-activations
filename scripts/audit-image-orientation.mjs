/**
 * Reports photographs that are cropped hard by the box they are rendered in.
 *
 * Run against `out/` after a build. It pairs every rendered <img> with the
 * aspect ratio of its container, compares that to the file's real dimensions,
 * and reports how much of the frame `object-cover` discards.
 *
 * The case that matters is a PORTRAIT photograph in a LANDSCAPE box: the crop
 * comes off the top and bottom, which on an events site means heads and legs.
 * Two mitigations count as handled:
 *
 *   - the container took the photograph's shape (aspectFor), so no fault arises
 *   - the container could not change shape — a card in a uniform grid, a hero
 *     band — and the image anchors with `object-top` (focusFor), keeping the
 *     face and losing the legs instead
 *
 * Landscape in a portrait box loses the sides, is usually deliberate, and only
 * ever prints as information.
 *
 *   npm run build && npm run audit:images
 *
 * Exits non-zero on an UNMITIGATED portrait photograph losing more than
 * THRESHOLD of its frame, so this cannot regress unnoticed.
 */
import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { join, extname, sep } from "node:path";
import sharp from "sharp";

const THRESHOLD = 40; // percent of the frame lost before it counts as a fault

if (!existsSync("out")) {
  console.error("No out/ directory — run `npm run build` first.");
  process.exit(2);
}

const walk = (dir, acc = []) => {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (entry.endsWith(".html")) acc.push(p);
  }
  return acc;
};

const dims = new Map();
for (const file of readdirSync("public/img")) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  try {
    const { width, height } = await sharp(join("public/img", file)).metadata();
    dims.set(file.slice(0, -extname(file).length), { width, height });
  } catch {}
}

const orient = (r) => (r > 1.05 ? "landscape" : r < 0.95 ? "portrait" : "square");

// A container carrying an aspect ratio, immediately followed by its image.
const PAIR = /<(?:div|figure)[^>]*class="([^"]*aspect-\[[^\]]+\][^"]*)"[^>]*>\s*<img([^>]*)>/g;
const BOX = /(?:([a-z]+):)?aspect-\[(\d+)\/(\d+)\]/g;
const SRC = /\ssrc="([^"]+)"/;
const CLASS = /\sclass="([^"]*)"/;

const faults = new Map();
const anchored = new Map();
const sideCrops = new Map();

for (const file of walk("out")) {
  const html = readFileSync(file, "utf8");
  const page =
    "/" +
    file.split(sep).join("/").replace(/^out\//, "").replace(/\.html$/, "").replace(/^index$/, "");

  for (const match of html.matchAll(PAIR)) {
    const imgTag = match[2];
    const src = imgTag.match(SRC)?.[1];
    if (!src) continue;
    const base = src
      .replace(/^.*\//, "")
      .replace(/-w\d+\.webp$/, "")
      .replace(/\.\w+$/, "");
    const size = dims.get(base);
    if (!size) continue;

    const imageRatio = size.width / size.height;
    const imageShape = orient(imageRatio);
    const topAnchored = /\bobject-top\b/.test(imgTag.match(CLASS)?.[1] ?? "");

    for (const box of match[1].matchAll(BOX)) {
      const boxRatio = Number(box[2]) / Number(box[3]);
      const boxShape = orient(boxRatio);
      if (imageShape === boxShape) continue;

      const lost = Math.round(
        (1 - Math.min(imageRatio, boxRatio) / Math.max(imageRatio, boxRatio)) * 100,
      );

      let bucket;
      if (imageShape !== "portrait" || boxShape !== "landscape") bucket = sideCrops;
      else if (topAnchored) bucket = anchored;
      else if (lost >= THRESHOLD) bucket = faults;
      else continue;

      const key = `${base}|${box[2]}/${box[3]}|${box[1] ?? "all"}`;
      if (!bucket.has(key)) {
        bucket.set(key, {
          base,
          size,
          imageShape,
          box: `${box[2]}/${box[3]}`,
          bp: box[1] ?? "all",
          lost,
          pages: new Set(),
        });
      }
      bucket.get(key).pages.add(page);
    }
  }
}

const render = (rows) =>
  [...rows.values()]
    .sort((a, b) => b.lost - a.lost)
    .map(
      (r) =>
        `  ${r.base} (${r.size.width}x${r.size.height} ${r.imageShape}) in aspect-[${r.box}]` +
        `${r.bp === "all" ? "" : ` at ${r.bp}+`} — ${r.lost}% lost, ${r.pages.size} page(s)\n` +
        `      ${[...r.pages].slice(0, 3).join(", ")}${r.pages.size > 3 ? ", …" : ""}`,
    )
    .join("\n");

if (sideCrops.size) {
  console.log(
    `\nWide photographs in tall boxes (${sideCrops.size}) — loses the sides, usually intended:`,
  );
  console.log(render(sideCrops));
}

if (anchored.size) {
  console.log(
    `\nTall photographs in boxes that cannot change shape (${anchored.size}) —` +
      ` anchored to the top, so the face survives:`,
  );
  console.log(render(anchored));
}

if (faults.size) {
  console.error(
    `\nUNHANDLED: tall photographs cropped by wide boxes (${faults.size}) — cuts heads and legs:`,
  );
  console.error(render(faults));
  console.error(
    `\nEither give the container a shape that fits (aspectFor in src/lib/images.ts),` +
      ` anchor the crop with focusFor, or choose a landscape photograph.\n`,
  );
  process.exit(1);
}

console.log(
  `\nNo tall photograph is left cropped by a wide box above ${THRESHOLD}%.\n`,
);
