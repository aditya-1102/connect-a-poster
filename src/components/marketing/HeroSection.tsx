
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32">
      {/* Background gradient elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Simplify Your <span className="gradient-text">Social Media</span> Management
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Connect all your social channels, create & schedule posts, and analyze performance—all from one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6">
              Get Started <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-slate-800 h-10 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex border-b">
                <div className="w-1/4 border-r p-4">
                  <div className="h-8 bg-brand-purple/10 rounded-md w-4/5 mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-2/3"></div>
                </div>
                <div className="w-3/4 p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-brand-blue/5 p-3 rounded-lg border border-brand-blue/20">
                      <div className="h-32 bg-brand-blue/10 rounded-md mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                    </div>
                    <div className="bg-brand-purple/5 p-3 rounded-lg border border-brand-purple/20">
                      <div className="h-32 bg-brand-purple/10 rounded-md mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                    </div>
                    <div className="bg-brand-orange/5 p-3 rounded-lg border border-brand-orange/20">
                      <div className="h-32 bg-brand-orange/10 rounded-md mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
