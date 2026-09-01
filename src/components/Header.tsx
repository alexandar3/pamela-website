"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LANGUAGES } from "@/lib/i18n/translations";

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      aria-label="Language"
      className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-neutral-400"
    >
      {LANGUAGES.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-neutral-600">|</span>}
          {code === lang ? (
            <span className="text-neutral-50" aria-current="true">
              {code.toUpperCase()}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setLang(code)}
              className="transition-colors hover:text-neutral-100"
            >
              {code.toUpperCase()}
            </button>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label={t.header.homeLabel}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-400 md:flex">
          <a href="#top" className="transition-colors hover:text-neutral-100">
            {t.nav.home}
          </a>
          <a href="#tour" className="transition-colors hover:text-neutral-100">
            {t.nav.tours}
          </a>
          <a href="#about" className="transition-colors hover:text-neutral-100">
            {t.nav.about}
          </a>
          <a href="#contact" className="transition-colors hover:text-neutral-100">
            {t.nav.contact}
          </a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
