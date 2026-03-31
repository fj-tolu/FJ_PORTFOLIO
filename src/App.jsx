import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Contact } from './components/Contact';
import { AboutModal } from './components/AboutModal';
import { BackgroundGraphics } from './components/BackgroundGraphics';
import { LoadingScreen } from './components/LoadingScreen';
import { SectionSeparator } from './components/SectionSeparator';
import { SocialMedia, Branding, CarouselsPage } from './pages/Categories';
import { User } from 'lucide-react';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <SectionSeparator />
    <SocialMediaSection />
  </motion.div>
);

const AppContent = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative">
      <LoadingScreen />
      <BackgroundGraphics />
      <Header />
      
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/carousels" element={<CarouselsPage />} />
        </Routes>
      </AnimatePresence>

      <SectionSeparator className="mt-20" />
      <Contact />

      {/* Persistent Floating About Button */}
      <button
        onClick={() => setIsAboutOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white text-obsidian py-4 px-2 md:py-6 md:px-3 rounded-l-xl md:rounded-l-2xl flex flex-col items-center gap-3 md:gap-4 hover:pr-6 transition-all duration-300 group"
      >
        <User size={16} className="md:w-5 md:h-5" />
        <span className="[writing-mode:vertical-rl] font-bold uppercase tracking-widest text-[8px] md:text-xs">
          About Me
        </span>
      </button>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
