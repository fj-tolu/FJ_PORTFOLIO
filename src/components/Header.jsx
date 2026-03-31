import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when leaving the hero section (approx 80vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Social Media', href: '/social-media' },
    { name: 'Branding', href: '/branding' },
    { name: 'Carousels', href: '/carousels' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href === '#contact') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 py-4',
        isScrolled ? 'bg-obsidian/40 backdrop-blur-xl py-3' : 'bg-transparent'
      )}
    >
      {/* Motion Light Fluid Effect */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 h-[4px] overflow-hidden"
          >
            {/* Primary Fluid Layer */}
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[2px]"
            />
            {/* Secondary Fluid Layer (Slower, different glow) */}
            <motion.div
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-3/4 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[4px]"
            />
            {/* Bottom Glow */}
            <div className="absolute inset-0 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-obsidian flex items-center justify-center font-display font-black text-xl tracking-tighter transition-transform group-hover:rotate-12">
            FJ
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter hidden sm:block">
            FAVOUR JACOBS<span className="text-white/40">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-obsidian px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all flex items-center gap-2 group"
          >
            Download CV
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-obsidian border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-white/60 hover:text-white"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-xl font-display font-medium text-white/60 hover:text-white"
                >
                  {link.name}
                </a>
              )
            ))}
            <a 
              href="https://docs.google.com/document/d/1_QbAwpLr-eMue1oE0xLalB3VjiaD9zt9/edit?usp=sharing&ouid=110684900547059973390&rtpof=true&sd=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-obsidian w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
            >
              Download CV
              <Download size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
