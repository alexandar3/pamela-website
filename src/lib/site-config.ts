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
        src: "/images/tours/villa-example/1.jpg",
        alt: "Aerial drone view of the villa, pool, and driveway",
      },
      {
        src: "/images/tours/villa-example/2.jpg",
        alt: "Angled aerial view of the villa exterior and pool",
      },
      {
        src: "/images/tours/villa-example/3.jpg",
        alt: "Covered outdoor lounge and dining terrace",
      },
      {
        src: "/images/tours/villa-example/4.jpg",
        alt: "Outdoor kitchen with grill and sink",
      },
      {
        src: "/images/tours/villa-example/5.jpg",
        alt: "Dining room set for a large group",
      },
      {
        src: "/images/tours/villa-example/6.jpg",
        alt: "Open-plan living and dining area with garden view",
      },
      {
        src: "/images/tours/villa-example/7.jpg",
        alt: "Living and dining area in the evening",
      },
      {
        src: "/images/tours/villa-example/8.jpg",
        alt: "Glass-walled hallway lined with palms",
      },
      {
        src: "/images/tours/villa-example/10.jpg",
        alt: "Bedroom with a gold accent wall and ensuite bathroom",
      },
      {
        src: "/images/tours/villa-example/11.jpg",
        alt: "Bathroom with a round backlit mirror and freestanding tub",
      },
      {
        src: "/images/tours/villa-example/12.jpg",
        alt: "Bedroom with a balcony overlooking the pool",
      },
      {
        src: "/images/tours/villa-example/13.jpg",
        alt: "Villa exterior and pool lit up at night",
      },
    ],
  },
];

