import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Clock, Calendar, Share2, Apple, Heart, Shield, Utensils, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const HealthyEatingSeniors: React.FC = () => {
  const nutrients = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Calcium & Vitamin D',
      foods: ['Low-fat dairy', 'Leafy greens', 'Fortified cereals', 'Fatty fish'],
      benefits: 'Strong bones and teeth, prevents osteoporosis'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Fiber',
      foods: ['Whole grains', 'Fruits', 'Vegetables', 'Beans and lentils'],
      benefits: 'Digestive health, heart health, blood sugar control'
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: 'Protein',
      foods: ['Lean meats', 'Fish', 'Eggs', 'Nuts and seeds'],
      benefits: 'Muscle maintenance, wound healing, immune function'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Healthy Fats',
      foods: ['Olive oil', 'Avocados', 'Nuts', 'Fatty fish'],
      benefits: 'Brain health, heart health, reduces inflammation'
    }
  ];

  const mealPlanningTips = [
    {
      title: 'Plan Your Week',
      description: 'Create a weekly meal plan and shopping list to ensure balanced nutrition.',
      tips: ['Plan 3 meals and 2 snacks daily', 'Include variety in colors and textures', 'Prep ingredients on weekends']
    },
    {
      title: 'Smart Shopping',
      description: 'Shop smart to get the most nutrition for your budget.',
      tips: ['Shop seasonal produce', 'Buy frozen fruits and vegetables', 'Compare unit prices']
    },
    {
      title: 'Easy Cooking',
      description: 'Simple cooking methods that preserve nutrients and flavor.',
      tips: ['Steam vegetables to retain nutrients', 'Use herbs and spices for flavor', 'Cook in batches and freeze portions']
    },
    {
      title: 'Stay Hydrated',
      description: 'Proper hydration is crucial for senior health.',
      tips: ['Drink 8 glasses of water daily', 'Include herbal teas and broths', 'Eat water-rich foods like fruits']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Healthy Eating Guide for Seniors - Nutrition & Wellness Tips"
        description="Complete nutrition guide for senior citizens including meal planning, dietary requirements, cooking tips, and healthy eating habits for optimal wellness in golden years."
        keywords="healthy eating seniors, senior nutrition, elderly diet plan, senior meal planning, nutrition for older adults, healthy cooking seniors"
        url="/blog/healthy-eating-seniors"
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
            <span className="px-4 py-2 bg-green-100 text-green-600 text-sm font-medium rounded-lg">
              Health & Wellness
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Nutritious Eating Made Simple for Seniors
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Easy-to-follow nutrition guidelines for seniors, including meal planning tips, essential nutrients, and simple recipes for healthy aging. Discover how proper nutrition can boost energy, strengthen immunity, and enhance quality of life.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Dr. Meera Reddy</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <span>January 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <span>8 min read</span>
            </div>
            <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Fresh, colorful, healthy foods arranged on a table"
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
          <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed mb-0">
              Good nutrition becomes even more important as we age. While our caloric needs may decrease, our need for essential nutrients remains high. The good news is that eating well doesn't have to be complicated or expensive. With the right knowledge and simple strategies, you can nourish your body for optimal health and vitality.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Nutrition Matters More with Age</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            As we age, our bodies undergo changes that affect how we process and absorb nutrients. Metabolism slows down, muscle mass decreases, and our sense of taste and smell may diminish. However, our need for vitamins, minerals, and other nutrients remains just as important for maintaining health, energy, and independence.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Essential Nutrients for Seniors</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {nutrients.map((nutrient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 text-green-600">
                    {nutrient.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{nutrient.title}</h3>
                    <p className="text-gray-800 mb-3">{nutrient.benefits}</p>
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-gray-800 mb-2">Best Sources:</h4>
                      <div className="flex flex-wrap gap-1">
                        {nutrient.foods.map((food, foodIndex) => (
                          <span key={foodIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Smart Meal Planning Strategies</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {mealPlanningTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{tip.title}</h3>
                <p className="text-gray-800 mb-4">{tip.description}</p>
                <div className="space-y-2">
                  {tip.tips.map((tipText, tipIndex) => (
                    <div key={tipIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">{tipText}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sample Daily Menu for Seniors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-pink-600 mb-3">Breakfast</h4>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• Oatmeal with berries and nuts</li>
                  <li>• Greek yogurt</li>
                  <li>• Orange juice (small glass)</li>
                  <li>• Herbal tea</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-3">Lunch</h4>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• Grilled chicken salad</li>
                  <li>• Whole grain roll</li>
                  <li>• Steamed broccoli</li>
                  <li>• Fresh fruit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-3">Dinner</h4>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• Baked salmon</li>
                  <li>• Sweet potato</li>
                  <li>• Green beans</li>
                  <li>• Small dinner roll</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-300">
              <h4 className="font-semibold text-gray-800 mb-2">Healthy Snacks:</h4>
              <p className="text-gray-800 text-sm">Apple with peanut butter, handful of nuts, yogurt with honey, whole grain crackers with cheese</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Nutrition Challenges for Seniors</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Decreased Appetite</h3>
                  <p className="text-gray-800 mb-3">Age-related changes can reduce appetite and interest in food.</p>
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">Solutions:</h4>
                    <ul className="space-y-1 text-gray-800 text-sm">
                      <li>• Eat smaller, more frequent meals</li>
                      <li>• Make meals social occasions</li>
                      <li>• Try new spices and herbs for flavor</li>
                      <li>• Stay physically active to boost appetite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Difficulty Chewing or Swallowing</h3>
                  <p className="text-gray-800 mb-3">Dental problems or medication side effects can make eating challenging.</p>
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">Solutions:</h4>
                    <ul className="space-y-1 text-gray-800 text-sm">
                      <li>• Choose softer foods like cooked vegetables</li>
                      <li>• Try smoothies and soups</li>
                      <li>• Cut food into smaller pieces</li>
                      <li>• Regular dental check-ups are important</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Budget Constraints</h3>
                  <p className="text-gray-800 mb-3">Fixed incomes can make healthy eating seem expensive.</p>
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">Solutions:</h4>
                    <ul className="space-y-1 text-gray-800 text-sm">
                      <li>• Buy seasonal and local produce</li>
                      <li>• Use frozen fruits and vegetables</li>
                      <li>• Cook at home and use leftovers</li>
                      <li>• Look for senior discounts at grocery stores</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nutrition Support at EzyElders</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            At EzyElders, we understand that proper nutrition is fundamental to healthy aging. Our nutrition programs are designed to make healthy eating enjoyable, social, and accessible for all seniors.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Nutrition Programs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Cooking Classes</h4>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>• Healthy recipe demonstrations</li>
                  <li>• Meal prep workshops</li>
                  <li>• Special diet cooking (diabetic, heart-healthy)</li>
                  <li>• Kitchen safety for seniors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Nutrition Education</h4>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>• Reading nutrition labels</li>
                  <li>• Meal planning on a budget</li>
                  <li>• Managing special dietary needs</li>
                  <li>• One-on-one nutrition counseling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-cyan-500 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Start Your Healthy Eating Journey</h3>
            <p className="text-lg mb-6">
              Join our nutrition programs and discover how delicious and simple healthy eating can be. Our registered dietitians and cooking instructors are here to support your wellness goals.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/offerings/health-wellness" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Programs
              </Link>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Remember: Small Changes, Big Impact</h3>
            <p className="text-gray-800 mb-4">
              You don't need to overhaul your entire diet overnight. Start with small, sustainable changes like adding one extra serving of vegetables per day or drinking more water. These small steps can lead to significant improvements in your health and energy levels.
            </p>
            <p className="text-gray-800">
              <strong>Pro Tip:</strong> Keep a food journal for a week to understand your current eating patterns and identify areas for improvement.
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
            <Link to="/blog/staying-active-home" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Staying Active at Home: Simple Exercises for Seniors
                </h3>
                <p className="text-gray-800">Combine good nutrition with regular exercise for optimal health.</p>
              </div>
            </Link>
            <Link to="/blog/yoga-benefits-senior-citizens" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  10 Benefits of Yoga for Senior Citizens
                </h3>
                <p className="text-gray-800">Discover how yoga complements healthy eating for overall wellness.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default HealthyEatingSeniors; 