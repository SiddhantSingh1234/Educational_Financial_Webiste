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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="md:w-1/3">
            <CardHeader className="text-center">
              <div className="flex justify-end mb-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <CardTitle className="mb-1">{userData.name}</CardTitle>
                <CardDescription>{userData.username}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Level</p>
                  <p className="text-2xl font-bold">{userData.level}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Coins</p>
                  <p className="text-2xl font-bold">{userData.coins}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Lessons</p>
                  <p className="text-2xl font-bold">{userData.completedLessons}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Level Progress</span>
                  <span>{userData.xpToNextLevel}% to Level {userData.level + 1}</span>
                </div>
                <Progress value={userData.xpToNextLevel} className="h-2" />
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Member since: {userData.joinDate}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="achievements">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Track your progress and unlock new achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.achievements.map((achievement) => (
                        <div key={achievement.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">{achievement.name}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                            {achievement.completed && (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
                            )}
                          </div>
                          <div className="mt-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Progress</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges">
                <Card>
                  <CardHeader>
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>Badges you've earned through your financial journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {userData.badges.map((badge) => (
                        <div key={badge.id} className="border rounded-lg p-4 flex items-center gap-4">
                          <div className="bg-blue-100 text-blue-700 rounded-full w-12 h-12 flex items-center justify-center">
                            {badge.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{badge.name}</h4>
                            <p className="text-sm text-muted-foreground">Earned on {badge.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and rewards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.recentActivities.map((activity) => (
                        <div key={activity.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{activity.name}</h4>
                              <p className="text-sm text-muted-foreground">{activity.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {activity.coins > 0 && (
                                <Badge variant="outline\" className="bg-amber-50 text-amber-700 border-amber-200">
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
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </div>
  );
}