import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Clock, Award } from 'lucide-react';

const JoinUsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-lavender to-sky py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Join Us / Volunteer</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Make a difference in the lives of senior citizens by joining our team or volunteering your time and skills
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Become a Member</h2>
                <p className="text-gray-700 mb-6">
                  Join our vibrant community of seniors and enjoy a wide range of activities, 
                  programs, and social connections designed to enrich your golden years.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <Heart className="w-6 h-6 text-dark-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Health & Wellness Programs</h3>
                      <p className="text-gray-600">Yoga, meditation, and fitness activities</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="w-6 h-6 text-dark-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Social Activities</h3>
                      <p className="text-gray-600">Make new friends and enjoy group outings</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-6 h-6 text-dark-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Flexible Schedules</h3>
                      <p className="text-gray-600">Choose activities that fit your lifestyle</p>
                    </div>
                  </div>
                </div>
                <button className="btn-primary">Become a Member</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Volunteer With Us</h2>
                <p className="text-gray-700 mb-6">
                  Share your skills, time, and compassion with our senior community. 
                  Volunteering with EzyElders is a rewarding way to give back and make meaningful connections.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <Award className="w-6 h-6 text-dark-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Teaching & Mentoring</h3>
                      <p className="text-gray-600">Share your expertise in various subjects</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="w-6 h-6 text-dark-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Activity Coordination</h3>
                      <p className="text-gray-600">Help organize and lead group activities</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="w-6 h-6 text-dark-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Companionship</h3>
                      <p className="text-gray-600">Provide friendship and emotional support</p>
                    </div>
                  </div>
                </div>
                <button className="btn-secondary">Become a Volunteer</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage; 