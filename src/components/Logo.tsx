import clsx from "clsx";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-display text-xl tracking-tight text-neutral-50",
        className,
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="pamela-dot" x1="0" y1="0" x2="18" y2="18">
            <stop offset="0%" stopColor="#f5a3c7" />
            <stop offset="100%" stopColor="#7c8cff" />
          </linearGradient>
        </defs>
        <circle cx="9" cy="9" r="9" fill="url(#pamela-dot)" />
      </svg>
      Pamela
    </span>
  );
}
