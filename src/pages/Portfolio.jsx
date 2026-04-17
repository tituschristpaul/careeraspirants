import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SEO from '../components/seo/SEO';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web Application',
    tech: ['React', 'Tailwind', 'Recharts', 'Node.js'],
    color: 'bg-blue-500',
    description: 'A comprehensive financial dashboard for real-time analytics and portfolio management.'
  },
  {
    id: 2,
    title: 'E-Commerce Storefront',
    category: 'E-commerce',
    tech: ['Next.js', 'Shopify', 'Framer Motion'],
    color: 'bg-emerald-500',
    description: 'A headless e-commerce store with blazing fast load times and high conversion rates.'
  },
  {
    id: 3,
    title: 'SaaS Landing Page',
    category: 'Marketing Website',
    tech: ['Vite', 'React', 'Tailwind CSS'],
    color: 'bg-purple-500',
    description: 'A high-converting, animated landing page for a modern B2B SaaS company.'
  },
  {
    id: 4,
    title: 'Healthcare Patient Portal',
    category: 'Web Application',
    tech: ['React', 'TypeScript', 'Tailwind'],
    color: 'bg-rose-500',
    description: 'A secure, HIPAA-compliant patient portal for booking appointments and viewing records.'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: 'Web System',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    color: 'bg-amber-500',
    description: 'A dynamic property listing platform with advanced map integrations and filtering.'
  },
  {
    id: 6,
    title: 'Fitness Tracking Mobile App',
    category: 'Mobile App',
    tech: ['React Native', 'Expo', 'Firebase'],
    color: 'bg-cyan-500',
    description: 'A cross-platform mobile application for tracking workouts and nutrition plans.'
  }
];

export default function Portfolio() {
  return (
    <>
      <SEO 
        title="Our Portfolio - Featured Projects" 
        description="Check out our recent work, spanning from high-performance marketing websites to complex SaaS applications."
        path="/portfolio"
      />
      
      <section className="bg-white pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-secondary-900 mb-6"
          >
            Our <span className="text-primary-600">Selected Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-16"
          >
            We take pride in building robust, beautiful products. Explore some of our latest success stories.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-w-16 aspect-h-12 w-full ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-secondary-900/90 to-transparent">
                  <div className="flex gap-4">
                    <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm text-white transition-colors">
                      <FaGithub size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6 text-left">
                <p className="text-sm font-semibold text-primary-600 mb-1 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-gray-600 mb-6">Want to see more case studies or request a custom demo?</p>
           <a href="/contact" className="inline-flex px-8 py-3 bg-secondary-900 text-white rounded-full hover:bg-secondary-800 transition-colors">
              Contact Sales
           </a>
        </div>
      </section>
    </>
  );
}
