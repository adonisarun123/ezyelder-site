import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Care Coordinator',
      location: 'Bangalore',
      type: 'Full-time',
      department: 'Operations'
    },
    {
      id: 2,
      title: 'Yoga Instructor',
      location: 'Bangalore',
      type: 'Part-time',
      department: 'Wellness'
    },
    {
      id: 3,
      title: 'Technology Trainer',
      location: 'Bangalore',
      type: 'Contract',
      department: 'Education'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-lavender to-sky py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Careers at EzyElders</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join our mission to enrich the lives of senior citizens
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Current Openings</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="card hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </span>
                  </div>
                  <button className="btn-primary mt-4">Apply Now</button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 