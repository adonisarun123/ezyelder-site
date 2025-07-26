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
      url: 'https://placehold.co/400x400/E91E63/FFFFFF?text=Yoga+Session',
      title: 'Morning Yoga Session',
      category: 'Yoga Sessions',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Tech+Class',
      title: 'Learning Smartphones Together',
      category: 'Technology Classes',
      date: '2024-01-10'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://placehold.co/400x400/E91E63/FFFFFF?text=Garden+Visit',
      title: 'Garden Visit',
      category: 'Outings',
      date: '2024-01-08'
    },
    {
      id: 4,
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Diwali+Video',
      title: 'Diwali Celebrations 2023',
      category: 'Celebrations',
      date: '2023-11-12'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://placehold.co/400x400/E91E63/FFFFFF?text=Bhajan+Session',
      title: 'Bhajan Session',
      category: 'Satsangs',
      date: '2024-01-05'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Art+Workshop',
      title: 'Art & Craft Workshop',
      category: 'Cultural Events',
      date: '2024-01-03'
    },
    {
      id: 7,
      type: 'image',
      url: 'https://placehold.co/400x400/E91E63/FFFFFF?text=Senior+Day',
      title: 'Senior Citizens Day Event',
      category: 'Celebrations',
      date: '2023-10-01'
    },
    {
      id: 8,
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Tech+Video',
      title: 'Technology Workshop Highlights',
      category: 'Technology Classes',
      date: '2023-12-20'
    },
    {
      id: 9,
      type: 'image',
      url: 'https://placehold.co/400x400/E91E63/FFFFFF?text=Chair+Yoga',
      title: 'Chair Yoga for Beginners',
      category: 'Yoga Sessions',
      date: '2023-12-15'
    },
    {
      id: 10,
      type: 'image',
      url: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Community+Lunch',
      title: 'Community Lunch',
      category: 'Cultural Events',
      date: '2023-12-10'
    },
    {
      id: 11,
      type: 'image',
      url: 'https://placehold.co/400x400/E91E63/FFFFFF?text=Temple+Visit',
      title: 'Temple Visit',
      category: 'Outings',
      date: '2023-12-05'
    },
    {
      id: 12,
      type: 'image',
      url: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Birthday+Party',
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Photo & Video Gallery</h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Explore the wonderful moments and cherished memories created by our vibrant senior community. Every photo tells a story of joy, connection, and active living.
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
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex-shrink-0 text-sm ${
                    (category === 'All' && selectedCategory === 'all') || selectedCategory === category
                      ? 'bg-pink-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:shadow-md border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                    <Play className="w-8 h-8 text-pink-600 fill-current" />
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Be Part of Our Story</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our vibrant senior community and create beautiful memories with fellow elders. Every day brings new opportunities for joy and connection.
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Join EzyElders Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage; 