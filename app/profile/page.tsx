'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  User, Settings, Award, BookOpen, Coins, 
  TrendingUp, Star, ChevronRight, Edit
} from 'lucide-react';

// Sample user data
const userData = {
  name: "Jamie Smith",
  username: "@MoneyWiz",
  avatar: "https://i.pravatar.cc/150?img=12",
  level: 3,
  coins: 750,
  totalCoins: 1200,
  xpToNextLevel: 75,
  joinDate: "January 15, 2025",
  completedLessons: 28,
  totalLessons: 50,
  badges: [
    { id: 1, name: "Saving Star", icon: <Star className="h-4 w-4" />, date: "Feb 12, 2025" },
    { id: 2, name: "Budget Master", icon: <TrendingUp className="h-4 w-4" />, date: "Mar 05, 2025" },
    { id: 3, name: "Quiz Champion", icon: <Award className="h-4 w-4" />, date: "Mar 21, 2025" }
  ],
  achievements: [
    { id: 1, name: "First Savings", description: "Save your first 100 coins", progress: 100, completed: true },
    { id: 2, name: "Knowledge Seeker", description: "Complete 10 lessons", progress: 100, completed: true },
    { id: 3, name: "Quiz Master", description: "Get perfect score on 5 quizzes", progress: 60, completed: false },
    { id: 4, name: "Financial Wizard", description: "Reach Level 5", progress: 40, completed: false }
  ],
  recentActivities: [
    { id: 1, type: "lesson", name: "Completed 'Introduction to Savings'", date: "2 days ago", xp: 50, coins: 25 },
    { id: 2, type: "quiz", name: "Scored 90% on 'Money Basics Quiz'", date: "4 days ago", xp: 40, coins: 20 },
    { id: 3, type: "badge", name: "Earned 'Saving Star' badge", date: "1 week ago", xp: 100, coins: 50 },
    { id: 4, type: "level", name: "Reached Level 3", date: "2 weeks ago", xp: 0, coins: 100 }
  ]
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Gradient Background */}
      <div className="w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-24 w-24 mb-4 border-4 border-white">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
            <p className="text-xl mb-4">{userData.username}</p>
            
            <div className="flex items-center gap-6 mt-4">
              <div className="text-center">
                <p className="text-3xl font-bold">{userData.level}</p>
                <p className="text-sm">Level</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{userData.coins}</p>
                <p className="text-sm">Coins</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{userData.completedLessons}</p>
                <p className="text-sm">Lessons</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Level Progress</span>
                <span>{userData.xpToNextLevel}% to Level {userData.level + 1}</span>
              </div>
              <Progress value={userData.xpToNextLevel} className="h-3 bg-blue-100" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-blue-700">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{userData.completedLessons}/{userData.totalLessons}</p>
                  <p className="text-sm text-muted-foreground">Lessons completed</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-amber-700">
                    <Coins className="h-5 w-5 mr-2" />
                    Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{userData.coins}/{userData.totalCoins}</p>
                  <p className="text-sm text-muted-foreground">Coins earned</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-green-700">
                    <Award className="h-5 w-5 mr-2" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {userData.achievements.filter(a => a.completed).length}/{userData.achievements.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tabs defaultValue="achievements" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="achievements" className="text-sm md:text-base">Achievements</TabsTrigger>
                <TabsTrigger value="badges" className="text-sm md:text-base">Badges</TabsTrigger>
                <TabsTrigger value="activity" className="text-sm md:text-base">Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="achievements">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Track your progress and unlock new achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {userData.achievements.map((achievement) => (
                        <motion.div 
                          key={achievement.id} 
                          className={`border rounded-lg p-4 transition-all ${achievement.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">{achievement.name}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                            {achievement.completed && (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                ✓ Completed
                              </Badge>
                            )}
                          </div>
                          <div className="mt-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Progress</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>Badges you've earned through your financial journey</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {userData.badges.map((badge) => (
                        <motion.div 
                          key={badge.id} 
                          className="border rounded-lg p-4 flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all"
                          whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            {badge.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{badge.name}</h4>
                            <p className="text-sm text-muted-foreground">Earned on {badge.date}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and rewards</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {userData.recentActivities.map((activity) => (
                        <motion.div 
                          key={activity.id} 
                          className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{activity.name}</h4>
                              <p className="text-sm text-muted-foreground">{activity.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {activity.coins > 0 && (
                                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                  <Coins className="h-3 w-3 mr-1" /> +{activity.coins}
                                </Badge>
                              )}
                              {activity.xp > 0 && (
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                  <Award className="h-3 w-3 mr-1" /> +{activity.xp} XP
                                </Badge>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}