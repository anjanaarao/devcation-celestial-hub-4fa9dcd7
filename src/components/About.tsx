
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center glow-text">About GDG</h2>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-celestial/20 shadow-lg">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Here at GDG IGDTUW, we explore technology and use it to build products that brings about positive change in society. 
              We conduct mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, open source programs, etc. 
              where students from across the globe get to showcase their knowledge and develop their skillset.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              We have helped more than 7000+ university students to expand their technical knowledge and skills.
            </p>
            
            <div className="mt-8 flex justify-center">
              <img
                src="/lovable-uploads/fe92cd85-10d7-4133-8e5f-6d13c1664fdd.png"
                alt="GDG Logo"
                className="h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
