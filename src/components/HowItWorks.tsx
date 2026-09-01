"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            {t.howItWorks.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-neutral-50 sm:text-4xl">
            {t.howItWorks.heading}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 font-display text-sm font-extrabold text-amber-300">
                {i + 1}
              </span>
              <p className="mt-4 font-medium text-neutral-100">{step.title}</p>
              <p className="mt-1.5 text-sm text-neutral-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
