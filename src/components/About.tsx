"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-neutral-950 bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            {t.about.heading}
          </h2>
        </motion.div>

        <div className="mt-6 space-y-4">
          {t.about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="text-balance text-base leading-relaxed text-neutral-600 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
