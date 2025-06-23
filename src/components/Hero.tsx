
import React from 'react';
import { TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-300/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-pink-200/30 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-wiggle">
                <TrendingUp className="w-4 h-4" />
                <span>Today's Hot Trends</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-playfair leading-tight">
                Your Daily Dose of
                <span className="gradient-text block">Fashion Magic</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the cutest outfits, trending styles, and fashion inspiration 
                that'll make you shine every single day! ✨
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full px-8 py-3 text-lg hover-lift">
                Explore Trends
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-8 py-3 text-lg hover-lift">
                <BookOpen className="w-4 h-4 mr-2" />
                Style Guide
              </Button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-gray-600">Style Lovers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1K+</div>
                <div className="text-sm text-gray-600">Daily Outfits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-sm text-gray-600">Fashion Brands</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-float">
            <div className="relative w-full h-96 bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl overflow-hidden glass-effect">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/20 to-transparent"></div>
              
              {/* Cute Fashion Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-2xl">👗</span>
              </div>
              <div className="absolute top-12 right-12 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-lg">👠</span>
              </div>
              <div className="absolute bottom-16 left-12 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-xl">👜</span>
              </div>
              <div className="absolute bottom-20 right-8 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center animate-wiggle">
                <span className="text-sm">💄</span>
              </div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4 animate-bounce-slow">✨</div>
                  <h3 className="text-2xl font-bold mb-2">Fashion Forward</h3>
                  <p className="text-pink-100">Where style meets personality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
