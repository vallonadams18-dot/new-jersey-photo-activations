import type { Guide } from "./types";

/**
 * Six guides, each answering a question a New Jersey planner actually asks
 * before booking. Deliberately not "blog posts" — they exist to be useful
 * enough to earn the link, and every one of them is specific to this state.
 */
export const guides: Guide[] = [
  {
    slug: "nj-venue-coi-requirements",
    meta: {
      title: "Certificate of Insurance Requirements at New Jersey Venues",
      description:
        "What New Jersey venues actually ask for on a certificate of insurance, who has to be named, and the deadlines that cannot be rushed — towers, campuses, universities and convention floors.",
    },
    h1: "Certificates of Insurance at New Jersey Venues",
    date: "2026-08-25",
    excerpt:
      "The paperwork that stops a booth getting into a building — who has to be named, what the limits usually are, and the one deadline that genuinely cannot be moved.",
    heroImg: {
      src: "/img/corporate-hero.jpg",
      alt: "Corporate event venue set up for a reception",
    },
    body: [
      {
        heading: "What a COI actually is",
        paragraphs: [
          "A certificate of insurance is a one-page document from a supplier's insurer confirming that the supplier carries liability cover, at what limit, and naming the parties protected by it. Venues ask for one because if a guest trips over a supplier's cable, the venue wants that supplier's insurer answering rather than its own.",
          "It is not a contract and it is not negotiable in the way people sometimes assume. If a venue requires it, no certificate means no access — and it is a genuinely common reason suppliers get turned away at a loading dock.",
        ],
      },
      {
        heading: "Who has to be named, by venue type",
        paragraphs: [
          "Hotels and catering halls are usually the simplest: the venue's legal entity, named as additional insured. A ballroom in Bergen or Union County will typically want nothing more complicated than that.",
          "Corporate towers are stricter, and Jersey City's waterfront buildings are the clearest example. An Exchange Place or Harborside address commonly needs three parties named — the tenant company holding the event, the building owner, and the property management company. Get all three names spelled correctly from the venue rather than guessing.",
          "Universities — Rutgers, Kean, Princeton, NJIT — have their own wording and often their own required limits, and their requirements close earlier than a hotel's. Convention floors add another party again: the decorator, alongside the venue, is standard at Edison, the Meadowlands and Atlantic City.",
        ],
      },
      {
        heading: "The limits you will usually see",
        paragraphs: [
          "A million dollars per occurrence is the common floor. Larger venues, arenas, universities and convention centres frequently want more, and a few specify additional coverage types on top of general liability.",
          "We carry a $3 million policy, which covers the requirements we encounter across New Jersey. If a venue asks for something unusual, the time to find out is at booking rather than in the week of the event.",
        ],
      },
      {
        heading: "The deadline that cannot be rushed",
        paragraphs: [
          "Certificates themselves are quick — we issue them the same day they are requested. What cannot be compressed is anything involving credentials: security badging on a pharmaceutical campus in Parsippany, vendor registration at an Atlantic City casino property, or a scheduled dock slot in a Jersey City tower.",
          "Those windows close days before the event and they do not reopen for a supplier who was late. If you take one thing from this guide: ask your venue for its full supplier requirements at the moment you book the room, not the month of the event.",
        ],
      },
      {
        heading: "A short checklist to send your venue",
        paragraphs: [
          "Ask for four things in one email: the exact legal names of every party to be listed as additional insured, the required limits, the deadline for lodging the certificate, and whether any separate badging, vehicle registration or dock booking is needed. Four answers, and the whole issue disappears.",
          "Send us those answers and we handle the rest as routine.",
        ],
      },
    ],
    faqs: [
      {
        q: "How quickly can you issue a COI?",
        a: "Same day it is requested. The certificate is never the bottleneck — badging and dock scheduling are, because those close before the event rather than on it.",
      },
      {
        q: "What limits do you carry?",
        a: "A $3 million policy, which meets the requirements we see across New Jersey venues, including universities and convention floors.",
      },
      {
        q: "Our venue wants the decorator named too. Is that normal?",
        a: "Entirely normal on a convention floor. Edison, the Meadowlands and Atlantic City all commonly require the decorator listed alongside the venue. Send us the exhibitor kit and we will name whoever it specifies.",
      },
    ],
    related: [
      { href: "/corporate-events", title: "Corporate Events", desc: "How we work inside venue and building requirements." },
      { href: "/trade-shows", title: "Trade Shows", desc: "Exhibitor kits, marshalling and decorator paperwork." },
      { href: "/locations/jersey-city", title: "Jersey City", desc: "Where three-party COIs are the norm." },
    ],
  },

  {
    slug: "what-drives-photo-booth-pricing",
    meta: {
      title: "What Actually Drives Photo Booth Pricing in New Jersey",
      description:
        "An honest breakdown of what moves the price of a photo booth or brand activation in New Jersey — hours, staffing, branding lead time, travel and the extras that quietly cost the most.",
    },
    h1: "What Actually Drives the Price",
    date: "2026-08-25",
    excerpt:
      "Why two quotes for 'a photo booth' can differ by a factor of three, and which of the variables are worth paying for.",
    heroImg: {
      src: "/img/studio-booth-hero.jpg",
      alt: "On-site studio portrait setup with professional lighting",
    },
    body: [
      {
        heading: "Why quotes vary so wildly",
        paragraphs: [
          "Ask five companies for a photo booth price and the range will be enormous, because 'photo booth' describes everything from a tablet on a tripod with no operator to a robotic camera arm with a two-person crew. The word is doing no work at all.",
          "What follows is what genuinely moves the number, so you can read a quote and understand what you are and are not being given.",
        ],
      },
      {
        heading: "The variables that matter most",
        paragraphs: [
          "**Which experience.** The single biggest factor. A Glambot or a full branded activation involves hardware, crew and preparation that an enclosed booth does not. A roaming attendant sits in between.",
          "**Hours on site.** Most receptions run three to four hours of booth time. Setup and breakdown are additional to that and should not be counted as part of your hours — if a quote is vague on this, ask directly.",
          "**Whether an attendant is included.** This is the line most worth interrogating. An unattended booth is meaningfully cheaper and meaningfully worse: nobody starts the queue, the props table degrades within an hour, and when the printer jams at nine it stays jammed. Every rental we do includes a trained operator for the full booking.",
          "**Printing.** Unlimited prints for every guest, every session, costs consumables all night. A quote with a print cap is a different product from one without, and the cap is often buried.",
          "**Branding and lead time.** Digital branding — start screen, overlays, gallery — is comparatively quick. A full physical wrap needs two to three weeks and real production work, and it prices accordingly.",
          "**Travel.** Should be quoted from your venue's ZIP code before you book, and never added afterwards. Atlantic City and Long Beach Island are genuinely longer runs than Jersey City, and an honest quote says so up front rather than surprising you.",
        ],
      },
      {
        heading: "The things that quietly cost you more",
        paragraphs: [
          "Guest count above roughly 250 is the most common one. A single booth in a 400-person Bergen County ballroom produces a queue that never clears, and the honest answer is two experiences rather than one — which costs more and is still the right call.",
          "Outdoor and bayfront placements are the other. Weighting, weather contingency, power distribution from a distant supply and a covered position all take time and equipment that an indoor ballroom does not.",
          "Custom fabrication beyond a wrap — a built set, a step-and-repeat, a themed structure — is a design and build job and is priced as one.",
        ],
      },
      {
        heading: "What we would tell you to prioritise",
        paragraphs: [
          "If the budget is tight, protect the attendant and the unlimited prints before anything else. Those two decide whether the booth is busy and whether guests leave with something, and no amount of clever hardware compensates for losing either.",
          "Spend what is left on the backdrop rather than on upgrading the machine. The backdrop fills most of the frame in every photograph taken all night.",
        ],
      },
      {
        heading: "Getting a real number",
        paragraphs: [
          "Tell us the date, the venue's ZIP code, roughly how many guests and what kind of event it is, and we will come back with real pricing for the experience that actually suits the room — travel included, nothing hidden. If a cheaper experience would serve you better, we will say so.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is travel charged separately?",
        a: "It is quoted from your venue's ZIP code before you book and never added afterwards. Longer runs — Atlantic City, Long Beach Island — cost more and the quote says so up front.",
      },
      {
        q: "Are prints really unlimited?",
        a: "Yes — every guest, every session, for the whole booking. Print caps are common elsewhere and frequently buried in the terms, so it is worth asking any supplier directly.",
      },
      {
        q: "Do you charge for setup and breakdown time?",
        a: "Setup and breakdown are not counted against your booked hours. We arrive an hour before your start time and set up in around twenty minutes, so the booth is tested and ready before your first guest sees it.",
      },
    ],
    related: [
      { href: "/get-a-quote", title: "Get a Quote", desc: "Real pricing for your date, venue and guest count." },
      { href: "/experiences", title: "All Experiences", desc: "What each one does and what it needs." },
      { href: "/guides/photo-booth-space-requirements", title: "Space Requirements", desc: "What fits in the room you actually have." },
    ],
  },

  {
    slug: "photo-booth-space-requirements",
    meta: {
      title: "Photo Booth Space Requirements | What Fits in Your Venue",
      description:
        "How much floor space each photo booth experience needs, what to do when your New Jersey venue has none, and the measurements worth checking before you book.",
    },
    h1: "How Much Space Each Experience Needs",
    date: "2026-08-25",
    excerpt:
      "Ten by ten is the usual answer. Here is what to do when your venue cannot give you that — and the three measurements worth taking before you book anything.",
    heroImg: {
      src: "/img/mirror-x-hero.jpg",
      alt: "Frameless photo booth set up in an event space",
    },
    body: [
      {
        heading: "The short version",
        paragraphs: [
          "Most static experiences — the Magic Mirror, Mirror X, glam, green screen, magazine, GIF and the studio booth — want ten by ten feet, with eight by eight as the working minimum. That covers the hardware, the backdrop, and enough room for a group of six to arrange themselves without backing into a wall.",
          "The 360 booth needs eight by eight feet genuinely clear for the platform and the arm's orbit, plus meaningful space around that for the crowd it attracts. The second part is what venues consistently underestimate.",
          "The enclosed booth takes a compact cabinet footprint and can sit flat against a wall with no clearance behind it. The roaming booth needs no floor space at all. The Glambot needs more clearance than anything else here and we survey it against your floor plan rather than quoting a number.",
        ],
      },
      {
        heading: "Three measurements worth taking",
        paragraphs: [
          "**Ceiling height.** The one people forget. A 360 platform puts guests at standing height on a raised surface with an arm orbiting above them, and a low function-room ceiling makes it unworkable. Converted lofts and warehouse spaces are generous; older hotel function rooms often are not.",
          "**The narrowest point on the route in.** Not the room — the route. Doorways, service corridors, lift cars and stair turns decide what can physically reach the space. A room with ample floor and a narrow service lift is a room where large equipment does not arrive.",
          "**The distance to a reliable power supply.** Especially outdoors and at bayfront or beach venues, where the nearest usable outlet can be a long run away.",
        ],
      },
      {
        heading: "When the venue simply has no room",
        paragraphs: [
          "This is common in Hoboken, in Red Bank, in Ironbound restaurant rooms and in brownstone receptions — venues that were never designed for events and where every square foot is already spoken for.",
          "The roaming booth solves it outright: an attendant works the room with a handheld system, needs no footprint, and reaches more of the guest list than a static booth would. Where a static booth does fit but only just, the enclosed cabinet is usually the honest recommendation over a mirror.",
        ],
      },
      {
        heading: "Placement matters as much as size",
        paragraphs: [
          "A correctly sized booth in the wrong place does a fraction of the business. Put it on the natural route between the bar and the tables, in sight of the room, and it stays busy. Put it in a corridor or a side room and it gets used by whoever walks past.",
          "Ask your venue where guests actually congregate. They run events every week and they know.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the absolute minimum space for a mirror booth?",
        a: "Eight by eight feet. Ten by ten is comfortable. Below eight by eight, groups cannot arrange themselves and the photographs suffer.",
      },
      {
        q: "Our room has a low ceiling. What should we avoid?",
        a: "The 360 booth, primarily — it raises guests onto a platform with an arm orbiting above them. Tell us the ceiling height and we will tell you honestly whether it works.",
      },
      {
        q: "We have no floor space at all. Is a booth still possible?",
        a: "Yes — the roaming booth needs none. An attendant works the room with a handheld system, which is why it is the most-booked experience we bring into Hoboken and other tight-venue markets.",
      },
    ],
    related: [
      { href: "/experiences/roaming-photo-booth", title: "Roaming Booth", desc: "The answer when there is no floor space." },
      { href: "/experiences/enclosed-photo-booth", title: "Enclosed Booth", desc: "Compact footprint, sits against a wall." },
      { href: "/locations/hoboken", title: "Hoboken", desc: "Where space is the constraint every time." },
    ],
  },

  {
    slug: "trade-show-stand-checklist",
    meta: {
      title: "Trade Show Stand Checklist | New Jersey Exhibition Floors",
      description:
        "A practical checklist for running a photo activation on a New Jersey trade show floor — Edison, Meadowlands and Atlantic City exhibitor kits, marshalling, staffing and lead capture.",
    },
    h1: "Running a Photo Activation on a Show Floor",
    date: "2026-08-25",
    excerpt:
      "Exhibitor kits, marshalling, decorator paperwork and the staffing decision that determines whether your stand is busy at eleven on the second morning.",
    heroImg: {
      src: "/img/trade-show-hero-2.jpg",
      alt: "Exhibition stand with an interactive photo experience",
    },
    body: [
      {
        heading: "Read the exhibitor kit first, not last",
        paragraphs: [
          "Everything about working a show floor flows from the exhibitor kit. It sets your load-in window, the marshalling procedure, whether the general contractor handles material handling, what can be brought in by hand, and who the certificate of insurance has to name — commonly the decorator as well as the venue.",
          "It is also the document exhibitors most reliably skim. The load-in windows in it are fixed, they are enforced, and missing one means your stand is not built when the floor opens.",
        ],
      },
      {
        heading: "New Jersey's three main floors",
        paragraphs: [
          "The New Jersey Convention and Exposition Center in Edison is the state's principal exhibition venue — 155,000 square feet, at the convergence of the Turnpike, Route 1 and the Northeast Corridor line.",
          "The Meadowlands Exposition Center in Secaucus is smaller and sits minutes from the Turnpike in Hudson County, which makes it the practical choice for shows drawing from North Jersey and New York.",
          "The Atlantic City Convention Center anchors the south, and adds casino-property vendor rules if any of your programme spills into the resorts. Those clearances close well before the show.",
        ],
      },
      {
        heading: "Static or roaming — the decision that matters",
        paragraphs: [
          "Footfall on an exhibition floor spreads across a full day rather than concentrating into an evening. A static booth is therefore idle through long stretches and swamped in short ones.",
          "A roaming attendant works continuously, reaches attendees stopped at neighbouring stands, and takes no space out of your footprint. For a multi-day show it usually outperforms a static booth outright. The strongest stands run both — a branded static booth for the peaks, a roamer for everything else.",
        ],
      },
      {
        heading: "Capture the lead inside the interaction",
        paragraphs: [
          "Put the opt-in inside the sharing step rather than in front of the experience. An attendee giving an email address to receive something they want converts far better than one being taxed before they are allowed to participate, and the consent is unambiguous either way.",
          "Every capture carries your overlay, so the asset keeps working after the floor closes. After the show you should expect the full opt-in list, the gallery, and sessions, shares and opt-in rate broken down by day.",
        ],
      },
      {
        heading: "Staffing across multiple days",
        paragraphs: [
          "Your team should be having conversations, not operating equipment. Every show day should be staffed by a trained operator who sets up before the floor opens and breaks down after close.",
          "That also solves the second-morning problem — the point at which under-resourced stands visibly sag and the busy ones keep drawing traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we send you the exhibitor kit?",
        a: "As soon as you receive it. It defines load-in, marshalling, material handling and the insurance naming requirements, and several of those have deadlines that close before the show.",
      },
      {
        q: "Do you staff every day of the show?",
        a: "Yes. Setup before the floor opens, a trained operator for every show day, breakdown after close. Your team never touches equipment.",
      },
      {
        q: "How do we get the leads?",
        a: "As a full opt-in list after the show, with the gallery and a report of sessions, shares and opt-in rate by day.",
      },
    ],
    related: [
      { href: "/trade-shows", title: "Trade Shows", desc: "How the whole programme comes together." },
      { href: "/locations/middlesex-county", title: "Middlesex County", desc: "Edison and the state's main exhibition floor." },
      { href: "/experiences/roaming-photo-booth", title: "Roaming Booth", desc: "Why it usually wins a multi-day show." },
    ],
  },

  {
    slug: "when-to-open-the-booth-at-a-wedding",
    meta: {
      title: "When to Open the Photo Booth at a Wedding | Timing Guide",
      description:
        "When in a New Jersey wedding reception the photo booth should open, how long to book it for, and why bayfront and shore venues should time it around sunset.",
    },
    h1: "When to Open the Booth",
    date: "2026-08-25",
    excerpt:
      "Booth timing decides how much use you get out of it. The answer is later than most couples assume — and at a shore venue, it should follow the sun.",
    heroImg: {
      src: "/img/wedding-hero.jpg",
      alt: "Wedding reception with guests at a photo booth",
    },
    body: [
      {
        heading: "The short answer",
        paragraphs: [
          "Open it after dinner and run it to the end of the night. Three to four hours covers almost every reception, and those are the hours where a booth is genuinely busy rather than politely used.",
          "Before dinner it competes with a meal nobody wants to leave. During speeches it is dead. The last hour, when the formal part is finished and the room has loosened, is where the photographs everyone keeps actually happen.",
        ],
      },
      {
        heading: "Why cocktail hour is the exception",
        paragraphs: [
          "There is one strong argument for running something during cocktail hour, and it is the roaming booth. Guests are standing, circulating and freshly arrived, and an attendant moving through the room catches the relatives who will never join a queue later.",
          "A static booth during cocktail hour is usually a waste of an hour you have paid for. A roamer during cocktail hour is often the best hour of the night.",
        ],
      },
      {
        heading: "At a shore or bayfront venue, follow the sun",
        paragraphs: [
          "Along the Monmouth and Ocean County waterfront — Spring Lake, Long Branch, Point Pleasant, Manahawkin, Long Beach Island — the venues were chosen for a western view over the water. The hour before sunset is the best light those rooms will ever have, and it is free.",
          "If your timeline has any flexibility at all, position the booth so the water stays in frame and open it into that window. It is the single cheapest improvement available to every photograph taken that night.",
        ],
      },
      {
        heading: "Guest count changes the maths",
        paragraphs: [
          "Above roughly 250 guests, a single booth over three hours cannot physically serve the room — the queue never clears and a large share of your guests never reach it. In Bergen County ballrooms in particular, where four hundred is unremarkable, the honest answer is two experiences placed apart, or a static booth plus a roamer covering the far tables.",
          "It costs more. It is still the right call, and we would rather say so at booking than have you discover it at ten o'clock.",
        ],
      },
      {
        heading: "A workable running order",
        paragraphs: [
          "Cocktail hour: roaming booth through the room. Dinner and speeches: nothing. Immediately after dinner: static booth opens, and stays open until the end.",
          "That covers the whole evening, reaches every guest, and puts the equipment where it does the most work at each point in the night.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many hours should we book?",
        a: "Three to four for most receptions, opening after dinner. Setup and breakdown sit outside those hours — we arrive an hour before your start time.",
      },
      {
        q: "Should we run the booth during cocktail hour?",
        a: "Only the roaming booth. A static booth during cocktail hour tends to waste an hour you have paid for; a roamer during that hour is frequently the most productive part of the night.",
      },
      {
        q: "We are expecting 350 guests. Is one booth enough?",
        a: "No. Above roughly 250 the queue stops clearing and a meaningful part of the room never gets to use it. Two experiences placed apart, or a static booth plus a roamer, is the honest recommendation.",
      },
    ],
    related: [
      { href: "/weddings", title: "Weddings", desc: "Choosing the right experience for your reception." },
      { href: "/locations/monmouth-county", title: "Monmouth County", desc: "Shore venues and outdoor planning." },
      { href: "/experiences/roaming-photo-booth", title: "Roaming Booth", desc: "The cocktail hour answer." },
    ],
  },

  {
    slug: "measuring-a-brand-activation",
    meta: {
      title: "How to Measure a Brand Activation | Photo Experience Metrics",
      description:
        "The numbers worth reporting from a photo-led brand activation — sessions, share rate, opt-in rate and earned reach — and how to design the experience so they are collectable.",
    },
    h1: "Measuring a Brand Activation",
    date: "2026-08-25",
    excerpt:
      "How to defend an experiential line item with numbers rather than an anecdote about how busy the stand looked.",
    heroImg: {
      src: "/img/branded-hero-2.jpg",
      alt: "Branded photo activation at a corporate event",
    },
    body: [
      {
        heading: "The problem with experiential reporting",
        paragraphs: [
          "Experiential marketing has a measurement problem, and everybody in it knows. The activation felt busy, the photographs look great, the client enjoyed it — and none of that survives contact with a finance review asking what the money bought.",
          "A photo-led activation is unusually well placed to fix this, because every meaningful interaction leaves a record. The trick is designing for that before the event rather than trying to reconstruct it afterwards.",
        ],
      },
      {
        heading: "Four numbers worth having",
        paragraphs: [
          "**Sessions.** How many discrete interactions the experience produced. The rawest measure of whether the footprint pulled people in, and the one to compare against footfall past the stand.",
          "**Share rate.** What proportion of sessions ended with the guest sending the asset to themselves. This is the real engagement signal — a session that ends without a share is someone who was curious but not moved.",
          "**Opt-in rate.** What proportion gave a contact detail. Directly comparable across activations and the number most likely to interest whoever holds the budget.",
          "**Earned reach.** Harder, and worth estimating rather than ignoring: shared branded assets landing in feeds of people who trust the sharer. Not a number to over-claim, but the mechanism is the whole point of the channel.",
        ],
      },
      {
        heading: "Design decisions that change the numbers",
        paragraphs: [
          "Put the opt-in inside the sharing step, never in front of the experience. Asking for an email before someone is allowed to participate suppresses both participation and opt-in; asking as part of delivering something they already want does the opposite.",
          "Give guests a decision to make on screen — a style, a background, a frame. Interactions with a choice in them hold attention longer and produce a visibly higher share rate than ones without.",
          "Brand the asset itself rather than the surroundings. A branded environment photographs once; a branded asset travels indefinitely.",
        ],
      },
      {
        heading: "Add a question while you have their attention",
        paragraphs: [
          "The on-screen journey can carry a short survey or a single-question poll. At the moment a guest is engaged and waiting a few seconds for a result, response rates are far higher than any post-event email will achieve.",
          "One well-chosen question — a preference, a purchase intent, a prompted awareness check — turns an activation into a small piece of research at no extra cost in guest time.",
        ],
      },
      {
        heading: "What you should expect afterwards",
        paragraphs: [
          "The full opt-in list, the complete gallery, and sessions, shares and opt-in rate broken down by day for multi-day programmes. That is what we hand over as standard.",
          "If a supplier cannot tell you in advance what they will report, assume the answer is nothing.",
        ],
      },
    ],
    faqs: [
      {
        q: "What do you report after an activation?",
        a: "Sessions, shares and opt-in rate, broken down by day for multi-day programmes, plus the full opt-in contact list and the complete gallery.",
      },
      {
        q: "Should we ask for the email before or after the experience?",
        a: "After, inside the sharing step. Gating the experience behind a data capture suppresses participation and opt-in rate at the same time.",
      },
      {
        q: "Can we run a survey through the booth?",
        a: "Yes. Short questionnaires and single-question polls build into the on-screen journey, and responses come back in the same post-event report.",
      },
    ],
    related: [
      { href: "/brand-activations", title: "Brand Activations", desc: "How a full activation comes together." },
      { href: "/experiences/branded-photo-booth", title: "Branded Booth", desc: "Wrap, overlays, microsite and capture." },
      { href: "/experiences/ai-photo-booth", title: "AI Photo Booth", desc: "The experience that produces the longest queue." },
    ],
  },
];
