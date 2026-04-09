import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const PROJECTS = [
  {
    id: "agrogrid-branding",
    title: "Agrogrid Tech",
    company: "Agrogrid",
    slug: "agrogrid",
    description: "Agricultural technology solutions and digital branding.",
    thumbnail: "assets/image/agrogrid/thumbnail/1.jpg",
    gallery: [
      "assets/image/agrogrid/thumbnail/1.jpg",
      "assets/image/agrogrid/thumbnail/2.jpg",
      "assets/image/agrogrid/thumbnail/3.jpg",
      "assets/image/agrogrid/thumbnail/4.jpg",
      "assets/image/agrogrid/thumbnail/5.jpg",
      "assets/image/agrogrid/thumbnail/6.jpg",
      "assets/image/agrogrid/thumbnail/7.jpg",
      "assets/image/agrogrid/thumbnail/8.jpg",
    ],
    category: 'social',
  },
  {
    id: "mk-realty-listings",
    title: "MK Realty",
    company: "MK-realty",
    slug: "mk-realty",
    description: "Premium property listings and real estate marketing.",
    thumbnail: "assets/image/mk-realty/thumbnail/1.jpg",
    gallery: [
      "assets/image/mk-realty/thumbnail/2.jpg",
      "assets/image/mk-realty/thumbnail/3.jpg",
      "assets/image/mk-realty/thumbnail/4.jpg",
      "assets/image/mk-realty/thumbnail/5.jpg",
    ],
    category: 'social',
  },
  {
    id: "car-dealer-social",
    title: "Car Dealer",
    company: "Car-dealer",
    slug: "car-dealer",
    description: "Automotive dealership promotions and social media content.",
    thumbnail: "assets/image/car-dealer/thumbnail/1.jpg",
    gallery: [
      "assets/image/car-dealer/thumbnail/2.jpg",
      "assets/image/car-dealer/thumbnail/3.jpg",
      "assets/image/car-dealer/thumbnail/4.jpg",
    ],
    category: 'social',
  },
  {
    id: "solar-tech-identity",
    title: "Solar Tech",
    company: "Solar Tech",
    slug: "solar-tech",
    description: "Sustainable energy technology branding and visual identity.",
    thumbnail: "assets/image/solar-tech/thumbnail/1.jpg",
    gallery: [
      "assets/image/solar-tech/thumbnail/2.jpg",
      "assets/image/solar-tech/thumbnail/3.jpg",
      "assets/image/solar-tech/thumbnail/4.jpg",
      "assets/image/solar-tech/thumbnail/5.jpg",
    ],
    category: 'social',
  },
  {
    id: "itsa-social",
    title: "ITSA Association",
    company: "ITSA",
    slug: "itsa",
    description: "Information Technology Student Association community engagement.",
    thumbnail: "assets/image/itsa/thumbnail/1.jpg",
    gallery: [
      "assets/image/itsa/thumbnail/2.jpg",
      "assets/image/itsa/thumbnail/3.jpg",
      "assets/image/itsa/thumbnail/4.jpg",
      "assets/image/itsa/thumbnail/5.jpg",
    ],
    category: 'social',
  },
  {
    id: "sales-flyers",
    title: "Brand Sales",
    company: "Sales",
    slug: "sales",
    description: "Diverse sales flyers and promotional materials for various brands.",
    thumbnail: "assets/image/sales/thumbnail/1.jpg",
    gallery: [
      "assets/image/sales/thumbnail/2.jpg",
      "assets/image/sales/thumbnail/3.jpg",
      "assets/image/sales/thumbnail/4.jpg",
      "assets/image/sales/thumbnail/5.jpg",
    ],
    category: 'social',
  },
  {
    id: "school-educational",
    title: "School Designs",
    company: "School",
    slug: "school",
    description: "Educational flyers and school-related branding materials.",
    thumbnail: "assets/image/school/thumbnail/1.jpg",
    gallery: [
      "assets/image/school/thumbnail/2.jpg",
      "assets/image/school/thumbnail/3.jpg",
      "assets/image/school/thumbnail/4.jpg",
      "assets/image/school/thumbnail/5.jpg",
    ],
    category: 'social',
  },
  {
    id: "church-designs",
    title: "Church Outreach",
    company: "Church",
    slug: "church",
    description: "Visual designs and promotional materials for church-related tasks.",
    thumbnail: "assets/image/church/thumbnail/1.jpg",
    gallery: [
      "assets/image/church/thumbnail/2.jpg",
      "assets/image/church/thumbnail/3.jpg",
      "assets/image/church/thumbnail/4.jpg",
      "assets/image/church/thumbnail/5.jpg",
    ],
    category: 'social',
  },
];

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-white/40 hover:text-white transition-colors">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Works
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest">Graphic Design</span>
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest">Branding</span>
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest">2025</span>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="h-px w-full bg-white/10 mb-8" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-mono text-white/40">Role: Lead Designer</span>
              <a href="#" className="flex items-center gap-2 font-bold hover:text-white/60 transition-colors">
                Live Site <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "relative overflow-hidden bg-ink",
                i % 3 === 0 ? "md:col-span-2 aspect-video" : "aspect-square"
              )}
            >
              <img
                src={img}
                alt={`${project.title} gallery ${i}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
