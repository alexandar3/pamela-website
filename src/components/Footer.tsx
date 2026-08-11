"use client";

import Logo from "./Logo";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <Logo />

        <div className="flex flex-col items-center gap-2 text-sm text-neutral-500 sm:items-end">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-neutral-300"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pamela on Instagram"
              className="transition-colors hover:text-neutral-300"
            >
              Instagram
            </a>
          </div>
          <p className="mt-2">
            © {new Date().getFullYear()} Pamela. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
