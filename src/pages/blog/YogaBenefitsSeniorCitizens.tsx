import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Clock, Calendar, Share2, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const YogaBenefitsSeniorCitizens: React.FC = () => {
  const benefits = [
    {
      title: 'Improved Flexibility',
      description: 'Gentle yoga poses help maintain and improve joint mobility, reducing stiffness and increasing range of motion.'
    },
    {
      title: 'Better Balance',
      description: 'Regular yoga practice enhances balance and coordination, significantly reducing the risk of falls.'
    },
    {
      title: 'Stress Relief',
      description: 'Yoga promotes relaxation and mindfulness, helping to reduce anxiety and improve mental well-being.'
    },
    {
      title: 'Stronger Bones',
      description: 'Weight-bearing yoga poses can help maintain bone density and prevent osteoporosis.'
    },
    {
      title: 'Better Sleep',
      description: 'Regular yoga practice can improve sleep quality and help establish healthy sleep patterns.'
    },
    {
      title: 'Heart Health',
      description: 'Yoga can help lower blood pressure and improve cardiovascular health through gentle exercise.'
    },
    {
      title: 'Pain Management',
      description: 'Yoga can help alleviate chronic pain, particularly in the back, neck, and joints.'
    },
    {
      title: 'Enhanced Mood',
      description: 'The combination of movement, breathing, and meditation can boost mood and fight depression.'
    },
    {
      title: 'Improved Breathing',
      description: 'Yoga breathing techniques can enhance lung capacity and oxygen flow throughout the body.'
    },
    {
      title: 'Social Connection',
      description: 'Group yoga classes provide opportunities to meet like-minded people and build friendships.'
    }
  ];

  const poses = [
    {
      name: 'Mountain Pose (Tadasana)',
      description: 'Stand tall with feet hip-width apart, arms at sides. This pose improves posture and balance.',
      benefits: 'Strengthens legs, improves posture'
    },
    {
      name: 'Chair Pose (Modified)',
      description: 'Use a sturdy chair for support. This modified version is perfect for seniors.',
      benefits: 'Builds leg strength, improves stability'
    },
    {
      name: 'Cat-Cow Stretch',
      description: 'Gentle spinal movement that can be done seated or on hands and knees.',
      benefits: 'Improves spinal flexibility, relieves back tension'
    },
    {
      name: 'Tree Pose (Modified)',
      description: 'Use wall support and place foot on ankle rather than knee for safer balance practice.',
      benefits: 'Enhances balance, strengthens standing leg'
    },
    {
      name: 'Seated Forward Fold',
      description: 'Gentle forward bend that can be done in a chair or on the floor.',
      benefits: 'Stretches back and hamstrings, calms the mind'
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
            <span className="px-4 py-2 bg-pink-100 text-pink-600 text-sm font-medium rounded-lg">
              Health & Wellness
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            10 Benefits of Yoga for Senior Citizens
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Discover how yoga can transform your golden years with improved flexibility, balance, and overall well-being. Learn about gentle poses perfect for older adults and how to start your yoga journey safely.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Dr. Priya Sharma</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <span>5 min read</span>
            </div>
            <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Senior practicing yoga in a peaceful setting"
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
          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed mb-0">
              As we age, maintaining physical and mental health becomes increasingly important. Yoga offers a gentle, accessible way for seniors to stay active, improve flexibility, and enhance overall quality of life. Unlike high-impact exercises, yoga can be adapted to any fitness level and physical limitation.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Yoga is Perfect for Seniors</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            Yoga has been practiced for thousands of years and offers numerous benefits specifically valuable for older adults. The combination of gentle movement, breathing exercises, and meditation makes it an ideal form of exercise for seniors looking to maintain their health and independence.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">10 Key Benefits of Yoga for Seniors</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-800">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">5 Gentle Yoga Poses to Get Started</h2>
          
          <p className="text-lg text-gray-800 mb-8">
            These poses are specifically chosen for their safety and accessibility for seniors. Always consult with your healthcare provider before starting any new exercise routine.
          </p>

          <div className="space-y-8 mb-12">
            {poses.map((pose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{pose.name}</h3>
                <p className="text-gray-800 mb-3">{pose.description}</p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-pink-700 font-medium">Benefits: {pose.benefits}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-600" />
              Safety Tips for Senior Yoga Practice
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Always consult your doctor before starting yoga, especially if you have health conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Start with chair yoga or gentle classes designed for seniors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Use props like blocks, straps, and walls for support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Never force poses - yoga should feel good, not painful</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Listen to your body and rest when needed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Find a qualified instructor experienced with senior students</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Getting Started at EzyElders</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            At EzyElders, we offer specialized yoga classes designed specifically for seniors. Our experienced instructors understand the unique needs and limitations of older adults, ensuring a safe and enjoyable practice for everyone.
          </p>

          <div className="bg-gradient-to-r from-pink-600 to-cyan-500 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Senior Yoga Classes</h3>
            <p className="text-lg mb-6">
              Experience the benefits of yoga in a supportive, senior-friendly environment. Our classes are designed to improve your health, mobility, and quality of life.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/offerings/health-wellness" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
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
            <Link to="/blog/staying-active-home" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Staying Active at Home: Simple Exercises for Seniors
                </h3>
                <p className="text-gray-800">Discover safe and effective exercises you can do at home to maintain strength and flexibility.</p>
              </div>
            </Link>
            <Link to="/blog/healthy-eating-seniors" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Nutritious Eating Made Simple for Seniors
                </h3>
                <p className="text-gray-800">Easy-to-follow nutrition guidelines and meal planning tips for healthy aging.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default YogaBenefitsSeniorCitizens; 