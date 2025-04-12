
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can contribute?",
      answer: "Anyone with a passion for innovation and technology can participate in Devcation'25. We welcome students, professionals, and enthusiasts of all skill levels."
    },
    {
      question: "Where can we reach out in case of queries?",
      answer: "You can reach out to us through our social media channels, email at support@devcation25.com, or join our Discord community for real-time assistance."
    },
    {
      question: "Do I need to have coding experience to participate?",
      answer: "While having some coding experience is helpful, we welcome participants of all skill levels. We have tracks and challenges suitable for beginners, and our mentors are available to provide guidance."
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "After the hackathon, selected projects will move to the mentorship round, followed by the final pitching and closing ceremony. Winners will be announced and prizes will be distributed."
    },
    {
      question: "How can I stay updated on hackathon announcements and events?",
      answer: "The best way to stay updated is to join our Discord server, follow our social media accounts, and check your registered email regularly for updates."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-celestial" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-celestial" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 pt-0 text-white/80">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center space-x-8">
          <a href="#" className="bg-indigo-600 text-white flex items-center gap-2 px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8l4 4-4 4"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <span>Join Discord</span>
          </a>
          
          <a href="#" className="bg-green-600 text-white flex items-center gap-2 px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M3 21l1.65-3.8a9 9 0 1116.7 0L23 21"></path>
                <path d="M9 10l-2 1 2 1"></path>
                <path d="M15 10l2 1-2 1"></path>
                <path d="M10 14a3.5 3.5 0 007 0"></path>
              </svg>
            </div>
            <span>Join Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
