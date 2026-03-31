import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MARQUEE_IMAGES = [
  { id: 1, url: "https://picsum.photos/seed/m1/600/600" },
  { id: 2, url: "https://picsum.photos/seed/m2/600/600" },
  { id: 3, url: "https://picsum.photos/seed/m3/600/600" },
  { id: 4, url: "https://picsum.photos/seed/m4/600/600" },
  { id: 5, url: "https://picsum.photos/seed/m5/600/600" },
  { id: 6, url: "https://picsum.photos/seed/m6/600/600" },
  { id: 7, url: "https://picsum.photos/seed/m7/600/600" },
  { id: 8, url: "https://picsum.photos/seed/m8/600/600" },
  { id: 9, url: "https://picsum.photos/seed/m9/600/600" },
  { id: 10, url: "https://picsum.photos/seed/m10/600/600" },
  { id: 11, url: "https://picsum.photos/seed/m11/600/600" },
  { id: 12, url: "https://picsum.photos/seed/m12/600/600" },
];

const MarqueeRow = ({ images, reverse = false, speed = 40 }) => {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        animate={{ x: reverse ? [0, -100 + "%"] : [-100 + "%", 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-none"
      >
        {[...images, ...images].map((img, i) => (
          <div key={`${img.id}-${i}`} className="w-[200px] md:w-[300px] aspect-square flex-none px-1">
            <motion.img
              whileHover={{ scale: 1.05, zIndex: 10 }}
              src={img.url}
              alt="Marquee"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500 shadow-xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const MarqueeWall = () => {
  // Split images into 3 rows
  const row1 = MARQUEE_IMAGES.slice(0, 8);
  const row2 = MARQUEE_IMAGES.slice(8, 16);
  const row3 = MARQUEE_IMAGES.slice(16, 24);

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
          <span className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4 block">Motion Design</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            CAROUSELS <br /> <span className="text-white/20">COLLECTION</span>
          </h2>
        </div>
        <Link 
          to="/carousels" 
          className="group flex items-center gap-2 md:gap-3 bg-white/5 hover:bg-white text-white hover:text-obsidian px-5 py-3 md:px-8 md:py-4 rounded-full transition-all duration-500 shrink-0"
        >
          <span className="font-bold uppercase tracking-widest text-[10px] md:text-sm whitespace-nowrap">View More</span>
          <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="flex flex-col gap-12">
        <MarqueeRow images={row1} speed={50} />
        <MarqueeRow images={row2} reverse speed={60} />
        <MarqueeRow images={row3} speed={45} />
      </div>
    </section>
  );
};
