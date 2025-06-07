'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, PiggyBank, TrendingUp, Wallet, DollarSign, Receipt, CreditCard } from 'lucide-react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const modules = [
  {
    title: 'Saving Adventures',
    description: 'Learn to save money while having fun with virtual piggy banks and saving goals',
    icon: <PiggyBank className="h-8 w-8 text-blue-500" />,
    level: 1,
    path: '/learn/saving',
    delay: 0
  },
  {
    title: 'Investment Island',
    description: 'Discover how investments work by growing your own business in our virtual economy',
    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    level: 2,
    path: '/learn/investing',
    delay: 0.1
  },
  {
    title: 'Budget Battles',
    description: 'Master the art of budgeting with fun challenges and real-world scenarios',
    icon: <Wallet className="h-8 w-8 text-purple-500" />,
    level: 3,
    path: '/learn/budgeting',
    delay: 0.2
  },
  {
    title: 'Money Markets',
    description: 'Explore how markets work by buying, selling, and trading in our virtual marketplace',
    icon: <DollarSign className="h-8 w-8 text-amber-500" />,
    level: 4,
    path: '/learn/markets',
    delay: 0.3
  },
  {
    title: 'Smart Shopping Quest',
    description: 'Learn to make smart purchasing decisions and understand value vs. price',
    icon: <Receipt className="h-8 w-8 text-pink-500" />,
    level: 2,
    path: '/learn/shopping',
    delay: 0.4,
    category: 'Basics'
  },
  {
    title: 'Credit Champions',
    description: 'Understand credit, loans, and responsible borrowing through interactive scenarios',
    icon: <CreditCard className="h-8 w-8 text-red-500" />,
    level: 5,
    path: '/learn/credit',
    delay: 0.5,
    category: 'Advanced'
  },
];

// const LearningModules = () => {
//   return (
//     <section className="py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Financial Skills Through <span className="text-blue-500">Play</span>
//           </h2>
//           <p className="text-lg text-muted-foreground dark:text-zinc-300 max-w-2xl mx-auto">
//             Our game-based approach makes learning about money engaging and effective. Kids develop real financial skills while having a blast!
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 mb-8">
//           {modules.slice(0, 6).map((module, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: module.delay }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full hover:shadow-md transition-shadow">
//                 <CardHeader className="flex flex-row items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
//                     {module.icon}
//                   </div>
//                   <div>
//                     <CardTitle className="text-xl">{module.title}</CardTitle>
//                     <CardDescription className="mt-2">{module.description}</CardDescription>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <Link href={module.path}>
//                     <Button variant="link" className="px-0 text-blue-500 group">
//                       Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LearningModules;

export default function LearningModules() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Financial Skills Through   
          <Highlight className="text-black dark:text-white">
            <span className="text-blue-600 dark:text-blue-300">Games</span>
          </Highlight>
        </h2>
        <p className="text-lg text-muted-foreground dark:text-zinc-300 max-w-2xl mx-auto">
          Our game-based approach makes learning about money engaging and effective. Kids develop real financial skills while having a blast!
        </p>
      </motion.div>
      <InfiniteMovingCards
        modules={modules}
        direction="right"
        speed="slow"
      />
    </div>
  );
}