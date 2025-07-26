import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Smartphone, Video, ShoppingCart, Shield, Wifi, Camera, Mail, MessageCircle, Clock, CheckCircle, Star, Heart, Phone, Brain } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const programs = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Smartphone Basics for Seniors',
      description: 'Master the fundamentals of using smartphones with patience and understanding. Learn to make calls, send messages, manage contacts, use the camera, and navigate your phone confidently. Our instructors go at your pace.',
      schedule: 'Monday & Wednesday - 11:00 AM - 12:30 PM',
      duration: '1.5 hours',
      benefits: ['Confident phone usage', 'Stay connected with family', 'Emergency communication', 'Independence in daily tasks'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Calling & Communication',
      description: 'Connect face-to-face with loved ones anywhere in the world. Learn WhatsApp video calls, Zoom meetings, and other video platforms. Experience the joy of seeing grandchildren and family members regularly.',
      schedule: 'Tuesday & Thursday - 10:00 AM - 11:30 AM',
      duration: '1.5 hours',
      benefits: ['See family anywhere', 'Join virtual events', 'Reduce loneliness', 'Build digital confidence'],
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Online Services & Shopping',
      description: 'Learn to safely use online services for shopping, banking, bill payments, and booking appointments. Understand how to compare prices, read reviews, and make secure transactions from the comfort of your home.',
      schedule: 'Friday - 2:00 PM - 3:30 PM',
      duration: '1.5 hours',
      benefits: ['Convenient shopping', 'Better prices', 'Avoid crowds', 'Access more options'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Digital Safety & Security',
      description: 'Protect yourself from online scams, learn about password security, privacy settings, and safe browsing. Understand how to identify suspicious emails, calls, and websites to keep your personal information secure.',
      schedule: 'Saturday - 3:00 PM - 4:30 PM',
      duration: '1.5 hours',
      benefits: ['Avoid online scams', 'Secure personal data', 'Safe browsing habits', 'Confidence online'],
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const digitalServices = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Internet & Wi-Fi Setup',
      description: 'Help with internet setup, Wi-Fi connection, and troubleshooting basic connectivity issues',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Management',
      description: 'Learn to take, organize, share, and backup your precious memories and family photos',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email & Communication',
      description: 'Master email basics, including sending, receiving, and organizing your digital correspondence',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Apps for Seniors',
      description: 'Discover useful apps for health tracking, news, weather, entertainment, and daily life',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const digitalBenefits = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Stay Connected',
      description: 'Maintain relationships with family and friends regardless of distance',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Mental Stimulation',
      description: 'Learning technology keeps your mind active and engaged',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Convenience',
      description: 'Access services, shopping, and entertainment from home',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Independence',
      description: 'Reduce dependence on others for daily digital tasks',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const techTips = [
    'Start with one feature at a time - don\'t try to learn everything at once',
    'Practice regularly, even if just for 10-15 minutes daily',
    'Don\'t be afraid to ask questions - there are no silly questions',
    'Keep important phone numbers written down as backup',
    'Use large fonts and high contrast settings for better visibility',
    'Keep your devices charged and learn where charging cables go',
    'Take notes during lessons to help remember new features',
    'Ask family members to help you practice video calling'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Technology Training for Seniors - Digital Learning Programs"
        description="Learn technology with confidence at EzyElders. We offer smartphone training, computer skills, video calling, online safety, and digital literacy programs specifically designed for senior citizens."
        keywords="senior technology training, digital literacy seniors, smartphone training elderly, computer skills seniors, online safety for elderly, senior digital education"
        url="/offerings/technology"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Technology Training for Seniors</h1>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Bridge the digital divide with patient, personalized technology training designed specifically for senior citizens. Our expert instructors understand the unique challenges seniors face with technology and provide supportive, judgment-free learning environments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Patient Expert Instructors</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-cyan-500 font-semibold">Small Class Sizes</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Hands-On Learning</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Technology Training Programs</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive courses designed to help seniors confidently navigate the digital world at their own pace
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
                    Enroll in This Course
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Digital Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Digital Services</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Beyond basic training, we offer specialized services to help you make the most of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalServices.map((service, index) => (
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

      {/* Benefits of Digital Literacy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Digital Literacy for Seniors</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Learning technology opens up a world of opportunities and enhances quality of life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-800">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Technology Learning Tips for Seniors</h2>
              <p className="text-lg text-gray-800 mb-6">
                Practical advice to make your technology learning journey easier and more enjoyable.
              </p>
              <div className="space-y-3">
                {techTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-300"
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
                src="https://placehold.co/600x500/00BCD4/FFFFFF?text=Senior+Learning+Technology"
                alt="Senior learning technology with instructor"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Our Technology Training Special?</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Our approach is specifically designed for senior learners with patience, understanding, and practical focus
            </p>
          </motion.div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Patient, experienced instructors who understand senior learning needs',
                'Small class sizes (maximum 4-6 students) for personalized attention',
                'Hands-on practice with your own device or our provided equipment',
                'Step-by-step written guides you can take home',
                'Repeat lessons at no extra cost until you\'re comfortable',
                'Large-print materials and high-contrast displays',
                'Family members welcome to join learning sessions',
                'Flexible scheduling including morning and afternoon options',
                'One-on-one support sessions available',
                'Device setup and customization assistance',
                'Ongoing support even after course completion',
                'Safe, comfortable learning environment'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{feature}</span>
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
            <h2 className="text-4xl font-bold mb-4">Start Your Digital Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards digital confidence. Our patient instructors will guide you through every step of learning technology at your own pace.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Start Learning Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Free Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage; 