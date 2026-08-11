export type Language = "en" | "sr";

export const LANGUAGES: Language[] = ["en", "sr"];

type ServiceCopy = {
  eyebrow: string;
  name: string;
  copy: string;
  ctaLabel: string;
  stat?: string;
};

export type Translation = {
  header: {
    homeLabel: string;
  };
  hero: {
    heading: string;
    subheading: string;
    cta: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: Record<string, ServiceCopy>;
  };
  whyAI: {
    heading: string;
    items: { label: string; description: string }[];
  };
  video: {
    mute: string;
    unmute: string;
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
    hero: {
      heading: "Add AI to your experience.",
      subheading:
        "Pamela is an AI agency delivering high quality AI solutions for businesses. We help you integrate AI into your solutions.",
      cta: "Book a call",
    },
    services: {
      eyebrow: "Portfolio",
      heading: "What we do",
      items: {
        "real-estate": {
          eyebrow: "For Real Estate Agencies",
          name: "Real Estate Cinematic Videos",
          copy: "Traditional real estate videos require a cameraman, editing, and time on location. We create high-quality cinematic property videos using AI from existing listing images—no filming required. The result is premium marketing content that captures attention, increases engagement, and helps listings stand out, while saving time and significantly reducing production costs.",
          ctaLabel: "Get a video like this",
          stat: "64% report that video gives them higher confidence in making a purchase or rental decision.",
        },
        "ai-marketing": {
          eyebrow: "For Businesses",
          name: "AI Marketing Videos",
          copy: "A full marketing team means salaries, contracts, and slow turnaround. We create AI marketing videos in bundles—ads, promos, social content—giving businesses a steady stream of scroll-stopping video at a fraction of the cost and speed of an in-house team or agency.",
          ctaLabel: "Get a video like this",
        },
        "landing-pages": {
          eyebrow: "For Small & Medium Businesses",
          name: "Landing Page Websites",
          copy: "Most small businesses either don't have a website or are stuck with one that hasn't been touched in years. We design and build fast, modern landing pages—from copy to layout to launch—using AI to move at a fraction of the usual cost and timeline. The result is a site that actually converts visitors into customers, live in days instead of months.",
          ctaLabel: "Get a website like this",
          stat: "75% of consumers admit to judging a business's credibility based on its website design.",
        },
      },
    },
    whyAI: {
      heading: "Why AI changes the equation",
      items: [
        {
          label: "Faster turnaround",
          description: "Days, not weeks — from brief to finished clips.",
        },
        {
          label: "Lower cost per video",
          description: "AI-driven production cuts cost without cutting quality.",
        },
        {
          label: "More iterations",
          description: "Room to try more directions before you commit to one.",
        },
      ],
    },
    video: {
      mute: "Mute",
      unmute: "Unmute",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  sr: {
    header: {
      homeLabel: "Pamela početna",
    },
    hero: {
      heading: "Unesite AI u vaše poslovanje.",
      subheading:
        "Pamela je AI agencija koja isporučuje visokokvalitetna AI rešenja za biznise. Pomažemo vam da integrišete AI u svoje poslovanje.",
      cta: "Zakažite poziv",
    },
    services: {
      eyebrow: "Portfolio",
      heading: "Šta radimo",
      items: {
        "real-estate": {
          eyebrow: "Za agencije za nekretnine",
          name: "Kinematografski video snimci nekretnina",
          copy: "Tradicionalni video snimci nekretnina zahtevaju snimatelja, montažu i vreme provedeno na terenu. Mi kreiramo kinematografske video snimke nekretnina uz pomoć veštačke inteligencije na osnovu postojećih fotografija oglasa—bez potrebe za snimanjem. Rezultat je premium marketinški sadržaj koji privlači pažnju, povećava angažovanost i izdvaja vaše oglase, uz uštedu vremena i značajno smanjenje troškova produkcije.",
          ctaLabel: "Zatražite ovakav video",
          stat: "64% ispitanika kaže da im video daje veće poverenje prilikom donošenja odluke o kupovini ili iznajmljivanju.",
        },
        "ai-marketing": {
          eyebrow: "Za biznise",
          name: "AI marketing video zapisi",
          copy: "Ceo marketinški tim znači plate, ugovore i sporu realizaciju. Mi kreiramo AI marketing video zapise u paketima—reklame, promocije, sadržaj za društvene mreže—obezbeđujući biznisima kontinuiran priliv upečatljivog video sadržaja uz mnogo nižu cenu i brže vreme isporuke od internog tima ili agencije.",
          ctaLabel: "Zatražite ovakav video",
        },
        "landing-pages": {
          eyebrow: "Za mala i srednja preduzeća",
          name: "Izrada Web Sajtova",
          copy: "Većina malih biznisa ili nema sajt ili koristi onaj koji nije menjan godinama. Mi dizajniramo i izrađujemo brze, moderne landing stranice—od teksta, preko dizajna, do lansiranja—koristeći AI da bismo radili mnogo brže i jeftinije nego inače. Rezultat je sajt koji zaista pretvara posetioce u kupce, dostupan za nekoliko dana umesto meseci.",
          ctaLabel: "Zatražite ovakav sajt",
          stat: "75% potrošača priznaje da procenjuje kredibilitet biznisa na osnovu dizajna njegovog sajta.",
        },
      },
    },
    whyAI: {
      heading: "Zašto veštačka inteligencija menja pravila igre",
      items: [
        {
          label: "Brža isporuka",
          description: "Dani, ne nedelje — od brifa do gotovih klipova.",
        },
        {
          label: "Niža cena po videu",
          description: "Produkcija uz pomoć AI smanjuje troškove bez kompromisa u kvalitetu.",
        },
        {
          label: "Više iteracija",
          description: "Prostor da isprobate više pravaca pre nego što se odlučite.",
        },
      ],
    },
    video: {
      mute: "Utišaj",
      unmute: "Uključi zvuk",
    },
    footer: {
      rights: "Sva prava zadržana.",
    },
  },
};
