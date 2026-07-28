// Central place to edit site-wide constants without touching component code.

export const CALENDLY_URL = "https://calendly.com/apopovic997/30min";

export const CONTACT_EMAIL = "apopovic997@gmail.com";

export type Service = {
  slug: string;
  name: string;
  video: string;
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
    slug: "product-motion",
    name: "Product Motion Design Videos",
    video: "/videos/product-motion-design.mp4",
    eyebrow: "For Product-Based Businesses",
    copy: "Static images are easy to ignore. Cinematic video stops the scroll, showcases your product in action, and creates a stronger emotional connection with potential customers—leading to higher engagement, more clicks, and better conversion rates.",
    ctaLabel: "Get a video like this",
  },
];

export type PricingAccent = "blue" | "green" | "purple";

export type PricingTier = {
  id: string;
  name: string;
  price: number;
  currency: string;
  tagline: string;
  badge?: string;
  accent: PricingAccent;
  includedFeatures: string[];
  excludedFeatures: string[];
  highlighted?: boolean;
};

// Single source of truth for pricing. Edit numbers/copy here — nothing else
// needs to change.
export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 500,
    currency: "$",
    tagline: "For agents with a few active listings",
    accent: "blue",
    includedFeatures: [
      "3 cinematic listing videos a month",
      "Delivered ready to post",
      "First video free to try",
    ],
    excludedFeatures: ["Photo staging not included", "Social media not included"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 1250,
    currency: "$",
    tagline: "For busy agents who post often",
    badge: "MOST POPULAR",
    accent: "green",
    includedFeatures: [
      "10 cinematic listing videos a month",
      "Virtual staging on your photos",
      "Photo enhancement and lighting",
      "First video free to try",
    ],
    excludedFeatures: ["Social media not included"],
    highlighted: true,
  },
  {
    id: "pro-max",
    name: "Pro Max",
    price: 2500,
    currency: "$",
    tagline: "Replace your whole marketing agency",
    accent: "purple",
    includedFeatures: [
      "25 cinematic listing videos a month",
      "Virtual staging and photo enhancement",
      "We deliver posting-ready captions and hashtags for each video",
      "First video free to try",
    ],
    excludedFeatures: [],
  },
];
