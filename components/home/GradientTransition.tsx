'use client';

import { motion } from 'framer-motion';

export default function GradientTransition() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Extend the hero section background with enhanced gradients */}
      <div className="w-full h-8 bg-slate-900 dark:bg-slate-950" />
      
      {/* Enhanced gradient transition with floating elements */}
      <div className="relative w-full h-32 bg-gradient-to-b from-slate-900 via-slate-700 to-background dark:from-slate-950 dark:via-slate-800 dark:to-background">
        
        {/* Floating gradient orbs for continuity */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-8 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-lg animate-pulse delay-500" />
          <div className="absolute bottom-4 left-1/2 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Subtle wave pattern */}
        <svg className="absolute bottom-0 w-full fill-background/50" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0,20 C300,10 600,30 900,15 C1050,5 1150,25 1200,20 L1200,40 L0,40 Z" />
        </svg>
      </div>
    </div>
  );
};