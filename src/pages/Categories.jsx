import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SectionSeparator } from '../components/SectionSeparator';

const PROJECTS = [
  {
    id: "agrogrid-branding",
    title: "Agrogrid Tech",
    company: "Agrogrid",
    slug: "agrogrid",
    description: "Agricultural technology solutions and digital branding.",
    flyers: [
      "/assets/image/agrogrid/thumbnail/1.jpg",
      "/assets/image/agrogrid/thumbnail/2.jpg",
      "/assets/image/agrogrid/thumbnail/3.jpg",
      "/assets/image/agrogrid/thumbnail/4.jpg",
      "/assets/image/agrogrid/thumbnail/5.jpg",
      "/assets/image/agrogrid/thumbnail/6.jpg",
    ],
    carousel: [
      "/assets/image/agrogrid/carousel/1.jpg",
      "/assets/image/agrogrid/carousel/2.jpg",
      "/assets/image/agrogrid/carousel/3.jpg",
      "/assets/image/agrogrid/carousel/4.jpg",
      "/assets/image/agrogrid/carousel/5.jpg",
      "/assets/image/agrogrid/carousel/6.jpg",
      "/assets/image/agrogrid/carousel/7.jpg",
      "/assets/image/agrogrid/carousel/8.jpg",
      "/assets/image/agrogrid/carousel/9.jpg",
      "/assets/image/agrogrid/carousel/10.jpg",
    ],
    category: 'social',
  },
  {
    id: "itsa-social",
    title: "ITSA Association",
    company: "ITSA",
    slug: "itsa",
    description: "Information Technology Student Association community engagement.",
    flyers: [
      "/assets/image/itsa/thumbnail/1.jpg",
      "/assets/image/itsa/thumbnail/2.jpg",
      "/assets/image/itsa/thumbnail/3.jpg",
      "/assets/image/itsa/thumbnail/4.jpg",
    ],
    category: 'social',
  },
  {
    id: "mk-realty-listings",
    title: "MK Realty",
    company: "MK-realty",
    slug: "mk-realty",
    description: "Premium property listings and real estate marketing.",
    flyers: [
      "/assets/image/mk-realty/thumbnail/1.jpg",
      "/assets/image/mk-realty/thumbnail/2.jpg",
    ],
    category: 'social',
  },
  {
    id: "car-dealer-social",
    title: "Car Dealer",
    company: "Car-dealer",
    slug: "car-dealer",
    description: "Automotive dealership promotions and social media content.",
    flyers: [
      "/assets/image/car-dealer/thumbnail/1.jpg",
      "/assets/image/car-dealer/thumbnail/2.jpg",
    ],
    category: 'social',
  },
  // {
  //   id: "solar-tech-identity",
  //   title: "Solar Tech",
  //   company: "Solar Tech",
  //   slug: "solar-tech",
  //   description: "Sustainable energy technology branding and visual identity.",
  //   flyers: [
  //     "https://picsum.photos/seed/solar-1/800/800",
  //     "https://picsum.photos/seed/solar-2/800/800",
  //     "https://picsum.photos/seed/solar-3/800/800",
  //   ],
  //   category: 'social',
  // },
  {
    id: "sales-flyers",
    title: "Brand Sales",
    company: "Sales",
    slug: "sales",
    description: "Diverse sales flyers and promotional materials for various brands.",
    flyers: [
      "/assets/image/sales/thumbnail/1.jpg",
      "/assets/image/sales/thumbnail/2.jpg",
      "/assets/image/sales/thumbnail/3.jpg",
      "/assets/image/sales/thumbnail/4.jpg",
      "/assets/image/sales/thumbnail/5.jpg",
      "/assets/image/sales/thumbnail/6.jpg",
      "/assets/image/sales/thumbnail/7.jpg",
      "/assets/image/sales/thumbnail/8.jpg",
    ],
    category: 'social',
  },
  {
    id: "school-educational",
    title: "School Designs",
    company: "School",
    slug: "school",
    description: "Educational flyers and school-related branding materials.",
    flyers: [
      "/assets/image/school/thumbnail/1.jpg",
      "/assets/image/school/thumbnail/2.jpg",
      "/assets/image/school/thumbnail/3.jpg",
      "/assets/image/school/thumbnail/4.jpg",
      "/assets/image/school/thumbnail/5.jpg",
      "/assets/image/school/thumbnail/6.jpg",
      "/assets/image/school/thumbnail/7.jpg",
      "/assets/image/school/thumbnail/8.jpg",
    ],
    category: 'social',
  },
  {
    id: "church-designs",
    title: "Church Outreach",
    company: "Church",
    slug: "church",
    description: "Visual designs and promotional materials for church-related tasks.",
    flyers: [
      "/assets/image/church/thumbnail/1.jpg",
      "/assets/image/church/thumbnail/2.jpg",
      "/assets/image/church/thumbnail/3.jpg",
      "/assets/image/church/thumbnail/4.jpg",
      "/assets/image/church/thumbnail/5.jpg",
      "/assets/image/church/thumbnail/6.jpg",
      "/assets/image/church/thumbnail/7.jpg",
      "/assets/image/church/thumbnail/8.jpg",
    ],
    carousel: [
      "/assets/image/church/carousel/1.png",
      "/assets/image/church/carousel/2.png",
      "/assets/image/church/carousel/3.png",
      "/assets/image/church/carousel/4.png",
      "/assets/image/church/carousel/5.png",
      "/assets/image/church/carousel/6.jpg",
      "/assets/image/church/carousel/7.jpg",
      "/assets/image/church/carousel/8.jpg",
      "/assets/image/church/carousel/9.jpg",
      "/assets/image/church/carousel/10.jpg",
    ],
    category: 'social',
  },
];

