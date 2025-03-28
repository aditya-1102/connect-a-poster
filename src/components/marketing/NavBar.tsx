
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="py-4 px-4 md:px-8 bg-white sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-xl">SocialHub</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-slate-700 hover:text-brand-purple transition-colors">Features</a>
          <a href="#integrations" className="text-sm text-slate-700 hover:text-brand-purple transition-colors">Integrations</a>
          <a href="#pricing" className="text-sm text-slate-700 hover:text-brand-purple transition-colors">Pricing</a>
          <Button variant="outline" className="mr-4">Login</Button>
          <Button>Start Free Trial</Button>
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
            <a href="#features" className="text-sm text-slate-700 hover:text-brand-purple transition-colors py-2">Features</a>
            <a href="#integrations" className="text-sm text-slate-700 hover:text-brand-purple transition-colors py-2">Integrations</a>
            <a href="#pricing" className="text-sm text-slate-700 hover:text-brand-purple transition-colors py-2">Pricing</a>
            <Button variant="outline" className="w-full">Login</Button>
            <Button className="w-full">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
