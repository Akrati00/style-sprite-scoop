
import React, { useState } from 'react';
import { Search, BookOpen, Images, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-pink-200/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-float">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Images className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text font-playfair">
              StyleSprite
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 hover-lift">
              Trending
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 hover-lift">
              Daily Looks
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 hover-lift">
              Style Tips
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 hover-lift">
              Fashion Week
            </a>
          </nav>

          {/* Search & CTA */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full px-6 hover-lift">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fadeInUp">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search fashion trends..."
                className="w-full px-4 py-2 pl-10 rounded-full border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
