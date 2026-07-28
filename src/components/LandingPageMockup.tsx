"use client";

import { motion } from "framer-motion";

// Animated wireframe standing in for a real screen recording — used by
// services that don't have photo/video proof yet (e.g. landing pages, where
// every project looks different by nature).
export default function LandingPageMockup({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-fuchsia-500/10" />

      {/* shimmer sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        animate={{ x: ["-120%", "320%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />

      {/* browser chrome */}
      <div className="relative flex items-center gap-1.5 border-b border-white/10 bg-neutral-950/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-neutral-500">
          yourbusiness.com
        </div>
      </div>

      {/* page skeleton */}
      <div className="relative flex h-[calc(100%-2.5rem)] flex-col justify-center gap-5 px-6 py-5 sm:px-9">
        {/* nav */}
        <div className="flex items-center gap-4">
          <span className="h-3 w-3 rounded-sm bg-amber-300/60" />
          <span className="h-2 w-10 rounded-full bg-white/15" />
          <span className="h-2 w-10 rounded-full bg-white/15" />
          <span className="hidden h-2 w-10 rounded-full bg-white/15 sm:block" />
          <span className="ml-auto h-5 w-16 rounded-full bg-amber-300/20 ring-1 ring-amber-300/40" />
        </div>

        {/* hero */}
        <div className="grid grid-cols-5 items-center gap-4">
          <div className="col-span-3 flex flex-col gap-2.5">
            <span className="flex h-3.5 w-[85%] items-center rounded-full bg-white/25">
              <motion.span
                className="ml-auto h-3 w-px bg-white/70"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
            <span className="h-3.5 w-[60%] rounded-full bg-white/25" />
            <span className="mt-1 h-2 w-[70%] rounded-full bg-white/10" />
            <span className="h-2 w-[45%] rounded-full bg-white/10" />
            <span className="mt-2 h-7 w-28 rounded-full bg-amber-300/80" />
          </div>
          <div className="col-span-2 aspect-square rounded-xl bg-gradient-to-br from-indigo-400/25 via-fuchsia-300/15 to-sky-300/20 ring-1 ring-white/10" />
        </div>

        {/* feature row */}
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 rounded-lg bg-white/[0.04] p-2.5 ring-1 ring-white/5"
            >
              <span className="h-2 w-2 rounded-full bg-sky-300/60" />
              <span className="h-1.5 w-[80%] rounded-full bg-white/15" />
              <span className="h-1.5 w-[55%] rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
