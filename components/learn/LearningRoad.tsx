import React from 'react';
import { ModuleCard } from './ModuleCard';
import { ModuleDetail } from './ModuleDetail';
import { LearningModule } from '@/types';

interface LearningRoadProps {
  modules: LearningModule[];
  hoveredModule: number | null;
  setHoveredModule: (id: number | null) => void;
  handleUnlockModule: (moduleId: number, requiredCoins: number) => void;
}

export const LearningRoad: React.FC<LearningRoadProps> = ({ 
  modules, 
  hoveredModule, 
  setHoveredModule, 
  handleUnlockModule 
}) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* 3D Road Background */}
      <div className="absolute left-1/2 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full transform -translate-x-1/2 perspective-1000 hidden sm:block">
        <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl relative overflow-hidden transform rotateX-2">
          {/* Road texture with shimmer */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 35px,
                rgba(255,255,255,0.3) 35px,
                rgba(255,255,255,0.3) 50px
              )`
            }}></div>
          </div>
          
          {/* Animated center line */}
          <div className="absolute left-1/2 top-0 w-2 h-full transform -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-yellow-400 dark:from-yellow-500 dark:to-yellow-600 opacity-80" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,0.5) 20px,
                rgba(255,255,255,0.5) 30px
              )`
            }}></div>
          </div>
          
          {/* Enhanced side lines */}
          <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 dark:from-white/40 dark:to-white/20 rounded-full"></div>
          <div className="absolute right-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 dark:from-white/40 dark:to-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Learning Modules with Enhanced Effects */}
      <div className="relative space-y-20 sm:space-y-32 md:space-y-40 py-16 sm:py-20">
        {modules.map((module, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div key={module.id} className="relative flex items-center justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
              {/* Enhanced Character on Road */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-30 hidden sm:block">
                <div className={`bg-gradient-to-br ${module.color} rounded-full p-4 sm:p-5 md:p-6 shadow-xl dark:shadow-black/30 border-4 border-white dark:border-gray-800 relative group cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-3`}>
                  <div className="text-3xl sm:text-4xl md:text-5xl filter drop-shadow-lg group-hover:animate-bounce">{module.character}</div>
                  
                  {/* Glowing ring effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
                  
                  <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 shadow-lg dark:shadow-black/30 border border-white/50 dark:border-gray-700/50">
                      {module.characterName}
                    </div>
                  </div>
                </div>
              </div>

              {/* Module Card */}
              <ModuleCard 
                module={module}
                isLeft={isLeft}
                isHovered={hoveredModule === module.id}
                onHover={setHoveredModule}
                onUnlock={handleUnlockModule}
              />

              {/* Module Detail Popup */}
              {hoveredModule === module.id && (
                <ModuleDetail
                  module={module}
                  isLeft={isLeft}
                  onUnlock={handleUnlockModule}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};