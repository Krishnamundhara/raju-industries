import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const productCategories = [
  {
    name: 'Viscose Yarn',
    description: 'Premium quality viscose spun yarn',
    image: '/images/viscose-yarn.jpg',
    badge: 'Popular',
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
    badge: 'Eco-friendly',
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
    badge: 'Premium',
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
    badge: 'Versatile',
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
    badge: 'Quality',
    variants: ['2.18/2.20/2/40 doubling'],
  },
  {
    name: 'Linen Blended Spun Yarn',
    description: 'Premium linen blended spun yarn varieties',
    image: '/images/cotton-storage.jpg ',
    badge: 'Luxury',
    variants: ['30 VSF SLUB' ],
  },
  {
    name: 'Cotton Grey Fabrics',
    description: 'Premium cotton grey fabric varieties',
    image: '/images/gc.png',
    badge: 'Customizable',
    variants: ['40x60x68x68', '40x70x72x72', 'Custom specifications available'],
  },
  {
    name: '100% Viscose slub',
    description: 'Premium 100% viscose slub fabric varieties',
    image: '/images/pj_d.png',
    badge: 'Pure',
    variants: ['100% Viscose Slub'],
  },
  {
      name: 'Carded Slub',
      description: 'Premium carded slub fabric varieties',
      image: '/images/pj_a.png',
      badge: 'Specialty',
      variants: ['Carded Slub'],
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Viscose Spun Yarn', 'Linen Blended Spun Yarn', 'Viscose Yarn', 'Polyester Yarn', 'Cotton Yarn', 'Blended Fabrics'];

  // Filter products based on both category and search query
  const filteredProducts = productCategories.filter(category => {
    const matchesCategory = selectedCategory === 'all' || category.name === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.variants.some(v => v.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getTagColor = (badge: string) => {
    const colors: Record<string, string> = {
      'Popular': 'bg-amber-100 text-amber-800',
      'Eco-friendly': 'bg-emerald-100 text-emerald-800',
      'Premium': 'bg-purple-100 text-purple-800',
      'Versatile': 'bg-sky-100 text-sky-800',
      'Quality': 'bg-rose-100 text-rose-800',
      'Luxury': 'bg-indigo-100 text-indigo-800',
      'Customizable': 'bg-blue-100 text-blue-800',
      'Pure': 'bg-teal-100 text-teal-800',
      'Specialty': 'bg-orange-100 text-orange-800'
    };
    
    return colors[badge] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Products - Raju Industries | Premium Yarn & Fabric Brokerage"
        description="Explore our extensive range of premium yarn and fabric products. Raju Industries offers cotton, viscose, and texturized yarns through our brokerage services."
        pathname="/products"
      />
      
      {/* Hero Section */}
      <div className="relative bg-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Premium Quality Products
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Discover our comprehensive range of high-quality yarns.<br/>
              Three decades of expertise in sourcing the finest textile materials.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-6">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search box */}
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Category title */}
            <div className="hidden md:block text-sm font-medium text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </div>
          </div>
          
          {/* Category filters - horizontal scrolling on mobile */}
          <div className="mt-6 -mx-6 px-6 pb-2 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Products' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Display */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 10.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 10.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 19.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 19.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              onClick={() => {setSelectedCategory('all'); setSearchQuery('');}}
              className="mt-6 px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {filteredProducts.map((category) => (
              <div 
                key={category.name} 
                className="group relative rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Card with full-size image and overlay */}
                <div className="relative aspect-w-3 aspect-h-4 h-full">
                  {/* Product Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Dark gradient overlay - becomes more prominent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Product badge */}
                  {category.badge && (
                    <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getTagColor(category.badge)}`}>
                      {category.badge}
                    </span>
                  )}
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div>
                      {/* Category title */}
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-200 mb-4 opacity-90">{category.description}</p>
                      
                      {/* Variants - visible on hover with a fade-in effect */}
                      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">VARIANTS</h4>
                        <ul className="space-y-1.5">
                          {category.variants.map((variant) => (
                            <li key={variant} className="text-sm text-white flex items-start">
                              <svg className="h-4 w-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {variant}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Call to action at the bottom */}
                    <div className="mt-auto">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg transition-colors"
                      >
                        <span className="font-medium">Enquire Now</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Quality Standards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-primary-50 rounded-full opacity-70"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-primary-50 rounded-full opacity-70"></div>
          
          <div className="relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Our Quality Standards</h2>
              <div className="mt-3 h-1 w-24 bg-primary-600 mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600">
                Our products adhere to international quality standards and undergo rigorous testing at every stage of procurement.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center transform hover:-translate-y-1 duration-300">
                <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-primary-700">100%</div>
                <p className="mt-2 text-gray-600">Quality Inspection</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center transform hover:-translate-y-1 duration-300">
                <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-primary-700">30+</div>
                <p className="mt-2 text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center transform hover:-translate-y-1 duration-300">
                <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-primary-700">1000+</div>
                <p className="mt-2 text-gray-600">Satisfied Customers</p>
              </div>
            </div>
            
            {/* Color Chart Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900">Color Options</h3>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of color options available for different yarn types.
                Custom colors can be developed based on your specific requirements.
              </p>
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/color-chart.jpg"
                    alt="Yarn color options"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 