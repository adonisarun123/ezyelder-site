import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    { value: 'wellness', label: 'Health & Wellness', color: 'bg-red-100' },
    { value: 'technology', label: 'Technology', color: 'bg-blue-100' },
    { value: 'social', label: 'Social', color: 'bg-green-100' },
    { value: 'spiritual', label: 'Spiritual', color: 'bg-purple-100' },
    { value: 'outing', label: 'Outings', color: 'bg-yellow-100' }
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
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
      },
      {
        title: 'Smartphone Workshop',
        category: 'technology' as const,
        time: '10:00 AM',
        location: 'Tech Center',
        description: 'Learn WhatsApp and video calling',
        capacity: 15,
        image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=400'
      },
      {
        title: 'Cultural Evening',
        category: 'social' as const,
        time: '5:00 PM',
        location: 'Main Hall',
        description: 'Music, dance, and refreshments',
        capacity: 50,
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400'
      },
      {
        title: 'Bhajan Session',
        category: 'spiritual' as const,
        time: '6:00 PM',
        location: 'Prayer Room',
        description: 'Devotional songs and meditation',
        capacity: 30,
        image: 'https://images.unsplash.com/photo-1588906297062-bf21ac5e0a10?w=400'
      },
      {
        title: 'Garden Visit',
        category: 'outing' as const,
        time: '9:00 AM',
        location: 'Lalbagh Gardens',
        description: 'Morning walk and nature appreciation',
        capacity: 25,
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400'
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
      case 'wellness': return 'bg-red-500';
      case 'technology': return 'bg-blue-500';
      case 'social': return 'bg-green-500';
      case 'spiritual': return 'bg-purple-500';
      case 'outing': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const upcomingEvents = filteredEvents
    .filter(event => event.date >= new Date())
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lavender to-sky py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Events & Workshops</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join us for enriching activities, workshops, and social gatherings designed to keep you active, engaged, and connected
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-[88px] z-40">
        <div className="section-padding">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all flex-shrink-0 ${
                  selectedCategory === category.value
                    ? 'bg-dark-lavender text-white'
                    : `${category.color} text-gray-700 hover:opacity-80`
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrollable Calendar */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
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
                className="p-2 rounded-full hover:bg-lavender transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-semibold text-lg px-4">
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
                className="p-2 rounded-full hover:bg-lavender transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
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
                    className={`flex-shrink-0 w-40 bg-white rounded-xl shadow-md p-4 ${
                      isToday ? 'ring-2 ring-dark-lavender' : ''
                    }`}
                  >
                    <div className="text-center mb-3">
                      <p className="text-sm text-gray-500">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </p>
                      <p className={`text-2xl font-bold ${isToday ? 'text-dark-lavender' : 'text-gray-800'}`}>
                        {i + 1}
                      </p>
                    </div>
                    
                    {dayEvents.length > 0 ? (
                      <div className="space-y-2">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="text-xs p-2 rounded-lg bg-gray-50"
                          >
                            <div className={`w-2 h-2 rounded-full ${getCategoryColor(event.category)} mb-1`}></div>
                            <p className="font-medium text-gray-800 line-clamp-1">{event.title}</p>
                            <p className="text-gray-500">{event.time}</p>
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <p className="text-xs text-gray-500 text-center">
                            +{dayEvents.length - 2} more
                          </p>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 text-center">No events</p>
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
        <div className="section-padding">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    categories.find(c => c.value === event.category)?.color
                  }`}>
                    {categories.find(c => c.value === event.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.enrolled}/{event.capacity} enrolled</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="mb-2">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-dark-lavender rounded-full h-2 transition-all"
                        style={{ width: `${(event.enrolled / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button 
                    className="btn-primary w-full"
                    disabled={event.enrolled >= event.capacity}
                  >
                    {event.enrolled >= event.capacity ? 'Full' : 'Register Now'}
                  </button>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community to get notified about new events and exclusive activities
            </p>
            <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Subscribe to Event Updates
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage; 