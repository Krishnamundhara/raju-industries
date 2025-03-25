import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    url: '/images/hero/yarn-storage.jpg',
    title: 'RAJU INDUSTRIES',
    subtitle: 'Leading Manufacturer of Premium Textile products'
  },
  {
    url: '/images/hero/yarn-storage%202.jpg',
    title: 'RAJU INDUSTRIES',
    subtitle: 'Quality that defines excellence'
  },
  {
    url: '/images/hero/yarn-storage%203.jpg',
    title: 'RAJU INDUSTRIES',
    subtitle: 'Serving textile industry since 1993'
  },
  {
    url: '/images/hero/abt.jpg',
    title: 'RAJU INDUSTRIES',
    subtitle: 'Quality Yarn Trader'
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      {heroImages.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {heroImages[currentImageIndex].title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-gray-300">
              <span className="font-medium">Govind Mundhara</span> (Proprietor)
            </p>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
              {heroImages[currentImageIndex].subtitle}
            </p>
            
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="/products"
                className="group inline-flex items-center justify-center gap-x-2 rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                View Products
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-x-2 rounded-md px-8 py-4 text-lg font-semibold text-white border border-white hover:bg-white hover:text-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;