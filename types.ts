
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AuditFormData {
  name: string;
  instagramHandle: string;
  niche: string;
  goal: string;
}
