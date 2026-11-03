import clsx from "clsx";

// A single open ring with a lead dot — a minimal mark for a 360° AI tour.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <circle
        cx="16"
        cy="16"
        r="11"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="53.8 15.3"
        transform="rotate(-110 16 16)"
      />
      <circle cx="12.2" cy="5.7" r="1.7" fill="var(--accent)" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-neutral-50",
        className,
      )}
    >
      <LogoMark className="h-6 w-6 shrink-0" />
      Pamela
    </span>
  );
}
