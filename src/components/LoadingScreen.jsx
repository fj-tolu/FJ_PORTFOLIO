import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-obsidian flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-md space-y-8">
            <div className="flex justify-between items-end">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-display font-bold tracking-tighter"
              >
                FAVOUR JACOBS<span className="text-white/40">.</span>
              </motion.div>
              <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                System Initializing... {Math.round(progress)}%
              </div>
            </div>

            <div className="h-px w-full bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Core.Assets</div>
                <div className="text-[10px] font-mono text-white/40 uppercase">Loaded</div>
              </div>
              <div className="space-y-1 text-right">
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Interface.v2</div>
                <div className="text-[10px] font-mono text-white/40 uppercase">Active</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
