import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Calendar, Star, ChevronRight, Activity, BookOpen, Compass, Video, Sparkles, Phone, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  // EzyElders main services as specified in design guide
  const services = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Engagement Activities',
      description: 'Interactive games, arts & crafts, and social activities designed to keep minds active and spirits high',
      link: '/offerings/health-wellness',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Experiential Tours',
      description: 'Guided cultural visits, nature walks, and memorable outings to explore new places safely',
      link: '/offerings/leisure-outings',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Online Knowledge Sharing',
      description: 'Virtual sessions on health, finance, hobbies, and life skills from expert instructors',
      link: '/offerings/technology',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Online Training',
      description: 'Technology tutorials, digital literacy, and skill development courses tailored for seniors',
      link: '/offerings/technology',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customised Events',
      description: 'Personalized celebrations, family gatherings, and special occasion events designed just for you',
      link: '/offerings/custom-engagements',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Kamala Devi',
      age: '72 years',
      text: 'EzyElders has brought so much joy to my life. The engagement activities keep me mentally sharp, and I\'ve made wonderful friends!',
      image: 'https://placehold.co/80x80/E91E63/FFFFFF?text=KD'
    },
    {
      name: 'Raman Nair',
      age: '68 years',
      text: 'The online training sessions helped me learn video calling. Now I talk to my grandchildren abroad every week!',
      image: 'https://placehold.co/80x80/00BCD4/FFFFFF?text=RN'
    },
    {
      name: 'Savitri Sharma',
      age: '75 years',
      text: 'The experiential tours are amazing. I\'ve visited places I never thought possible at my age. Thank you, EzyElders!',
      image: 'https://placehold.co/80x80/E91E63/FFFFFF?text=SS'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Seniors' },
    { number: '50+', label: 'Activities Monthly' },
    { number: '15+', label: 'Expert Instructors' },
    { number: '5', label: 'Years of Service' }
  ];

  const upcomingEvents = [
    {
      date: 'Tomorrow, 10:00 AM',
      title: 'Memory Games Workshop',
      description: 'Fun cognitive exercises to keep your mind sharp',
      borderColor: 'border-pink-600'
    },
    {
      date: 'This Saturday, 3:00 PM',
      title: 'Virtual Museum Tour',
      description: 'Online guided tour of the National Museum',
      borderColor: 'border-cyan-500'
    },
    {
      date: 'Next Week, 5:00 PM',
      title: 'Cultural Evening',
      description: 'Music, dance, and traditional celebrations',
      borderColor: 'border-pink-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                EzyElders:{' '}
                <span className="text-pink-600">Enriching Lives</span>{' '}
                for Senior Citizens
              </h1>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                Join our vibrant community where seniors discover joy, wellness, and meaningful connections through engaging activities, experiential tours, and personalized care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/join-us">
                  <button className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors hover:scale-105 transform flex items-center gap-2">
                    Explore Our Services <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-colors hover:scale-105 transform">
                    Join Our Community
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://placehold.co/600x500/E91E63/FFFFFF?text=Happy+Seniors+Together"
                alt="Happy seniors enjoying EzyElders activities"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                  <span className="font-semibold text-gray-800">Trusted by 500+ Families</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</h3>
                <p className="text-gray-800">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Discover a comprehensive range of services designed to enrich your golden years with joy, learning, and meaningful connections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 h-full border border-gray-300">
                    <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-800 mb-4">{service.description}</p>
                    <span className="text-pink-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://placehold.co/600x400/00BCD4/FFFFFF?text=Our+Mission"
                alt="EzyElders mission and vision"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About EzyElders</h2>
              <p className="text-lg text-gray-800 mb-6">
                At EzyElders, we believe that the golden years should be truly golden. Our mission is to create a vibrant community where senior citizens can thrive, learn, and connect with others who share their enthusiasm for life.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                Founded with the vision of enhancing the quality of life for seniors, we offer personalized services that cater to diverse interests and needs. From engaging activities that stimulate the mind to experiential tours that create lasting memories.
              </p>
              <div className="flex gap-4">
                <Link to="/about">
                  <button className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Our Story
                  </button>
                </Link>
                <Link to="/testimonials">
                  <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                    Success Stories
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-800">Real stories from our cherished members</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-800">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-pink-600 text-pink-600" />
                  ))}
                </div>
                <p className="text-gray-800 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <button className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors">
                Read More Stories
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-800">Join us for these exciting activities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${event.borderColor} border-r border-t border-b border-gray-300`}
              >
                <div className="flex items-center gap-2 text-pink-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-800">{event.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-colors">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards a more active, social, and fulfilling life with EzyElders
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </button>
              </Link>
              <Link to="/join-us">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Join Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 