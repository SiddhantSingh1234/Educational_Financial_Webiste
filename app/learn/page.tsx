// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Badge } from '@/components/ui/badge';
// import { motion } from 'framer-motion';
// import { Coins, Lock, Check, Trophy, Star } from 'lucide-react';
// import Link from 'next/link';
// import { toast } from '@/hooks/use-toast';

// // Sample learning path data
// const learningModules = [
//   {
//     id: 1,
//     title: "Money Basics",
//     description: "Learn what money is and how it works",
//     level: 1,
//     unlocked: true,
//     completed: false,
//     progress: 0,
//     coins: 100,
//     path: "/learn/money-basics",
//     lessons: 5,
//     image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 2,
//     title: "Saving Skills",
//     description: "Discover the power of saving money",
//     level: 2,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 150,
//     path: "/learn/saving-skills",
//     lessons: 4,
//     image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 3,
//     title: "Smart Spending",
//     description: "Learn to make wise spending choices",
//     level: 3,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 200,
//     path: "/learn/smart-spending",
//     lessons: 6,
//     image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 4,
//     title: "Investment Basics",
//     description: "Grow your money with simple investments",
//     level: 4,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 250,
//     path: "/learn/investment-basics",
//     lessons: 5,
//     image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 5,
//     title: "Money Master",
//     description: "Become a money expert with advanced concepts",
//     level: 5,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 300,
//     path: "/learn/money-master",
//     lessons: 7,
//     image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
//   }
// ];

// export default function LearnPage() {
//   const [modules, setModules] = useState(learningModules);
//   const [userLevel, setUserLevel] = useState(1);
//   const [userCoins, setUserCoins] = useState(50);
//   const [overallProgress, setOverallProgress] = useState(0);

//   const handleUnlockModule = (moduleId: number, requiredCoins: number) => {
//     if (userCoins >= requiredCoins) {
//       setModules(modules.map(module => 
//         module.id === moduleId ? { ...module, unlocked: true } : module
//       ));
//       setUserCoins(userCoins - requiredCoins);
//       toast({
//         title: "Module unlocked!",
//         description: "You've unlocked a new learning module.",
//         variant: "default",
//       });
//     } else {
//       toast({
//         title: "Not enough coins!",
//         description: `You need ${requiredCoins - userCoins} more coins to unlock this module.`,
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold mb-2">Learning Journey</h1>
//           <p className="text-muted-foreground">Master financial skills with fun, interactive lessons</p>
//         </div>
        
//         <div className="flex items-center gap-6">
//           <div className="flex items-center">
//             <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center mr-2">
//               <Trophy className="h-5 w-5" />
//             </div>
//             <div>
//               <p className="text-sm text-muted-foreground">Level</p>
//               <p className="font-semibold">{userLevel}</p>
//             </div>
//           </div>
          
