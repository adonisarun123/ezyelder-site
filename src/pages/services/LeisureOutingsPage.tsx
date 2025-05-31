import React from 'react';
import { motion } from 'framer-motion';

const LeisureOutingsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-100 to-emerald-100 py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Leisure Outings</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Exciting group outings to explore, socialize, and create wonderful memories together
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeisureOutingsPage; 