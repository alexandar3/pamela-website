"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LANGUAGES } from "@/lib/i18n/translations";

const SECTIONS = ["top", "tour", "about", "contact"] as const;

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      aria-label="Language"
      className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-neutral-400"
    >
      {LANGUAGES.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-neutral-300">|</span>}
          {code === lang ? (
            <span className="text-neutral-950" aria-current="true">
              {code.toUpperCase()}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setLang(code)}
              className="transition-colors hover:text-neutral-700"
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
  const [active, setActive] = useState<(typeof SECTIONS)[number]>("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id as (typeof SECTIONS)[number]);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const links: { id: (typeof SECTIONS)[number]; href: string; label: string }[] = [
    { id: "top", href: "#top", label: t.nav.home },
    { id: "tour", href: "#tour", label: t.nav.tours },
    { id: "about", href: "#about", label: t.nav.about },
    { id: "contact", href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-black/5"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label={t.header.homeLabel}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-black/10 bg-white p-1 text-sm font-medium shadow-sm md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={clsx(
                "rounded-full px-4 py-1.5 transition-colors",
                active === link.id
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-500 hover:text-neutral-950",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
