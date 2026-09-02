export type Language = "en" | "sr";

export const LANGUAGES: Language[] = ["en", "sr"];

type TourCopy = {
  name: string;
  ctaLabel: string;
  price: string;
  stat?: string;
};

export type Translation = {
  header: {
    homeLabel: string;
  };
  nav: {
    home: string;
    tours: string;
    about: string;
    contact: string;
  };
  hero: {
    heading: string;
    // Substrings of `heading` to render as solid white instead of outlined.
    headingHighlights: string[];
    subheading: string;
    cta: string;
    secondaryCta: string;
  };
  tour: {
    eyebrow: string;
    heading: string;
    // Trailing phrase of the heading, rendered in the accent color.
    headingHighlight: string;
    subheading: string;
    photosLabel: string;
    videoLabel: string;
    items: Record<string, TourCopy>;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: { title: string; description: string }[];
  };
  whyAI: {
    heading: string;
    items: { label: string; description: string }[];
  };
  video: {
    mute: string;
    unmute: string;
    previous: string;
    next: string;
  };
  footer: {
    rights: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    header: {
      homeLabel: "Pamela home",
    },
    nav: {
      home: "Home",
      tours: "Virtual Tours",
      about: "About",
      contact: "Contact",
    },
    hero: {
      heading: "Turn listing photos into an AI virtual tour.",
      headingHighlights: ["AI virtual tour."],
      subheading:
        "Pamela turns the listing photos you already have into a cinematic walkthrough video — no camera, no film crew, no scheduling a shoot.",
      cta: "Book a call",
      secondaryCta: "See an example tour",
    },
    tour: {
      eyebrow: "Photos → Tour",
      heading: "Watch these photos become",
      headingHighlight: "a movie.",
      subheading:
        "Real photos from a real listing — scroll down for the AI-built tour we delivered from them.",
      photosLabel: "The photos we started with",
      videoLabel: "The AI virtual tour we delivered",
      items: {
        "villa-example": {
          name: "Luxury Villa Walkthrough",
          ctaLabel: "Get a tour like this",
          price: "Custom pricing",
          stat: "64% report that video gives them higher confidence in making a purchase or rental decision.",
        },
      },
    },
    howItWorks: {
      eyebrow: "How it works",
      heading: "From photos to a finished tour in three steps",
      steps: [
        {
          title: "Send your photos",
          description:
            "Share the listing photos you already have — no reshoot, no extra equipment.",
        },
        {
          title: "AI builds the walkthrough",
          description:
            "Our models stitch the stills into a smooth, cinematic tour of the property.",
        },
        {
          title: "You get a shareable video",
          description:
            "A polished virtual tour, ready to post or send to buyers in days.",
        },
      ],
    },
    whyAI: {
      heading: "Why go virtual",
      items: [
        {
          label: "No film crew",
          description: "Nothing to schedule and no equipment on-site — just the photos you already have.",
        },
        {
          label: "Ready in days",
          description: "A finished tour in days, not the weeks a full shoot and edit would take.",
        },
        {
          label: "More engaging than photos",
          description: "A walkthrough holds attention far longer than a static photo gallery.",
        },
      ],
    },
    video: {
      mute: "Mute",
      unmute: "Unmute",
      previous: "Previous video",
      next: "Next video",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  sr: {
    header: {
      homeLabel: "Pamela početna",
    },
    nav: {
      home: "Početna",
      tours: "Virtuelne Ture",
      about: "O nama",
      contact: "Kontakt",
    },
    hero: {
      heading: "Pretvorite fotografije oglasa u AI virtuelnu turu.",
      headingHighlights: ["AI virtuelnu turu."],
      subheading:
        "Pamela pretvara fotografije oglasa koje već imate u kinematografski video obilazak—bez kamere, bez filmske ekipe, bez zakazivanja snimanja.",
      cta: "Zakažite poziv",
      secondaryCta: "Pogledajte primer ture",
    },
    tour: {
      eyebrow: "Fotografije → Tura",
      heading: "Gledajte kako fotografije postaju",
      headingHighlight: "film.",
      subheading:
        "Prave fotografije sa pravog oglasa — pomerite se nadole do AI ture koju smo napravili od njih.",
      photosLabel: "Fotografije od kojih smo krenuli",
      videoLabel: "AI virtuelna tura koju smo isporučili",
      items: {
        "villa-example": {
          name: "Obilazak Luksuzne Vile",
          ctaLabel: "Zatražite ovakvu turu",
          price: "Po dogovoru",
          stat: "64% ispitanika kaže da im video daje veće poverenje prilikom donošenja odluke o kupovini ili iznajmljivanju.",
        },
      },
    },
    howItWorks: {
      eyebrow: "Kako funkcioniše",
      heading: "Od fotografija do gotove ture u tri koraka",
      steps: [
        {
          title: "Pošaljite fotografije",
          description:
            "Podelite fotografije oglasa koje već imate—bez ponovnog snimanja, bez dodatne opreme.",
        },
        {
          title: "AI kreira obilazak",
          description:
            "Naši modeli spajaju fotografije u glatku, kinematografsku turu nekretnine.",
        },
        {
          title: "Dobijate video za deljenje",
          description:
            "Doteran virtuelni obilazak, spreman za objavu ili slanje kupcima za nekoliko dana.",
        },
      ],
    },
    whyAI: {
      heading: "Zašto virtuelno",
      items: [
        {
          label: "Bez filmske ekipe",
          description: "Ništa za zakazivanje i bez opreme na terenu—samo fotografije koje već imate.",
        },
        {
          label: "Gotovo za nekoliko dana",
          description: "Gotova tura za nekoliko dana, ne nedelje koliko bi trajalo pravo snimanje i montaža.",
        },
        {
          label: "Angažovanije od fotografija",
          description: "Obilazak zadržava pažnju mnogo duže od statične galerije fotografija.",
        },
      ],
    },
    video: {
      mute: "Utišaj",
      unmute: "Uključi zvuk",
      previous: "Prethodni video",
      next: "Sledeći video",
    },
    footer: {
      rights: "Sva prava zadržana.",
    },
  },
};
