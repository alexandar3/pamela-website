"use client";

import { motion } from "framer-motion";

export default function PriceBadge({ price }: { price: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      className="absolute -bottom-4 left-6 z-10 flex items-center gap-2 rounded-xl border border-white/15 bg-neutral-950/90 px-4 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur-md"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
      <p className="whitespace-nowrap font-display text-sm font-extrabold tracking-tight text-neutral-50">
        {price}
      </p>
    </motion.div>
  );
}
