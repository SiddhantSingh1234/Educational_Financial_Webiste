// 'use client';

// import { motion } from 'framer-motion';
// import { Users, GamepadIcon, BookOpen, Heart } from 'lucide-react';

// const stats = [
//   { 
//     icon: <Users className="h-8 w-8 text-blue-500" />,
//     value: '500K+', 
//     label: 'Players',
//     delay: 0
//   },
//   { 
//     icon: <GamepadIcon className="h-8 w-8 text-blue-500" />,
//     value: '50+', 
//     label: 'Games',
//     delay: 0.1
//   },
//   { 
//     icon: <BookOpen className="h-8 w-8 text-blue-500" />,
//     value: '200+', 
//     label: 'Lessons',
//     delay: 0.2
//   },
//   { 
//     icon: <Heart className="h-8 w-8 text-blue-500" />,
//     value: '95%', 
//     label: 'Happy Parents',
//     delay: 0.3
//   }
// ];

// const Stats = () => {
//   return (
//     <div className="w-full bg-blue-500 text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: stat.delay }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-2">{stat.icon}</div>
//               <div className="text-4xl font-bold mb-1">{stat.value}</div>
//               <div className="text-blue-100">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;

'use client';

import { motion } from 'framer-motion';
import { Users, GamepadIcon, BookOpen, Heart, Sparkles } from 'lucide-react';

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
    icon: <GamepadIcon className="h-10 w-10" />,
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

const Stats = () => {
  return (
    <div className="relative w-full overflow-hidden py-20">
      {/* Enhanced Background - Matching Hero Style */}
      <div className="absolute inset-0">
        {/* Dark base for light mode, preserving dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-gray-900/90 to-slate-900/95 dark:from-slate-900 dark:to-slate-950" />
        
        {/* Vibrant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 via-purple-600/50 to-cyan-600/60 dark:from-blue-600/40 dark:via-purple-600/30 dark:to-cyan-600/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/40 via-transparent to-blue-500/40 dark:from-purple-500/20 dark:to-blue-500/20" />
        
        {/* Animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-yellow-500/25 to-green-500/30 animate-pulse opacity-50 dark:opacity-25" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.6)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.5)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.4)_0%,transparent_50%)]" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 dark:text-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <Sparkles />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-100 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500 mb-4 drop-shadow-lg">
            Trusted by Families Worldwide
          </h2>
          <p className="text-lg text-white/90 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Join our growing community of young learners mastering financial literacy through play
          </p>
        </motion.div>

        {/* Stats Grid */}
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
              {/* Card Background */}
              <div className="relative bg-white/15 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
                
                {/* Gradient Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <motion.div 
                  className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-6 shadow-lg ${stat.shadowColor} group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-white drop-shadow-lg">
                    {stat.icon}
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-30 animate-pulse`} />
                </motion.div>

                {/* Value */}
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

                {/* Label */}
                <div className="text-white/90 dark:text-gray-300 font-semibold text-lg">
                  {stat.label}
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 dark:text-gray-400 text-lg font-medium mb-6">
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-950 dark:via-slate-950/60 z-10" />
    </div>
  );
};

export default Stats;