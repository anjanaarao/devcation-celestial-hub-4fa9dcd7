
import React from 'react';
import Layout from '@/components/Layout';

const EventsPage = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] container mx-auto py-20 px-4">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Events</h2>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-celestial/20 shadow-lg">
          <div className="text-center text-white">
            <p className="text-xl mb-8">Stay tuned for exciting events coming soon!</p>
            <button className="register-btn">Register for Updates</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
