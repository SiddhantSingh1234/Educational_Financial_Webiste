'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const FloatingElementsStats = () => {
  const [sparkles, setSparkles] = useState<
    {
      key: number;
      left: string;
      top: string;
      fontSize: string;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generatedSparkles = [...Array(8)].map((_, i) => ({
      key: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 20 + 20}px`,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 3,
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {sparkles.map(({ key, left, top, fontSize, duration, delay }) => (
        <motion.div
          key={`stats-${key}`}
          className="absolute text-white/20"
          style={{ left, top, fontSize }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Sparkles />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElementsStats;
