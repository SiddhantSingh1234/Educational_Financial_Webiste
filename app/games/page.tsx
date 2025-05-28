'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';

// Sample games data
const gamesData = [
  {
    id: 1,
    title: "Money Match",
    description: "Match coins and bills to learn currency values",
    category: "Math",
    level: "Beginner",
    minAge: 8,
    maxAge: 10,
    image: "https://images.pexels.com/photos/279006/pexels-photo-279006.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: true
  },
  {
    id: 2,
    title: "Budget Hero",
    description: "Save money and make smart spending choices",
    category: "Strategy",
    level: "Intermediate",
    minAge: 9,
    maxAge: 13,
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: true
  },
  {
    id: 3,
    title: "Stock Stars",
    description: "Learn to invest in stocks with this simulation game",
    category: "Simulation",
    level: "Advanced",
    minAge: 10,
    maxAge: 13,
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: false
  },
  {
    id: 4,
    title: "Coin Collector",
    description: "Collect coins while answering financial questions",
    category: "Adventure",
    level: "Beginner",
    minAge: 8,
    maxAge: 11,
    image: "https://images.pexels.com/photos/3819520/pexels-photo-3819520.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: true
  },
  {
    id: 5,
    title: "Money Maze",
    description: "Navigate through a maze while solving money puzzles",
    category: "Puzzle",
    level: "Intermediate",
    minAge: 9,
    maxAge: 12,
    image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: false
  },
  {
    id: 6,
    title: "Bank Builder",
    description: "Build and manage your own virtual bank",
    category: "Simulation",
    level: "Advanced",
    minAge: 10,
    maxAge: 13,
    image: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: false
  }
];

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  
  const filteredGames = gamesData.filter(game => {
    // Filter by search term
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          game.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === 'all' || 
                           (category === 'popular' && game.popular) ||
                           game.category.toLowerCase() === category.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Fun Financial <span className="text-blue-500">Games</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn money skills while having fun with our collection of interactive educational games.
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto mb-8">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search games..."
            className="pl-10 w-full h-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-6">
            <TabsTrigger value="all" onClick={() => setCategory('all')}>All</TabsTrigger>
            <TabsTrigger value="popular" onClick={() => setCategory('popular')}>Popular</TabsTrigger>
            <TabsTrigger value="math" onClick={() => setCategory('math')}>Math</TabsTrigger>
            <TabsTrigger value="puzzle" onClick={() => setCategory('puzzle')}>Puzzle</TabsTrigger>
            <TabsTrigger value="strategy" onClick={() => setCategory('strategy')}>Strategy</TabsTrigger>
            <TabsTrigger value="simulation" onClick={() => setCategory('simulation')}>Simulation</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  {game.popular && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-400 hover:bg-yellow-500 text-black">Popular</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{game.title}</CardTitle>
                    <Badge variant="outline">{game.level}</Badge>
                  </div>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Category: {game.category}</span>
                    <span>Ages: {game.minAge}-{game.maxAge}</span>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link href={`/games/${game.id}`} className="w-full">
                    <Button className="w-full">Play Game</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}