const ProjectGrid = ({ category, title, subtitle }) => {
  const filteredProjects = PROJECTS.filter(p => p.category === category);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4 block">{subtitle}</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85]">
              {title.split(' ')[0]} <br />
              <span className="text-white/10">{title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
          <p className="max-w-md text-white/40 text-lg leading-relaxed">
            A curated selection of {title.toLowerCase()} projects, focusing on high-impact visuals and strategic brand positioning.
          </p>
        </div>

        <div className="space-y-32">
          {filteredProjects.map((project, index) => (
            <React.Fragment key={project.id}>
              {index > 0 && <SectionSeparator className="opacity-30" />}
              <motion.div 
                id={project.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="pt-16 scroll-mt-32"
              >
                <div className="mb-12">
                  <h2 className="text-4xl font-display font-bold mb-2">{project.title}</h2>
                  <p className="text-white/40 font-mono uppercase tracking-widest mb-6">{project.company}</p>
                  <p className="max-w-2xl text-white/60 leading-relaxed">{project.description}</p>
                </div>
                
                {/* Flyers Grid */}
                <div className="mb-16">
                  <h3 className="text-sm font-mono text-white/30 uppercase tracking-[0.3em] mb-8">Social Media Flyers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {project.flyers.map((img, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className=" overflow-hidden bg-ink shadow-2xl"
                      >
                        <img
                          src={img}
                          alt={`${project.title} flyer ${i}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Carousel Section (only if images exist) */}
                {project.carousel && project.carousel.length > 0 && (
                  <div>
                    <h3 className="text-sm font-mono text-white/30 uppercase tracking-[0.3em] mb-8">Carousel Slides</h3>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {project.carousel.map((img, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className=" overflow-hidden bg-ink shadow-2xl"
                        >
                          <img
                            src={img}
                            alt={`${project.title} carousel ${i}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SocialMedia = () => (
  <ProjectGrid category="social" title="SOCIAL MEDIA" subtitle="Content Strategy" />
);

export const Branding = () => (
  <ProjectGrid category="branding" title="BRAND IDENTITY" subtitle="Visual Systems" />
);

export const CarouselsPage = () => (
  <ProjectGrid category="social" title="CAROUSELS" subtitle="Multi-slide Content" />
);
