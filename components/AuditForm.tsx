
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, Instagram, Target, User } from 'lucide-react';
import { AuditFormData } from '../types';

const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    instagramHandle: '',
    niche: '',
    goal: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const inputFields = [
    { label: 'Full Name', key: 'name', icon: <User className="w-4 h-4" />, placeholder: 'Jane Doe' },
    { label: 'Instagram Handle', key: 'instagramHandle', icon: <Instagram className="w-4 h-4" />, placeholder: '@username' },
    { label: 'Your Niche', key: 'niche', icon: <Target className="w-4 h-4" />, placeholder: 'e.g. SaaS, Fitness' }
  ];

  return (
    <div className="py-24 bg-slate-950 relative overflow-hidden" id="audit">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass rounded-[40px] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <div className="md:w-2/5 p-12 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute rotate-12 scale-150 top-0 left-0">
                <Instagram className="w-64 h-64 text-white" />
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading leading-tight">Get a Free <br/>Social Audit</h2>
                <p className="text-purple-100/80 mb-8 text-lg">
                  We'll manually analyze your profile and give you a custom growth roadmap. 100% free.
                </p>
                <ul className="space-y-6">
                  {[
                    "Bio & Profile Optimization",
                    "Content Hook Analysis",
                    "Competitor Research",
                    "Personalized Growth Strategy"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-400/20 text-green-300 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="text-sm font-bold tracking-tighter uppercase opacity-60 italic">ThriveX Systems</div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-purple-600 bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-8 lg:p-16 bg-slate-900/40 backdrop-blur-xl relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="w-24 h-24 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                  >
                    <CheckCircle2 className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-4 font-heading text-white">Analysis Started!</h3>
                  <p className="text-slate-400 text-lg mb-8 max-w-sm">
                    Awesome, {formData.name}! Our growth team is now looking at <span className="text-purple-400 font-bold">{formData.instagramHandle}</span>. Expect your audit in 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 glass text-purple-400 font-bold rounded-2xl hover:bg-white/5 transition-all border border-purple-500/30"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {inputFields.slice(0, 2).map((field) => (
                      <div key={field.key} className="relative">
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${focusedField === field.key ? 'text-purple-400' : 'text-slate-500'}`}>
                          {field.label}
                        </label>
                        <div className={`relative transition-all duration-300 ${focusedField === field.key ? 'scale-[1.02]' : ''}`}>
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                            {field.icon}
                          </div>
                          <input 
                            required
                            type="text"
                            onFocus={() => setFocusedField(field.key)}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all shadow-inner"
                            placeholder={field.placeholder}
                            value={(formData as any)[field.key]}
                            onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <label className={`block text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${focusedField === 'niche' ? 'text-purple-400' : 'text-slate-500'}`}>
                      Target Niche
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'niche' ? 'scale-[1.01]' : ''}`}>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                        <Target className="w-4 h-4" />
                      </div>
                      <input 
                        required
                        type="text"
                        onFocus={() => setFocusedField('niche')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all shadow-inner"
                        placeholder="e.g. Fitness Coach, Tech Founder"
                        value={formData.niche}
                        onChange={e => setFormData({...formData, niche: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className={`block text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${focusedField === 'goal' ? 'text-purple-400' : 'text-slate-500'}`}>
                      Main Goal for Next 90 Days
                    </label>
                    <textarea 
                      required
                      rows={4}
                      onFocus={() => setFocusedField('goal')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none shadow-inner"
                      placeholder="Tell us what you want to achieve (leads, followers, authority...)"
                      value={formData.goal}
                      onChange={e => setFormData({...formData, goal: e.target.value})}
                    ></textarea>
                  </div>

                  <motion.button 
                    disabled={loading}
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-white text-slate-950 font-bold rounded-2xl hover:bg-purple-100 transition-all flex items-center justify-center space-x-3 disabled:opacity-50 relative overflow-hidden group shadow-2xl"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span className="relative z-10 text-lg">Secure Free Audit</span>
                        <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-slate-500 text-xs font-medium">
                    Privacy first. Your data is encrypted and only used for your growth audit.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditForm;
