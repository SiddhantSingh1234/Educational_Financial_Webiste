'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Coins, Sparkles, TrendingUp } from "lucide-react";

const FloatingIcons = () => {
  const [icons, setIcons] = useState<
    {
      key: number;
      left: string;
      top: string;
      fontSize: string;
      duration: number;
      delay: number;
      icon: JSX.Element;
    }[]
  >([]);

  useEffect(() => {
    const generatedIcons = [...Array(15)].map((_, i) => ({
      key: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 30 + 30}px`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 3,
      icon: i % 3 === 0 ? <Coins /> : i % 3 === 1 ? <Sparkles /> : <TrendingUp />,
    }));
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map(({ key, left, top, fontSize, duration, delay, icon }) => (
        <motion.div
          key={key}
          className="absolute text-white/80 drop-shadow-lg"
          style={{ left, top, fontSize }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;