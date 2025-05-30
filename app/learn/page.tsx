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

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Coins, Lock, Check, Trophy, Star, Heart } from 'lucide-react';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';

// Sample learning path data
const learningModules = [
  {
    id: 1,
    title: "Money Basics",
    description: "Learn what money is and how it works",
    level: 1,
    unlocked: true,
    completed: false,
    progress: 0,
    coins: 100,
    path: "/learn/money-basics",
    lessons: 5,
    image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Saving Skills",
    description: "Discover the power of saving money",
    level: 2,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 150,
    path: "/learn/saving-skills",
    lessons: 4,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Smart Spending",
    description: "Learn to make wise spending choices",
    level: 3,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 200,
    path: "/learn/smart-spending",
    lessons: 6,
    image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Investment Basics",
    description: "Grow your money with simple investments",
    level: 4,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 250,
    path: "/learn/investment-basics",
    lessons: 5,
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Money Master",
    description: "Become a money expert with advanced concepts",
    level: 5,
    unlocked: false,
    completed: false,
    progress: 0,
    coins: 300,
    path: "/learn/money-master",
    lessons: 7,
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function LearnPage() {
  const [modules, setModules] = useState(learningModules);
  const [userLevel, setUserLevel] = useState(1);
  const [userCoins, setUserCoins] = useState(50);
  const [userLives, setUserLives] = useState(5);
  const [overallProgress, setOverallProgress] = useState(0);

  const handleUnlockModule = (moduleId: number, requiredCoins: number) => {
    if (userCoins >= requiredCoins) {
      setModules(modules.map(module => 
        module.id === moduleId ? { ...module, unlocked: true } : module
      ));
      setUserCoins(userCoins - requiredCoins);
      toast({
        title: "Level unlocked!",
        description: "You've unlocked a new learning adventure!",
        variant: "default",
      });
    } else {
      toast({
        title: "Not enough coins!",
        description: `You need ${requiredCoins - userCoins} more coins to unlock this level!`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8">
      {/* Game-style header with lives and coins */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-red-100 px-3 py-2 rounded-full">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="font-bold text-red-500">{userLives}</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-100 px-3 py-2 rounded-full">
              <Coins className="h-5 w-5 text-amber-500" />
              <span className="font-bold text-amber-500">{userCoins}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full">
            <Trophy className="h-5 w-5 text-blue-500" />
            <span className="font-bold text-blue-500">Level {userLevel}</span>
          </div>
        </div>
      </div>

      {/* Candy Crush style level path */}
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative path */}
          <div className="absolute top-0 left-1/2 w-16 h-full -ml-8 hidden md:block">
            <div className="h-full w-8 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full mx-auto" />
          </div>

          {/* Zigzag connecting lines between levels */}
          {modules.map((_, index) => {
            if (index === modules.length - 1) return null;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={`path-${index}`} 
                className={`absolute hidden md:block z-0 h-16 w-32 ${isEven ? 'border-t-8 border-r-8' : 'border-b-8 border-r-8'} border-yellow-400 rounded-tr-full rounded-br-full`}
                style={{
                  top: `${index * 220 + (isEven ? 100 : 0)}px`,
                  left: '50%',
                  transform: `translateX(${isEven ? '0' : '-100%'})`,
                  display: index < modules.length - 1 ? 'block' : 'none'
                }}
              />
            );
          })}

          {/* Level circles */}
          {modules.map((module, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={module.id}
                className={`relative z-10 mb-16 flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Level number bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-8 md:static md:transform-none md:mt-0 md:mr-4 md:ml-4 z-20">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${module.unlocked ? 'bg-gradient-to-br from-yellow-300 to-yellow-500' : 'bg-gray-300'} text-white shadow-lg`}>
                    {module.level}
                  </div>
                </div>

                {/* Level card */}
                <div className={`w-full md:w-3/4 ${isEven ? 'md:ml-8' : 'md:mr-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`rounded-2xl overflow-hidden shadow-xl ${!module.unlocked ? 'grayscale' : ''}`}
                  >
                    <div className="relative">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-xl font-bold">{module.title}</h3>
                          <p className="text-sm text-white/80">{module.description}</p>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-white/90 text-black font-bold">
                            {module.lessons} Lessons
                          </Badge>
                        </div>
                      </div>

                      {/* Locked overlay */}
                      {!module.unlocked && (
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <div className="text-center p-4">
                            <Lock className="h-12 w-12 mx-auto mb-2 text-white" />
                            <div className="flex items-center justify-center gap-2 mb-3">
                              <Coins className="h-5 w-5 text-yellow-400" />
                              <span className="text-xl font-bold text-white">{module.coins}</span>
                            </div>
                            <Button
                              onClick={() => handleUnlockModule(module.id, module.coins)}
                              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold border-none"
                            >
                              Unlock Level
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Progress bar */}
                    {module.unlocked && (
                      <div className="bg-white p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm font-medium">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2 bg-gray-200">
                          <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
                        </Progress>
                        <div className="mt-4 flex justify-between">
                          <div className="flex items-center gap-1">
                            <Coins className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">{module.coins} reward</span>
                          </div>
                          {module.unlocked && (
                            <Link href={module.path}>
                              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                                {module.progress > 0 ? 'Continue' : 'Start'}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}