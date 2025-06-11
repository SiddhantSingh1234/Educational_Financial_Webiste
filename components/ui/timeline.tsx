"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { BookOpenCheck, Quote, Sparkles } from "lucide-react";
import { Vortex } from '@/components/ui/vortex';

interface TimelineEntry {
  title: string;
  titleHighlight: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="w-full px-4 md:px-10 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.8)]">
          <Vortex>
            <div className="max-w-7xl mx-auto py-24 px-4 md:px-8 lg:px-10 text-center relative">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-blue-400 dark:text-blue-300 animate-bounce" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  Follow the Path to Financial Mastery
                </h2>
                <Sparkles className="w-8 h-8 text-blue-400 dark:text-blue-300 animate-bounce" />
              </div>

              <div className="relative mt-6">
                <Quote className="w-10 h-10 mx-auto text-indigo-400 dark:text-indigo-300 mb-2" />
                <blockquote className="text-xl md:text-2xl font-medium italic text-white max-w-3xl mx-auto leading-relaxed">
                  "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this."
                </blockquote>
                <cite className="text-lg text-white/80 mt-2 block">— Dave Ramsey</cite>
              </div>

              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                  <BookOpenCheck className="w-5 h-5" />
                  Learn by Doing
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Fun & Rewarding
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-400 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                  <Quote className="w-5 h-5" />
                  Real-Life Lessons
                </div>
              </div>
            </div>
          </Vortex>
        </div>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3.5 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black dark:text-white ">
                <Highlight className="text-black dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400">{item.titleHighlight}</span>
                </Highlight>
                <br />
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
