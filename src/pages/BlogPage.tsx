import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Benefits of Yoga for Senior Citizens',
      excerpt: 'Discover how yoga can improve flexibility, balance, and overall well-being for seniors. Learn about gentle poses perfect for older adults.',
      author: 'Dr. Priya Sharma',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Health & Wellness'
    },
    {
      id: 2,
      title: 'Staying Connected: Technology Tips for Elders',
      excerpt: 'Simple guide to using smartphones and staying in touch with family through video calls and messaging apps.',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'The Power of Social Connections in Golden Years',
      excerpt: 'Why maintaining friendships and building new relationships is crucial for mental health and happiness in retirement.',
      author: 'Anita Patel',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Lifestyle'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-lavender to-sky py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Blog</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Insights, tips, and stories about senior wellness and active aging
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <span className="text-sm text-dark-lavender font-medium">{post.category}</span>
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <button className="mt-4 text-dark-lavender font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 