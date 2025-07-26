import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Activity, Compass, BookOpen, Video, Users, ChevronRight, Clock, Star, Shield, Heart, CheckCircle, Calendar } from 'lucide-react';

const OfferingsPage: React.FC = () => {
  // SEO for offerings page
  useSEO({
    title: "Our Services - Comprehensive Senior Care & Wellness Programs",
    description: "Explore EzyElders' comprehensive senior care services including health & wellness programs, leisure activities, technology training, spiritual guidance, and custom engagement programs designed specifically for senior citizens.",
    keywords: "senior care services, elder wellness programs, senior activities, health programs for seniors, senior technology training, spiritual guidance, custom senior programs",
    url: "/offerings"
  });

  const offerings = [
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Engagement Activities',
      subtitle: 'Keep Your Mind Active & Spirit High',
      description: 'Interactive and stimulating activities designed to keep minds sharp, bodies mobile, and spirits lifted. Our engagement programs are carefully crafted to provide cognitive stimulation while ensuring fun and social interaction.',
      detailedFeatures: [
        {
          category: 'Cognitive Stimulation',
          items: ['Memory games and brain exercises', 'Puzzle solving sessions', 'Trivia and quiz competitions', 'Creative writing workshops']
        },
        {
          category: 'Arts & Crafts',
          items: ['Painting and sketching classes', 'Traditional craft workshops', 'Pottery and clay modeling', 'Flower arrangement sessions']
        },
        {
          category: 'Social Games',
          items: ['Board games tournaments', 'Card game sessions', 'Group storytelling', 'Musical chairs and fun activities']
        },
        {
          category: 'Physical Activities',
          items: ['Gentle chair exercises', 'Stretching and flexibility', 'Light dance movements', 'Breathing exercises']
        }
      ],
      benefits: ['Improved cognitive function', 'Enhanced social connections', 'Reduced feelings of isolation', 'Increased self-confidence'],
      schedule: 'Monday to Friday, 10:00 AM - 12:00 PM',
      duration: '2 hours per session',
      groupSize: '8-12 participants',
      link: '/offerings/health-wellness',
      image: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Engaging+Activities',
      color: 'bg-pink-100 text-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: 'Experiential Tours',
      subtitle: 'Explore the World Around You',
      description: 'Guided tours and outings that open new horizons and create lasting memories. Our experiential tours are designed with senior safety and comfort in mind, while providing enriching cultural and recreational experiences.',
      detailedFeatures: [
        {
          category: 'Cultural Tours',
          items: ['Historical site visits', 'Museum guided tours', 'Art gallery exhibitions', 'Heritage monument exploration']
        },
        {
          category: 'Nature Experiences',
          items: ['Garden and park visits', 'Botanical garden tours', 'Lake and scenic drives', 'Bird watching expeditions']
        },
        {
          category: 'Religious & Spiritual',
          items: ['Temple and shrine visits', 'Pilgrimage day trips', 'Spiritual retreat centers', 'Religious festival participation']
        },
        {
          category: 'Entertainment Outings',
          items: ['Theater and cultural performances', 'Movie theater visits', 'Shopping mall excursions', 'Restaurant dining experiences']
        }
      ],
      benefits: ['New experiences and perspectives', 'Opportunity to socialize', 'Physical activity through walking', 'Mental stimulation'],
      schedule: 'Twice a week, 9:00 AM - 4:00 PM',
      duration: 'Full day with breaks',
      groupSize: '6-10 participants',
      link: '/offerings/leisure-outings',
      image: 'https://placehold.co/600x400/00BCD4/FFFFFF?text=Experiential+Tours',
      color: 'bg-cyan-100 text-cyan-500',
      bgColor: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Online Knowledge Sharing',
      subtitle: 'Learn Something New Every Day',
      description: 'Virtual learning sessions that bring expert knowledge directly to you. Our online knowledge sharing platform offers a wide range of topics designed to keep seniors informed, engaged, and continuously learning.',
      detailedFeatures: [
        {
          category: 'Health & Wellness',
          items: ['Nutrition for seniors', 'Managing chronic conditions', 'Mental health awareness', 'Preventive healthcare tips']
        },
        {
          category: 'Financial Literacy',
          items: ['Senior financial planning', 'Understanding pensions', 'Investment basics', 'Avoiding financial scams']
        },
        {
          category: 'Life Skills',
          items: ['Home safety for seniors', 'Emergency preparedness', 'Legal rights and awareness', 'Consumer protection']
        },
        {
          category: 'Hobbies & Interests',
          items: ['Gardening tips and techniques', 'Cooking traditional recipes', 'Music appreciation', 'Literature discussions']
        }
      ],
      benefits: ['Continuous learning opportunities', 'Expert guidance from home', 'Flexible timing', 'Interactive Q&A sessions'],
      schedule: 'Daily sessions, 3:00 PM - 4:00 PM',
      duration: '1 hour per session',
      groupSize: '15-20 participants',
      link: '/offerings/technology',
      image: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Knowledge+Sharing',
      color: 'bg-pink-100 text-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Online Training',
      subtitle: 'Master Technology at Your Own Pace',
      description: 'Comprehensive technology training designed specifically for seniors. Our patient instructors help you navigate the digital world with confidence, ensuring you stay connected with family and friends.',
      detailedFeatures: [
        {
          category: 'Smartphone Basics',
          items: ['Making and receiving calls', 'Sending text messages', 'Using camera and gallery', 'Managing contacts']
        },
        {
          category: 'Video Calling',
          items: ['WhatsApp video calls', 'Zoom meeting participation', 'FaceTime for iPhone users', 'Google Meet basics']
        },
        {
          category: 'Internet Navigation',
          items: ['Using search engines', 'Online shopping basics', 'Banking and bill payments', 'Email management']
        },
        {
          category: 'Digital Safety',
          items: ['Recognizing online scams', 'Password security', 'Privacy settings', 'Safe browsing practices']
        }
      ],
      benefits: ['Stay connected with family', 'Access online services', 'Increased independence', 'Enhanced digital confidence'],
      schedule: 'Three times a week, 11:00 AM - 12:30 PM',
      duration: '1.5 hours per session',
      groupSize: '4-6 participants',
      link: '/offerings/technology',
      image: 'https://placehold.co/600x400/00BCD4/FFFFFF?text=Online+Training',
      color: 'bg-cyan-100 text-cyan-500',
      bgColor: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Customised Events',
      subtitle: 'Celebrations Tailored Just for You',
      description: 'Personalized events and celebrations that honor your special moments and interests. We create memorable experiences that bring families together and celebrate the richness of senior life.',
      detailedFeatures: [
        {
          category: 'Personal Celebrations',
          items: ['Birthday party planning', 'Anniversary celebrations', 'Family reunion coordination', 'Achievement recognition events']
        },
        {
          category: 'Cultural Events',
          items: ['Festival celebrations (Diwali, Eid, Christmas)', 'Traditional music and dance', 'Regional cultural programs', 'Community feast preparation']
        },
        {
          category: 'Interest-Based Groups',
          items: ['Book club gatherings', 'Photography workshops', 'Cooking demonstrations', 'Gardening clubs']
        },
        {
          category: 'Special Occasions',
          items: ['Retirement parties', 'Grandchildren visit celebrations', 'Health milestone achievements', 'Community service recognition']
        }
      ],
      benefits: ['Personalized attention', 'Family involvement', 'Community building', 'Creating lasting memories'],
      schedule: 'As per requirement and booking',
      duration: 'Flexible timing',
      groupSize: 'Customizable group size',
      link: '/offerings/custom-engagements',
      image: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Custom+Events',
      color: 'bg-pink-100 text-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'All activities are designed with senior safety as the top priority',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassionate Care',
      description: 'Our trained staff provide patient, understanding, and respectful service',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Timing',
      description: 'Programs scheduled during comfortable daytime hours with flexibility',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Quality Programs',
      description: 'Evidence-based activities proven to benefit senior physical and mental health',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Comprehensive Offerings</h1>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Discover our thoughtfully designed programs that cater to every aspect of senior well-being. 
              From physical activities to mental stimulation, social connections to personal growth - we have something meaningful for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">500+ Happy Members</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-cyan-500 font-semibold">5+ Years Experience</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Professional Care</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}>
                  <div className={`bg-gradient-to-br ${offering.bgColor} p-4 rounded-xl`}>
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-lg w-full h-[450px] object-cover shadow-lg"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-300">
                    <div className={`${offering.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      {offering.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-white p-8 rounded-xl shadow-lg border border-gray-300`}>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{offering.title}</h2>
                    <h3 className="text-xl text-pink-600 font-semibold mb-4">{offering.subtitle}</h3>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>

                  {/* Key Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
                      <div className="text-sm text-gray-800 font-semibold">Schedule</div>
                      <div className="text-xs text-gray-800">{offering.schedule}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
                      <div className="text-sm text-gray-800 font-semibold">Duration</div>
                      <div className="text-xs text-gray-800">{offering.duration}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
                      <div className="text-sm text-gray-800 font-semibold">Group Size</div>
                      <div className="text-xs text-gray-800">{offering.groupSize}</div>
                    </div>
                  </div>
                  
                  {/* Detailed Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {offering.detailedFeatures.map((category, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                          <h5 className="font-semibold text-gray-800 mb-2">{category.category}</h5>
                          <ul className="space-y-1">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-sm text-gray-800 flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-pink-600 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offering.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={offering.link}>
                    <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors hover:scale-105 transform flex items-center justify-center gap-2">
                      Learn More & Schedule <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EzyElders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose EzyElders?</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Our programs are carefully designed with senior needs, preferences, and safety as our top priorities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Complete Care & Support</h2>
              <div className="space-y-4">
                {[
                  'Transportation assistance for all outings and tours',
                  'Qualified healthcare professionals on standby',
                  'Family involvement and regular progress updates',
                  'Flexible scheduling to accommodate personal needs',
                  'Nutritious refreshments provided during sessions',
                  'Emergency contact system for peace of mind',
                  'Regular health and wellness monitoring',
                  'Social worker support for emotional well-being'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://placehold.co/600x500/00BCD4/FFFFFF?text=Complete+Care"
                alt="Complete care and support"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community today and discover programs designed specifically for your well-being, happiness, and continued growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Get Started Today
                </button>
              </Link>
              <Link to="/events">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  View Our Schedule
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfferingsPage; 