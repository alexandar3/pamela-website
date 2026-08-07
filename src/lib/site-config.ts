// Central place to edit site-wide constants without touching component code.

export const CALENDLY_URL = "https://calendly.com/apopovic997/30min";

export const CONTACT_EMAIL = "apopovic997@gmail.com";

export type Service = {
  slug: string;
  name: string;
  // Leave undefined for services without a real photo/video yet — the
  // layout falls back to an animated wireframe mockup instead.
  video?: string;
  eyebrow: string;
  copy: string;
  ctaLabel: string;
  // Optional proof-point stat rendered as a callout under the copy.
  // Leave undefined for services that don't have one yet.
  stat?: string;
};

// Add new services here later — the layout supports any number of entries
// without restructuring.
export const SERVICES: Service[] = [
  {
    slug: "real-estate",
    name: "Real Estate Cinematic Videos",
    video: "/videos/real-estate-cinematic.mp4",
        eyebrow: "For Real Estate Agencies",
    copy: "Traditional real estate videos require a cameraman, editing, and time on location. We create high-quality cinematic property videos using AI from existing listing images—no filming required. The result is premium marketing content that captures attention, increases engagement, and helps listings stand out, while saving time and significantly reducing production costs.",
    ctaLabel: "Get a video like this",
    stat: "64% report that video gives them higher confidence in making a purchase or rental decision.",
  },
  {
    slug: "ai-marketing",
    name: "AI Marketing Videos",
    video: "/videos/product-motion-design.mp4",
        eyebrow: "For Businesses",
    copy: "A full marketing team means salaries, contracts, and slow turnaround. We create AI marketing videos in bundles—ads, promos, social content—giving businesses a steady stream of scroll-stopping video at a fraction of the cost and speed of an in-house team or agency.",
    ctaLabel: "Get a video like this",
  },
  {
    slug: "landing-pages",
    name: "Landing Page Websites",
    eyebrow: "For Small & Medium Businesses",
    copy: "Most small businesses either don't have a website or are stuck with one that hasn't been touched in years. We design and build fast, modern landing pages—from copy to layout to launch—using AI to move at a fraction of the usual cost and timeline. The result is a site that actually converts visitors into customers, live in days instead of months.",
    ctaLabel: "Get a website like this",
    stat: "75% of consumers admit to judging a business's credibility based on its website design.",
  },
];

