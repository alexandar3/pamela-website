"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import ShowcaseVideo from "./ShowcaseVideo";
import { CALENDLY_URL, SERVICES } from "@/lib/site-config";

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

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-50 sm:text-4xl">
            What we do
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={clsx(
                "grid items-center gap-10 md:grid-cols-2 md:gap-16",
                i % 2 === 1 && "md:[&>*:first-child]:order-2",
              )}
            >
              <ShowcaseVideo src={service.video} label={service.name} />

              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-neutral-50 sm:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">
                  {service.copy}
                </p>
                {service.stat && (
                  <div className="mt-6 border-l-2 border-amber-400/50 pl-4">
                    <StatQuote stat={service.stat} />
                  </div>
                )}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-white/10"
                >
                  {service.ctaLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
