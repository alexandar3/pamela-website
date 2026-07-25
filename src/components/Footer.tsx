import Logo from "./Logo";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <Logo />

        <div className="flex flex-col items-center gap-2 text-sm text-neutral-500 sm:items-end">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-neutral-300"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              className="transition-colors hover:text-neutral-300"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="transition-colors hover:text-neutral-300"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.x}
              className="transition-colors hover:text-neutral-300"
            >
              X
            </a>
          </div>
          <p className="mt-2">
            © {new Date().getFullYear()} Pamela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
