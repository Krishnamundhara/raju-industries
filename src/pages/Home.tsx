
import Hero from '../components/Hero';
import About from '../components/About';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import GoogleQRCode from '../components/GoogleQRCode';


// Product images
const productImages = [
  { src: '/images/cotton-yarn.jpg', alt: 'Cotton Yarn', title: 'Cotton Yarn' },
  { src: '/images/polyester-yarn.jpg', alt: 'Polyester Yarn', title: 'Polyester Yarn' },
  { src: '/images/viscose-yarn.jpg', alt: 'Viscose Yarn', title: 'Viscose Yarn' },
  { src: '/images/grey cotton.jpg', alt: 'Grey Cotton', title: 'Grey Cotton' },
];

// Testimonials
const testimonials = [
  {
    quote: "Raju Industries consistently delivers quality yarns that meet our strict standards. Their service is prompt and reliable.",
    author: "Textile Mill Owner, Bhiwandi"
  },
  {
    quote: "Working with Raju Industries has streamlined our sourcing process. Their extensive network provides us with quality materials at competitive prices.",
    author: "Garment Manufacturer, Mumbai"
  }
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Raju Industries - Yarn & Fabric Trader in India"
        pathname="/"
      />
      <Hero />
      
      {/* Welcome Section with Google QR Code Side by Side */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-sky-600">Raju Industries</span>
            </h2>
            <div className="mt-3 h-1 w-40 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mx-auto"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Content */}
            <div>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We are trusted brokers connecting buyers with premium yarn and fabric sources across India.
                With more than 30 years of industry experience, our extensive network, competitive pricing, 
                and reliable service has established us as a leading textile broker in the yarn and fabric industry.
              </p>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-primary-100 w-14 h-14 mx-auto lg:mx-0 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7 text-primary-700" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Quality Assurance</h3>
                  <p className="mt-2 text-gray-600">Premium yarns and fabrics from trusted Mills</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-primary-100 w-14 h-14 mx-auto lg:mx-0 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary-700" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Competitive Pricing</h3>
                  <p className="mt-2 text-gray-600">Best market rates through our extensive network</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-primary-100 w-14 h-14 mx-auto lg:mx-0 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary-700" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Industry Experience</h3>
                  <p className="mt-2 text-gray-600">Three decades of expertise in the textile industry</p>
                </div>
              </div>
            </div>

            {/* Right Section - Google QR Code */}
            <div className="flex justify-center lg:justify-end">
              <GoogleQRCode size="large" showBorder={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Products</h2>
            <div className="mt-3 h-1 w-40 bg-primary-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of premium yarns and fabrics to meet your manufacturing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {productImages.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.src} 
                    alt={product.alt} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-xl font-bold">{product.title}</h3>
                    <Link 
                      to="/products" 
                      className="mt-2 inline-flex items-center text-sm font-medium text-white hover:text-primary-200"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
            >
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section with Parallax Effect */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white opacity-70"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <About />
      </div>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            <div className="mt-3 h-1 w-40 bg-primary-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-600">
                <svg className="h-8 w-8 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 leading-relaxed italic mb-4">{testimonial.quote}</p>
                <p className="text-sm text-primary-700 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="relative py-20 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Source Premium Textile Materials?
            </h2>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/80">
              Contact us today to discuss your yarn and fabric requirements. Our expert team is ready to connect you with the best sources at competitive prices.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 transition-colors shadow-sm"
              >
                Contact Us
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-colors"
              >
                Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 