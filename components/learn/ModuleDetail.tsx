import React from 'react';
import { BookOpen, Check, Clock, Star, Coins, Zap, Users } from 'lucide-react';
import { LearningModule } from '@/types';

interface ModuleDetailProps {
  module: LearningModule;
  isLeft: boolean;
  onUnlock: (id: number, coins: number) => void;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, isLeft, onUnlock }) => {
  return (
    <div className={`absolute ${isLeft ? 'right-0 pr-20' : 'left-0 pl-20'} w-11/12 md:w-7/12 lg:w-5/12 z-40`}>
      <div className="perspective-1000">
        <div className={`transform transition-all duration-700 ${
          isLeft ? 'rotateY-6 hover:rotateY-3' : '-rotateY-6 hover:-rotateY-3'
        } preserve-3d animate-slideIn`}>
          {/* Enhanced Book Shadow */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50 blur-2xl transform translate-y-4 translate-x-2 scale-105"></div>
          
          {/* Enhanced Book Cover */}
          <div className={`relative bg-gradient-to-br ${module.color} shadow-2xl border-0 overflow-hidden rounded-3xl transform-gpu`}>
            {/* Book spine effect with gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent"></div>
            
            {/* Enhanced cover design */}
            <div className="p-6 md:p-8 text-white relative">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl md:text-5xl filter drop-shadow-lg animate-bounce">{module.character}</div>
                <BookOpen className="h-8 w-8 md:h-10 md:w-10 opacity-80 animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight filter drop-shadow-md">Course Guide</h3>
              <p className="text-white/90 text-base md:text-lg opacity-90">{module.title}</p>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-white/20 text-2xl">✨</div>
              <div className="absolute bottom-4 left-4 text-white/20 text-xl">🌟</div>
            </div>
            
            {/* Enhanced book pages */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 relative">
              {/* Page texture with better styling */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 28px,
                  #e5e7eb 28px,
                  #e5e7eb 29px
                )`
              }}></div>
              
              <div className="relative space-y-4 md:space-y-6">
                <div className="flex items-center justify-between text-xs md:text-sm border-b-2 border-gray-100 dark:border-gray-700 pb-3">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2 font-medium">
                    <Clock className="h-3 w-3 md:h-4 md:w-4 text-blue-500 dark:text-blue-400" />
                    Duration:
                  </span>
                  <span className="font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full">{module.duration}</span>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2 text-base md:text-lg">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 animate-pulse" />
                    What You'll Learn
                  </h4>
                  <ul className="space-y-2 md:space-y-3 max-h-32 md:max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                    {module.topics.slice(0, 4).map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm group">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">{topic}</span>
                      </li>
                    ))}
                    {module.topics.length > 4 && (
                      <li className="text-xs md:text-sm text-gray-500 dark:text-gray-400 italic flex items-center gap-2 mt-2">
                        <span className="text-base">✨</span>
                        +{module.topics.length - 4} more exciting topics...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="border-t-2 border-gray-100 dark:border-gray-700 pt-4 md:pt-6 space-y-3 md:space-y-4">
                  {/* {module.unlocked ? (
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 hover:from-green-600 hover:to-emerald-700 dark:hover:from-green-700 dark:hover:to-emerald-800 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-green-300/50 dark:hover:shadow-green-900/50 text-sm md:text-base">
                      <div className="flex items-center justify-center gap-2 md:gap-3">
                        <Zap className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                        Start Adventure
                        <span className="text-lg md:text-2xl">🚀</span>
                      </div>
                    </button>
                  ) : (
                    <button 
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 hover:from-amber-600 hover:to-orange-600 dark:hover:from-amber-700 dark:hover:to-orange-700 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-amber-300/50 dark:hover:shadow-amber-900/50 text-sm md:text-base"
                      onClick={() => onUnlock(module.id, module.coins)}
                    >
                      <div className="flex items-center justify-center gap-2 md:gap-3">
                        <Coins className="h-4 w-4 md:h-5 md:w-5 animate-spin" style={{animationDuration: '3s'}} />
                        Unlock Adventure ({module.coins} coins)
                        <span className="text-lg md:text-2xl">🔓</span>
                      </div>
                    </button>
                  )} */}
                  
                  {/* Additional info */}
                  <div className="text-center text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-2 md:p-3 rounded-xl">
                    <div className="flex items-center justify-center gap-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        1.2k+ learners
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        4.9 rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};