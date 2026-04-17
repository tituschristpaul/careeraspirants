import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Search, Paintbrush, Monitor, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const services = [
  {
    id: 'web-development',
    icon: <Monitor className="w-8 h-8 text-white" />,
    title: 'Custom Web Development',
    description: 'We build high-performance, accessible, and scalable web applications tailored to your specific business needs using React, Vue, and modern frameworks.',
    benefits: ['React & Next.js Experts', 'Performance Optimized', 'Accessible by Design', 'Headless CMS Integration'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'ecommerce',
    icon: <Database className="w-8 h-8 text-white" />,
    title: 'E-commerce Solutions',
    description: 'Provide an outstanding shopping experience with custom e-commerce platforms that convert visitors into loyal customers.',
    benefits: ['Shopify & WooCommerce', 'Custom Cart Experiences', 'Payment Gateway Integrations', 'Inventory Management'],
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'ui-ux',
    icon: <Paintbrush className="w-8 h-8 text-white" />,
    title: 'UI/UX Design',
    description: 'We craft intuitive, user-centric interfaces that not only look stunning but guide users seamlessly to their goals.',
    benefits: ['Wireframing & Prototyping', 'User Research', 'Design Systems', 'Micro-interactions'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'seo',
    icon: <Search className="w-8 h-8 text-white" />,
    title: 'SEO & Performance',
    description: 'Achieve top rankings on search engines with technical SEO optimizations, blazing fast load times, and semantic HTML.',
    benefits: ['Technical SEO Audits', 'Lighthouse 90+ Target', 'Core Web Vitals Optimization', 'Schema & Metadata'],
    color: 'from-orange-400 to-red-500'
  }
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Our Services - Web Development Company" 
        description="Explore our premium services: Custom Web Development, Mobile Apps, UI/UX Design, and Technical SEO."
        path="/services"
      />
      
      {/* Page Header */}
      <section className="bg-secondary-900 text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Digital Solutions tailored to <br className="hidden md:block"/>
            <span className="text-primary-500">Your Business</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            From stunning static sites to robust web applications, we provide end-to-end services that ensure your digital presence is unbeatable.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <motion.div 
                {...fadeIn}
                className="w-full lg:w-1/2"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg shadow-gray-300 mb-8`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Discuss this service <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className={`aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden bg-gradient-to-br ${service.color} p-1 opacity-90`}>
                  <div className="w-full h-full bg-secondary-900 rounded-[22px] flex items-center justify-center shadow-inner">
                     {/* Visual Placeholder for Service */}
                     <span className="text-white/30 text-2xl font-medium tracking-widest uppercase">{service.title}</span>
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">Not sure what you need?</h2>
          <p className="text-xl text-gray-600 mb-8">Schedule a free consultation and let our experts guide you to the right solution.</p>
          <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all hover:-translate-y-1">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
