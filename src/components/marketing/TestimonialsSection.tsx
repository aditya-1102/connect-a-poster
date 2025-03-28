
import React from 'react';

const testimonials = [
  {
    quote: "This platform has completely transformed how we manage our social media. The AI suggestions are incredibly useful and save us so much time!",
    author: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The ability to seamlessly publish across multiple platforms with customized content has doubled our engagement rates in just two months.",
    author: "Michael Chen",
    title: "Social Media Manager, GrowthBrand",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "I love the ideas management system. Being able to organize our content ideas and transform them into posts has simplified our entire workflow.",
    author: "Jessica Williams",
    title: "Content Creator, CreativeStudio",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of marketers and businesses who've transformed their social media strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card">
              <div className="mb-6">
                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-purple/20">
                  <path d="M13.4 36C9.2 36 5.86667 34.7333 3.4 32.2C1 29.6667 0 26.3333 0 22.2C0 18.0667 1.4 14.2 4.2 10.6C7.06667 6.93333 11.1333 3.93333 16.4 1.6L19.2 6.8C14.9333 8.33333 11.8 10.4 9.8 13C7.86667 15.5333 7.13333 17.9333 6.6 20.2C7.46667 19.6667 8.73333 19.4 10.4 19.4C12.8 19.4 14.8 20.2667 16.4 22C18.0667 23.6667 18.9 25.9333 18.9 28.8C18.9 31.4 18 33.5333 16.2 35.2C14.4667 35.7333 13.4 36 13.4 36ZM38.8 36C34.6 36 31.2667 34.7333 28.8 32.2C26.4 29.6667 25.4 26.3333 25.4 22.2C25.4 18.0667 26.8 14.2 29.6 10.6C32.4667 6.93333 36.5333 3.93333 41.8 1.6L44.6 6.8C40.3333 8.33333 37.2 10.4 35.2 13C33.2667 15.5333 32.5333 17.9333 32 20.2C32.8667 19.6667 34.1333 19.4 35.8 19.4C38.2 19.4 40.2 20.2667 41.8 22C43.4667 23.6667 44.3 25.9333 44.3 28.8C44.3 31.4 43.4 33.5333 41.6 35.2C39.8667 35.7333 38.8 36 38.8 36Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
