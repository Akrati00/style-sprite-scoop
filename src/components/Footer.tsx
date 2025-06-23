
import React from 'react';
import { Images, BookOpen, TrendingUp, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Images className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair">StyleSprite</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your daily dose of fashion magic, where style meets personality 
              and every outfit tells a beautiful story.
            </p>
            <div className="flex space-x-4">
              <div className="text-2xl animate-bounce-slow">✨</div>
              <div className="text-2xl animate-float">💕</div>
              <div className="text-2xl animate-pulse-slow">🌟</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Trending Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Daily Outfits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Style Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Fashion Week</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Lookbook</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Casual Wear</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Formal Attire</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Seasonal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Sustainable</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Stay Stylish</h4>
            <p className="text-gray-400 mb-4">
              Get the latest trends delivered to your inbox every morning! 💌
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:border-pink-400 focus:outline-none text-white placeholder-gray-400"
              />
              <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-2 rounded-full font-medium hover-lift transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 StyleSprite. Made with 💖 for fashion lovers everywhere.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
