
import React from 'react';
import { TrendingUp, BookOpen, Images } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrendingSection = () => {
  const trendingItems = [
    {
      id: 1,
      title: "Cottagecore Aesthetics",
      description: "Embracing the whimsical, romantic countryside vibes",
      image: "🌸",
      trend: "+25%",
      category: "Lifestyle"
    },
    {
      id: 2,
      title: "Neon Accessories",
      description: "Bold, bright accessories that make a statement",
      image: "🌈",
      trend: "+40%",
      category: "Accessories"
    },
    {
      id: 3,
      title: "Vintage Denim",
      description: "Classic denim pieces with a modern twist",
      image: "👖",
      trend: "+18%",
      category: "Clothing"
    },
    {
      id: 4,
      title: "Sustainable Fashion",
      description: "Eco-friendly choices that look amazing",
      image: "🌿",
      trend: "+60%",
      category: "Conscious"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 animate-wiggle">
            <TrendingUp className="w-4 h-4" />
            <span>What's Trending Now</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            Today's <span className="gradient-text">Hottest</span> Trends
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the curve with the most adorable and trendy fashion picks 
            that everyone's talking about! 💫
          </p>
        </div>

        {/* Trending Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="hover-lift cursor-pointer group overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Trend Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-pink-100 text-pink-600 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1 text-green-500 text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{item.trend}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center space-x-2 text-pink-500 text-sm font-medium">
                    <BookOpen className="w-3 h-3" />
                    <span>Learn More</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium hover-lift transition-all duration-300">
            View All Trends
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
