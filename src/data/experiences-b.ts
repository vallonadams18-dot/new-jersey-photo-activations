import type { Experience } from "./types";

/**
 * The rest of the inventory — experiences that lead with weddings, private
 * celebrations and atmosphere, though every one of them has a corporate use
 * and the pages say what it is.
 */
export const experiencesB: Experience[] = [
  {
    slug: "magic-mirror",
    name: "Magic Mirror",
    tagline:
      "The full-length interactive mirror that started the category — animated, theatrical, and still the one guests remember.",
    meta: {
      title: "Magic Mirror Photo Booth Rental New Jersey | Mirror Booth Hire",
      description:
        "Magic mirror photo booth rental across New Jersey. Full-length interactive mirror with animated touchscreen, studio lighting, unlimited 4x6 prints and an attendant included.",
    },
    h1: "Magic Mirror",
    heroSub:
      "A full-length mirror that talks back — animation, a signature screen, studio lighting behind the glass, and a print in your guest's hand before they have finished laughing at it.",
    heroImg: {
      src: "/img/mirror-booth-hero.jpg",
      alt: "Guests posing at a full length magic mirror photo booth",
    },
    video: {
      src: "/video/mirror-photo-booth.mp4",
      poster: "/img/mirror-booth-poster.jpg",
      label: "Magic mirror booth footage",
    },
    weight: "both",
    included: [
      "Full-length interactive mirror with animated on-screen journey",
      "Pro Canon DSLR behind the glass with studio ring lighting",
      "Custom-designed print template for your event",
      "Unlimited sessions and unlimited 4×6 prints",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full booking",
      "Premium backdrop and a curated props table",
      "On-screen signing — guests sign their print on the glass",
    ],
    prose: [
      {
        heading: "Why it still outsells everything else",
        paragraphs: [
          "The magic mirror has been copied endlessly and it still books more than anything else we own, because the interaction is genuinely well designed. Guests approach a mirror, not a machine. The screen animates and invites them in. They sign their own print on the glass with a fingertip. None of it needs explaining.",
          "That matters most with a mixed crowd. A grandparent and a fifteen-year-old both understand a mirror, which is not true of every experience in this inventory.",
        ],
      },
      {
        heading: "Full-length changes the photographs",
        paragraphs: [
          "Because guests see themselves head to toe, they use the frame properly — groups arrange, outfits get shown, people move. Compare it to a cabinet booth, where everyone is a head and shoulders in a row, and the difference in the printed output is obvious.",
          "Behind the glass it is a pro Canon DSLR under studio ring lighting, and the printer is dye-sublimation: a dry 4×6 in seconds, not a damp strip that curls in a pocket.",
        ],
      },
    ],
    corporate: {
      heading: "Company parties and mixed rooms",
      paragraphs: [
        "For a holiday party, a summer outing or an awards night, the mirror does the social work — it gives people who do not know each other a reason to stand together, and produces something they take home.",
        "The print template, the on-screen journey and the sharing page can all carry your identity. Where a room has been heavily art-directed and the mirror's frame feels too decorative, Mirror X is the same technology without the ornament.",
      ],
    },
    privateUse: {
      heading: "Weddings, mitzvahs and Sweet Sixteens",
      paragraphs: [
        "This is the classic wedding booth, and the reason is the print: a physical keepsake with your names and date on it, handed over on the night. Guests keep them. Many put them straight in a card.",
        "For mitzvahs and Sweet Sixteens the on-screen signing is the part that lands — every guest leaves a message on their own photo.",
      ],
    },
    output: "Unlimited 4×6 prints plus instant digital sharing",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/mirror-booth-1.jpg", alt: "Guests using the magic mirror photo booth at a reception" },
      { src: "/img/mirror-booth-2.jpg", alt: "Magic mirror booth with a premium backdrop" },
      { src: "/img/mirror-booth-3.jpg", alt: "Group posing full length at the magic mirror" },
      { src: "/img/mirror-booth-5.jpg", alt: "Guest signing their print on the magic mirror screen" },
      { src: "/img/home-mirror.jpg", alt: "LED framed mirror photo booth set up at an event venue" },
    ],
    faqs: [
      {
        q: "How much space does the mirror need?",
        a: "Ten by ten feet is ideal, eight by eight is the working minimum. That covers the mirror, the backdrop and enough room for a group of six to arrange themselves.",
      },
      {
        q: "How long do prints take?",
        a: "Seconds. The printer is dye-sublimation, so the 4×6 comes out dry and handleable rather than damp — it goes straight into a pocket or a card.",
      },
      {
        q: "Should we choose the Magic Mirror or Mirror X?",
        a: "Same capture, same prints, same sharing. The Magic Mirror has a decorative frame and more on-screen theatre; Mirror X is frameless and quiet. Choose the mirror for weddings and celebrations, Mirror X for rooms that have been designed and should not be competed with.",
      },
      {
        q: "Are props included?",
        a: "Yes — a curated props table, kept tidy by the attendant through the night rather than left to turn into a jumble by nine o'clock.",
      },
    ],
    related: ["mirror-x", "enclosed-photo-booth", "glam-booth"],
  },

  {
    slug: "glam-booth",
    name: "Glam Booth",
    tagline:
      "The black-and-white, skin-smoothing red carpet look. Every guest leaves looking retouched.",
    meta: {
      title: "Glam Booth Rental New Jersey | Black & White Glam Photo Booth",
      description:
        "Glam booth rental across New Jersey. The black-and-white, skin-smoothing red carpet look made famous by celebrity photographers — for weddings, galas and fashion events.",
    },
    h1: "Glam Booth",
    heroSub:
      "The high-key black-and-white treatment you know from the red carpet — soft skin, bright eyes, deep contrast. It is the booth guests photograph best in, by a distance.",
    heroImg: {
      src: "/img/glam-booth-hero.jpg",
      alt: "Black and white glam booth portrait at an event",
    },
    weight: "both",
    included: [
      "Signature black-and-white glam processing applied on site",
      "Pro Canon DSLR with studio beauty lighting",
      "Unlimited sessions and unlimited 4×6 prints",
      "Instant sharing by text, email or QR code",
      "Custom-designed print template",
      "Trained attendant directing every shot",
      "Premium backdrop",
    ],
    prose: [
      {
        heading: "It is a lighting setup, not a filter",
        paragraphs: [
          "The glam look gets sold as a filter and it is not one. It is a beauty lighting setup — soft, frontal, high-key — with a processing pass on top. The lighting is what does most of the work, which is why a phone filter never quite matches it.",
          "The effect on a guest is immediate and slightly disarming. People who avoid photographs will do this one, look at the result, and then do it again.",
        ],
      },
      {
        heading: "Where it fits in an evening",
        paragraphs: [
          "It suits rooms where guests have dressed up and want to be seen doing it — galas, black-tie weddings, fashion and beauty events, awards nights. It suits a costume party considerably less.",
          "Because the output is monochrome it also sits neatly alongside a colour booth elsewhere in the room without the two competing.",
        ],
      },
    ],
    corporate: {
      heading: "Galas, fashion and beauty",
      paragraphs: [
        "For a beauty brand, a fashion event or an awards evening, the glam treatment matches the visual language the audience already expects, and the output looks like editorial rather than event photography.",
        "Print templates and the sharing page carry your identity, and the monochrome processing means brand colours elsewhere in the room stay uncontested.",
      ],
    },
    privateUse: {
      heading: "Weddings and black tie",
      paragraphs: [
        "At a black-tie wedding this is frequently the booth couples pick over the mirror, because the prints look like part of the photography rather than a novelty.",
        "It photographs formalwear beautifully and it is very forgiving, which guests notice without being able to say why.",
      ],
    },
    output: "Unlimited black-and-white 4×6 glam prints plus instant sharing",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/glam-booth-1.jpg", alt: "Glam booth black and white portrait of guests" },
      { src: "/img/glam-booth-2.jpg", alt: "Glam booth setup with beauty lighting at an event" },
      { src: "/img/glam-booth-3.jpg", alt: "Black and white glam photo booth print" },
      { src: "/img/glam-booth-4.jpg", alt: "Guests posing in the glam booth at a gala" },
      { src: "/img/glam-booth-5.jpg", alt: "High key black and white glam booth capture" },
    ],
    faqs: [
      {
        q: "Is the glam look just a black-and-white filter?",
        a: "No. It is a beauty lighting setup — soft, frontal and high-key — with processing applied on top. The lighting does most of the work, which is why the result does not look like a phone filter.",
      },
      {
        q: "Can we have colour prints as well?",
        a: "The glam treatment is monochrome by design. If you want colour in the same room, it pairs well with a mirror or enclosed booth.",
      },
      {
        q: "Does it work for a themed or costume event?",
        a: "Honestly, less well. The look is elegant and understated, which fights a costume theme. For themed events the green screen or magazine booth is a better fit.",
      },
    ],
    related: ["studio-booth", "vogue-booth", "magazine-booth"],
  },

  {
    slug: "vogue-booth",
    name: "Vogue Booth",
    tagline:
      "A 3D backdrop guests step inside, lined with programmable LED. Ten seconds in, they have something worth posting.",
    meta: {
      title: "Vogue Booth Rental New Jersey | LED 3D Photo Experience",
      description:
        "Vogue booth rental across New Jersey. A 3D LED-lined backdrop guests step inside, producing high-impact video and stills for brand events, galas and celebrations.",
    },
    h1: "Vogue Booth",
    heroSub:
      "Not a backdrop guests stand in front of — one they step inside. Programmable LED lines the structure and changes with the capture, which is why the output looks lit by a production rather than a booth.",
    heroImg: {
      src: "/img/vogue-booth-hero.jpg",
      alt: "Guest inside the LED lined Vogue booth structure",
    },
    video: {
      src: "/video/vogue-booth.mp4",
      poster: "/img/vogue-booth-poster.jpg",
      label: "Vogue booth footage",
    },
    weight: "both",
    included: [
      "3D structure lined with programmable LED",
      "Lighting sequences designed to your colours",
      "Video and stills capture",
      "Custom overlays and branded framing",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full booking",
      "Branded online gallery",
    ],
    prose: [
      {
        heading: "Being inside the light is the whole idea",
        paragraphs: [
          "Standing in front of a lit backdrop and standing inside one produce completely different photographs. Inside, the light wraps — it catches the edges of a guest, picks up fabric, and separates them from the background without any of the flatness a front-lit backdrop gives you.",
          "The LED is programmable, so the sequence can run in your brand colours, in a wedding palette, or in a build that changes across the capture.",
        ],
      },
      {
        heading: "It reads from across the room",
        paragraphs: [
          "Unlit, it is a structure. Lit, it is the brightest thing in the space, and that is deliberate — it advertises itself continuously without anybody having to point guests towards it.",
          "That makes placement matter. Give it a sightline down the room rather than tucking it behind a bar.",
        ],
      },
    ],
    corporate: {
      heading: "Brand colour, made physical",
      paragraphs: [
        "The most direct use is the simplest one: programme the LED to your brand colours and every piece of content produced all evening is unmistakably yours, before an overlay is even applied.",
        "It suits launches, sponsorship footprints and any activation where the photograph needs to look expensive.",
      ],
    },
    privateUse: {
      heading: "Sweet Sixteens and receptions",
      paragraphs: [
        "For a Sweet Sixteen it competes directly with the 360 for most-requested, and the two together cover a room completely.",
        "At weddings it is usually programmed to the palette and run after dinner, when the room has dimmed enough for the LED to do its work.",
      ],
    },
    output: "High-impact video and stills, branded and shared instantly",
    space: "Room for the structure plus a clear approach — we plan it against your floor plan",
    gallery: [
      { src: "/img/vogue-booth-1.jpg", alt: "Guest inside the LED lined Vogue booth" },
      { src: "/img/vogue-booth-3.jpg", alt: "Vogue booth LED sequence during a capture" },
      { src: "/img/vogue-booth-5.jpg", alt: "Vogue booth structure lit at an evening event" },
      { src: "/img/vogue-booth-7.jpg", alt: "Guests posing inside the Vogue booth" },
      { src: "/img/vogue-booth-9.jpg", alt: "Programmable LED lighting in the Vogue booth" },
      { src: "/img/corporate-vogue-session.jpg", alt: "Vogue booth session at a corporate event" },
    ],
    faqs: [
      {
        q: "Can the LED match our brand colours?",
        a: "Yes — the sequences are programmable, so we set them to your colours or a wedding palette in advance. It is the fastest way to make every piece of content from the night unmistakably yours.",
      },
      {
        q: "Does it produce video or stills?",
        a: "Both. The video is what tends to get posted; the stills are what people keep.",
      },
      {
        q: "Does the room need to be dark?",
        a: "It works in most lighting, but it is at its best once the room has dimmed. At a wedding that usually means running it after dinner rather than during a bright cocktail hour.",
      },
    ],
    related: ["360-photo-booth", "glambot", "green-screen-photo-booth"],
  },

  {
    slug: "magazine-booth",
    name: "Magazine Booth",
    tagline:
      "Guests pose, and seconds later they are on a cover — masthead, headlines and all.",
    meta: {
      title: "Magazine Cover Photo Booth Rental New Jersey | Cover Booth Hire",
      description:
        "Magazine cover photo booth rental across New Jersey. Guests are printed onto a custom magazine cover with your masthead and headlines — corporate activations, birthdays and themed events.",
    },
    h1: "Magazine Booth",
    heroSub:
      "The photograph is only half of it. Guests come back holding a finished magazine cover — masthead, cover lines, barcode — designed for your event and printed in seconds.",
    heroImg: {
      src: "/img/magazine-booth-hero-2.jpg",
      alt: "Magazine cover photo booth print featuring event guests",
    },
    weight: "both",
    included: [
      "Custom cover design — masthead, cover lines and layout",
      "Pro Canon DSLR with studio lighting",
      "Unlimited sessions and unlimited prints",
      "Instant sharing by text, email or QR code",
      "Trained attendant directing the shot",
      "Premium backdrop",
    ],
    prose: [
      {
        heading: "A format everyone already understands",
        paragraphs: [
          "The magazine cover is doing something clever: it borrows a layout every guest has seen a thousand times, so a photograph that would be ordinary becomes funny and flattering the moment it is wrapped in a masthead.",
          "It also gives the attendant something to direct. A cover needs a particular kind of pose, which is a far more useful instruction than asking someone to look natural.",
        ],
      },
      {
        heading: "The words are the joke",
        paragraphs: [
          "We write the masthead and cover lines with you in advance, and this is where the value is. A generic 'STAR' masthead is forgettable. Inside jokes about the department, the couple, or the campaign are what make guests read each other's covers rather than pocketing their own.",
          "Send us the material and we will lay it out properly.",
        ],
      },
    ],
    corporate: {
      heading: "Internal events and product launches",
      paragraphs: [
        "At an internal event a company-titled masthead with cover lines about the year makes a keepsake people actually pin up. At a launch, the cover can be the campaign's own visual language, which turns every guest into a piece of collateral.",
        "It is also a neat trade show device: a cover line naming your product means the photograph the attendee keeps carries a message.",
      ],
    },
    privateUse: {
      heading: "Birthdays and celebrations",
      paragraphs: [
        "Milestone birthdays, Sweet Sixteens and bachelorette parties use it most — a cover about the guest of honour lands better than a plain print.",
        "At weddings it works as a lighter alternative to a formal booth, particularly later in the evening.",
      ],
    },
    output: "Unlimited custom magazine cover prints plus instant sharing",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/magazine-booth-1.webp", alt: "Custom magazine cover produced at an event photo booth" },
      { src: "/img/magazine-booth-2.webp", alt: "Guests holding their magazine cover prints" },
      { src: "/img/template-1.jpg", alt: "Custom designed photo booth print template" },
      { src: "/img/template-2.jpg", alt: "Event print template design" },
    ],
    faqs: [
      {
        q: "Who writes the cover lines?",
        a: "We do, with you, before the event — and it is worth spending ten minutes on. Inside jokes about the team, the couple or the campaign are what make guests read each other's covers instead of pocketing their own.",
      },
      {
        q: "Can the masthead be our brand?",
        a: "Yes. The masthead, layout and cover lines are all designed for your event, and the whole cover can sit inside your brand's visual language.",
      },
      {
        q: "What size are the prints?",
        a: "Standard 4×6, printed dye-sublimation so they come out dry and handleable in seconds.",
      },
    ],
    related: ["green-screen-photo-booth", "glam-booth", "enclosed-photo-booth"],
  },

  {
    slug: "gif-booth",
    name: "GIF Booth",
    tagline:
      "A quick burst of frames becomes a loop guests post before they have left the booth.",
    meta: {
      title: "GIF Booth Rental New Jersey | Animated GIF Photo Booth",
      description:
        "GIF and boomerang photo booth rental across New Jersey. A burst of frames becomes a branded looping animation, shared to guests instantly. Built for social-first brand activations.",
    },
    h1: "GIF Booth",
    heroSub:
      "Four frames, one loop, and something guests can post immediately. It is the fastest interaction we run and the one that produces the most social volume per hour.",
    heroImg: {
      src: "/img/gif-booth-hero-4.gif",
      alt: "Animated GIF photo booth loop of guests at an event",
    },
    weight: "both",
    included: [
      "Burst capture producing looping GIFs and boomerangs",
      "Branded overlays and framing on every loop",
      "Instant delivery by text, email or QR code",
      "Optional print alongside the digital loop",
      "Trained attendant for the full booking",
      "Branded online gallery",
    ],
    prose: [
      {
        heading: "Movement is the point",
        paragraphs: [
          "A still asks a guest to hold a pose. A GIF asks them to do something, which is an easier request and produces far more natural results — a group falling about, a jump, a spin of a dress.",
          "It is quick, too. The whole interaction is over in seconds, so the throughput is higher than any other static booth. At a busy activation that matters more than it sounds.",
        ],
      },
      {
        heading: "Built for where it ends up",
        paragraphs: [
          "The output is sized and formatted for social from the start rather than being a print that happens to move, and the branded frame travels with it. That is the whole case for the GIF booth at a brand event: a high volume of on-brand, natively shareable content produced in a couple of hours.",
        ],
      },
    ],
    corporate: {
      heading: "Social-first activations",
      paragraphs: [
        "Where the brief is reach rather than keepsakes, this is the efficient choice. High throughput, low friction, and every loop carries your framing into a feed.",
        "It pairs naturally with opt-in capture, since guests are already giving a contact detail to receive the loop.",
      ],
    },
    privateUse: {
      heading: "Parties and receptions",
      paragraphs: [
        "At a party it tends to be the booth that gets used latest into the night, because it asks the least of anyone.",
        "Prints can run alongside the loops if you want guests to leave with something physical too.",
      ],
    },
    output: "Branded looping GIFs and boomerangs, prints optional",
    space: "10×10 ft ideal, 8×8 ft minimum",
    gallery: [
      { src: "/img/gif-booth-1.webp", alt: "GIF booth animated loop of event guests" },
      { src: "/img/gif-booth-2.webp", alt: "Guests creating a GIF at an event photo booth" },
      { src: "/img/gif-booth-5.webp", alt: "Branded GIF booth output frame" },
      { src: "/img/gif-booth-7.webp", alt: "GIF photo booth capture at a party" },
    ],
    faqs: [
      {
        q: "Do guests get a print as well?",
        a: "They can. The loop is the primary output and arrives on their phone in seconds; prints can run alongside it if you want something physical in the room too.",
      },
      {
        q: "How fast is each session?",
        a: "Seconds. It is the highest-throughput static booth we run, which is why it suits busy activations where a queue would otherwise build.",
      },
      {
        q: "Can the loops carry our branding?",
        a: "Yes — overlays and framing are built to your guidelines, and the loops land in a branded gallery.",
      },
    ],
    related: ["roaming-photo-booth", "branded-photo-booth", "3d-slider-booth"],
  },

  {
    slug: "3d-slider-booth",
    name: "3D Slider Booth",
    tagline:
      "A camera glides across a track mid-pose, capturing multiple angles in one take.",
    meta: {
      title: "3D Slider Photo Booth Rental New Jersey | Multi-Angle Capture",
      description:
        "3D slider photo booth rental across New Jersey. A camera travels a track mid-pose to capture multiple angles in one take, producing images with genuine depth.",
    },
    h1: "3D Slider Booth",
    heroSub:
      "The camera moves instead of the guest. Travelling a track mid-pose, it captures a sequence of angles that resolves into an image with real parallax — depth you cannot fake in software.",
    heroImg: {
      src: "/img/3d-slider-hero.jpg",
      alt: "3D slider photo booth camera travelling on a track",
    },
    weight: "both",
    included: [
      "Motorised camera slider with programmed travel",
      "Multi-angle capture composited into a 3D-effect output",
      "Branded overlays and framing",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full booking",
      "Branded online gallery",
    ],
    prose: [
      {
        heading: "Depth you cannot fake",
        paragraphs: [
          "Software can blur a background. It cannot manufacture parallax — the way near objects shift against far ones as a viewpoint moves. That only comes from genuinely moving the camera, which is exactly what the slider does.",
          "The result is subtle rather than showy, and it is the kind of thing guests look at twice trying to work out what is different.",
        ],
      },
      {
        heading: "Where it belongs",
        paragraphs: [
          "It suits smaller groups and considered poses more than a rowdy crowd, which makes it a good fit for product moments, gallery-style events and receptions rather than a late-night dance floor.",
          "Because the track needs a clear run, the placement is slightly less flexible than a static booth — worth planning early.",
        ],
      },
    ],
    corporate: {
      heading: "Product moments",
      paragraphs: [
        "The slider is unusually good at photographing a guest with an object — a product, a trophy, a prototype — because the parallax separates the two and gives the object presence.",
        "For a launch that is a genuinely useful property rather than a novelty.",
      ],
    },
    privateUse: {
      heading: "Receptions and celebrations",
      paragraphs: [
        "At a private event it works best earlier in the evening, with couples and small groups who will take a moment over the shot.",
        "It is a quieter choice than the 360 and reads as more considered.",
      ],
    },
    output: "Multi-angle 3D-effect images, shared instantly",
    space: "A clear run for the track — slightly more than a static booth",
    gallery: [
      { src: "/img/3d-slider-1.jpg", alt: "3D slider photo booth capturing a guest" },
      { src: "/img/3d-slider-2.jpg", alt: "Motorised camera slider at an event" },
      { src: "/img/3d-slider-3.jpg", alt: "Multi angle 3D slider booth output" },
    ],
    faqs: [
      {
        q: "What makes it different from a normal booth?",
        a: "The camera physically moves along a track during the capture, which produces genuine parallax between foreground and background. Software can blur a background; it cannot create that.",
      },
      {
        q: "How many guests at a time?",
        a: "Small groups work best. It rewards a considered pose more than a crowd, so it suits couples, pairs and product moments.",
      },
      {
        q: "Does it need more space than a standard booth?",
        a: "A little — the track needs a clear run. Worth planning against the floor plan early rather than deciding on the day.",
      },
    ],
    related: ["gif-booth", "studio-booth", "360-photo-booth"],
  },

  {
    slug: "enclosed-photo-booth",
    name: "Enclosed Booth",
    tagline:
      "The classic curtained cabinet. The curtain closes and the real personalities come out.",
    meta: {
      title: "Enclosed Photo Booth Rental New Jersey | Classic Booth Hire",
      description:
        "Enclosed and vintage-style photo booth rental across New Jersey. The classic curtained cabinet with unlimited photo strips, an attendant and instant sharing.",
    },
    h1: "Enclosed Photo Booth",
    heroSub:
      "A curtain, a bench, and the particular kind of photograph people only take when they think nobody is watching. The oldest format here, and still the one that produces the funniest strips.",
    heroImg: {
      src: "/img/enclosed-booth-hero-2.jpg",
      alt: "Classic enclosed curtained photo booth at an event",
    },
    weight: "private",
    included: [
      "Enclosed cabinet with a privacy curtain",
      "Pro camera and internal lighting",
      "Unlimited sessions and unlimited photo strips",
      "Custom-designed strip template",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full booking",
      "Curated props table",
    ],
    prose: [
      {
        heading: "Privacy is the feature",
        paragraphs: [
          "Every open booth has the same limitation: guests know the room can see them, so they perform for the room rather than the camera. Draw a curtain and that stops. What comes out is looser, sillier and considerably more honest.",
          "It is the only format here where the enclosure is doing the creative work, and it is why the strips from an enclosed booth are the ones that end up on a fridge.",
        ],
      },
      {
        heading: "A small footprint that solves problems",
        paragraphs: [
          "The cabinet takes a compact footprint compared to a mirror or a 360 platform, which makes it the practical answer in older New Jersey venues, restaurant buyouts and function rooms where floor space is genuinely tight.",
          "It also does not need a backdrop or clearance behind it, so it can sit against a wall.",
        ],
      },
    ],
    corporate: {
      heading: "Company parties and hospitality",
      paragraphs: [
        "At an internal party it is disarming in a way the more polished booths are not — colleagues get in together, the curtain closes, and something less formal happens.",
        "Strip templates carry your branding, and the compact footprint means it fits stands and hospitality suites where a larger experience will not.",
      ],
    },
    privateUse: {
      heading: "Weddings and birthdays",
      paragraphs: [
        "The nostalgia does a lot of work here — guests recognise the format from arcades, piers and old department stores, and treat it accordingly.",
        "For a wedding it is often booked alongside a mirror: one for the keepsake portrait, one for the strip nobody expected.",
      ],
    },
    output: "Unlimited classic photo strips plus instant sharing",
    space: "Compact cabinet footprint — fits where larger booths will not",
    gallery: [
      { src: "/img/enclosed-booth-2.jpg", alt: "Classic enclosed photo booth with privacy curtain" },
      { src: "/img/enclosed-booth-3.jpg", alt: "Guests inside an enclosed photo booth" },
      { src: "/img/enclosed-booth-4.jpg", alt: "Photo strips produced by the enclosed booth" },
    ],
    faqs: [
      {
        q: "How many people fit inside?",
        a: "Comfortably three or four on the bench, and rather more if the group is determined — which is usually how the best strips happen.",
      },
      {
        q: "How much space does it need?",
        a: "A compact cabinet footprint, and it can sit against a wall since it needs no backdrop or clearance behind. It is the booth that fits venues where nothing else will.",
      },
      {
        q: "Do guests get digital copies too?",
        a: "Yes — the strip prints in the room and the digital version arrives on their phone by text, email or QR code.",
      },
    ],
    related: ["magic-mirror", "gif-booth", "magazine-booth"],
  },

  {
    slug: "champagne-wall",
    name: "Champagne Wall",
    tagline:
      "A wall of filled glasses that turns into the most photographed corner of the night.",
    meta: {
      title: "Champagne Wall Rental New Jersey | Champagne Display Hire",
      description:
        "Champagne wall rental across New Jersey. A styled wall of filled glasses that doubles as a welcome moment and the most photographed corner of the room.",
    },
    h1: "Champagne Wall",
    heroSub:
      "Part welcome drink, part installation. Guests take a glass from the wall on the way in, and the wall spends the rest of the night being photographed by everyone who walks past it.",
    heroImg: {
      src: "/img/champagne-wall-hero.jpg",
      alt: "Champagne wall filled with glasses at an event entrance",
    },
    weight: "private",
    included: [
      "Styled champagne wall structure",
      "Setup, styling and restocking through the reception",
      "Choice of finishes to match your palette",
      "Optional signage or monogram panel",
      "On-site attendant managing the wall",
    ],
    prose: [
      {
        heading: "It solves the first ten minutes",
        paragraphs: [
          "The hardest part of any reception is the beginning — guests arrive in ones and twos, there is nothing to do, and the room takes half an hour to warm up. A champagne wall fixes that by giving everybody an immediate action and a reason to stand near other people.",
          "It also removes the bar queue at exactly the moment the bar cannot cope.",
        ],
      },
      {
        heading: "What it needs",
        paragraphs: [
          "A visible position on the entry route, and a conversation with your venue about who is pouring — most venues have a view on that, and it is far easier settled in advance than on the day.",
          "We handle the styling, the setup and keeping it stocked through the reception.",
        ],
      },
    ],
    corporate: {
      heading: "Receptions and launches",
      paragraphs: [
        "At a launch or a corporate reception it does the same job it does at a wedding: it makes arrival feel like an occasion and it photographs well behind a step-and-repeat.",
        "A monogram or logo panel can sit alongside it so the shots guests take carry your identity.",
      ],
    },
    privateUse: {
      heading: "Weddings and celebrations",
      paragraphs: [
        "Most often booked for the cocktail hour of a wedding, where it doubles as décor and a welcome drink.",
        "It pairs naturally with a flower wall — the two together make an arrival moment that needs nothing else.",
      ],
    },
    output: "An arrival moment and a photographed installation",
    space: "A visible wall position on the entry route",
    gallery: [
      { src: "/img/champagne-wall-1.jpg", alt: "Champagne wall styled for an event reception" },
      { src: "/img/champagne-wall-4.jpg", alt: "Guests taking glasses from a champagne wall" },
      { src: "/img/champagne-wall-7.jpg", alt: "Champagne wall with filled glasses at a wedding" },
      { src: "/img/champagne-wall-10.jpg", alt: "Champagne wall detail at an evening event" },
    ],
    faqs: [
      {
        q: "Do you supply the champagne?",
        a: "Service and licensing rules vary by venue, so who supplies and pours is settled with your venue in advance. We supply, style and manage the wall itself and keep it stocked through the reception.",
      },
      {
        q: "Can it match our colours?",
        a: "Yes — there is a choice of finishes, and a monogram or logo panel can sit alongside it.",
      },
      {
        q: "Where should it go?",
        a: "Somewhere visible on the arrival route. Tucked into a corner it becomes furniture; on the entry path it sets the tone for the whole evening.",
      },
    ],
    related: ["flower-wall", "mosaic-wall", "magic-mirror"],
  },

  {
    slug: "flower-wall",
    name: "Flower Wall",
    tagline:
      "Over thirty handmade floral backdrops, from soft blush to deep monochrome.",
    meta: {
      title: "Flower Wall Rental New Jersey | Floral Backdrop Hire",
      description:
        "Flower wall rental across New Jersey. Over thirty handmade floral backdrops for weddings, showers and brand moments — rent one alone or behind any photo booth.",
    },
    h1: "Flower Walls",
    heroSub:
      "More than thirty handmade walls, built rather than bought — soft blush and ivory through to deep monochrome. Rent one on its own, or put one behind any experience here.",
    heroImg: {
      src: "/img/flower-wall-hero-2.jpg",
      alt: "Handmade floral backdrop wall at an event",
    },
    weight: "private",
    included: [
      "Choice of over thirty handmade floral walls",
      "Delivery, setup and breakdown",
      "Styling against your palette",
      "Optional monogram, signage or neon panel",
      "Pairs with any booth in the inventory",
    ],
    prose: [
      {
        heading: "The backdrop decides the photograph",
        paragraphs: [
          "It is easy to spend the budget on the booth and leave it standing in front of a hotel curtain. The backdrop is what fills most of the frame, and swapping a bare wall for a floral one changes every photograph taken all night.",
          "The walls are handmade rather than bought in, which is the difference between a backdrop that reads as lush on camera and one that reads as plastic.",
        ],
      },
      {
        heading: "Standing alone",
        paragraphs: [
          "Plenty of events book a wall with no booth at all — as a ceremony backdrop, behind a top table, at an entrance, or as the corner guests photograph themselves against.",
          "Tell us the palette and the room and we will suggest which of the thirty actually suits it.",
        ],
      },
    ],
    corporate: {
      heading: "Brand moments and press walls",
      paragraphs: [
        "For beauty, fashion and lifestyle brands a floral wall is often a better press backdrop than a step-and-repeat, and it photographs considerably better on a phone.",
        "A logo or neon panel can sit within the wall so the branding stays present without dominating.",
      ],
    },
    privateUse: {
      heading: "Weddings and showers",
      paragraphs: [
        "Bridal showers, baby showers, engagement parties and weddings are the core of it — usually behind a booth, sometimes as the ceremony backdrop, often both across a single day.",
        "Blush and ivory remain the most requested; the deeper monochrome walls photograph strikingly at evening receptions.",
      ],
    },
    output: "A backdrop that improves every photograph taken against it",
    space: "Sized to the wall you choose — most fit a standard function room run",
    gallery: [
      { src: "/img/flower-wall-1.jpg", alt: "Blush and ivory handmade flower wall" },
      { src: "/img/flower-wall-8.jpg", alt: "Floral backdrop wall at a wedding reception" },
      { src: "/img/flower-wall-16.jpg", alt: "Deep monochrome flower wall at an evening event" },
      { src: "/img/flower-wall-24.jpg", alt: "Flower wall used as a ceremony backdrop" },
      { src: "/img/flower-wall-33.jpg", alt: "Handmade floral wall behind a photo booth" },
      { src: "/img/flower-wall-41.jpg", alt: "Floral backdrop styled for a bridal shower" },
    ],
    faqs: [
      {
        q: "Can we rent a wall without a booth?",
        a: "Yes, and plenty of events do — as a ceremony backdrop, behind a top table, or as an entrance moment.",
      },
      {
        q: "How many walls are there to choose from?",
        a: "More than thirty, all handmade, ranging from soft blush and ivory to deep monochrome. Send us your palette and the room and we will narrow it down.",
      },
      {
        q: "Can we add a monogram or neon sign?",
        a: "Yes — monogram, signage and neon panels can be set within the wall.",
      },
    ],
    related: ["champagne-wall", "magic-mirror", "glam-booth"],
  },
];
