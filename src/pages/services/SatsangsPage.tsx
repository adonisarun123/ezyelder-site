import React from 'react';
import { motion } from 'framer-motion';

const SatsangsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-100 to-indigo-100 py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Satsangs & Spirituality</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Nurture your spiritual well-being through collective worship, bhajans, and meaningful discussions
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SatsangsPage; 