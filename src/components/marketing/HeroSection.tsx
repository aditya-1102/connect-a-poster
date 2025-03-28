
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
      {/* Decorative elements */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] blob-shape bg-brand-purple/10 mix-blend-multiply filter blur-[80px] opacity-70 animate-spin-slow"></div>
      <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] blob-shape bg-brand-blue/10 mix-blend-multiply filter blur-[80px] opacity-70 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-[300px] h-[300px] blob-shape bg-brand-pink/10 mix-blend-multiply filter blur-[80px] opacity-50 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block animate-float">
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 text-brand-purple mb-6 backdrop-blur-sm">
              <Sparkles size={16} className="mr-2 text-brand-purple" />
              Social Media Management Simplified
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Master Your <span className="soft-gradient-text">Social Presence</span> with One Platform
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Connect all your social channels, create & schedule content, and analyze performance with our all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-brand-purple to-brand-indigo text-white hover:opacity-90 transition-all duration-300 text-base px-8 py-6 shadow-lg shadow-brand-purple/20 rounded-full">
              Start Free Trial <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-slate-700 border-slate-300 hover:border-brand-purple/50 hover:bg-brand-purple/5 text-base px-8 py-6 rounded-full">
              <Play size={18} className="mr-2 text-brand-purple" /> Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 transform -rotate-1 rounded-2xl"></div>
          <div className="relative overflow-hidden border border-slate-200/60 shadow-2xl rounded-2xl glass-card">
            <div className="bg-slate-800 h-10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex border-b">
                  <div className="w-1/4 border-r p-4">
                    <div className="h-8 bg-brand-purple/10 rounded-md w-4/5 mb-4"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 rounded-md bg-brand-purple/5 border-l-2 border-brand-purple">
                        <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4 p-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 p-3 rounded-lg border border-brand-blue/20">
                        <div className="h-32 bg-brand-blue/10 rounded-md mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                      </div>
                      <div className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 p-3 rounded-lg border border-brand-purple/20">
                        <div className="h-32 bg-brand-purple/10 rounded-md mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                      </div>
                      <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 p-3 rounded-lg border border-brand-orange/20">
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
          
          {/* Floating elements */}
          <div className="absolute -right-8 top-1/4 bg-white rounded-xl shadow-xl p-3 animate-float glass-card" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
              <div className="text-sm font-medium">Post published!</div>
            </div>
          </div>
          <div className="absolute -left-12 bottom-1/4 bg-white rounded-xl shadow-xl p-3 animate-float glass-card" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center text-white">+</div>
              <div className="text-sm font-medium">New engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
