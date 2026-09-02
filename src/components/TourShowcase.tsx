"use client";

import { motion } from "framer-motion";
import VideoCarousel from "./VideoCarousel";
import PriceBadge from "./PriceBadge";
import { CALENDLY_URL, TOURS } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function StatQuote({ stat }: { stat: string }) {
  const match = stat.match(/^(\d+%)\s*(.*)$/);
  if (!match) {
    return (
      <p className="text-sm italic leading-relaxed text-amber-300/90">
        “{stat}”
      </p>
    );
  }
  const [, figure, rest] = match;
  return (
    <p className="text-sm italic leading-relaxed text-amber-300/90">
      <span className="mr-1.5 font-display text-lg font-medium not-italic text-amber-300">
        {figure}
      </span>
      {rest}
    </p>
  );
}

function TransformBadge() {
  return (
    <div className="relative my-12 flex items-center justify-center" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="relative flex items-center gap-2 rounded-full border border-amber-300/40 bg-neutral-950 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-amber-300"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        AI virtual tour
        <span aria-hidden>↓</span>
      </div>
    </div>
  );
}

export default function TourShowcase() {
  const { t } = useLanguage();

  return (
    <section id="tour" className="scroll-mt-24 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
            {t.tour.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-neutral-50 sm:text-5xl">
            {t.tour.heading}{" "}
            <span className="text-amber-300">{t.tour.headingHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">
            {t.tour.subheading}
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col gap-28">
          {TOURS.map((tour) => {
            const text = t.tour.items[tour.slug];
            return (
              <div key={tour.slug}>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center font-display text-xl font-extrabold tracking-tight text-neutral-50"
                >
                  {text.name}
                </motion.p>

                <p className="mt-8 text-center text-sm font-medium uppercase tracking-widest text-neutral-500">
                  {t.tour.photosLabel}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {tour.photos.map((photo, i) => (
                    <motion.div
                      key={photo.src}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                      className="group aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>

                <TransformBadge />

                <p className="text-center text-sm font-medium uppercase tracking-widest text-neutral-500">
                  {t.tour.videoLabel}
                </p>
                <div className="relative mx-auto mt-5 max-w-3xl">
                  <VideoCarousel videos={[tour.video]} label={text.name} />
                  <PriceBadge price={text.price} />
                </div>

                <div className="mt-10 flex flex-col items-center gap-6 text-center">
                  {text.stat && (
                    <div className="max-w-md border-l-2 border-amber-400/50 pl-4 text-left">
                      <StatQuote stat={text.stat} />
                    </div>
                  )}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-white/10"
                  >
                    {text.ctaLabel}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
