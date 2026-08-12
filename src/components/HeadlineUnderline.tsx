"use client";

import { motion } from "framer-motion";

// A hand-drawn, marker-style underline that draws itself in on load.
export default function HeadlineUnderline() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full sm:-bottom-4 sm:h-6"
    >
      <motion.path
        d="M6 25 C 90 8, 150 38, 230 20 C 320 0, 400 36, 480 16 C 520 6, 555 18, 578 12"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.85, ease: "easeInOut" }}
      />
      <motion.path
        d="M578 12 Q 596 4 592 22"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.95, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
