
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, ShieldCheck } from 'lucide-react';
import { TRUST_INDICATORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -60, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass border border-white/10 text-purple-400 text-sm font-bold tracking-tight shadow-xl shadow-purple-900/10"
            >
              <Sparkles className="w-4 h-4 animate-pulse text-pink-400" />
              <span>THE FUTURE OF CREATOR GROWTH</span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </motion.span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 font-heading">
            <span className="block text-white opacity-95">RECLAIM YOUR</span>
            <motion.span 
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 via-cyan-400 to-purple-400 bg-[length:200%_auto] block"
            >
              ATTENTION.
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-14 leading-relaxed font-medium">
            ThriveX is an elite growth studio for founders & creators. We engineer 
            <span className="text-white"> high-retention content </span> systems that 
            transform passive scrollers into hyper-engaged loyalists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-12 py-6 bg-purple-600 text-white rounded-2xl font-black text-xl flex items-center space-x-4 transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(147,51,234,0.5)] overflow-hidden"
          >
            <span className="relative z-10">CLAIM YOUR FREE AUDIT</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></div>
            <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20"></div>
          </motion.a>
          
          <motion.a
            href="#results"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)", y: -2 }}
            className="group px-12 py-6 glass text-white rounded-2xl font-bold text-xl hover:bg-white/5 transition-all duration-300 border border-white/10 flex items-center space-x-3"
          >
            <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
            <span>SEE OUR WORK</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12"
        >
          {TRUST_INDICATORS.map((indicator, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center justify-center space-y-2 p-4 rounded-2xl transition-colors hover:bg-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] animate-pulse mb-1"></div>
              <span className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest">{indicator}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Futuristic Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full hidden md:block"
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(255,255,255,0.8)'
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
