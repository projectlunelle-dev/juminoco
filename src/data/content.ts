export const SITE = {
  name: "juminoco*",
  tagline: "design in the everyday",
  greeting: "Hi, I’m Jumin.",
  bio: "A designer and creative storyteller inspired by everyday moments, quiet places, and the little things that feel like home.",
  currently: "designing gentle things with love",
  email: "hello@juminoco.com",
  instagram: "@juminoco.studio",
  instagramUrl: "https://instagram.com/juminoco.studio",
  location: "Based in Japan",
  motto: "collect moments, create meaning.",
  copyright: "© 2025 juminoco. all rights reserved.",
};

export const NAV = [
  { to: "/", label: "home" },
  { to: "/work", label: "work" },
  { to: "/about", label: "about" },
  { to: "/journal", label: "journal" },
  { to: "/contact", label: "contact" },
] as const;

export type NavTo = (typeof NAV)[number]["to"];

export const FILM_FRAMES = [
  {
    src: "/images/film-summer.jpg",
    alt: "Blue ramune bottles on a summer table",
    label: "summer day",
  },
  {
    src: "/images/film-friend.jpg",
    alt: "A small white rabbit plush",
    label: "new friend",
  },
  {
    src: "/images/film-rain.jpg",
    alt: "Two people walking with clear umbrellas",
    label: "rainy afternoon",
  },
  {
    src: "/images/film-finds.jpg",
    alt: "Stationery and a pale blue journal",
    label: "good finds",
  },
  {
    src: "/images/film-slow.jpg",
    alt: "A quiet green river in summer",
    label: "slow living",
  },
  {
    src: "/images/film-sweet.jpg",
    alt: "Apples growing on a tree",
    label: "sweet things",
  },
] as const;

export const HOME_CARDS = [
  {
    key: "projects",
    icon: "camera" as const,
    title: "Projects",
    body: "Branding, visuals, and design work made with intention and care.",
    cta: "view projects",
    to: "/work",
    image: "/images/card-daisies.jpg",
    imageAlt: "A field of white daisies",
  },
  {
    key: "creative",
    icon: "palette" as const,
    title: "Creative Work",
    body: "Illustration, collage, print, and playful experiments.",
    cta: "see gallery",
    to: "/gallery",
    image: "/images/card-clover-art.jpg",
    imageAlt: "Clover stationery and botanical cards",
  },
  {
    key: "brand",
    icon: "clover" as const,
    title: "Brand Direction",
    body: "Helping brands find their voice, story, and visual identity.",
    cta: "brand work",
    to: "/brand",
    image: "/images/card-brand.jpg",
    imageAlt: "Gentle packaging and a green bottle",
  },
  {
    key: "about",
    icon: "cat" as const,
    title: "About Me",
    body: "More about my background, values, and daily inspirations.",
    cta: "get to know me",
    to: "/about",
    image: "/images/card-photographer.jpg",
    imageAlt: "Taking a photo by the window",
  },
] as const;

export const PROJECTS = [
  {
    slug: "clover-postal",
    title: "Clover Postal",
    year: "2025",
    tags: ["identity", "print", "stationery"],
    summary:
      "A letter-writing set for slow correspondence — clover motifs, cream stock, and a stamp kit that feels like a keepsake.",
    image: "/images/card-clover-art.jpg",
    gallery: ["/images/card-clover-art.jpg", "/images/film-finds.jpg", "/images/journal-sketchbook.jpg"],
  },
  {
    slug: "meadow-cupboard",
    title: "Meadow Cupboard",
    year: "2025",
    tags: ["packaging", "brand"],
    summary:
      "Small-batch tea with pressed-clover labels, linen pouches, and a quiet ritual for the afternoon light.",
    image: "/images/project-tea.jpg",
    gallery: ["/images/project-tea.jpg", "/images/desk.jpg", "/images/film-slow.jpg"],
  },
  {
    slug: "sunday-jam",
    title: "Sunday Jam",
    year: "2024",
    tags: ["packaging", "illustration"],
    summary:
      "Fruit preserves wrapped in gingham and hand-drawn apples. A pantry that looks like a picnic.",
    image: "/images/project-jam.jpg",
    gallery: ["/images/project-jam.jpg", "/images/film-sweet.jpg", "/images/film-summer.jpg"],
  },
  {
    slug: "window-seat",
    title: "Window Seat",
    year: "2024",
    tags: ["editorial", "space"],
    summary:
      "Visual direction for a neighborhood cafe: melon soda, sketchbooks, and the kind of light that makes you stay.",
    image: "/images/cafe.jpg",
    gallery: ["/images/cafe.jpg", "/images/project-editorial.jpg", "/images/hydrangeas.jpg"],
  },
] as const;

export const GALLERY = [
  { src: "/images/card-clover-art.jpg", caption: "clover postal studies", kind: "print" },
  { src: "/images/journal-sketchbook.jpg", caption: "sketchbook pages", kind: "drawing" },
  { src: "/images/hydrangeas.jpg", caption: "after the rain", kind: "photo" },
  { src: "/images/film-finds.jpg", caption: "good finds", kind: "photo" },
  { src: "/images/film-friend.jpg", caption: "new friend", kind: "photo" },
  { src: "/images/film-summer.jpg", caption: "summer day", kind: "photo" },
  { src: "/images/lcd-train.jpg", caption: "the green train", kind: "photo" },
  { src: "/images/journal-clovers.jpg", caption: "little green things", kind: "photo" },
  { src: "/images/desk.jpg", caption: "afternoon desk", kind: "photo" },
  { src: "/images/film-rain.jpg", caption: "rainy afternoon", kind: "photo" },
  { src: "/images/project-editorial.jpg", caption: "pressed pages", kind: "print" },
  { src: "/images/cafe.jpg", caption: "window seat", kind: "photo" },
] as const;

