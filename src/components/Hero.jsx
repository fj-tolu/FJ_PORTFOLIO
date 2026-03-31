import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GraphicElement, backgroundIcons } from './BackgroundGraphics';

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 0.5) % backgroundIcons.length);
    }, 1200); // Match background speed
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-12 overflow-hidden lg:pt-40 xl:pt-48">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center lg:text-left z-10"
        >
          <span className="inline-block text-xs md:text-sm font-mono tracking-[0.5em] text-white/40 uppercase mb-8 md:mb-12">
            Graphics designer
          </span>
          <h1 className="flex flex-col items-center lg:items-start gap-0 font-display font-extrabold tracking-tighter leading-[0.8] mb-12 md:mb-16 text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] uppercase">
            <div className="flex items-start">
              <span className="text-white">CRAFTIN</span>
              <span className="bg-white text-obsidian px-2 md:px-4 py-1 ml-1 md:ml-2 -translate-y-[10%]">G</span>
            </div>
            
            <div className="bg-white text-obsidian px-2 md:px-4 py-1 mt-[-0.05em]">
              THE
            </div>
            
            <div className="text-white mt-[-0.05em]">
              FUTURE
            </div>
            
            <div className="flex items-center gap-4 w-full justify-center lg:justify-start mt-[-0.05em]">
              <span className="text-white">OF</span>
              <div className="h-10 md:h-16 lg:h-20 xl:h-24 flex-1 lg:flex-none lg:w-64 xl:w-80 bg-white" />
            </div>
            
            <div className="bg-white text-obsidian px-2 md:px-4 py-1 mt-[-0.05em] relative">
              DESIGN.
              <div className="absolute bottom-1 md:bottom-2 left-2 md:left-4 w-1 md:w-2 h-1 md:h-2 bg-purple-600 rounded-full" />
            </div>
          </h1>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-xl text-white/50 leading-relaxed font-light mb-10 md:mb-14">
            Merging brutalist aesthetics with fluid motion to redefine the modern web. 
            Specializing in high-fidelity interfaces and immersive digital experiences.
          </p>
          
          <button 
            onClick={() => document.getElementById('social-media')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-4 md:gap-8 group cursor-pointer justify-center lg:justify-start"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-obsidian transition-all duration-700"
            >
              <ArrowDownRight size={24} className="md:w-8 md:h-8" />
            </motion.div>
            <span className="text-[10px] md:text-sm font-mono uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">Explore Portfolio</span>
          </button>
        </motion.div>

        {/* Right Side: Animated Graphics (Hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px] xl:h-[700px]">
          <div className="absolute inset-0 flex items-center justify-center scale-110 xl:scale-125">
            <GraphicElement index={index} size={500} showColor={true} />
          </div>
          
          {/* Decorative Technical Elements */}
          <div className="absolute top-0 right-[-10%] text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase [writing-mode:vertical-rl] opacity-50">
            System.v2.0 // Design.Engineering
          </div>
          <div className="absolute bottom-0 left-0 text-[10px] font-mono text-white/10 tracking-widest uppercase">
            001 // 010 // 100 // 111
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
