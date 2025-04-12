
import React from 'react';
import { Linkedin } from 'lucide-react';

const Mentors = () => {
  const mentors = [
    {
      name: "Radhika Bansal",
      image: "/lovable-uploads/243382ef-c03e-4ae2-872a-ab14042408a4.png",
      linkedIn: "https://www.linkedin.com/in/radhika-bansal"
    },
    {
      name: "Sanidhya Goel",
      image: "/lovable-uploads/b1e30fc2-f16a-42f9-b20a-9700eb7e90b7.png",
      linkedIn: "https://www.linkedin.com/in/sanidhya-goel"
    },
    {
      name: "Tejaswi Tyagi",
      image: "/lovable-uploads/8f8747c5-6b5a-4219-b5a7-4c81b3cd2175.png",
      linkedIn: "https://www.linkedin.com/in/tejaswi-tyagi"
    },
    {
      name: "Akanksha Jha",
      image: "/lovable-uploads/117cf82c-f6cd-4971-a6b1-9e4908a823a7.png",
      linkedIn: "https://www.linkedin.com/in/akanksha-jha"
    },
    {
      name: "Vikranth Udandarao",
      image: "/lovable-uploads/58a45628-88fe-4208-b0ab-35744f9b8f3e.png",
      linkedIn: "https://www.linkedin.com/in/vikranth-udandarao"
    }
  ];

  return (
    <section id="mentors" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Mentors</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="person-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-celestial-dark/60 to-celestial/40">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                  <a href={mentor.linkedIn} target="_blank" rel="noopener noreferrer" className="text-white hover:text-celestial-light">
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

export default Mentors;
