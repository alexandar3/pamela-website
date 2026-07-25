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
};

// Add new services here later — the layout supports any number of entries
// without restructuring.
export const SERVICES: Service[] = [
  {
    slug: "real-estate",
    name: "Real Estate Cinematic Videos",
    video: "/videos/real-estate-cinematic.mp4",
    eyebrow: "For agents & developers",
    copy: "Cinematic footage gets listings noticed, shared, and remembered — which means less time on market and stronger justification for asking price. Buyers scroll past photos in seconds; they stop for a film that makes the property feel like a place they already live.",
    ctaLabel: "Get a video like this",
  },
  {
    slug: "product-motion",
    name: "Product Motion Design Videos",
    video: "/videos/product-motion-design.mp4",
    eyebrow: "For e-commerce & DTC brands",
    copy: "Motion content out-performs static creative on every metric that matters: higher click-through, higher conversion, more time-on-page. On a feed full of photos, a product that moves is the one people stop for.",
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
