// import React from 'react';
// import { ModuleCard } from './ModuleCard';
// import { ModuleDetail } from './ModuleDetail';
// import { LearningModule } from '@/types';

// interface LearningRoadProps {
//   modules: LearningModule[];
//   hoveredModule: number | null;
//   setHoveredModule: (id: number | null) => void;
//   handleUnlockModule: (moduleId: number, requiredCoins: number) => void;
// }

// export const LearningRoad: React.FC<LearningRoadProps> = ({ 
//   modules, 
//   hoveredModule, 
//   setHoveredModule, 
//   handleUnlockModule 
// }) => {
//   return (
//     <div className="relative max-w-6xl mx-auto">
//       {/* 3D Road Background */}
//       <div className="absolute left-1/2 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full transform -translate-x-1/2 perspective-1000 hidden sm:block">
//         <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl relative overflow-hidden transform rotateX-2">
//           {/* Road texture with shimmer */}
//           <div className="absolute inset-0 opacity-20">
//             <div className="w-full h-full" style={{
//               backgroundImage: `repeating-linear-gradient(
//                 0deg,
//                 transparent,
//                 transparent 35px,
//                 rgba(255,255,255,0.3) 35px,
//                 rgba(255,255,255,0.3) 50px
//               )`
//             }}></div>
//           </div>
          
//           {/* Animated center line */}
//           <div className="absolute left-1/2 top-0 w-2 h-full transform -translate-x-1/2">
//             <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-yellow-400 dark:from-yellow-500 dark:to-yellow-600 opacity-80" style={{
//               backgroundImage: `repeating-linear-gradient(
//                 0deg,
//                 transparent,
//                 transparent 20px,
//                 rgba(255,255,255,0.5) 20px,
//                 rgba(255,255,255,0.5) 30px
//               )`
//             }}></div>
//           </div>
          
//           {/* Enhanced side lines */}
//           <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 dark:from-white/40 dark:to-white/20 rounded-full"></div>
//           <div className="absolute right-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 dark:from-white/40 dark:to-white/20 rounded-full"></div>
//         </div>
//       </div>

//       {/* Learning Modules with Enhanced Effects */}
//       <div className="relative space-y-20 sm:space-y-32 md:space-y-40 py-16 sm:py-20">
//         {modules.map((module, index) => {
//           const isLeft = index % 2 === 0;
          
//           return (
//             <div key={module.id} className="relative flex items-center justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
//               {/* Enhanced Character on Road */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 z-30 hidden sm:block">
//                 <div className={`bg-gradient-to-br ${module.color} rounded-full p-4 sm:p-5 md:p-6 shadow-xl dark:shadow-black/30 border-4 border-white dark:border-gray-800 relative group cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-3`}>
//                   <div className="text-3xl sm:text-4xl md:text-5xl filter drop-shadow-lg group-hover:animate-bounce">{module.character}</div>
                  
//                   {/* Glowing ring effect */}
//                   <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
                  
//                   <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                     <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 shadow-lg dark:shadow-black/30 border border-white/50 dark:border-gray-700/50">
//                       {module.characterName}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Module Card */}
//               <ModuleCard 
//                 module={module}
//                 isLeft={isLeft}
//                 isHovered={hoveredModule === module.id}
//                 onHover={setHoveredModule}
//                 onUnlock={handleUnlockModule}
//               />

//               {/* Module Detail Popup */}
//               {hoveredModule === module.id && (
//                 <ModuleDetail
//                   module={module}
//                   isLeft={isLeft}
//                   onUnlock={handleUnlockModule}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { ModuleCard } from './ModuleCard';
import { ModuleDetail } from './ModuleDetail';
import { LearningModule } from '@/types';

interface LearningRoadProps {
  modules: LearningModule[];
  hoveredModule: number | null;
  setHoveredModule: (id: number | null) => void;
  handleUnlockModule: (moduleId: number, requiredCoins: number) => void;
  currentModuleId?: number; // Add this prop to track current module
}

