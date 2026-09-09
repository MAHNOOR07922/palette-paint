export interface PaletteColor {
  name: string;
  hex: string;
}

export interface Mood {
  id: string;
  name: string;
  titleLine1: string;
  titleAccent: string;
  description: string;
  chips: string[];
  palette: PaletteColor[];
  medium: string;
}

export const MOODS: Mood[] = [
  {
    id: "blue-hour-harbor",
    name: "Quiet Harbor",
    titleLine1: "A quiet harbor at",
    titleAccent: "blue hour",
    description:
      "Loose, wet-on-wet brushwork. Let the water mirror the sky and let the light do the work.",
    chips: ["Contemplative", "Melancholic", "Rhythmic"],
    palette: [
      { name: "Deep water", hex: "#0E1420" },
      { name: "Dusk blue", hex: "#2C4A5E" },
      { name: "Harbor mist", hex: "#5B7D94" },
      { name: "Pale sky", hex: "#A9C3D1" },
      { name: "Lamplight", hex: "#EFE3C9" },
    ],
    medium: "Oil on linen",
  },
  {
    id: "dusk-orchard",
    name: "Dusk Orchard",
    titleLine1: "An orchard going",
    titleAccent: "soft at dusk",
    description:
      "Fruit trees dissolving into violet air. Work from dark to light and keep edges soft.",
    chips: ["Dreamy", "Tender", "Slow"],
    palette: [
      { name: "Plum shadow", hex: "#2A1F33" },
      { name: "Bruised violet", hex: "#7A5A8A" },
      { name: "Orchid haze", hex: "#B08CB8" },
      { name: "Petal", hex: "#E6C9D6" },
      { name: "Last light", hex: "#F6E9DC" },
    ],
    medium: "Watercolor",
  },
  {
    id: "moss-fern",
    name: "Moss & Fern",
    titleLine1: "A forest floor in",
    titleAccent: "quiet detail",
    description:
      "Small world, big attention. Study one square foot of moss, fern and stone like a portrait.",
    chips: ["Patient", "Organic", "Grounded"],
    palette: [
      { name: "Deep moss", hex: "#1C2418" },
      { name: "Fern", hex: "#5E7A4E" },
      { name: "Lichen", hex: "#8FA876" },
      { name: "New leaf", hex: "#D8E6A8" },
      { name: "Birch bark", hex: "#EAE6DA" },
    ],
    medium: "Graphite & wash",
  },
  {
    id: "neon-rain",
    name: "Neon Rain",
    titleLine1: "A wet street lit by",
    titleAccent: "neon signs",
    description:
      "Bold shapes and electric reflections. Let the pavement carry half the color in the scene.",
    chips: ["Electric", "Cinematic", "Nocturnal"],
    palette: [
      { name: "Night asphalt", hex: "#0B0B14" },
      { name: "Ultraviolet", hex: "#5A3FD6" },
      { name: "Neon magenta", hex: "#E0449B" },
      { name: "Sign pink", hex: "#FF8FB1" },
      { name: "Wet glow", hex: "#8EF2F2" },
    ],
    medium: "Gouache & ink",
  },
  {
    id: "sun-bleached",
    name: "Sun Bleached",
    titleLine1: "A midday wall in",
    titleAccent: "hard sunlight",
    description:
      "Almost no shadows, almost no mercy. Flat planes of heat-bleached color, one sharp edge.",
    chips: ["Warm", "Minimal", "Bold"],
    palette: [
      { name: "Terracotta", hex: "#B4502E" },
      { name: "Clay", hex: "#D98A5B" },
      { name: "Sand", hex: "#EFD3A8" },
      { name: "Linen", hex: "#F6EEDC" },
      { name: "Sky slit", hex: "#7FB3C9" },
    ],
    medium: "Acrylic on board",
  },
  {
    id: "first-snow",
    name: "First Snow",
    titleLine1: "The first snow on",
    titleAccent: "a dark field",
    description:
      "Restraint is the whole exercise. Two values, one accent, and silence you can hear.",
    chips: ["Quiet", "Sparse", "Cold"],
    palette: [
      { name: "Frozen soil", hex: "#1A1D22" },
      { name: "Slate", hex: "#4A5560" },
      { name: "Snowfall", hex: "#B9C6CE" },
      { name: "First snow", hex: "#E8EEF1" },
      { name: "Winter berry", hex: "#B0383F" },
    ],
    medium: "Ink & sumi wash",
  },
  {
    id: "citrus-morning",
    name: "Citrus Morning",
    titleLine1: "A kitchen table at",
    titleAccent: "seven a.m.",
    description:
      "Ordinary objects, extraordinary light. Oranges, a glass of water, and the sun showing off.",
    chips: ["Bright", "Domestic", "Optimistic"],
    palette: [
      { name: "Tangerine", hex: "#E8792E" },
      { name: "Marigold", hex: "#F2B13C" },
      { name: "Cream", hex: "#F8EFD8" },
      { name: "Glass green", hex: "#7FA886" },
      { name: "Shadow teal", hex: "#2E4F4A" },
    ],
    medium: "Colored pencil",
  },
  {
    id: "deep-sea",
    name: "Deep Sea",
    titleLine1: "Something glowing in",
    titleAccent: "the deep sea",
    description:
      "Darkness as a material. One bioluminescent subject emerging from total blue-black.",
    chips: ["Mysterious", "Luminous", "Surreal"],
    palette: [
      { name: "Abyss", hex: "#050A14" },
      { name: "Midnight", hex: "#122640" },
      { name: "Depth blue", hex: "#2E5A7D" },
      { name: "Biolume", hex: "#63D9C6" },
      { name: "Jelly glow", hex: "#C9F2EA" },
    ],
    medium: "Pastel on black paper",
  },
  {
    id: "old-library",
    name: "Old Library",
    titleLine1: "Dust motes in a",
    titleAccent: "library window",
    description:
      "Warm browns and slanted light. Paint the feeling of a room that smells like paper.",
    chips: ["Nostalgic", "Warm", "Studious"],
    palette: [
      { name: "Leather", hex: "#3A2417" },
      { name: "Oak", hex: "#6E4A2B" },
      { name: "Amber", hex: "#C08A3E" },
      { name: "Parchment", hex: "#E8D8B4" },
      { name: "Faded green", hex: "#7A8462" },
    ],
    medium: "Oil on panel",
  },
  {
    id: "spring-riot",
    name: "Spring Riot",
    titleLine1: "A garden that is",
    titleAccent: "too much",
    description:
      "Every color at once and no apologizing. Crowded blooms, overlapping petals, joyful chaos.",
    chips: ["Exuberant", "Lush", "Playful"],
    palette: [
      { name: "Leaf dark", hex: "#20401F" },
      { name: "Poppy", hex: "#E0453A" },
      { name: "Peony", hex: "#F293B8" },
      { name: "Daffodil", hex: "#F5D94E" },
      { name: "Sky break", hex: "#A8D8E8" },
    ],
    medium: "Gouache",
  },
  {
    id: "concrete-dawn",
    name: "Concrete Dawn",
    titleLine1: "A brutalist block at",
    titleAccent: "first light",
    description:
      "Geometry and atmosphere. Huge grey masses, one gradient sky, a single lit window.",
    chips: ["Stark", "Architectural", "Moody"],
    palette: [
      { name: "Concrete dark", hex: "#23262B" },
      { name: "Concrete", hex: "#565C64" },
      { name: "Fog", hex: "#9AA3AB" },
      { name: "Dawn rose", hex: "#E0A895" },
      { name: "Lit window", hex: "#F2D78A" },
    ],
    medium: "Gouache & masking tape",
  },
  {
    id: "midnight-carnival",
    name: "Midnight Carnival",
    titleLine1: "A closed carnival at",
    titleAccent: "midnight",
    description:
      "Still rides, half-lit bulbs, a little eerie. Nostalgia with the power switched off.",
    chips: ["Eerie", "Nostalgic", "Theatrical"],
    palette: [
      { name: "Night purple", hex: "#171225" },
      { name: "Burgundy", hex: "#6B2540" },
      { name: "Old gold", hex: "#C9982F" },
      { name: "Bulb light", hex: "#F2E3B3" },
      { name: "Teal shadow", hex: "#2E5A5A" },
    ],
    medium: "Ink & markers",
  },
];

