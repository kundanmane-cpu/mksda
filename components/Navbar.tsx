
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Services', 
      href: '#services',
      subLinks: [
        { name: 'Instagram Growth', href: '#services' },
        { name: 'Reels Editing', href: '#services' },
        { name: 'Content Strategy', href: '#services' },
        { name: 'Social Management', href: '#services' }
      ]
    },
    { 
      name: 'Pricing', 
      href: '#pricing',
      subLinks: [
        { name: 'Starter Plan', href: '#pricing' },
        { name: 'Growth Plan', href: '#pricing' },
        { name: 'Pro Plan', href: '#pricing' }
      ]
    },
    { 
      name: 'About', 
      href: '#about',
      subLinks: [
        { name: 'Our Vision', href: '#about' },
        { name: 'Process', href: '#process' },
        { name: 'Results', href: '#results' }
      ]
    },
    { 
      name: 'FAQ', 
      href: '#faq',
      subLinks: [
        { name: 'Growth FAQ', href: '#faq' },
        { name: 'Service FAQ', href: '#faq' }
      ]
    },
  ];

  const brandText = "ThriveX";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 group"
        >
          <a href="#home" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold font-heading tracking-tighter text-white flex items-center">
              {brandText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    color: char === 'X' ? ['#a855f7', '#d946ef', '#a855f7'] : ['#ffffff', '#e2e8f0', '#ffffff'],
                    textShadow: char === 'X' ? ['0 0 0px #a855f7', '0 0 10px #a855f7', '0 0 0px #a855f7'] : 'none'
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                className="hidden lg:block ml-3 text-sm font-medium text-slate-400 tracking-normal border-l border-white/20 pl-3"
              >
                Social Media Growth Studio
              </motion.span>
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative py-2"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center space-x-1 group"
              >
                <span>{link.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-purple-400' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </a>

              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-48 glass rounded-2xl p-2 mt-2 shadow-2xl border border-white/10 z-[60]"
                  >
                    <div className="flex flex-col space-y-1">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="text-xs py-2 px-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group/sub"
                        >
                          {sub.name}
                          <motion.span
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                          >
                            →
                          </motion.span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2.5 rounded-full bg-purple-600 text-white font-bold text-sm overflow-hidden group shadow-lg shadow-purple-500/20 animate-pulse-glow"
          >
            <span className="relative z-10">Get Free Audit</span>
            <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl p-6 md:hidden flex flex-col z-[100]"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold font-heading text-white">THRIVE<span className="text-purple-500">X</span></span>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2"><X /></button>
            </div>

            <div className="flex flex-col space-y-6 overflow-y-auto pb-20">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 pb-4">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    className="w-full text-left text-2xl font-bold flex justify-between items-center text-slate-100"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-6 h-6 transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileExpanded === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col space-y-4 pt-4 pl-4"
                      >
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="text-lg text-slate-400"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <motion.a
                href="#audit"
                whileTap={{ scale: 0.98 }}
                className="w-full text-center py-5 rounded-2xl bg-purple-600 text-white font-bold text-xl relative overflow-hidden shadow-2xl shadow-purple-500/30"
                onClick={() => setMobileOpen(false)}
              >
                <span className="relative z-10">Get Free Audit</span>
                <div className="absolute inset-0 animate-shimmer opacity-30"></div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
