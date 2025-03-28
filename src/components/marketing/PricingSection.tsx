
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for individuals and small businesses just getting started with social media.",
    features: [
      "Connect up to 3 social accounts",
      "Schedule up to 30 posts per month",
      "Basic analytics dashboard",
      "Content calendar",
      "Post management",
      "5 AI-generated content ideas per month"
    ],
    buttonText: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses looking to scale their social media presence.",
    features: [
      "Connect up to 10 social accounts",
      "Unlimited scheduled posts",
      "Advanced analytics with exportable reports",
      "Content calendar with team collaboration",
      "Ideas management system",
      "30 AI-generated content pieces per month",
      "Priority support"
    ],
    buttonText: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Comprehensive solution for agencies and large businesses managing multiple brands.",
    features: [
      "Connect unlimited social accounts",
      "Unlimited scheduled posts",
      "Custom analytics and reporting",
      "Advanced team management",
      "API access",
      "White-label options",
      "Unlimited AI-generated content",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50"></div>
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-brand-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-brand-purple/10 text-brand-purple mb-6">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Simple, Transparent <span className="text-brand-purple">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                tier.popular 
                  ? 'bg-gradient-to-br from-brand-purple/5 to-brand-blue/10 border border-brand-purple/30 shadow-lg relative' 
                  : 'bg-white border border-slate-200 hover:border-brand-purple/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm px-4 py-1 rounded-full font-medium flex items-center gap-1">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold">${tier.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <p className="text-slate-600 mb-6">{tier.description}</p>
              </div>
              
              <Button 
                className={`w-full mb-8 rounded-xl py-6 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-lg hover:shadow-brand-purple/20 hover:from-brand-purple hover:to-brand-blue'
                    : ''
                }`}
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.buttonText}
              </Button>
              
              <div className="space-y-4">
                <p className="font-medium">What's included:</p>
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex-shrink-0 rounded-full p-1 ${
                      tier.popular 
                        ? 'bg-brand-purple/10 text-brand-purple' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
