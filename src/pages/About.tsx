import { Target, Compass, Calendar, Users, Layers, Award, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <SEO 
        title="About Us - Raju Industries | Textile Brokerage Since 1993"
        description="Learn about Raju Industries, a trusted yarn and fabric broker since 1993. With headquarters in Bhiwandi and branches across India, we connect textile businesses with premium suppliers."
        pathname="/about"
      />
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 transform transition-transform duration-1000 hover:scale-105">
          <img
            src="/images/hero/abt.jpg"
            alt="Yarn production facility"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
              About <span className="text-primary-400">Raju Industries</span>
            </h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl font-light">
              A leading name in yarn trading since 1993, serving businesses across India.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-lg transform translate-x-3 translate-y-3"></div>
                <img 
                  src="/images/hero/yarn-storage%203.jpg" 
                  alt="Raju Industries Facility" 
                  className="relative z-10 rounded-lg shadow-xl object-cover w-full h-[400px]"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
                <span className="relative inline-block">
                  Our Company
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
                </span>
              </h2>
              <div className="mt-6 text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Established in 1993, <span className="font-semibold text-primary-700">Raju Industries</span> has grown to become one of the trusted names in the yarn industry, specializing in yarn trading solutions. Based in Bhiwandi, Maharashtra, we've expanded our operations to serve clients across India's major yarn hubs.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to quality, integrity, and customer satisfaction has helped us build long-term relationships with manufacturers, traders, and businesses across the yarn supply chain. With a dedicated team of professionals and extensive industry knowledge, we strive to deliver exceptional products and services to meet the diverse needs of our clients.
                </p>
              </div>
              
              {/* Key Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300">
                  <Calendar className="h-8 w-8 text-primary-600 mx-auto" />
                  <p className="mt-2 text-3xl font-bold text-gray-900">30+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300">
                  <Users className="h-8 w-8 text-primary-600 mx-auto" />
                  <p className="mt-2 text-3xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300">
                  <Layers className="h-8 w-8 text-primary-600 mx-auto" />
                  <p className="mt-2 text-3xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              <span className="relative inline-block">
                Our Vision & Mission
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-primary-500/10 rounded-full p-3">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading yarn trading company in India, recognized for our quality products, ethical business practices, and customer-centric approach. We aim to foster innovation in the yarn industry and contribute to the growth of India's manufacturing sector.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-primary-500/10 rounded-full p-3">
                  <Compass className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver high-quality yarn and textile products that meet the evolving needs of our customers. We are committed to building lasting relationships with our clients and suppliers, while ensuring consistent quality, competitive pricing, and timely delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Prime Locations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              <span className="relative inline-block">
                Our Trading Network
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Strategically located across India's major textile hubs to serve you better
            </p>
          </div>
          
          {/* Modern Map Visualization */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 shadow-xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">Raju Industries Pan-India Network</h3>
              <p className="text-gray-300">Connecting India's textile industry</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center relative transform transition duration-300 hover:-translate-y-2 hover:bg-white/20">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-500 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-white">Bhiwandi</h3>
                <p className="text-sm text-gray-300">Maharashtra</p>
                <p className="mt-2 text-primary-400 font-medium">Headquarters</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center relative transform transition duration-300 hover:-translate-y-2 hover:bg-white/20">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-500 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-white">Bhrahanpur</h3>
                <p className="text-sm text-gray-300">Madhya Pradesh</p>
                <p className="mt-2 text-primary-400 font-medium">Central India</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center relative transform transition duration-300 hover:-translate-y-2 hover:bg-white/20">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-500 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-white">Surat</h3>
                <p className="text-sm text-gray-300">Gujarat</p>
                <p className="mt-2 text-primary-400 font-medium">Western India</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center relative transform transition duration-300 hover:-translate-y-2 hover:bg-white/20">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-500 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-white">Erode</h3>
                <p className="text-sm text-gray-300">Tamil Nadu</p>
                <p className="mt-2 text-primary-400 font-medium">Southern India</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-white/80 italic font-light text-lg">
                "Connecting India's yarn industry through our strategic presence in key manufacturing hubs"
              </p>
            </div>
          </div>
          
          {/* Additional details */}
          <div className="mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" /> 
              Strategic Network
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our strategic presence in key yarn manufacturing regions enables us to efficiently serve customers across India. With strong distribution channels in Bhiwandi (Maharashtra), Bharanpur (Madhya Pradesh), Surat (Gujarat), and Erode (Tamil Nadu), we ensure seamless supply and accessibility.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              This nationwide network enables us to source the finest yarns from various manufacturing centers and deliver them to our customers with minimal lead times. Our presence in these yarn hubs also gives us insights into regional market trends, helping us better serve the specific needs of each region.
            </p>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
              <span className="relative inline-block">
                Our Quality Standards
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
              </span>
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/5 rounded-xl transform rotate-1"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p className="leading-relaxed">
                  At Raju Industries, we're committed to maintaining the highest quality standards in all our products. Our rigorous quality control processes ensure that every product meets or exceeds industry standards, providing our customers with the assurance of excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500 transform transition duration-300 hover:-translate-y-1">
                  <Award className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Testing</h3>
                  <p className="text-gray-600">Comprehensive testing at every stage ensures consistent quality across all our products.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500 transform transition duration-300 hover:-translate-y-1">
                  <Award className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Standards</h3>
                  <p className="text-gray-600">Adherence to national and international standards to ensure top-quality products.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500 transform transition duration-300 hover:-translate-y-1">
                  <Award className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Our commitment to exceeding expectations drives every business decision we make.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 shadow-lg">
              Get in Touch With Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;