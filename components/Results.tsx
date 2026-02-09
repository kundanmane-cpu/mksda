
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MessageSquare } from 'lucide-react';

const Results: React.FC = () => {
  const stats = [
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      value: "3–10x", 
      label: "Views Increase", 
      desc: "Average growth in Reel reach within first 60 days." 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      value: "85%", 
      label: "Higher Retention", 
      desc: "Improved watch time with our hook-focused editing system." 
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      value: "Inbound", 
      label: "Lead Systems", 
      desc: "Turning viewers into qualified DMs and appointments." 
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-950 to-purple-900/10">
      <div className="container mx-auto px-6">
        <div className="glass p-12 rounded-[40px] border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 text-purple-400 mb-6">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2 font-heading tracking-tighter text-white">
                  {stat.value}
                </div>
                <div className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">
                  {stat.label}
                </div>
                <p className="text-slate-400 text-sm">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
