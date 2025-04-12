
import React from 'react';
import { Linkedin } from 'lucide-react';

const Judges = () => {
  const judges = [
    {
      name: "Kartik Mathur",
      image: "/lovable-uploads/0a84cfd5-0583-4726-9e8d-b1603a8e0797.png",
      linkedIn: "https://www.linkedin.com/in/kartik-mathur"
    },
    {
      name: "Vani Chitkara",
      image: "/lovable-uploads/3055ab28-0540-4b5b-a9cf-58a7c534393c.png",
      linkedIn: "https://www.linkedin.com/in/vani-chitkara"
    },
    {
      name: "Aarnav Jindal",
      image: "/lovable-uploads/071595c6-e817-44f1-8478-a7badc0649fa.png",
      linkedIn: "https://www.linkedin.com/in/aarnav-jindal"
    }
  ];

  return (
    <section id="judges" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Judges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div key={index} className="person-card">
              <div className="h-80 overflow-hidden">
                <img 
                  src={judge.image} 
                  alt={judge.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-celestial-dark/60 to-celestial/40">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{judge.name}</h3>
                  <a href={judge.linkedIn} target="_blank" rel="noopener noreferrer" className="text-white hover:text-celestial-light">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;
