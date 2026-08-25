import type { Location } from "./types";

/**
 * County pages are hubs, not city pages with a wider name.
 *
 * Their job is different on purpose: they map the venue *types* and the towns
 * inside a county and link down to the city pages, rather than repeating a
 * city page's argument at county scale. That is what stops a county page and
 * the city inside it from competing for the same search.
 */
export const locationCounties: Location[] = [
  {
    slug: "bergen-county",
    name: "Bergen County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Bergen County NJ | Ballrooms & Country Clubs",
      description:
        "Photo booth and event experiences across Bergen County — Paramus, Hackensack, Ridgewood, Englewood and the East Rutherford stadium district. Catering halls, country clubs and corporate events.",
    },
    h1: "Photo Booth Rental in Bergen County",
    heroSub:
      "New Jersey's densest concentration of large catering halls, plus the stadium and retail district at East Rutherford. Big rooms, purpose-built loading, and guest counts that change which booth actually copes.",
    heroImg: {
      src: "/img/mirror-booth-hero.jpg",
      alt: "Full length mirror photo booth set up in a ballroom",
    },
    intro: {
      heading: "The ballroom belt",
      paragraphs: [
        "If a New Jersey event has four hundred guests, there is a good chance it is happening in Bergen County. The county carries the state's heaviest concentration of large-format catering halls and country clubs — purpose-built rooms with dedicated loading, proper power, and the kind of capacity that changes what a photo booth has to do.",
        "That scale is the planning issue. A single mirror booth serving four hundred people produces a queue that never clears and a lot of guests who never reach it. Above roughly two hundred and fifty, we usually recommend two experiences in different parts of the room, or pairing a static booth with the roamer so the far tables are covered.",
        "The East Rutherford corner runs on completely different logic — stadium hospitality, the retail and entertainment complex, and corporate activations that come with credentialed access and their own security procedures.",
      ],
    },
    venues: [
      { name: "The Venetian", where: "Garfield", note: "One of the largest catering venues in the state; multiple rooms running simultaneously." },
      { name: "Edgewood Country Club", where: "River Vale", note: "Country club weddings and member events, with the seasonal calendar that implies." },
      { name: "The Rockleigh", where: "Rockleigh", note: "Multiple ballrooms on one estate site; loading is well organised." },
      { name: "MetLife Stadium", where: "East Rutherford", note: "Stadium hospitality and club spaces; credentialed access and scheduled loading." },
      { name: "American Dream", where: "East Rutherford", note: "Retail and entertainment activations, with mall operating hours governing load-in." },
      { name: "Seasons", where: "Washington Township", note: "Large-format catering hall running weddings and community events." },
    ],
    covers: [
      "Paramus",
      "Hackensack",
      "Ridgewood",
      "Englewood",
      "Fort Lee",
      "Edgewater",
      "Teaneck",
      "Fair Lawn",
      "East Rutherford",
      "Garfield",
      "Mahwah",
      "Rutherford",
      "Tenafly",
      "Closter",
      "River Vale",
      "Westwood",
    ],
    logistics: {
      heading: "Big rooms are the easy part",
      paragraphs: [
        "Bergen's catering halls are among the most straightforward venues in the state to work in — dedicated loading, service corridors, staff who run several events a week and know exactly where a supplier should be. Certificates of insurance are requested as routine and we issue them the same day.",
        "The genuine planning question is coverage, not access. Ask your venue where guests will actually congregate, because a booth placed correctly in a four-hundred-person room does several times the business of one placed near the exit.",
        "East Rutherford is the exception. Stadium and complex access is credentialed, scheduled and closes early — treat it like a convention floor rather than a ballroom.",
      ],
    },
    experiences: [
      "magic-mirror",
      "360-photo-booth",
      "roaming-photo-booth",
      "mirror-x",
      "mosaic-wall",
      "flower-wall",
    ],
    faqs: [
      {
        q: "We are expecting 400 guests. Is one booth enough?",
        a: "Usually not. Above roughly 250 the queue stops clearing and a meaningful part of the room never gets to the booth. Two experiences placed apart, or a static booth plus the roamer to cover the far tables, is the honest recommendation.",
      },
      {
        q: "Which towns do you cover in Bergen County?",
        a: "All of it — Paramus, Hackensack, Ridgewood, Englewood, Fort Lee, Edgewater, Teaneck, East Rutherford and everywhere between. Travel is quoted from your venue's ZIP code before you book.",
      },
      {
        q: "Can you work at MetLife Stadium or American Dream?",
        a: "Yes, with lead time. Both run credentialed access and scheduled loading that closes well before the event, so they need to be planned like a convention floor rather than a ballroom.",
      },
    ],
    nearby: ["hudson-county", "essex-county", "morris-county", "jersey-city"],
  },

  {
    slug: "essex-county",
    name: "Essex County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Essex County NJ | Estate & Ballroom Venues",
      description:
        "Photo booth and event experiences across Essex County — West Orange estates, Montclair, Livingston, Millburn and Newark. Grand estate weddings, corporate events and cultural venues.",
    },
    h1: "Photo Booth Rental in Essex County",
    heroSub:
      "The West Orange estate cluster gives Essex County the grandest run of wedding venues in the state, with Montclair's independent scene and Newark's institutions at either end of it.",
    heroImg: {
      src: "/img/mirror-booth-hero.jpg",
      alt: "Full length mirror photo booth at a formal event",
    },
    intro: {
      heading: "Three miles of estate venues, and everything around them",
      paragraphs: [
        "Within a short drive of each other in West Orange sit several of New Jersey's most established estate venues — grand rooms, formal gardens, and a wedding market that has been running at that level for decades. It is an unusually concentrated cluster, and it sets the tone for the county.",
        "Those rooms reward restraint. The glam treatment, the studio booth and Mirror X out-book the louder experiences here consistently, because a booth that competes with a room like that loses. Where a couple wants something with more energy, it usually goes later in the evening rather than during the reception.",
        "Montclair pulls in a different direction — independent venues, a strong arts and restaurant scene, and events that skew creative rather than traditional. Newark, covered in depth on its own page, brings the institutional and conference business.",
      ],
    },
    venues: [
      { name: "The Manor", where: "West Orange", note: "Long-established estate venue with formal gardens and multiple ballrooms." },
      { name: "Highlawn", where: "West Orange", note: "Eagle Rock Reservation site with a skyline outlook east towards Manhattan." },
      { name: "Pleasantdale Chateau", where: "West Orange", note: "Private estate grounds; a single-event site with careful handling requirements." },
      { name: "Nanina's in the Park", where: "Belleville", note: "Garden and ballroom venue running a heavy wedding calendar." },
      { name: "Mayfair Farms", where: "West Orange", note: "Estate venue with several rooms and established loading routines." },
      { name: "New Jersey Performing Arts Center", where: "Newark", note: "Cultural and corporate programming — see the Newark page for load-in detail." },
    ],
    covers: [
      "West Orange",
      "Montclair",
      "Livingston",
      "Millburn",
      "Short Hills",
      "Belleville",
      "Bloomfield",
      "Nutley",
      "Verona",
      "Caldwell",
      "Maplewood",
      "South Orange",
      "Newark",
      "Cedar Grove",
    ],
    logistics: {
      heading: "Estate venues have rules a ballroom does not",
      paragraphs: [
        "The estate properties are historic or semi-historic buildings on maintained grounds, which means floor protection, no wall fixings, careful routing through public rooms and, at some sites, a restriction on where vehicles can go. We bring free-standing supports and our own protection as standard.",
        "Several of these venues run one event at a time, which is good news — the setup window is generous and nobody is competing for the service corridor. It also means the venue's coordinator is closely involved, and it pays to introduce us early.",
        "Certificates of insurance are requested everywhere in the county and issued same day from our $3 million policy.",
      ],
    },
    experiences: [
      "glam-booth",
      "studio-booth",
      "mirror-x",
      "magic-mirror",
      "flower-wall",
      "champagne-wall",
    ],
    faqs: [
      {
        q: "Which experience suits a formal estate venue?",
        a: "Something that does not compete with the room — the glam booth, the studio setup or Mirror X. Save the louder experiences for later in the evening if you want them at all.",
      },
      {
        q: "Can you set up without fixing anything to walls?",
        a: "Yes, always. Everything we bring is free-standing, and we carry our own floor protection for estate and historic venues as standard.",
      },
      {
        q: "Do you cover Newark itself?",
        a: "Yes, in depth — Newark has its own page covering NJPAC, the Prudential Center, university venues and the Ironbound, because the load-in realities there are nothing like the estate venues.",
      },
    ],
    nearby: ["newark", "bergen-county", "morris-county", "union-county"],
  },

  {
    slug: "hudson-county",
    name: "Hudson County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Hudson County NJ | Waterfront & Expo Venues",
      description:
        "Photo booth and brand activation experiences across Hudson County — Jersey City, Hoboken, Secaucus, Weehawken and Bayonne. Skyline waterfront venues and Meadowlands Exposition Center shows.",
    },
    h1: "Photo Booth Rental in Hudson County",
    heroSub:
      "The skyline corridor. Every east-facing venue from Bayonne to Weehawken has Manhattan across the water — and Secaucus has the exhibition floor that most of North Jersey's trade shows run through.",
    heroImg: {
      src: "/img/branded-hero-2.jpg",
      alt: "Branded photo booth activation at a corporate event",
    },
    intro: {
      heading: "A corridor, not a catchment",
      paragraphs: [
        "Hudson County is nine miles of waterfront and very little else, and that shape defines it. Bayonne, Jersey City, Hoboken, Weehawken, Union City and North Bergen sit in a line facing Manhattan, and the skyline is the single most valuable asset any of their venues has.",
        "Jersey City and Hoboken carry most of the volume and have their own pages — the load-in realities in an Exchange Place tower and a Hoboken walk-up are different enough to deserve separate treatment. This page covers what sits between and around them.",
        "The piece worth knowing about is Secaucus. The Meadowlands Exposition Center puts a genuine exhibition floor inside the county, which means trade show and consumer show work that would otherwise mean a run to Edison or Atlantic City happens minutes from the Turnpike.",
      ],
    },
    venues: [
      { name: "Meadowlands Exposition Center", where: "Secaucus", note: "Exhibition floor for trade and consumer shows; exhibitor kit and decorator rules apply." },
      { name: "Chart House", where: "Weehawken", note: "Waterfront dining room with a full midtown skyline outlook across the Hudson." },
      { name: "Waterside", where: "North Bergen", note: "Riverside event space facing the Manhattan skyline." },
      { name: "Hudson County waterfront parks", where: "Bayonne to Weehawken", note: "Outdoor activations along the waterfront, subject to municipal permitting." },
      { name: "Jersey City venues", where: "Jersey City", note: "Covered in detail on the Jersey City page — waterfront towers and Powerhouse lofts." },
      { name: "Hoboken venues", where: "Hoboken", note: "Covered in detail on the Hoboken page — restaurants, rooftops and the piers." },
    ],
    covers: [
      "Jersey City",
      "Hoboken",
      "Secaucus",
      "Weehawken",
      "Union City",
      "North Bergen",
      "Bayonne",
      "West New York",
      "Guttenberg",
      "Kearny",
      "Harrison",
      "East Newark",
    ],
    logistics: {
      heading: "Two regimes, a few miles apart",
      paragraphs: [
        "On the exhibition side, Secaucus works like any show floor: exhibitor kit, load-in window, decorator requirements and a certificate of insurance that frequently names the decorator alongside the venue. Send us the kit and we work to it.",
        "On the waterfront side, the constraint is buildings. Towers run scheduled freight elevators and want COIs naming the management company; older restaurant and rooftop venues often have no dock at all. The roaming booth solves a surprising number of these rooms outright.",
        "The county is compact enough that travel is rarely the number people expect it to be, and it is quoted from your venue's ZIP code before you book either way.",
      ],
    },
    experiences: [
      "roaming-photo-booth",
      "branded-photo-booth",
      "mirror-x",
      "360-photo-booth",
      "gif-booth",
      "studio-booth",
    ],
    faqs: [
      {
        q: "Do you cover trade shows at Meadowlands Exposition Center?",
        a: "Yes. Send the exhibitor kit and we work to its load-in window, marshalling and insurance requirements. For a multi-day show the roaming booth usually outperforms a static one, because show floor footfall is spread across the day.",
      },
      {
        q: "Should we look at the Jersey City or Hoboken page instead?",
        a: "If your venue is in either city, yes — they have their own pages because the load-in realities differ sharply. This page covers Secaucus, Weehawken, Bayonne, North Bergen and the rest of the corridor.",
      },
      {
        q: "Which venues get the skyline in the shot?",
        a: "Anything east-facing along the waterfront, from Bayonne up to Weehawken. Place the booth with its back to the glass and open it in the hour before sunset if the timeline allows.",
      },
    ],
    nearby: ["jersey-city", "hoboken", "bergen-county", "newark"],
  },

  {
    slug: "union-county",
    name: "Union County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Union County NJ | Corporate & Wedding Events",
      description:
        "Photo booth and event experiences across Union County — Westfield, Cranford, Summit, Elizabeth and Scotch Plains. Country clubs, catering halls and corporate events near Newark Airport.",
    },
    h1: "Photo Booth Rental in Union County",
    heroSub:
      "Central, well connected and built around Newark Airport — which makes Union County the practical choice for corporate events where half the room is flying in.",
    heroImg: {
      src: "/img/corporate-confetti.jpg",
      alt: "Guests celebrating at a corporate event photo booth",
    },
    intro: {
      heading: "The county people can actually get to",
      paragraphs: [
        "Union County's advantage is access. Newark Liberty sits on its edge, the Garden State Parkway and Route 78 cross it, and the rail links are good — which is why a disproportionate number of corporate events that need to gather people from several states end up here rather than somewhere prettier.",
        "The venue mix follows from that: airport-adjacent conference hotels, established country clubs around Scotch Plains and Springfield, catering halls serving Elizabeth's large community event calendar, and university venues at Kean.",
        "Westfield, Summit and Cranford add a well-off suburban private market — milestone birthdays, bar and bat mitzvahs, showers and anniversaries, usually in smaller rooms where a compact booth beats a large one.",
      ],
    },
    venues: [
      { name: "Shackamaxon Country Club", where: "Scotch Plains", note: "Established country club with a full wedding and member event calendar." },
      { name: "The Westwood", where: "Garwood", note: "Large catering venue running multiple simultaneous events." },
      { name: "Galloping Hill Golf Course", where: "Kenilworth", note: "County-run golf and event facility with a purpose-built event centre." },
      { name: "Kean University", where: "Union", note: "Campus venues on an academic calendar with university insurance requirements." },
      { name: "Airport-area conference hotels", where: "Elizabeth and Newark Liberty", note: "Purpose-built conference and ballroom space with proper loading." },
    ],
    covers: [
      "Westfield",
      "Cranford",
      "Summit",
      "Elizabeth",
      "Scotch Plains",
      "Union",
      "Linden",
      "Rahway",
      "Springfield",
      "Berkeley Heights",
      "New Providence",
      "Clark",
      "Roselle",
      "Plainfield",
    ],
    logistics: {
      heading: "Straightforward, mostly",
      paragraphs: [
        "Conference hotels and the larger catering venues here have proper docks and service corridors, and they run enough events to know what a supplier needs. Certificates of insurance are routine and issued same day.",
        "The country clubs are more seasonal and more protective of their grounds — free-standing setups and floor protection as standard, and worth introducing us to the club's coordinator early.",
        "For the suburban private market the rooms are smaller than people expect. An enclosed booth or Mirror X usually fits where a 360 platform genuinely will not.",
      ],
    },
    experiences: [
      "mirror-x",
      "magic-mirror",
      "studio-booth",
      "enclosed-photo-booth",
      "branded-photo-booth",
      "gif-booth",
    ],
    faqs: [
      {
        q: "Is Union County good for a corporate event with out-of-town attendees?",
        a: "It is one of the best choices in the state for exactly that. Newark Liberty is on the county's edge and the road and rail links are strong, which is why so many multi-state gatherings land here.",
      },
      {
        q: "Our venue room is fairly small. What fits?",
        a: "An enclosed booth or Mirror X. Both work in a compact footprint, and the enclosed cabinet can sit flat against a wall with no clearance behind it. A 360 platform needs eight by eight clear plus crowd space and often will not fit.",
      },
      {
        q: "Do you cover Kean University events?",
        a: "Yes. University insurance requirements are stricter than a hotel's and tend to close earlier, so send them over as soon as you have them.",
      },
    ],
    nearby: ["essex-county", "middlesex-county", "morris-county", "newark"],
  },

  {
    slug: "morris-county",
    name: "Morris County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Morris County NJ | Corporate & Estate Events",
      description:
        "Photo booth and brand activation experiences across Morris County — Morristown, Parsippany, Madison, Florham Park and Whippany. Corporate campuses, historic venues and estate weddings.",
    },
    h1: "Photo Booth Rental in Morris County",
    heroSub:
      "A corporate corridor with a historic county seat attached. Morris runs pharmaceutical and financial campus events during the week and estate weddings at the weekend, and the two need very different things.",
    heroImg: {
      src: "/img/mirror-x-hero.jpg",
      alt: "Frameless Mirror X photo booth at a corporate reception",
    },
    intro: {
      heading: "Weekday corporate, weekend estate",
      paragraphs: [
        "Morris County has one of New Jersey's densest concentrations of corporate headquarters — pharmaceutical, financial services and professional firms clustered around Parsippany, Florham Park and Morristown. That produces a steady weekday calendar of internal events, client evenings, sales conferences and campus celebrations, usually with a real production standard attached.",
        "At weekends the same county turns into an estate and historic venue market. Morristown's Green and the surrounding towns carry venues with genuine architectural character, and the countryside towards Gladstone and Chester adds golf and estate properties.",
        "The corporate work skews towards branded activations, headshot stations and lead capture. The weekend work skews towards mirrors, glam and floral. It is worth being clear which one you are planning, because almost nothing about the two briefs overlaps.",
      ],
    },
    venues: [
      { name: "The Madison Hotel", where: "Morristown", note: "Established conference and ballroom hotel with purpose-built loading." },
      { name: "Park Savoy Estate", where: "Florham Park", note: "Single-event estate venue; generous setup window and close coordinator involvement." },
      { name: "Birchwood Manor", where: "Whippany", note: "Multi-room catering venue running several events simultaneously." },
      { name: "Hamilton Farm Golf Club", where: "Gladstone", note: "Country estate and golf property at the high end of the local market." },
      { name: "Corporate campuses", where: "Parsippany and Florham Park", note: "Pharmaceutical and financial sites with security badging and dock scheduling." },
      { name: "Morristown Green venues", where: "Morristown", note: "Historic buildings around the Green — character-heavy, with fixing and access restrictions." },
    ],
    covers: [
      "Morristown",
      "Parsippany",
      "Madison",
      "Florham Park",
      "Whippany",
      "Chatham",
      "Randolph",
      "Denville",
      "Mount Olive",
      "Chester",
      "Mendham",
      "Gladstone",
      "Rockaway",
      "Boonton",
    ],
    logistics: {
      heading: "Badging on weekdays, floor protection at weekends",
      paragraphs: [
        "Corporate campuses in Parsippany and Florham Park run security badging, vehicle registration and scheduled dock access, and those requests close days ahead. This is the one piece of paperwork lead time genuinely matters for — a same-day certificate of insurance does not help if the badge window shut on Wednesday.",
        "The estate and historic venues need the opposite kind of care: free-standing setups, no wall fixings, floor protection, and routing that avoids carrying equipment through a public room mid-event. All standard for us, provided we have seen the building's rules.",
        "Everything is quoted from your venue's ZIP code and travel is included in that number before you book.",
      ],
    },
    experiences: [
      "branded-photo-booth",
      "studio-booth",
      "mirror-x",
      "ai-photo-booth",
      "glam-booth",
      "flower-wall",
    ],
    faqs: [
      {
        q: "Can you get onto a corporate campus in Parsippany or Florham Park?",
        a: "Yes, with lead time. Those sites need vehicle registration, security badging and a scheduled dock slot, and the request window closes days before the event. Send us the site's procedure as soon as you have it.",
      },
      {
        q: "What works for a corporate headshot day?",
        a: "The studio booth. Studio lighting and a Canon DSLR set up on site, with clean high-resolution files delivered alongside guest prints and a consistent processing look across the whole team.",
      },
      {
        q: "Our venue is a historic building near the Green. Any restrictions?",
        a: "Usually fixings and floor protection. Everything we bring is free-standing and we carry our own protection, but send the building's rules over so we plan the route and the footprint properly.",
      },
    ],
    nearby: ["essex-county", "union-county", "bergen-county", "middlesex-county"],
  },

  {
    slug: "middlesex-county",
    name: "Middlesex County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Middlesex County NJ | Trade Show & Expo Events",
      description:
        "Photo booth and trade show experiences across Middlesex County — Edison, New Brunswick, Piscataway and East Brunswick. Home to the New Jersey Convention & Exposition Center.",
    },
    h1: "Photo Booth Rental in Middlesex County",
    heroSub:
      "The state's exhibition county. Edison's 155,000-square-foot convention floor sits at the middle of it, with Rutgers, New Brunswick's hotels and a heavy banquet calendar around the edges.",
    heroImg: {
      src: "/img/trade-show-hero-2.jpg",
      alt: "Branded photo experience on an exhibition floor",
    },
    intro: {
      heading: "Where New Jersey's trade shows actually happen",
      paragraphs: [
        "The New Jersey Convention and Exposition Center in Edison gives Middlesex County something no other county outside Atlantic City has: a genuine exhibition floor, 155,000 square feet of it, sitting where the Turnpike, Route 1 and the Northeast Corridor line all converge. A large share of the state's trade and consumer shows run through it.",
        "That makes this the county where the trade show conversation is most relevant. On a multi-day show the roaming booth usually outperforms a static one, because floor footfall spreads across the day rather than concentrating into an evening — a static booth sits idle through the quiet hours while a roamer keeps working the aisles.",
        "Around the exhibition business sits a busy county: Rutgers across New Brunswick and Piscataway, conference hotels downtown, and a large banquet and catering calendar in East Brunswick and along Route 1.",
      ],
    },
    venues: [
      { name: "New Jersey Convention & Exposition Center", where: "Edison", note: "155,000 sq ft exhibition floor. Exhibitor kit, decorator requirements and marshalling all apply." },
      { name: "The Heldrich", where: "New Brunswick", note: "Downtown conference hotel with purpose-built meeting and ballroom space." },
      { name: "Rutgers University", where: "New Brunswick and Piscataway", note: "Campus venues across several sites; academic calendar and university insurance requirements." },
      { name: "The Park Chateau Estate", where: "East Brunswick", note: "Large estate and ballroom venue running a heavy wedding calendar." },
      { name: "Pines Manor", where: "Edison", note: "Long-established catering venue close to the exposition centre." },
      { name: "Route 1 corporate sites", where: "Edison to North Brunswick", note: "Corporate campuses with badging and scheduled dock access." },
    ],
    covers: [
      "Edison",
      "New Brunswick",
      "Piscataway",
      "East Brunswick",
      "Woodbridge",
      "Perth Amboy",
      "Old Bridge",
      "Sayreville",
      "Metuchen",
      "South Brunswick",
      "North Brunswick",
      "Monroe Township",
      "Highland Park",
    ],
    logistics: {
      heading: "Exhibitor kits first, everything else second",
      paragraphs: [
        "For anything at the exposition centre, the exhibitor kit is the document that matters. It sets the load-in window, the marshalling procedure, whether the decorator handles material handling, and who the certificate of insurance has to name — often the venue and the decorator both. Send it as soon as you have it and we will work to it rather than around it.",
        "For multi-day shows we set up before the floor opens, staff the booth with a trained operator every show day, and break down after close. Your team never touches equipment.",
        "University venues at Rutgers bring their own insurance requirements, and those close earlier than a hotel's. Everything else in the county — hotels, banquet venues, Route 1 sites — is straightforward with normal notice.",
      ],
    },
    experiences: [
      "roaming-photo-booth",
      "branded-photo-booth",
      "gif-booth",
      "ai-photo-booth",
      "studio-booth",
      "green-screen-photo-booth",
    ],
    faqs: [
      {
        q: "What do you need for a stand at the Exposition Center?",
        a: "The exhibitor kit. It defines the load-in window, marshalling, material handling and the insurance naming requirements — usually the venue and the decorator. Give us that and the paperwork side is handled.",
      },
      {
        q: "Static booth or roaming booth for a multi-day show?",
        a: "Roaming, in most cases. Show floor footfall spreads across the day, so a static booth is idle through the quiet hours. Plenty of stands run a branded static booth for the peaks and a roamer through everything else.",
      },
      {
        q: "Can you capture leads on the show floor?",
        a: "Yes. Opt-in email and phone capture sits inside the sharing step, every capture carries your overlay, and you get the list plus a report of sessions, shares and opt-in rate by day.",
      },
    ],
    nearby: ["union-county", "monmouth-county", "princeton", "morris-county"],
  },

  {
    slug: "monmouth-county",
    name: "Monmouth County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Monmouth County NJ | Shore & Asbury Park Events",
      description:
        "Photo booth and event experiences across Monmouth County — Asbury Park, Red Bank, Long Branch, Spring Lake and Rumson. Oceanfront weddings, creative venues and summer brand activations.",
    },
    h1: "Photo Booth Rental in Monmouth County",
    heroSub:
      "An oceanfront wedding season and Asbury Park's creative scene in the same county. Both run hardest between May and September, and both need the outdoor planning the rest of the state does not.",
    heroImg: {
      src: "/img/vogue-booth-hero.jpg",
      alt: "LED lined Vogue booth structure at an evening event",
    },
    intro: {
      heading: "A season, not a calendar",
      paragraphs: [
        "Monmouth County works on a season. From late spring through September the shore towns run at capacity — oceanfront weddings in Spring Lake and Long Branch, beach club events, brand activations along the boardwalk, and a Red Bank and Rumson private market that fills every weekend. Outside that window it quietens sharply.",
        "Asbury Park is the county's other engine and behaves nothing like the rest of it. The music venues, hotels and independent spaces there pull creative, brand and music industry work — the kind of event where the AI booth or the Vogue structure is a better fit than a traditional mirror.",
        "Booking early matters more here than almost anywhere. A Saturday in July is competitive for every supplier in the county at once.",
      ],
    },
    venues: [
      { name: "The Asbury Hotel", where: "Asbury Park", note: "Design-led hotel with indoor and rooftop event space; a creative and brand-heavy calendar." },
      { name: "The Breakers on the Ocean", where: "Spring Lake", note: "Oceanfront wedding venue; salt air and wind are genuine planning factors." },
      { name: "Ocean Place Resort", where: "Long Branch", note: "Beachfront resort with conference and ballroom space." },
      { name: "Eagle Oaks Golf & Country Club", where: "Farmingdale", note: "Country club with a full seasonal wedding calendar." },
      { name: "Monmouth Park", where: "Oceanport", note: "Racecourse hospitality and large outdoor event space." },
      { name: "Red Bank venues", where: "Red Bank", note: "Restaurants, theatres and independent rooms — often compact, frequently no dock." },
    ],
    covers: [
      "Asbury Park",
      "Red Bank",
      "Long Branch",
      "Spring Lake",
      "Rumson",
      "Freehold",
      "Middletown",
      "Manasquan",
      "Belmar",
      "Sea Bright",
      "Colts Neck",
      "Holmdel",
      "Ocean Township",
      "Farmingdale",
    ],
    logistics: {
      heading: "Outdoors, at the shore, in summer",
      paragraphs: [
        "Oceanfront and outdoor events need decisions the rest of the state does not. Electronics and salt air do not agree, wind moves anything that is not weighted, and direct afternoon sun defeats a screen. We plan a covered or shaded position by default and bring weighting as standard — and we will tell you honestly if the spot you had in mind is going to fight us.",
        "There has to be a wet-weather plan, agreed in advance rather than improvised. A booth without a defined indoor fallback is a booth that spends a rainy Saturday in the van.",
        "Power at outdoor and beach club sites is often a run from a distant point. Tell us where the nearest reliable supply is and we will bring the distribution to reach it.",
      ],
    },
    experiences: [
      "360-photo-booth",
      "ai-photo-booth",
      "vogue-booth",
      "roaming-photo-booth",
      "glam-booth",
      "flower-wall",
    ],
    faqs: [
      {
        q: "Can the booth go outside at an oceanfront venue?",
        a: "Yes, with planning. We need a covered or shaded position, weighting against wind, and a defined wet-weather fallback agreed in advance. Salt air, direct sun and gusts are all real factors rather than theoretical ones.",
      },
      {
        q: "How far ahead should we book for a summer Saturday?",
        a: "As far ahead as you can. From May to September the whole county is competing for the same weekends, and good dates go early across every supplier at once.",
      },
      {
        q: "What suits an Asbury Park event?",
        a: "Asbury tends creative rather than traditional — the AI booth, the Vogue structure or the 360 land better there than a classic mirror. Tell us the room and the crowd and we will recommend properly.",
      },
    ],
    nearby: ["ocean-county", "middlesex-county", "atlantic-city", "princeton"],
  },

  {
    slug: "ocean-county",
    name: "Ocean County",
    kind: "county",
    meta: {
      title: "Photo Booth Rental Ocean County NJ | Bay & Yacht Club Venues",
      description:
        "Photo booth and event experiences across Ocean County — Point Pleasant, Toms River, Long Beach Island and Manahawkin. Bayfront estates, yacht clubs and summer season weddings.",
    },
    h1: "Photo Booth Rental in Ocean County",
    heroSub:
      "Bayfront estates and yacht clubs, almost all of it packed into a summer season. Ocean County has the most beautiful sunsets we work against and the most demanding outdoor conditions.",
    heroImg: {
      src: "/img/flower-wall-hero-2.jpg",
      alt: "Handmade floral backdrop wall at an outdoor event",
    },
    intro: {
      heading: "Bayside, and built around sunset",
      paragraphs: [
        "Ocean County's event market runs along the bay rather than the ocean. Manahawkin, Point Pleasant and the approaches to Long Beach Island carry a cluster of bayfront estates and yacht clubs whose entire proposition is the western view — which means the light, and specifically sunset, drives the timeline of almost every event here.",
        "That is worth building around rather than working against. At a bayfront venue we will usually suggest opening the booth in the run-up to sunset and positioning it so the water stays in frame. It is free production value and it is the reason people chose the venue.",
        "The season is short and intense. Summer weekends book out across every supplier simultaneously, and the shoulder months are quiet enough that a September or early October date is frequently better value and better weather than August.",
      ],
    },
    venues: [
      { name: "Bonnet Island Estate", where: "Manahawkin", note: "Bayfront estate on the approach to Long Beach Island; single-event site." },
      { name: "Mallard Island Yacht Club", where: "Manahawkin", note: "Bayfront property with west-facing water views built around sunset." },
      { name: "Crystal Point Yacht Club", where: "Point Pleasant", note: "Waterfront yacht club running a heavy summer wedding calendar." },
      { name: "Clarks Landing Yacht Club", where: "Point Pleasant", note: "Riverfront venue with indoor and outdoor space." },
      { name: "Long Beach Island venues", where: "LBI", note: "Beach houses, clubs and marquees — access across the causeway is the planning factor." },
      { name: "Toms River venues", where: "Toms River", note: "The county's main inland market: catering halls, clubs and community venues." },
    ],
    covers: [
      "Point Pleasant",
      "Toms River",
      "Long Beach Island",
      "Manahawkin",
      "Brick",
      "Lavallette",
      "Seaside Heights",
      "Beach Haven",
      "Barnegat",
      "Bay Head",
      "Jackson",
      "Lacey Township",
      "Ship Bottom",
    ],
    logistics: {
      heading: "Causeways, wind and the tide of a summer Saturday",
      paragraphs: [
        "Access to Long Beach Island runs across a single causeway, and on a summer weekend that is a genuine scheduling factor rather than a detail. We build the extra time into the plan and arrive early enough that traffic is not the thing that decides whether your booth is ready.",
        "Bayfront sites are exposed. Wind off the water moves anything unweighted, salt air is hard on electronics, and a low western sun that makes the venue beautiful also puts glare directly onto a screen. We plan the position for all three and bring weighting as standard.",
        "A defined wet-weather fallback is essential for any outdoor placement, agreed at booking rather than debated on the day.",
      ],
    },
    experiences: [
      "360-photo-booth",
      "magic-mirror",
      "flower-wall",
      "glam-booth",
      "roaming-photo-booth",
      "champagne-wall",
    ],
    faqs: [
      {
        q: "Can you get to Long Beach Island on a summer Saturday?",
        a: "Yes — we build causeway traffic into the schedule and leave accordingly. It is a real factor, not a footnote, and planning for it is why we arrive with margin rather than hoping.",
      },
      {
        q: "Should the booth be set up for sunset?",
        a: "At a bayfront venue, almost always. Positioning the booth so the water stays in frame and opening it in the run-up to sunset is the single cheapest improvement you can make to every photograph taken that night.",
      },
      {
        q: "Is an off-season date worth considering?",
        a: "Often, yes. September and early October at the bay are frequently better weather than August and considerably less competitive across every supplier, including us.",
      },
    ],
    nearby: ["monmouth-county", "atlantic-city", "middlesex-county"],
  },
];
