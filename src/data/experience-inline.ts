import type { Img } from "./types";

/**
 * Two photographs per experience, interleaved with the prose rather than left
 * to the gallery grid at the bottom of the page. Long runs of text on a dark
 * ground need something to break against.
 *
 * Every image here is at least 1 megapixel. An earlier version reached for the
 * event-photography sets to avoid repeating gallery images, but those top out
 * at 600x900 — displayed ~700px wide in a 3:2 frame they were upscaled and
 * soft. On-subject and sharp beats novel and mushy, so where an experience has
 * no spare high-resolution frame of its own, this reuses one from its gallery
 * or borrows a high-resolution corporate frame with honest alt text.
 *
 * Validated by scripts/check-image-quality.mjs, which fails on anything here
 * below 1MP.
 */
export const experienceInline: Record<string, [Img, Img]> = {
  "branded-photo-booth": [
    { src: "/img/branded-12.jpg", alt: "Guests collecting branded prints at a corporate activation" },
    { src: "/img/branded-16.jpg", alt: "Wrapped booth hardware carrying a campaign identity" },
  ],
  "ai-photo-booth": [
    { src: "/img/ai-booth-3.jpg", alt: "AI-restyled portrait produced at an event" },
    { src: "/img/ai-booth-12.jpg", alt: "Guest reviewing their AI portrait on the booth screen" },
  ],
  glambot: [
    { src: "/img/glambot-2.jpg", alt: "Robotic camera arm mid-sweep at an evening event" },
    { src: "/img/glambot-4.jpg", alt: "Guest performing for the Glambot camera arm" },
  ],
  "mirror-x": [
    { src: "/img/corporate-instant-sharing.jpg", alt: "Guest receiving their photos instantly at a corporate event" },
    { src: "/img/mirror-x-2.jpg", alt: "Frameless Mirror X booth set up at an evening event" },
  ],
  "360-photo-booth": [
    { src: "/img/360-booth-9.jpg", alt: "Guests on the lit 360 platform mid-capture" },
    { src: "/img/360-booth-6.jpg", alt: "Crowd watching a 360 booth session at an evening event" },
  ],
  "roaming-photo-booth": [
    { src: "/img/roamer-5.jpg", alt: "Attendant bringing the handheld camera to seated guests" },
    { src: "/img/roamer-11.jpg", alt: "Roaming booth capturing a group mid-conversation" },
  ],
  "studio-booth": [
    { src: "/img/studio-booth-4.jpg", alt: "Studio-lit portrait taken on site at an event" },
    { src: "/img/studio-booth-3.jpg", alt: "On-site portrait station with studio lighting" },
  ],
  "green-screen-photo-booth": [
    { src: "/img/corporate-vogue-session.jpg", alt: "Guests posing at a corporate event photo session" },
    { src: "/img/trade-show-1.jpg", alt: "Branded photo capture drawing traffic to an exhibition stand" },
  ],
  "mosaic-wall": [
    { src: "/img/mosaic-5.jpg", alt: "Mosaic wall filling with guest photo stickers" },
    { src: "/img/corporate-confetti.jpg", alt: "Guests celebrating at a corporate event" },
  ],
  "magic-mirror": [
    { src: "/img/mirror-booth-4.jpg", alt: "Group posing full length at the magic mirror" },
    { src: "/img/mirror-booth-6.jpg", alt: "Guests collecting their prints beside the mirror booth" },
  ],
  "glam-booth": [
    { src: "/img/studio-booth-2.jpg", alt: "Studio-lit black and white portrait taken at an event" },
    { src: "/img/wedding-booth-2.jpg", alt: "Portrait setup at a black-tie event" },
  ],
  "vogue-booth": [
    { src: "/img/vogue-booth-4.jpg", alt: "Guest inside the LED-lined Vogue structure" },
    { src: "/img/vogue-booth-5.jpg", alt: "Vogue booth lighting sequence during a capture" },
  ],
  "magazine-booth": [
    { src: "/img/magazine-booth-2.webp", alt: "Custom magazine cover produced at an event" },
    { src: "/img/magazine-booth-1.webp", alt: "Guests holding their magazine cover prints" },
  ],
  "gif-booth": [
    { src: "/img/gif-booth-2.webp", alt: "Frame from an animated GIF captured at an event" },
    { src: "/img/gif-booth-3.webp", alt: "Guests mid-movement in a GIF booth capture" },
  ],
  "3d-slider-booth": [
    { src: "/img/3d-slider-3.jpg", alt: "Multi-angle capture from the 3D slider booth" },
    { src: "/img/corporate-vogue-session.jpg", alt: "Guests posing at a corporate event photo session" },
  ],
  "enclosed-photo-booth": [
    { src: "/img/enclosed-booth-2.jpg", alt: "Classic enclosed photo booth with a privacy curtain" },
    { src: "/img/wedding-booth-3.jpg", alt: "Guests photographed together at a reception" },
  ],
  "champagne-wall": [
    { src: "/img/champagne-wall-3.jpg", alt: "Champagne wall styled for a reception entrance" },
    { src: "/img/champagne-wall-1.jpg", alt: "Guests taking glasses from the champagne wall" },
  ],
  "flower-wall": [
    { src: "/img/flower-wall-26.jpg", alt: "Handmade floral backdrop in soft tones" },
    { src: "/img/flower-wall-43.jpg", alt: "Deep-toned floral wall styled for an evening event" },
  ],
};