//           <div className="flex items-center">
//             <div className="bg-amber-100 text-amber-700 rounded-full w-10 h-10 flex items-center justify-center mr-2">
//               <Coins className="h-5 w-5" />
//             </div>
//             <div>
//               <p className="text-sm text-muted-foreground">Coins</p>
//               <p className="font-semibold">{userCoins}</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-2">
//           <p className="text-sm font-medium">Overall Progress</p>
//           <p className="text-sm font-medium">{overallProgress}%</p>
//         </div>
//         <Progress value={overallProgress} className="h-2" />
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {modules.map((module, index) => (
//           <motion.div 
//             key={module.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <Card className={`overflow-hidden h-full border-2 ${module.unlocked ? 'border-blue-200 hover:border-blue-300' : 'border-gray-200'} transition-colors`}>
//               <div className="relative h-40 overflow-hidden">
//                 <img 
//                   src={module.image} 
//                   alt={module.title} 
//                   className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
//                 />
//                 <div className="absolute top-2 right-2">
//                   <Badge variant={module.unlocked ? "secondary" : "outline"} className="font-semibold">
//                     Level {module.level}
//                   </Badge>
//                 </div>
//                 {!module.unlocked && (
//                   <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                     <div className="text-white text-center p-4">
//                       <Lock className="h-8 w-8 mx-auto mb-2" />
//                       <p className="font-semibold">Locked</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <CardHeader>
//                 <CardTitle className="flex justify-between items-center">
//                   {module.title}
//                   {module.completed && <Check className="h-5 w-5 text-green-500" />}
//                 </CardTitle>
//                 <CardDescription>{module.description}</CardDescription>
//               </CardHeader>
              
//               <CardContent>
//                 <div className="flex justify-between items-center text-sm mb-2">
//                   <p className="text-muted-foreground">{module.progress}% Complete</p>
//                   <p className="text-muted-foreground">{module.lessons} Lessons</p>
//                 </div>
//                 <Progress value={module.progress} className="h-1 mb-4" />
                
//                 <div className="flex items-center gap-1 text-amber-600">
//                   <Coins className="h-4 w-4" />
//                   <span className="text-sm font-medium">{module.coins} coins reward</span>
//                 </div>
//               </CardContent>
              
//               <CardFooter>
//                 {module.unlocked ? (
//                   <Link href={module.path} className="w-full">
//                     <Button className="w-full">
//                       {module.progress > 0 ? "Continue Learning" : "Start Learning"}
//                     </Button>
//                   </Link>
//                 ) : (
//                   <Button 
//                     variant="outline" 
//                     className="w-full"
//                     onClick={() => handleUnlockModule(module.id, module.level * 50)}
//                   >
//                     Unlock ({module.level * 50} coins)
//                   </Button>
//                 )}
//               </CardFooter>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Badge } from '@/components/ui/badge';
// import { motion } from 'framer-motion';
// import { Coins, Lock, Check, Trophy, Star, Heart } from 'lucide-react';
// import Link from 'next/link';
// import { toast } from '@/hooks/use-toast';

// // Sample learning path data
// const learningModules = [
//   {
//     id: 1,
//     title: "Money Basics",
//     description: "Learn what money is and how it works",
//     level: 1,
//     unlocked: true,
//     completed: false,
//     progress: 0,
//     coins: 100,
//     path: "/learn/money-basics",
//     lessons: 5,
//     image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 2,
//     title: "Saving Skills",
//     description: "Discover the power of saving money",
//     level: 2,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 150,
//     path: "/learn/saving-skills",
//     lessons: 4,
//     image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 3,
//     title: "Smart Spending",
//     description: "Learn to make wise spending choices",
//     level: 3,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 200,
//     path: "/learn/smart-spending",
//     lessons: 6,
//     image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 4,
//     title: "Investment Basics",
//     description: "Grow your money with simple investments",
//     level: 4,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 250,
//     path: "/learn/investment-basics",
//     lessons: 5,
//     image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     id: 5,
//     title: "Money Master",
//     description: "Become a money expert with advanced concepts",
//     level: 5,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 300,
//     path: "/learn/money-master",
//     lessons: 7,
//     image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
//   }
// ];

// export default function LearnPage() {
//   const [modules, setModules] = useState(learningModules);
//   const [userLevel, setUserLevel] = useState(1);
//   const [userCoins, setUserCoins] = useState(50);
//   const [userLives, setUserLives] = useState(5);
//   const [overallProgress, setOverallProgress] = useState(0);

//   const handleUnlockModule = (moduleId: number, requiredCoins: number) => {
//     if (userCoins >= requiredCoins) {
//       setModules(modules.map(module => 
//         module.id === moduleId ? { ...module, unlocked: true } : module
//       ));
//       setUserCoins(userCoins - requiredCoins);
//       toast({
//         title: "Level unlocked!",
//         description: "You've unlocked a new learning adventure!",
//         variant: "default",
//       });
//     } else {
//       toast({
//         title: "Not enough coins!",
//         description: `You need ${requiredCoins - userCoins} more coins to unlock this level!`,
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8">
//       {/* Game-style header with lives and coins */}
//       <div className="container mx-auto px-4 mb-8">
//         <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 bg-red-100 px-3 py-2 rounded-full">
//               <Heart className="h-5 w-5 text-red-500" />
//               <span className="font-bold text-red-500">{userLives}</span>
//             </div>
//             <div className="flex items-center gap-2 bg-amber-100 px-3 py-2 rounded-full">
//               <Coins className="h-5 w-5 text-amber-500" />
//               <span className="font-bold text-amber-500">{userCoins}</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full">
//             <Trophy className="h-5 w-5 text-blue-500" />
//             <span className="font-bold text-blue-500">Level {userLevel}</span>
//           </div>
//         </div>
//       </div>

//       {/* Candy Crush style level path */}
//       <div className="container mx-auto px-4">
//         <div className="relative max-w-4xl mx-auto">
//           {/* Decorative path */}
//           <div className="absolute top-0 left-1/2 w-16 h-full -ml-8 hidden md:block">
//             <div className="h-full w-8 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full mx-auto" />
//           </div>

//           {/* Zigzag connecting lines between levels */}
//           {modules.map((_, index) => {
//             if (index === modules.length - 1) return null;
//             const isEven = index % 2 === 0;
//             return (
//               <div 
//                 key={`path-${index}`} 
//                 className={`absolute hidden md:block z-0 h-16 w-32 ${isEven ? 'border-t-8 border-r-8' : 'border-b-8 border-r-8'} border-yellow-400 rounded-tr-full rounded-br-full`}
//                 style={{
//                   top: `${index * 220 + (isEven ? 100 : 0)}px`,
//                   left: '50%',
//                   transform: `translateX(${isEven ? '0' : '-100%'})`,
//                   display: index < modules.length - 1 ? 'block' : 'none'
//                 }}
//               />
//             );
//           })}

//           {/* Level circles */}
//           {modules.map((module, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <motion.div
//                 key={module.id}
//                 className={`relative z-10 mb-16 flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 {/* Level number bubble */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 -mt-8 md:static md:transform-none md:mt-0 md:mr-4 md:ml-4 z-20">
//                   <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${module.unlocked ? 'bg-gradient-to-br from-yellow-300 to-yellow-500' : 'bg-gray-300'} text-white shadow-lg`}>
//                     {module.level}
//                   </div>
//                 </div>

//                 {/* Level card */}
//                 <div className={`w-full md:w-3/4 ${isEven ? 'md:ml-8' : 'md:mr-8'}`}>
//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     className={`rounded-2xl overflow-hidden shadow-xl ${!module.unlocked ? 'grayscale' : ''}`}
//                   >
//                     <div className="relative">
//                       <img
//                         src={module.image}
//                         alt={module.title}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
//                         <div className="absolute bottom-0 left-0 p-4 text-white">
//                           <h3 className="text-xl font-bold">{module.title}</h3>
//                           <p className="text-sm text-white/80">{module.description}</p>
//                         </div>
//                         <div className="absolute top-2 right-2">
//                           <Badge className="bg-white/90 text-black font-bold">
//                             {module.lessons} Lessons
//                           </Badge>
//                         </div>
//                       </div>

//                       {/* Locked overlay */}
//                       {!module.unlocked && (
//                         <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
//                           <div className="text-center p-4">
//                             <Lock className="h-12 w-12 mx-auto mb-2 text-white" />
//                             <div className="flex items-center justify-center gap-2 mb-3">
//                               <Coins className="h-5 w-5 text-yellow-400" />
//                               <span className="text-xl font-bold text-white">{module.coins}</span>
//                             </div>
//                             <Button
//                               onClick={() => handleUnlockModule(module.id, module.coins)}
//                               className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold border-none"
//                             >
//                               Unlock Level
//                             </Button>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Progress bar */}
//                     {module.unlocked && (
//                       <div className="bg-white p-4">
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="text-sm font-medium">Progress</span>
//                           <span className="text-sm font-medium">{module.progress}%</span>
//                         </div>
//                         <Progress value={module.progress} className="h-2 bg-gray-200">
//                           <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
//                         </Progress>
//                         <div className="mt-4 flex justify-between">
//                           <div className="flex items-center gap-1">
//                             <Coins className="h-4 w-4 text-yellow-500" />
//                             <span className="text-sm font-medium">{module.coins} reward</span>
//                           </div>
//                           {module.unlocked && (
//                             <Link href={module.path}>
//                               <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
//                                 {module.progress > 0 ? 'Continue' : 'Start'}
//                               </Button>
//                             </Link>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
// import { Coins, Lock, Check, Trophy, BookOpen, Star, Target, Award, MapPin, Users, Clock, Zap, Gift, Sparkles } from 'lucide-react';

// const learningModules = [
//   {
//     id: 1,
//     title: "Money Basics",
//     description: "Learn what money is and how it works in everyday life",
//     level: 1,
//     unlocked: true,
//     completed: false,
//     progress: 0,
//     coins: 100,
//     path: "/learn/money-basics",
//     lessons: 5,
//     duration: "2 hours",
//     difficulty: "Beginner",
//     topics: ["What is Money?", "Different Types of Currency", "Money vs Barter", "Digital Money", "Money Safety"],
//     image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
//     character: "💰",
//     characterName: "Penny the Pig",
//     color: "from-emerald-400 to-teal-500"
//   },
//   {
//     id: 2,
//     title: "Saving Skills",
//     description: "Discover the power of saving money for your future goals",
//     level: 2,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 150,
//     path: "/learn/saving-skills",
//     lessons: 4,
//     duration: "1.5 hours",
//     difficulty: "Beginner",
//     topics: ["Why Save Money?", "Setting Savings Goals", "Piggy Banks & Accounts", "Emergency Funds"],
//     image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600",
//     character: "🐷",
//     characterName: "Saver Sam",
//     color: "from-pink-400 to-rose-500"
//   },
//   {
//     id: 3,
//     title: "Smart Spending",
//     description: "Learn to make wise spending choices and avoid money traps",
//     level: 3,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 200,
//     path: "/learn/smart-spending",
//     lessons: 6,
//     duration: "2.5 hours",
//     difficulty: "Intermediate",
//     topics: ["Needs vs Wants", "Budgeting Basics", "Comparison Shopping", "Avoiding Scams", "Smart Online Shopping", "Money Planning"],
//     image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600",
//     character: "🦉",
//     characterName: "Wise Owl",
//     color: "from-amber-400 to-orange-500"
//   },
//   {
//     id: 4,
//     title: "Investment Basics",
//     description: "Grow your money with simple investment strategies",
//     level: 4,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 250,
//     path: "/learn/investment-basics",
//     lessons: 5,
//     duration: "3 hours",
//     difficulty: "Intermediate",
//     topics: ["What is Investing?", "Stocks & Bonds", "Risk & Reward", "Compound Interest", "Investment Safety"],
//     image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
//     character: "🚀",
//     characterName: "Rocket Rick",
//     color: "from-blue-400 to-indigo-500"
//   },
//   {
//     id: 5,
//     title: "Money Master",
//     description: "Master advanced financial concepts and become money-wise",
//     level: 5,
//     unlocked: false,
//     completed: false,
//     progress: 0,
//     coins: 300,
//     path: "/learn/money-master",
//     lessons: 7,
//     duration: "4 hours",
//     difficulty: "Advanced",
//     topics: ["Advanced Budgeting", "Tax Basics", "Credit & Loans", "Business Money", "Financial Planning", "Economic Concepts", "Money Psychology"],
//     image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
//     character: "👑",
//     characterName: "Master Max",
//     color: "from-purple-400 to-violet-500"
//   }
// ];

// export default function LearnPage() {
//   const [modules, setModules] = useState(learningModules);
//   const [userLevel, setUserLevel] = useState(1);
//   const [userCoins, setUserCoins] = useState(50);
//   const [overallProgress, setOverallProgress] = useState(20);
//   const [hoveredModule, setHoveredModule] = useState(null);
//   const [sparkles, setSparkles] = useState([]);

//   // Generate floating sparkles
//   useEffect(() => {
//     const generateSparkles = () => {
//       const newSparkles = Array.from({ length: 15 }, (_, i) => ({
//         id: i,
//         left: Math.random() * 100,
//         top: Math.random() * 100,
//         delay: Math.random() * 4,
//         duration: 3 + Math.random() * 2,
//         size: 0.5 + Math.random() * 1
//       }));
//       setSparkles(newSparkles);
//     };

//     generateSparkles();
//     const interval = setInterval(generateSparkles, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleUnlockModule = (moduleId, requiredCoins) => {
//     if (userCoins >= requiredCoins) {
//       setModules(modules.map(module => 
//         module.id === moduleId ? { ...module, unlocked: true } : module
//       ));
//       setUserCoins(userCoins - requiredCoins);
//       // Enhanced success notification
//       setTimeout(() => {
//         alert("🎉 Module unlocked! Welcome to your new adventure!");
//       }, 100);
//     } else {
//       alert(`💰 You need ${requiredCoins - userCoins} more coins to unlock this amazing module!`);
//     }
//   };

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Beginner': return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-emerald-300 shadow-emerald-100';
//       case 'Intermediate': return 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-300 shadow-amber-100';
//       case 'Advanced': return 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 border-rose-300 shadow-rose-100';
//       default: return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-300 shadow-gray-100';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-25 to-pink-50 overflow-x-hidden relative">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
//         }}></div>
//       </div>

//       {/* Dynamic Floating Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
//         {sparkles.map((sparkle) => (
//           <div
//             key={sparkle.id}
//             className="absolute text-yellow-300 opacity-60"
//             style={{
//               left: `${sparkle.left}%`,
//               top: `${sparkle.top}%`,
//               fontSize: `${sparkle.size}rem`,
//               animation: `float ${sparkle.duration}s ease-in-out infinite`,
//               animationDelay: `${sparkle.delay as number}s`
//             }}
//           >
//             ✨
//           </div>
//         ))}
        
//         {/* Corner decorations */}
//         <div className="absolute top-10 left-10 text-6xl animate-pulse opacity-30 text-blue-400">🌟</div>
//         <div className="absolute top-20 right-16 text-4xl animate-bounce opacity-40 text-purple-400" style={{animationDelay: '1s'}}>💫</div>
//         <div className="absolute bottom-32 left-16 text-5xl animate-pulse opacity-30 text-pink-400" style={{animationDelay: '2s'}}>⭐</div>
//         <div className="absolute bottom-40 right-20 text-3xl animate-bounce opacity-40 text-indigo-400" style={{animationDelay: '0.5s'}}>✨</div>
//       </div>

//       <div className="container mx-auto px-4 py-12 max-w-7xl relative z-20">
//         {/* Enhanced Header with Glassmorphism */}
//         <div className="text-center mb-20 relative">
//           <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
//             <div className="text-8xl animate-bounce filter drop-shadow-lg">🎓</div>
//           </div>
          
//           <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mx-auto max-w-4xl border border-white/40 relative overflow-hidden">
//             {/* Background gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            
//             <div className="relative z-10">
//               <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
//                 Financial Adventure Journey
//               </h1>
//               <p className="text-2xl text-gray-700 leading-relaxed mb-4">
//                 Join our friendly characters on an exciting quest to master money skills! 🌈
//               </p>
//               <div className="flex justify-center gap-3 text-sm text-gray-600">
//                 <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm">🎮 Interactive Learning</span>
//                 <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm">🏆 Earn Rewards</span>
//                 <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm">🚀 Level Up</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Stats Dashboard with Micro-animations */}
//         <div className="flex justify-center mb-20">
//           <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50 relative overflow-hidden">
//             {/* Animated background */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
            
//             <div className="flex items-center gap-16 relative z-10">
//               <div className="text-center group cursor-pointer">
//                 <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl group-hover:shadow-blue-300/50 transition-all duration-300 group-hover:scale-110">
//                   <Trophy className="h-10 w-10 text-white animate-pulse" />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2 font-medium">Current Level</p>
//                 <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{userLevel}</p>
//               </div>
              
//               <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              
//               <div className="text-center group cursor-pointer">
//                 <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//                   <Coins className="h-10 w-10 text-white animate-spin" style={{animationDuration: '3s'}} />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2 font-medium">Your Coins</p>
//                 <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{userCoins}</p>
//               </div>

//               <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

//               <div className="text-center group cursor-pointer">
//                 <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl group-hover:shadow-emerald-300/50 transition-all duration-300 group-hover:scale-110">
//                   <Target className="h-10 w-10 text-white animate-bounce" />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2 font-medium">Progress</p>
//                 <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{overallProgress}%</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Enhanced Progress Section with Animated Rocket */}
//         <div className="mb-24 max-w-4xl mx-auto">
//           <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50 relative overflow-hidden">
//             {/* Background decoration */}
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full"></div>
            
//             <div className="relative z-10">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className="text-3xl">📊</div>
//                   <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Learning Progress</h3>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                     {overallProgress}%
//                   </span>
//                   <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Complete</span>
//                 </div>
//               </div>
              
//               <div className="relative mb-6">
//                 <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
//                   <div 
//                     className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out relative"
//                     style={{ width: `${overallProgress}%` }}
//                   >
//                     <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
//                   </div>
//                 </div>
//                 <div 
//                   className="absolute -top-2 transition-all duration-1000 ease-out transform hover:scale-125"
//                   style={{ left: `${Math.max(0, overallProgress - 3)}%` }}
//                 >
//                   <div className="text-2xl animate-bounce filter drop-shadow-lg">🚀</div>
//                 </div>
//               </div>
              
//               <div className="text-center">
//                 <p className="text-gray-700 text-lg font-medium mb-2">
//                   Amazing progress! Keep up the fantastic work! 🌟
//                 </p>
//                 <div className="flex justify-center gap-2 text-sm text-gray-600">
//                   <span className="bg-blue-50 px-3 py-1 rounded-full">🎯 On Track</span>
//                   <span className="bg-green-50 px-3 py-1 rounded-full">📈 Growing</span>
//                   <span className="bg-purple-50 px-3 py-1 rounded-full">💪 Strong</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Learning Road with 3D Effects */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* 3D Road Background */}
//           <div className="absolute left-1/2 top-0 w-40 h-full transform -translate-x-1/2 perspective-1000">
//             <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-3xl shadow-2xl relative overflow-hidden transform rotateX-2">
//               {/* Road texture with shimmer */}
//               <div className="absolute inset-0 opacity-20">
//                 <div className="w-full h-full" style={{
//                   backgroundImage: `repeating-linear-gradient(
//                     0deg,
//                     transparent,
//                     transparent 35px,
//                     rgba(255,255,255,0.3) 35px,
//                     rgba(255,255,255,0.3) 50px
//                   )`
//                 }}></div>
//               </div>
              
//               {/* Animated center line */}
//               <div className="absolute left-1/2 top-0 w-2 h-full transform -translate-x-1/2">
//                 <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-yellow-400 opacity-80" style={{
//                   backgroundImage: `repeating-linear-gradient(
//                     0deg,
//                     transparent,
//                     transparent 20px,
//                     rgba(255,255,255,0.5) 20px,
//                     rgba(255,255,255,0.5) 30px
//                   )`
//                 }}></div>
//               </div>
              
//               {/* Enhanced side lines */}
//               <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 rounded-full"></div>
//               <div className="absolute right-3 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-white/40 rounded-full"></div>
//             </div>
//           </div>

//           {/* Learning Modules with Enhanced Effects */}
//           <div className="relative space-y-40 py-20">
//             {modules.map((module, index) => {
//               const isLeft = index % 2 === 0;
              
//               return (
//                 <div key={module.id} className="relative flex items-center justify-center min-h-[350px]">
//                   {/* Enhanced Character on Road */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
//                     <div className={`bg-gradient-to-br ${module.color} rounded-full p-6 shadow-2xl border-4 border-white relative group cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-6`}>
//                       <div className="text-5xl filter drop-shadow-lg group-hover:animate-bounce">{module.character}</div>
                      
//                       {/* Glowing ring effect */}
//                       <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                      
//                       <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                         <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-xl border border-white/50">
//                           {module.characterName}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Enhanced Course Card */}
//                   <div className={`${isLeft ? 'mr-auto pr-24' : 'ml-auto pl-24'} w-5/12 relative z-20`}>
//                     <Card
//                       className={`group relative overflow-hidden transition-all duration-700 cursor-pointer transform ${
//                         module.unlocked 
//                           ? 'bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl border-2 border-white/60 hover:scale-105 hover:-translate-y-4' 
//                           : 'bg-gray-100/80 backdrop-blur-sm shadow-lg border-2 border-gray-300/50'
//                       } rounded-3xl`}
//                       onMouseEnter={() => setHoveredModule(module.id as unknown as null)}
//                       onMouseLeave={() => setHoveredModule(null)}
//                     >
//                       {/* Enhanced glow effect */}
//                       {module.unlocked && (
//                         <div className={`absolute -inset-2 bg-gradient-to-r ${module.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700`}></div>
//                       )}
                      
//                       {/* Image Section with Parallax Effect */}
//                       <div className="relative h-64 overflow-hidden rounded-t-3xl">
//                         <img 
//                           src={module.image} 
//                           alt={module.title}
//                           className={`w-full h-full object-cover transition-all duration-700 ${
//                             module.unlocked ? 'group-hover:scale-125 group-hover:rotate-2' : 'grayscale opacity-50'
//                           }`}
//                         />
                        
//                         {/* Enhanced overlay gradient */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-700"></div>
                        
//                         {/* Floating badges with animations */}
//                         <div className="absolute top-6 left-6 flex gap-3">
//                           <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-sm font-bold shadow-xl animate-pulse px-4 py-2">
//                             Level {module.level}
//                           </Badge>
//                         </div>

//                         <div className="absolute top-6 right-6">
//                           <Badge className={`${getDifficultyColor(module.difficulty)} text-sm font-bold shadow-xl border-2 px-4 py-2 hover:scale-110 transition-transform duration-300`}>
//                             {module.difficulty}
//                           </Badge>
//                         </div>

//                         {/* Enhanced Lock Overlay */}
//                         {!module.unlocked && (
//                           <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-t-3xl">
//                             <div className="text-center text-white">
//                               <div className="bg-white/20 rounded-full p-6 mb-6 backdrop-blur-sm border border-white/30 animate-pulse">
//                                 <Lock className="h-10 w-10 opacity-90" />
//                               </div>
//                               <p className="font-bold text-xl mb-2">🔒 Locked</p>
//                               <p className="text-sm opacity-90">Complete previous level to unlock</p>
//                             </div>
//                           </div>
//                         )}

//                         {/* Enhanced progress overlay */}
//                         {module.progress > 0 && (
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
//                             <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
//                               <Progress value={module.progress} className="h-3" />
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       {/* Enhanced Content Section */}
//                       <CardHeader className="pb-4 px-8 pt-8">
//                         <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 leading-tight">
//                           {module.title}
//                         </CardTitle>
//                         <CardDescription className="text-gray-600 text-lg leading-relaxed mt-3">
//                           {module.description}
//                         </CardDescription>
//                       </CardHeader>

//                       <CardContent className="pt-0 pb-8 px-8">
//                         <div className="flex items-center justify-between mb-6">
//                           <div className="flex items-center gap-4 text-sm text-gray-600">
//                             <span className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
//                               <BookOpen className="h-4 w-4" />
//                               {module.lessons} lessons
//                             </span>
//                             <span className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 hover:bg-green-100 transition-colors duration-300">
//                               <Clock className="h-4 w-4" />
//                               {module.duration}
//                             </span>
//                           </div>
                          
//                           <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-700 font-bold border border-amber-200 hover:scale-105 transition-transform duration-300">
//                             <Coins className="h-5 w-5 animate-spin" style={{animationDuration: '3s'}} />
//                             <span className="text-lg">{module.coins}</span>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Enhanced 3D Book Display */}
//                   {hoveredModule === module.id && (
//                     <div className={`absolute ${isLeft ? 'right-0 pr-24' : 'left-0 pl-24'} w-5/12 z-40`}>
//                       <div className="perspective-1000">
//                         <div className={`transform transition-all duration-700 ${
//                           isLeft ? 'rotateY-12 hover:rotateY-6' : '-rotateY-12 hover:-rotateY-6'
//                         } preserve-3d animate-slideIn`}>
//                           {/* Enhanced Book Shadow */}
//                           <div className="absolute inset-0 bg-black/30 blur-2xl transform translate-y-6 translate-x-4 scale-105"></div>
                          
//                           {/* Enhanced Book Cover */}
//                           <Card className={`relative bg-gradient-to-br ${module.color} shadow-2xl border-0 overflow-hidden transform-gpu`}>
//                             {/* Book spine effect with gradient */}
//                             <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent"></div>
                            
//                             {/* Enhanced cover design */}
//                             <div className="p-8 text-white relative">
//                               <div className="flex items-center justify-between mb-6">
//                                 <div className="text-5xl filter drop-shadow-lg animate-bounce">{module.character}</div>
//                                 <BookOpen className="h-10 w-10 opacity-80 animate-pulse" />
//                               </div>
//                               <h3 className="text-3xl font-bold mb-3 leading-tight filter drop-shadow-md">Course Guide</h3>
//                               <p className="text-white/90 text-lg opacity-90">{module.title}</p>
                              
//                               {/* Decorative elements */}
//                               <div className="absolute top-4 right-4 text-white/20 text-2xl">✨</div>
//                               <div className="absolute bottom-4 left-4 text-white/20 text-xl">🌟</div>
//                             </div>
                            
//                             {/* Enhanced book pages */}
//                             <div className="bg-white p-8 relative">
//                               {/* Page texture with better styling */}
//                               <div className="absolute inset-0 opacity-10" style={{
//                                 backgroundImage: `repeating-linear-gradient(
//                                   90deg,
//                                   transparent,
//                                   transparent 28px,
//                                   #e5e7eb 28px,
//                                   #e5e7eb 29px
//                                 )`
//                               }}></div>
                              
//                               <div className="relative space-y-6">
//                                 <div className="flex items-center justify-between text-sm border-b-2 border-gray-100 pb-3">
//                                   <span className="text-gray-600 flex items-center gap-2 font-medium">
//                                     <Clock className="h-4 w-4 text-blue-500" />
//                                     Duration:
//                                   </span>
//                                   <span className="font-bold text-gray-800 bg-gray-50 px-3 py-1 rounded-full">{module.duration}</span>
//                                 </div>
                                
//                                 <div>
//                                   <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
//                                     <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
//                                     What You'll Learn
//                                   </h4>
//                                   <ul className="space-y-3 max-h-40 overflow-y-auto pr-2">
//                                     {module.topics.slice(0, 4).map((topic, idx) => (
//                                       <li key={idx} className="flex items-start gap-3 text-sm group">
//                                         <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
//                                         <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{topic}</span>
//                                       </li>
//                                     ))}
//                                     {module.topics.length > 4 && (
//                                       <li className="text-sm text-gray-500 italic flex items-center gap-2 mt-2">
//                                         <Sparkles className="h-4 w-4" />
//                                         +{module.topics.length - 4} more exciting topics...
//                                       </li>
//                                     )}
//                                   </ul>
//                                 </div>

//                                 <div className="border-t-2 border-gray-100 pt-6 space-y-4">
//                                   {module.unlocked ? (
//                                     <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-300/50 text-lg">
//                                       <div className="flex items-center justify-center gap-3">
//                                         <Zap className="h-5 w-5 animate-pulse" />
//                                         Start Adventure
//                                         <span className="text-2xl">🚀</span>
//                                       </div>
//                                     </Button>
//                                   ) : (
//                                     <Button 
//                                       className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-300/50 text-lg"
//                                       onClick={() => handleUnlockModule(module.id, module.coins)}
//                                     >
//                                       <div className="flex items-center justify-center gap-3">
//                                         <Coins className="h-5 w-5 animate-spin" style={{animationDuration: '2s'}} />
//                                         Unlock Adventure ({module.coins} coins)
//                                         <span className="text-2xl">🔓</span>
//                                       </div>
//                                     </Button>
//                                   )}
                                  
//                                   {/* Additional info */}
//                                   <div className="text-center text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">
//                                     <div className="flex items-center justify-center gap-4">
//                                       <span className="flex items-center gap-1">
//                                         <Users className="h-3 w-3" />
//                                         1.2k+ learners
//                                       </span>
//                                       <span className="flex items-center gap-1">
//                                         <Star className="h-3 w-3 text-yellow-500" />
//                                         4.9 rating
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </Card>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Enhanced Final Achievement Section */}
//         <div className="mt-40 text-center">
//           <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-3xl shadow-2xl p-16 max-w-4xl mx-auto text-white relative overflow-hidden">
//             {/* Animated background patterns */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-12 left-12 text-8xl animate-bounce" style={{animationDelay: '0s'}}>🎉</div>
//               <div className="absolute top-24 right-24 text-6xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
//               <div className="absolute bottom-12 left-24 text-7xl animate-bounce" style={{animationDelay: '2s'}}>🏆</div>
//               <div className="absolute bottom-24 right-12 text-5xl animate-pulse" style={{animationDelay: '0.5s'}}>💎</div>
//               <div className="absolute top-1/2 left-1/4 text-4xl animate-spin" style={{animationDuration: '8s', animationDelay: '1.5s'}}>✨</div>
//               <div className="absolute top-1/3 right-1/3 text-6xl animate-bounce" style={{animationDelay: '2.5s'}}>⭐</div>
//             </div>
            
//             {/* Floating gradient orbs */}
//             <div className="absolute top-10 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
//             <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
//             <div className="relative z-10">
//               <div className="text-8xl mb-8 animate-bounce filter drop-shadow-2xl">🎓</div>
//               <h3 className="text-5xl font-bold mb-6 leading-tight filter drop-shadow-lg">
//                 Ready for Your Financial Adventure?
//               </h3>
//               <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
//                 Join thousands of young explorers who have discovered the secrets of smart money management! 
//                 Transform your future, one lesson at a time. 🚀
//               </p>
              
//               {/* Stats row */}
//               <div className="flex justify-center gap-8 mb-10">
//                 <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//                   <div className="text-3xl font-bold">10k+</div>
//                   <div className="text-sm opacity-90">Happy Learners</div>
//                 </div>
//                 <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//                   <div className="text-3xl font-bold">95%</div>
//                   <div className="text-sm opacity-90">Success Rate</div>
//                 </div>
//                 <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//                   <div className="text-3xl font-bold">4.9⭐</div>
//                   <div className="text-sm opacity-90">Average Rating</div>
//                 </div>
//               </div>
              
//               <Button className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-16 py-6 rounded-3xl transition-all duration-300 transform hover:scale-110 shadow-2xl text-xl hover:shadow-white/30 group">
//                 <div className="flex items-center gap-4">
//                   <span className="text-3xl group-hover:animate-spin">🚀</span>
//                   Begin Your Journey
//                   <Gift className="h-6 w-6 group-hover:animate-bounce" />
//                 </div>
//               </Button>
              
//               <p className="text-white/70 text-sm mt-6">
//                 🎁 Start today and get your first 100 coins free!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials Section */}
//         <div className="mt-24 max-w-6xl mx-auto">
//           <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//             What Our Young Explorers Say 💬
//           </h3>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: "Alex, 12", text: "I learned so much about saving! Now I have $50 in my piggy bank! 🐷", emoji: "😊" },
//               { name: "Emma, 14", text: "The investment module was amazing! I understand compound interest now! 📈", emoji: "🤓" },
//               { name: "Jake, 13", text: "Best financial education ever! The games make learning so fun! 🎮", emoji: "😎" }
//             ].map((testimonial, idx) => (
//               <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
//                 <div className="text-4xl mb-4 text-center">{testimonial.emoji}</div>
//                 <p className="text-gray-700 mb-4 italic text-center">"{testimonial.text}"</p>
//                 <p className="text-gray-600 font-bold text-center">- {testimonial.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         @keyframes slideIn {
//           from { 
//             opacity: 0; 
//             transform: translateX(50px) scale(0.8); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateX(0) scale(1); 
//           }
//         }
        
//         .animate-slideIn {
//           animation: slideIn 0.6s ease-out;
//         }
        
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
        
//         .rotateY-12 {
//           transform: rotateY(12deg);
//         }
        
//         .-rotateY-12 {
//           transform: rotateY(-12deg);
//         }
        
//         .rotateY-6 {
//           transform: rotateY(6deg);
//         }
        
//         .-rotateY-6 {
//           transform: rotateY(-6deg);
//         }
        
//         .rotateX-2 {
//           transform: rotateX(2deg);
//         }
//       `}</style>
//     </div>
//   );
// }

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { learningModules } from '@/data/learningModules';
// import { SparkleProps } from '@/types';
// import { Header } from '@/components/learn/Header';
// import { StatsCard } from '@/components/learn/StatsCard';
// import { ProgressBar } from '@/components/learn/ProgressBar';
// import { LearningRoad } from '@/components/learn/LearningRoad';
// import { TestimonialsSection } from '@/components/learn/TestimonialsSection';
// import { AchievementSection } from '@/components/learn/AchievementSection';

// function LearnPage() {
//   const [modules, setModules] = useState(learningModules);
//   const [userLevel, setUserLevel] = useState(1);
//   const [userCoins, setUserCoins] = useState(50);
//   const [overallProgress, setOverallProgress] = useState(20);
//   const [hoveredModule, setHoveredModule] = useState<number | null>(null);
//   const [sparkles, setSparkles] = useState<SparkleProps[]>([]);
//   const [darkMode, setDarkMode] = useState(false);

//   // Check for system dark mode preference
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
//     mediaQuery.addEventListener('change', handleChange);
    
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   // Apply dark mode class to document
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   // Generate floating sparkles
//   useEffect(() => {
//     const generateSparkles = () => {
//       const newSparkles = Array.from({ length: 10 }, (_, i) => ({
//         id: i,
//         left: Math.random() * 100,
//         top: Math.random() * 100,
//         delay: Math.random() * 4,
//         duration: 3 + Math.random() * 2,
//         size: 0.5 + Math.random() * 0.5
//       }));
//       setSparkles(newSparkles);
//     };

//     generateSparkles();
//     const interval = setInterval(generateSparkles, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleUnlockModule = (moduleId, requiredCoins) => {
//     if (userCoins >= requiredCoins) {
//       setModules(modules.map(module => 
//         module.id === moduleId ? { ...module, unlocked: true } : module
//       ));
//       setUserCoins(userCoins - requiredCoins);
//       setTimeout(() => {
//         alert("🎉 Module unlocked! Welcome to your new adventure!");
//       }, 100);
//     } else {
//       alert(`💰 You need ${requiredCoins - userCoins} more coins to unlock this amazing module!`);
//     }
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`min-h-screen bg-gradient-to-br from-cyan-600 via-purple-800 to-purple-800 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 overflow-x-hidden relative transition-colors duration-300`}>
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-10 dark:opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), 
//                            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
//         }}></div>
//       </div>

