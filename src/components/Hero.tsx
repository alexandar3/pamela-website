"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import HeadlineUnderline from "./HeadlineUnderline";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderWithHighlights(text: string, highlights: string[]) {
  if (highlights.length === 0) return text;
  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "g");
  return text
    .split(pattern)
    .filter((part) => part.length > 0)
    .map((part, i) =>
      highlights.includes(part) ? (
        <span key={i} className="text-solid">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 pt-32 pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-400/15 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-400/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-outline text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl"
          >
            {renderWithHighlights(t.hero.heading, t.hero.headingHighlights)}
          </motion.h1>
          <HeadlineUnderline />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-balance text-lg text-neutral-400"
        >
          {t.hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-7 py-3.5 text-base font-medium text-neutral-900 transition-transform hover:scale-[1.03] hover:bg-neutral-200"
          >
            {t.hero.cta}
            <span aria-hidden>→</span>
          </a>
          <a
            href="#tour"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
          >
            {t.hero.secondaryCta}
            <span aria-hidden>↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
