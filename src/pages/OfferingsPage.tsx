import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Smartphone, MapPin, Sparkles, Users, ChevronRight } from 'lucide-react';

const OfferingsPage: React.FC = () => {
  const offerings = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Health & Wellness',
      description: 'Comprehensive wellness programs designed for senior health and vitality',
      features: [
        'Gentle yoga sessions',
        'Chair exercises',
        'Meditation & breathing techniques',
        'Health workshops',
        'Regular health monitoring'
      ],
      link: '/offerings/health-wellness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-red-100 to-pink-100'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Technology Tutoring',
      description: 'Bridge the digital divide with patient, personalized tech training',
      features: [
        'Smartphone basics',
        'WhatsApp & video calling',
        'Online shopping assistance',
        'Social media navigation',
        'Digital safety awareness'
      ],
      link: '/offerings/technology',
      image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-blue-100 to-cyan-100'
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: 'Leisure Outings',
      description: 'Exciting group outings to explore, socialize, and create memories',
      features: [
        'Temple visits',
        'Park picnics',
        'Cultural site tours',
        'Shopping trips',
        'Movie screenings'
      ],
      link: '/offerings/leisure-outings',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-green-100 to-emerald-100'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Satsangs & Spirituality',
      description: 'Nurture your spiritual well-being through collective worship and wisdom',
      features: [
        'Bhajan sessions',
        'Spiritual discussions',
        'Festival celebrations',
        'Scripture reading',
        'Meditation retreats'
      ],
      link: '/offerings/satsangs',
      image: 'https://images.unsplash.com/photo-1588906297062-bf21ac5e0a10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-purple-100 to-indigo-100'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Custom Engagements',
      description: 'Personalized activities tailored to your interests and preferences',
      features: [
        'Birthday celebrations',
        'Hobby clubs',
        'Art & craft workshops',
        'Book reading circles',
        'Special interest groups'
      ],
      link: '/offerings/custom-engagements',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'from-yellow-100 to-orange-100'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lavender via-sky to-warm-beige py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Offerings</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover our comprehensive range of services designed to enrich every aspect of senior life. 
              From wellness programs to social activities, we have something for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="space-y-20">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`bg-gradient-to-r ${offering.color} p-1 rounded-2xl`}>
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${offering.color} p-4 rounded-2xl`}>
                      {offering.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">{offering.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-dark-lavender rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={offering.link}>
                    <button className="btn-primary flex items-center gap-2">
                      Learn More <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our offerings are carefully designed with seniors in mind, ensuring comfort, safety, and maximum benefit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Small Groups</h3>
              <p className="text-gray-600">
                Intimate group sizes ensure personalized attention and meaningful connections
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-sky rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Trained professionals who understand senior needs and capabilities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Convenient Locations</h3>
              <p className="text-gray-600">
                Multiple centers across Bangalore with easy accessibility
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community today and discover a world of activities designed just for you
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link to="/events">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-lavender transition-all">
                  View Schedule
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