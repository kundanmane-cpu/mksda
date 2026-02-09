
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Built for the Attention Economy</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                ThriveX is a social media growth studio built for the modern attention economy. 
                We don't chase vanity metrics like likes or comments that don't convert.
              </p>
              <p>
                We build systems that grow audiences and drive real business results. Whether you're a founder looking for inbound leads or a creator building a personal brand, we help you win on Instagram using high-retention content and smart execution.
              </p>
              <p className="text-white font-medium italic">
                "Growth isn't random. It's a system."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden glass border border-white/10 p-2">
              <img 
                src="https://picsum.photos/seed/thrivex-about/800/800" 
                alt="Studio Visual" 
                className="w-full h-full object-cover rounded-[32px] opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border border-purple-500/30 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold">TX</div>
                <div>
                  <div className="text-white font-bold">10M+</div>
                  <div className="text-slate-400 text-xs">Views Generated</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
