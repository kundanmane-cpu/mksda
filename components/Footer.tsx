
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <a href="#home" className="text-3xl font-bold font-heading tracking-tighter text-white group">
                THRIVE<span className="text-purple-500 group-hover:animate-pulse">X</span>
              </a>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              The social media growth studio for creators who prioritize real results over vanity metrics. 
              High-retention editing meets data-driven strategy.
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-500 transition-colors"><Instagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-500 transition-colors"><Twitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-500 transition-colors"><Linkedin /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-heading uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Reels Editing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Instagram Growth</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Content Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ghostwriting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-heading uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#audit" className="hover:text-white transition-colors">Free Audit</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-slate-600 text-xs uppercase tracking-widest font-bold">
          <div>© 2024 THRIVEX STUDIO. ALL RIGHTS RESERVED.</div>
          <div className="mt-4 md:mt-0">DESIGNED FOR THE ATTENTION ECONOMY</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
