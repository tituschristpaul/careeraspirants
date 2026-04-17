import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary-600 text-white p-2 rounded-lg group-hover:bg-primary-500 transition-colors">
                <Code2 size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Career<span className="text-primary-500">Aspirants</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design and build modern, high-performance web applications that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile App Development', 'UI/UX Design', 'SEO Optimization', 'E-commerce Solutions'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary-500 shrink-0" />
                <span>#582/C, 6th cross, 7th Main <br />Vinayaka Layout 2nd stage <br />Nagarbhavi Bangalore - 560072</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 shrink-0" />
                <span>+91 98803 62838</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 shrink-0" />
                <span>caspirants@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Career Aspirants. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
