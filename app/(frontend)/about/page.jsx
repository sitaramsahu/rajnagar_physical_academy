"use client";

import React from "react";

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Full-bleed background video. Put your video file at: public/video.mp4 */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/rpa-home-video.mp4" type="video/mp4" />
        {/* Add additional formats if needed: webm, ogg */}
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay content (centered) */}
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <h1 className="text-black text-4xl sm:text-6xl font-bold drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* Gentle gradient overlay to improve text contrast */}
      <div className="pointer-events-none fixed inset-0 z-20 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </div>
  );
}
