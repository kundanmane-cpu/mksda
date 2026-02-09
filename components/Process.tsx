
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">How ThriveX Grows Your Account</h2>
          <p className="text-slate-400">Our structured system for turning profiles into conversion machines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent -z-10"></div>
              )}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 h-full">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-6 text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
