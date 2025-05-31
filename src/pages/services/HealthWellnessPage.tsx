import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, Users } from 'lucide-react';

const HealthWellnessPage: React.FC = () => {
  const programs = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Gentle Yoga',
      description: 'Low-impact yoga sessions designed for seniors to improve flexibility and balance'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Meditation & Mindfulness',
      description: 'Guided meditation sessions to reduce stress and improve mental clarity'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Monitoring',
      description: 'Regular health check-ups and vital parameter monitoring'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Exercise',
      description: 'Fun group activities to keep you active and socially engaged'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-100 to-pink-100 py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Health & Wellness</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive wellness programs designed to keep you healthy, active, and vibrant in your golden years
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-red-50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Improved flexibility and balance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Better cardiovascular health</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Reduced stress and anxiety</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Enhanced mental clarity and focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Social connection and community support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthWellnessPage; 