
import React from 'react';
import { Trophy } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      title: "Hack & Solve Winners",
      description: "Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons."
    },
    {
      title: "Mini Event Winners",
      description: "Goodies, certificates, social media shoutouts, unstop coupons."
    },
    {
      title: "All Finalists",
      description: "Exciting goodies, certificates, unstop coupons"
    },
    {
      title: "All Participants",
      description: "Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all."
    }
  ];

  return (
    <section id="prizes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Prizes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prizes.map((prize, index) => (
            <div key={index} className="prize-card">
              <Trophy className="w-16 h-16 mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-4 text-center">{prize.title}</h3>
              <p className="text-white/90 text-center">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
