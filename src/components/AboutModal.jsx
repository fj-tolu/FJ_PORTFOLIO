import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const AboutModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-obsidian/90 backdrop-blur-xl flex items-start md:items-center justify-center p-6 md:p-12 overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="fixed top-6 right-6 md:top-8 md:right-8 text-white/40 hover:text-white transition-colors z-[110]"
          >
            <X size={32} className="md:w-12 md:h-12" />
          </button>

          <div className="max-w-5xl w-full py-12 md:py-0">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center"
            >
              <div className="lg:col-span-5 order-1">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/30 bg-ink shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/20">
                  <img 
                    src="/assets/image/Fj.png" 
                    alt="Favour Jacobs" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                </div>
              </div>

              <div className="lg:col-span-7 order-2">
                <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 md:mb-12">
                  ABOUT <span className="text-white/20">ME.</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="space-y-6 text-base md:text-lg text-white/60 leading-relaxed">
                    <p>
                      I am Favour Jacobs, a multidisciplinary designer focused on creating immersive digital experiences. 
                      With over 8 years of experience in the Web3 space, I bridge the gap between 
                      complex blockchain technology and human-centric design.
                    </p>
                    <p>
                      My philosophy is rooted in minimalism and high-performance motion. I believe 
                      that every pixel should serve a purpose, and every interaction should feel 
                      intentional.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                    <div>
                      <h4 className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Core Skills</h4>
                      <ul className="space-y-2 text-xs md:text-sm font-bold uppercase tracking-wider">
                        <li>UI/UX Design</li>
                        <li>Web3 Architecture</li>
                        <li>Motion Graphics</li>
                        <li>Brand Identity</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Experience</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm md:text-base font-bold">Lead Designer @ Nexus</p>
                          <p className="text-[10px] md:text-xs text-white/40">2021 — Present</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
