import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: "agrogrid-branding",
    title: "Agrogrid Tech",
    company: "Agrogrid",
    slug: "agrogrid",
    description: "Agricultural technology solutions and digital branding.",
    thumbnail: "/assets/image/agrogrid/thumbnail/1.jpg",
    category: 'social',
  },
  
  {
    id: "car-dealer-social",
    title: "Car Dealer",
    company: "Car-dealer",
    slug: "car-dealer",
    description: "Automotive dealership promotions and social media content.",
    thumbnail: "/assets/image/car-dealer/thumbnail/1.jpg",
    category: 'social',
  },
  
  {
    id: "itsa-social",
    title: "ITSA Association",
    company: "ITSA",
    slug: "itsa",
    description: "Information Technology Student Association community engagement.",
    thumbnail: "/assets/image/itsa/thumbnail/1.jpg",
    category: 'social',
  },
  {
    id: "sales-flyers",
    title: "Brand Sales",
    company: "Sales",
    slug: "sales",
    description: "Diverse sales flyers and promotional materials for various brands.",
    thumbnail: "/assets/image/sales/thumbnail/1.jpg",
    category: 'social',
  },
  {
    id: "school-educational",
    title: "School Designs",
    company: "School",
    slug: "school",
    description: "Educational flyers and school-related branding materials.",
    thumbnail: "/assets/image/school/thumbnail/1.jpg",
    category: 'social',
  },
  {
    id: "church-designs",
    title: "Church Outreach",
    company: "Church",
    slug: "church",
    description: "Visual designs and promotional materials for church-related tasks.",
    thumbnail: "/assets/image/church/thumbnail/1.jpg",
    category: 'social',
  },
];

export const SocialMediaSection = () => {
  const socialProjects = PROJECTS.filter(p => p.category === 'social');

  return (
    <section id="social-media" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4 block">Flyer Design</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              SOCIAL MEDIA <br /> <span className="text-white/20">CAMPAIGNS</span>
            </h2>
          </div>
          <Link 
            to="/social-media" 
            className="group flex items-center gap-2 md:gap-3 bg-white/5 hover:bg-white text-white hover:text-obsidian px-5 py-3 md:px-8 md:py-4 rounded-full transition-all duration-500 shrink-0"
          >
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-sm whitespace-nowrap">View More</span>
            <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {socialProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.5, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
            >
              <Link to={`/social-media#${project.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(255,255,255,0.1)] group-hover:-translate-y-2">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-mono text-xs tracking-[0.3em] uppercase">View Designs</span>
                      <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <h3 className="text-xl font-display font-bold mb-1 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 font-mono uppercase tracking-wider">
                    {project.company}
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
