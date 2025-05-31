import React from 'react';
import { Trophy, Coins, Target } from 'lucide-react';
import { UserStats } from '@/types';

interface StatsCardProps {
  stats: UserStats;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-lg dark:shadow-gray-900/30 p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden transition-colors duration-300">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"></div>
        
        <div className="flex items-center gap-12 md:gap-16 relative z-10">
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-2xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-4 shadow-lg dark:shadow-indigo-900/30 group-hover:shadow-blue-300/50 dark:group-hover:shadow-blue-800/30 transition-all duration-300 group-hover:scale-110">
              <Trophy className="h-8 w-8 md:h-10 md:w-10 text-white animate-pulse" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Current Level</p>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{stats.level}</p>
          </div>
          
          <div className="w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
          
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 rounded-2xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-4 shadow-lg dark:shadow-orange-900/30 group-hover:shadow-amber-300/50 dark:group-hover:shadow-amber-800/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Coins className="h-8 w-8 md:h-10 md:w-10 text-white animate-spin" style={{animationDuration: '5s'}} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Your Coins</p>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">{stats.coins}</p>
          </div>

          <div className="w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-emerald-500 to-green-500 dark:from-emerald-600 dark:to-green-600 rounded-2xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-4 shadow-lg dark:shadow-green-900/30 group-hover:shadow-emerald-300/50 dark:group-hover:shadow-emerald-800/30 transition-all duration-300 group-hover:scale-110">
              <Target className="h-8 w-8 md:h-10 md:w-10 text-white animate-bounce" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Progress</p>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">{stats.progress}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};