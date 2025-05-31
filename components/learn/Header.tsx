import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-12 md:mb-20 relative px-4">
      <div className="absolute -top-8 md:-top-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-6xl md:text-8xl animate-bounce filter drop-shadow-lg">🎓</div>
      </div>
      
      <div className="bg-white/10 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-gray-900/30 p-6 md:p-10 mx-auto max-w-4xl border border-white/40 dark:border-gray-700/40 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            Financial Adventure Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Join our friendly characters on an exciting quest to master money skills! 🌈
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <span className="bg-white/80 dark:bg-gray-700/80 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-sm">🎮 Interactive Learning</span>
            <span className="bg-white/80 dark:bg-gray-700/80 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-sm">🏆 Earn Rewards</span>
            <span className="bg-white/80 dark:bg-gray-700/80 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-sm">🚀 Level Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};