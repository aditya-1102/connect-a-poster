
import React from 'react';
import { Calendar, Clock, Edit, Check, Bot, Facebook, Instagram } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Calendar View */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Plan Your Content Strategy</h2>
            <p className="text-lg text-slate-600 mb-6">
              Visualize your entire content schedule with our intuitive calendar interface. Drag and drop posts to reschedule, color-code by platform, and ensure consistent posting.
            </p>
            <ul className="space-y-3">
              {[
                "View posts across all platforms in one calendar",
                "Schedule content for optimal engagement times",
                "Identify gaps in your content strategy",
                "Color-coded posts by platform or campaign"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="bg-slate-100 p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-brand-purple" />
                  <h3 className="font-medium">Content Calendar</h3>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white px-3 py-1 rounded text-sm">Month</div>
                  <div className="bg-slate-200 px-3 py-1 rounded text-sm">Week</div>
                  <div className="bg-slate-200 px-3 py-1 rounded text-sm">Day</div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center font-medium text-sm py-2">{day}</div>
                  ))}
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="h-24 border rounded-md p-1 text-xs"
                    >
                      <div className="text-right text-slate-500 mb-1">{(i % 31) + 1}</div>
                      {i === 3 && <div className="bg-blue-100 border-blue-300 border rounded p-1 mb-1">Facebook Post</div>}
                      {i === 8 && <div className="bg-pink-100 border-pink-300 border rounded p-1 mb-1">Instagram Post</div>}
                      {i === 8 && <div className="bg-blue-100 border-blue-300 border rounded p-1">LinkedIn Update</div>}
                      {i === 15 && <div className="bg-purple-100 border-purple-300 border rounded p-1">Multi-platform</div>}
                      {i === 22 && <div className="bg-pink-100 border-pink-300 border rounded p-1">Instagram Story</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ideas Management */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="bg-slate-100 p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Edit className="h-5 w-5 text-brand-orange" />
                  <h3 className="font-medium">Ideas Management</h3>
                </div>
                <div className="flex gap-2">
                  <div className="bg-brand-orange text-white px-3 py-1 rounded text-sm">+ New Idea</div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg">
                    <div className="bg-slate-100 p-2 border-b flex items-center justify-between">
                      <h4 className="font-medium">Unassigned</h4>
                      <span className="bg-slate-200 px-2 rounded-full text-xs">3</span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="bg-white border rounded p-2 shadow-sm">
                        <h5 className="font-medium mb-1">Industry tips series</h5>
                        <p className="text-xs text-slate-500">Weekly tips for social media managers</p>
                      </div>
                      <div className="bg-white border rounded p-2 shadow-sm">
                        <h5 className="font-medium mb-1">Client success stories</h5>
                        <p className="text-xs text-slate-500">Showcase how clients use our platform</p>
                      </div>
                      <div className="bg-white border rounded p-2 shadow-sm">
                        <h5 className="font-medium mb-1">Platform updates</h5>
                        <p className="text-xs text-slate-500">New features and capabilities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="bg-slate-100 p-2 border-b flex items-center justify-between">
                      <h4 className="font-medium">In Progress</h4>
                      <span className="bg-slate-200 px-2 rounded-full text-xs">2</span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="bg-white border rounded p-2 shadow-sm">
                        <h5 className="font-medium mb-1">Product showcase</h5>
                        <p className="text-xs text-slate-500">Video demonstration of dashboard</p>
                      </div>
                      <div className="bg-white border rounded p-2 shadow-sm">
                        <h5 className="font-medium mb-1">User testimonials</h5>
                        <p className="text-xs text-slate-500">Quotes from satisfied customers</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="bg-slate-100 p-2 border-b flex items-center justify-between">
                      <h4 className="font-medium">Ready to Post</h4>
                      <span className="bg-slate-200 px-2 rounded-full text-xs">1</span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="bg-white border rounded p-2 shadow-sm">
                        <h5 className="font-medium mb-1">Holiday campaign</h5>
                        <p className="text-xs text-slate-500">Special offer for new subscribers</p>
                        <div className="flex gap-1 mt-2">
                          <div className="bg-blue-100 text-blue-800 text-xs rounded px-1">Facebook</div>
                          <div className="bg-pink-100 text-pink-800 text-xs rounded px-1">Instagram</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Organize & Transform Ideas Into Content</h2>
            <p className="text-lg text-slate-600 mb-6">
              Create dynamic idea groups that match your workflow, then easily convert your best ideas into scheduled posts with just a few clicks.
            </p>
            <ul className="space-y-3">
              {[
                "Customize idea stages to match your workflow",
                "Easily convert ideas into scheduled posts",
                "Collaborate with team members on content ideas",
                "Never lose track of your creative concepts"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* AI Features */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">AI-Powered Content Creation</h2>
            <p className="text-lg text-slate-600 mb-6">
              Let our intelligent AI assistant help you generate engaging post ideas, write captions, and suggest the best times to publish for maximum engagement.
            </p>
            <ul className="space-y-3">
              {[
                "Generate post ideas based on your industry and audience",
                "Create engaging captions with AI assistance",
                "Get content suggestions based on trending topics",
                "Optimize posting schedules with AI-driven insights"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="bg-slate-100 p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-brand-blue" />
                  <h3 className="font-medium">AI Content Generator</h3>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white flex items-center gap-1 px-3 py-1 rounded text-sm border">
                    <Clock className="h-4 w-4" /> History
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2">Generate content for:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white border rounded p-2 flex items-center justify-center gap-2">
                      <Facebook size={16} className="text-[#1877F2]" />
                      <span>Facebook</span>
                    </div>
                    <div className="bg-white border rounded p-2 flex items-center justify-center gap-2">
                      <Instagram size={16} className="text-[#E4405F]" />
                      <span>Instagram</span>
                    </div>
                  </div>
                  <div className="bg-white border rounded p-2 mb-4">
                    <h5 className="text-sm font-medium mb-1">Topic or prompt</h5>
                    <p className="text-sm text-slate-500">New product launch for social media management tool</p>
                  </div>
                  <button className="w-full bg-brand-blue text-white py-2 rounded-md">Generate Content</button>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">AI Suggestions:</h4>
                  <div className="space-y-3">
                    <div className="bg-white border rounded p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Facebook</span>
                        <button className="text-xs text-brand-blue">Use this</button>
                      </div>
                      <p className="text-sm">Exciting news! We've just launched our new social media management platform with AI-powered scheduling, cross-platform posting, and in-depth analytics. Try it free for 14 days! #SocialMediaTools #ProductLaunch</p>
                    </div>
                    <div className="bg-white border rounded p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded">Instagram</span>
                        <button className="text-xs text-brand-blue">Use this</button>
                      </div>
                      <p className="text-sm">🚀 Say goodbye to social media stress! Our new platform helps you create, schedule and analyze posts across all your channels. Swipe to see the features and tap the link in bio to start your free trial! #SocialMediaManager #NewLaunch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
