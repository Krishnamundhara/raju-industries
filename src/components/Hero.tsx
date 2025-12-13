import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    url: '/images/hero/color.jpg',
    title: 'RAJU INDUSTRIES',
    subtitle: 'Trusted Broker of Quality Yarn & Fabrics',
    description: 'Connecting buyers and sellers in the textile industry with quality materials and reliable service.'
  },
  {
    url: '/images/hero/yarn-storage.jpg',
    title: 'PREMIUM QUALITY',
    subtitle: 'Cotton, Viscose & Texturized Yarn Trading',
    description: 'We source the finest quality yarns from trusted manufacturers across India.'
  },
  {
    url: '/images/hero/yarn-storage%202.jpg',
    title: 'EXCELLENCE ASSURED',
    subtitle: 'Quality that defines our service',
    description: 'Our stringent quality control ensures you receive only the best materials for your production.'
  },
  {
    url: '/images/hero/yarn-storage%203.jpg',
    title: '30+ YEARS EXPERIENCE',
    subtitle: 'Serving textile industry since 1993',
    description: 'Three decades of expertise and industry relationships at your service.'
  },
  {
    url: '/images/hero/abt.jpg',
    title: 'NATIONWIDE NETWORK',
    subtitle: 'Pan-India Textile Brokerage Services',
    description: 'Our extensive connections span across all major textile hubs in India.'
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };
  
  const goToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentImageIndex) return;
    
    setIsAnimating(true);
    setCurrentImageIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, isAnimating]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background images with animated transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-110'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient with animated pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40">
            <div className="absolute inset-0 bg-black opacity-30" 
                 style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM20 20v20h20V20H20zm10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z\' fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                 backgroundSize: '40px 40px'}}></div>
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Animated text content for each slide */}
            {heroImages.map((image, index) => (
              <div key={index} className={`text-center transition-all duration-500 ${
                index === currentImageIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'
              }`}>
                {index === currentImageIndex && (
                  <>
                    <div className="inline-block mb-4">
                      <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-wide mb-4">
                      {image.title}
                    </h1>
                    <p className="mt-2 text-base sm:text-lg text-gray-300">
                      <span className="font-medium">Govind Mundhara</span> (Proprietor)
                    </p>
                    <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto">
                      {image.subtitle}
                    </p>
                    <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                      {image.description}
                    </p>
                  
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                      <Link
                        to="/products"
                        className="group inline-flex items-center justify-center gap-x-2 rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20"
                      >
                        View Products
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-x-2 rounded-md px-8 py-4 text-lg font-semibold text-white border border-white hover:bg-white/10 transition-all duration-300"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-20 bottom-10 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="hidden sm:block">
            <button 
              onClick={goToPrevSlide}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-white/30 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex space-x-3 justify-center">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-8 h-2 bg-white rounded-full' 
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75 rounded-full'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="hidden sm:block">
            <button 
              onClick={goToNextSlide}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-white/30 transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
