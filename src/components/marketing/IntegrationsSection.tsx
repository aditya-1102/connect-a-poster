
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/5 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-purple/5 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-brand-purple/10 text-brand-purple mb-6">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Connect All Your <span className="text-brand-purple">Social Channels</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Manage multiple social media accounts from one centralized platform with just a few clicks.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-24">
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
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 relative">
            {/* Decorative gradient corners */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand-blue/20 to-transparent rounded-tl-full"></div>
            
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
                {/* Facebook post preview */}
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Facebook size={18} className="text-[#1877F2]" />
                    <span className="text-sm font-medium">Facebook</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-md mb-3 flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-200/50 rounded-full flex items-center justify-center">
                      <Facebook size={20} className="text-[#1877F2]" />
                    </div>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                </div>
                
                {/* Instagram post preview */}
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-white to-pink-50/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Instagram size={18} className="text-[#E4405F]" />
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-md mb-3 flex items-center justify-center">
                    <div className="w-10 h-10 bg-pink-200/50 rounded-full flex items-center justify-center">
                      <Instagram size={20} className="text-[#E4405F]" />
                    </div>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                </div>
                
                {/* LinkedIn post preview */}
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Linkedin size={18} className="text-[#0A66C2]" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-md mb-3 flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-200/50 rounded-full flex items-center justify-center">
                      <Linkedin size={20} className="text-[#0A66C2]" />
                    </div>
                  </div>
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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center">
      <div className={`${bgColor} p-4 rounded-xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  );
};

export default IntegrationsSection;
