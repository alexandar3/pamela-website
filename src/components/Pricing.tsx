"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { CALENDLY_URL, PRICING_TIERS, type PricingAccent } from "@/lib/site-config";

const ACCENT_CLASSES: Record<PricingAccent, { price: string; check: string; badge: string }> = {
  blue: {
    price: "text-blue-400",
    check: "text-blue-400",
    badge: "bg-blue-400/15 text-blue-300 ring-blue-400/30",
  },
  green: {
    price: "text-green-400",
    check: "text-green-400",
    badge: "bg-green-400/15 text-green-300 ring-green-400/30",
  },
  purple: {
    price: "text-purple-400",
    check: "text-purple-400",
    badge: "bg-purple-400/15 text-purple-300 ring-purple-400/30",
  },
};

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
          <h2 className="font-display text-3xl tracking-tight text-neutral-50 sm:text-4xl">
            Listing Content, Done For You
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Make your listings look like a premium agency made them. No
            contracts. Cancel anytime.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => {
            const accent = ACCENT_CLASSES[tier.accent];
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
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-300">
                    {tier.name}
                  </h3>
                  {tier.badge && (
                    <span
                      className={clsx(
                        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ring-1",
                        accent.badge,
                      )}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={clsx(
                      "font-[family-name:var(--font-grotesk)] text-4xl font-bold tracking-tight",
                      accent.price,
                    )}
                  >
                    {tier.currency}
                    {tier.price.toLocaleString("en-US")}
                  </span>
                  <span className="text-sm text-neutral-500">/mo</span>
                </div>
                <p className="mt-2 text-sm text-neutral-500">
                  {tier.tagline}
                </p>

                <ul className="mt-8 flex flex-col gap-3 text-sm">
                  {tier.includedFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-neutral-300"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={clsx("mt-0.5 shrink-0", accent.check)}
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
                  {tier.excludedFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-neutral-600"
                    >
                      <span className="block h-4 w-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
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
