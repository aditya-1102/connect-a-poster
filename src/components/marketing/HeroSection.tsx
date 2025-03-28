
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block animate-float">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-brand-purple/10 text-brand-purple mb-6">
              <span className="inline-block w-2 h-2 bg-brand-purple rounded-full mr-2"></span>
              Social Media Management Simplified
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Master Your <span className="gradient-text">Social Presence</span> with One Platform
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Connect all your social channels, create & schedule content, and analyze performance with our all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 shadow-lg shadow-brand-purple/20 rounded-full">
              Start Free Trial <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full">
              <Play size={18} className="mr-2" /> Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 transform -rotate-1 rounded-2xl"></div>
          <div className="relative overflow-hidden border border-slate-200/60 shadow-2xl rounded-2xl">
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
          <div className="absolute -right-8 top-1/4 bg-white rounded-lg shadow-xl p-2 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
              <div className="text-sm font-medium">Post published!</div>
            </div>
          </div>
          <div className="absolute -left-12 bottom-1/4 bg-white rounded-lg shadow-xl p-2 animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">+</div>
              <div className="text-sm font-medium">New engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
