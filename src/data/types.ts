export interface Img {
  src: string;
  alt: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface ProseBlock {
  heading: string;
  paragraphs: string[];
}

export interface LinkCard {
  href: string;
  title: string;
  desc: string;
}

export interface Video {
  src: string;
  poster: string;
  label: string;
}

/** A photo booth or interactive capture experience. */
export interface Experience {
  slug: string;
  /** Display name, e.g. "Glambot" */
  name: string;
  /** One line that sells it, used on cards and the experiences index */
  tagline: string;
  meta: PageMeta;
  h1: string;
  heroSub: string;
  heroImg: Img;
  video?: Video;
  /** Where it sits on the corporate-vs-private spectrum. Drives ordering. */
  weight: "corporate" | "both" | "private";
  /** What the client gets. Factual — shared with the parent business. */
  included: string[];
  prose: ProseBlock[];
  /** Concrete corporate / brand use. Every experience has one. */
  corporate: ProseBlock;
  /** Weddings and private events. */
  privateUse: ProseBlock;
  /** What guests physically leave with. */
  output: string;
  /** Floor space needed, phrased for a venue conversation. */
  space: string;
  gallery: Img[];
  faqs: Faq[];
  /** Slugs of two or three related experiences. */
  related: string[];
}

/** A New Jersey city or county page. */
export interface Location {
  slug: string;
  name: string;
  /** "city" pages are the money pages; "county" pages are directory hubs. */
  kind: "city" | "county";
  meta: PageMeta;
  h1: string;
  heroSub: string;
  heroImg: Img;
  /** Two to four paragraphs that could only have been written about this place. */
  intro: ProseBlock;
  /** Real, named venues. Never invented, never a relationship implied. */
  venues: { name: string; where: string; note: string }[];
  /** Towns or neighbourhoods covered. */
  covers: string[];
  /** Something logistically true and specific about working here. */
  logistics: ProseBlock;
  /** Experience slugs that suit this market, most relevant first. */
  experiences: string[];
  faqs: Faq[];
  /** Slugs of neighbouring locations. */
  nearby: string[];
}

/** An event-type page: corporate, brand activations, trade shows, weddings, private. */
export interface ServicePage {
  slug: string;
  name: string;
  meta: PageMeta;
  h1: string;
  heroSub: string;
  heroImg: Img;
  /** Dark editorial treatment for corporate lines, ivory for private ones. */
  tone: "dark" | "ivory";
  checklist: { title: string; desc: string }[];
  prose: ProseBlock[];
  /** Experience slugs recommended for this event type. */
  experiences: string[];
  gallery: Img[];
  faqs: Faq[];
}

export interface Guide {
  slug: string;
  meta: PageMeta;
  h1: string;
  /** ISO date, e.g. "2026-08-25" */
  date: string;
  excerpt: string;
  heroImg: Img;
  body: ProseBlock[];
  faqs?: Faq[];
  related?: LinkCard[];
}

/** A real, named event from the portfolio. */
export interface GalleryEvent {
  id: string;
  title: string;
  sub: string;
  photos: Img[];
  videos?: Video[];
}
