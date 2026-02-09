
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950/50" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 font-heading"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Strategic solutions designed to capture attention and drive sustainable growth for modern creators.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0 20px 40px -20px rgba(139, 92, 246, 0.3)",
                borderColor: "rgba(168, 85, 247, 0.4)"
              }}
              className="p-8 rounded-3xl glass border border-white/5 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Animated Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <motion.div 
                className="mb-6 p-4 rounded-2xl bg-slate-900 w-fit relative z-10 border border-white/5"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    filter: ["drop-shadow(0 0 0px transparent)", "drop-shadow(0 0 8px currentColor)", "drop-shadow(0 0 0px transparent)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 font-heading relative z-10 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tags?.map((tag) => (
                  <motion.span 
                    key={tag} 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#fff" }}
                    className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
