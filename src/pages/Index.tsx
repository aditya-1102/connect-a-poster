
import React from 'react';
import NavBar from '@/components/marketing/NavBar';
import HeroSection from '@/components/marketing/HeroSection';
import FeaturesSection from '@/components/marketing/FeaturesSection';
import IntegrationsSection from '@/components/marketing/IntegrationsSection';
import DemoSection from '@/components/marketing/DemoSection';
import PricingSection from '@/components/marketing/PricingSection';
import TestimonialsSection from '@/components/marketing/TestimonialsSection';
import CtaSection from '@/components/marketing/CtaSection';
import Footer from '@/components/marketing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        <DemoSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
