"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { BookOpenCheck, Quote, Sparkles, Play, ArrowRight, Target, Shield, TrendingUp, Award, Star } from "lucide-react";
import { Vortex } from '@/components/ui/vortex';
import { useRouter } from 'next/navigation';

interface TimelineEntry {
  title: string;
  titleHighlight: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const router = useRouter();
  const handleModuleClick = (moduleId: string, moduleName: string) => {
    router.push(`/learn/${moduleId}`);
  };  
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

              {/* Conditionally render button only for modules */}
              {item.titleHighlight && item.titleHighlight.startsWith('Module') && (
                <button 
                  onClick={() => {
                    // Determine module ID based on titleHighlight
                    const moduleMap = {
                      'Module 1:': 'module1',
                      'Module 2:': 'module2', 
                      'Module 3:': 'module3',
                      'Module 4:': 'module4',
                      'Module 5:': 'module5'
                    };
                    const moduleId = moduleMap[item.titleHighlight as keyof typeof moduleMap] || 'unknown';
                    const moduleName = item.title.replace(item.titleHighlight, '').trim();
                    handleModuleClick(moduleId, moduleName);
                  }}
                  className={`w-full mt-4 backdrop-blur-sm rounded-xl p-4 font-semibold transition-all duration-300 flex items-center justify-between group border shadow-lg hover:shadow-xl ${
                    // Dynamic styling based on module with light/dark mode support
                    item.titleHighlight === 'Module 1:' ? 'bg-green-500/20 hover:bg-green-500/30 text-green-800 dark:text-white border-green-500/30 hover:border-green-500/40 dark:border-green-400/20 dark:hover:border-green-400/40' :
                    item.titleHighlight === 'Module 2:' ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-800 dark:text-white border-blue-500/30 hover:border-blue-500/40 dark:border-blue-400/20 dark:hover:border-blue-400/40' :
                    item.titleHighlight === 'Module 3:' ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-800 dark:text-white border-emerald-500/30 hover:border-emerald-500/40 dark:border-emerald-400/20 dark:hover:border-emerald-400/40' :
                    item.titleHighlight === 'Module 4:' ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-800 dark:text-white border-purple-500/30 hover:border-purple-500/40 dark:border-purple-400/20 dark:hover:border-purple-400/40' :
                    item.titleHighlight === 'Module 5:' ? 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-800 dark:text-white border-orange-500/30 hover:border-orange-500/40 dark:border-orange-400/20 dark:hover:border-orange-400/40' :
                    'bg-gray-500/20 hover:bg-gray-500/30 text-gray-800 dark:text-white border-gray-500/30 hover:border-gray-500/40 dark:border-gray-400/20 dark:hover:border-gray-400/40'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.titleHighlight === 'Module 1:' ? 'bg-green-500/30 dark:bg-green-400/20' :
                      item.titleHighlight === 'Module 2:' ? 'bg-blue-500/30 dark:bg-blue-400/20' :
                      item.titleHighlight === 'Module 3:' ? 'bg-emerald-500/30 dark:bg-emerald-400/20' :
                      item.titleHighlight === 'Module 4:' ? 'bg-purple-500/30 dark:bg-purple-400/20' :
                      item.titleHighlight === 'Module 5:' ? 'bg-orange-500/30 dark:bg-orange-400/20' :
                      'bg-gray-500/30 dark:bg-gray-400/20'
                    }`}>
                      <span className={`${
                        item.titleHighlight === 'Module 1:' ? 'text-green-700 dark:text-green-300' :
                        item.titleHighlight === 'Module 2:' ? 'text-blue-700 dark:text-blue-300' :
                        item.titleHighlight === 'Module 3:' ? 'text-emerald-700 dark:text-emerald-300' :
                        item.titleHighlight === 'Module 4:' ? 'text-purple-700 dark:text-purple-300' :
                        item.titleHighlight === 'Module 5:' ? 'text-orange-700 dark:text-orange-300' :
                        'text-gray-700 dark:text-gray-300'
                      }`}>
                        {item.titleHighlight === 'Module 1:' ? <Play className="w-5 h-5" /> :
                        item.titleHighlight === 'Module 2:' ? <Target className="w-5 h-5" /> :
                        item.titleHighlight === 'Module 3:' ? <Shield className="w-5 h-5" /> :
                        item.titleHighlight === 'Module 4:' ? <TrendingUp className="w-5 h-5" /> :
                        item.titleHighlight === 'Module 5:' ? <Award className="w-5 h-5" /> :
                        <Play className="w-5 h-5" />}
                      </span>
                    </div>
                    {item.titleHighlight === 'Module 1:' ? 'Start Learning Money Basics' :
                    item.titleHighlight === 'Module 2:' ? 'Continue Budgeting Course' :
                    item.titleHighlight === 'Module 3:' ? 'Begin Saving Strategies' :
                    item.titleHighlight === 'Module 4:' ? 'Explore Investment Basics' :
                    item.titleHighlight === 'Module 5:' ? 'Master Credit & Debt' :
                    'Start Learning'}
                  </span>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                    item.titleHighlight === 'Module 1:' ? 'text-green-700 dark:text-green-300' :
                    item.titleHighlight === 'Module 2:' ? 'text-blue-700 dark:text-blue-300' :
                    item.titleHighlight === 'Module 3:' ? 'text-emerald-700 dark:text-emerald-300' :
                    item.titleHighlight === 'Module 4:' ? 'text-purple-700 dark:text-purple-300' :
                    item.titleHighlight === 'Module 5:' ? 'text-orange-700 dark:text-orange-300' :
                    'text-gray-700 dark:text-gray-300'
                  }`} />
                </button>
              )}
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
      <div className="max-w-4xl mx-auto p-6">
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl p-6 text-center shadow-xl">
          <h4 className="text-white text-xl font-bold mb-2">Ready to Transform Your Financial Future?</h4>
          <p className="text-white/90 mb-4">
            Join thousands of learners who have mastered these essential financial skills. 
            Your journey to financial freedom starts with one click. ✨
          </p>
          
          {/* Success Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl font-bold text-white">12k+</div>
              <div className="text-xs text-white/80">Success Stories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl font-bold text-white">97%</div>
              <div className="text-xs text-white/80">Completion Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl font-bold text-white flex items-center justify-center gap-1">
                4.9 <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="text-xs text-white/80">Student Rating</div>
            </div>
          </div>

          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 mx-auto shadow-lg">
            <Award className="w-5 h-5" />
            Start Your Financial Journey
            <span className="text-lg">🎁</span>
          </button>
          <p className="text-white/80 text-sm mt-2">
            🎁 Begin today and receive 100 bonus knowledge coins!
          </p>
        </div>
      </div>
    </div>    
  );
};
