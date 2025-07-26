import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offeringsDropdownOpen, setOfferingsDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Offerings',
      href: '/offerings',
      children: [
        { name: 'Health & Wellness', href: '/offerings/health-wellness' },
        { name: 'Technology Tutoring', href: '/offerings/technology' },
        { name: 'Leisure Outings', href: '/offerings/leisure-outings' },
        { name: 'Satsangs & Spirituality', href: '/offerings/satsangs' },
        { name: 'Custom Engagements', href: '/offerings/custom-engagements' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="px-4 py-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">EE</span>
            </div>
            <span className="text-xl font-bold text-gray-800">EzyElders</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 text-base font-medium transition-colors hover:text-pink-600 ${
                        isActive(item.href) ? 'text-pink-600' : 'text-gray-800'
                      }`}
                      onClick={() => setOfferingsDropdownOpen(!offeringsDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {offeringsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-300">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-pink-600 transition-colors rounded-lg mx-2"
                            onClick={() => setOfferingsDropdownOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-base font-medium transition-colors hover:text-pink-600 ${
                      isActive(item.href) ? 'text-pink-600' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Join Us Button - Desktop */}
            <Link to="/join-us" className="hidden lg:block">
              <button className="px-5 py-2 bg-pink-600 text-white rounded-lg font-medium text-base hover:bg-pink-700 transition-colors hover:scale-105 transform">
                Join Us
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-800" />
              ) : (
                <Menu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <Link
                        to={item.href}
                        className={`block py-2 text-base font-medium rounded-lg px-2 transition-colors ${
                          isActive(item.href) ? 'text-pink-600 bg-gray-50' : 'text-gray-800 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block py-1 px-2 text-gray-800 hover:text-pink-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-2 px-2 text-base font-medium rounded-lg transition-colors ${
                        isActive(item.href) ? 'text-pink-600 bg-gray-50' : 'text-gray-800 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/join-us" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full mt-4 px-5 py-2 bg-pink-600 text-white rounded-lg font-medium text-base hover:bg-pink-700 transition-colors">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 