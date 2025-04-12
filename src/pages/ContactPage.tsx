
import React from 'react';
import Layout from '@/components/Layout';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-5xl font-bold mb-16 text-center glow-text animate-float">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-celestial/20 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-celestial/30 text-white focus:border-celestial focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-celestial/30 text-white focus:border-celestial focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-celestial/30 text-white focus:border-celestial focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-celestial/30 text-white resize-none focus:border-celestial focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button type="submit" className="register-btn w-full">Send Message</button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-celestial/20 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-celestial mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-white/70">
                      Indira Gandhi Delhi Technical University for Women, New Delhi, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-celestial mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-white/70">
                      <a href="tel:+911234567890" className="hover:text-celestial">+91 123 456 7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-celestial mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-white/70">
                      <a href="mailto:contact@devcation25.com" className="hover:text-celestial">contact@devcation25.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-celestial/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-celestial transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-celestial transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-celestial transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-celestial transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-celestial transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
