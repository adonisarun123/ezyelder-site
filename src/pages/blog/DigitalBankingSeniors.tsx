import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Clock, Calendar, Share2, Shield, Lock, Phone, AlertTriangle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalBankingSeniors: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const safetyTips = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Strong Password Protection',
      description: 'Create unique, strong passwords and never share them with anyone.',
      tips: ['Use at least 12 characters', 'Include numbers and symbols', 'Avoid personal information', 'Change passwords regularly']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Connections',
      description: 'Always ensure you\'re on a secure, encrypted connection when banking online.',
      tips: ['Look for "https://" in the URL', 'See the lock icon in your browser', 'Avoid public Wi-Fi for banking', 'Use your bank\'s official app or website']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Monitor Your Accounts',
      description: 'Regular monitoring helps catch unauthorized transactions quickly.',
      tips: ['Check accounts weekly', 'Set up account alerts', 'Review monthly statements', 'Report suspicious activity immediately']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Verify Before Acting',
      description: 'Always verify requests for personal information through official channels.',
      tips: ['Banks never ask for passwords by phone', 'Call your bank directly if unsure', 'Don\'t click links in suspicious emails', 'Verify all communications independently']
    }
  ];

  const commonScams = [
    {
      title: 'Phishing Emails',
      description: 'Fake emails that look like they\'re from your bank asking for personal information.',
      warning: 'Banks never ask for passwords or PINs via email.',
      protection: 'Delete suspicious emails and contact your bank directly.'
    },
    {
      title: 'Phone Scams',
      description: 'Callers claiming to be from your bank asking to verify account information.',
      warning: 'Legitimate banks don\'t call asking for sensitive information.',
      protection: 'Hang up and call your bank using the number on your card.'
    },
    {
      title: 'Fake Websites',
      description: 'Websites that look like your bank\'s site but are designed to steal your information.',
      warning: 'Always type your bank\'s URL directly or use bookmarks.',
      protection: 'Check the URL carefully and look for security indicators.'
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
            <span className="px-4 py-2 bg-red-100 text-red-600 text-sm font-medium rounded-lg">
              Technology
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Digital Banking Safety for Senior Citizens
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Learn how to safely use online banking, recognize scams, and protect your financial information in the digital age. This comprehensive guide will help you navigate digital banking with confidence while keeping your money and personal information secure.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Financial Advisor Ramesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <span>January 30, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <span>9 min read</span>
            </div>
            <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Senior using secure online banking on tablet"
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
          <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed mb-0">
              Digital banking offers incredible convenience for seniors - you can check balances, pay bills, and transfer money from the comfort of your home. However, with this convenience comes the need for vigilance. While online banking is generally very safe when done correctly, scammers often target seniors. This guide will help you bank safely online while avoiding common pitfalls.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Digital Banking for Seniors</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Convenience & Accessibility</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Bank 24/7 from home</li>
                <li>• No need to travel to branches</li>
                <li>• Immediate access to account information</li>
                <li>• Easy bill paying and transfers</li>
                <li>• Paperless statements save space</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Enhanced Security Features</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Real-time transaction alerts</li>
                <li>• Ability to freeze cards instantly</li>
                <li>• Detailed transaction history</li>
                <li>• Secure encryption technology</li>
                <li>• Multi-factor authentication</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Essential Safety Practices</h2>

          <div className="space-y-6 mb-12">
            {safetyTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-blue-600">
                    {tip.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{tip.title}</h3>
                    <p className="text-gray-800 mb-4">{tip.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {tip.tips.map((tipText, tipIndex) => (
                        <div key={tipIndex} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-800 text-sm">{tipText}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-green-50 p-8 rounded-xl border border-green-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Creating a Strong Password</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Example of a Strong Password:</h4>
                <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                  <code className="text-lg font-mono">
                    {showPassword ? 'MyBank2024!Safe&Secure' : '••••••••••••••••••••'}
                  </code>
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-gray-800 text-sm mt-2">
                  This password combines words, numbers, and symbols, making it strong but memorable.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Good Password Practices</h4>
                  <ul className="space-y-1 text-gray-800 text-sm">
                    <li>• Use a unique password for banking</li>
                    <li>• Include uppercase and lowercase letters</li>
                    <li>• Add numbers and special characters</li>
                    <li>• Make it at least 12 characters long</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">✗ Avoid These Mistakes</h4>
                  <ul className="space-y-1 text-gray-800 text-sm">
                    <li>• Don't use birthdays or addresses</li>
                    <li>• Avoid simple patterns like "123456"</li>
                    <li>• Don't use the same password everywhere</li>
                    <li>• Never write passwords down visibly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Recognizing and Avoiding Scams</h2>

          <div className="space-y-6 mb-12">
            {commonScams.map((scam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{scam.title}</h3>
                    <p className="text-gray-800 mb-3">{scam.description}</p>
                    <div className="bg-red-50 p-3 rounded mb-3">
                      <p className="text-red-700 font-medium">⚠️ Warning: {scam.warning}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-green-700 font-medium">🛡️ Protection: {scam.protection}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              Red Flags: When to Be Extra Cautious
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Suspicious Communications</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Urgent requests for account information</li>
                  <li>• Threats to close your account</li>
                  <li>• Requests to click links or download files</li>
                  <li>• Poor grammar or spelling in "official" emails</li>
                  <li>• Calls asking you to "verify" your password</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Website Warning Signs</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• URL doesn't match your bank's official site</li>
                  <li>• Missing security lock icon</li>
                  <li>• Pop-ups asking for personal information</li>
                  <li>• Requests for unusual information</li>
                  <li>• Site looks different from usual</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Step-by-Step Safe Banking Guide</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-800">Before You Start</h3>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>• Ensure you're on a secure, private network</li>
                <li>• Close all other browser tabs</li>
                <li>• Make sure no one can see your screen</li>
                <li>• Have your account information ready</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-800">Logging In Safely</h3>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>• Type your bank's URL directly into the browser</li>
                <li>• Look for "https://" and the lock icon</li>
                <li>• Enter your username and password carefully</li>
                <li>• Never save passwords on public or shared computers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-800">While Banking</h3>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>• Check your account balances and recent transactions</li>
                <li>• Review any pending transactions</li>
                <li>• Set up account alerts if available</li>
                <li>• Complete your business efficiently</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold text-gray-800">Logging Out</h3>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>• Always use the "Log Out" button</li>
                <li>• Close your browser completely</li>
                <li>• Clear browser history if on a shared computer</li>
                <li>• Never leave your computer unattended while logged in</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Getting Help and Support</h2>
          
          <p className="text-lg text-gray-800 mb-6">
            If you're new to digital banking or need assistance, don't hesitate to ask for help. Most banks offer support specifically for seniors learning online banking.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Where to Get Help</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Bank Resources</h4>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>• Customer service hotline</li>
                  <li>• In-person banking tutorials</li>
                  <li>• Online help guides and videos</li>
                  <li>• Senior-specific banking support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 mb-2">Community Support</h4>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>• EzyElders technology classes</li>
                  <li>• Family member assistance</li>
                  <li>• Senior center computer classes</li>
                  <li>• Library digital literacy programs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Learn Digital Banking Safely at EzyElders</h3>
            <p className="text-lg mb-6">
              Join our comprehensive digital banking workshops designed specifically for seniors. Learn at your own pace with patient instructors who understand your concerns and questions.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Workshop
              </Link>
              <Link 
                to="/offerings/technology" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                View All Classes
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways for Safe Digital Banking</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Use strong, unique passwords</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Always log out completely</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Monitor accounts regularly</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Verify suspicious communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Use secure networks only</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Trust your instincts</span>
                </li>
              </ul>
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
            <Link to="/blog/technology-tips-for-elders" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  Staying Connected: Technology Tips for Elders
                </h3>
                <p className="text-gray-800">Learn the basics of technology to build confidence for digital banking.</p>
              </div>
            </Link>
            <Link to="/blog/social-connections-golden-years" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 group-hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600">
                  The Power of Social Connections in Golden Years
                </h3>
                <p className="text-gray-800">Connect with others who can help you learn new technologies safely.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default DigitalBankingSeniors; 