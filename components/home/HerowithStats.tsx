'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Coins, Sparkles, TrendingUp, Users, Gamepad2, BookOpen, Heart } from 'lucide-react';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Meteors } from '@/components/ui/meteors';
import FloatingIcons from '@/components/home/FloatingIcons';
import FloatingElementsStats from '@/components/home/FloatingElementsStats';

const stats = [
  { 
    icon: <Users className="h-10 w-10" />,
    value: '500K+', 
    label: 'Players',
    delay: 0,
    gradient: 'from-blue-400 to-cyan-400',
    shadowColor: 'shadow-blue-400/50'
  },
  { 
    icon: <Gamepad2 className="h-10 w-10" />,
    value: '50+', 
    label: 'Games',
    delay: 0.1,
    gradient: 'from-purple-400 to-pink-400',
    shadowColor: 'shadow-purple-400/50'
  },
  { 
    icon: <BookOpen className="h-10 w-10" />,
    value: '200+', 
    label: 'Lessons',
    delay: 0.2,
    gradient: 'from-green-400 to-emerald-400',
    shadowColor: 'shadow-green-400/50'
  },
  { 
    icon: <Heart className="h-10 w-10" />,
    value: '95%', 
    label: 'Happy Parents',
    delay: 0.3,
    gradient: 'from-yellow-400 to-orange-400',
    shadowColor: 'shadow-yellow-400/50'
  }
];

const HeroStatsSection = () => {
  const router = useRouter();

  const words = "Join thousands of kids learning important financial skills through fun, interactive games. Save, spend, and invest wisely in our virtual world!";

  return (
    <div className="relative w-full overflow-hidden">
      
      <Meteors number={20} className="absolute inset-0 dark:opacity-70 z-0" />
      
      {/* Enhanced Aurora Background - Darker Base for both Light and Dark Modes */}
      <AuroraBackground className="absolute inset-0 opacity-95 dark:opacity-60">
        {/* Dark base layer for both modes */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-900/90 to-slate-950/85" />
        {/* Primary vibrant gradient over darker base */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/70 via-blue-600/75 to-purple-700/70" />
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
      <FloatingIcons />

      {/* Enhanced Animated Bubbles - More Prominent
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
      </div> */}

      {/* HERO SECTION */}
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
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-100 drop-shadow-2xl filter contrast-125">
                Money Matters
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold mt-2">
                Made{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 animate-pulse drop-shadow-2xl shadow-yellow-400/50">
                  Fun!
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Description - Better Contrast */}
            <motion.div 
              className="mb-8 text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-semibold drop-shadow-lg backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
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
                className="h-20 w-74 relative bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-300 hover:via-orange-300 hover:to-pink-300 text-white font-bold px-10 py-4 text-xl rounded-full shadow-2xl hover:shadow-yellow-400/70 transform hover:scale-110 transition-all duration-300 border-2 border-white/30"
                onClick={() => router.push('/signup')}
              >
                <Sparkles className="mr-3 h-6 w-6" />
                Explore Lessons
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-40" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="h-20 w-74 relative bg-white/30 hover:bg-white/50 border-3 border-white/70 text-white font-bold px-10 py-4 text-xl rounded-full backdrop-blur-lg hover:backdrop-blur-xl transition-all duration-300 shadow-2xl hover:shadow-white/30 transform hover:scale-105"
                onClick={() => router.push('/learn')}
              >
                Start Playing Free
              </Button>
            </motion.div>

            {/* Enhanced Trust Indicators - More Visible */}
            {/* <motion.div
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 bg-white/30 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/40">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-white">500K+ Active Players</span>
              </div>
              <div className="flex items-center gap-3 bg-white/30 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/40">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" />
                <span className="text-white">Trusted by Parents</span>
              </div>
              <div className="flex items-center gap-3 bg-white/30 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/40">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" />
                <span className="text-white">Safe & Educational</span>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Seamless Transition Element Between Hero and Stats */}
      <div className="relative z-10 pointer-events-none">
        <div className="absolute -top-32 inset-x-0">
          {/* Wave Transition */}
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-slate-900/80" />
          <svg className="w-full fill-slate-900/80" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </div>

      {/* STATS SECTION - Enhanced for light mode */}
      <div className="relative z-10 py-20 bg-slate-900 dark:bg-slate-950">
        {/* Additional floating decorative elements for stats section */}
        <FloatingElementsStats />

        {/* Enhanced Background Gradients for Stats Section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2)_0%,transparent_60%)]" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Title - Enhanced */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-100 mb-4 drop-shadow-lg">
              Trusted by Families Worldwide
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
              Join our growing community of young learners mastering financial literacy through play
            </p>
          </motion.div>

          {/* Stats Grid - Enhanced with more vibrant design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Card Background - Enhanced for better visibility in light mode */}
                <div className="relative bg-slate-800/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  
                  {/* Enhanced Gradient Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300`} />
                  
                  {/* Icon Container - Enhanced */}
                  <motion.div 
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-6 shadow-lg ${stat.shadowColor} group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-white drop-shadow-lg">
                      {stat.icon}
                    </div>
                    
                    {/* Enhanced Icon Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-40 animate-pulse`} />
                  </motion.div>

                  {/* Value - Enhanced with better text effect */}
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: stat.delay + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label - Enhanced */}
                  <div className="text-white/90 font-semibold text-lg">
                    {stat.label}
                  </div>

                  {/* Enhanced Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-80`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-lg font-medium mb-6">
              Ready to join our community of young financial experts?
            </p>
            <motion.button 
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-300 hover:via-orange-300 hover:to-pink-300 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="inline mr-2 h-5 w-5" />
              Get Started Today
            </motion.button>
          </motion.div>
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
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white/50 backdrop-blur-sm">
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
    </div>
  );
};

export default HeroStatsSection;