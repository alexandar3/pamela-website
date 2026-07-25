"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";
import { CALENDLY_URL } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Pamela home">
          <Logo />
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-50 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
