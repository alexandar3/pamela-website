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

export type PricingTier = {
  id: string;
  name: string;
  price: number;
  currency: string;
  clips: number;
  description: string;
  features: string[];
  turnaround: string;
  revisions: string;
  highlighted?: boolean;
};

// Single source of truth for pricing. Edit numbers/copy here — nothing else
// needs to change.
export const PRICING_TIERS: PricingTier[] = [
  {
    id: "standard",
    name: "Standard",
    price: 250,
    currency: "$",
    clips: 10,
    description: "A solid starting package for testing what AI-driven production can do for you.",
    features: [
      "10 finished clips",
      "Standard-tier AI models (Kling / Seedance-class)",
      "720p–1080p delivery",
    ],
    turnaround: "7 business days",
    revisions: "1 round of revisions",
  },
  {
    id: "pro",
    name: "Pro",
    price: 650,
    currency: "$",
    clips: 30,
    description: "The most popular tier — more volume, premium models where it matters, faster delivery.",
    features: [
      "30 finished clips",
      "Premium models where they improve the shot (Veo / Sora-class)",
      "1080p delivery",
      "Vertical + horizontal exports",
    ],
    turnaround: "5 business days",
    revisions: "2 rounds of revisions",
    highlighted: true,
  },
  {
    id: "pro-max",
    name: "Pro Max",
    price: 1200,
    currency: "$",
    clips: 60,
    description: "For teams running high-volume content pipelines who need top quality, fast.",
    features: [
      "60 finished clips",
      "Premium models throughout",
      "Priority turnaround",
      "Full multi-platform export pack",
      "Dedicated project channel",
    ],
    turnaround: "3 business days",
    revisions: "Unlimited revisions",
  },
];
