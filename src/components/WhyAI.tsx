"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const VALUE_PROP_ICONS = [
  <path
    key="turnaround"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M13 2L4.5 13.5H11L9 22L19.5 9.5H13L13 2Z"
  />,
  <path
    key="cost"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 2V22M17 5H9.5C8.11929 5 7 6.11929 7 7.5C7 8.88071 8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15H7"
  />,
  <path
    key="iterations"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 4V20M4 20H20M8 16L12 10L15 13L20 6"
  />,
];

export default function WhyAI() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-display text-3xl font-extrabold tracking-tight text-neutral-50 sm:text-4xl"
        >
          {t.whyAI.heading}
        </motion.h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {t.whyAI.items.map((prop, i) => (
            <motion.div
              key={prop.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-300"
              >
                {VALUE_PROP_ICONS[i]}
              </svg>
              <p className="mt-4 font-medium text-neutral-100">
                {prop.label}
              </p>
              <p className="mt-1.5 text-sm text-neutral-500">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
