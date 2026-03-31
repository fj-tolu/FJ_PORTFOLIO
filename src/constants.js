/**
 * Set DEMO_MODE to false once you have uploaded your images to the /public/assets/image folder.
 * This allows you to see the app working with placeholder images while you prepare your assets.
 */
const DEMO_MODE = false; 

/**
 * Helper to generate image paths based on the requested structure:
 * /assets/image/[company-slug]/[type]/[filename]
 */
const getAssetPath = (companySlug, type, fileName, fallbackSeed) => {
  if (DEMO_MODE) {
    // Fallback to picsum for demo purposes
    if (type === 'thumbnail') return `https://picsum.photos/seed/${fallbackSeed}/800/1000`;
    return `https://picsum.photos/seed/${fallbackSeed}-${fileName}/800/800`;
  }
  return `/assets/image/${companySlug}/${type}/${fileName}`;
};

export const PROJECTS = [
  {
    id: "agrogrid-branding",
    title: "Agrogrid Tech",
    company: "Agrogrid",
    slug: "agrogrid",
    description: "Agricultural technology solutions and digital branding.",
    thumbnail: getAssetPath("agrogrid", "thumbnail", "main.jpg", "agro-t"),
    gallery: Array.from({ length: 8 }).map((_, i) => getAssetPath("agrogrid", "carousel", `${i + 1}.jpg`, "agro-t")),
    category: 'social',
  },
  {
    id: "mk-realty-listings",
    title: "MK Realty",
    company: "MK-realty",
    slug: "mk-realty",
    description: "Premium property listings and real estate marketing.",
    thumbnail: getAssetPath("mk-realty", "thumbnail", "main.jpg", "mk-r"),
    gallery: Array.from({ length: 10 }).map((_, i) => getAssetPath("mk-realty", "carousel", `${i + 1}.jpg`, "mk-r")),
    category: 'social',
  },
  {
    id: "car-dealer-social",
    title: "Car Dealer",
    company: "Car-dealer",
    slug: "car-dealer",
    description: "Automotive dealership promotions and social media content.",
    thumbnail: getAssetPath("car-dealer", "thumbnail", "main.jpg", "car-d"),
    gallery: Array.from({ length: 8 }).map((_, i) => getAssetPath("car-dealer", "carousel", `${i + 1}.jpg`, "car-d")),
    category: 'social',
  },
  {
    id: "solar-tech-identity",
    title: "Solar Tech",
    company: "Solar Tech",
    slug: "solar-tech",
    description: "Sustainable energy technology branding and visual identity.",
    thumbnail: getAssetPath("solar-tech", "thumbnail", "main.jpg", "solar-t"),
    gallery: Array.from({ length: 10 }).map((_, i) => getAssetPath("solar-tech", "carousel", `${i + 1}.jpg`, "solar-t")),
    category: 'social',
  },
  {
    id: "itsa-social",
    title: "ITSA Association",
    company: "ITSA",
    slug: "itsa",
    description: "Information Technology Student Association community engagement.",
    thumbnail: getAssetPath("itsa", "thumbnail", "main.jpg", "itsa-s"),
    gallery: Array.from({ length: 8 }).map((_, i) => getAssetPath("itsa", "carousel", `${i + 1}.jpg`, "itsa-s")),
    category: 'social',
  },
  {
    id: "sales-flyers",
    title: "Brand Sales",
    company: "Sales",
    slug: "sales",
    description: "Diverse sales flyers and promotional materials for various brands.",
    thumbnail: getAssetPath("sales", "thumbnail", "main.jpg", "sales-f"),
    gallery: Array.from({ length: 12 }).map((_, i) => getAssetPath("sales", "carousel", `${i + 1}.jpg`, "sales-f")),
    category: 'social',
  },
  {
    id: "school-educational",
    title: "School Designs",
    company: "School",
    slug: "school",
    description: "Educational flyers and school-related branding materials.",
    thumbnail: getAssetPath("school", "thumbnail", "main.jpg", "school-e"),
    gallery: Array.from({ length: 10 }).map((_, i) => getAssetPath("school", "carousel", `${i + 1}.jpg`, "school-e")),
    category: 'social',
  },
  {
    id: "church-designs",
    title: "Church Outreach",
    company: "Church",
    slug: "church",
    description: "Visual designs and promotional materials for church-related tasks.",
    thumbnail: getAssetPath("church", "thumbnail", "main.jpg", "church-d"),
    gallery: Array.from({ length: 10 }).map((_, i) => getAssetPath("church", "carousel", `${i + 1}.jpg`, "church-d")),
    category: 'social',
  },
];

export const MARQUEE_IMAGES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  url: DEMO_MODE 
    ? `https://picsum.photos/seed/marquee-${i}/600/600`
    : `/assets/image/marquee/${i + 1}.jpg`,
}));
