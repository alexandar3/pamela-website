// Central place to edit site-wide constants without touching component code.

export const SITE_URL = "https://pamelatech.com";

export const CALENDLY_URL = "https://calendly.com/apopovic997/30min";

export const CONTACT_EMAIL = "apopovic997@gmail.com";

export const INSTAGRAM_URL = "https://www.instagram.com/pamelatech.ai/";

export type TourPhoto = {
  src: string;
  alt: string;
};

export type TourExample = {
  slug: string;
  // The listing photos fed into the AI as source material.
  photos: TourPhoto[];
  // The resulting AI-generated walkthrough video.
  video: string;
};

// Add more finished tours here later — the showcase renders any number of
// entries, each as its own "photos in, tour out" block. Copy for each slug
// lives in src/lib/i18n/translations.ts so it can be localized.
export const TOURS: TourExample[] = [
  {
    slug: "villa-example",
    video: "/videos/main.mp4",
    photos: [
      {
        src: "/images/tours/villa-example/drone.jpg",
        alt: "Aerial drone view of the villa and pool",
      },
      {
        src: "/images/tours/villa-example/pool.jpg",
        alt: "Villa exterior with pool and sun loungers",
      },
      {
        src: "/images/tours/villa-example/outdoor-kitchen.jpg",
        alt: "Outdoor kitchen and dining area",
      },
      {
        src: "/images/tours/villa-example/hallway.jpg",
        alt: "Glass-walled hallway",
      },
      {
        src: "/images/tours/villa-example/bedroom-1.jpg",
        alt: "Bedroom with gold accent wall",
      },
      {
        src: "/images/tours/villa-example/bedroom-2.jpg",
        alt: "Bedroom with a pool-view balcony",
      },
      {
        src: "/images/tours/villa-example/bathroom.jpg",
        alt: "Bathroom with freestanding tub",
      },
      {
        src: "/images/tours/villa-example/living-room.jpg",
        alt: "Living room in the evening",
      },
    ],
  },
];