//       {/* Dark Mode Toggle
//       <button 
//         onClick={toggleDarkMode}
//         className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md dark:shadow-gray-900/30 transition-all duration-300"
//       >
//         {darkMode ? (
//           <svg xmlns="http://www.w3.org/2000/svg\" className="h-6 w-6 text-yellow-400\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//           </svg>
//         )}
//       </button> */}

//       {/* Dynamic Floating Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
//         {sparkles.map((sparkle) => (
//           <div
//             key={sparkle.id}
//             className="absolute text-yellow-300 dark:text-yellow-200 opacity-60"
//             style={{
//               left: `${sparkle.left}%`,
//               top: `${sparkle.top}%`,
//               fontSize: `${sparkle.size}rem`,
//               animation: `float ${sparkle.duration}s ease-in-out infinite`,
//               animationDelay: `${sparkle.delay}s`
//             }}
//           >
//             ✨
//           </div>
//         ))}
        
//         {/* Corner decorations */}
//         <div className="absolute top-10 left-10 text-5xl md:text-6xl animate-pulse opacity-30 text-blue-400 dark:text-blue-500">🌟</div>
//         <div className="absolute top-20 right-16 text-3xl md:text-4xl animate-bounce opacity-40 text-purple-400 dark:text-purple-500" style={{animationDelay: '1s'}}>💫</div>
//         <div className="absolute bottom-32 left-16 text-4xl md:text-5xl animate-pulse opacity-30 text-pink-400 dark:text-pink-500" style={{animationDelay: '2s'}}>⭐</div>
//         <div className="absolute bottom-40 right-20 text-2xl md:text-3xl animate-bounce opacity-40 text-indigo-400 dark:text-indigo-500" style={{animationDelay: '0.5s'}}>✨</div>
//       </div>

