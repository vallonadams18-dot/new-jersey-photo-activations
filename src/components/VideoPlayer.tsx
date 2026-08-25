"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Poster-first video.
 *
 * The poster is a normal <Image>, so it is the LCP candidate and paints
 * immediately; the <video> element is only mounted once someone asks for it.
 * That keeps a video-led luxury page inside the Core Web Vitals budget on a
 * throttled connection, which autoplaying background video does not.
 */
export function VideoPlayer({
  src,
  poster,
  label,
  priority = false,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  priority?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-sharp border border-champagne/15 bg-charcoal ${className}`}
    >
      {active ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="size-full object-cover"
          aria-label={label}
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label={`Play video: ${label}`}
        >
          <Image
            src={poster}
            alt={label}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-obsidian/25 transition-colors duration-500 group-hover:bg-obsidian/15" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/50 bg-obsidian/55 backdrop-blur-sm transition-all duration-500 group-hover:border-champagne group-hover:bg-obsidian/70 sm:size-20">
            <Play
              className="ml-0.5 size-5 fill-champagne text-champagne sm:size-6"
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </div>
  );
}
