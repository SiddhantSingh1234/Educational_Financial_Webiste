'use client';

import { motion } from 'framer-motion';
import { Users, GamepadIcon, BookOpen, Heart } from 'lucide-react';

const stats = [
  { 
    icon: <Users className="h-8 w-8 text-blue-500" />,
    value: '500K+', 
    label: 'Players',
    delay: 0
  },
  { 
    icon: <GamepadIcon className="h-8 w-8 text-blue-500" />,
    value: '50+', 
    label: 'Games',
    delay: 0.1
  },
  { 
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    value: '200+', 
    label: 'Lessons',
    delay: 0.2
  },
  { 
    icon: <Heart className="h-8 w-8 text-blue-500" />,
    value: '95%', 
    label: 'Happy Parents',
    delay: 0.3
  }
];

const Stats = () => {
  return (
    <div className="w-full bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              viewport={{ once: true }}
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;