export const LearningRoad: React.FC<LearningRoadProps> = ({ 
  modules, 
  hoveredModule, 
  setHoveredModule, 
  handleUnlockModule,
  currentModuleId = 1 // Default to first module
}) => {
  // Find current module index for character positioning
  const currentModuleIndex = modules.findIndex(module => module.id === currentModuleId);
  const activeModuleIndex = currentModuleIndex >= 0 ? currentModuleIndex : 0;

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Enhanced Realistic Road Background */}
      <div className="absolute left-1/2 top-0 w-20 sm:w-28 md:w-36 lg:w-44 h-full transform -translate-x-1/2 perspective-1000 hidden sm:block">
        <div className="w-full h-full relative overflow-hidden transform rotateX-2">
          {/* Asphalt Road Base */}
          <div className="w-full h-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl shadow-2xl relative">
            
            {/* Road texture overlay */}
            <div className="absolute inset-0 opacity-40">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '8px 8px, 12px 12px, 6px 6px'
              }}></div>
            </div>

            {/* Yellow center divider line */}
            <div className="absolute left-1/2 top-0 w-1.5 h-full transform -translate-x-1/2 overflow-hidden">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  #FCD34D 0px,
                  #FCD34D 25px,
                  transparent 25px,
                  transparent 50px
                )`,
                backgroundSize: '100% 75px'
              }}></div>
            </div>
            
            {/* White lane markers */}
            <div className="absolute left-3 top-0 w-0.5 h-full bg-gradient-to-b from-white/70 to-white/50 dark:from-white/50 dark:to-white/30"></div>
            <div className="absolute right-3 top-0 w-0.5 h-full bg-gradient-to-b from-white/70 to-white/50 dark:from-white/50 dark:to-white/30"></div>
            
            {/* Road wear and aging effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-2 w-8 h-2 bg-gray-600 rounded-full blur-sm"></div>
              <div className="absolute top-2/3 right-4 w-6 h-1 bg-gray-500 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 left-1/3 w-4 h-1 bg-gray-600 rounded-full blur-sm"></div>
            </div>

            {/* Subtle road shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 dark:from-transparent dark:via-white/3 dark:to-white/5"></div>
            
            {/* Lane reflectors */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-full h-full">
              <div className="absolute top-1/6 w-2 h-1 bg-yellow-200 rounded-full opacity-60 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute top-2/6 w-2 h-1 bg-yellow-200 rounded-full opacity-60 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute top-3/6 w-2 h-1 bg-yellow-200 rounded-full opacity-60 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute top-4/6 w-2 h-1 bg-yellow-200 rounded-full opacity-60 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute top-5/6 w-2 h-1 bg-yellow-200 rounded-full opacity-60 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Moving Character */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 z-40 hidden sm:block transition-all duration-1000 ease-in-out"
        style={{
          top: `${16 + (activeModuleIndex * (32 * 4))}px` // Adjust positioning based on spacing
        }}
      >
        <div className="relative group cursor-pointer">
          {/* Character container with subtle effects */}
          <div className="bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-600 rounded-full p-5 sm:p-6 md:p-7 shadow-xl dark:shadow-black/30 border-3 border-white dark:border-gray-700 relative transition-all duration-300 hover:scale-105">
            
            {/* Main character */}
            <div className="text-4xl sm:text-5xl md:text-6xl filter drop-shadow-lg">
              🚀
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/15 dark:to-cyan-500/15 rounded-full blur-lg"></div>
            
            {/* Single subtle ring */}
            <div className="absolute -inset-3 border border-dashed border-cyan-300/30 dark:border-cyan-400/20 rounded-full animate-spin-slow opacity-50"></div>
          </div>

          {/* Character name badge */}
          <div className="absolute -bottom-12 sm:-bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-gray-600">
              Learning Explorer
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-green-500 dark:bg-green-400 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
              Module {currentModuleId}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="relative space-y-20 sm:space-y-32 md:space-y-40 py-16 sm:py-20">
        {modules.map((module, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div key={module.id} className="relative flex items-center justify-center min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
              {/* Module milestone marker on road */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
                <div className={`w-4 h-4 rounded-full border-3 transition-all duration-300 ${
                  module.id <= currentModuleId 
                    ? 'bg-green-400 border-green-300 shadow-lg shadow-green-400/50' 
                    : 'bg-gray-300 border-gray-200 dark:bg-gray-600 dark:border-gray-500'
                }`}>
                  {module.id <= currentModuleId && (
                    <div className="w-full h-full bg-white rounded-full animate-ping opacity-60"></div>
                  )}
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};