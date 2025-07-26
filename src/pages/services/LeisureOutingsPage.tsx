import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Camera, Bus, Sparkles, Calendar, Clock, CheckCircle, Star, Heart, Phone, Compass, TreePine, Mountain, Building } from 'lucide-react';

const LeisureOutingsPage: React.FC = () => {
  const tourCategories = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Cultural & Heritage Tours',
      description: 'Explore rich cultural heritage sites, museums, and historical monuments with expert guides who bring history to life. Perfect for curious minds who love learning about our past.',
      schedule: 'Every Tuesday & Friday - 9:00 AM - 4:00 PM',
      duration: '7 hours (including breaks)',
      benefits: ['Historical knowledge', 'Cultural appreciation', 'Mental stimulation', 'Group learning'],
      color: 'bg-pink-100 text-pink-600',
      destinations: ['Mysore Palace', 'Bangalore Palace', 'Tipu Sultan Palace', 'HAL Aerospace Museum']
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Nature & Garden Experiences',
      description: 'Immerse yourself in the beauty of nature with visits to botanical gardens, parks, and scenic locations. Breathe fresh air, enjoy gentle walks, and connect with nature.',
      schedule: 'Every Wednesday & Saturday - 8:00 AM - 2:00 PM',
      duration: '6 hours (with rest stops)',
      benefits: ['Fresh air & exercise', 'Stress reduction', 'Nature connection', 'Photography opportunities'],
      color: 'bg-cyan-100 text-cyan-500',
      destinations: ['Lalbagh Botanical Garden', 'Cubbon Park', 'Butterfly Garden', 'Bannerghatta Biological Park']
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Spiritual & Temple Visits',
      description: 'Join peaceful spiritual journeys to famous temples and spiritual centers. Experience divine serenity, participate in prayers, and find inner peace with fellow devotees.',
      schedule: 'Every Thursday & Sunday - 6:00 AM - 3:00 PM',
      duration: '9 hours (including travel)',
      benefits: ['Spiritual fulfillment', 'Inner peace', 'Community bonding', 'Cultural traditions'],
      color: 'bg-pink-100 text-pink-600',
      destinations: ['ISKCON Temple', 'Bull Temple', 'Chamundeshwari Temple', 'Melkote Temple']
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Scenic Day Trips',
      description: 'Venture to nearby hill stations and scenic locations for breathtaking views and refreshing experiences. Enjoy picnic lunches and group activities in beautiful settings.',
      schedule: 'Monthly trips - 7:00 AM - 6:00 PM',
      duration: '11 hours (full day)',
      benefits: ['Scenic beauty', 'Fresh mountain air', 'Adventure & excitement', 'Memorable experiences'],
      color: 'bg-cyan-100 text-cyan-500',
      destinations: ['Nandi Hills', 'Skandagiri', 'Savandurga', 'Ramanagara Hills']
    }
  ];

  const upcomingTrips = [
    {
      date: 'Feb 15, 2024',
      destination: 'ISKCON Temple & Vrindavan Gardens',
      spots: 20,
      price: '₹800',
      description: 'Spiritual visit followed by beautiful garden tour',
      category: 'Spiritual',
      image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=ISKCON+Temple'
    },
    {
      date: 'Feb 22, 2024',
      destination: 'Mysore Palace & Chamundi Hills',
      spots: 15,
      price: '₹1200',
      description: 'Royal heritage tour with scenic hill station visit',
      category: 'Cultural',
      image: 'https://placehold.co/400x300/00BCD4/FFFFFF?text=Mysore+Palace'
    },
    {
      date: 'Mar 5, 2024',
      destination: 'Lalbagh & Cubbon Park',
      spots: 25,
      price: '₹500',
      description: 'Nature walks and botanical garden exploration',
      category: 'Nature',
      image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=Lalbagh+Gardens'
    }
  ];

  const tourFeatures = [
    {
      icon: <Bus className="w-8 h-8" />,
      title: 'Comfortable Transportation',
      description: 'Air-conditioned buses with comfortable seating and safety features',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Guides',
      description: 'Knowledgeable local guides who share interesting stories and facts',
      color: 'bg-cyan-100 text-cyan-500'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography Support',
      description: 'Help with taking photos and capturing memories at scenic spots',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare Support',
      description: 'Trained staff and first aid available throughout the journey',
      color: 'bg-cyan-100 text-cyan-500'
    }
  ];

  const safetyMeasures = [
    'Professional drivers with excellent safety records',
    'First aid kit and trained medical personnel on every trip',
    'Regular rest stops every 1-2 hours for comfort',
    'Wheelchair accessible vehicles available',
    'Emergency contact system for families',
    'Weather monitoring and trip adjustments as needed',
    'Small group sizes for personalized attention',
    'Comfortable pace with no rushing or time pressure'
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Experiential Tours & Outings</h1>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Discover the beauty around you with our carefully curated experiential tours. From cultural heritage sites to serene nature spots, spiritual centers to scenic hill stations - we make exploration safe, comfortable, and enriching for senior citizens.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Safe & Comfortable Travel</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-cyan-500 font-semibold">Expert Local Guides</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
                <span className="text-pink-600 font-semibold">Small Group Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://placehold.co/1200x400/00BCD4/FFFFFF?text=Happy+Seniors+on+Tour"
          alt="Happy seniors enjoying an experiential tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-8">
            <h2 className="text-3xl font-bold mb-2">Adventure & Discovery Await!</h2>
            <p className="text-lg">Join us for memorable journeys, new experiences, and lifelong friendships</p>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Experiential Tour Categories</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Carefully planned tours designed for comfort, safety, and maximum enjoyment for senior citizens
            </p>
          </motion.div>

          <div className="space-y-12">
            {tourCategories.map((category, index) => (
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
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Popular Destinations:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.destinations.map((destination, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800">{destination}</span>
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
                    Book This Tour Category
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Our Tours Special</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Every aspect of our tours is designed with senior comfort, safety, and enjoyment in mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourFeatures.map((feature, index) => (
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

      {/* Upcoming Trips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Tours</h2>
            <p className="text-xl text-gray-800">Book your spot for these exciting adventures</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-pink-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{trip.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{trip.destination}</h3>
                  <p className="text-gray-800 mb-3">{trip.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-pink-600">{trip.price}</span>
                    <span className="text-sm text-gray-800">Available spots: {trip.spots}</span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-100 text-cyan-500 px-3 py-1 rounded-lg text-sm font-medium">
                      {trip.category}
                    </span>
                  </div>
                  <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Safety is Our Priority</h2>
              <p className="text-lg text-gray-800 mb-6">
                We understand the unique needs of senior travelers and have implemented comprehensive safety measures to ensure your peace of mind.
              </p>
              <div className="space-y-3">
                {safetyMeasures.map((measure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-300"
                  >
                    <Star className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{measure}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://placehold.co/600x500/00BCD4/FFFFFF?text=Safe+Senior+Travel"
                alt="Safe and comfortable senior travel"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What's Included in Every Tour</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              We take care of everything so you can focus on enjoying your experience
            </p>
          </motion.div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Round-trip transportation in comfortable, air-conditioned vehicles',
                'Professional local guides with extensive knowledge',
                'Entry tickets to all attractions and monuments',
                'Refreshments and meals as per itinerary',
                'First aid kit and trained medical personnel',
                'Photography assistance and group photos',
                'Comfortable rest stops every 1-2 hours',
                'Wheelchair accessibility where needed',
                'Emergency contact system for families',
                'Small group sizes for personalized attention',
                'Weather-appropriate itinerary adjustments',
                'Souvenir shopping assistance'
              ].map((inclusion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{inclusion}</span>
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
            <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our experiential tours and discover amazing places while making new friends and creating unforgettable memories.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Explore Our Tours
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Your Tour Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeisureOutingsPage; 