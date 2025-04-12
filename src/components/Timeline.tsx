
import React from 'react';
import { Calendar } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      title: "🎉 Opening Ceremony & Registration 🚀",
      description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
      date: "April 4th, 2025"
    },
    {
      title: "🔒 Hacking Period Starts! 🔓",
      description: "Get ready to code, create, and innovate!",
      date: "April 8th, 2025"
    },
    {
      title: "⏰ Hacking Period Ends ⏰",
      description: "Make sure to wrap up your projects and prepare for submission.",
      date: "April 12th, 2025"
    },
    {
      title: "🕒 Mentorship Round Starts 🕒",
      description: "Providing mentorship and feedback for every submitted project.",
      date: "April 13th, 2025"
    },
    {
      title: "📅 Final pitching and closing ceremony. 📅",
      description: "Don't miss out on this memorable event!",
      date: "April 15th, 2025"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Timeline</h2>
        
        <div className="relative py-8">
          <div className="timeline-line"></div>
          
          {events.map((event, index) => (
            <div key={index} className="flex gap-8 mb-16 relative">
              <div className="timeline-circle">
                <Calendar className="h-6 w-6" />
              </div>
              
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-celestial/20 shadow-lg flex-1 ${index % 2 === 0 ? 'md:mr-[10%]' : 'md:ml-[10%] md:order-first'}`}>
                <div className="text-lg text-celestial mb-1 font-semibold">{event.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-white/80">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
