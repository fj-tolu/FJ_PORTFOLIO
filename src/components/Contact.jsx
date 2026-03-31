import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, Github, ArrowUpRight, Facebook, Youtube, MessageCircle, Send } from 'lucide-react';

const XIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              LET'S START <br /> A <span className="text-white/20">PROJECT.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-md mb-12">
              Currently accepting new commissions and collaborations for 2026. 
              Let's build something exceptional together.
            </p>
            
            <a 
              href="mailto:thefavourjacobs@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-3xl font-display font-bold hover:text-white/60 transition-colors group"
            >
              thefavourjacobs@gmail.com
              <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:items-end gap-12"
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: Mail, href: "mailto:thefavourjacobs@gmail.com" },
                { icon: XIcon, href: "https://x.com/favour30312" },
                { icon: Instagram, href: "https://www.instagram.com/thefavouredone_30/" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UChNMvtp9uyGMIWPRIODC_MA/" },
                { icon: MessageCircle, href: "https://wa.me/+2349121606821" },
                { icon: Github, href: "https://github.com/fj-tolu" },
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-obsidian transition-all duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            
            <div className="text-sm font-mono text-white/20 uppercase tracking-[0.2em] text-right">
              © 2026 Favour Jacobs Design Studio <br />
              All Rights Reserved
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
