import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Paintbrush, 
  Code, 
  Circle, 
  Palette, 
  User, 
  Cpu, 
  Layers, 
  Monitor, 
  Terminal, 
  Box, 
  Zap,
  Framer,
  Layout,
  Command
} from 'lucide-react';

export const backgroundIcons = [
  { Icon: Paintbrush, color: "rgba(56, 189, 248, 0.2)" }, // Sky
  { Icon: Code, color: "rgba(168, 85, 247, 0.2)" },      // Purple
  { Icon: Cpu, color: "rgba(244, 63, 94, 0.2)" },       // Rose
  { Icon: Palette, color: "rgba(234, 179, 8, 0.2)" },    // Yellow
  { Icon: Layers, color: "rgba(34, 197, 94, 0.2)" },     // Green
  { Icon: Monitor, color: "rgba(99, 102, 241, 0.2)" },   // Indigo
  { Icon: Terminal, color: "rgba(249, 115, 22, 0.2)" },  // Orange
  { Icon: Box, color: "rgba(20, 184, 166, 0.2)" },      // Teal
  { Icon: Zap, color: "rgba(236, 72, 153, 0.2)" },      // Pink
  { Icon: Framer, color: "rgba(255, 255, 255, 0.1)" },
  { Icon: Layout, color: "rgba(56, 189, 248, 0.2)" },
  { Icon: Command, color: "rgba(168, 85, 247, 0.2)" },
];

export const GraphicElement = ({ index, size = 300, showColor = false }) => {
  const iconData = backgroundIcons[Math.floor(index) % backgroundIcons.length];
  const CurrentIcon = iconData.Icon;
  const color = showColor ? iconData.color : "rgba(255,255,255,0.15)";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.floor(index) % backgroundIcons.length}
        initial={{ scale: 0.8, opacity: 0, rotate: -45, filter: "blur(20px)" }}
        animate={{ scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)" }}
        exit={{ scale: 0.5, opacity: 0, rotate: 45, filter: "blur(20px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center"
      >
        {/* Geometric Background Shape */}
        <motion.div 
          animate={{ 
            borderRadius: Math.floor(index) % 2 === 0 ? "0%" : "50%",
            rotate: index * 180 
          }}
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-white/[0.05] transition-all duration-[600ms]"
        />
        
        {/* Overlapping Circles (like in the image) */}
        <div className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] border border-white/[0.04] rounded-full -translate-x-1/3" />
        <div className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] border border-white/[0.04] rounded-full translate-x-1/3" />
        <div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-white/[0.02] rounded-full translate-y-1/4" />
        
        {/* Diamond/Square Outline */}
        <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-white/[0.05] rotate-45" />
        
        {/* Brackets (like in the image) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute left-[-100px] md:left-[-200px] text-white/[0.05] text-[100px] md:text-[200px] font-light">&lt;</div>
          <div className="absolute right-[-100px] md:right-[-200px] text-white/[0.05] text-[100px] md:text-[200px] font-light">&gt;</div>
        </div>
        
        <CurrentIcon 
          size={size} 
          strokeWidth={0.2} 
          style={{ color: color }}
          className="relative z-10 transition-colors duration-500"
        />
        
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-full blur-[150px]" 
          style={{ 
            background: showColor 
              ? `radial-gradient(circle, ${iconData.color.replace('0.2', '0.1')} 0%, transparent 70%)`
              : 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export const BackgroundGraphics = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 0.5) % backgroundIcons.length);
    }, 1200); // Faster cycle (was 1800)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 bg-obsidian">
      {/* Central Animated Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        <GraphicElement index={index} size={300} />
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)]" />

      {/* Grid Overlay for Technical Feel */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0px 0px", "100px 100px"] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, (Math.random() * 100 - 20) + "%"],
              opacity: [0, 0.15, 0]
            }}
            transition={{ 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-px h-32 bg-gradient-to-b from-white/10 to-transparent"
          />
        ))}
      </div>
    </div>
  );
};
