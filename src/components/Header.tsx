"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LANGUAGES, type Translation } from "@/lib/i18n/translations";
import { SERVICES } from "@/lib/site-config";

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

function ServicesNavItem({ t }: { t: Translation }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href="#services"
        className="flex items-center gap-1 transition-colors hover:text-neutral-100"
      >
        {t.nav.services}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={clsx("transition-transform duration-200", open && "rotate-180")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6l6-6" />
        </svg>
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-neutral-950/95 p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md"
          >
            {SERVICES.map((service) => (
              <a
                key={service.slug}
                href={`#service-${service.slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-neutral-50"
              >
                {t.services.items[service.slug].name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
          <ServicesNavItem t={t} />
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