export const BRAND_CASES = [
  {
    slug: "clover-postal",
    title: "Clover Postal",
    role: "Brand direction, print system",
    image: "/images/card-clover-art.jpg",
    story:
      "A stationery house that wanted to feel like a letter from a friend. We built a voice around luck found in ordinary days — four-leaf marks, cream papers, and a stamp that looks well-loved.",
    points: [
      "Name, mark, and a flexible clover lockup",
      "Paper suite: letter set, seals, wrapping",
      "A quiet green that still photographs softly",
    ],
  },
  {
    slug: "meadow-cupboard",
    title: "Meadow Cupboard",
    role: "Identity, packaging, art direction",
    image: "/images/project-tea.jpg",
    story:
      "A cupboard brand for people who steep tea like a small ceremony. The system is linen, pressed plants, and type that never raises its voice.",
    points: [
      "Packaging that sits well on an open shelf",
      "Photography direction: window light only",
      "A story told in three words: steep, wait, sip",
    ],
  },
  {
    slug: "sunday-jam",
    title: "Sunday Jam",
    role: "Packaging, illustration",
    image: "/images/project-jam.jpg",
    story:
      "Jars that look like they were wrapped at the kitchen table. Gingham lids, fruit drawings, and labels you want to keep.",
    points: [
      "Illustrated fruit set (apple, strawberry, citrus)",
      "Gingham cloth language across the line",
      "A mark that works at stamp size",
    ],
  },
] as const;

export type JournalPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const JOURNAL: JournalPost[] = [
  {
    slug: "little-green-things",
    date: "05.20.25",
    title: "little green things",
    excerpt: "Finding luck in the smallest places.",
    image: "/images/journal-clovers.jpg",
    body: [
      "I keep a small bowl of water on the desk for clovers. They float like tiny boats. Most of them have three leaves, which is already enough. Every so often a fourth appears, and I pretend I was looking for it all along.",
      "Luck, I think, is mostly attention. The same walk, the same wall, the same patch of weeds — and then a green heart you almost stepped on.",
      "I photographed them from above, the way I photograph almost everything lately: quietly, a little too close, as if the object might get shy.",
    ],
  },
  {
    slug: "a-slow-walk-home",
    date: "05.17.25",
    title: "a slow walk home",
    excerpt: "Neighborhood sunlight and quiet roads.",
    image: "/images/journal-street.jpg",
    body: [
      "The long way home is always the better one. Tile roofs, a stone wall with moss in the seams, a hill that makes you breathe on purpose.",
      "Late light here is the color of tea. It sits on the road and does not hurry. I took one frame and then put the camera away, which is its own kind of picture.",
      "I like living somewhere the streets still feel like they belong to the people who walk them.",
    ],
  },
  {
    slug: "sketchbook-pages",
    date: "05.14.25",
    title: "sketchbook pages",
    excerpt: "Doodles, stickers, and random thoughts.",
    image: "/images/journal-sketchbook.jpg",
    body: [
      "A page is a place to be unfinished. Clovers, a cup, a note I cannot read later, washi that refuses to sit straight.",
      "I do not make sketchbooks to show. I make them so the day has somewhere to land. Stickers help. They are like tiny yeses.",
      "If a thought is too small for a project, it still deserves a corner.",
    ],
  },
  {
    slug: "rainy-afternoon",
    date: "05.10.25",
    title: "rainy afternoon",
    excerpt: "Clear umbrellas and the sound of the street.",
    image: "/images/film-rain.jpg",
    body: [
      "Rain makes a city honest. The umbrellas go up and suddenly everyone is carrying a little greenhouse.",
      "I followed two people for three steps, which is all a photograph really needs. Faces were not the point. The vinyl, the wet road, the green at the edge of the frame — that was the point.",
    ],
  },
  {
    slug: "collecting-summer",
    date: "05.02.25",
    title: "collecting summer",
    excerpt: "Ramune blue and the first warm day.",
    image: "/images/film-summer.jpg",
    body: [
      "The first ramune of the season always tastes like a dare. The marble, the fizz, the blue that cannot possibly be a real flavor and yet is.",
      "I lined the bottles up by the window and took a picture as if they were guests. Summer, collected in glass.",
    ],
  },
  {
    slug: "the-green-train",
    date: "04.28.25",
    title: "the green train",
    excerpt: "Hydrangeas leaning in to watch it pass.",
    image: "/images/lcd-train.jpg",
    body: [
      "There is a tram that still looks like a toy on purpose. Cream and green, a little shy, threading the houses.",
      "In hydrangea season the flowers lean over the tracks as if they paid for a ticket. I stood still and let the frame fill up. Collecting beautiful moments, one passing car at a time.",
    ],
  },
];

export function getJournal(slug: string) {
  return JOURNAL.find((p) => p.slug === slug);
}

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
