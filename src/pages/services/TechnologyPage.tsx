import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Video, ShoppingCart, Shield } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-100 to-cyan-100 py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Technology Tutoring</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Bridge the digital divide with patient, personalized technology training designed for seniors
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Teach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="card text-center"
              >
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Smartphone Basics</h3>
                <p className="text-gray-600">Making calls, texting, managing contacts</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card text-center"
              >
                <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Video Calling</h3>
                <p className="text-gray-600">WhatsApp, Zoom, and Google Meet</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card text-center"
              >
                <ShoppingCart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Online Services</h3>
                <p className="text-gray-600">Shopping, banking, and bill payments</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card text-center"
              >
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Digital Safety</h3>
                <p className="text-gray-600">Password security and avoiding scams</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage; 