
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className={`bg-health-blue text-white p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}>
              <Heart size={isScrolled ? 20 : 24} />
            </div>
            <div>
              <h1 className={`font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                Healthwise
              </h1>
              <p className={`text-muted-foreground transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}>
                AI Health Guardian
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-health-blue transition-colors">Home</Link>
            <a href="#features" className="text-foreground hover:text-health-blue transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-health-blue transition-colors">How It Works</a>
            <Link to="/chat" className="text-foreground hover:text-health-blue transition-colors">Try Now</Link>
            <Button className="bg-health-blue hover:bg-health-blue/90">Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4 border-t mt-4">
            <Link to="/" className="text-foreground hover:text-health-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <a href="#features" className="text-foreground hover:text-health-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-health-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <Link to="/chat" className="text-foreground hover:text-health-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Try Now</Link>
            <Button className="bg-health-blue hover:bg-health-blue/90 w-full">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
