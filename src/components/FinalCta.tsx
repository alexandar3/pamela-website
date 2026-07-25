"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/site-config";

export default function FinalCta() {
  return (
    <section className="px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-balance font-display text-4xl tracking-tight text-neutral-50 sm:text-5xl">
          Add AI to your experience.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-neutral-400">
          Book a 30-minute call and let&apos;s talk about what Pamela can
          build for you.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-50 px-7 py-3.5 text-base font-medium text-neutral-900 transition-transform hover:scale-[1.03] hover:bg-neutral-200"
        >
          Book a call
        </a>
      </motion.div>
    </section>
  );
}
