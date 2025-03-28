
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`py-4 px-4 md:px-8 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">SocialHub</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-700 hover:text-brand-purple transition-colors">Features</a>
          <a href="#integrations" className="text-sm font-medium text-slate-700 hover:text-brand-purple transition-colors">Integrations</a>
          <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-brand-purple transition-colors">Pricing</a>
          <Button variant="ghost" className="text-sm font-medium">Login</Button>
          <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-md transition-shadow">
            Start Free Trial
          </Button>
        </div>
        
        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-16 bg-white border-b p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-brand-purple transition-colors py-2">Features</a>
            <a href="#integrations" className="text-sm font-medium text-slate-700 hover:text-brand-purple transition-colors py-2">Integrations</a>
            <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-brand-purple transition-colors py-2">Pricing</a>
            <Button variant="ghost" className="justify-start">Login</Button>
            <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
