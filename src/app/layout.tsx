import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { INSTAGRAM_URL, SITE_URL } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

const TITLE = "Pamela — AI Agency | AI Marketing & Real Estate Video Production";
const DESCRIPTION =
  "Pamela is an AI agency (AI agencija) creating cinematic real estate videos, bundled AI marketing videos, and landing pages for businesses — faster and cheaper than a traditional production team.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Pamela",
    "Pamela agencija",
    "AI agency",
    "AI agencija",
    "AI marketing videos",
    "real estate video production",
    "AI video production",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Pamela",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pamela",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: DESCRIPTION,
  sameAs: [INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0b] text-neutral-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
