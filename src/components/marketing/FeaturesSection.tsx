
import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Share2, 
  FileText, 
  Lightbulb, 
  Bot, 
  Image as ImageIcon
} from "lucide-react";

const features = [
  {
    icon: <Share2 className="h-10 w-10 text-brand-purple" />,
    title: "Social Media Integration",
    description: "Connect seamlessly with Facebook, Instagram, LinkedIn and more from a single dashboard."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-brand-blue" />,
    title: "Post Management",
    description: "Create, customize, and schedule posts across multiple platforms with intuitive tools."
  },
  {
    icon: <Calendar className="h-10 w-10 text-brand-pink" />,
    title: "Content Calendar",
    description: "Visualize your content strategy with a comprehensive calendar view of scheduled posts."
  },
  {
    icon: <FileText className="h-10 w-10 text-brand-orange" />,
    title: "Post Summary",
    description: "Track engagement and analyze the performance of your posts with detailed reports."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-brand-purple" />,
    title: "Ideas Management",
    description: "Organize content ideas into customizable groups and convert them into posts seamlessly."
  },
  {
    icon: <Bot className="h-10 w-10 text-brand-blue" />,
    title: "AI Post Generation",
    description: "Get intelligent content suggestions and post ideas powered by advanced AI algorithms."
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-brand-pink" />,
    title: "Unsplash Integration",
    description: "Access millions of high-quality, royalty-free images directly within your workspace."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-brand-purple/10 text-brand-purple mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Everything You Need for <span className="text-brand-purple">Social Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our all-in-one platform simplifies your social media workflow from content creation to performance analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-brand-purple/20 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="mb-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
