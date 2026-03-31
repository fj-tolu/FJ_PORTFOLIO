import React from 'react';
import { motion } from 'motion/react';

export const SectionSeparator = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-[4px] overflow-hidden ${className}`}>
      {/* Primary Fluid Layer */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px]"
      />
      
      {/* Secondary Fluid Layer (Slower, different glow) */}
      <motion.div
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-3/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[4px]"
      />
      
      {/* Tertiary Fast Streak */}
      <motion.div
        animate={{
          x: ['-150%', '150%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[1px]"
      />

      {/* Bottom Glow */}
      <div className="absolute inset-0 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
    </div>
  );
};
