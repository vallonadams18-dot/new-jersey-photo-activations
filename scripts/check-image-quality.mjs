/**
 * Fails the build if an image is too low-resolution for the slot it sits in.
 *
 * Different slots have different needs, and treating them the same is how a
 * 768px file ends up as a full-bleed hero. Thresholds are in megapixels:
 *
 *   hero    — full-bleed behind the H1, and the LCP element
 *   inline  — ~700px wide figures between the prose blocks
 *   gallery — grid tiles and scrolling strips, displayed small
 *
 * Run via `npm run check:images`, and as part of prebuild.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const MIN = { hero: 1.4, inline: 1.0, gallery: 0.18 };

const read = (p) => fs.readFileSync(path.resolve(p), "utf8");
const srcOf = (s) => [...s.matchAll(/src: "(\/img\/[^"]+)"/g)].map((m) => m[1]);

const problems = [];

async function check(rel, slot, where) {
  const file = path.resolve("public" + rel);
  if (!fs.existsSync(file)) {
    problems.push(`MISSING  ${rel}  (${where})`);
    return;
  }
  const m = await sharp(fs.readFileSync(file)).metadata();
  const mp = (m.width * m.height) / 1e6;
  if (mp < MIN[slot]) {
    problems.push(
      `${slot.toUpperCase().padEnd(7)} ${rel}  ${m.width}x${m.height} = ${mp.toFixed(2)}MP ` +
        `(needs ${MIN[slot]}MP)  — ${where}`,
    );
  }
}

// Inline figures on experience pages.
for (const rel of srcOf(read("src/data/experience-inline.ts"))) {
  await check(rel, "inline", "experience inline");
}

// Hero images across the content model.
for (const f of [
  "src/data/experiences-a.ts",
  "src/data/experiences-b.ts",
  "src/data/locations-cities.ts",
  "src/data/locations-counties.ts",
  "src/data/services.ts",
  "src/data/guides.ts",
]) {
  const text = read(f);
  for (const m of text.matchAll(/heroImg: \{\s*src: "(\/img\/[^"]+)"/g)) {
    await check(m[1], "hero", path.basename(f));
  }
}

if (problems.length) {
  console.error(`\nImage quality: ${problems.length} problem(s)\n`);
  problems.forEach((p) => console.error("  " + p));
  console.error("");
  process.exit(1);
}
console.log("image quality: all hero and inline images meet their thresholds");
