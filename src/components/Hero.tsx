"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { CALENDLY_URL, TOURS, WHATSAPP_URL } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

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
        <span key={i} className="font-extrabold">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
}

function ChartBar({
  label,
  days,
  max,
  highlight,
}: {
  label: string;
  days: number;
  max: number;
  highlight?: boolean;
}) {
  const heightPct = Math.max((days / max) * 100, 16);
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div className="flex h-24 w-full items-end">
        <div
          className={clsx("w-full rounded-md", highlight ? "bg-accent" : "bg-neutral-700")}
          style={{ height: `${heightPct}%` }}
        />
      </div>
      <p className={clsx("text-xs font-bold", highlight ? "text-accent" : "text-neutral-400")}>
        {days}d
      </p>
      <p className="text-center text-[11px] leading-tight text-neutral-500">{label}</p>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const tour = TOURS[0];
  const tourText = tour ? t.tour.items[tour.slug] : undefined;
  const chartMax = Math.max(t.hero.chart.a.days, t.hero.chart.b.days);

  return (
    <section id="top" className="scroll-mt-24 px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[28px] ring-1 ring-black/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] lg:grid-cols-2">
          {/* Left: headline, CTA, and the numbers behind it */}
          <div className="flex flex-col justify-between gap-10 bg-white p-8 sm:p-10 lg:p-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl"
              >
                {renderWithHighlights(t.hero.heading, t.hero.headingHighlights)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="mt-5 max-w-md text-balance text-base text-neutral-500 sm:text-lg"
              >
                {t.hero.subheading}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="mt-8 flex flex-col items-start gap-3"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-neutral-950 py-1.5 pl-6 pr-1.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-950 hover:text-white"
                >
                  {t.hero.cta}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-white transition-colors group-hover:bg-white group-hover:text-neutral-950">
                    <span aria-hidden>↗</span>
                  </span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pl-1 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.96 9.96 0 0 0 4.87 1.24h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10Zm0 18.17h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.07.8.82-2.99-.2-.31a8.26 8.26 0 0 1-1.27-4.4c0-4.58 3.73-8.3 8.31-8.3 2.22 0 4.3.86 5.87 2.43a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.74 8.3-8.34 8.3Zm4.56-6.21c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.12-.17.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.21-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.12.17 1.78 2.72 4.32 3.81.6.26 1.08.42 1.45.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
                  </svg>
                  {t.hero.chatCta}
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="rounded-2xl bg-neutral-50 p-6"
            >
              <div className="flex items-start gap-8 sm:gap-10">
                {t.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 max-w-[9rem] text-xs leading-snug text-neutral-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-neutral-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  {t.hero.chart.title}
                </p>
                <div className="mt-4 flex items-end gap-4 rounded-xl bg-neutral-950 px-5 pb-4 pt-5">
                  <ChartBar label={t.hero.chart.a.label} days={t.hero.chart.a.days} max={chartMax} />
                  <ChartBar
                    label={t.hero.chart.b.label}
                    days={t.hero.chart.b.days}
                    max={chartMax}
                    highlight
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: the actual product — the AI tour, playing, plus the process */}
          <div className="relative min-h-[420px] bg-neutral-950 lg:min-h-0">
            {tour && (
              <video
                src={tour.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

            {tourText && (
              <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-950">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {tourText.name}
              </div>
            )}

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md sm:inset-x-auto sm:right-5 sm:w-72">
              <p className="font-display text-sm font-bold text-white">{t.hero.processTitle}</p>
              <div className="mt-3 h-px bg-white/15" />
              <ol className="mt-3 space-y-2.5">
                {t.howItWorks.steps.map((step, i) => (
                  <li key={step.title} className="flex items-center gap-2.5 text-sm text-neutral-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent">
                      {i + 1}
                    </span>
                    {step.title}
                  </li>
                ))}
              </ol>
              <a
                href="#tour"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-dim"
              >
                {t.hero.processLink}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
