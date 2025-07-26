import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Clock, Calendar, Share2, Smartphone, Wifi, Shield, MessageCircle, Camera, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnologyTipsForElders: React.FC = () => {
  const technologies = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Smartphone Basics',
      description: 'Learn to make calls, send texts, and navigate your phone with confidence.',
      tips: ['Start with larger text settings', 'Use voice commands', 'Practice with family members']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Video Calling',
      description: 'Stay connected with family through WhatsApp, FaceTime, or Zoom calls.',
      tips: ['Good lighting helps video quality', 'Speak clearly and directly', 'Practice before important calls']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Taking Photos',
      description: 'Capture and share precious memories with your smartphone camera.',
      tips: ['Hold phone steady', 'Use both hands', 'Clean camera lens regularly']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Internet Browsing',
      description: 'Safely browse the internet for news, information, and entertainment.',
      tips: ['Use trusted websites', 'Be cautious with downloads', 'Ask for help when unsure']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Online Safety',
      description: 'Protect yourself from scams and keep your personal information secure.',
      tips: ['Never share passwords', 'Verify before clicking links', 'Use strong passwords']
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Emergency Features',
      description: 'Set up emergency contacts and learn important safety features.',
      tips: ['Add ICE contacts', 'Learn emergency calling', 'Share location with family']
    }
  ];

  const stepByStepGuide = [
    {
      step: 1,
      title: 'Getting Started with Your Phone',
      content: 'Begin by familiarizing yourself with the basic buttons and features. Don\'t be afraid to explore - you can\'t break anything by touching the screen!'
    },
    {
      step: 2,
      title: 'Setting Up for Success',
      content: 'Adjust text size, volume, and brightness to your comfort level. These settings make a huge difference in your daily experience.'
    },
    {
      step: 3,
      title: 'Making Your First Call',
      content: 'Start with calling a family member or friend. Practice dialing numbers and using the speakerphone feature.'
    },
    {
      step: 4,
      title: 'Sending Text Messages',
      content: 'Learn to type messages using the keyboard. Use voice-to-text if typing is difficult - it\'s very accurate!'
    },
    {
      step: 5,
      title: 'Installing Useful Apps',
      content: 'Start with essential apps like WhatsApp for messaging, weather apps, and news apps. Ask family for help installing them.'
    },
    {
      step: 6,
      title: 'Staying Safe Online',
      content: 'Learn to recognize suspicious messages, never share personal information with strangers, and always verify before clicking links.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="px-4 py-2 bg-cyan-100 text-cyan-500 text-sm font-medium rounded-lg">
              Technology
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Staying Connected: Technology Tips for Elders
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Simple, step-by-step guide to using smartphones, video calls, and messaging apps. Learn how technology can help you stay connected with family and friends, and discover the confidence to navigate the digital world safely.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Rajesh Kumar</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <span>January 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <span>7 min read</span>
            </div>
            <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Senior using smartphone to video call with family"
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
          <div className="bg-pink-50 p-6 rounded-xl border border-pink-200 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed mb-0">
              Technology doesn't have to be intimidating! With the right guidance and a little practice, seniors can confidently use smartphones, tablets, and apps to stay connected with loved ones, access information, and enjoy entertainment. This guide will help you take your first steps into the digital world.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Technology Matters for Seniors</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            In today's connected world, technology can significantly enhance your quality of life. From staying in touch with grandchildren to accessing healthcare information, technology opens up new possibilities for communication, learning, and entertainment.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Essential Technologies to Master</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0 text-cyan-500">
                    {tech.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.title}</h3>
                    <p className="text-gray-800 mb-4">{tech.description}</p>
                    <div className="space-y-2">
                      {tech.tips.map((tip, tipIndex) => (
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

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Step-by-Step Technology Journey</h2>
          
          <p className="text-lg text-gray-800 mb-8">
            Learning technology is like learning to drive - it takes practice, but once you get the hang of it, it becomes second nature. Follow these steps at your own pace.
          </p>

          <div className="space-y-6 mb-12">
            {stepByStepGuide.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-800">{step.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-pink-600" />
              Essential Safety Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Password Safety</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Use unique passwords for each account</li>
                  <li>• Include numbers and symbols</li>
                  <li>• Never write passwords on paper near your device</li>
                  <li>• Change passwords regularly</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Avoiding Scams</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Be suspicious of urgent messages</li>
                  <li>• Never give personal info over the phone</li>
                  <li>• Don't click suspicious links</li>
                  <li>• When in doubt, ask family or friends</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Staying Connected with Family</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Apps for Seniors</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">WhatsApp</h4>
                <p className="text-gray-800 text-sm mb-4">Free messaging and video calling worldwide. Perfect for staying in touch with family abroad.</p>
                
                <h4 className="font-semibold text-pink-600 mb-2">FaceTime (iPhone)</h4>
                <p className="text-gray-800 text-sm">High-quality video calls with other iPhone and iPad users.</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Zoom</h4>
                <p className="text-gray-800 text-sm mb-4">Great for family gatherings and joining online events or classes.</p>
                
                <h4 className="font-semibold text-pink-600 mb-2">Photos App</h4>
                <p className="text-gray-800 text-sm">Store and share photos with family. Create albums of special memories.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Technology Classes at EzyElders</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            At EzyElders, we understand that learning technology can feel overwhelming. That's why we offer patient, personalized technology training designed specifically for seniors. Our instructors go at your pace and focus on the skills you want to learn.
          </p>

          <div className="bg-gradient-to-r from-cyan-500 to-pink-600 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Technology Classes</h3>
            <p className="text-lg mb-6">
              Learn at your own pace in a supportive, senior-friendly environment. Our small class sizes ensure you get the individual attention you deserve.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Enroll Today
              </Link>
              <Link 
                to="/offerings/technology" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                View Classes
              </Link>
            </div>
          </div>

          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Remember: You're Not Alone!</h3>
            <p className="text-gray-800 mb-4">
              Learning technology takes time, and that's perfectly normal. Don't hesitate to ask for help from family, friends, or our EzyElders technology team. Every expert was once a beginner!
            </p>
            <p className="text-gray-800">
              <strong>Pro Tip:</strong> Practice a little bit each day. Even 10-15 minutes of daily practice will build your confidence quickly.
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
            <Link to="/blog/digital-banking-seniors" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Digital Banking Safety for Senior Citizens
                </h3>
                <p className="text-gray-800">Learn how to safely use online banking and protect your financial information.</p>
              </div>
            </Link>
            <Link to="/blog/social-connections-golden-years" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  The Power of Social Connections in Golden Years
                </h3>
                <p className="text-gray-800">Discover why staying socially connected is crucial for senior well-being.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default TechnologyTipsForElders; 