import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Clock, Calendar, Share2, Home, Activity, Heart, Shield, CheckCircle, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const StayingActiveHome: React.FC = () => {
  const exercises = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Chair Exercises',
      description: 'Perfect for seniors with limited mobility or balance concerns.',
      exercises: ['Seated leg extensions', 'Arm circles', 'Seated marching', 'Shoulder blade squeezes'],
      duration: '10-15 minutes'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Balance Training',
      description: 'Improve stability and reduce fall risk with simple balance exercises.',
      exercises: ['Standing on one foot', 'Heel-to-toe walking', 'Wall push-ups', 'Standing back extensions'],
      duration: '10-20 minutes'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Strength Building',
      description: 'Maintain muscle mass and bone density with resistance exercises.',
      exercises: ['Wall squats', 'Modified push-ups', 'Resistance band exercises', 'Light weight lifting'],
      duration: '15-25 minutes'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Flexibility & Stretching',
      description: 'Keep joints mobile and muscles flexible with gentle stretches.',
      exercises: ['Neck stretches', 'Gentle spinal twists', 'Ankle circles', 'Calf stretches'],
      duration: '10-15 minutes'
    }
  ];

  const safetyTips = [
    'Start slowly and gradually increase intensity',
    'Warm up before exercising and cool down after',
    'Wear comfortable, non-slip shoes',
    'Stay hydrated throughout your workout',
    'Stop if you feel dizzy, short of breath, or experience pain',
    'Have a phone nearby in case of emergency'
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
            <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-lg">
              Health & Wellness
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Staying Active at Home: Simple Exercises for Seniors
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Discover safe and effective exercises you can do at home to maintain strength, flexibility, and balance. No gym membership required! These simple routines will help you stay active, healthy, and independent in the comfort of your own home.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Fitness Coach Suresh</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <span>January 25, 2024</span>
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
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Senior exercising safely at home"
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
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed mb-0">
              Staying active doesn't require expensive gym memberships or complicated equipment. Your home can be the perfect place to maintain your fitness, strength, and flexibility. With the right exercises and a consistent routine, you can improve your health, boost your energy, and maintain your independence right from your living room.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Home Exercise is Perfect for Seniors</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Convenience & Comfort</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Exercise at your own pace and schedule</li>
                <li>• No travel time or transportation costs</li>
                <li>• Privacy and comfort of your own space</li>
                <li>• Weather doesn't affect your routine</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Safety & Accessibility</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Familiar environment reduces fall risk</li>
                <li>• Easy access to water and rest areas</li>
                <li>• Modify exercises to your ability level</li>
                <li>• Emergency help is always nearby</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">4 Types of Essential Home Exercises</h2>

          <div className="space-y-8 mb-12">
            {exercises.map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-blue-600">
                    {exercise.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{exercise.title}</h3>
                      <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                        <Timer className="w-4 h-4" />
                        {exercise.duration}
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">{exercise.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exercise.exercises.map((ex, exIndex) => (
                        <div key={exIndex} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-800 text-sm">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-green-50 p-8 rounded-xl border border-green-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sample 20-Minute Daily Routine</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">5</div>
                <h4 className="font-semibold text-gray-800 mb-2">Warm-Up</h4>
                <ul className="text-gray-800 text-sm space-y-1">
                  <li>• Gentle arm swings</li>
                  <li>• Ankle circles</li>
                  <li>• Deep breathing</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">7</div>
                <h4 className="font-semibold text-gray-800 mb-2">Strength</h4>
                <ul className="text-gray-800 text-sm space-y-1">
                  <li>• Wall squats</li>
                  <li>• Chair stands</li>
                  <li>• Arm exercises</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">5</div>
                <h4 className="font-semibold text-gray-800 mb-2">Balance</h4>
                <ul className="text-gray-800 text-sm space-y-1">
                  <li>• Standing on one foot</li>
                  <li>• Heel-to-toe walk</li>
                  <li>• Side leg lifts</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">3</div>
                <h4 className="font-semibold text-gray-800 mb-2">Cool Down</h4>
                <ul className="text-gray-800 text-sm space-y-1">
                  <li>• Gentle stretches</li>
                  <li>• Deep breathing</li>
                  <li>• Relaxation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Safety Guidelines</h2>
          
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-pink-600" />
              Safety First: Important Reminders
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Creating Your Home Exercise Space</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What You Need to Get Started</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-pink-600 mb-3">Essential Items</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Sturdy chair with back support</li>
                  <li>• Clear floor space (6x6 feet minimum)</li>
                  <li>• Wall space for support</li>
                  <li>• Water bottle for hydration</li>
                  <li>• Comfortable, non-slip footwear</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-3">Optional Equipment</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Resistance bands or light weights</li>
                  <li>• Exercise mat for floor exercises</li>
                  <li>• Tennis ball for hand exercises</li>
                  <li>• Stable step or platform</li>
                  <li>• Mirror to check your form</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Getting Started: Your First Week</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Days 1-2: Assessment</h4>
                  <p className="text-gray-800 text-sm">Start with 5-10 minutes of gentle movements to understand your current fitness level.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Days 3-4: Build Routine</h4>
                  <p className="text-gray-800 text-sm">Increase to 10-15 minutes, focusing on exercises that feel comfortable and safe.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Days 5-7: Establish Habit</h4>
                  <p className="text-gray-800 text-sm">Aim for 15-20 minutes daily, incorporating all four types of exercises.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Fitness Programs at EzyElders</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            While home exercise is excellent, combining it with professional guidance can accelerate your progress. At EzyElders, our fitness programs are specifically designed for seniors, focusing on safety, enjoyment, and gradual progression.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Senior Fitness Classes</h3>
            <p className="text-lg mb-6">
              Complement your home routine with professional instruction, social interaction, and specialized equipment designed for seniors. Our certified trainers understand the unique needs of older adults.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Classes
              </Link>
              <Link 
                to="/offerings/health-wellness" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Remember: Consistency is Key</h3>
            <p className="text-gray-800 mb-4">
              The most important aspect of any exercise routine is consistency. Even 10 minutes of daily activity is better than an hour once a week. Start small, be patient with yourself, and celebrate every achievement.
            </p>
            <p className="text-gray-800">
              <strong>Pro Tip:</strong> Track your progress in a simple journal. Note how you feel before and after exercising to see the positive impact on your mood and energy levels.
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
                <p className="text-gray-800">Discover how yoga can complement your home exercise routine.</p>
              </div>
            </Link>
            <Link to="/blog/healthy-eating-seniors" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Nutritious Eating Made Simple for Seniors
                </h3>
                <p className="text-gray-800">Fuel your workouts with proper nutrition for optimal results.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default StayingActiveHome; 