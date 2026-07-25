"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { CALENDLY_URL, PRICING_TIERS } from "@/lib/site-config";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-50 sm:text-4xl">
            Simple packages, priced by clip
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            A clip is one finished video — from raw footage or generation
            through final edit. More volume means a lower cost per clip.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => {
            const perClip = (tier.price / tier.clips).toFixed(0);
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className={clsx(
                  "flex flex-col rounded-2xl border p-8",
                  tier.highlighted
                    ? "border-white/20 bg-white/[0.06] shadow-[0_0_60px_-15px_rgba(124,140,255,0.35)] lg:-translate-y-3"
                    : "border-white/10 bg-white/[0.02]",
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-fuchsia-400/20 to-indigo-500/20 px-3 py-1 text-xs font-medium text-neutral-100 ring-1 ring-white/10">
                    Recommended
                  </span>
                )}

                <h3 className="font-display text-xl text-neutral-50">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl text-neutral-50">
                    {tier.currency}
                    {tier.price}
                  </span>
                  <span className="text-sm text-neutral-500">
                    / {tier.clips} clips
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  ≈ {tier.currency}
                  {perClip} per clip
                </p>

                <ul className="mt-8 flex flex-col gap-3 text-sm text-neutral-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mt-0.5 shrink-0 text-neutral-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 6L9 17L4 12"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 shrink-0 text-neutral-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 6L9 17L4 12"
                      />
                    </svg>
                    {tier.turnaround} turnaround
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 shrink-0 text-neutral-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 6L9 17L4 12"
                      />
                    </svg>
                    {tier.revisions}
                  </li>
                </ul>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors",
                    tier.highlighted
                      ? "bg-neutral-50 text-neutral-900 hover:bg-neutral-200"
                      : "border border-white/15 text-neutral-100 hover:bg-white/10",
                  )}
                >
                  Book a call
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
