
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    <section id="pricing" className="py-20 px-4 bg-feature-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 border ${tier.popular ? 'border-brand-purple shadow-lg relative' : 'border-slate-200'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-slate-600 mb-6">{tier.description}</p>
              
              <Button 
                className={`w-full mb-8 ${tier.popular ? 'bg-brand-purple hover:bg-brand-purple/90' : ''}`}
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.buttonText}
              </Button>
              
              <div className="space-y-3">
                <p className="font-medium">What's included:</p>
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 ${tier.popular ? 'text-brand-purple' : 'text-slate-500'} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm">{feature}</span>
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
