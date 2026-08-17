"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function VideoCarousel({
  videos,
  label,
}: {
  videos: string[];
  label: string;
}) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  // Re-mutes every slide so audio never keeps playing from a video the
  // viewer has scrolled away from.
  const remuteAll = () => {
    videoRefs.current.forEach((el) => {
      if (el) el.muted = true;
    });
    setMuted(true);
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    remuteAll();
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    if (index !== activeIndex) {
      remuteAll();
      setActiveIndex(index);
    }
  };

  const toggleMute = () => {
    const el = videoRefs.current[activeIndex];
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  const multiple = videos.length > 1;

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {videos.map((src, i) => (
          <div key={src} className="relative h-full w-full flex-none snap-center">
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={multiple ? `${label} ${i + 1}/${videos.length}` : label}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {multiple && (
        <>
          <button
            type="button"
            onClick={() => goTo(Math.max(activeIndex - 1, 0))}
            disabled={activeIndex === 0}
            aria-label={t.video.previous}
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-neutral-100 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 disabled:pointer-events-none disabled:opacity-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(Math.min(activeIndex + 1, videos.length - 1))}
            disabled={activeIndex === videos.length - 1}
            aria-label={t.video.next}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-neutral-100 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 disabled:pointer-events-none disabled:opacity-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {videos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${label} ${i + 1}/${videos.length}`}
                aria-current={i === activeIndex}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-5 bg-amber-400" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <button
        type="button"
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-neutral-100 backdrop-blur transition-opacity group-hover:opacity-100 ${
          multiple ? "opacity-0 sm:group-hover:opacity-100" : "opacity-0"
        }`}
      >
        {muted ? t.video.unmute : t.video.mute}
      </button>
    </div>
  );
}
