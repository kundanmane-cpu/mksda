
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 relative" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 font-heading"
          >
            Simple Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Scale your brand with a plan that fits your current growth stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-[32px] border ${
                plan.recommended 
                ? 'border-purple-500 bg-purple-500/5 shadow-2xl shadow-purple-500/10' 
                : 'border-white/5 bg-slate-900/30 hover:border-white/10'
              } flex flex-col transition-all duration-500 hover:translate-y-[-8px] group`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg animate-pulse">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 font-heading text-slate-100">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 text-sm">/month</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#audit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all relative overflow-hidden flex items-center justify-center ${
                  plan.recommended 
                  ? 'bg-purple-600 text-white animate-pulse-glow shadow-lg shadow-purple-600/30' 
                  : 'bg-white text-slate-950 hover:bg-slate-200 shadow-xl'
                }`}
              >
                <span className="relative z-10">{plan.cta}</span>
                {plan.recommended && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></div>
                )}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
};

export default Pricing;
