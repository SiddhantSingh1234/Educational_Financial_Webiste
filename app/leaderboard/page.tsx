'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    name: "Alex",
    username: "@CoinMaster",
    avatar: "https://i.pravatar.cc/150?img=32",
    score: 3450,
    change: "+12%",
    badge: "Gold",
    level: 5
  },
  {
    id: 2,
    name: "Maya",
    username: "@SavingQueen",
    avatar: "https://i.pravatar.cc/150?img=5",
    score: 3120,
    change: "+8%",
    badge: "Gold",
    level: 4
  },
  {
    id: 3,
    name: "Jacob",
    username: "@MoneyWizard",
    avatar: "https://i.pravatar.cc/150?img=60",
    score: 2950,
    change: "+5%",
    badge: "Silver",
    level: 4
  },
  {
    id: 4,
    name: "Emma",
    username: "@PiggyBank",
    avatar: "https://i.pravatar.cc/150?img=9",
    score: 2780,
    change: "+15%",
    badge: "Silver",
    level: 3
  },
  {
    id: 5,
    name: "Noah",
    username: "@BudgetBoss",
    avatar: "https://i.pravatar.cc/150?img=50",
    score: 2450,
    change: "+3%",
    badge: "Silver",
    level: 3
  },
  {
    id: 6,
    name: "Olivia",
    username: "@CashQueen",
    avatar: "https://i.pravatar.cc/150?img=25",
    score: 2340,
    change: "+9%",
    badge: "Bronze",
    level: 3
  },
  {
    id: 7,
    name: "Ethan",
    username: "@SavvySpender",
    avatar: "https://i.pravatar.cc/150?img=61",
    score: 2120,
    change: "+6%",
    badge: "Bronze",
    level: 2
  },
  {
    id: 8,
    name: "Sophia",
    username: "@MoneyMaker",
    avatar: "https://i.pravatar.cc/150?img=20",
    score: 1980,
    change: "+4%",
    badge: "Bronze",
    level: 2
  }
];

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Gold':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    case 'Silver':
      return 'bg-slate-100 text-slate-800 border-slate-300';
    case 'Bronze':
      return 'bg-orange-100 text-orange-800 border-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

export default function LeaderboardPage() {
  const [period, setPeriod] = useState('weekly');

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Top <span className="text-blue-500">Financial Wizards</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out our leaderboard to see who's mastering financial skills and earning the most points in our educational games.
        </p>
      </motion.div>

      <Tabs defaultValue="weekly" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="alltime">All Time</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekly">
          <LeaderboardTable data={leaderboardData} />
        </TabsContent>
        
        <TabsContent value="monthly">
          <LeaderboardTable data={leaderboardData.sort((a, b) => b.score - a.score)} />
        </TabsContent>
        
        <TabsContent value="alltime">
          <LeaderboardTable data={leaderboardData.sort((a, b) => b.level - a.level)} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function LeaderboardTable({ data }: { data: typeof leaderboardData }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="grid grid-cols-12 bg-muted py-3 px-4 border-b">
        <div className="col-span-1 font-medium">Rank</div>
        <div className="col-span-5 font-medium">Player</div>
        <div className="col-span-2 font-medium text-right">Score</div>
        <div className="col-span-2 font-medium text-right">Change</div>
        <div className="col-span-2 font-medium text-right">Badge</div>
      </div>
      
      <div className="divide-y">
        {data.map((player, index) => (
          <motion.div 
            key={player.id}
            className={`grid grid-cols-12 py-4 px-4 items-center ${index === 0 ? 'bg-amber-50' : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="col-span-1">
              {index < 3 ? (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  index === 0 ? 'bg-amber-400' : index === 1 ? 'bg-slate-400' : 'bg-orange-400'
                }`}>
                  {index + 1}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                  {index + 1}
                </div>
              )}
            </div>
            
            <div className="col-span-5 flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={player.avatar} alt={player.name} />
                <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{player.name}</div>
                <div className="text-sm text-muted-foreground">{player.username}</div>
              </div>
            </div>
            
            <div className="col-span-2 text-right font-semibold">
              {player.score.toLocaleString()}
            </div>
            
            <div className="col-span-2 text-right">
              <span className={`${player.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {player.change}
              </span>
            </div>
            
            <div className="col-span-2 text-right">
              <Badge variant="outline" className={`font-medium ${getBadgeColor(player.badge)}`}>
                {player.badge}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}