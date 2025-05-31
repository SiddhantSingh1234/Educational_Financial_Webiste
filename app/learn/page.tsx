'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Coins, Lock, Check, Trophy, BookOpen, Star, Target, Award, MapPin, Users, Clock, Zap, Gift, Sparkles } from 'lucide-react';

const learningModules = [
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
    color: "from-emerald-400 to-teal-500"
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
    color: "from-pink-400 to-rose-500"
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
    color: "from-amber-400 to-orange-500"
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
    color: "from-blue-400 to-indigo-500"
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
    color: "from-purple-400 to-violet-500"
  }
];

export default function LearnPage() {
  const [modules, setModules] = useState(learningModules);
  const [userLevel, setUserLevel] = useState(1);
  const [userCoins, setUserCoins] = useState(50);
  const [overallProgress, setOverallProgress] = useState(20);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [sparkles, setSparkles] = useState([]);

  // Generate floating sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 2,
        size: 0.5 + Math.random() * 1
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlockModule = (moduleId, requiredCoins) => {
    if (userCoins >= requiredCoins) {
      setModules(modules.map(module => 
        module.id === moduleId ? { ...module, unlocked: true } : module
      ));
      setUserCoins(userCoins - requiredCoins);
      // Enhanced success notification
      setTimeout(() => {
        alert("🎉 Module unlocked! Welcome to your new adventure!");
      }, 100);
    } else {
      alert(`💰 You need ${requiredCoins - userCoins} more coins to unlock this amazing module!`);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-emerald-300 shadow-emerald-100';
      case 'Intermediate': return 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-300 shadow-amber-100';
      case 'Advanced': return 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 border-rose-300 shadow-rose-100';
      default: return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-300 shadow-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-25 to-pink-50 overflow-x-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Dynamic Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute text-yellow-300 opacity-60"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              fontSize: `${sparkle.size}rem`,
              animation: `float ${sparkle.duration}s ease-in-out infinite`,
              animationDelay: `${sparkle.delay as number}s`
            }}
          >
            ✨
          </div>
        ))}
        
        {/* Corner decorations */}
        <div className="absolute top-10 left-10 text-6xl animate-pulse opacity-30 text-blue-400">🌟</div>
        <div className="absolute top-20 right-16 text-4xl animate-bounce opacity-40 text-purple-400" style={{animationDelay: '1s'}}>💫</div>
        <div className="absolute bottom-32 left-16 text-5xl animate-pulse opacity-30 text-pink-400" style={{animationDelay: '2s'}}>⭐</div>
        <div className="absolute bottom-40 right-20 text-3xl animate-bounce opacity-40 text-indigo-400" style={{animationDelay: '0.5s'}}>✨</div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-20">
        {/* Enhanced Header with Glassmorphism */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-8xl animate-bounce filter drop-shadow-lg">🎓</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mx-auto max-w-4xl border border-white/40 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            
            <div className="relative z-10">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                Financial Adventure Journey
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                Join our friendly characters on an exciting quest to master money skills! 🌈
              </p>
              <div className="flex justify-center gap-3 text-sm text-gray-600">
                <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm">🎮 Interactive Learning</span>
                <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm">🏆 Earn Rewards</span>
                <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm">🚀 Level Up</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Dashboard with Micro-animations */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
            
            <div className="flex items-center gap-16 relative z-10">
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl group-hover:shadow-blue-300/50 transition-all duration-300 group-hover:scale-110">
                  <Trophy className="h-10 w-10 text-white animate-pulse" />
                </div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Current Level</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{userLevel}</p>
              </div>
              
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Coins className="h-10 w-10 text-white animate-spin" style={{animationDuration: '3s'}} />
                </div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Your Coins</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{userCoins}</p>
              </div>

              <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl group-hover:shadow-emerald-300/50 transition-all duration-300 group-hover:scale-110">
                  <Target className="h-10 w-10 text-white animate-bounce" />
                </div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Progress</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{overallProgress}%</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Progress Section with Animated Rocket */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">📊</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Learning Progress</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {overallProgress}%
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Complete</span>
                </div>
              </div>
              
              <div className="relative mb-6">
                <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${overallProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <div 
                  className="absolute -top-2 transition-all duration-1000 ease-out transform hover:scale-125"
                  style={{ left: `${Math.max(0, overallProgress - 3)}%` }}
                >
                  <div className="text-2xl animate-bounce filter drop-shadow-lg">🚀</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-700 text-lg font-medium mb-2">
                  Amazing progress! Keep up the fantastic work! 🌟
                </p>
                <div className="flex justify-center gap-2 text-sm text-gray-600">
                  <span className="bg-blue-50 px-3 py-1 rounded-full">🎯 On Track</span>
                  <span className="bg-green-50 px-3 py-1 rounded-full">📈 Growing</span>
                  <span className="bg-purple-50 px-3 py-1 rounded-full">💪 Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Learning Road with 3D Effects */}
        <div className="relative max-w-6xl mx-auto">
          {/* 3D Road Background */}
          <div className="absolute left-1/2 top-0 w-40 h-full transform -translate-x-1/2 perspective-1000">
            <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-3xl shadow-2xl relative overflow-hidden transform rotateX-2">
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
                <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-yellow-400 opacity-80" style={{
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
              <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 rounded-full"></div>
              <div className="absolute right-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Learning Modules with Enhanced Effects */}
          <div className="relative space-y-40 py-20">
            {modules.map((module, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={module.id} className="relative flex items-center justify-center min-h-[350px]">
                  {/* Enhanced Character on Road */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
                    <div className={`bg-gradient-to-br ${module.color} rounded-full p-6 shadow-2xl border-4 border-white relative group cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-6`}>
                      <div className="text-5xl filter drop-shadow-lg group-hover:animate-bounce">{module.character}</div>
                      
                      {/* Glowing ring effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                      
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-xl border border-white/50">
                          {module.characterName}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Course Card */}
                  <div className={`${isLeft ? 'mr-auto pr-24' : 'ml-auto pl-24'} w-5/12 relative z-20`}>
                    <Card
                      className={`group relative overflow-hidden transition-all duration-700 cursor-pointer transform ${
                        module.unlocked 
                          ? 'bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl border-2 border-white/60 hover:scale-105 hover:-translate-y-4' 
                          : 'bg-gray-100/80 backdrop-blur-sm shadow-lg border-2 border-gray-300/50'
                      } rounded-3xl`}
                      onMouseEnter={() => setHoveredModule(module.id as unknown as null)}
                      onMouseLeave={() => setHoveredModule(null)}
                    >
                      {/* Enhanced glow effect */}
                      {module.unlocked && (
                        <div className={`absolute -inset-2 bg-gradient-to-r ${module.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700`}></div>
                      )}
                      
                      {/* Image Section with Parallax Effect */}
                      <div className="relative h-64 overflow-hidden rounded-t-3xl">
                        <img 
                          src={module.image} 
                          alt={module.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            module.unlocked ? 'group-hover:scale-125 group-hover:rotate-2' : 'grayscale opacity-50'
                          }`}
                        />
                        
                        {/* Enhanced overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-700"></div>
                        
                        {/* Floating badges with animations */}
                        <div className="absolute top-6 left-6 flex gap-3">
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-sm font-bold shadow-xl animate-pulse px-4 py-2">
                            Level {module.level}
                          </Badge>
                        </div>

                        <div className="absolute top-6 right-6">
                          <Badge className={`${getDifficultyColor(module.difficulty)} text-sm font-bold shadow-xl border-2 px-4 py-2 hover:scale-110 transition-transform duration-300`}>
                            {module.difficulty}
                          </Badge>
                        </div>

                        {/* Enhanced Lock Overlay */}
                        {!module.unlocked && (
                          <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-t-3xl">
                            <div className="text-center text-white">
                              <div className="bg-white/20 rounded-full p-6 mb-6 backdrop-blur-sm border border-white/30 animate-pulse">
                                <Lock className="h-10 w-10 opacity-90" />
                              </div>
                              <p className="font-bold text-xl mb-2">🔒 Locked</p>
                              <p className="text-sm opacity-90">Complete previous level to unlock</p>
                            </div>
                          </div>
                        )}

                        {/* Enhanced progress overlay */}
                        {module.progress > 0 && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                              <Progress value={module.progress} className="h-3" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Enhanced Content Section */}
                      <CardHeader className="pb-4 px-8 pt-8">
                        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 leading-tight">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg leading-relaxed mt-3">
                          {module.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0 pb-8 px-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                              <BookOpen className="h-4 w-4" />
                              {module.lessons} lessons
                            </span>
                            <span className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 hover:bg-green-100 transition-colors duration-300">
                              <Clock className="h-4 w-4" />
                              {module.duration}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-700 font-bold border border-amber-200 hover:scale-105 transition-transform duration-300">
                            <Coins className="h-5 w-5 animate-spin" style={{animationDuration: '3s'}} />
                            <span className="text-lg">{module.coins}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Enhanced 3D Book Display */}
                  {hoveredModule === module.id && (
                    <div className={`absolute ${isLeft ? 'right-0 pr-28' : 'left-0 pl-24'} w-5/12 z-40`}>
                      <div className="perspective-1000">
                        <div className={`transform transition-all duration-700 ${
                          isLeft ? 'rotateY-12 hover:rotateY-6' : '-rotateY-12 hover:-rotateY-6'
                        } preserve-3d animate-slideIn`}>
                          {/* Enhanced Book Shadow */}
                          <div className="absolute inset-0 bg-black/30 blur-2xl transform translate-y-6 translate-x-4 scale-105"></div>
                          
                          {/* Enhanced Book Cover */}
                          <Card className={`relative bg-gradient-to-br ${module.color} shadow-2xl border-0 overflow-hidden transform-gpu`}>
                            {/* Book spine effect with gradient */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent"></div>
                            
                            {/* Enhanced cover design */}
                            <div className="p-8 text-white relative">
                              <div className="flex items-center justify-between mb-6">
                                <div className="text-5xl filter drop-shadow-lg animate-bounce">{module.character}</div>
                                <BookOpen className="h-10 w-10 opacity-80 animate-pulse" />
                              </div>
                              <h3 className="text-3xl font-bold mb-3 leading-tight filter drop-shadow-md">Course Guide</h3>
                              <p className="text-white/90 text-lg opacity-90">{module.title}</p>
                              
                              {/* Decorative elements */}
                              <div className="absolute top-4 right-4 text-white/20 text-2xl">✨</div>
                              <div className="absolute bottom-4 left-4 text-white/20 text-xl">🌟</div>
                            </div>
                            
                            {/* Enhanced book pages */}
                            <div className="bg-white p-8 relative">
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
                              
                              <div className="relative space-y-6">
                                <div className="flex items-center justify-between text-sm border-b-2 border-gray-100 pb-3">
                                  <span className="text-gray-600 flex items-center gap-2 font-medium">
                                    <Clock className="h-4 w-4 text-blue-500" />
                                    Duration:
                                  </span>
                                  <span className="font-bold text-gray-800 bg-gray-50 px-3 py-1 rounded-full">{module.duration}</span>
                                </div>
                                
                                <div>
                                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                                    <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
                                    What You'll Learn
                                  </h4>
                                  <ul className="space-y-3 max-h-40 overflow-y-auto pr-2">
                                    {module.topics.slice(0, 4).map((topic, idx) => (
                                      <li key={idx} className="flex items-start gap-3 text-sm group">
                                        <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                                        <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{topic}</span>
                                      </li>
                                    ))}
                                    {module.topics.length > 4 && (
                                      <li className="text-sm text-gray-500 italic flex items-center gap-2 mt-2">
                                        <Sparkles className="h-4 w-4" />
                                        +{module.topics.length - 4} more exciting topics...
                                      </li>
                                    )}
                                  </ul>
                                </div>

                                <div className="border-t-2 border-gray-100 pt-6 space-y-4">
                                  {module.unlocked ? (
                                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-300/50 text-lg">
                                      <div className="flex items-center justify-center gap-3">
                                        <Zap className="h-5 w-5 animate-pulse" />
                                        Start Adventure
                                        <span className="text-2xl">🚀</span>
                                      </div>
                                    </Button>
                                  ) : (
                                    <Button 
                                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-300/50 text-lg"
                                      onClick={() => handleUnlockModule(module.id, module.coins)}
                                    >
                                      <div className="flex items-center justify-center gap-3">
                                        <Coins className="h-5 w-5 animate-spin" style={{animationDuration: '2s'}} />
                                        Unlock Adventure ({module.coins} coins)
                                        <span className="text-2xl">🔓</span>
                                      </div>
                                    </Button>
                                  )}
                                  
                                  {/* Additional info */}
                                  <div className="text-center text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">
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
                          </Card>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Final Achievement Section */}
        <div className="mt-40 text-center">
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-3xl shadow-2xl p-16 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-12 left-12 text-8xl animate-bounce" style={{animationDelay: '0s'}}>🎉</div>
              <div className="absolute top-24 right-24 text-6xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
              <div className="absolute bottom-12 left-24 text-7xl animate-bounce" style={{animationDelay: '2s'}}>🏆</div>
              <div className="absolute bottom-24 right-12 text-5xl animate-pulse" style={{animationDelay: '0.5s'}}>💎</div>
              <div className="absolute top-1/2 left-1/4 text-4xl animate-spin" style={{animationDuration: '8s', animationDelay: '1.5s'}}>✨</div>
              <div className="absolute top-1/3 right-1/3 text-6xl animate-bounce" style={{animationDelay: '2.5s'}}>⭐</div>
            </div>
            
            {/* Floating gradient orbs */}
            <div className="absolute top-10 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <div className="relative z-10">
              <div className="text-8xl mb-8 animate-bounce filter drop-shadow-2xl">🎓</div>
              <h3 className="text-5xl font-bold mb-6 leading-tight filter drop-shadow-lg">
                Ready for Your Financial Adventure?
              </h3>
              <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join thousands of young explorers who have discovered the secrets of smart money management! 
                Transform your future, one lesson at a time. 🚀
              </p>
              
              {/* Stats row */}
              <div className="flex justify-center gap-8 mb-10">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-sm opacity-90">Happy Learners</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold">4.9⭐</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
              </div>
              
              <Button className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-16 py-6 rounded-3xl transition-all duration-300 transform hover:scale-110 shadow-2xl text-xl hover:shadow-white/30 group">
                <div className="flex items-center gap-4">
                  <span className="text-3xl group-hover:animate-spin">🚀</span>
                  Begin Your Journey
                  <Gift className="h-6 w-6 group-hover:animate-bounce" />
                </div>
              </Button>
              
              <p className="text-white/70 text-sm mt-6">
                🎁 Start today and get your first 100 coins free!
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What Our Young Explorers Say 💬
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex, 12", text: "I learned so much about saving! Now I have $50 in my piggy bank! 🐷", emoji: "😊" },
              { name: "Emma, 14", text: "The investment module was amazing! I understand compound interest now! 📈", emoji: "🤓" },
              { name: "Jake, 13", text: "Best financial education ever! The games make learning so fun! 🎮", emoji: "😎" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{testimonial.emoji}</div>
                <p className="text-gray-700 mb-4 italic text-center">"{testimonial.text}"</p>
                <p className="text-gray-600 font-bold text-center">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(50px) scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .rotateY-12 {
          transform: rotateY(12deg);
        }
        
        .-rotateY-12 {
          transform: rotateY(-12deg);
        }
        
        .rotateY-6 {
          transform: rotateY(6deg);
        }
        
        .-rotateY-6 {
          transform: rotateY(-6deg);
        }
        
        .rotateX-2 {
          transform: rotateX(2deg);
        }
      `}</style>
    </div>
  );
}