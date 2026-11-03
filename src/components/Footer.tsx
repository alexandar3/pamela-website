"use client";

import Logo from "./Logo";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-black/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <Logo />

        <div className="flex flex-col items-center gap-3 text-sm text-neutral-500 sm:items-end">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              title={CONTACT_EMAIL}
              aria-label={`Email ${CONTACT_EMAIL}`}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-950"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6l9-6" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              aria-label="Chat with Pamela on WhatsApp"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-950"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.96 9.96 0 0 0 4.87 1.24h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10Zm0 18.17h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.07.8.82-2.99-.2-.31a8.26 8.26 0 0 1-1.27-4.4c0-4.58 3.73-8.3 8.31-8.3 2.22 0 4.3.86 5.87 2.43a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.74 8.3-8.34 8.3Zm4.56-6.21c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.12-.17.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.21-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.12.17 1.78 2.72 4.32 3.81.6.26 1.08.42 1.45.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
              </svg>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Pamela on Instagram"
              aria-label="Pamela on Instagram"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-950"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-neutral-700 transition-colors hover:text-neutral-950"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-700 transition-colors hover:text-neutral-950"
          >
            {WHATSAPP_NUMBER}
          </a>
          <p>
            © {new Date().getFullYear()} Pamela. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
