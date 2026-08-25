import type { ServicePage } from "./types";

/**
 * The five event-type pages. Corporate lines get the dark editorial
 * treatment; the private-event pages switch to ivory so the emotional half
 * of the business reads at a different temperature from the commercial half.
 */
export const services: ServicePage[] = [
  {
    slug: "corporate-events",
    name: "Corporate Events",
    meta: {
      title: "Corporate Photo Booth Rental New Jersey | Company Events",
      description:
        "Corporate photo booth and interactive experiences across New Jersey. Holiday parties, conferences, client evenings and internal celebrations — branded end to end, with COIs and lead capture handled.",
    },
    h1: "Corporate Event Experiences",
    heroSub:
      "Holiday parties, sales conferences, client evenings, all-hands and awards nights across New Jersey — branded properly, staffed by people who run the booth so your team does not have to, and insured to the standard your venue will ask for.",
    heroImg: {
      src: "/img/corporate-hero.jpg",
      alt: "Guests at a corporate event photo booth activation",
    },
    tone: "dark",
    checklist: [
      { title: "Fully brandable", desc: "Wrap, start screen, overlays and gallery in your identity." },
      { title: "$3M insured", desc: "Same-day certificates naming the venue, building and management." },
      { title: "Attendant included", desc: "Your team attends the event rather than running the booth." },
      { title: "Reported afterwards", desc: "Sessions, shares and opt-ins, so the line item defends itself." },
    ],
    prose: [
      {
        heading: "What a booth is actually for at an internal event",
        paragraphs: [
          "At a holiday party, a summer outing or an awards night, the photo booth is doing social work rather than marketing work. It gives people from different floors a legitimate reason to stand next to each other, and it produces an object they take home. That is a materially different outcome from a photographer circulating the room, and it is why the booth is usually the thing people mention afterwards.",
          "The mistake companies make is treating it as decoration and putting it somewhere out of the way. A booth in a corridor gets used by the people walking past it. A booth on the route between the bar and the tables gets used by everyone.",
        ],
      },
      {
        heading: "Branding that does not look bolted on",
        paragraphs: [
          "We can wrap the booth entirely, build a custom start screen, apply overlays designed to your brand guidelines, print custom backdrops and host the images in a branded gallery or microsite. Where the room has been properly art-directed, the alternative is the opposite approach — Mirror X, frameless and quiet, with the branding carried only on screen and in print.",
          "For a full physical wrap allow two to three weeks so graphics can be printed and applied properly. Digital-only branding turns around considerably faster if the date is close.",
        ],
      },
      {
        heading: "The paperwork, before it becomes a problem",
        paragraphs: [
          "New Jersey corporate venues ask for certificates of insurance as a matter of routine, and the requirements get stricter the larger the building: an Exchange Place tower wants the venue, the building and the management company named; a university wants its own wording; a corporate campus wants vehicle registration and security badging days in advance.",
          "We carry a $3 million policy and issue same-day COIs. The part that cannot be rushed is badging and dock scheduling, which close before the event rather than on it — so send us the site's requirements as soon as you have them and none of it becomes urgent.",
        ],
      },
    ],
    experiences: [
      "branded-photo-booth",
      "mirror-x",
      "studio-booth",
      "ai-photo-booth",
      "roaming-photo-booth",
      "mosaic-wall",
    ],
    gallery: [
      { src: "/img/corporate-hero.jpg", alt: "Corporate event photo booth activation" },
      { src: "/img/corporate-confetti.jpg", alt: "Guests celebrating at a company party photo booth" },
      { src: "/img/corporate-instant-sharing.jpg", alt: "Guest receiving photos instantly at a corporate event" },
      { src: "/img/corporate-vogue-session.jpg", alt: "Vogue booth session at a corporate event" },
      { src: "/img/branded-12.jpg", alt: "Attendees collecting branded prints at a company event" },
      { src: "/img/studio-booth-3.jpg", alt: "On-site headshot station at a corporate event" },
    ],
    faqs: [
      {
        q: "How far in advance should we book a corporate event?",
        a: "For a December holiday party, as early in the autumn as you can — that season compresses badly across every supplier. For everything else, a few weeks is usually workable, though a full physical booth wrap needs two to three weeks on its own.",
      },
      {
        q: "Can you provide a certificate of insurance?",
        a: "Yes, same day. We carry a $3 million policy and name whoever the venue requires — commonly the venue, the building owner and the management company. Corporate campuses often also need vehicle registration and security badging, and those close days ahead rather than same-day.",
      },
      {
        q: "Do we need to give the attendant anything?",
        a: "Nothing beyond access and a power supply. The attendant runs the booth for the full booking, manages the queue and keeps the props table in order, which is the whole point — your team attends the event rather than working it.",
      },
      {
        q: "Can you handle a multi-room or multi-floor event?",
        a: "Yes. Either a static booth in the main room plus a roaming attendant covering everywhere else, or two static setups. Tell us the floor plan and the guest count and we will tell you honestly what it takes to cover the room.",
      },
      {
        q: "How much space do we need to allow?",
        a: "Most static experiences want ten by ten feet, with eight by eight as the working minimum. The 360 needs eight by eight clear plus room for the crowd it attracts. The roaming booth needs no floor space at all.",
      },
    ],
  },

  {
    slug: "brand-activations",
    name: "Brand Activations",
    meta: {
      title: "Brand Activation New Jersey | Experiential Photo Marketing",
      description:
        "Brand activation photo experiences across New Jersey. Fully branded booths, AI experiences and opt-in data capture producing shareable content and measurable results for agencies and brands.",
    },
    h1: "Brand Activations",
    heroSub:
      "An activation that produces three things at once: content your audience distributes for you, a permissioned contact list, and numbers you can put in front of whoever signed off the budget.",
    heroImg: {
      src: "/img/branded-hero-2.jpg",
      alt: "Fully branded photo booth at a brand activation",
    },
    tone: "dark",
    checklist: [
      { title: "Content that travels", desc: "Every asset leaves branded, in the format the platform wants." },
      { title: "Opt-in data capture", desc: "Consent given in exchange for something the guest actually wants." },
      { title: "Custom fabrication", desc: "Wrap, backdrop, step-and-repeat or a built set, designed with you." },
      { title: "Measured", desc: "Sessions, shares and opt-in rate reported by day." },
    ],
    prose: [
      {
        heading: "The distribution you cannot buy directly",
        paragraphs: [
          "The reason a photo experience earns a place in an activation budget is not the photograph. It is that the photograph gets shared by the attendee, to an audience that trusts them, carrying your branding — and that is a channel no amount of paid media buys directly.",
          "Which means the interesting number is not how many people used the booth. It is how many shared, and what the branded asset looked like when it landed. We design for the second thing and report on the first.",
        ],
      },
      {
        heading: "Data, gathered where consent makes sense",
        paragraphs: [
          "Opt-in email and phone capture sits inside the sharing step rather than in front of it. That distinction matters: the guest is giving a contact detail to receive something they want, rather than being taxed before they get to the fun. Opt-in rates are dramatically better and the consent is unambiguous.",
          "Short surveys and single-question polls can be built into the same on-screen journey, which is how you collect product feedback at the moment of highest engagement instead of by email a week later. Everything comes back in a post-event report alongside the gallery.",
        ],
      },
      {
        heading: "Building beyond the booth",
        paragraphs: [
          "If the activation needs more than a wrapped booth — a custom backdrop, a step-and-repeat, a themed set, a footprint designed to a floor plan — we design and build it with your team in advance so the whole thing photographs as one piece rather than as a booth standing next to a set.",
          "For agencies working to a client's brand guidelines, send the guidelines and the working files. We proof everything back before anything is printed.",
        ],
      },
    ],
    experiences: [
      "branded-photo-booth",
      "ai-photo-booth",
      "green-screen-photo-booth",
      "gif-booth",
      "glambot",
      "vogue-booth",
    ],
    gallery: [
      { src: "/img/brand-activation-nike.jpg", alt: "Branded photo experience at a sports brand activation" },
      { src: "/img/brand-activation-dropbox.jpg", alt: "Corporate brand activation photo booth setup" },
      { src: "/img/branded-18.jpg", alt: "Custom booth wrap matching a campaign identity" },
      { src: "/img/branded-24.jpg", alt: "Guests posing inside a branded activation footprint" },
      { src: "/img/ai-booth-6.jpg", alt: "AI photo booth portrait in a custom campaign style" },
      { src: "/img/branded-30.jpg", alt: "Branded photo booth overlay printed on a photo" },
    ],
    faqs: [
      {
        q: "What do you need from us to build a branded activation?",
        a: "Brand guidelines and working artwork files rather than flattened exports. We size everything ourselves — including for a wrap's curved surfaces and the touchscreen's safe areas — and send proofs back before anything goes to print.",
      },
      {
        q: "How long does a full wrap take?",
        a: "Two to three weeks from artwork approval, covering print, cure and application. If your date is closer than that, digital-only branding still reads as bespoke on camera and turns around much faster.",
      },
      {
        q: "Do we own the data?",
        a: "Yes. Opt-in contact data is handed over after the event alongside the gallery and the report. Capture is opt-in at the point of sharing, so consent is explicit rather than assumed.",
      },
      {
        q: "What does the post-event report cover?",
        a: "Sessions, shares and opt-in rate, broken down by day for multi-day activations. Enough to defend the line item with numbers rather than an anecdote about how busy the stand looked.",
      },
      {
        q: "Can you work directly with our agency?",
        a: "Yes — a good share of our activation work comes through agencies. Send the brief and the guidelines and we will work to them, including proofing through whatever approval chain the client requires.",
      },
    ],
  },

  {
    slug: "trade-shows",
    name: "Trade Shows",
    meta: {
      title: "Trade Show Photo Booth New Jersey | Exhibition Stand Experiences",
      description:
        "Trade show photo experiences across New Jersey. Draw stand traffic, capture opt-in leads and send branded content home with attendees. Edison, Meadowlands and Atlantic City exhibition floors.",
    },
    h1: "Trade Show Experiences",
    heroSub:
      "A busy stand beats a big stand. A photo experience gives attendees a reason to stop, your team a reason to start a conversation, and the attendee a branded asset that keeps working after the floor closes.",
    heroImg: {
      src: "/img/trade-show-hero-2.jpg",
      alt: "Branded photo experience drawing attendees to a trade show stand",
    },
    tone: "dark",
    checklist: [
      { title: "Solves the stopping problem", desc: "Visible from three aisles away and free to try." },
      { title: "Lead capture built in", desc: "Opt-in email or phone before every share." },
      { title: "Multi-day staffed", desc: "Setup, operator and breakdown for every show day." },
      { title: "Exhibitor kit handled", desc: "Marshalling, load-in windows and decorator COIs." },
    ],
    prose: [
      {
        heading: "The hardest problem on a show floor",
        paragraphs: [
          "It is not explaining your product. It is getting anybody to stop walking. Attendees have a route, a schedule and a well-practised technique for avoiding eye contact with stand staff, and no amount of graphics overcomes that on its own.",
          "A photo experience solves it because the interaction is visible from a distance, costs the attendee nothing, and takes under a minute. While they wait, your team gets the conversation every other stand on the aisle is chasing.",
        ],
      },
      {
        heading: "Turning traffic into a list",
        paragraphs: [
          "Traffic is only worth what you capture from it. Before receiving their photo, attendees opt in with an email address or a phone number, and every capture carries your overlay. After the show you get the full opt-in list alongside the gallery, plus sessions, shares and opt-in rate reported by day.",
          "That is a materially better interaction than a badge scan. The attendee is engaged rather than tolerating you, and the contact detail is given rather than harvested.",
        ],
      },
      {
        heading: "New Jersey's exhibition floors",
        paragraphs: [
          "Most of the state's show business runs through three places: the New Jersey Convention and Exposition Center in Edison, the Meadowlands Exposition Center in Secaucus, and the Atlantic City Convention Center. Each has its own exhibitor kit, marshalling procedure and insurance naming requirements — frequently the decorator as well as the venue.",
          "Send us the kit as soon as you have it. We handle our part of the paperwork as routine, but the load-in windows and badge deadlines are fixed and they close before the show rather than during it.",
        ],
      },
      {
        heading: "Why roaming usually wins a multi-day show",
        paragraphs: [
          "Footfall on an exhibition floor is spread across a full day rather than concentrated into an evening. A static booth is therefore idle for long stretches and overwhelmed for short ones — the worst of both.",
          "A roaming attendant works the aisles continuously, brings the camera to people already stopped at neighbouring stands, and needs no floor space out of your footprint. Many exhibitors run both: a branded static booth for the peaks, a roamer for everything else.",
        ],
      },
    ],
    experiences: [
      "roaming-photo-booth",
      "branded-photo-booth",
      "gif-booth",
      "ai-photo-booth",
      "green-screen-photo-booth",
      "studio-booth",
    ],
    gallery: [
      { src: "/img/trade-show-1.jpg", alt: "Photo experience drawing traffic to an exhibition stand" },
      { src: "/img/trade-show-4.jpg", alt: "Attendees using a branded booth on a trade show floor" },
      { src: "/img/trade-show-6.jpg", alt: "Trade show stand photo activation with branded overlays" },
      { src: "/img/trade-show-9.jpg", alt: "Exhibitor stand with an interactive photo experience" },
      { src: "/img/roamer-8.jpg", alt: "Roaming photo booth working a trade show floor" },
      { src: "/img/trade-show-11.jpg", alt: "Branded photo capture at an exhibition" },
    ],
    faqs: [
      {
        q: "Which New Jersey venues do you cover?",
        a: "All the main exhibition floors — the New Jersey Convention & Exposition Center in Edison, the Meadowlands Exposition Center in Secaucus and the Atlantic City Convention Center, plus hotel and campus conference space statewide.",
      },
      {
        q: "What do you need from our exhibitor kit?",
        a: "All of it, as early as possible. It sets the load-in window, the marshalling procedure, whether the decorator handles material handling, and who the certificate of insurance must name — often the decorator alongside the venue.",
      },
      {
        q: "Do you staff every day of a multi-day show?",
        a: "Yes. We set up before the floor opens, staff the experience with a trained operator every show day, and break down after close. Your team never touches equipment.",
      },
      {
        q: "How do the leads reach us?",
        a: "As a full opt-in list after the show, alongside the gallery and a report of sessions, shares and opt-in rate by day.",
      },
      {
        q: "Static booth or roaming?",
        a: "For a multi-day show, roaming usually wins, because floor footfall spreads across the day and a static booth sits idle through the quiet hours. For a single-evening reception or a large footprint, static is the stronger choice. Plenty of stands run both.",
      },
    ],
  },

  {
    slug: "weddings",
    name: "Weddings",
    meta: {
      title: "Wedding Photo Booth Rental New Jersey | Luxury Wedding Booths",
      description:
        "Luxury wedding photo booth rental across New Jersey. Mirror, glam and studio experiences with unlimited prints, an attendant and floral backdrops — Bergen, Essex, Monmouth and the shore.",
    },
    h1: "Weddings",
    heroSub:
      "Guests stay later, the dance floor stays full, and you go home with a book of photographs nobody had to ask anyone to take.",
    heroImg: {
      src: "/img/wedding-hero.jpg",
      alt: "Wedding guests at a photo booth during a reception",
    },
    tone: "ivory",
    checklist: [
      { title: "Unlimited prints", desc: "Every guest, every session, the whole reception." },
      { title: "Attendant included", desc: "Someone runs it so your families do not have to." },
      { title: "Designed for you", desc: "Print template with your names and date, not a dropdown." },
      { title: "Insured", desc: "Same-day COIs for any New Jersey venue that asks." },
    ],
    prose: [
      {
        heading: "What it actually changes about the evening",
        paragraphs: [
          "The honest case for a wedding photo booth is not the photographs, lovely as they are. It is that a booth gives the two-thirds of your guests who are not dancing something to do, in the same room, at the same time — which is the difference between a reception that thins out at ten and one that does not.",
          "It also collects the moments your photographer cannot be in two places for. Your college friends and your aunt, in the same frame, at eleven at night, without anyone organising it.",
        ],
      },
      {
        heading: "Choosing between them",
        paragraphs: [
          "The Magic Mirror remains the classic wedding choice, and the reason is the print: a physical keepsake with your names and date, in a guest's hand before they walk away. Many end up inside cards on the night.",
          "For a black-tie wedding, the glam booth often wins — the black-and-white treatment reads as part of the photography rather than as a novelty. For a minimal, modern room, Mirror X does the same job as the mirror without the ornament. And where floor space is genuinely tight, the roaming booth reaches guests a static setup never would.",
        ],
      },
      {
        heading: "The backdrop matters more than people expect",
        paragraphs: [
          "It is easy to spend the budget on the booth and leave it standing against a hotel curtain. The backdrop fills most of the frame in every photograph taken all night, and a floral wall changes all of them.",
          "We have over thirty handmade walls, from soft blush and ivory through to deep monochrome. Tell us the palette and the room and we will suggest which one actually suits it.",
        ],
      },
      {
        heading: "Where in New Jersey",
        paragraphs: [
          "Statewide, and the recommendation genuinely changes with the region. Bergen County ballrooms take guest counts high enough that one booth is not enough. Essex County's estate venues reward restraint. Monmouth and Ocean bring outdoor and bayfront planning — wind, salt air and a sunset worth timing the booth around.",
          "Travel is quoted from your venue's ZIP code before you book and never added afterwards.",
        ],
      },
    ],
    experiences: [
      "magic-mirror",
      "glam-booth",
      "flower-wall",
      "mirror-x",
      "360-photo-booth",
      "champagne-wall",
    ],
    gallery: [
      { src: "/img/wedding-hero.jpg", alt: "Wedding guests at a reception photo booth" },
      { src: "/img/wedding-booth-1.jpg", alt: "Wedding photo booth setup with a floral backdrop" },
      { src: "/img/wedding-booth-2.jpg", alt: "Guests posing at a wedding photo booth" },
      { src: "/img/wedding-booth-3.jpg", alt: "Wedding reception photo booth prints" },
      { src: "/img/flower-wall-8.jpg", alt: "Floral backdrop wall at a wedding reception" },
      { src: "/img/glam-booth-2.jpg", alt: "Glam booth setup with beauty lighting at a wedding" },
    ],
    faqs: [
      {
        q: "How long should we book the booth for?",
        a: "Three to four hours covers most receptions. The sweet spot is opening it after dinner and running it to the end — before dinner it competes with the meal, and the last hour is when the best photographs happen.",
      },
      {
        q: "Which booth is best for a wedding?",
        a: "The Magic Mirror for most, because the printed keepsake with your names and date is the thing guests keep. The glam booth for black tie, Mirror X for a minimal modern room, and the roaming booth where floor space is genuinely tight.",
      },
      {
        q: "Can the prints have our names and date on them?",
        a: "Yes — the template is designed for your wedding rather than chosen from a dropdown, and we proof it with you before the day.",
      },
      {
        q: "Will our venue need a certificate of insurance?",
        a: "Almost certainly, and we issue them the same day from a $3 million policy. Send us the venue's requirements when you have them and it never becomes a last-minute problem.",
      },
      {
        q: "Do you cover the shore and outdoor venues?",
        a: "Yes, with proper planning. Outdoor and bayfront placements need shade or cover, weighting against wind, and an agreed wet-weather fallback. At a bayfront venue we will usually suggest timing the booth around sunset.",
      },
    ],
  },

  {
    slug: "special-events",
    name: "Special Events",
    meta: {
      title: "Party Photo Booth Rental New Jersey | Sweet 16s, Mitzvahs & More",
      description:
        "Photo booth rental for New Jersey celebrations — Sweet Sixteens, bar and bat mitzvahs, quinceañeras, milestone birthdays, showers, graduations and anniversaries.",
    },
    h1: "Special Events & Celebrations",
    heroSub:
      "Sweet Sixteens, bar and bat mitzvahs, quinceañeras, milestone birthdays, showers, graduations and anniversaries — the events where the booth is frequently the thing the guest of honour asked for first.",
    heroImg: {
      src: "/img/special-hero.jpg",
      alt: "Guests celebrating at a party photo booth",
    },
    tone: "ivory",
    checklist: [
      { title: "Unlimited everything", desc: "Sessions and prints, for as long as you have booked." },
      { title: "Props, kept in order", desc: "A curated table the attendant tidies all night." },
      { title: "Instant sharing", desc: "On their phone before they have left the booth." },
      { title: "Custom design", desc: "Print template built for the occasion." },
    ],
    prose: [
      {
        heading: "Different crowds want different things",
        paragraphs: [
          "A fifteen-year-old's Sweet Sixteen and a sixtieth birthday are not the same job even when the booth looks identical in the corner. The younger the crowd, the more the video experiences win — the 360 and the Vogue booth are consistently what gets requested, because the output is what they intend to post.",
          "An older or more mixed room usually wants the mirror, and specifically wants prints. Something to hold, something to take home, something to put on a fridge. If your guest list spans both, running two experiences is genuinely the answer rather than an upsell.",
        ],
      },
      {
        heading: "Mitzvahs and quinceañeras",
        paragraphs: [
          "Both tend to run long, with a wide age range and a lot of energy in the middle of the evening. The on-screen signing on the mirror does a lot of work here — every guest leaves a written message on their own photograph, which becomes a keepsake in a way a plain print does not.",
          "The mosaic wall is the other strong choice: guests build a single large image across the night, and the finished wall goes home with the family.",
        ],
      },
      {
        heading: "Showers, graduations and anniversaries",
        paragraphs: [
          "Smaller, often daytime, frequently in a room that is tighter than expected. The enclosed booth fits where a mirror will not, and a floral wall turns an ordinary function room into something worth photographing against.",
          "For an anniversary, the studio booth produces the group portraits families actually frame — without pulling anyone away for a formal shoot.",
        ],
      },
    ],
    experiences: [
      "360-photo-booth",
      "magic-mirror",
      "vogue-booth",
      "mosaic-wall",
      "enclosed-photo-booth",
      "magazine-booth",
    ],
    gallery: [
      { src: "/img/special-hero.jpg", alt: "Guests at a celebration photo booth" },
      { src: "/img/360-booth-5.jpg", alt: "360 photo booth platform at a party" },
      { src: "/img/mosaic-3.jpg", alt: "Guest placing a photo sticker on a mosaic wall" },
      { src: "/img/mirror-booth-5.jpg", alt: "Guest signing their print on the magic mirror screen" },
      { src: "/img/vogue-booth-7.jpg", alt: "Guests posing inside the Vogue booth at a celebration" },
      { src: "/img/enclosed-booth-3.jpg", alt: "Guests inside an enclosed photo booth" },
    ],
    faqs: [
      {
        q: "What works best for a Sweet Sixteen?",
        a: "The 360 booth, almost always — it is the most requested single thing we bring to that crowd, because the output is video and video is what they intend to post. The Vogue booth runs it close.",
      },
      {
        q: "Our guest list spans every age. One booth or two?",
        a: "Two, honestly. The younger half wants video and the older half wants prints, and a single experience always disappoints one of them. A 360 plus a mirror covers a mixed room properly.",
      },
      {
        q: "Are props included?",
        a: "Yes, a curated table — and the attendant keeps it in order through the night rather than letting it become a jumble by nine o'clock, which is the part that actually matters.",
      },
      {
        q: "Can we have the prints personalised?",
        a: "Yes. The template is designed for the occasion — a name, a date, a monogram, a theme — and proofed with you beforehand.",
      },
    ],
  },
];
