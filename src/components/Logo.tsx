import Image from "next/image";
import clsx from "clsx";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-display text-xl tracking-tight text-neutral-50",
        className,
      )}
    >
      <Image
        src="/pamela-website/images/logo.png"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 shrink-0 rounded-full object-cover"
      />
      Pamela
    </span>
  );
}