//       <div className="container mx-auto py-8 md:py-12 max-w-7xl relative z-20">
//         {/* Header */}
//         <Header />

//         {/* Stats Dashboard */}
//         <StatsCard stats={{ level: userLevel, coins: userCoins, progress: overallProgress }} />
        
//         {/* Progress Section */}
//         <ProgressBar progress={overallProgress} />

//         {/* Learning Road */}
//         <LearningRoad 
//           modules={modules}
//           hoveredModule={hoveredModule}
//           setHoveredModule={setHoveredModule}
//           handleUnlockModule={handleUnlockModule}
//         />

//         {/* Achievement Section */}
//         <AchievementSection />

//         {/* Testimonials Section */}
//         <TestimonialsSection />
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(90deg); }
//         }
        
//         @keyframes slideIn {
//           from { 
//             opacity: 0; 
//             transform: translateX(30px) scale(0.9); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateX(0) scale(1); 
//           }
//         }
        
//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out;
//         }
        
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
        
//         .rotateY-6 {
//           transform: rotateY(6deg);
//         }
        
//         .-rotateY-6 {
//           transform: rotateY(-6deg);
//         }
        
//         .rotateY-3 {
//           transform: rotateY(3deg);
//         }
        
//         .-rotateY-3 {
//           transform: rotateY(-3deg);
//         }
        
