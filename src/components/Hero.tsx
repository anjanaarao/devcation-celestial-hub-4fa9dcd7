
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float glow-text">
          Devcation'25
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          "Where innovation meets opportunity. Join us to build, learn, and transform your ideas into reality."
        </p>
        
        <button className="register-btn mb-10">
          Register Now
        </button>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-celestial transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-celestial transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-celestial transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-celestial transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-celestial transition-colors">
            <Github size={24} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl font-bold text-celestial">4.6/5+</p>
            <p className="text-white/80">Hacker rating</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl font-bold text-celestial">300+</p>
            <p className="text-white/80">Hacks</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl font-bold text-celestial">25+</p>
            <p className="text-white/80">Speakers and mentors</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl font-bold text-celestial">500+</p>
            <p className="text-white/80">Hackers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
