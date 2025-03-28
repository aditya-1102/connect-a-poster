
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 px-4 bg-feature-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Connect All Your Social Channels</h2>
          <p className="section-subtitle">
            Manage multiple social media accounts from one centralized platform with just a few clicks.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <IntegrationCard 
            icon={<Facebook size={40} className="text-[#1877F2]" />} 
            name="Facebook" 
            bgColor="bg-blue-50" 
          />
          <IntegrationCard 
            icon={<Instagram size={40} className="text-[#E4405F]" />} 
            name="Instagram" 
            bgColor="bg-pink-50" 
          />
          <IntegrationCard 
            icon={<Twitter size={40} className="text-[#1DA1F2]" />} 
            name="Twitter" 
            bgColor="bg-blue-50" 
          />
          <IntegrationCard 
            icon={<Linkedin size={40} className="text-[#0A66C2]" />} 
            name="LinkedIn" 
            bgColor="bg-blue-50" 
          />
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Streamlined Workflow For Multiple Platforms</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Create once, customize for each platform, and publish everywhere—all from a single dashboard.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">All Channels</div>
                <div className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Facebook size={16} className="text-[#1877F2]" /> Facebook
                </div>
                <div className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Instagram size={16} className="text-[#E4405F]" /> Instagram
                </div>
                <div className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Twitter size={16} className="text-[#1DA1F2]" /> Twitter
                </div>
                <div className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Linkedin size={16} className="text-[#0A66C2]" /> LinkedIn
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Facebook size={18} className="text-[#1877F2]" />
                    <span className="text-sm font-medium">Facebook</span>
                  </div>
                  <div className="h-40 bg-slate-100 rounded-md mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Instagram size={18} className="text-[#E4405F]" />
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                  <div className="h-40 bg-slate-100 rounded-md mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Linkedin size={18} className="text-[#0A66C2]" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <div className="h-40 bg-slate-100 rounded-md mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationCard = ({ icon, name, bgColor }: { icon: React.ReactNode; name: string; bgColor: string }) => {
  return (
    <div className="feature-card flex flex-col items-center p-8 hover:scale-105 transition-transform duration-300">
      <div className={`${bgColor} p-4 rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default IntegrationsSection;
