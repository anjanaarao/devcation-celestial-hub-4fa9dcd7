
import React from 'react';

const Sponsors = () => {
  // Placeholder sponsor logos - in a real implementation these would be actual sponsor images
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://via.placeholder.com/200x100/2c3e50/ffffff?text=Sponsor+1",
      website: "#"
    },
    {
      name: "Sponsor 2",
      logo: "https://via.placeholder.com/200x100/2c3e50/ffffff?text=Sponsor+2",
      website: "#"
    },
    {
      name: "Sponsor 3",
      logo: "https://via.placeholder.com/200x100/2c3e50/ffffff?text=Sponsor+3",
      website: "#"
    },
    {
      name: "Sponsor 4",
      logo: "https://via.placeholder.com/200x100/2c3e50/ffffff?text=Sponsor+4",
      website: "#"
    },
    {
      name: "Sponsor 5",
      logo: "https://via.placeholder.com/200x100/2c3e50/ffffff?text=Sponsor+5",
      website: "#"
    },
    {
      name: "Sponsor 6",
      logo: "https://via.placeholder.com/200x100/2c3e50/ffffff?text=Sponsor+6",
      website: "#"
    }
  ];

  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Sponsors</h2>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-celestial/20 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <a 
                key={index} 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-20 max-w-full"
                />
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join our growing list of sponsors and support the next generation of innovators.
            </p>
            <button className="register-btn">
              Sponsor Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
