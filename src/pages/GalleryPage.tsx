import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Filter } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
  date: string;
}

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Yoga Sessions',
    'Technology Classes',
    'Outings',
    'Cultural Events',
    'Satsangs',
    'Celebrations'
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Morning Yoga Session',
      category: 'Yoga Sessions',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Learning Smartphones Together',
      category: 'Technology Classes',
      date: '2024-01-10'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Garden Visit',
      category: 'Outings',
      date: '2024-01-08'
    },
    {
      id: 4,
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Diwali Celebrations 2023',
      category: 'Celebrations',
      date: '2023-11-12'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1588906297062-bf21ac5e0a10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Bhajan Session',
      category: 'Satsangs',
      date: '2024-01-05'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Art & Craft Workshop',
      category: 'Cultural Events',
      date: '2024-01-03'
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Senior Citizens Day Event',
      category: 'Celebrations',
      date: '2023-10-01'
    },
    {
      id: 8,
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1567856781003-92421777d422?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Technology Workshop Highlights',
      category: 'Technology Classes',
      date: '2023-12-20'
    },
    {
      id: 9,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Chair Yoga for Beginners',
      category: 'Yoga Sessions',
      date: '2023-12-15'
    },
    {
      id: 10,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Community Lunch',
      category: 'Cultural Events',
      date: '2023-12-10'
    },
    {
      id: 11,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Temple Visit',
      category: 'Outings',
      date: '2023-12-05'
    },
    {
      id: 12,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Birthday Celebrations',
      category: 'Celebrations',
      date: '2023-11-28'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Gallery</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore the wonderful moments and memories created by our vibrant community of elders
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
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
                className={`px-6 py-2 rounded-full font-medium transition-all flex-shrink-0 ${
                  (category === 'All' && selectedCategory === 'all') || selectedCategory === category
                    ? 'bg-dark-lavender text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.url}
                    alt={item.title}
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                </div>

                {/* Video indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-gray-800 fill-current" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <div className="w-[80vw] max-w-4xl aspect-video">
                <iframe
                  src={selectedItem.url}
                  title={selectedItem.title}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-sm opacity-90">
                {selectedItem.category} • {new Date(selectedItem.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Be Part of Our Story</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community and create beautiful memories with fellow seniors
            </p>
            <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Join EzyElders Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage; 