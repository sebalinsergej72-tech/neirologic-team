"use client";

import { useRef, useEffect } from "react";

interface DeviceMockupProps {
  video?: string;
  videoMobile?: string;
  image?: string;
  title: string;
  color: string;
  accentColor: string;
}

export default function DeviceMockup({
  video,
  videoMobile,
  image,
  title,
  color,
  accentColor,
}: DeviceMockupProps) {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    desktopRef.current?.play().catch(() => {});
    mobileRef.current?.play().catch(() => {});
  }, []);

  // Fallback to static image if no video
  if (!video) {
    return (
      <div className={`h-64 bg-gradient-to-br ${color} relative overflow-hidden`}>
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} — разработка от Neirologic Team`}
              loading="lazy"
              width={600}
              height={256}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className={`text-4xl font-black ${accentColor} opacity-30`}>
                {title.charAt(0)}
              </span>
            </div>
          </>
        )}
      </div>
    );
  }

  const mobileVideo = videoMobile || video;

  return (
    <div className={`h-72 md:h-80 bg-gradient-to-br ${color} relative overflow-hidden flex items-center justify-center p-6`}>
      {/* MacBook Frame */}
      <div className="relative w-[85%] max-w-[420px] group-hover:scale-[1.02] transition-transform duration-700">
        {/* Screen bezel */}
        <div className="bg-[#1a1a1a] rounded-t-xl p-[3px] pt-5 relative">
          {/* Camera dot */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2a2a2a] border border-[#333]" />
          {/* Screen */}
          <div className="rounded-[4px] overflow-hidden aspect-video bg-black">
            <video
              ref={desktopRef}
              src={video}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Bottom / keyboard edge */}
        <div className="bg-gradient-to-b from-[#c0c0c0] to-[#a0a0a0] h-[6px] rounded-b-lg relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-b-md bg-[#888]" />
        </div>
        <div className="bg-gradient-to-b from-[#b0b0b0] to-[#909090] h-[3px] mx-8 rounded-b-lg" />
      </div>

      {/* iPhone Frame */}
      <div className="absolute bottom-3 right-4 md:right-6 w-[60px] md:w-[80px] group-hover:scale-105 transition-transform duration-700 z-10">
        {/* Phone body */}
        <div className="bg-[#1a1a1a] rounded-[10px] md:rounded-[14px] p-[2px] shadow-2xl shadow-black/50">
          {/* Dynamic island */}
          <div className="bg-black rounded-t-[8px] md:rounded-t-[12px] pt-[6px] md:pt-[8px] relative">
            <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[18px] md:w-[24px] h-[4px] md:h-[5px] rounded-full bg-[#1a1a1a]" />
          </div>
          {/* Screen */}
          <div className="bg-black overflow-hidden aspect-[9/19.5] rounded-b-[8px] md:rounded-b-[12px]">
            <video
              ref={mobileRef}
              src={mobileVideo}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
