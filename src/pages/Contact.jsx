import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <>
      <SEO 
        title="Contact Us - Let's Talk" 
        description="Get in touch with us to start your next web development project."
        path="/contact"
      />
      
      <section className="bg-white pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4"
            >
              Let's build something <span className="text-primary-600">amazing</span> together.
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take the next step? Fill out the form below or reach out directly.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="bg-secondary-900 rounded-3xl p-8 text-white shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="text-primary-500 shrink-0 w-6 h-6" />
                    <div>
                      <p className="font-semibold text-lg">Our Office</p>
                      <p className="text-gray-400 mt-1">123 Innovation Drive,<br/>Tech City, TC 10010, USA</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="text-primary-500 shrink-0 w-6 h-6" />
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="text-primary-500 shrink-0 w-6 h-6" />
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-400 mt-1">hello@webdevco.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium">Interactive Map Embed</p>
                  </div>
                </div>
                {/* iframe would go here: <iframe src="..." className="w-full h-full border-0" loading="lazy" /> */}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-xl">
                <h2 className="text-3xl font-bold text-secondary-900 mb-8">Send us a message</h2>
                
                {status && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    {status}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
                  >
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
