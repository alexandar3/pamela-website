// Central place to edit site-wide constants without touching component code.

export const SITE_URL = "https://pamelatech.com";

export const CALENDLY_URL = "https://calendly.com/apopovic997/30min";

export const CONTACT_EMAIL = "apopovic997@gmail.com";

export const INSTAGRAM_URL = "https://www.instagram.com/pamelatech.ai/";

export type Service = {
  slug: string;
  // Leave undefined for services without a real photo/video yet — the
  // layout falls back to an animated wireframe mockup instead.
  video?: string;
};

// Add new services here later — the layout supports any number of entries
// without restructuring. Copy for each slug lives in src/lib/i18n/translations.ts
// so it can be localized.
export const SERVICES: Service[] = [
  {
    slug: "real-estate",
    video: "/videos/real-estate-cinematic.mp4",
  },
  {
    slug: "ai-marketing",
    video: "/videos/product-motion-design.mp4",
  },
  {
    slug: "landing-pages",
  },
];

