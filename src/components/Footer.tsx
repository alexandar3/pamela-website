"use client";

import Logo from "./Logo";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <Logo />

        <div className="flex flex-col items-center gap-3 text-sm text-neutral-500 sm:items-end">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              title={CONTACT_EMAIL}
              aria-label={`Email ${CONTACT_EMAIL}`}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-white/10 hover:text-neutral-100"
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
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Pamela on Instagram"
              aria-label="Pamela on Instagram"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-white/10 hover:text-neutral-100"
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
          <p>
            © {new Date().getFullYear()} Pamela. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
