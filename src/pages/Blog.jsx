import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const posts = [
  {
    id: 1,
    title: 'Top 10 Web Development Trends for 2024',
    excerpt: 'Explore the cutting-edge technologies shaping the future of web development, from AI integrations to new rendering patterns.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'Technology',
    imageColor: 'bg-primary-100'
  },
  {
    id: 2,
    title: 'Why Core Web Vitals Matter for SEO',
    excerpt: 'A deep dive into Google\'s Core Web Vitals, how to measure them, and strategies to improve your site\'s performance score.',
    date: 'Sep 28, 2023',
    readTime: '8 min read',
    category: 'SEO',
    imageColor: 'bg-emerald-100'
  },
  {
    id: 3,
    title: 'React vs Next.js: Which should you choose?',
    excerpt: 'Understand the key differences between standard React SPAs and Next.js, and when to use each for your next large project.',
    date: 'Sep 15, 2023',
    readTime: '6 min read',
    category: 'Development',
    imageColor: 'bg-purple-100'
  },
  {
    id: 4,
    title: 'The Principles of High-Converting UI/UX',
    excerpt: 'Case studies and actionable advice on designing interfaces that drive user engagement and boost sales.',
    date: 'Aug 30, 2023',
    readTime: '7 min read',
    category: 'Design',
    imageColor: 'bg-pink-100'
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog & Insights - Web Development Company" 
        description="Read our latest articles on web development, UI/UX design, SEO, and digital marketing strategies."
        path="/blog"
      />
      
      <section className="bg-gray-50 pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4"
            >
              Insights & <span className="text-primary-600">News</span>
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest industry trends, tech tutorials, and agency updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-full h-64 ${post.imageColor} flex items-center justify-center`}>
                  {/* Image Placeholder */}
                  <span className="text-secondary-900/20 font-bold text-2xl uppercase tracking-widest">{post.category}</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={16}/> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={16}/> {post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
                  
                  <Link to={`/blog`} className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    Read Article <ChevronRight size={20} className="ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex justify-center mt-16">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">Next</button>
            </nav>
          </div>

        </div>
      </section>
    </>
  );
}
