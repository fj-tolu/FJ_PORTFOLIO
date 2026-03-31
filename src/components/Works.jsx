import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '@/src/constants';

export const Works = () => {
  return (
    <section id="works" className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            SELECTED <br /> <span className="text-white/20">WORKS</span>
          </h2>
          <span className="text-sm font-mono text-white/40 mb-2">001 — 006</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
            >
              <Link to={`/project/${project.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink shadow-2xl">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-mono text-xs tracking-[0.2em] uppercase">View Project</span>
                  </div>
                </div>
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <h3 className="text-xl font-display font-bold mb-1 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 font-mono uppercase tracking-wider">
                    {project.company} — Brand Identity
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
