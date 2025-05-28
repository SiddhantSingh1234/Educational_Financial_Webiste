'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Coins, Lock, Check, Trophy, Star } from 'lucide-react';
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
  const [overallProgress, setOverallProgress] = useState(0);

  const handleUnlockModule = (moduleId: number, requiredCoins: number) => {
    if (userCoins >= requiredCoins) {
      setModules(modules.map(module => 
        module.id === moduleId ? { ...module, unlocked: true } : module
      ));
      setUserCoins(userCoins - requiredCoins);
      toast({
        title: "Module unlocked!",
        description: "You've unlocked a new learning module.",
        variant: "default",
      });
    } else {
      toast({
        title: "Not enough coins!",
        description: `You need ${requiredCoins - userCoins} more coins to unlock this module.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Journey</h1>
          <p className="text-muted-foreground">Master financial skills with fun, interactive lessons</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center mr-2">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Level</p>
              <p className="font-semibold">{userLevel}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-amber-100 text-amber-700 rounded-full w-10 h-10 flex items-center justify-center mr-2">
              <Coins className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Coins</p>
              <p className="font-semibold">{userCoins}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium">Overall Progress</p>
          <p className="text-sm font-medium">{overallProgress}%</p>
        </div>
        <Progress value={overallProgress} className="h-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <motion.div 
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`overflow-hidden h-full border-2 ${module.unlocked ? 'border-blue-200 hover:border-blue-300' : 'border-gray-200'} transition-colors`}>
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={module.unlocked ? "secondary" : "outline"} className="font-semibold">
                    Level {module.level}
                  </Badge>
                </div>
                {!module.unlocked && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <Lock className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold">Locked</p>
                    </div>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {module.title}
                  {module.completed && <Check className="h-5 w-5 text-green-500" />}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center text-sm mb-2">
                  <p className="text-muted-foreground">{module.progress}% Complete</p>
                  <p className="text-muted-foreground">{module.lessons} Lessons</p>
                </div>
                <Progress value={module.progress} className="h-1 mb-4" />
                
                <div className="flex items-center gap-1 text-amber-600">
                  <Coins className="h-4 w-4" />
                  <span className="text-sm font-medium">{module.coins} coins reward</span>
                </div>
              </CardContent>
              
              <CardFooter>
                {module.unlocked ? (
                  <Link href={module.path} className="w-full">
                    <Button className="w-full">
                      {module.progress > 0 ? "Continue Learning" : "Start Learning"}
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleUnlockModule(module.id, module.level * 50)}
                  >
                    Unlock ({module.level * 50} coins)
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}