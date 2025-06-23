
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrendingSection from '@/components/TrendingSection';
import DailyOutfits from '@/components/DailyOutfits';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrendingSection />
      <DailyOutfits />
      <Footer />
    </div>
  );
};

export default Index;
