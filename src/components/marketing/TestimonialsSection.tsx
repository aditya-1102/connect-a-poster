
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "This platform has completely transformed how we manage our social media. The AI suggestions are incredibly useful and save us so much time!",
    author: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    quote: "The ability to seamlessly publish across multiple platforms with customized content has doubled our engagement rates in just two months.",
    author: "Michael Chen",
    title: "Social Media Manager, GrowthBrand",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5
  },
  {
    quote: "I love the ideas management system. Being able to organize our content ideas and transform them into posts has simplified our entire workflow.",
    author: "Jessica Williams",
    title: "Content Creator, CreativeStudio",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-brand-purple/10 text-brand-purple mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Loved by <span className="text-brand-purple">Social Media Managers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of marketers and businesses who've transformed their social media strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300 overflow-visible">
              <CardContent className="p-8 relative">
                <div className="absolute -top-6 left-8 bg-brand-purple rounded-full p-3 text-white">
                  <Quote size={24} />
                </div>
                <div className="flex mb-4 pt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-8 text-slate-700">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-brand-purple/10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
