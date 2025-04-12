
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md pt-16 pb-8 border-t border-celestial/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Devcation'25</h3>
            <p className="text-white/70 mb-6">
              A premier hackathon organized by Google Developer Group at IGDTUW to foster innovation and technical excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-celestial">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-celestial">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-celestial">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-celestial">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-celestial">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-celestial">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-celestial">About</Link>
              </li>
              <li>
                <Link to="/devcation25" className="text-white/70 hover:text-celestial">Devcation'25</Link>
              </li>
              <li>
                <Link to="/timeline" className="text-white/70 hover:text-celestial">Timeline</Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-celestial">Events</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/judges" className="text-white/70 hover:text-celestial">Judges</Link>
              </li>
              <li>
                <Link to="/mentors" className="text-white/70 hover:text-celestial">Mentors</Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-white/70 hover:text-celestial">Sponsors</Link>
              </li>
              <li>
                <Link to="/prizes" className="text-white/70 hover:text-celestial">Prizes</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-celestial">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-celestial mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Indira Gandhi Delhi Technical University for Women, New Delhi, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-celestial mr-3 flex-shrink-0" />
                <a href="mailto:contact@devcation25.com" className="text-white/70 hover:text-celestial">
                  contact@devcation25.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-celestial mr-3 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/70 hover:text-celestial">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
          <p>© 2025 Devcation. All rights reserved. Organized by GDG IGDTUW.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
