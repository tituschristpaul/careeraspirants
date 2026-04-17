import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const team = [
  { name: 'Sarah Jenkins', role: 'CEO & Founder', imageColor: 'bg-primary-200' },
  { name: 'Michael Chen', role: 'CTO', imageColor: 'bg-purple-200' },
  { name: 'Elena Rodriguez', role: 'Lead Designer', imageColor: 'bg-pink-200' },
  { name: 'David Smith', role: 'Senior Developer', imageColor: 'bg-emerald-200' },
];

export default function About() {
  return (
    <>
      <SEO 
        title="About Us - Our Story" 
        description="Learn about our mission to deliver world-class digital experiences and meet the team behind our success."
        path="/about"
      />
      
      <section className="bg-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-secondary-900 mb-6"
            >
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Digital Futures</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Born from a passion for clean code and stunning design, our agency transforms complex problems into elegant, scalable web solutions.
            </motion.p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100"
            >
              <Target className="w-12 h-12 text-primary-500 mb-6" />
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with cutting-edge technology, ensuring their online presence is not just a digital footprint, but a powerful engine for growth and customer engagement.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-900 rounded-3xl p-10 shadow-2xl text-white"
            >
              <Users className="w-12 h-12 text-primary-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-center gap-3"><Award className="w-5 h-5 text-primary-400"/> Excellence in Execution</li>
                <li className="flex items-center gap-3"><Award className="w-5 h-5 text-primary-400"/> Transparent Communication</li>
                <li className="flex items-center gap-3"><Award className="w-5 h-5 text-primary-400"/> Continuous Innovation</li>
                <li className="flex items-center gap-3"><Award className="w-5 h-5 text-primary-400"/> Client-Centric Success</li>
              </ul>
            </motion.div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-secondary-900 mb-4">Meet the Team</h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto">The brilliant minds behind our award-winning projects.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-48 h-48 mx-auto rounded-full ${member.imageColor} mb-6 overflow-hidden shadow-lg border-4 border-white`}>
                   {/* Avatar Placeholder */}
                   <div className="w-full h-full flex items-center justify-center text-secondary-900/10 font-bold text-6xl">
                     {member.name.charAt(0)}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to join our team?</h2>
          <p className="text-xl text-primary-100 mb-8">We're always looking for talented individuals to help us build the future of the web.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
