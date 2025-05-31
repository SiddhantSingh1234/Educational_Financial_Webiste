// 'use client';

// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { Coins } from 'lucide-react';
// import Link from 'next/link';

// const Hero = () => {
//   const router = useRouter();

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-500 to-blue-600 text-white">
//       <div className="absolute inset-0 opacity-10">
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: Math.random() * 100 + 50,
//               height: Math.random() * 100 + 50,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Money Matters<br />
//             Made <span className="text-yellow-300">Fun!</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-lg md:text-xl mb-8 opacity-90"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Join thousands of kids learning important financial skills
//             through fun, interactive games. Save, spend, and invest
//             wisely in our virtual world!
//           </motion.p>
          
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Button 
//               size="lg" 
//               className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8"
//               onClick={() => router.push('/signup')}
//             >
//               Start Playing Free
//             </Button>
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="bg-white/10 hover:bg-white/20 border-white"
//               onClick={() => router.push('/learn')}
//             >
//               Explore Lessons
//             </Button>
//           </motion.div>
//         </div>
//       </div>
      
//       <motion.div 
//         className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-400 -mb-16 -mr-16 z-0 opacity-30"
//         animate={{
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
      
//       <motion.div 
//         className="absolute top-24 right-10 md:right-24 w-16 h-16 rounded-full bg-yellow-400 z-10 flex items-center justify-center text-black text-2xl font-bold shadow-lg"
//         animate={{
//           y: [0, -10, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <Coins />
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Coins, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = () => {
  const router = useRouter();

  const words = "Join thousands of kids learning important financial skills through fun, interactive games. Save, spend, and invest wisely in our virtual world!";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Enhanced Aurora Background - Darker Base in Light Mode */}
      <AuroraBackground className="absolute inset-0 opacity-95 dark:opacity-60">
        {/* Darker base layer for light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/90 via-gray-800/85 to-slate-900/80 dark:from-blue-600/50 dark:to-blue-700/60" />
        {/* Primary vibrant gradient over darker base */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/70 via-blue-600/75 to-purple-700/70 dark:from-blue-600/50 dark:to-blue-700/60" />
        {/* Secondary animated layers - vibrant over dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-yellow-500/45 to-green-500/50 animate-pulse opacity-60 dark:opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-400/45 via-transparent to-cyan-400/40 opacity-70 dark:opacity-25" />
        {/* Additional vibrant layer */}
        <div className="absolute inset-0 bg-gradient-to-bl from-violet-500/35 via-transparent to-emerald-500/35 dark:opacity-20" />
      </AuroraBackground>

      {/* Enhanced Spotlight Effects - Adjusted for Darker Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(59, 130, 246, 0.8)"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="rgba(251, 191, 36, 0.75)"
      />
      <Spotlight
        className="top-1/2 -left-20 h-[60vh] w-[40vw]"
        fill="rgba(139, 92, 246, 0.65)"
      />
      <Spotlight
        className="bottom-0 right-0 h-[70vh] w-[45vw]"
        fill="rgba(34, 197, 94, 0.6)"
      />
      {/* Additional spotlights for vibrant contrast against dark background */}
      <Spotlight
        className="top-1/4 left-1/4 h-[50vh] w-[35vw]"
        fill="rgba(236, 72, 153, 0.5)"
      />
      <Spotlight
        className="bottom-1/4 left-3/4 h-[60vh] w-[40vw]"
        fill="rgba(168, 85, 247, 0.45)"
      />

      {/* Enhanced Background Pattern - Vibrant Against Dark Base */}
      <div className="absolute inset-0 opacity-60 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.9)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.8)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.7)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.6)_0%,transparent_50%)]" />
      </div>

      {/* Floating Financial Icons - More Vibrant */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/80 dark:text-yellow-300/20 drop-shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 30}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 20, -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? <Coins /> : i % 3 === 1 ? <Sparkles /> : <TrendingUp />}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Animated Bubbles - More Prominent */}
      <div className="absolute inset-0 opacity-60 dark:opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/80 dark:bg-white/40 backdrop-blur-sm shadow-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
              y: [0, -25, 0],
            }}
            transition={{
              duration: Math.random() * 7 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Title - Much More Vibrant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-100 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 drop-shadow-2xl filter contrast-125">
                Money Matters
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold mt-2">
                Made{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 dark:from-yellow-300 dark:to-orange-400 animate-pulse drop-shadow-2xl shadow-yellow-400/50">
                  Fun!
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Description - Better Contrast */}
            <motion.div 
              className="mb-8 text-lg md:text-xl text-white/95 dark:text-gray-200 max-w-3xl mx-auto font-semibold drop-shadow-lg backdrop-blur-sm bg-white/10 dark:bg-transparent rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TextGenerateEffect words={words} className="text-center" />
            </motion.div>

            {/* Enhanced Action Buttons - More Prominent */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-300 hover:via-orange-300 hover:to-pink-300 dark:from-yellow-500 dark:to-yellow-600 dark:hover:from-yellow-400 dark:hover:to-yellow-500 text-white dark:text-gray-900 font-bold px-10 py-4 text-xl rounded-full shadow-2xl hover:shadow-yellow-400/70 transform hover:scale-110 transition-all duration-300 border-2 border-white/30"
                onClick={() => router.push('/signup')}
              >
                <Sparkles className="mr-3 h-6 w-6" />
                Start Playing Free
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-40" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="relative bg-white/30 hover:bg-white/50 dark:bg-gray-800/60 dark:hover:bg-gray-700/70 border-3 border-white/70 dark:border-gray-300/50 text-white dark:text-gray-100 font-bold px-10 py-4 text-xl rounded-full backdrop-blur-lg hover:backdrop-blur-xl transition-all duration-300 shadow-2xl hover:shadow-white/30 transform hover:scale-105"
                onClick={() => router.push('/learn')}
              >
                Explore Lessons
              </Button>
            </motion.div>

            {/* Enhanced Trust Indicators - More Visible */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 bg-white/30 dark:bg-gray-800/40 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/40">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-white dark:text-gray-300">500K+ Active Players</span>
              </div>
              <div className="flex items-center gap-3 bg-white/30 dark:bg-gray-800/40 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/40">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" />
                <span className="text-white dark:text-gray-300">Trusted by Parents</span>
              </div>
              <div className="flex items-center gap-3 bg-white/30 dark:bg-gray-800/40 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/40">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" />
                <span className="text-white dark:text-gray-300">Safe & Educational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Coin - More Prominent */}
      <motion.div 
        className="absolute top-20 right-10 md:right-24 z-20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-yellow-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white/50 backdrop-blur-sm">
            <Coins className="w-12 h-12 drop-shadow-lg" />
          </div>
          <div className="absolute inset-0 rounded-full bg-yellow-300/80 animate-ping" />
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-yellow-400/50 to-orange-400/50 blur-3xl animate-pulse" />
        </div>
      </motion.div>

      {/* Enhanced Additional Floating Elements */}
      <motion.div 
        className="absolute top-32 left-10 md:left-24 z-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 flex items-center justify-center text-white shadow-2xl border-3 border-white/40">
            <Sparkles className="w-8 h-8 drop-shadow-lg" />
          </div>
          <div className="absolute -inset-4 rounded-full bg-purple-400/40 blur-2xl animate-pulse" />
        </div>
      </motion.div>

      {/* Additional Floating Element */}
      <motion.div 
        className="absolute bottom-32 right-32 z-20 hidden md:block"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 12, -12, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="relative">
          <div className="w-18 h-18 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white shadow-xl border-3 border-white/40">
            <TrendingUp className="w-7 h-7 drop-shadow-lg" />
          </div>
          <div className="absolute -inset-3 rounded-full bg-green-400/40 blur-xl animate-pulse" />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade - Enhanced */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10" />
    </div>
  );
};

export default Hero;