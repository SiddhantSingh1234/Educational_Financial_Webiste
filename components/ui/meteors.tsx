'use client';

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

type Meteor = {
  delay: string;
  duration: string;
  position: number;
};

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<Meteor[]>([]);

  useEffect(() => {
    const meteors = Array.from({ length: number }, (_, idx) => {
      const position = idx * (800 / number) - 400;
      return {
        delay: `${Math.random() * 5}s`,
        duration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
        position,
      };
    });
    setMeteorStyles(meteors);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((meteor, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px",
            left: `${meteor.position}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </motion.div>
  );
};