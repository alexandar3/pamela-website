"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ShowcaseVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-neutral-100 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
      >
        {muted ? t.video.unmute : t.video.mute}
      </button>
    </div>
  );
}
