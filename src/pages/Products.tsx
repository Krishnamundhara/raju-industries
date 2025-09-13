import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const productCategories = [
  {
    name: 'Viscose Yarn',
    description: 'Premium quality viscose spun yarn',
    image: '/images/viscose-yarn.jpg',
    variants: [
      'NE 15-60 Raw White',
      'High Twist Spun Yarn NE 30',
      'Specialty Yarn NE 21-40 Nepy',
      'Viscose Slub Yarn NE 30, 40'
    ]
  },
  {
    name: 'Polyester Yarn',
    description: 'High-quality virgin and recycled polyester yarn',
    image: '/images/polyester-yarn.jpg',
    variants: [
      'Virgin Polyester NE 20-60 Raw White',
      'Dyed Polyester NE 20, 30, 40',
      'Melange Polyester NE 30, 40',
      'Recycled Polyester NE 30-60'
    ]
  },
  {
    name: 'Cotton Yarn',
    description: 'Premium cotton yarn varieties',
    image: '/images/cotton-yarn.jpg',
    variants: [
      'NE 30KW, 32KW, 40KW',
      'NE 41KW, 41KCW',
      'Compact Cotton NE 40-60',
      'Slub Varieties Available'
    ]
  },
  {
    name: 'Blended Fabrics',
    description: 'High-quality blended fabric varieties',
    image: '/images/grey cotton.jpg',
    variants: [
      'Polyester/Viscose Blend',
      'Cotton/Polyester Blend',
      'Specialty Blends Available',
      'Custom Specifications'
    ]
  },
  {
    name: 'Viscose Spun Yarn',
    description: 'Premium viscose spun yarn varieties',
    image: '/images/ViscoseSpunYarn.png',
    variants: ['2.18/2.20/2/40 doubling'],
  },
  {
    name: 'Linen Blended Spun Yarn',
    description: 'Premium linen blended spun yarn varieties',
    image: '/images/cotton-storage.jpg ',
    variants: ['30 VSF SLUB' ],
  },
  {
    name: 'Cotton Grey Fabrics',
    description: 'Premium cotton grey fabric varieties',
    image: '/images/gc.png',
    variants: ['40x60x68x68', '40x70x72x72', 'Custom specifications available'],
  },
  {
    name: '100% Viscose slub',
    description: 'Premium 100% viscose slub fabric varieties',
    image: '/images/pj_d.png',
    variants: ['100% Viscose Slub'],
  },
  {
      name: 'Carded Slub',
      description: 'Premium carded slub fabric varieties',
      image: '/images/pj_a.png',
      variants: ['Carded Slub'],
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Viscose Spun Yarn', 'Linen Blended Spun Yarn', 'Viscose Yarn', 'Polyester Yarn', 'Cotton Yarn', 'Blended Fabrics'];

  return (
    <div className="py-16 bg-gray-50">
      <SEO 
        title="Products - Raju Industries | Premium Yarn & Fabric Brokerage"
        description="Explore our extensive range of premium yarn and fabric products. Raju Industries offers cotton, viscose, and texturized yarns through our brokerage services."
        pathname="/products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Our Products</h1>
        <p className="mt-4 text-xl text-gray-600 text-center mb-12">
          Discover our comprehensive range of high-quality yarns.<br/>
          Leveraging 30 years of expertise to provide the finest quality yarns for your needs
        </p>
        
        
        {/* Category filters */}
        <div className="p-4 bg-white rounded-lg shadow-sm mb-8">
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {productCategories
            .filter(category => selectedCategory === 'all' || category.name === selectedCategory)
            .map((category) => (
              <div 
                key={category.name} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                {/* Image container with 1:1 aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: '100%' }}> {/* 1:1 aspect ratio */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{category.description}</p>
                  
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-900">Available Variants:</h4>
                    <ul className="mt-1 space-y-1">
                      {category.variants.map((variant) => (
                        <li key={variant} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {variant}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href="/#contact"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      Enquire Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <span className="text-xs text-gray-500">
                      Customizable
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Color Chart Section - different background */}
        <div className="mt-16 text-center p-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Color Options</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-sm">
            Explore our wide range of color options available for different yarn types.
            Custom colors can be developed based on your requirements.
          </p>
          <div className="mt-6 max-w-lg mx-auto px-4"> {/* Reduced max-width */}
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/images/color-chart.jpg"
                alt="Yarn color options"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </div>
        
        {/* Quality Standards Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Quality Standards</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our products adhere to international quality standards and undergo rigorous testing
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <p className="mt-2 text-gray-600">Quality Inspection</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary-600">20+</div>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary-600">1000+</div>
              <p className="mt-2 text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Products; 