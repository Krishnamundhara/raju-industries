import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SocialMedia from '../components/SocialMedia';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Raju Industries - Premier Yarn & Fabric Broker in India"
        pathname="/"
      />
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Raju Industries</h2>
          <p className="mt-4 text-xl text-gray-600">
            We are trusted brokers connecting buyers with premium yarn and fabric sources across India.<br/>
            With more than 30 years of industry experience, our extensive network, competitive pricing, and reliable service has established us as a leading textile broker in the yarn and fabric industry.
          </p>
        </div>
      </section>
      
      {/* About Section with Parallax Effect */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-primary-50 opacity-50"></div>
        <About />
      </div>
      
      {/* Social Media Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Connect With Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow us on social media to stay updated with our latest products and announcements
            </p>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Home; 