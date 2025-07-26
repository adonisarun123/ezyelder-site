import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Clock, Calendar, Share2, Heart, Users, Coffee, BookOpen, Music, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const SocialConnectionsGoldenYears: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Improved Mental Health',
      description: 'Strong social connections reduce depression, anxiety, and feelings of loneliness.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Enhanced Cognitive Function',
      description: 'Regular social interaction helps maintain memory and cognitive abilities.'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Better Physical Health',
      description: 'Social seniors have lower blood pressure and stronger immune systems.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Increased Longevity',
      description: 'Studies show socially connected people live longer, healthier lives.'
    }
  ];

  const socialActivities = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Join Book Clubs',
      description: 'Share your love of reading with others and discover new authors and perspectives.',
      tips: ['Start with your local library', 'Choose genres you enjoy', 'Don\'t worry about keeping up']
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Coffee Meetups',
      description: 'Regular coffee dates with friends or neighbors create meaningful connections.',
      tips: ['Schedule weekly meetups', 'Try different cafes', 'Invite new people to join']
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Musical Groups',
      description: 'Join choirs, music appreciation groups, or learn to play an instrument.',
      tips: ['No experience necessary', 'Singing is great for mood', 'Meet people with shared interests']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Volunteer Work',
      description: 'Give back to the community while meeting like-minded people.',
      tips: ['Choose causes you care about', 'Start with small commitments', 'Share your skills and experience']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Social Connections in Golden Years - Building Community for Seniors"
        description="Explore the importance of social connections for seniors and practical ways to build meaningful relationships, combat loneliness, and maintain an active social life in golden years."
        keywords="senior social connections, elderly community, senior friendships, combating loneliness seniors, social activities elderly, senior relationships, community building seniors"
        url="/blog/social-connections-golden-years"
        type="article"
      />
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="px-4 py-2 bg-purple-100 text-purple-600 text-sm font-medium rounded-lg">
              Lifestyle
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            The Power of Social Connections in Golden Years
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Why maintaining friendships and building new relationships is crucial for mental health and happiness in retirement. Discover practical tips for staying socially active and creating meaningful connections in your golden years.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Anita Patel</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <span>January 5, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <span>6 min read</span>
            </div>
            <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Seniors enjoying social activities together"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed mb-0">
              Retirement brings many changes, but one thing that should never change is the importance of social connections. Research consistently shows that seniors with strong social ties live longer, healthier, and happier lives. The good news? It's never too late to build new friendships and strengthen existing ones.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Social Connections Matter More Than Ever</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            As we age, our social circles often shrink due to retirement, health changes, or loss of loved ones. However, maintaining and building social connections becomes even more crucial for our physical and mental well-being during our golden years.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">The Science-Backed Benefits</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0 text-pink-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-800">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-cyan-50 p-8 rounded-xl border border-cyan-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Did You Know?</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Loneliness has the same health impact as smoking 15 cigarettes a day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Socially active seniors have a 50% lower risk of dementia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>People with strong social ties live 3.7 years longer on average</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Social seniors recover faster from illness and surgery</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Ways to Stay Socially Connected</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {socialActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0 text-cyan-500">
                    {activity.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-800 mb-4">{activity.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">Getting Started:</h4>
                      {activity.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="bg-gray-50 p-2 rounded text-sm text-gray-800">
                          💡 {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overcoming Common Social Barriers</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobility Challenges</h3>
              <p className="text-gray-800 mb-3">Limited mobility doesn't have to limit social connections.</p>
              <ul className="space-y-2 text-gray-800">
                <li>• Use video calling to connect with distant friends and family</li>
                <li>• Join online communities based on your interests</li>
                <li>• Invite friends to visit you at home</li>
                <li>• Participate in virtual events and classes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Feeling Shy or Nervous</h3>
              <p className="text-gray-800 mb-3">It's normal to feel nervous about meeting new people.</p>
              <ul className="space-y-2 text-gray-800">
                <li>• Start with small, low-pressure activities</li>
                <li>• Bring a friend to new social events</li>
                <li>• Focus on listening and asking questions</li>
                <li>• Remember that others want to make friends too</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Concerns</h3>
              <p className="text-gray-800 mb-3">Social activities don't have to be expensive.</p>
              <ul className="space-y-2 text-gray-800">
                <li>• Many community centers offer free programs</li>
                <li>• Libraries host free events and clubs</li>
                <li>• Take walks in local parks with friends</li>
                <li>• Host potluck dinners at home</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Building Your Social Network at EzyElders</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            At EzyElders, we understand the vital importance of social connections for senior well-being. Our community is designed to foster friendships and provide numerous opportunities for meaningful social interaction.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Programs at EzyElders</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Group Activities</h4>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>• Cultural events and festivals</li>
                  <li>• Art and craft workshops</li>
                  <li>• Cooking classes</li>
                  <li>• Game tournaments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Interest Clubs</h4>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>• Book discussion groups</li>
                  <li>• Gardening enthusiasts</li>
                  <li>• Photography club</li>
                  <li>• Travel planning group</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Vibrant Community</h3>
            <p className="text-lg mb-6">
              Don't let loneliness diminish your golden years. Join EzyElders and become part of a caring community where friendships flourish and every day brings new opportunities for connection.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Visit Us Today
              </Link>
              <Link 
                to="/offerings" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Take the First Step Today</h3>
            <p className="text-gray-800 mb-4">
              Building social connections doesn't happen overnight, but every small step counts. Start with one activity this week - call an old friend, attend a community event, or simply smile and chat with a neighbor.
            </p>
            <p className="text-gray-800">
              <strong>Remember:</strong> You have a lifetime of experiences and wisdom to share. Others would love to get to know you!
            </p>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/yoga-benefits-senior-citizens" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  10 Benefits of Yoga for Senior Citizens
                </h3>
                <p className="text-gray-800">Discover how yoga can improve your physical and mental well-being.</p>
              </div>
            </Link>
            <Link to="/blog/technology-tips-for-elders" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Staying Connected: Technology Tips for Elders
                </h3>
                <p className="text-gray-800">Learn how to use technology to stay connected with family and friends.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default SocialConnectionsGoldenYears; 