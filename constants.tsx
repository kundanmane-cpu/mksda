
import React from 'react';
import { 
  Instagram, 
  Video, 
  Calendar, 
  Users, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { ServiceCardProps, PricingPlan, FAQItem } from './types';

export const SERVICES: ServiceCardProps[] = [
  {
    icon: <Instagram className="w-8 h-8 text-pink-500" />,
    title: "Instagram Growth (Organic)",
    description: "We optimize your profile, content, and posting system to increase reach, followers, and profile visits—without bots or fake tactics.",
    tags: ["SEO", "Algorithm", "Engagement"]
  },
  {
    icon: <Video className="w-8 h-8 text-blue-500" />,
    title: "Reels / Shorts Editing",
    description: "High-retention edits with strong hooks, dynamic subtitles, fast pacing, and viral-style cuts built for watch time and shares.",
    tags: ["4K", "Viral Cuts", "Sound Design"]
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-500" />,
    title: "Content Strategy & Calendar",
    description: "We build your content pillars, scripts, and 30-day plan so you always know what to post and why it works.",
    tags: ["Planning", "Scripts", "Automation"]
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-500" />,
    title: "Done-For-You Social Media",
    description: "From ideas to posting—strategy, editing, captions, scheduling, and optimization handled for you.",
    tags: ["Full Management", "Priority Support"]
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Ads Creative",
    description: "High-performing creatives for Meta/Instagram ads to scale what’s already working organically.",
    tags: ["Conversions", "Scaling", "ROI"]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter: Reels Editing",
    price: "₹999",
    features: [
      "8-12 Reels per month",
      "Dynamic subtitles",
      "Pro sound design",
      "1 Revision per Reel",
      "Basic hook strategy"
    ],
    cta: "Get Started"
  },
  {
    name: "Growth: IG System",
    price: "₹3,999",
    recommended: true,
    features: [
      "Profile optimization",
      "Full Content Strategy",
      "12-16 Posts/Month",
      "Weekly optimization calls",
      "Growth tracking dashboard",
      "Caption writing"
    ],
    cta: "Start Growing"
  },
  {
    name: "Pro: Done-For-You",
    price: "₹10,999",
    features: [
      "Everything in Growth",
      "End-to-end management",
      "Daily posting & scheduling",
      "Community management",
      "Advanced monthly reporting",
      "Priority script support"
    ],
    cta: "Book a Strategy Call"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How fast will I see growth?",
    answer: "Most accounts see momentum in 3–6 weeks with consistent posting and optimization. Organic growth is a compounding game."
  },
  {
    question: "Do you guarantee followers?",
    answer: "We don’t promise fake numbers or bot-driven growth. We guarantee a proven system for real organic reach that converts into high-quality followers."
  },
  {
    question: "Do you use bots or follow/unfollow?",
    answer: "Never. We focus 100% on high-retention content and Instagram SEO which builds long-term brand authority."
  },
  {
    question: "Do you handle posting?",
    answer: "Yes, our 'Pro' and custom plans include full posting and scheduling so you can focus entirely on your business."
  }
];

export const TRUST_INDICATORS = [
  "Used by 50+ Creators",
  "Organic growth only",
  "Weekly performance tracking",
  "High-Retention Focused"
];

export const PROCESS_STEPS = [
  {
    title: "Audit & Positioning",
    desc: "We fix your profile, niche clarity, and content direction for maximum conversion."
  },
  {
    title: "Content System",
    desc: "We design your Reels + posts strategy for reach and retention using proven hooks."
  },
  {
    title: "Pro Editing",
    desc: "We turn raw ideas into scroll-stopping content with high-production value."
  },
  {
    title: "Optimize & Scale",
    desc: "Weekly analytics, better hooks, and iterating on what works to explode reach."
  }
];
