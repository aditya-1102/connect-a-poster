
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-indigo"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 mix-blend-overlay"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 blob-shape bg-white opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 blob-shape bg-white opacity-10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 blob-shape bg-white opacity-5 animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block animate-float mb-6">
          <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm text-white">
            <Sparkles size={16} className="mr-2 text-white" />
            Limited Time Offer
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">
          Ready to Transform Your Social Media Strategy?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto text-white/90">
          Join thousands of businesses that use our platform to grow their audience, increase engagement, and save valuable time.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["14-day free trial", "No credit card required", "Cancel anytime"].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20">
              <CheckCircle size={16} className="text-white" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button size="lg" className="bg-white hover:bg-white/90 text-brand-purple hover:text-brand-indigo transition-colors duration-300 text-base px-8 py-6 shadow-xl shadow-brand-purple/20 rounded-full">
            Start Your Free Trial <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-base px-8 py-6 rounded-full">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