export const SUBJECTS: string[] = [
  "A single object from your desk, painted three times",
  "The view from the nearest window, simplified to 5 shapes",
  "A person waiting — bus stop, doorway, or pier",
  "An animal mid-motion, caught off guard",
  "A meal before anyone eats it",
  "A building with one window lit",
  "Hands doing something ordinary",
  "A tree you pass every day",
  "The contents of a pocket, arranged like an altar",
  "A road that disappears into weather",
  "Two chairs facing each other, empty",
  "A reflection that tells a different story",
];

export const MEDIUMS: string[] = [
  "Watercolor",
  "Gouache",
  "Oil on linen",
  "Acrylic on board",
  "Graphite & wash",
  "Ink & sumi wash",
  "Pastel on toned paper",
  "Colored pencil",
  "Digital, one layer only",
  "Collage & paint",
];

export const COMPOSITIONS: string[] = [
  "Rule of thirds — subject off-center",
  "Low horizon, huge sky",
  "Tight crop — let the subject leave the frame",
  "Dead center, symmetrical",
  "Diagonal leading line, corner to corner",
  "Foreground object frames the scene",
  "Negative space does the talking",
  "High vantage, looking straight down",
];

export const LIGHTINGS: string[] = [
  "Golden hour, long shadows",
  "Overcast and even, no shadows",
  "Single warm lamp in a dark room",
  "Backlit — subject as silhouette",
  "Blue hour, mixed warm windows",
  "Harsh midday, hard edges",
  "Moonlight with one cool accent",
  "Light from below, slightly uncanny",
];

export const TIME_LIMITS: string[] = [
  "15 minutes — gesture only",
  "25 minutes, no overthinking",
  "45 minutes, then stop mid-stroke",
  "One hour, one sitting",
  "No limit — but only 20 brushstrokes",
  "Two sessions: sketch today, paint tomorrow",
];

export interface Brief {
  mood: Mood;
  subject: string;
  medium: string;
  composition: string;
  lighting: string;
  timeLimit: string;
}

const pick = <T,>(arr: readonly T[], exclude?: T): T => {
  let item = arr[Math.floor(Math.random() * arr.length)]!;
  while (exclude !== undefined && arr.length > 1 && item === exclude) {
    item = arr[Math.floor(Math.random() * arr.length)]!;
  }
  return item;
};

export function rollField<T>(arr: readonly T[], current: T): T {
  return pick(arr, current);
}

export function rollBrief(currentMoodId?: string): Brief {
  const current = MOODS.find((m) => m.id === currentMoodId);
  const mood = current ? pick(MOODS, current) : pick(MOODS);
  return {
    mood,
    subject: pick(SUBJECTS),
    medium: mood.medium,
    composition: pick(COMPOSITIONS),
    lighting: pick(LIGHTINGS),
    timeLimit: pick(TIME_LIMITS),
  };
}
