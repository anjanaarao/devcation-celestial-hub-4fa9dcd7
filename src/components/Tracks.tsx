
import React from 'react';
import { Brain, Lightbulb, Leaf, DollarSign } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      title: "HealthTech",
      icon: <Brain className="w-16 h-16 mb-4" />,
      description: "Develop innovative solutions for healthcare challenges."
    },
    {
      title: "EdTech",
      icon: <Lightbulb className="w-16 h-16 mb-4" />,
      description: "Create the next generation of educational tools and platforms."
    },
    {
      title: "Sustainable Development",
      subtitle: "(Open Innovation)",
      icon: <Leaf className="w-16 h-16 mb-4" />,
      description: "Build solutions that contribute to a more sustainable future."
    },
    {
      title: "FinTech",
      icon: <DollarSign className="w-16 h-16 mb-4" />,
      description: "Revolutionize financial services with cutting-edge technology."
    }
  ];

  return (
    <section id="tracks" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Tracks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="track-card h-64">
              {track.icon}
              <h3 className="text-2xl font-bold mb-1">{track.title}</h3>
              {track.subtitle && <p className="text-sm text-white/80 mb-2">{track.subtitle}</p>}
              <p className="text-white/90 text-center">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
