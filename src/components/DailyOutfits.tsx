
import React from 'react';
import { BookOpen, Images, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DailyOutfits = () => {
  const outfits = [
    {
      id: 1,
      title: "Brunch Vibes",
      description: "Perfect for a Sunday morning with friends",
      time: "Morning",
      mood: "Casual Chic",
      emoji: "☕",
      colors: ["bg-pink-400", "bg-rose-300", "bg-amber-200"]
    },
    {
      id: 2,
      title: "Office Elegance",
      description: "Professional yet stylish for work days",
      time: "Day",
      mood: "Professional",
      emoji: "💼",
      colors: ["bg-blue-400", "bg-indigo-300", "bg-gray-300"]
    },
    {
      id: 3,
      title: "Date Night Glam",
      description: "Romantic and stunning for special evenings",
      time: "Evening",
      mood: "Romantic",
      emoji: "🌙",
      colors: ["bg-purple-400", "bg-pink-400", "bg-red-300"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
            <Images className="w-4 h-4" />
            <span>Daily Style Inspiration</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            <span className="gradient-text">Outfit</span> of the Day
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From sunrise to moonlight, we've got the perfect outfits 
            to match every moment of your fabulous day! ✨
          </p>
        </div>

        {/* Outfits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {outfits.map((outfit, index) => (
            <Card 
              key={outfit.id}
              className="hover-lift cursor-pointer group border-0 shadow-xl overflow-hidden bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Header with Time Badge */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium px-3 py-1 bg-white/90 text-gray-600 rounded-full">
                      {outfit.time}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-6xl mb-2 animate-float group-hover:scale-110 transition-transform duration-300">
                      {outfit.emoji}
                    </div>
                    <div className="flex space-x-2 justify-center">
                      {outfit.colors.map((color, idx) => (
                        <div 
                          key={idx}
                          className={`w-4 h-4 rounded-full ${color} animate-pulse-slow`}
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {outfit.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-pink-100 text-pink-600 rounded-full">
                      {outfit.mood}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {outfit.description}
                  </p>

                  {/* Action Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="flex items-center space-x-2 text-pink-500 font-medium text-sm hover:text-pink-600">
                      <BookOpen className="w-4 h-4" />
                      <span>Get This Look</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Daily Look */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover-lift">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-3 h-3" />
                <span>Editor's Pick</span>
              </div>
              
              <h3 className="text-3xl font-bold font-playfair mb-4">
                Today's <span className="gradient-text">Featured Look</span>
              </h3>
              
              <p className="text-gray-600 text-lg mb-6">
                Our fashion editors have handpicked this stunning ensemble that perfectly 
                captures today's mood and style. It's playful, it's chic, and it's absolutely you! 💕
              </p>
              
              <button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium hover-lift">
                Shop This Look
              </button>
            </div>
            
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-2xl flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="text-8xl mb-4">👑</div>
                  <div className="text-2xl font-bold text-white mb-2">Royal Vibes</div>
                  <div className="text-purple-100">Majestic & Modern</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-lg">⭐</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-sm">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyOutfits;
