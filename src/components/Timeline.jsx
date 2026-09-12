// src/components/Timeline.jsx
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="c-space pt-20 md:pt-28 pb-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[2px] w-12 bg-gradient-to-r from-lavender to-transparent" />
        <h2 className="text-heading">My Work Experience</h2>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative pl-8 md:pl-12">
        {/* Static background line — spans only the items container */}
        <div className="absolute left-3 md:left-5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />

        {/* Animated progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 md:left-5 top-2 w-[2px] bg-gradient-to-b from-lavender via-royal to-transparent rounded-full shadow-[0_0_12px_rgba(122,87,219,0.8)]"
        />

        {/* Items */}
        {data.map((item, index) => (
          <div
            key={index}
            className="relative pb-16 last:pb-0"
          >
            {/* Dot — aligned to same left as the line */}
            <div className="absolute -left-8 md:-left-12 top-1 flex items-center justify-center w-12 h-12">
              <div className="absolute w-12 h-12 rounded-full bg-midnight border border-lavender/30 shadow-[0_0_20px_rgba(122,87,219,0.4)]" />
              <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-lavender to-royal" />
            </div>

            {/* Content */}
            <div className="pl-6 md:pl-8">
              {/* Date */}
              <p className="text-xs md:text-sm font-mono text-lavender/80 tracking-widest uppercase mb-2">
                {item.date}
              </p>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Job */}
              <h4 className="text-base md:text-lg font-normal text-neutral-400 mt-1">
                {item.job}
              </h4>

              {/* Bullets */}
              <ul className="mt-4 space-y-2">
                {item.contents.map((content, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-neutral-400 text-sm md:text-base leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lavender/60 flex-shrink-0" />
                    <span>{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};