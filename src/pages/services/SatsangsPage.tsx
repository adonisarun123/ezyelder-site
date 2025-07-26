import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Music, Book, Heart, Users, Sparkles, Clock, Phone, CheckCircle, Star, Brain } from 'lucide-react';

const SatsangsPage: React.FC = () => {
  const programs = [
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Devotional Bhajan Sessions',
      description: 'Join our heartwarming bhajan sessions where traditional devotional songs create an atmosphere of peace and spiritual connection. These sessions help reduce stress, promote emotional well-being, and foster community bonding.',
      schedule: 'Tuesday & Thursday, 6:00 PM - 7:30 PM',
      duration: '1.5 hours',
      benefits: ['Emotional healing through music', 'Stress reduction', 'Community bonding', 'Cultural preservation'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Sacred Scripture Study',
      description: 'Explore the wisdom of ancient texts through guided reading and discussion. Our sessions cover Bhagavad Gita, Ramayana, and other spiritual literature, helping you find meaning and guidance for daily life.',
      schedule: 'Wednesday, 5:00 PM - 6:30 PM',
      duration: '1.5 hours',
      benefits: ['Ancient wisdom application', 'Mental stimulation', 'Life guidance', 'Group learning'],
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Meditation & Mindfulness',
      description: 'Experience inner peace through guided meditation practices designed for seniors. Learn simple breathing techniques, mindfulness exercises, and find tranquility in our supportive group environment.',
      schedule: 'Daily, 7:00 AM - 8:00 AM',
      duration: '1 hour',
      benefits: ['Inner peace', 'Better sleep quality', 'Reduced anxiety', 'Mental clarity'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Spiritual Discussions',
      description: 'Engage in meaningful conversations about life, purpose, and spirituality. Share experiences, ask questions, and learn from fellow community members in a warm, non-judgmental environment.',
      schedule: 'Saturday, 4:00 PM - 5:30 PM',
      duration: '1.5 hours',
      benefits: ['Shared wisdom', 'Social connection', 'Perspective sharing', 'Emotional support'],
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Feb 14',
      event: 'Maha Shivaratri Special Celebration',
      speaker: 'Sri Raghavendra Swami',
      description: 'Join us for a special night of devotion with bhajans, prayers, and spiritual discourse.',
      time: '6:00 PM - 9:00 PM'
    },
    {
      date: 'Feb 20',
      event: 'Bhagavad Gita Discourse Series',
      speaker: 'Swami Chinmayananda',
      description: 'Weekly series exploring the practical wisdom of the Gita for modern life.',
      time: '5:00 PM - 6:30 PM'
    },
    {
      date: 'Mar 8',
      event: 'Holi Festival Celebration',
      speaker: 'Community Event',
      description: 'Celebrate the festival of colors with traditional songs, sweets, and community bonding.',
      time: '3:00 PM - 6:00 PM'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Emotional Well-being',
      description: 'Spiritual practices help reduce depression, anxiety, and feelings of loneliness common in senior years.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Connection',
      description: 'Build meaningful relationships with like-minded individuals who share your spiritual journey.',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Mental Clarity',
      description: 'Regular spiritual practice enhances cognitive function and provides life perspective.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Sense of Purpose',
      description: 'Discover deeper meaning in life and maintain a positive outlook through spiritual growth.',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Spiritual Guidance & Satsangs for Seniors - EzyElders"
        description="Find spiritual peace and community connection through our Satsangs and spiritual guidance programs. Join fellow seniors in meditation, prayer, spiritual discussions, and meaningful fellowship at EzyElders."
        keywords="senior spiritual guidance, satsangs for elderly, meditation seniors, spiritual community seniors, prayer groups elderly, senior fellowship, spiritual wellness elderly"
        url="/offerings/satsangs"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Satsangs & Spirituality</h1>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Nurture your spiritual well-being through collective worship, devotional music, sacred text study, and meaningful discussions. Our programs provide a peaceful sanctuary for senior citizens to explore spirituality, find inner peace, and build lasting connections with a caring community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Daily Sessions Available</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-cyan-500 font-semibold">All Faith Traditions Welcome</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Experienced Spiritual Guides</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image with Overlay */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://placehold.co/1200x400/E91E63/FFFFFF?text=Peaceful+Satsang+Gathering"
          alt="Seniors in peaceful spiritual gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-8">
            <h2 className="text-3xl font-bold mb-2">Find Peace Within Yourself</h2>
            <p className="text-lg">Join our spiritual community for enlightenment, joy, and meaningful connections</p>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Spiritual Programs</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive spiritual activities designed to nurture your soul, enhance well-being, and connect you with a supportive community
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
                    src={`https://placehold.co/600x400/${index % 2 === 0 ? 'E91E63' : '00BCD4'}/FFFFFF?text=${program.title.replace(' ', '+')}`}
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Spiritual Practice for Seniors</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Research shows that spiritual practice significantly improves quality of life for senior citizens
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Spiritual Events</h2>
            <p className="text-xl text-gray-800">Special celebrations and events to enhance your spiritual journey</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-pink-600 to-cyan-500 text-white rounded-lg p-4 text-center min-w-[80px]">
                    <p className="text-2xl font-bold">{event.date.split(' ')[1]}</p>
                    <p className="text-sm">{event.date.split(' ')[0]}</p>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.event}</h3>
                    <p className="text-gray-800 mb-2">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-800">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-pink-600" />
                        {event.speaker}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-cyan-500" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">What to Expect in Our Satsangs</h2>
              <div className="space-y-4">
                {[
                  'Warm, welcoming environment with no judgment or pressure',
                  'Comfortable seating arrangements suitable for seniors',
                  'Audio amplification for clear hearing of teachings',
                  'Refreshments and light snacks provided',
                  'Transportation assistance for those who need it',
                  'Multilingual sessions in Hindi, English, and regional languages',
                  'Small group sizes for intimate, personal experience',
                  'Experienced spiritual guides and guest speakers'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-300"
                  >
                    <Star className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://placehold.co/600x500/00BCD4/FFFFFF?text=Peaceful+Spiritual+Environment"
                alt="Peaceful spiritual environment for seniors"
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
            <h2 className="text-4xl font-bold mb-4">Begin Your Spiritual Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the joy of collective worship, spiritual growth, and meaningful community connections. 
              All faith traditions and spiritual backgrounds are welcome in our inclusive environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Join Our Satsang
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SatsangsPage; 