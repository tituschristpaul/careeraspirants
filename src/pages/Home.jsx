import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Paintbrush, LineChart, Zap, Search, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import FAQAccordion from '../components/ui/FAQAccordion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Web Development & Digital Agency" 
        description="We build modern, fast, and scalable web solutions."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-secondary-900 mb-8"
          >
            Digital Experiences That <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              Drive Real Growth
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto mb-10"
          >
            We are a premium web development company specializing in stunning, high-performance static websites and complex web applications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
              Build Your Website Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-secondary-900 bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-sm font-semibold text-primary-600 tracking-wide uppercase">Expertise</motion.h2>
            <motion.p {...fadeIn} className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary-900 sm:text-4xl">
              Our Core Services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code2 size={32} />, title: "Web Development", desc: "Fast, responsive, and scalable web apps built with modern frameworks." },
              { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Cross-platform mobile applications that users love." },
              { icon: <Paintbrush size={32} />, title: "UI/UX Design", desc: "Stunning user interfaces with intuitive user experiences." },
              { icon: <Search size={32} />, title: "SEO Optimization", desc: "Data-driven SEO strategies to rank you higher on search engines." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 line-clamp-3">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just build websites; we build digital assets that generate revenue. Our approach combines cutting-edge technology with proven marketing strategies.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: <Zap className="text-yellow-500" />, title: "Lightning Fast Speed", desc: "We build static sites aiming for 90+ Lighthouse scores." },
                  { icon: <LineChart className="text-green-500" />, title: "SEO-First Approach", desc: "Built-in structured data, clean URLs, and optimized assets." },
                  { icon: <ShieldCheck className="text-blue-500" />, title: "Highly Scalable", desc: "Ready to handle thousands of concurrent users easily." }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary-900">{item.title}</h4>
                      <p className="mt-1 text-gray-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="aspect-w-5 aspect-h-4 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Fallback pattern block until we place an image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 flex items-center justify-center text-white p-12 text-center">
                  <h3 className="text-4xl font-bold leading-tight">Delivering Excellence in Every Pixel</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-secondary-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-20 bg-secondary-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full max-w-3xl h-full opacity-20 bg-primary-600 filter blur-[100px] rounded-full"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2 {...fadeIn} className="text-3xl font-extrabold sm:text-4xl">
            Ready to scale your business?
          </motion.h2>
          <motion.p {...fadeIn} className="mt-4 text-xl text-gray-300 mb-8">
            Let's discuss how our web solutions can help you achieve your goals.
          </motion.p>
          <motion.div {...fadeIn}>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-secondary-900 bg-white hover:bg-gray-50 shadow-lg transition-transform hover:-translate-y-1">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
