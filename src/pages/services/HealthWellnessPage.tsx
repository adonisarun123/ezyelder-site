import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Activity, Heart, Brain, Users, Clock, CheckCircle, Star, Shield, Phone } from 'lucide-react';

const HealthWellnessPage: React.FC = () => {
  const programs = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Gentle Yoga & Stretching',
      description: 'Low-impact yoga sessions specifically designed for senior bodies. Our certified instructors guide you through modified poses that improve flexibility, balance, and strength while respecting physical limitations and ensuring safety.',
      schedule: 'Monday, Wednesday, Friday - 8:00 AM - 9:00 AM',
      duration: '1 hour',
      benefits: ['Improved flexibility and balance', 'Better joint mobility', 'Reduced back pain', 'Enhanced posture'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Meditation & Mindfulness',
      description: 'Guided meditation sessions designed to reduce stress, improve mental clarity, and promote emotional well-being. Learn simple breathing techniques and mindfulness practices that you can use in daily life.',
      schedule: 'Daily - 7:00 AM - 7:30 AM & 6:00 PM - 6:30 PM',
      duration: '30 minutes',
      benefits: ['Reduced anxiety and stress', 'Better sleep quality', 'Improved concentration', 'Emotional balance'],
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Monitoring & Check-ups',
      description: 'Regular health assessments including blood pressure monitoring, diabetes screening, and general wellness checks. Our healthcare professionals provide personalized health advice and track your progress.',
      schedule: 'Every Tuesday & Thursday - 10:00 AM - 12:00 PM',
      duration: '2 hours',
      benefits: ['Early health issue detection', 'Personalized health advice', 'Regular vital monitoring', 'Peace of mind'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Exercise & Walking',
      description: 'Fun, social exercise sessions including chair exercises, light aerobics, and group walking activities. Designed to keep you active while enjoying the company of fellow community members.',
      schedule: 'Tuesday, Thursday, Saturday - 5:00 PM - 6:00 PM',
      duration: '1 hour',
      benefits: ['Cardiovascular health', 'Social interaction', 'Muscle strength', 'Weight management'],
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const healthServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Physiotherapy',
      description: 'Professional physiotherapy sessions for mobility issues, post-surgery recovery, and pain management',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Nutrition Counseling',
      description: 'Personalized diet plans and nutrition guidance for managing diabetes, hypertension, and other conditions',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Mental Health Support',
      description: 'Counseling and emotional support for dealing with loneliness, depression, and life transitions',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Fall Prevention',
      description: 'Specialized exercises and home safety assessments to reduce fall risks and improve stability',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const healthTips = [
    'Stay hydrated by drinking 8-10 glasses of water daily',
    'Maintain regular sleep schedule of 7-8 hours per night',
    'Include calcium and vitamin D rich foods in your diet',
    'Practice deep breathing exercises for stress management',
    'Take medications as prescribed and on time',
    'Engage in light physical activity for at least 30 minutes daily',
    'Keep emergency contact numbers easily accessible',
    'Schedule regular health check-ups and screenings'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Health & Wellness Programs for Seniors - EzyElders"
        description="Comprehensive health and wellness programs designed for senior citizens. Includes fitness classes, nutritional guidance, health monitoring, mental wellness support, and preventive care services at EzyElders."
        keywords="senior health programs, elder wellness, senior fitness, nutritional guidance seniors, mental health seniors, preventive care elderly, senior wellness center"
        url="/offerings/health-wellness"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Health & Wellness Programs</h1>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Comprehensive health and wellness programs designed specifically for senior citizens. Our holistic approach focuses on physical fitness, mental well-being, preventive care, and building healthy lifestyle habits that enhance your quality of life in the golden years.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Certified Healthcare Professionals</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-cyan-500 font-semibold">Senior-Focused Programs</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Holistic Wellness Approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Health & Wellness Programs</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Evidence-based programs designed to improve physical health, mental well-being, and overall quality of life for seniors
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={`https://placehold.co/600x400/${index % 2 === 0 ? 'E91E63' : '00BCD4'}/FFFFFF?text=${program.title.replace(/[\s&]/g, '+')}`}
                    alt={program.title}
                    className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-white p-8 rounded-xl shadow-lg border border-gray-300`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${program.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
                      <p className="text-sm text-gray-800 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {program.schedule} • {program.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Join This Program
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Health Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Health Services</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive support services to address all aspects of senior health and wellness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-800">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Daily Health Tips for Seniors</h2>
              <p className="text-lg text-gray-800 mb-6">
                Simple, practical health tips that you can easily incorporate into your daily routine to maintain good health and vitality.
              </p>
              <div className="space-y-3">
                {healthTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-300"
                  >
                    <Star className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{tip}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://placehold.co/600x500/00BCD4/FFFFFF?text=Healthy+Senior+Living"
                alt="Healthy senior living activities"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Health Programs?</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Our programs are specifically designed for senior citizens with safety, comfort, and effectiveness as top priorities
            </p>
          </motion.div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Certified healthcare professionals and fitness instructors',
                'Age-appropriate exercises with safety modifications',
                'Small group sizes for personalized attention',
                'Regular health monitoring and progress tracking',
                'Flexible scheduling to accommodate individual needs',
                'Transportation assistance for those who need it',
                'Family involvement and health updates',
                'Emergency medical support on-site',
                'Nutritious refreshments provided',
                'Clean, comfortable, and accessible facilities',
                'Free initial health assessment',
                'Coordination with your personal physician'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your Wellness Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our comprehensive health and wellness programs designed specifically for seniors. Take the first step towards a healthier, more active, and fulfilling life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Start Your Health Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Health Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthWellnessPage; 