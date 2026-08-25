import type { Img } from "./types";

/**
 * Two photographs per experience, interleaved with the prose rather than
 * left to the gallery grid at the bottom of the page. Long runs of text on a
 * dark ground need something to break against.
 *
 * Kept in its own module rather than added to each experience record so the
 * gallery arrays stay untouched — these images are deliberately *not* the same
 * ones as the grid below, so the page does not repeat itself.
 *
 * Where an experience has no further photographs of its own, the images here
 * are real event photography from the portfolio and the alt text describes
 * what is actually in the frame rather than claiming it shows that booth.
 */
export const experienceInline: Record<string, [Img, Img]> = {
  "branded-photo-booth": [
    { src: "/img/branded-10.jpg", alt: "Guests collecting branded prints at a corporate activation" },
    { src: "/img/branded-15.jpg", alt: "Wrapped booth hardware carrying a campaign identity" },
  ],
  "ai-photo-booth": [
    { src: "/img/ai-booth-2.jpg", alt: "AI-restyled portrait produced at an event" },
    { src: "/img/ai-booth-12.jpg", alt: "Guest reviewing their AI portrait on the booth screen" },
  ],
  glambot: [
    { src: "/img/aftr-v3.jpg", alt: "Guest posing on the carpet at an evening drinks launch" },
    { src: "/img/harlem-v5.jpg", alt: "Guests dressed for a whiskey brand evening event" },
  ],
  "mirror-x": [
    { src: "/img/corporate-instant-sharing.jpg", alt: "Guest receiving their photos instantly at a corporate event" },
    { src: "/img/fitchvid-v2.jpg", alt: "Colleagues posing together at a corporate awards evening" },
  ],
  "360-photo-booth": [
    { src: "/img/360-booth-2.jpg", alt: "Guests on the lit 360 platform mid-capture" },
    { src: "/img/360-booth-6.jpg", alt: "Crowd watching a 360 booth session at an evening event" },
  ],
  "roaming-photo-booth": [
    { src: "/img/roamer-2.jpg", alt: "Attendant bringing the handheld camera to seated guests" },
    { src: "/img/roamer-7.jpg", alt: "Roaming booth capturing a group mid-conversation" },
  ],
  "studio-booth": [
    { src: "/img/studio-booth-7.jpg", alt: "Studio-lit portrait taken on site at an event" },
    { src: "/img/macys-flushing-v2.jpg", alt: "Guests photographed at a department store fashion preview" },
  ],
  "green-screen-photo-booth": [
    { src: "/img/ebin-v4.jpg", alt: "Guests posing inside a branded activation set" },
    { src: "/img/trade-show-3.jpg", alt: "Attendees at a branded photo experience on an exhibition floor" },
  ],
  "mosaic-wall": [
    { src: "/img/mosaic-2.jpg", alt: "Mosaic wall filling with guest photo stickers" },
    { src: "/img/mosaic-7.jpg", alt: "Guests adding their photographs to the mosaic wall" },
  ],
  "magic-mirror": [
    { src: "/img/mirror-booth-4.jpg", alt: "Group posing full length at the magic mirror" },
    { src: "/img/mirror-booth-6.jpg", alt: "Guests collecting their prints beside the mirror booth" },
  ],
  "glam-booth": [
    { src: "/img/hanky-panky-v3.jpg", alt: "Guests photographed at a fashion brand launch" },
    { src: "/img/sweetheart-v2.jpg", alt: "Guests dressed formally at an evening celebration" },
  ],
  "vogue-booth": [
    { src: "/img/vogue-booth-2.jpg", alt: "Guest inside the LED-lined Vogue structure" },
    { src: "/img/vogue-booth-8.jpg", alt: "Vogue booth lighting sequence during a capture" },
  ],
  "magazine-booth": [
    { src: "/img/template-2.jpg", alt: "Custom-designed event print template" },
    { src: "/img/template-3.jpg", alt: "Print layout designed for a specific event" },
  ],
  "gif-booth": [
    { src: "/img/gif-booth-3.webp", alt: "Frame from an animated GIF captured at an event" },
    { src: "/img/gif-booth-6.webp", alt: "Guests mid-movement in a GIF booth capture" },
  ],
  "3d-slider-booth": [
    { src: "/img/home-crowd.jpg", alt: "Guests gathered around a photo experience at an evening event" },
    { src: "/img/corporate-vogue-session.jpg", alt: "Guests posing at a corporate event photo session" },
  ],
  "enclosed-photo-booth": [
    { src: "/img/sweetheart-v5.jpg", alt: "Guests posing together at a celebration" },
    { src: "/img/aftr-v8.jpg", alt: "Friends photographed together at an evening party" },
  ],
  "champagne-wall": [
    { src: "/img/champagne-wall-2.jpg", alt: "Champagne wall styled for a reception entrance" },
    { src: "/img/champagne-wall-11.jpg", alt: "Guests taking glasses from the champagne wall" },
  ],
  "flower-wall": [
    { src: "/img/flower-wall-10.jpg", alt: "Handmade floral backdrop in soft blush tones" },
    { src: "/img/flower-wall-25.jpg", alt: "Deep-toned floral wall styled for an evening event" },
  ],
};
