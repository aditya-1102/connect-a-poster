
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-hero-pattern text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to Transform Your Social Media Strategy?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of businesses that use our platform to grow their audience, increase engagement, and save valuable time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90 text-base px-8 py-6">
            Start Your Free Trial <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-base px-8 py-6">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
