import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SEO from '../components/SEO';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  image: string;
  text: string;
  rating: number;
  date: string;
  program: string;
}

const TestimonialsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Kamala Devi',
      age: 72,
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'EzyElders has transformed my life completely. After my husband passed away, I felt so lonely and lost. But joining the yoga sessions and social gatherings has given me a new family. The instructors are so patient and caring. I\'ve made wonderful friends and feel healthier than I have in years!',
      rating: 5,
      date: '2024-01-10',
      program: 'Yoga & Social Activities'
    },
    {
      id: 2,
      name: 'Raman Nair',
      age: 68,
      image: 'https://randomuser.me/api/portraits/men/70.jpg',
      text: 'I was always scared of technology, but the smartphone classes at EzyElders changed everything. Now I video call my grandchildren in America every week! The teachers go at our pace and never make us feel stupid for asking questions. It\'s opened up a whole new world for me.',
      rating: 5,
      date: '2024-01-05',
      program: 'Technology Training'
    },
    {
      id: 3,
      name: 'Savitri Sharma',
      age: 75,
      image: 'https://randomuser.me/api/portraits/women/71.jpg',
      text: 'The satsangs and bhajan sessions fulfill my spiritual needs beautifully. It\'s not just about the prayers, but the sense of community and belonging. The temple visits are well-organized, and I feel safe and cared for. EzyElders understands what we elders truly need.',
      rating: 5,
      date: '2023-12-28',
      program: 'Spiritual Programs'
    },
    {
      id: 4,
      name: 'Krishnan Iyer',
      age: 70,
      image: 'https://randomuser.me/api/portraits/men/72.jpg',
      text: 'The health monitoring and regular check-ups have been a blessing. They caught my blood pressure issues early and helped me manage it better. The chair yoga is perfect for my arthritis. I feel more energetic and my doctor is impressed with my progress!',
      rating: 5,
      date: '2023-12-20',
      program: 'Health & Wellness'
    },
    {
      id: 5,
      name: 'Lakshmi Reddy',
      age: 69,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'The outings to gardens and cultural sites are my favorite! It\'s so nice to get out and explore with friends. The EzyElders team takes care of everything - transport, meals, everything. My children are so happy that I\'m active and enjoying life.',
      rating: 5,
      date: '2023-12-15',
      program: 'Leisure Outings'
    },
    {
      id: 6,
      name: 'Suresh Gupta',
      age: 73,
      image: 'https://randomuser.me/api/portraits/men/74.jpg',
      text: 'I was depressed after retirement, but EzyElders gave me purpose again. I now volunteer to teach basic accounting to other seniors. The art classes have awakened my creative side. This community has become my extended family.',
      rating: 5,
      date: '2023-12-10',
      program: 'Custom Engagements'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Testimonials - What Our Community Says About EzyElders"
        description="Read heartfelt testimonials from seniors and families who have experienced EzyElders' exceptional care services. Discover stories of improved wellness, community connection, and quality of life."
        keywords="EzyElders testimonials, senior care reviews, elder care testimonials, senior community feedback, family testimonials, senior care success stories"
        url="/testimonials"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lavender to-sky py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Testimonials</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Hear from our beloved community members about their transformative experiences with EzyElders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Stories</h2>
              <p className="text-xl text-gray-600">Real experiences from real people</p>
            </motion.div>

            {/* Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 text-center">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-lavender"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-600">{testimonials[currentIndex].age} years</p>
                      <p className="text-sm text-dark-lavender mt-2">
                        {testimonials[currentIndex].program}
                      </p>
                      <div className="flex justify-center gap-1 mt-3">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 relative">
                      <Quote className="absolute -top-4 -left-4 w-8 h-8 text-lavender/30" />
                      <p className="text-lg text-gray-700 leading-relaxed italic">
                        "{testimonials[currentIndex].text}"
                      </p>
                      <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-lavender/30 rotate-180" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-dark-lavender' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600">Every elder has a story to tell</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} years</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-3 line-clamp-4">
                  "{testimonial.text}"
                </p>
                
                <p className="text-sm text-dark-lavender font-medium">
                  {testimonial.program}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Watch our members share their experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-video bg-gray-200 rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Testimonial Video 1"
                className="w-full h-full"
                allowFullScreen
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="aspect-video bg-gray-200 rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Testimonial Video 2"
                className="w-full h-full"
                allowFullScreen
              />
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
            <h2 className="text-4xl font-bold mb-4">Your Story Could Be Next</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community and create your own success story
            </p>
            <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage; 