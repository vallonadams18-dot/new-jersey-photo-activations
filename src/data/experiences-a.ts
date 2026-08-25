import type { Experience } from "./types";

/**
 * The corporate-weighted half of the inventory. Ordered by how often they
 * lead an agency or brand conversation, which is also the order they appear
 * in the navigation and on the experiences index.
 *
 * Every capability described here is one the parent business already
 * delivers. Nothing is aspirational.
 */
export const experiencesA: Experience[] = [
  {
    slug: "branded-photo-booth",
    name: "Branded Booth",
    tagline:
      "The whole experience wearing your identity — hardware, interface, output and the gallery it lands in.",
    meta: {
      title: "Branded Photo Booth Rental New Jersey | Custom Brand Activations",
      description:
        "Fully branded photo booth activations across New Jersey. Custom booth wrap, start screen, overlays, branded microsite and opt-in data capture, run by trained attendants.",
    },
    h1: "Branded Photo Booth Activations",
    heroSub:
      "A booth that reads as part of the campaign rather than a rental parked next to it. Wrapped hardware, a bespoke interface, overlays built to your guidelines, and a gallery that lives on your own branded page.",
    heroImg: {
      src: "/img/branded-hero-2.jpg",
      alt: "A fully wrapped branded photo booth at a corporate brand activation",
    },
    video: {
      src: "/video/branded-photo-booth.mp4",
      poster: "/img/branded-poster.jpg",
      label: "Branded booth activation footage",
    },
    weight: "corporate",
    included: [
      "Full physical booth wrap printed to your artwork",
      "Custom start screen and on-screen journey",
      "Photo, GIF and boomerang overlays built to brand guidelines",
      "Branded online gallery or campaign microsite",
      "Opt-in email and phone capture with a post-event report",
      "Trained attendant for the full booking",
      "Unlimited sessions and unlimited prints",
      "Instant delivery by text, email or QR code",
    ],
    prose: [
      {
        heading: "A generic booth undermines everything around it",
        paragraphs: [
          "Most of what gets called a branded photo booth is a stock machine with a logo dropped into the corner of the print. It photographs badly, it reads as an afterthought, and in a room where every other surface has been art-directed it is the one element visibly bought rather than made.",
          "This is the other version. The hardware itself is wrapped in printed vinyl cut to your artwork, the touchscreen journey carries your typography and campaign language from the first tap, and the output — stills, GIFs, boomerangs — is composited against overlays we build against your brand guidelines rather than adapted from a template library.",
        ],
      },
      {
        heading: "What the activation produces",
        paragraphs: [
          "Every guest leaves with a branded asset in their camera roll and, if you want prints, in their hand. More usefully, they leave having shared it — the branded frame travels to an audience that trusts the person posting it, which is distribution you cannot buy at any price.",
          "Behind that, the booth is collecting. Opt-in email and phone capture sits inside the sharing step rather than bolted on before it, so consent is given in exchange for something the guest actually wants. Surveys and single-question polls can be built into the same flow, which is how you get product feedback at the moment of highest engagement instead of by email a week later.",
        ],
      },
      {
        heading: "Lead time, honestly",
        paragraphs: [
          "A full physical wrap needs two to three weeks so that graphics can be printed, cured and applied properly. If your timeline is tighter than that, digital-only branding — start screen, overlays, gallery, microsite — turns around considerably faster and still reads as bespoke on camera.",
          "Send artwork in a working file rather than a flattened export and we will handle the rest, including sizing for the wrap's curves and the safe areas the touchscreen needs.",
        ],
      },
    ],
    corporate: {
      heading: "Built for the activation brief",
      paragraphs: [
        "This is the experience that answers a marketing brief rather than an entertainment one. Product launches, sponsorship footprints, conference stands, retail moments and influencer events across New Jersey all use it the same way: a visible, low-friction interaction that produces branded content and a permissioned contact list.",
        "You get a post-event report covering sessions, shares and opt-in rate, so the line on the budget is defended with numbers rather than an anecdote about how busy it looked.",
      ],
    },
    privateUse: {
      heading: "Private events, if you want it",
      paragraphs: [
        "Branding a booth is not only a corporate idea. Monograms for a wedding, a crest for a milestone birthday, a school's colours for a fundraiser — the same customisation runs, just pointed at a family or an institution rather than a campaign.",
        "It is more setup than most private events need, and we will say so if a simpler booth would serve you better.",
      ],
    },
    output: "Branded prints, GIFs and boomerangs, plus an opt-in contact list",
    space: "Sized to the activation — we design to the floor plan you have",
    gallery: [
      { src: "/img/branded-1.jpg", alt: "Guests using a fully wrapped branded photo booth at a launch event" },
      { src: "/img/branded-7.jpg", alt: "Branded start screen on a photo booth touchscreen" },
      { src: "/img/branded-12.jpg", alt: "Attendees collecting branded prints at a corporate activation" },
      { src: "/img/branded-18.jpg", alt: "Custom booth wrap matching a campaign identity" },
      { src: "/img/branded-24.jpg", alt: "Guests posing inside a branded activation footprint" },
      { src: "/img/branded-30.jpg", alt: "Branded photo booth overlay printed on a 4x6 photo" },
      { src: "/img/brand-activation-dropbox.jpg", alt: "Corporate brand activation photo booth setup" },
      { src: "/img/brand-activation-nike.jpg", alt: "Branded photo experience at a sports brand activation" },
    ],
    faqs: [
      {
        q: "How much lead time does a full booth wrap need?",
        a: "Two to three weeks from artwork approval. That covers printing, curing and application. Digital-only branding — start screen, overlays, gallery — can be turned around much faster if your date is closer than that.",
      },
      {
        q: "What artwork do you need from us?",
        a: "Working files rather than flattened exports, plus your brand guidelines if you have them. We size everything ourselves, including for the wrap's curved surfaces and the touchscreen's safe areas, and send proofs back before anything goes to print.",
      },
      {
        q: "Do we own the data captured at the event?",
        a: "Yes. Opt-in contact data is yours, handed over after the event alongside the gallery and a report covering sessions, shares and opt-in rate. Capture is opt-in at the point of sharing, so consent is explicit.",
      },
      {
        q: "Can the booth run a survey as well as capture photos?",
        a: "Yes. Short questionnaires and single-question polls can be built into the on-screen journey, which is the moment attendees are most willing to answer. The responses come back in the same post-event report.",
      },
      {
        q: "Can you match the booth to a wider set build?",
        a: "Yes — if the activation needs a custom backdrop, a step-and-repeat or a themed structure around the booth, we design it with your team in advance so the whole footprint photographs as one piece rather than a booth standing next to a set.",
      },
    ],
    related: ["ai-photo-booth", "green-screen-photo-booth", "roaming-photo-booth"],
  },

  {
    slug: "ai-photo-booth",
    name: "AI Photo Booth",
    tagline:
      "Guests step in and walk out as a version of themselves they have never seen before.",
    meta: {
      title: "AI Photo Booth Rental New Jersey | AI Brand Activations",
      description:
        "AI photo booth rental across New Jersey. Guests are restyled in seconds into custom looks, worlds and campaign concepts you define in advance. Built for brand activations and corporate events.",
    },
    h1: "AI Photo Experiences",
    heroSub:
      "A portrait taken in your venue, restyled in seconds into a look you designed in advance. It is the experience that produces the longest queue and the most shares of anything we run.",
    heroImg: {
      src: "/img/ai-booth-13.jpg",
      alt: "AI-restyled portrait produced at an event",
    },
    weight: "corporate",
    included: [
      "Custom AI styles designed to your campaign or event theme",
      "Pro Canon DSLR capture under controlled studio lighting",
      "Restyled results delivered in seconds, on-screen and to the phone",
      "Branded overlays and framing on every output",
      "Trained attendant managing the flow and the queue",
      "Unlimited sessions",
      "Online gallery of everything generated",
      "Optional prints alongside the digital delivery",
    ],
    prose: [
      {
        heading: "Why this one draws a crowd",
        paragraphs: [
          "Most photo experiences give a guest a good photograph of themselves. This one gives them something they cannot get anywhere else — themselves rendered into a world, a wardrobe or an era that does not exist outside your event. The reaction is audible, and it happens in front of other guests, which is why the line forms.",
          "The capture itself is real photography: a Canon DSLR under controlled lighting, not a webcam. That matters more than it sounds. The restyle is only as good as the source frame, and a properly lit portrait is what separates a result people post from one they delete.",
        ],
      },
      {
        heading: "The styles are yours, designed in advance",
        paragraphs: [
          "We build the style set with you before the event rather than handing guests a generic menu. For a product launch that might mean rendering guests into the campaign's visual world. For a gala it might be a single, tightly art-directed portrait treatment. For a themed corporate party it might be five options guests choose between on-screen.",
          "That advance work is the difference between an AI booth that feels like a novelty and one that feels commissioned. It also keeps the outputs on-brand, which matters when every one of them is about to be posted publicly.",
        ],
      },
    ],
    corporate: {
      heading: "The activation headline",
      paragraphs: [
        "When a brief needs one thing on the floor that people will queue for and talk about afterwards, this is usually it. It works hardest at product launches, conference stands and influencer events, where the restyled output is itself campaign content and every share carries your framing.",
        "Pair it with opt-in capture and you have the rare activation that produces reach, sentiment and a contact list from the same interaction.",
      ],
    },
    privateUse: {
      heading: "Weddings and celebrations",
      paragraphs: [
        "At private events the styles tend to go warmer and more playful — a black-tie treatment for a wedding, a decade theme for a milestone birthday, a single elegant portrait look for a gala dinner.",
        "It sits well alongside a traditional booth rather than replacing it: guests take the classic print for the album and the AI portrait for their phone.",
      ],
    },
    output: "AI-styled portraits delivered digitally, prints optional",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/ai-booth-1.jpg", alt: "AI-restyled portrait produced at an event photo booth" },
      { src: "/img/ai-booth-4.jpg", alt: "Guest reviewing an AI photo booth result on screen" },
      { src: "/img/ai-booth-6.jpg", alt: "AI photo booth portrait in a custom campaign style" },
      { src: "/img/ai-booth-9.jpg", alt: "Attendees waiting to use the AI photo experience" },
      { src: "/img/ai-booth-11.jpg", alt: "AI-generated event portrait with branded framing" },
      { src: "/img/ai-booth-14.jpg", alt: "AI photo booth setup with studio lighting at a corporate event" },
    ],
    faqs: [
      {
        q: "How long does each guest wait for their result?",
        a: "Seconds, not minutes. The restyle happens on-site and the finished image appears on screen before the guest has stepped away, then arrives on their phone by text, email or QR code.",
      },
      {
        q: "Do we choose the AI styles or do guests?",
        a: "You choose the set in advance; guests choose between them on screen. That keeps every output on-brand while still giving people a decision to make, which is part of why the interaction holds attention.",
      },
      {
        q: "What happens to the images afterwards?",
        a: "They go into an online gallery for your event, and you receive the full set. Guests receive their own images at the booth.",
      },
      {
        q: "Is the photography itself any good, or is it all generated?",
        a: "The capture is a professional Canon DSLR under studio lighting — the same hardware behind our studio portraits. The AI restyles that frame. A badly lit source produces a bad result, which is why we do not shortcut the lighting.",
      },
    ],
    related: ["branded-photo-booth", "glambot", "green-screen-photo-booth"],
  },

  {
    slug: "glambot",
    name: "Glambot",
    tagline:
      "A robotic camera arm sweeps past your guests in cinematic slow motion — the award-show shot, all night.",
    meta: {
      title: "Glambot Rental New Jersey | Slow Motion Camera Arm Hire",
      description:
        "Glambot rental across New Jersey. A robotic camera arm captures cinematic slow-motion video of your guests — the red carpet shot, running all evening at galas, premieres and brand events.",
    },
    h1: "Glambot",
    heroSub:
      "The shot you have seen on the Met Gala carpet and at the Oscars after-party. A robotic arm sweeps a cinema camera past your guests in high-frame-rate slow motion, and hands them back four seconds of film.",
    heroImg: {
      src: "/img/glambot-3.jpg",
      alt: "Robotic camera arm capturing a slow-motion sweep at an evening event",
    },
    weight: "corporate",
    included: [
      "Robotic camera arm with programmed sweep paths",
      "High-frame-rate capture graded on site",
      "Custom intro and outro cards carrying your branding",
      "Music bed selected with you in advance",
      "Trained operator directing every guest through the shot",
      "Instant delivery to phones by text, email or QR code",
      "Branded online gallery of every clip",
    ],
    prose: [
      {
        heading: "It is a performance, not a photograph",
        paragraphs: [
          "Guests do not pose for the Glambot, they perform for it — and because the arm is moving on a programmed path, four seconds of ordinary movement comes back looking directed. Hair moves differently at high frame rates. Fabric moves differently. A glass raised at normal speed becomes a gesture.",
          "That is the whole appeal, and it is why the Glambot is the one experience where guests routinely queue twice. The first run is tentative. The second is the one they post.",
        ],
      },
      {
        heading: "Room, light and the crowd around it",
        paragraphs: [
          "The arm needs genuine clearance to sweep, and it needs to be lit properly to hold detail at high frame rates. We plan both with your venue in advance rather than discovering the ceiling height on the day.",
          "It also needs an audience. The Glambot works best positioned where the room can watch — near a bar, at the mouth of a reception, alongside a carpet — because half the value is the crowd that gathers to see other people's takes.",
        ],
      },
    ],
    corporate: {
      heading: "Galas, premieres and carpets",
      paragraphs: [
        "For an awards evening, a premiere, a fashion moment or a flagship sponsorship, the Glambot is the piece that makes the event photograph like a bigger production than it is. Intro and outro cards carry your identity into every clip, so a night's worth of guest-shared video is branded end to end.",
        "It is a statement rental, and it is priced like one. Where a budget has to choose, it earns its place at the event you most want photographed.",
      ],
    },
    privateUse: {
      heading: "Weddings and milestone celebrations",
      paragraphs: [
        "At a wedding the Glambot tends to run during cocktail hour or immediately after the first dance, when guests are dressed at their best and loose enough to perform. Sweet Sixteens and milestone birthdays use it the same way.",
        "It is the single most-shared thing we bring to a private event, which is worth weighing against the fact that it is also the most expensive.",
      ],
    },
    output: "Cinematic slow-motion clips, branded and delivered instantly",
    space: "Generous clearance for the arm's sweep plus room for a crowd — we survey this with your venue",
    gallery: [
      { src: "/img/glambot-1.jpg", alt: "Guest performing for the Glambot robotic camera arm" },
      { src: "/img/glambot-2.jpg", alt: "Glambot camera arm mid-sweep at a gala" },
      { src: "/img/glambot-3.jpg", alt: "Slow motion Glambot capture at an evening event" },
      { src: "/img/glambot-4.jpg", alt: "Guests watching a Glambot session at a brand event" },
    ],
    faqs: [
      {
        q: "How much space does the Glambot need?",
        a: "More than a standard booth, and it varies with the sweep path we programme. We survey it against your floor plan and ceiling height before the event rather than assuming — it is the one experience where turning up and hoping does not work.",
      },
      {
        q: "How long is each clip?",
        a: "Around four seconds of finished, graded slow motion, topped and tailed with your branded cards. Short by design — it is built to be posted, and a four-second loop gets watched twice.",
      },
      {
        q: "Can we choose the music?",
        a: "Yes, we agree the music bed with you in advance so it matches the room and the brand rather than defaulting to something generic.",
      },
      {
        q: "When in the evening does it work best?",
        a: "Cocktail hour, carpet arrivals, or straight after a key moment — any point where guests are dressed well and the room has energy. It is worth avoiding the last hour, when the queue tends to thin.",
      },
    ],
    related: ["vogue-booth", "ai-photo-booth", "360-photo-booth"],
  },

  {
    slug: "mirror-x",
    name: "Mirror X",
    tagline:
      "Six feet of frameless glass — the mirror experience rebuilt for a corporate floor.",
    meta: {
      title: "Mirror X Photo Booth Rental New Jersey | Corporate Mirror Booth",
      description:
        "Mirror X photo booth rental across New Jersey. Six feet of frameless interactive glass with studio lighting and instant prints — built for corporate events, galas and premium brand floors.",
    },
    h1: "Mirror X",
    heroSub:
      "Every capability of the classic magic mirror, rebuilt in frameless glass with the ornament stripped out. It is the version that belongs in a room that has been properly art-directed.",
    heroImg: {
      src: "/img/mirror-x-hero.jpg",
      alt: "Frameless Mirror X photo booth at a corporate event",
    },
    weight: "corporate",
    included: [
      "Six-foot frameless interactive mirror",
      "Pro Canon DSLR behind the glass with studio ring lighting",
      "Animated on-screen journey, customised to your event",
      "Custom-designed print template",
      "Unlimited sessions and unlimited 4×6 prints",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full booking",
      "Premium backdrop and a curated props table",
    ],
    prose: [
      {
        heading: "The difference is what was taken away",
        paragraphs: [
          "The original magic mirror sells itself with ornament — a gilded frame, animation, a certain amount of theatre. It is very good at what it does, and at a wedding or a Sweet Sixteen it is exactly right.",
          "Mirror X is the same technology with the theatre removed. Six feet of frameless glass, a dark surround, and nothing on it that competes with the room. On a corporate floor, in a gallery space, or at any event where somebody has spent money on the look, that restraint is the entire point.",
        ],
      },
      {
        heading: "Full-length, which changes the photographs",
        paragraphs: [
          "Because guests see themselves head to toe, they use the whole frame. Groups arrange themselves properly. People who would sit stiffly in a cabinet booth actually move. The resulting photographs look less like booth output and more like portraits taken at the event.",
          "Underneath the glass it is a pro Canon DSLR and studio ring lighting rather than a tablet camera, and the printer is dye-sublimation — a dry, handleable 4×6 in seconds rather than a damp strip.",
        ],
      },
    ],
    corporate: {
      heading: "Where it earns its place",
      paragraphs: [
        "Holiday parties in Jersey City and Newark towers, hotel ballroom galas, conference receptions and any activation where the booth has to sit inside a designed environment without shouting. The on-screen journey carries your identity from the first tap, and the print template is designed for the event rather than picked from a dropdown.",
        "It is also the easiest booth to place in a room with sightline constraints, because there is no frame or enclosure to work around.",
      ],
    },
    privateUse: {
      heading: "Modern weddings",
      paragraphs: [
        "For couples who looked at the classic mirror and found it too ornate, this is the answer. The same full-length capture and the same unlimited prints, in a form that disappears into a minimal reception rather than decorating it.",
        "It photographs particularly well against the Hudson-facing windows in Jersey City and Hoboken venues, where the glass picks up the skyline behind it.",
      ],
    },
    output: "Unlimited 4×6 prints plus instant digital sharing",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/mirror-x-1.jpg", alt: "Guests posing at the frameless Mirror X photo booth" },
      { src: "/img/mirror-x-2.jpg", alt: "Mirror X booth set up at an evening corporate event" },
      { src: "/img/mirror-x-3.jpg", alt: "Full length Mirror X capture with studio lighting" },
      { src: "/img/mirror-x-4.jpg", alt: "Mirror X photo booth with a premium backdrop" },
    ],
    faqs: [
      {
        q: "How is this different from the Magic Mirror?",
        a: "Same capture technology, same prints, same sharing. The difference is the housing: Mirror X is six feet of frameless glass with no ornament, where the Magic Mirror has a decorative frame and more on-screen animation. Choose Mirror X when the room has been designed and you want the booth to sit inside it quietly.",
      },
      {
        q: "How much space does it need?",
        a: "Ten by ten feet is ideal and eight by eight is the working minimum. That is the mirror, the backdrop, and enough room for a group of six to arrange themselves without backing into the wall.",
      },
      {
        q: "How long does setup take?",
        a: "About twenty minutes. We arrive a full hour before your start time so the booth is set, tested and quietly ready before the first guest sees it.",
      },
      {
        q: "Can the interface carry our branding?",
        a: "Yes — the on-screen journey, the print template and the sharing screen can all carry your identity. For a full physical wrap of the housing as well, allow two to three weeks.",
      },
    ],
    related: ["magic-mirror", "studio-booth", "branded-photo-booth"],
  },

  {
    slug: "360-photo-booth",
    name: "360 Photo Booth",
    tagline:
      "A camera orbits your guests on a lit platform and hands back a slow-motion reel.",
    meta: {
      title: "360 Photo Booth Rental New Jersey | 360 Video Booth Hire",
      description:
        "360 photo booth rental across New Jersey. A slow-motion camera orbits guests on a lit platform, producing branded video reels shared instantly. Weddings, Sweet Sixteens, galas and brand events.",
    },
    h1: "360 Photo Booth",
    heroSub:
      "A camera arm orbits a lit platform while your guests do almost nothing, and the reel that comes back looks choreographed. It is the piece that pulls a crowd the moment it switches on.",
    heroImg: {
      src: "/img/360-booth-hero.jpg",
      alt: "Guests on a lit 360 photo booth platform at an event",
    },
    video: {
      src: "/video/360-photo-booth.mp4",
      poster: "/img/360-booth-poster.jpg",
      label: "360 photo booth footage",
    },
    weight: "both",
    included: [
      "Lit platform with a programmed orbiting camera arm",
      "Slow-motion capture with on-site grading",
      "Custom overlays, intro cards and music selected with you",
      "Instant sharing by text, email or QR code",
      "Trained attendant managing the platform and the queue",
      "Unlimited sessions",
      "Branded online gallery of every reel",
      "Safety rail and crowd management for the platform",
    ],
    prose: [
      {
        heading: "Why it works on almost any crowd",
        paragraphs: [
          "The 360 asks nothing of a guest. There is no pose to hold, no timing to get right, no instruction beyond standing still or moving slightly. The camera does the work, and slow motion flatters almost any movement — which means guests who would never step into a photo booth will step onto a platform.",
          "It is also the most watchable experience we run. The platform sits at standing height, the orbit is visible from across a room, and the reel plays back immediately on screen. A queue forms because people can see exactly what they are queueing for.",
        ],
      },
      {
        heading: "The room it needs",
        paragraphs: [
          "Eight by eight feet of genuinely clear floor for the platform and the arm's orbit, plus space around that for the crowd it attracts — the second part is the one venues forget. Converted lofts and warehouse spaces suit it well; low-ceilinged hotel function rooms need checking first.",
          "Across New Jersey we run it most often in Jersey City and Hoboken waterfront venues, Bergen County ballrooms and shore venues in Monmouth and Ocean, where the ceiling height is rarely the constraint.",
        ],
      },
    ],
    corporate: {
      heading: "Brand events and conference floors",
      paragraphs: [
        "For a brand activation the 360 produces vertical video in exactly the format social platforms want, with your overlay and intro card on every clip. It is the most reliably shared output of anything we bring.",
        "On a conference floor it also solves the stopping problem: the orbit is visible from three aisles away, which gives your team the conversation every other stand is chasing.",
      ],
    },
    privateUse: {
      heading: "Sweet Sixteens, weddings and galas",
      paragraphs: [
        "At a Sweet Sixteen it is usually the single most-requested thing in the room. At a wedding it works best after dinner, when the floor is loose and the dresses are moving.",
        "Groups of two to four get the best reels — enough movement to fill the orbit, few enough that everybody stays in frame.",
      ],
    },
    output: "Slow-motion 360 video reels, branded and shared instantly",
    space: "8×8 ft clear for the platform, plus room for the crowd it draws",
    gallery: [
      { src: "/img/360-booth-1.jpg", alt: "Guest on the 360 photo booth platform under event lighting" },
      { src: "/img/360-booth-3.jpg", alt: "360 booth camera arm orbiting a group of guests" },
      { src: "/img/360-booth-5.jpg", alt: "360 photo booth platform set up at a reception" },
      { src: "/img/360-booth-7.jpg", alt: "Guests watching a 360 video reel play back" },
      { src: "/img/360-booth-9.jpg", alt: "Lit 360 photo booth platform at an evening event" },
    ],
    faqs: [
      {
        q: "How many people fit on the platform?",
        a: "Up to four comfortably, though two or three produces the best reels — enough movement to fill the orbit while everyone stays in frame throughout the sweep.",
      },
      {
        q: "How much clearance does it actually need?",
        a: "Eight by eight feet of clear floor for the platform and the arm, and then genuine space around that for spectators. The crowd is the part venues underestimate; a 360 hemmed into a corner loses most of its effect.",
      },
      {
        q: "Do guests get prints as well?",
        a: "The 360 produces video rather than stills. If you want prints in the same room, it pairs well with a mirror or enclosed booth — plenty of events run both.",
      },
      {
        q: "Can the reels carry our branding?",
        a: "Yes. Intro cards, overlays and the outro all carry your identity, and the gallery the reels land in can be branded too.",
      },
    ],
    related: ["glambot", "vogue-booth", "branded-photo-booth"],
  },

  {
    slug: "roaming-photo-booth",
    name: "Roaming Booth",
    tagline: "No booth, no line — an attendant brings the camera to your guests.",
    meta: {
      title: "Roaming Photo Booth Rental New Jersey | Handheld Booth Hire",
      description:
        "Roaming photo booth rental across New Jersey. A trained attendant works the room with a handheld capture system — ideal for trade show floors, cocktail hours and venues with no floor space to spare.",
    },
    h1: "Roaming Photo Booth",
    heroSub:
      "The booth that goes to the guest. An attendant works the room with a handheld capture system, which means no queue, no footprint, and photographs of people who would never have walked over to a booth.",
    heroImg: {
      src: "/img/roamer-hero-2.jpg",
      alt: "Attendant using a handheld roaming photo booth with guests",
    },
    video: {
      src: "/video/roaming-photo-booth.mp4",
      poster: "/img/roamer-poster.jpg",
      label: "Roaming photo booth footage",
    },
    weight: "corporate",
    included: [
      "Handheld capture system with integrated lighting",
      "Trained attendant working the room for the full booking",
      "Custom overlays and branded framing on every capture",
      "Instant delivery by text, email or QR code",
      "Opt-in contact capture where you want it",
      "Unlimited captures",
      "Branded online gallery",
    ],
    prose: [
      {
        heading: "It solves a problem the other booths cannot",
        paragraphs: [
          "Every static booth has the same failure mode: it captures the people willing to queue for it. At a cocktail reception, a trade show stand or a seated dinner, that is a minority of the room — and often not the part of the room you most wanted photographed.",
          "The roamer inverts it. The attendant moves through the space and brings the camera to conversations already happening, which produces looser, better photographs and covers three or four times the guest list in the same hours.",
        ],
      },
      {
        heading: "Where the footprint matters",
        paragraphs: [
          "It needs no floor space at all. In Manhattan-adjacent Jersey City towers, Hoboken restaurants and historic Princeton venues where every square foot is spoken for — and in older buildings where the load-in is a narrow staircase rather than a freight elevator — this is frequently the only booth that fits.",
          "It is also the answer for multi-room events. One attendant covers a reception, a dinner and an after-party without anything being moved.",
        ],
      },
    ],
    corporate: {
      heading: "Trade show floors and conference receptions",
      paragraphs: [
        "For a multi-day show where footfall is spread across the day rather than concentrated into an evening, the roamer beats a static booth outright. The attendant works the aisles around your stand, every capture carries your overlay, and opt-in capture happens in the same interaction.",
        "At a conference reception it does the networking work too — arriving at a group with a camera is a legitimate reason to interrupt, which is exactly what your team needs.",
      ],
    },
    privateUse: {
      heading: "Cocktail hours and tight venues",
      paragraphs: [
        "At a wedding, the roamer during cocktail hour catches guests before anyone has thought about the photo booth, and gets the relatives who would never queue.",
        "It also rescues venues with genuinely no space — brownstone receptions, restaurant buyouts, boat charters — where a static booth simply will not go.",
      ],
    },
    output: "Instant branded digital shares, no prints",
    space: "None — the booth walks the room",
    gallery: [
      { src: "/img/roamer-1.jpg", alt: "Roaming photo booth attendant capturing guests at a reception" },
      { src: "/img/roamer-4.jpg", alt: "Handheld roaming booth in use at a corporate event" },
      { src: "/img/roamer-6.jpg", alt: "Guests photographed by the roaming booth during cocktail hour" },
      { src: "/img/roamer-8.jpg", alt: "Roaming photo booth working a trade show floor" },
      { src: "/img/roamer-10.jpg", alt: "Attendant bringing the roaming camera to a group of guests" },
    ],
    faqs: [
      {
        q: "Does the roaming booth print?",
        a: "No — output is digital, delivered to the guest's phone within seconds by text, email or QR code. If you need prints in the room as well, pair it with a static booth; plenty of trade show stands run both.",
      },
      {
        q: "How many guests can it cover?",
        a: "Considerably more than a static booth over the same hours, because there is no queue and the attendant moves continuously. For a large floor or a multi-room event, two roamers cover it comfortably.",
      },
      {
        q: "Is it good for trade shows specifically?",
        a: "It is usually the right answer for a multi-day show. Footfall on a show floor is spread across the day rather than concentrated, so a static booth sits idle in the quiet hours while a roamer keeps working the aisles.",
      },
      {
        q: "Can it capture leads?",
        a: "Yes. Opt-in email and phone capture sits inside the sharing step, and you get the list and a report after the show.",
      },
    ],
    related: ["branded-photo-booth", "studio-booth", "gif-booth"],
  },

  {
    slug: "studio-booth",
    name: "Studio Booth",
    tagline:
      "Studio lighting and a pro DSLR, set up in your venue. Portraits, not party photos.",
    meta: {
      title: "Studio Booth & Headshot Rental New Jersey | On-Site Portraits",
      description:
        "On-site studio portrait and headshot booth across New Jersey. Professional lighting and a Canon DSLR set up in your venue — corporate headshots, conference portraits and gala photography.",
    },
    h1: "Studio Booth & On-Site Headshots",
    heroSub:
      "A proper portrait setup brought into your venue: studio-powered lighting, a professional Canon DSLR, and results that look shot in a studio rather than at a party.",
    heroImg: {
      src: "/img/studio-booth-hero.jpg",
      alt: "On-site studio portrait setup with professional lighting at an event",
    },
    weight: "corporate",
    included: [
      "Studio-powered lighting with a professional Canon DSLR",
      "Choice of clean seamless or premium textured backdrops",
      "Attendant directing every subject through the shot",
      "Unlimited sessions and unlimited 4×6 prints",
      "Instant sharing by text, email or QR code",
      "Retouched-look processing applied on site",
      "Online gallery of every portrait",
    ],
    prose: [
      {
        heading: "The gap this fills",
        paragraphs: [
          "There is a real difference between a photo booth photograph and a portrait, and most people can tell instantly which one they are looking at. The difference is lighting: a single on-camera flash produces booth output, while properly placed studio lighting produces something a person will actually use.",
          "This is that setup, brought to your venue and run by someone who directs each subject rather than counting down from three. Guests leave with a photograph good enough for a profile, a wall, or a company directory.",
        ],
      },
      {
        heading: "Headshots, done in the gaps of a working day",
        paragraphs: [
          "The most common corporate use is not a party at all. It is a headshot station at a conference, an all-hands or an onboarding day — where scheduling a whole team into a photographer's studio is impossible, but everyone will spend ninety seconds at a station on their way past.",
          "Output can be delivered as both a print for the guest and a clean high-resolution file for your team, which is what makes it usable for a website or a directory afterwards.",
        ],
      },
    ],
    corporate: {
      heading: "Conferences, headshots and awards nights",
      paragraphs: [
        "Conference portrait stations, executive headshot days, awards photography and any event where the images need to survive being used afterwards. Backdrops can be branded, and the processing look is agreed with you in advance so a whole team's headshots come back consistent.",
        "It is also the quiet workhorse at a gala: guests dressed at their best, photographed properly, on their way in.",
      ],
    },
    privateUse: {
      heading: "Weddings and family events",
      paragraphs: [
        "At a wedding the studio booth produces the group portraits families actually frame — grandparents, whole tables, the wedding party — without pulling anyone away from the reception for a formal shoot.",
        "Pair it with a lighter experience elsewhere in the room and you cover both instincts: the guests who want a keepsake and the guests who want to mess about.",
      ],
    },
    output: "Unlimited 4×6 prints plus high-resolution digital files",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/studio-booth-2.jpg", alt: "Studio lit portrait taken at an on-site event booth" },
      { src: "/img/studio-booth-3.jpg", alt: "On-site headshot station at a corporate event" },
      { src: "/img/studio-booth-4.jpg", alt: "Guest photographed against a seamless studio backdrop" },
      { src: "/img/studio-booth-5.jpg", alt: "Professional event portrait setup with studio lighting" },
      { src: "/img/studio-booth-6.jpg", alt: "Group portrait taken at the on-site studio booth" },
      { src: "/img/hero-gold-wall.jpg", alt: "Guests photographed against a gold textured backdrop" },
    ],
    faqs: [
      {
        q: "Can we use these as professional headshots?",
        a: "Yes — that is one of the main reasons companies book it. You get clean high-resolution files alongside the guest prints, and the processing look is agreed in advance so a whole team comes back consistent.",
      },
      {
        q: "How many people can you photograph in an hour?",
        a: "It depends how much direction each subject wants, but a headshot station moving briskly handles a substantial team over a few hours. Tell us the headcount and the window and we will tell you honestly whether it fits.",
      },
      {
        q: "What backdrops are available?",
        a: "Clean seamless in a range of colours, or premium textured options. Branded backdrops can be printed for you — allow the usual two to three weeks for anything physical.",
      },
      {
        q: "Is retouching included?",
        a: "A retouched look is applied on site as part of the processing, so what the guest receives already looks finished. Deeper individual retouching is a separate conversation.",
      },
    ],
    related: ["glam-booth", "mirror-x", "roaming-photo-booth"],
  },

  {
    slug: "green-screen-photo-booth",
    name: "Green Screen",
    tagline:
      "Put your guests anywhere — a skyline, a brand world, a set built for the campaign.",
    meta: {
      title: "Green Screen Photo Booth Rental New Jersey | Custom Backgrounds",
      description:
        "Green screen photo booth rental across New Jersey. Place guests in any environment — city skylines, brand worlds, themed sets — with backgrounds designed with you in advance.",
    },
    h1: "Green Screen Experiences",
    heroSub:
      "A booth with no fixed backdrop, because the backdrop is whatever you decide it is. Guests are composited live into environments we design with you before the event.",
    heroImg: {
      src: "/img/trade-show-3.jpg",
      alt: "Attendees at a branded photo experience on an exhibition floor",
    },
    weight: "corporate",
    included: [
      "Professional green screen with even, controlled lighting",
      "Live compositing — guests see the result before they step away",
      "Custom background set designed with you in advance",
      "Branded overlays and print templates",
      "Unlimited sessions and unlimited 4×6 prints",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full booking",
    ],
    prose: [
      {
        heading: "The most flexible thing we own",
        paragraphs: [
          "Every other experience commits you to a look. The green screen commits you to nothing: the same hardware puts guests on a Manhattan rooftop at one event, inside a product's visual world at the next, and on a themed set at the one after that.",
          "Compositing happens live, so guests see themselves in the environment on screen before they have moved. That immediacy is what makes people try a second background rather than taking one photograph and leaving.",
        ],
      },
      {
        heading: "Backgrounds are designed, not downloaded",
        paragraphs: [
          "We build the background set with you in advance. For a brand that usually means environments drawn from the campaign so the composite reads as commissioned content. For a themed private event it means a handful of options guests choose between on screen.",
          "Quality here comes almost entirely from lighting the screen evenly, which is unglamorous and is the part cheaper setups skip. It is why our composites hold up at print size rather than only on a phone.",
        ],
      },
    ],
    corporate: {
      heading: "Brand worlds and impossible locations",
      paragraphs: [
        "It is the cheapest way to put a guest somewhere that does not exist, or somewhere you could never fit inside a venue. Product interiors, campaign environments, aspirational locations, a stage you have not built — all of it composites live and prints in seconds.",
        "For trade shows it also solves a stand-design problem: you get the visual impact of a large built environment without paying to freight one to the convention centre.",
      ],
    },
    privateUse: {
      heading: "Themed celebrations",
      paragraphs: [
        "Themed birthdays, Sweet Sixteens and bar and bat mitzvahs use it hardest, because a theme that would cost a fortune to build physically can simply be designed and composited.",
        "It also travels well to venues with an unattractive backdrop — the room stops mattering entirely.",
      ],
    },
    output: "Unlimited composited 4×6 prints plus instant digital sharing",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/green-screen-1.jpg", alt: "Guests composited into a custom green screen background" },
      { src: "/img/green-screen-2.jpg", alt: "Green screen photo booth setup at an event" },
      { src: "/img/green-screen-3.jpg", alt: "Live green screen compositing shown on a booth screen" },
      { src: "/img/green-screen-4.jpg", alt: "Themed green screen photo booth output" },
      { src: "/img/green-screen-5.jpg", alt: "Guests choosing a green screen background at a party" },
    ],
    faqs: [
      {
        q: "Who designs the backgrounds?",
        a: "We do, with you, before the event. For brands that usually means environments pulled from the campaign so the composite reads as commissioned content rather than a novelty.",
      },
      {
        q: "How many backgrounds can guests choose from?",
        a: "As many as you want to prepare, though three to five works best in practice — enough for a second visit, few enough that nobody stalls the queue deciding.",
      },
      {
        q: "Do the composites hold up in print?",
        a: "Yes, because we light the screen evenly rather than relying on software to rescue a badly lit key. That is the part cheaper setups skip and it is why their edges fall apart at print size.",
      },
      {
        q: "Can guests wear green?",
        a: "Best avoided — anything green will key out along with the screen. Our attendant flags it politely if someone arrives in an emerald dress.",
      },
    ],
    related: ["branded-photo-booth", "ai-photo-booth", "magazine-booth"],
  },

  {
    slug: "mosaic-wall",
    name: "Mosaic Wall",
    tagline:
      "Every guest photo prints as a sticker they place themselves. By the end, the wall is one enormous image.",
    meta: {
      title: "Photo Mosaic Wall Rental New Jersey | Live Mosaic Activation",
      description:
        "Live photo mosaic wall rental across New Jersey. Guest photos print as stickers and build into one large image over the night — a logo, a product, a monogram. Corporate activations and celebrations.",
    },
    h1: "Mosaic Wall",
    heroSub:
      "Guests take a photo, it prints as a numbered sticker, and they place it on the wall themselves. Over the evening a few hundred small photographs resolve into one large image — your logo, your product, a monogram.",
    heroImg: {
      src: "/img/mosaic-hero.jpg",
      alt: "Guests placing photo stickers on a live mosaic wall at an event",
    },
    weight: "corporate",
    included: [
      "Mosaic wall structure, sized to your guest count",
      "Photo capture station with attendant",
      "Numbered adhesive prints produced in seconds",
      "Master image designed with you in advance",
      "Guests receive their own copy digitally as well",
      "Time-lapse of the wall filling, if you want one",
      "The finished wall is yours to keep",
    ],
    prose: [
      {
        heading: "It gives guests a reason to come back",
        paragraphs: [
          "Most photo experiences are a single transaction: guest arrives, poses, leaves with a print. The mosaic is the only one that gives them a stake in something unfinished. They place their sticker, they see the image is not done, and they come back later to look at how far it has got.",
          "That return traffic is the point. By the last hour the wall is the thing people are photographing, and the photographs they take of it carry whatever image you chose to build.",
        ],
      },
      {
        heading: "Sizing it to the room",
        paragraphs: [
          "The wall is sized to your guest count so that it actually completes — an under-filled mosaic reads as a failure, and an over-filled one turns guests away. Tell us the headcount and we size the master image and the sticker grid to match.",
          "It needs a stretch of visible wall or a free-standing position with circulation space in front of it. Somewhere on a natural traffic route works far better than a quiet corner.",
        ],
      },
    ],
    corporate: {
      heading: "The wall becomes the logo",
      paragraphs: [
        "The master image is usually a logo, a product silhouette, a campaign lockup or an anniversary number. Every guest photograph becomes a pixel of it, and the finished wall — genuinely built by the people in the room — is the shot that ends up in the recap deck.",
        "For internal events it does something else useful: at an all-hands or a milestone celebration, a wall physically assembled by the whole company is a far better artefact than a group photograph nobody can see themselves in.",
      ],
    },
    privateUse: {
      heading: "Weddings and milestones",
      paragraphs: [
        "As a guest book it beats the book. The master image is usually a monogram, a date or a portrait of the couple, and what you take home is a physical record with every guest in it.",
        "It works particularly well at events where guests arrive across a long window, because the wall gives late arrivals something to catch up on.",
      ],
    },
    output: "Adhesive prints that build the wall, plus digital copies for guests",
    space: "A visible wall run or free-standing position with circulation in front",
    gallery: [
      { src: "/img/mosaic-1.jpg", alt: "Photo mosaic wall partially filled with guest stickers" },
      { src: "/img/mosaic-3.jpg", alt: "Guest placing their photo sticker on the mosaic wall" },
      { src: "/img/mosaic-5.jpg", alt: "Completed photo mosaic wall forming a large image" },
      { src: "/img/mosaic-6.jpg", alt: "Mosaic wall capture station at a corporate event" },
      { src: "/img/mosaic-8.jpg", alt: "Close view of individual photos making up a mosaic wall" },
    ],
    faqs: [
      {
        q: "How many guests does it take to fill the wall?",
        a: "We size the wall to your headcount so it completes properly. Give us the guest count and we scale the master image and the sticker grid to match — an under-filled mosaic is the one failure mode worth avoiding.",
      },
      {
        q: "What image should the mosaic build?",
        a: "For corporate events, usually a logo, product silhouette, campaign lockup or anniversary number. For private events, a monogram, a date or a portrait. High contrast reads best at mosaic resolution — we will advise on your artwork.",
      },
      {
        q: "Do guests keep a copy of their own photo?",
        a: "Yes. The sticker goes on the wall, and their own copy arrives on their phone.",
      },
      {
        q: "Do we keep the finished wall?",
        a: "Yes, it is yours. We can also shoot a time-lapse of it filling across the evening, which tends to be the piece that gets used afterwards.",
      },
    ],
    related: ["branded-photo-booth", "magic-mirror", "enclosed-photo-booth"],
  },
];
