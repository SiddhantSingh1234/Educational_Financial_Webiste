import React from 'react';
import { Award, Gift } from 'lucide-react';

export const AchievementSection: React.FC = () => {
  return (
    <div className="mt-20 md:mt-40 text-center px-4">
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 dark:from-purple-600 dark:via-pink-600 dark:to-rose-600 rounded-3xl shadow-xl dark:shadow-gray-900/30 p-8 md:p-16 max-w-4xl mx-auto text-white relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-12 left-12 text-6xl md:text-8xl animate-bounce" style={{animationDelay: '0s'}}>🎉</div>
          <div className="absolute top-24 right-24 text-4xl md:text-6xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
          <div className="absolute bottom-12 left-24 text-5xl md:text-7xl animate-bounce" style={{animationDelay: '2s'}}>🏆</div>
          <div className="absolute bottom-24 right-12 text-3xl md:text-5xl animate-pulse" style={{animationDelay: '0.5s'}}>💎</div>
          <div className="absolute top-1/2 left-1/4 text-2xl md:text-4xl animate-spin" style={{animationDuration: '8s', animationDelay: '1.5s'}}>✨</div>
          <div className="absolute top-1/3 right-1/3 text-4xl md:text-6xl animate-bounce" style={{animationDelay: '2.5s'}}>⭐</div>
        </div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-10 right-20 w-16 md:w-20 h-16 md:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 md:w-32 h-24 md:h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10">
          <div className="text-6xl md:text-8xl mb-6 md:mb-8 animate-bounce filter drop-shadow-2xl">🎓</div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight filter drop-shadow-lg">
            Ready for Your Financial Adventure?
          </h3>
          <p className="text-xl md:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of young explorers who have discovered the secrets of smart money management! 
            Transform your future, one lesson at a time. 🚀
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold">10k+</div>
              <div className="text-xs md:text-sm opacity-90">Happy Learners</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold">95%</div>
              <div className="text-xs md:text-sm opacity-90">Success Rate</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold">4.9⭐</div>
              <div className="text-xs md:text-sm opacity-90">Average Rating</div>
            </div>
          </div>
          
          <button className="bg-white text-purple-600 hover:bg-purple-50 dark:bg-white dark:text-purple-700 dark:hover:bg-purple-50 font-bold px-8 md:px-16 py-4 md:py-6 rounded-3xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-white/30 text-base md:text-xl group">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-2xl md:text-3xl group-hover:animate-spin">🚀</span>
              Begin Your Journey
              <Gift className="h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" />
            </div>
          </button>
          
          <p className="text-white/70 text-xs md:text-sm mt-4 md:mt-6">
            🎁 Start today and get your first 100 coins free!
          </p>
        </div>
      </div>
    </div>
  );
};