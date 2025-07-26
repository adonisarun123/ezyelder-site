import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, Music, Palette, Calendar, Star, Clock, CheckCircle, Heart, Phone, PartyPopper, Camera, Crown } from 'lucide-react';

const CustomEngagementsPage: React.FC = () => {
  const eventCategories = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Personal Celebrations',
      description: 'Make your special days truly memorable with personalized celebrations. Whether it\'s a birthday, anniversary, or achievement milestone, we create intimate gatherings that honor your unique story and bring family together.',
      schedule: 'Flexible scheduling as per your preference',
      duration: '2-4 hours depending on event',
      benefits: ['Personalized planning', 'Family involvement', 'Memory creation', 'Professional coordination'],
      color: 'bg-pink-100 text-pink-600',
      services: ['Birthday party planning', 'Anniversary celebrations', 'Achievement recognition', 'Family reunion coordination']
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Cultural Festivals',
      description: 'Celebrate traditional festivals and cultural events with authentic decorations, traditional food, music, and customs. Connect with your heritage while sharing joy with the community.',
      schedule: 'Seasonal festivals and special occasions',
      duration: '3-6 hours for full celebration',
      benefits: ['Cultural connection', 'Traditional celebration', 'Community bonding', 'Authentic experience'],
      color: 'bg-cyan-100 text-cyan-500',
      services: ['Diwali celebrations', 'Eid festivities', 'Christmas gatherings', 'Regional festival events']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Interest-Based Groups',
      description: 'Join or create special interest groups around your hobbies and passions. From book clubs to gardening groups, art workshops to cooking sessions - find your tribe and pursue your interests.',
      schedule: 'Weekly or bi-weekly meetings',
      duration: '2-3 hours per session',
      benefits: ['Shared interests', 'New friendships', 'Skill development', 'Regular engagement'],
      color: 'bg-pink-100 text-pink-600',
      services: ['Book club gatherings', 'Gardening workshops', 'Art & craft sessions', 'Cooking demonstrations']
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Entertainment Events',
      description: 'Enjoy specially curated entertainment programs featuring live music, dance performances, storytelling sessions, and interactive shows designed to delight and engage senior audiences.',
      schedule: 'Monthly entertainment programs',
      duration: '2-3 hours of entertainment',
      benefits: ['Cultural entertainment', 'Social interaction', 'Joy & laughter', 'Mental stimulation'],
      color: 'bg-cyan-100 text-cyan-500',
      services: ['Live music concerts', 'Dance performances', 'Comedy shows', 'Storytelling evenings']
    }
  ];

  const upcomingEvents = [
    {
      date: 'Feb 18, 2024',
      event: 'Mrs. Kamala\'s 75th Birthday Celebration',
      type: 'Personal Celebration',
      guests: '25 family members',
      description: 'A special celebration with traditional music, family stories, and her favorite foods',
      image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=Birthday+Celebration'
    },
    {
      date: 'Feb 25, 2024',
      event: 'Holi Festival Celebration',
      type: 'Cultural Festival',
      guests: '50 community members',
      description: 'Traditional Holi celebration with colors, sweets, and festive music',
      image: 'https://placehold.co/400x300/00BCD4/FFFFFF?text=Holi+Festival'
    },
    {
      date: 'Mar 8, 2024',
      event: 'Women\'s Day Art Exhibition',
      type: 'Interest Group',
      guests: '30 art enthusiasts',
      description: 'Showcase of artwork created by our senior women artists',
      image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=Art+Exhibition'
    }
  ];

  const customizationOptions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest List Management',
      description: 'Help with invitations, RSVP tracking, and guest coordination',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Theme & Decoration',
      description: 'Custom themes, decorations, and ambiance setting for your event',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Entertainment Booking',
      description: 'Live musicians, dancers, or other performers based on preferences',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography Services',
      description: 'Professional photography to capture all your special moments',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const planningProcess = [
    'Initial consultation to understand your vision and preferences',
    'Custom event design and timeline creation',
    'Venue selection and setup coordination',
    'Catering arrangements with dietary considerations',
    'Entertainment and activity planning',
    'Invitation design and guest coordination',
    'Day-of event management and coordination',
    'Post-event photo sharing and memory book creation'
  ];

  const eventFeatures = [
    'Personalized event planning tailored to your preferences',
    'Dietary accommodations for various health conditions',
    'Wheelchair accessible venues and facilities',
    'Family involvement in planning and execution',
    'Professional photography and videography services',
    'Live music and entertainment options',
    'Traditional and cultural authenticity when desired',
    'Small intimate gatherings or larger community events',
    'Flexible timing and duration options',
    'Memory books and photo albums as keepsakes',
    'Transportation assistance for guests if needed',
    'Post-event cleanup and venue management'
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Customised Events & Celebrations</h1>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Create magical moments with our personalized event planning services. From intimate birthday celebrations to grand cultural festivals, we design memorable experiences that honor your life, traditions, and special occasions with the attention and care you deserve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Fully Personalized Planning</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-cyan-500 font-semibold">Family-Centered Approach</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Cultural Authenticity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://placehold.co/1200x400/E91E63/FFFFFF?text=Joyful+Celebrations"
          alt="Seniors enjoying customized celebration events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-8">
            <h2 className="text-3xl font-bold mb-2">Every Celebration is Unique</h2>
            <p className="text-lg">Just like you - let us create something special that reflects your personality and brings joy to your heart</p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Customized Event Categories</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              From intimate personal celebrations to vibrant community festivals - we create events that celebrate you and your special moments
            </p>
          </motion.div>

          <div className="space-y-12">
            {eventCategories.map((category, index) => (
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
                    src={`https://placehold.co/600x400/${index % 2 === 0 ? 'E91E63' : '00BCD4'}/FFFFFF?text=${category.title.replace(/[\s&]/g, '+')}`}
                    alt={category.title}
                    className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-white p-8 rounded-xl shadow-lg border border-gray-300`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                      <p className="text-sm text-gray-800 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {category.schedule} • {category.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Services Include:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <PartyPopper className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Plan Your Event
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Customization Options</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Every detail can be tailored to your preferences, ensuring your event is uniquely yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${option.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{option.title}</h3>
                <p className="text-gray-800">{option.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Customized Events</h2>
            <p className="text-xl text-gray-800">Join us for these special celebrations planned for our community members</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={event.image}
                  alt={event.event}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-pink-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.event}</h3>
                  <p className="text-gray-800 mb-3">{event.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block bg-cyan-100 text-cyan-500 px-3 py-1 rounded-lg text-sm font-medium">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-800">{event.guests}</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Event Planning Process</h2>
              <p className="text-lg text-gray-800 mb-6">
                We work closely with you and your family to ensure every detail is perfect and every moment is memorable.
              </p>
              <div className="space-y-3">
                {planningProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-300"
                  >
                    <div className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-800">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://placehold.co/600x500/00BCD4/FFFFFF?text=Event+Planning+Process"
                alt="Professional event planning for seniors"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What's Included in Every Event</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive event planning and execution services designed specifically for senior celebrations
            </p>
          </motion.div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-4xl font-bold mb-4">Let's Plan Your Perfect Celebration</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every milestone deserves to be celebrated. Let us help you create magical moments that honor your life, achievements, and the special occasions that matter most to you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Start Planning Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomEngagementsPage; 