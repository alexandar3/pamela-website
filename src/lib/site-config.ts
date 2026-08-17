// Central place to edit site-wide constants without touching component code.

export const SITE_URL = "https://pamelatech.com";

export const CALENDLY_URL = "https://calendly.com/apopovic997/30min";

export const CONTACT_EMAIL = "apopovic997@gmail.com";

export const INSTAGRAM_URL = "https://www.instagram.com/pamelatech.ai/";

export type Service = {
  slug: string;
  // Leave undefined for services without a real photo/video yet — the
  // layout falls back to an animated wireframe mockup instead. One entry
  // renders as a single video; more than one renders as a scrollable
  // carousel.
  videos?: string[];
};

// Add new services here later — the layout supports any number of entries
// without restructuring. Copy for each slug lives in src/lib/i18n/translations.ts
// so it can be localized.
export const SERVICES: Service[] = [
  {
    slug: "real-estate",
    videos: [
      "/videos/real-estate-cinematic.mp4",
      "/videos/Ivan_Export.mp4",
      "/videos/upload.mp4",
      "/videos/final1.mp4",
    ],
  },
  {
    slug: "ai-marketing",
    videos: ["/videos/product-motion-design.mp4"],
  },
  {
    slug: "landing-pages",
  },
];

