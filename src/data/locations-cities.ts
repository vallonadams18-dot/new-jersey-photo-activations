import type { Location } from "./types";

/**
 * City pages. These are the money pages — each one has to name real venues,
 * real neighbourhoods and at least one thing that is only true here. The test
 * every one of these has to pass: swap the city name out and the page should
 * stop making sense.
 *
 * Venues are named as public landmarks of the local event scene. Nothing here
 * claims a partnership, a preferred-vendor listing or any relationship we do
 * not have.
 */
export const locationCities: Location[] = [
  {
    slug: "jersey-city",
    name: "Jersey City",
    kind: "city",
    meta: {
      title: "Photo Booth Rental Jersey City NJ | Corporate & Wedding Booths",
      description:
        "Luxury photo booth and interactive event experiences in Jersey City. Waterfront venues, Exchange Place towers and Powerhouse Arts lofts — branded activations, weddings and corporate events.",
    },
    h1: "Photo Booth Rental in Jersey City",
    heroSub:
      "The waterfront gives you the Manhattan skyline as a backdrop for nothing. We plan the booth around it — and around the freight elevator schedules that decide when anything gets into an Exchange Place tower.",
    heroImg: {
      src: "/img/corporate-hero.jpg",
      alt: "Photo booth at a corporate event reception",
    },
    intro: {
      heading: "Two different cities, depending on the block",
      paragraphs: [
        "Jersey City runs on two event economies that barely overlap. On the waterfront, Exchange Place and Newport are corporate towers and hotel ballrooms with skyline glass on one side — financial services, consulting, the kind of holiday party where a booth has to look like it belongs in the room. Inland, around the Powerhouse Arts District and Journal Square, converted industrial space carries a completely different crowd and a completely different brief.",
        "That split changes what we recommend. A tower reception at Harborside or the Hyatt Regency usually wants Mirror X or the studio setup — restrained, full-length, quiet against a designed room. A loft on Coles Street or a warehouse conversion has the ceiling height that makes the 360 and the Vogue booth worth the floor space they take.",
        "The skyline is the one thing every Jersey City venue has that a Manhattan venue does not, and it is worth building around. Waterfront rooms photograph best in the hour before sunset — if your timeline has any flexibility, opening the booth then is free production value.",
      ],
    },
    venues: [
      { name: "Maritime Parc", where: "Liberty State Park", note: "Full-height glass onto the harbour; the light in the main room is the reason to book it." },
      { name: "Battello", where: "Newport waterfront", note: "Skyline directly across the water — a booth placed with its back to the glass gets it in every frame." },
      { name: "The Liberty House", where: "Liberty State Park", note: "Statue and skyline views; outdoor space that changes what is possible in summer." },
      { name: "Hyatt Regency Jersey City", where: "Exchange Place", note: "Corporate ballroom on the water. Loading is via the building's dock — book the window early." },
      { name: "Harborside", where: "Exchange Place", note: "Event space inside a working office campus; freight access is scheduled rather than assumed." },
      { name: "Liberty State Park", where: "Jersey City waterfront", note: "Outdoor activations and marquees, with the park's own permitting timeline." },
    ],
    covers: [
      "Exchange Place",
      "Newport",
      "Paulus Hook",
      "The Waterfront",
      "Powerhouse Arts District",
      "Journal Square",
      "The Heights",
      "Grove Street",
      "Hamilton Park",
      "Bergen-Lafayette",
      "Liberty State Park",
      "Greenville",
    ],
    logistics: {
      heading: "What actually decides the load-in",
      paragraphs: [
        "In the waterfront towers, the constraint is never the room — it is the freight elevator and the dock. Buildings around Exchange Place and Harborside run scheduled loading windows and want a certificate of insurance naming the building and the management company before anyone is allowed up. We turn COIs around the same day they are requested, and we would rather have the building's requirements a fortnight out than on the morning.",
        "In the Powerhouse Arts District and around Journal Square the problem inverts. Ceiling height is generous and the rooms are forgiving, but access is often a single doorway, a service lift that predates the conversion, or a street with no legal standing space. We survey those in advance rather than arriving hopeful.",
        "Either way we arrive a full hour before the start time and set up in about twenty minutes, which leaves genuine margin for a building that decides to be difficult.",
      ],
    },
    experiences: [
      "mirror-x",
      "360-photo-booth",
      "branded-photo-booth",
      "studio-booth",
      "roaming-photo-booth",
      "vogue-booth",
    ],
    faqs: [
      {
        q: "Do you charge travel to Jersey City?",
        a: "Travel is quoted from your venue's ZIP code before you book and never added afterwards. Jersey City is a short run and it shows in the number.",
      },
      {
        q: "Can you handle the COI requirements at Exchange Place buildings?",
        a: "Yes. We carry a $3 million policy and issue certificates naming the venue, the building and the management company the same day they are requested. Send us the building's requirements as early as you can — the paperwork is rarely the problem, the lead time is.",
      },
      {
        q: "Which booth suits a waterfront venue with skyline views?",
        a: "Something full-length and open, so the glass stays in frame — Mirror X or the studio setup. Avoid an enclosed cabinet against a skyline window; you are paying for a view and then boxing it out.",
      },
      {
        q: "Do you cover Powerhouse Arts District lofts?",
        a: "Yes, and the ceiling height there is why the 360 and Vogue booths are worth it. We check access in advance — service lifts in converted industrial buildings are the usual constraint.",
      },
    ],
    nearby: ["hoboken", "hudson-county", "newark", "bergen-county"],
  },

  {
    slug: "hoboken",
    name: "Hoboken",
    kind: "city",
    meta: {
      title: "Photo Booth Rental Hoboken NJ | Wedding & Corporate Experiences",
      description:
        "Photo booth and interactive event experiences in Hoboken. Waterfront venues, Washington Street restaurants and Stevens campus events — plus the roaming booth for rooms with no floor space.",
    },
    h1: "Photo Booth Rental in Hoboken",
    heroSub:
      "A square mile with almost no loading dock in it. Hoboken rewards booths that fit the room you actually have — which is why more events here run the roamer than anywhere else in the state.",
    heroImg: {
      src: "/img/wedding-hero.jpg",
      alt: "Guests at a wedding reception photo booth",
    },
    intro: {
      heading: "The constraint is square footage, every time",
      paragraphs: [
        "Hoboken is a mile square and it behaves like it. The venues are restaurants, rooftops, brownstone floors, converted industrial rooms and the odd waterfront space — almost none of them purpose-built for events, and very few with a loading dock. What fits in a Bergen County ballroom does not fit here, and pretending otherwise is how a booth ends up blocking a fire exit.",
          "That is why the roaming booth does more work in Hoboken than in any other market we cover. It needs no floor space at all, the attendant moves through a restaurant buyout or a rooftop reception, and it reaches guests who would never queue. When a static booth does fit, the enclosed cabinet is usually the honest recommendation over a mirror — it takes a compact footprint and sits flat against a wall.",
        "The waterfront is the exception and it is worth using. Pier A, Pier C and the rooms facing east give you the same Manhattan skyline as Jersey City, and the same advice applies: open the booth in the hour before sunset.",
      ],
    },
    venues: [
      { name: "W Hoboken", where: "Hudson waterfront", note: "East-facing rooms with the skyline across the river; scheduled loading through the hotel." },
      { name: "Stevens Institute of Technology", where: "Castle Point", note: "Campus events with the best elevated view in the city; academic calendar dictates availability." },
      { name: "Pier A Park", where: "Hudson waterfront", note: "Outdoor activations and marquees with a full skyline backdrop, subject to city permitting." },
      { name: "Elysian Cafe", where: "Washington & 10th", note: "Restaurant buyout — a room where the roaming booth is usually the only thing that fits." },
      { name: "The Hoboken Historical Museum", where: "Hudson Street", note: "Converted industrial space; character-heavy and tight on circulation." },
    ],
    covers: [
      "Washington Street",
      "The Waterfront",
      "Pier A",
      "Pier C",
      "Castle Point",
      "Uptown Hoboken",
      "Downtown Hoboken",
      "The Shipyard",
      "Church Square",
      "Southwest Hoboken",
    ],
    logistics: {
      heading: "Parking is the whole conversation",
      paragraphs: [
        "There is effectively no unrestricted standing in Hoboken, and most venues have no dock. Load-in usually means a permitted spot arranged through the venue, or a tight window on a residential street. We plan it with the venue in advance because discovering it at six o'clock on a Saturday is how a setup slips.",
        "Stair access is common — brownstone floors and older buildings without a service lift. That is not a problem if we know about it, and it is a serious one if we do not. It is also the single best argument for the roaming booth, which walks in as one case.",
        "As everywhere, we arrive an hour early and set up in about twenty minutes. In Hoboken that hour is doing real work.",
      ],
    },
    experiences: [
      "roaming-photo-booth",
      "enclosed-photo-booth",
      "mirror-x",
      "glam-booth",
      "gif-booth",
      "magic-mirror",
    ],
    faqs: [
      {
        q: "Our venue has no floor space for a booth. What are the options?",
        a: "The roaming booth, almost certainly. It needs no footprint — an attendant works the room with a handheld system and covers more of the guest list than a static booth would. It is the most-booked experience we bring into Hoboken for exactly this reason.",
      },
      {
        q: "Can you get equipment into a walk-up venue?",
        a: "Yes, provided we know in advance. Stair access is common here and it changes what we bring and how long we allow. Tell us at booking rather than on the day.",
      },
      {
        q: "How does parking and load-in work?",
        a: "Usually a permitted spot arranged through your venue, or a short window on the street. We coordinate it with the venue ahead of time — Hoboken is not a city to improvise a load-in in.",
      },
      {
        q: "Which venues give the skyline backdrop?",
        a: "Anything east-facing on the waterfront — the W, the piers, and rooms along Sinatra Drive. Open the booth in the hour before sunset if your timeline allows it.",
      },
    ],
    nearby: ["jersey-city", "hudson-county", "bergen-county", "essex-county"],
  },

  {
    slug: "newark",
    name: "Newark",
    kind: "city",
    meta: {
      title: "Photo Booth Rental Newark NJ | Corporate & Cultural Venues",
      description:
        "Photo booth and brand activation experiences in Newark. NJPAC, Prudential Center, the Ironbound and downtown corporate venues — conference activations, galas and celebrations.",
    },
    h1: "Photo Booth Rental in Newark",
    heroSub:
      "The state's institutional and cultural centre — NJPAC, the Prudential Center, university events and downtown corporate floors, plus an Ironbound restaurant scene that runs on entirely different rules.",
    heroImg: {
      src: "/img/corporate-hero.jpg",
      alt: "Photo booth at a corporate event reception",
    },
    intro: {
      heading: "Institutional events, and then the Ironbound",
      paragraphs: [
        "Newark's event calendar is anchored by institutions in a way no other New Jersey city's is. NJPAC, the Prudential Center, Rutgers–Newark, NJIT and the downtown corporate towers produce conferences, galas, awards evenings and cultural programming with professional production teams already attached — which means the booth is one line in a run of show and has to behave like it.",
        "That is a different job from a private party. It means arriving to a schedule, working alongside AV and lighting crews, holding to a load-in window measured in minutes, and having the insurance paperwork already lodged. It also means the branding has to be right, because these rooms are photographed properly.",
        "The Ironbound is the counterweight — a dense restaurant district running weddings, christenings, quinceañeras and family celebrations at a scale and energy the downtown venues never see. Rooms are often long and narrow, which changes the recommendation entirely.",
      ],
    },
    venues: [
      { name: "New Jersey Performing Arts Center", where: "Downtown Newark", note: "Multiple event spaces alongside the main halls; a professional production environment with a fixed run of show." },
      { name: "Prudential Center", where: "Downtown Newark", note: "Arena hospitality and premium club spaces; credentialed access and scheduled loading." },
      { name: "Newark Museum of Art", where: "Washington Street", note: "Galleries and a garden court — beautiful, and with the handling rules a museum implies." },
      { name: "Robert Treat Hotel", where: "Park Place", note: "Traditional downtown ballroom running galas and association events." },
      { name: "Rutgers University–Newark", where: "University Heights", note: "Campus venues on an academic calendar; university insurance requirements apply." },
      { name: "The Ironbound", where: "East Newark", note: "Restaurant and banquet rooms, frequently long and narrow — layout matters more than square footage." },
    ],
    covers: [
      "Downtown Newark",
      "The Ironbound",
      "University Heights",
      "Newark Central Business District",
      "Forest Hill",
      "Branch Brook Park",
      "Weequahic",
      "North Ward",
      "Newark Penn Station area",
    ],
    logistics: {
      heading: "Working inside a run of show",
      paragraphs: [
        "At NJPAC, the Prudential Center and the museum, the booth is part of a schedule somebody else owns. Load-in windows are specific, access is credentialed, and there is usually an AV crew, a lighting crew and a house manager to work around. Send us the production schedule and the venue's requirements and we will fit into them rather than negotiating on the night.",
        "Certificates of insurance are non-negotiable at every one of these venues, and university and arena requirements are stricter than a hotel's. We carry a $3 million policy and issue same-day COIs naming whoever needs naming.",
        "In the Ironbound the issue is shape rather than paperwork. Long, narrow banquet rooms make a static booth a bottleneck at exactly the point guests need to circulate — which is usually an argument for the roamer, or for placing an enclosed booth at the end of the room rather than the middle.",
      ],
    },
    experiences: [
      "branded-photo-booth",
      "studio-booth",
      "roaming-photo-booth",
      "mirror-x",
      "mosaic-wall",
      "magic-mirror",
    ],
    faqs: [
      {
        q: "Can you work to a production schedule at NJPAC or the Prudential Center?",
        a: "Yes — that is the normal way we work in those rooms. Send the run of show and the venue's load-in window and we build around it. We arrive an hour early where the schedule allows it and set up in about twenty minutes.",
      },
      {
        q: "What insurance do Newark venues require?",
        a: "All the major venues require a certificate of insurance, and university and arena requirements are stricter than a hotel's. We carry a $3 million policy and issue same-day COIs naming the venue and any other party they specify.",
      },
      {
        q: "Our Ironbound venue is a long narrow room. What works?",
        a: "Either the roaming booth, which removes the bottleneck entirely, or an enclosed booth placed at the end of the room rather than partway down it. A large open booth mid-room in a narrow space blocks the circulation guests need.",
      },
      {
        q: "Do you cover conferences as well as parties?",
        a: "Yes, and conference work is a large part of what we do in Newark — headshot stations, branded activations and lead capture on the exhibition floor. The studio booth and the branded booth do most of that work.",
      },
    ],
    nearby: ["essex-county", "jersey-city", "hudson-county", "union-county"],
  },

  {
    slug: "princeton",
    name: "Princeton",
    kind: "city",
    meta: {
      title: "Photo Booth Rental Princeton NJ | University & Corporate Events",
      description:
        "Photo booth and interactive experiences in Princeton. University events, Nassau Street venues, Route 1 corporate campuses and country club weddings across the Princeton area.",
    },
    h1: "Photo Booth Rental in Princeton",
    heroSub:
      "A university calendar, a pharmaceutical corridor and a set of venues with genuine architectural constraints. Princeton rewards planning further ahead than anywhere else we work.",
    heroImg: {
      src: "/img/champagne-wall-hero.jpg",
      alt: "Champagne wall styled for an event reception",
    },
    intro: {
      heading: "Three calendars, one town",
      paragraphs: [
        "Princeton's event demand comes from three directions that rarely acknowledge each other. The university drives reunions, department events, conferences and a fiercely compressed graduation season. The Route 1 corridor — pharmaceutical, biotech and financial services campuses running from Plainsboro up towards Lawrence — produces corporate events with real production budgets. And the surrounding countryside carries a country club and estate wedding market.",
        "The practical consequence is that Princeton books out earlier than anywhere else in the state. Reunions weekend and graduation absorb everything within a wide radius, and a corporate date that collides with either is a date where every good venue is already gone.",
        "It also means the register is different. Princeton events skew formal and understated, which is why the studio booth, Mirror X and the glam treatment out-book the louder experiences here by a distance.",
      ],
    },
    venues: [
      { name: "Nassau Inn", where: "Palmer Square", note: "The town's traditional room, in continuous use since long before events were a category. Historic building, so access is careful." },
      { name: "Princeton University", where: "Central campus", note: "Reunions, department events and conferences; university insurance requirements and an academic calendar that overrides everything." },
      { name: "TPC Jasna Polana", where: "Province Line Road", note: "Former Johnson estate turned club — the high end of the local wedding market." },
      { name: "Princeton Marriott at Forrestal", where: "Forrestal Village", note: "The main conference hotel for the Route 1 corridor; purpose-built loading." },
      { name: "Drumthwacket", where: "Stockton Street", note: "The Governor's official residence; ceremonial and institutional events with the handling that implies." },
      { name: "Route 1 corporate campuses", where: "Plainsboro to Lawrence", note: "Pharmaceutical and biotech campuses with their own security, badging and dock procedures." },
    ],
    covers: [
      "Palmer Square",
      "Nassau Street",
      "Princeton University campus",
      "Forrestal Village",
      "Princeton Junction",
      "West Windsor",
      "Plainsboro",
      "Lawrenceville",
      "Hopewell",
      "Pennington",
      "Kingston",
      "Rocky Hill",
    ],
    logistics: {
      heading: "Historic buildings and corporate security",
      paragraphs: [
        "Several of the best rooms in Princeton are in genuinely historic buildings, and they come with the restrictions that implies: no wall fixings, careful floor protection, narrow doorways and stairs where a service lift would be in a modern venue. None of it is an obstacle if it is known in advance — all of it is if it is not.",
        "The Route 1 campuses run the opposite regime. Security badging, vehicle registration, dock scheduling and a certificate of insurance lodged days ahead. We handle that paperwork routinely, but the lead time is real: a same-day COI does not help if the badge request closed on Wednesday.",
        "Book earlier than you think you need to. Graduation and reunions weekends compress the entire local calendar, and they are the two dates where waiting costs you the venue as well as the booth.",
      ],
    },
    experiences: [
      "studio-booth",
      "mirror-x",
      "glam-booth",
      "branded-photo-booth",
      "magic-mirror",
      "flower-wall",
    ],
    faqs: [
      {
        q: "How far in advance should we book in Princeton?",
        a: "Earlier than elsewhere. Reunions weekend and graduation absorb venues and suppliers across a wide radius, and the surrounding country club wedding season is competitive on its own. If your date is near either, treat months rather than weeks as the planning horizon.",
      },
      {
        q: "Can you meet university insurance requirements?",
        a: "Yes. We carry a $3 million policy and issue certificates naming the university and any other party required. University requirements tend to be stricter and to close earlier than a hotel's, so send them to us as soon as you have them.",
      },
      {
        q: "What works in a historic venue with fixing restrictions?",
        a: "Free-standing setups that need nothing attached to a wall — the studio booth, Mirror X or an enclosed cabinet. We bring our own supports and floor protection, and we plan against the building's actual restrictions rather than assuming.",
      },
      {
        q: "Do you cover the Route 1 corporate campuses?",
        a: "Yes — Plainsboro through Lawrence is core territory. Those sites need badging and dock scheduling arranged in advance; give us the site's procedure and we will work to it.",
      },
    ],
    nearby: ["middlesex-county", "monmouth-county", "union-county", "morris-county"],
  },

  {
    slug: "atlantic-city",
    name: "Atlantic City",
    kind: "city",
    meta: {
      title: "Photo Booth Rental Atlantic City NJ | Convention & Casino Events",
      description:
        "Photo booth and brand activation experiences in Atlantic City. Convention Center trade shows, casino resort conferences and beachfront events — with union and casino load-in handled.",
    },
    h1: "Photo Booth Rental in Atlantic City",
    heroSub:
      "Convention floors, casino resort ballrooms and a boardwalk season. Atlantic City has the most demanding load-in rules in the state, and they are the first thing we plan rather than the last.",
    heroImg: {
      src: "/img/trade-show-hero-2.jpg",
      alt: "Branded photo experience on a trade show floor",
    },
    intro: {
      heading: "A convention city that happens to be at the shore",
      paragraphs: [
        "Atlantic City's event economy is built on the Atlantic City Convention Center and the casino resorts around it — trade shows, association conferences, corporate incentive programmes and the hospitality that surrounds them. That is a fundamentally different market from the rest of New Jersey, and it runs on rules the rest of the state does not have.",
        "Casino properties operate their own security, vendor registration and loading procedures. Convention floors add exhibitor kits, decorator requirements, marshalling yards and certificates of insurance that have to name the decorator as well as the venue. None of that is difficult, but all of it is inflexible, and it is why we ask for the exhibitor kit early rather than the week before.",
        "The seasonal layer sits on top: summer brings beachfront and boardwalk activations, brand programmes and a wedding market along the coast. Winter is almost entirely convention business.",
      ],
    },
    venues: [
      { name: "Atlantic City Convention Center", where: "Convention Boulevard", note: "The region's main exhibition floor. Exhibitor kit, decorator requirements and marshalling all apply." },
      { name: "Hard Rock Hotel & Casino", where: "Boardwalk", note: "Conference and ballroom space inside a casino property, with casino vendor procedures." },
      { name: "Borgata", where: "Marina District", note: "Large conference and event facilities; scheduled loading through the property's dock." },
      { name: "Ocean Casino Resort", where: "Boardwalk", note: "Ballrooms and ocean-facing event space; property security and badging." },
      { name: "Harrah's Waterfront Conference Center", where: "Marina District", note: "Purpose-built conference space — the most straightforward loading in the city." },
      { name: "The Boardwalk", where: "Atlantic City oceanfront", note: "Outdoor brand activations, subject to city and CRDA permitting." },
    ],
    covers: [
      "The Boardwalk",
      "Marina District",
      "Convention Center district",
      "Chelsea",
      "Ducktown",
      "Bader Field area",
      "Ventnor City",
      "Margate City",
      "Brigantine",
      "Absecon",
      "Egg Harbor Township",
    ],
    logistics: {
      heading: "Exhibitor kits, decorators and casino vendor rules",
      paragraphs: [
        "On the convention floor, send us the exhibitor kit as soon as you have it. It sets the load-in window, the marshalling procedure, whether the decorator handles material handling, and who the certificate of insurance has to name — frequently the venue and the decorator both. We handle our part of that paperwork as a matter of course, but only once we can see the requirements.",
        "Casino properties add vendor registration and security clearance on top, and those close well before the event. A same-day COI is genuinely same-day; a vendor badge is not.",
        "Atlantic City is also the longest run we make regularly, so travel is quoted from your venue's ZIP code before you book and never added after. For multi-day shows we set up before the floor opens, staff every show day, and break down after close — your team never touches equipment.",
      ],
    },
    experiences: [
      "roaming-photo-booth",
      "branded-photo-booth",
      "ai-photo-booth",
      "gif-booth",
      "studio-booth",
      "green-screen-photo-booth",
    ],
    faqs: [
      {
        q: "Do you handle Convention Center exhibitor requirements?",
        a: "Yes. Send us the exhibitor kit and we work to it — load-in window, marshalling, material handling and the certificate of insurance, which usually has to name the decorator as well as the venue.",
      },
      {
        q: "Can you get vendor access at the casino properties?",
        a: "Yes, with lead time. Casino vendor registration and security clearance close well before the event date, so this is the one piece of paperwork that cannot be done at the last minute. Tell us the property as early as possible.",
      },
      {
        q: "What works best on a multi-day trade show stand?",
        a: "The roaming booth, usually. Footfall on a show floor is spread across the day rather than concentrated, so a static booth sits idle through the quiet hours while a roamer keeps working the aisles. Many stands run a branded static booth alongside it for the busy periods.",
      },
      {
        q: "Is travel to Atlantic City extra?",
        a: "Travel is quoted from your venue's ZIP code before you book and never added afterwards. Atlantic City is one of the longer runs we make and the quote reflects that honestly rather than hiding it.",
      },
    ],
    nearby: ["ocean-county", "monmouth-county", "middlesex-county"],
  },
];
