import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  category: 'wellness' | 'technology' | 'social' | 'spiritual' | 'outing';
  description: string;
  capacity: number;
  enrolled: number;
  image: string;
}

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const categories = [
    { value: 'all', label: 'All Events', color: 'bg-gray-100' },
    { value: 'wellness', label: 'Health & Wellness', color: 'bg-pink-100' },
    { value: 'technology', label: 'Technology', color: 'bg-cyan-100' },
    { value: 'social', label: 'Social', color: 'bg-pink-100' },
    { value: 'spiritual', label: 'Spiritual', color: 'bg-cyan-100' },
    { value: 'outing', label: 'Outings', color: 'bg-pink-100' }
  ];

  // Generate sample events
  const generateEvents = (): Event[] => {
    const events: Event[] = [];
    const eventTemplates = [
      {
        title: 'Morning Yoga Session',
        category: 'wellness' as const,
        time: '7:00 AM',
        location: 'Community Hall',
        description: 'Gentle yoga for flexibility and balance',
        capacity: 20,
        image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=Yoga+Session'
      },
      {
        title: 'Smartphone Workshop',
        category: 'technology' as const,
        time: '10:00 AM',
        location: 'Tech Center',
        description: 'Learn WhatsApp and video calling',
        capacity: 15,
        image: 'https://placehold.co/400x300/00BCD4/FFFFFF?text=Tech+Workshop'
      },
      {
        title: 'Cultural Evening',
        category: 'social' as const,
        time: '5:00 PM',
        location: 'Main Hall',
        description: 'Music, dance, and refreshments',
        capacity: 50,
        image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=Cultural+Evening'
      },
      {
        title: 'Bhajan Session',
        category: 'spiritual' as const,
        time: '6:00 PM',
        location: 'Prayer Room',
        description: 'Devotional songs and meditation',
        capacity: 30,
        image: 'https://placehold.co/400x300/00BCD4/FFFFFF?text=Bhajan+Session'
      },
      {
        title: 'Garden Visit',
        category: 'outing' as const,
        time: '9:00 AM',
        location: 'Lalbagh Gardens',
        description: 'Morning walk and nature appreciation',
        capacity: 25,
        image: 'https://placehold.co/400x300/E91E63/FFFFFF?text=Garden+Visit'
      }
    ];

    // Generate events for the next 60 days
    for (let i = 0; i < 60; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      
      // Add 1-3 events per day
      const eventsPerDay = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < eventsPerDay; j++) {
        const template = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
        events.push({
          id: i * 10 + j,
          ...template,
          date,
          enrolled: Math.floor(Math.random() * template.capacity * 0.8)
        });
      }
    }
    
    return events;
  };

  const events = generateEvents();

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'wellness': return 'bg-pink-600';
      case 'technology': return 'bg-cyan-500';
      case 'social': return 'bg-pink-600';
      case 'spiritual': return 'bg-cyan-500';
      case 'outing': return 'bg-pink-600';
      default: return 'bg-gray-500';
    }
  };

  const upcomingEvents = filteredEvents
    .filter(event => event.date >= new Date())
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Senior Events & Activities - EzyElders Community Calendar"
        description="Discover upcoming events and activities at EzyElders. Join our community calendar featuring wellness workshops, social gatherings, educational sessions, and fun activities designed for senior citizens."
        keywords="senior events, elder activities, senior calendar, community events, senior workshops, elder social activities, senior gatherings"
        url="/events"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Events & Workshops</h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Join us for enriching activities, workshops, and social gatherings designed to keep you active, engaged, and connected with our vibrant senior community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compact Category Filter */}
      <section className="py-3 bg-white border-b sticky top-[80px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter className="w-4 h-4 text-gray-600 flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex-shrink-0 text-sm ${
                    selectedCategory === category.value
                      ? 'bg-pink-600 text-white shadow-md'
                      : `${category.color} text-gray-800 hover:shadow-md border border-gray-300`
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrollable Calendar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800">Event Calendar</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (selectedMonth === 0) {
                    setSelectedMonth(11);
                    setSelectedYear(selectedYear - 1);
                  } else {
                    setSelectedMonth(selectedMonth - 1);
                  }
                }}
                className="p-2 rounded-lg hover:bg-pink-100 transition-colors border border-gray-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <span className="font-semibold text-lg px-4 text-gray-800">
                {monthNames[selectedMonth]} {selectedYear}
              </span>
              <button
                onClick={() => {
                  if (selectedMonth === 11) {
                    setSelectedMonth(0);
                    setSelectedYear(selectedYear + 1);
                  } else {
                    setSelectedMonth(selectedMonth + 1);
                  }
                }}
                className="p-2 rounded-lg hover:bg-pink-100 transition-colors border border-gray-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Calendar Grid - Horizontal Scroll */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => {
                const date = new Date(selectedYear, selectedMonth, i + 1);
                const dayEvents = getEventsForDate(date);
                const isToday = 
                  date.getDate() === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth() &&
                  date.getFullYear() === new Date().getFullYear();

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className={`flex-shrink-0 w-40 bg-white rounded-xl shadow-lg border border-gray-300 p-4 ${
                      isToday ? 'ring-2 ring-pink-600' : ''
                    }`}
                  >
                    <div className="text-center mb-3">
                      <p className="text-sm text-gray-800">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </p>
                      <p className={`text-2xl font-bold ${isToday ? 'text-pink-600' : 'text-gray-800'}`}>
                        {i + 1}
                      </p>
                    </div>
                    
                    {dayEvents.length > 0 ? (
                      <div className="space-y-2">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="text-xs p-2 rounded-lg bg-gray-50 border border-gray-300"
                          >
                            <div className={`w-2 h-2 rounded-full ${getCategoryColor(event.category)} mb-1`}></div>
                            <p className="font-medium text-gray-800 line-clamp-1">{event.title}</p>
                            <p className="text-gray-800">{event.time}</p>
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <p className="text-xs text-gray-800 text-center">
                            +{dayEvents.length - 2} more
                          </p>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-gray-800 text-center">No events</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium ${
                    categories.find(c => c.value === event.category)?.color
                  } border border-gray-300`}>
                    {categories.find(c => c.value === event.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-800 mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-800">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-pink-600" />
                    <span>{event.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-500" />
                    <span>{event.enrolled}/{event.capacity} enrolled</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="mb-2">
                    <div className="bg-gray-300 rounded-full h-2">
                      <div 
                        className="bg-pink-600 rounded-full h-2 transition-all"
                        style={{ width: `${(event.enrolled / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button 
                    className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={event.enrolled >= event.capacity}
                  >
                    {event.enrolled >= event.capacity ? 'Event Full' : 'Register Now'}
                  </button>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community to get notified about new events and exclusive activities designed for senior citizens
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Subscribe to Event Updates
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage; 