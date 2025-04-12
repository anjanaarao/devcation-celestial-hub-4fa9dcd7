
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/10 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/fe92cd85-10d7-4133-8e5f-6d13c1664fdd.png" 
                alt="Google Developer Groups on Campus" 
                className="h-14"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-celestial font-semibold">Home</Link>
            <Link to="/about" className="text-white hover:text-celestial font-semibold">About</Link>
            <Link to="/devcation25" className="text-white hover:text-celestial font-semibold">Devcation`25</Link>
            <Link to="/timeline" className="text-white hover:text-celestial font-semibold">Timeline</Link>
            <Link to="/events" className="text-white hover:text-celestial font-semibold">Events</Link>
            
            <div className="relative">
              <button 
                onClick={toggleMore}
                className="text-white hover:text-celestial font-semibold flex items-center"
              >
                More
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden border border-celestial/20">
                  <Link to="/judges" className="block px-4 py-2 text-white hover:bg-celestial/20">Judges</Link>
                  <Link to="/mentors" className="block px-4 py-2 text-white hover:bg-celestial/20">Mentors</Link>
                  <Link to="/prizes" className="block px-4 py-2 text-white hover:bg-celestial/20">Prizes</Link>
                  <Link to="/sponsors" className="block px-4 py-2 text-white hover:bg-celestial/20">Sponsors</Link>
                  <Link to="/faq" className="block px-4 py-2 text-white hover:bg-celestial/20">FAQ</Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-white hover:text-celestial font-semibold">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
            <Link to="/" className="block text-white py-2">Home</Link>
            <Link to="/about" className="block text-white py-2">About</Link>
            <Link to="/devcation25" className="block text-white py-2">Devcation`25</Link>
            <Link to="/timeline" className="block text-white py-2">Timeline</Link>
            <Link to="/events" className="block text-white py-2">Events</Link>
            <button 
              onClick={toggleMore}
              className="flex items-center justify-between w-full text-white py-2"
            >
              <span>More</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMoreOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-celestial/30">
                <Link to="/judges" className="block text-white py-1">Judges</Link>
                <Link to="/mentors" className="block text-white py-1">Mentors</Link>
                <Link to="/prizes" className="block text-white py-1">Prizes</Link>
                <Link to="/sponsors" className="block text-white py-1">Sponsors</Link>
                <Link to="/faq" className="block text-white py-1">FAQ</Link>
              </div>
            )}
            
            <Link to="/contact" className="block text-white py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
