
import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Share2, 
  FileText, 
  Lightbulb, 
  Bot, 
  Image
} from "lucide-react";

const features = [
  {
    icon: <Share2 className="h-8 w-8 text-brand-purple" />,
    title: "Social Media Integration",
    description: "Connect seamlessly with Facebook, Instagram, LinkedIn and more from a single dashboard."
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-brand-blue" />,
    title: "Post Management",
    description: "Create, customize, and schedule posts across multiple platforms with intuitive tools."
  },
  {
    icon: <Calendar className="h-8 w-8 text-brand-pink" />,
    title: "Content Calendar",
    description: "Visualize your content strategy with a comprehensive calendar view of scheduled posts."
  },
  {
    icon: <FileText className="h-8 w-8 text-brand-orange" />,
    title: "Post Summary",
    description: "Track engagement and analyze the performance of your posts with detailed reports."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-brand-purple" />,
    title: "Ideas Management",
    description: "Organize content ideas into customizable groups and convert them into posts seamlessly."
  },
  {
    icon: <Bot className="h-8 w-8 text-brand-blue" />,
    title: "AI Post Generation",
    description: "Get intelligent content suggestions and post ideas powered by advanced AI algorithms."
  },
  {
    icon: <Image className="h-8 w-8 text-brand-pink" />,
    title: "Unsplash Integration",
    description: "Access millions of high-quality, royalty-free images directly within your workspace."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features for Modern Marketing</h2>
          <p className="section-subtitle">
            Everything you need to create, manage, and analyze your social media content strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
