import React from 'react';
import { BookOpen, Clock, Zap, Lock, Coins } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { LearningModule } from '@/types';

interface ModuleCardProps {
  module: LearningModule;
  isLeft: boolean;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  onUnlock: (id: number, coins: number) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ 
  module, 
  isLeft, 
  isHovered, 
  onHover, 
  onUnlock 
}) => {
  return (
    <div className={`${isLeft ? 'mr-auto pr-20' : 'ml-auto pl-20'} w-11/12 md:w-7/12 lg:w-5/12 relative z-20`}>
      <div
        className={`group relative overflow-hidden transition-all duration-700 cursor-pointer transform ${
          module.unlocked 
            ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl dark:shadow-gray-900/40 hover:shadow-2xl dark:hover:shadow-gray-900/60 border-2 border-white/60 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2' 
            : 'bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg dark:shadow-gray-900/30 border-2 border-gray-300/50 dark:border-gray-700/30'
        } rounded-3xl`}
        onMouseEnter={() => onHover(module.id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Enhanced glow effect */}
        {module.unlocked && (
          <div className={`absolute -inset-2 bg-gradient-to-r ${module.color} rounded-3xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 blur-xl transition-all duration-700`}></div>
        )}
        
        {/* Image Section with Parallax Effect */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl">
          <img 
            src={module.image} 
            alt={module.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              module.unlocked ? 'group-hover:scale-110 group-hover:rotate-1' : 'grayscale opacity-50'
            }`}
          />
          
          {/* Enhanced overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-700"></div>
          
          {/* Floating badges with animations */}
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white border-0 text-xs md:text-sm font-bold shadow-lg dark:shadow-purple-900/30 animate-pulse px-3 py-1 md:px-4 md:py-2 rounded-full">
              Level {module.level}
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <StatusBadge difficulty={module.difficulty} />
          </div>

          {/* Enhanced Lock Overlay */}
          {!module.unlocked && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-t-3xl">
              <div className="text-center text-white">
                <div className="bg-white/20 rounded-full p-4 md:p-6 mb-4 md:mb-6 backdrop-blur-sm border border-white/30 animate-pulse">
                  <Lock className="h-8 w-8 md:h-10 md:w-10 opacity-90" />
                </div>
                <p className="font-bold text-lg md:text-xl mb-2">🔒 Locked</p>
                <p className="text-xs md:text-sm opacity-90">Complete previous level to unlock</p>
              </div>
            </div>
          )}

          {/* Enhanced progress overlay */}
          {module.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
              <div className="bg-white/20 rounded-full p-1 md:p-2 backdrop-blur-sm">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${module.color} h-full rounded-full`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Content Section */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-500 leading-tight mb-3">
            {module.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            {module.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 md:px-3 md:py-2 rounded-full border border-blue-100 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors duration-300">
                <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                {module.lessons}
              </span>
              <span className="flex items-center gap-1 bg-green-50 dark:bg-green-900/30 px-2 py-1 md:px-3 md:py-2 rounded-full border border-green-100 dark:border-green-800/50 hover:bg-green-100 dark:hover:bg-green-800/40 transition-colors duration-300">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                {module.duration}
              </span>
            </div>
            
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 px-2 py-1 md:px-3 md:py-2 rounded-full text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-800/50 hover:scale-105 transition-transform duration-300">
              <Coins className="h-4 w-4 md:h-5 md:w-5 animate-spin" style={{animationDuration: '5s'}} />
              <span className="text-base md:text-lg">{module.coins}</span>
            </div>
          </div>

          {module.unlocked && (
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 hover:from-green-600 hover:to-emerald-700 dark:hover:from-green-700 dark:hover:to-emerald-800 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-green-300/50 dark:hover:shadow-green-900/50 text-sm md:text-base">
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <Zap className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                Start Adventure
                <span className="text-lg md:text-2xl">🚀</span>
              </div>
            </button>
          )}
          {!module.unlocked && (
            <button 
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 hover:from-amber-600 hover:to-orange-600 dark:hover:from-amber-700 dark:hover:to-orange-700 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-amber-300/50 dark:hover:shadow-amber-900/50 text-sm md:text-base"
              onClick={() => onUnlock(module.id, module.coins)}
            >
              <div className="flex items-center justify-center gap-2">
                <Coins className="h-4 w-4 md:h-5 md:w-5 animate-spin" style={{animationDuration: '3s'}} />
                Unlock ({module.coins} coins)
                <span className="text-lg md:text-xl">🔓</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};