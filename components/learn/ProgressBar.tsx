import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="mb-16 max-w-4xl mx-auto">
      <div className="bg-white/50 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-lg dark:shadow-gray-900/30 p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 to-transparent dark:from-purple-900/20 rounded-full"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="text-3xl">📊</div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent">Learning Progress</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {progress}%
              </span>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">Complete</span>
            </div>
          </div>
          
          <div className="relative mb-6">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 h-full rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 dark:bg-white/10 animate-pulse"></div>
              </div>
            </div>
            <div 
              className="absolute -top-3 transition-all duration-1000 ease-out transform hover:scale-125"
              style={{ left: `${Math.max(0, progress - 3)}%` }}
            >
              <div className="text-2xl animate-bounce filter drop-shadow-lg">🚀</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium mb-2">
              Amazing progress! Keep up the fantastic work! 🌟
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
              <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">🎯 On Track</span>
              <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">📈 Growing</span>
              <span className="bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">💪 Strong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};