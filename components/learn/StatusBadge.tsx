import React from 'react';

interface StatusBadgeProps {
  difficulty: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ difficulty }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-emerald-300 shadow-emerald-100 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300 dark:border-emerald-800/50 dark:shadow-none';
      case 'Intermediate':
        return 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-300 shadow-amber-100 dark:from-amber-900/40 dark:to-yellow-900/40 dark:text-amber-300 dark:border-amber-800/50 dark:shadow-none';
      case 'Advanced':
        return 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 border-rose-300 shadow-rose-100 dark:from-rose-900/40 dark:to-pink-900/40 dark:text-rose-300 dark:border-rose-800/50 dark:shadow-none';
      default:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-300 shadow-gray-100 dark:from-gray-800/40 dark:to-slate-800/40 dark:text-gray-300 dark:border-gray-700/50 dark:shadow-none';
    }
  };

  return (
    <span className={`${getDifficultyColor(difficulty)} text-sm font-bold shadow-md border-2 px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300`}>
      {difficulty}
    </span>
  );
};