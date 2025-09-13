import React from 'react';
import { MapPin, Award, Target, Compass } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-gray-50">
      <SEO 
        title="About Us - Raju Industries | Textile Brokerage Since 1993"
        description="Learn about Raju Industries, a trusted yarn and fabric broker since 1993. With headquarters in Bhiwandi and branches across India, we connect textile businesses with premium suppliers."
        pathname="/about"
      />
      <div className="relative bg-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero/yarn-storage%204.jpg"
            alt="Yarn production facility"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Raju Industries</h1>
          <p className="mt-6 max-w-3xl text-xl">
            A leading name in yarn trading since 1993, serving businesses across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <section className="mb-16 p-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Our Company</h2>
          <div className="mt-6 prose prose-lg text-gray-500">
            <p>
              Established in 1993, Raju Industries has grown to become one of the trusted names in the yarn industry, specializing in yarn trading solutions. Based in Bhiwandi, Maharashtra, we've expanded our operations to serve clients across India's major yarn hubs.
            </p>
            <p>
              Our commitment to quality, integrity, and customer satisfaction has helped us build long-term relationships with manufacturers, traders, and businesses across the yarn supply chain. With a dedicated team of professionals and extensive industry knowledge, we strive to deliver exceptional products and services to meet the diverse needs of our clients.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be the leading yarn trading company in India, recognized for our quality products, ethical business practices, and customer-centric approach. We aim to foster innovation in the yarn industry and contribute to the growth of India's manufacturing sector.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To deliver high-quality yarn and textile products that meet the evolving needs of our customers. We are committed to building lasting relationships with our clients and suppliers, while ensuring consistent quality, competitive pricing, and timely delivery.
            </p>
          </div>
        </section>

        {/* Prime Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Trading Network</h2>
          
          {/* Text-based map visualization */}
          <div className="relative p-8 bg-gray-100 rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Raju Industries Pan-India Network</h3>
              <p className="text-gray-600">Serving all major yarn trading hubs across India</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-600 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-gray-900">Bhiwandi</h3>
                <p className="text-sm text-gray-500">Maharashtra</p>
                <p className="mt-2 text-primary-600 font-medium">Headquarters</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-600 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-gray-900">Bhrahanpur</h3>
                <p className="text-sm text-gray-500">Madhya Pradesh</p>
                <p className="mt-2 text-primary-600 font-medium"> Central India</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-600 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-gray-900">Surat</h3>
                <p className="text-sm text-gray-500">Gujarat</p>
                <p className="mt-2 text-primary-600 font-medium">Western India</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary-600 rounded-full transform translate-x-1 -translate-y-1"></div>
                <h3 className="text-lg font-semibold text-gray-900">Erode</h3>
                <p className="text-sm text-gray-500">Tamil Nadu</p>
                <p className="mt-2 text-primary-600 font-medium">Southern India</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 italic">
                "Connecting India's yarn industry through our strategic presence in key manufacturing hubs"
              </p>
            </div>
          </div>
          
          {/* Additional details */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Network</h3>
            <p className="text-gray-600">
            Our strategic presence in key yarn manufacturing regions enables us to efficiently serve customers across India. With strong distribution channels in Bhiwandi (Maharashtra), Bharanpur (Madhya Pradesh), Surat (Gujarat), and Erode (Tamil Nadu), we ensure seamless supply and accessibility.
            </p>
            <p className="text-gray-600 mt-4">
              This nationwide network enables us to source the finest yarns from various manufacturing centers and deliver them to our customers with minimal lead times. Our presence in these yarn hubs also gives us insights into regional market trends, helping us better serve the specific needs of each region.
            </p>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16 p-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Our Quality Standards</h2>
          <div className="mt-6 prose prose-lg text-gray-500">
            <p>
              At Raju Industries, we're committed to maintaining the highest quality standards in all our products. Our rigorous quality control processes ensure that every product meets or exceeds industry standards, providing our customers with the assurance of excellence.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Quality Testing</h3>
                  <p className="text-sm text-gray-500">Comprehensive testing at every stage</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Industry Standards</h3>
                  <p className="text-sm text-gray-500">Adherence to national and international standards</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Customer Satisfaction</h3>
                  <p className="text-sm text-gray-500">Commitment to exceeding expectations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 