import { LearningModule } from '../types';

export const learningModules: LearningModule[] = [
  {
    id: 1,
    title: "Money Basics",
    description: "Learn what money is and how it works in everyday life",
    level: 1,
    unlocked: true,
    completed: false,
    progress: 0,
    coins: 100,
    path: "/learn/money-basics",
    lessons: 5,
    duration: "2 hours",
    difficulty: "Beginner",
    topics: ["What is Money?", "Different Types of Currency", "Money vs Barter", "Digital Money", "Money Safety"],
    image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
    character: "💰",
    characterName: "Penny the Pig",
    color: "from-emerald-400 to-teal-500 dark:from-emerald-600 dark:to-teal-700"
  },
  {
    id: 2,
    title: "Saving Skills",
    description: "Discover the power of saving money for your future goals",
    level: 2,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 150,
    path: "/learn/saving-skills",
    lessons: 4,
    duration: "1.5 hours",
    difficulty: "Beginner",
    topics: ["Why Save Money?", "Setting Savings Goals", "Piggy Banks & Accounts", "Emergency Funds"],
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600",
    character: "🐷",
    characterName: "Saver Sam",
    color: "from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700"
  },
  {
    id: 3,
    title: "Smart Spending",
    description: "Learn to make wise spending choices and avoid money traps",
    level: 3,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 200,
    path: "/learn/smart-spending",
    lessons: 6,
    duration: "2.5 hours",
    difficulty: "Intermediate",
    topics: ["Needs vs Wants", "Budgeting Basics", "Comparison Shopping", "Avoiding Scams", "Smart Online Shopping", "Money Planning"],
    image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600",
    character: "🦉",
    characterName: "Wise Owl",
    color: "from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700"
  },
  {
    id: 4,
    title: "Investment Basics",
    description: "Grow your money with simple investment strategies",
    level: 4,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 250,
    path: "/learn/investment-basics",
    lessons: 5,
    duration: "3 hours",
    difficulty: "Intermediate",
    topics: ["What is Investing?", "Stocks & Bonds", "Risk & Reward", "Compound Interest", "Investment Safety"],
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
    character: "🚀",
    characterName: "Rocket Rick",
    color: "from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700"
  },
  {
    id: 5,
    title: "Money Master",
    description: "Master advanced financial concepts and become money-wise",
    level: 5,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 300,
    path: "/learn/money-master",
    lessons: 7,
    duration: "4 hours",
    difficulty: "Advanced",
    topics: ["Advanced Budgeting", "Tax Basics", "Credit & Loans", "Business Money", "Financial Planning", "Economic Concepts", "Money Psychology"],
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
    character: "👑",
    characterName: "Master Max",
    color: "from-purple-400 to-violet-500 dark:from-purple-600 dark:to-violet-700"
  }
];