//         .rotateX-2 {
//           transform: rotateX(2deg);
//         }

//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
        
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(229, 231, 235, 0.2);
//           border-radius: 10px;
//         }
        
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(156, 163, 175, 0.5);
//           border-radius: 10px;
//         }
        
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(156, 163, 175, 0.7);
//         }

//         /* Dark mode scrollbar */
//         .dark .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(55, 65, 81, 0.3);
//         }
        
//         .dark .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(107, 114, 128, 0.5);
//         }
        
//         .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(107, 114, 128, 0.7);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default LearnPage;

'use client';

import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { BookOpen, Target, TrendingUp, Shield, Award, Star, Trophy } from "lucide-react";

export default function LearnPage() {
  const [userProgress] = useState({
    currentLevel: 1,
    coins: 50,
    overallProgress: 20,
    modules: {
      'money-basics': { completed: true, progress: 100 },
      'budgeting': { completed: false, progress: 60 },
      'saving': { completed: false, progress: 30 },
      'investing': { completed: false, progress: 0 },
      'credit': { completed: false, progress: 0 }
    }
  });

  const data = [
    {
      title: "Welcome to Your Financial Mastery Journey",
      content: (
        <div className="space-y-6">
          {/* Inspirational Quote */}
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl p-8 text-white shadow-2xl">
            <div className="text-center mb-6">
              <blockquote className="text-2xl font-bold italic mb-4">
                "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, 
                so you can give money back and have money to invest. You can't win until you do this."
              </blockquote>
              <cite className="text-lg opacity-90">— Dave Ramsey</cite>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Master Money, Master Life</h2>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Transform your financial future with our comprehensive learning system designed for real-world success.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2">
                <Target className="w-4 h-4" />
                Goal-Oriented Learning
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2">
                <Award className="w-4 h-4" />
                Earn Achievements
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Track Progress
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs opacity-75 mb-1">Current Level</div>
                <div className="text-2xl font-bold text-blue-300">{userProgress.currentLevel}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-lg">💰</span>
                </div>
                <div className="text-xs opacity-75 mb-1">Knowledge Coins</div>
                <div className="text-2xl font-bold text-orange-300">{userProgress.coins}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs opacity-75 mb-1">Progress</div>
                <div className="text-2xl font-bold text-green-300">{userProgress.overallProgress}%</div>
              </div>
            </div>
          </div>

          {/* Overall Progress Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Learning Progress</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{userProgress.overallProgress}%</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Active</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative mb-4">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 relative shadow-sm"
                  style={{ width: `${userProgress.overallProgress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Excellent progress! You're building strong financial foundations.
            </p>

            {/* Status Tags */}
            <div className="flex justify-center gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Target className="w-3 h-3" /> On Track
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Growing
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Shield className="w-3 h-3" /> Strong
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Module 1: Money Basics",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-2 right-2">
              <span className="bg-green-600/80 px-2 py-1 rounded-full text-xs font-medium">Beginner Friendly</span>
            </div>
            <div className="absolute top-2 left-2">
              <span className="bg-blue-600/80 px-2 py-1 rounded-full text-xs font-medium">Foundation</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💵</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Money Fundamentals</h3>
                <p className="text-green-100 text-sm">Master the essential concepts that form the foundation of financial literacy</p>
              </div>
            </div>

            {/* Module Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Module Progress</span>
                <span className="font-bold">{userProgress.modules['money-basics'].progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${userProgress.modules['money-basics'].progress}%` }}
                ></div>
              </div>
            </div>

            {/* Learning Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3 text-green-100">What You'll Master:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Understanding different types of money
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  How banking systems work
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Interest rates and compound growth
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Digital vs physical payments
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Money and coins representing basic currency concepts"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Calculator and financial planning tools"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Key Learning Points */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-gray-900 dark:text-white font-medium mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-500" />
              Core Learning Objectives
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>Money Evolution:</strong> Learn how money evolved from bartering to digital currencies
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>Banking Basics:</strong> Understand checking, savings, and how banks protect your money
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Interest & Growth:</strong> Discover how your money can grow through compound interest
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Modern Payments:</strong> Master digital wallets, online banking, and payment security
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Module 2: Smart Budgeting",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white relative shadow-xl">
            <div className="absolute top-2 right-2">
              <span className="bg-blue-600/80 px-2 py-1 rounded-full text-xs font-medium">Practical Skills</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Smart Budgeting Mastery</h3>
                <p className="text-blue-100 text-sm">Learn to plan, track, and optimize your spending with proven strategies</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Module Progress</span>
                <span className="font-bold">{userProgress.modules['budgeting'].progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${userProgress.modules['budgeting'].progress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3 text-blue-100">Budgeting Skills You'll Develop:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  50/30/20 budgeting method
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Zero-based budgeting
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Expense categorization
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Budget tracking tools
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Budget planning with calculator and spreadsheet"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/7681107/pexels-photo-7681107.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Financial planning and budgeting workspace"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-gray-900 dark:text-white font-medium mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Learning Milestones
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>Income Assessment:</strong> Calculate and categorize all sources of income
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>Expense Tracking:</strong> Master different methods to track and categorize expenses
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Budget Creation:</strong> Build your first personalized budget using proven frameworks
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Budget Optimization:</strong> Learn to adjust and improve your budget over time
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Module 3: Strategic Saving",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white relative shadow-xl">
            <div className="absolute top-2 right-2">
              <span className="bg-emerald-600/80 px-2 py-1 rounded-full text-xs font-medium">Wealth Building</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏦</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Strategic Saving Systems</h3>
                <p className="text-emerald-100 text-sm">Build wealth systematically with smart saving strategies and emergency planning</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Module Progress</span>
                <span className="font-bold">{userProgress.modules['saving'].progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${userProgress.modules['saving'].progress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3 text-emerald-100">Saving Strategies You'll Learn:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Emergency fund building
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  High-yield savings accounts
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Automated saving systems
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Goal-based saving plans
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Piggy bank and savings concept"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Emergency fund and financial security"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-gray-900 dark:text-white font-medium mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              Saving Milestones & Goals
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Emergency Fund Foundation:</strong> Build your first $500 emergency fund
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Account Optimization:</strong> Choose the best savings accounts for your goals
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Automation Setup:</strong> Create systems that save money automatically
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Goal Achievement:</strong> Plan and save for specific financial goals
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Module 4: Investment Fundamentals",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white relative shadow-xl">
            <div className="absolute top-2 right-2">
              <span className="bg-purple-600/80 px-2 py-1 rounded-full text-xs font-medium">Advanced</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Investment Mastery</h3>
                <p className="text-purple-100 text-sm">Grow your wealth through strategic investing and understanding market dynamics</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Module Progress</span>
                <span className="font-bold">{userProgress.modules['investing'].progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${userProgress.modules['investing'].progress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3 text-purple-100">Investment Concepts You'll Master:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Stock market fundamentals
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Risk vs. return analysis
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Portfolio diversification
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Long-term wealth strategies
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Stock market charts and investment analysis"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/7681107/pexels-photo-7681107.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Investment growth and financial planning"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-gray-900 dark:text-white font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              Investment Learning Path
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Investment Basics:</strong> Understand stocks, bonds, and mutual funds
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Risk Management:</strong> Learn to balance risk and potential returns
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Portfolio Building:</strong> Create a diversified investment portfolio
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Long-term Strategy:</strong> Develop strategies for long-term wealth building
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Module 5: Credit Mastery",
      titleHighlight: "Module 5",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white relative shadow-xl">
            <div className="absolute top-2 right-2">
              <span className="bg-orange-600/80 px-2 py-1 rounded-full text-xs font-medium">Essential Skills</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Credit & Debt Mastery</h3>
                <p className="text-orange-100 text-sm">Master credit building and debt management for financial freedom</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Module Progress</span>
                <span className="font-bold">{userProgress.modules['credit'].progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${userProgress.modules['credit'].progress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3 text-orange-100">Credit Skills You'll Develop:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Credit score optimization
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Responsible credit card use
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Debt elimination strategies
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Long-term credit building
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Credit cards and financial planning"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Credit score and financial health"
                className="h-24 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-gray-900 dark:text-white font-medium mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-500" />
              Credit Building Roadmap
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Credit Fundamentals:</strong> Understand how credit scores work and what affects them
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Responsible Usage:</strong> Learn to use credit cards wisely and avoid common pitfalls
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Debt Strategy:</strong> Master proven debt payoff methods like avalanche and snowball
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  →
                </div>
                <div>
                  <strong>Credit Optimization:</strong> Build excellent credit for future financial opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl p-6 text-center shadow-xl">
            <h4 className="text-white text-xl font-bold mb-2">Ready to Transform Your Financial Future?</h4>
            <p className="text-white/90 mb-4">
              Join thousands of learners who have mastered these essential financial skills. 
              Your journey to financial freedom starts with one click. ✨
            </p>
            
            {/* Success Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-white">12k+</div>
                <div className="text-xs text-white/80">Success Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-white">97%</div>
                <div className="text-xs text-white/80">Completion Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-white flex items-center justify-center gap-1">
                  4.9 <Star className="w-4 h-4" />
                </div>
                <div className="text-xs text-white/80">Student Rating</div>
              </div>
            </div>

            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 mx-auto shadow-lg">
              <Award className="w-5 h-5" />
              Start Your Financial Journey
              <span className="text-lg">🎁</span>
            </button>
            <p className="text-white/80 text-sm mt-2">
              🎁 Begin today and receive 100 bonus knowledge coins!
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse delay-3000"></div>
        <div className="absolute bottom-48 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse delay-4000"></div>
      </div>
      
      <Timeline data={data} />
    </div>
  );
}