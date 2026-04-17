import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    question: "How long does it take to build a modular static website?",
    answer: "Typically, a standard 5-page static website takes 2-4 weeks from design approval to deployment. Complex applications with headless commerce or custom dashboards can take 6-12 weeks."
  },
  {
    question: "Will my website be SEO optimized?",
    answer: "Yes! Every website we build includes technical SEO optimization from day one. This includes fast load times (90+ Lighthouse scores), proper semantic HTML, dynamic meta tags, structured data (JSON-LD), and clean URLs."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes, we deploy on robust global CDNs like Vercel, Netlify, or standard cPanel based on your needs. We also offer monthly maintenance plans to keep your tech stack updated and secure."
  },
  {
    question: "Can I manage the content myself?",
    answer: "Absolutely. We can integrate a headless CMS (like Sanity, Strapi, or Contentful) ensuring you have an easy-to-use admin dashboard to edit text, upload images, and create new blog posts without touching the code."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-secondary-900 text-lg">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
}
