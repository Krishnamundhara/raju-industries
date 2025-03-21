import React from 'react';

const productCategories = [
  {
    name: 'Cotton Yarn Trading',
    description: 'Wide range of quality cotton yarn variants',
    image: '/images/cotton-yarn.jpg',
    variants: ['41 carded', '44 carded', '40 carded', '60 carded weft', '30 cotton slub', '40 cotton slub', '60 cotton slub'],
  },
  {
    name: 'Polyester Yarn Trading',
    description: 'Premium polyester yarn varieties',
    image: '/images/polyester-yarn.jpg',
    variants: ['20 PSF', '30 PSF', '40 PSF', '30 PSF SLUB', '40 PSF SLUB', '50 PSF', '60 PSF'],
  },
  {
    name: 'Viscose Yarn Trading',
    description: 'High-quality viscose yarn selection',
    image: '/images/viscose-yarn.jpg',
    variants: ['16VSF', '20 VSF', '24 VSF', '30 VSF', '40 VSF', '30 VSF SLUB', '2.18/2.20/2/40 doubling'],
  },
  {
    name: 'Cotton Grey Fabrics',
    description: 'Premium cotton grey fabric varieties',
    image: '/images/grey cotton.jpg',
    variants: ['40x60x68x68', '40x70x72x72', 'Custom specifications available'],
  },

];

const products = [
  {
    name: '57 PC Yarn',
    description: 'Premium quality PC yarn from trusted manufacturers',
    features: ['LKP', 'CENTWIN', 'TMT', 'PAVATHAL'],
  },
  {
    name: '63 Polyester',
    description: 'High-quality polyester yarn variants',
    features: ['RM', 'LKP', 'CENTWIN', 'MR'],
  },
  {
    name: '66 PC',
    description: 'Superior PC yarn from leading manufacturers',
    features: [
      'SIVA SHAKTI',
      'SKVT',
      'TMT',
      'KLR',
      'PADAMBALAJI',
      'PADAIAPPA',
      'SAI JAYAN',
      'DRSPG',
      'AAS'
    ],
  },
  {
    name: '47 PC',
    description: 'Quality PC yarn variants',
    features: ['Venktratna', 'Jaydev', 'Mr'],
  },
  {
    name: '30 VSF PLAIN',
    description: 'Premium VSF plain yarn collection',
    features: [
      'CHOLA',
      'SHATA LAXMI',
      'AGT',
      'SANKGIRI',
      'NALATHAL',
      'GMB',
      'AALIYA'
    ],
  },
  {
    name: '30 VSF SLUB',
    description: 'Specialized VSF slub yarn varieties',
    features: [
      'RAJ GURU',
      'PALLAVA',
      'MOTHI',
      'AALIYA',
      'LUCKY',
      'GMB',
      'SHANTHANLAXMI',
      'AGT',
      'SANKGIRI',
      'JAI MARUTI',
      'NALTHAL',
      'CHIRANGILAL'
    ],
  },
  {
    name: '40/41 Cotton Carded',
    description: 'Premium cotton carded yarn',
    features: [
      'TALLURI',
      'JAGNATH',
      'SANDHYA',
      'RAMYA',
      'JYOTIRMAYE',
      'SAMDAN'
    ],
  },
  {
    name: '60 Carded',
    description: 'High-quality carded yarn collection',
    features: [
      'RAJA',
      'GREEN COTTON',
      'RUKMANI',
      'TARUN BALAJI',
      'MTA NON AUTO',
      'CHANGE NON AUTO'
    ],
  },
  {
    name: '40 Poly Magic',
    description: 'Specialized polyester yarn variants',
    features: [
      'Sandeep',
      'Surge',
      'Spinvision',
      'Suryalata'
    ],
  },
  {
    name: '40 Polyester Recycle',
    description: 'Eco-friendly recycled polyester yarn',
    features: [
      'SANDEEP',
      '38 COUNT',
      '40 COUNT',
      'RSWM',
      'NAGANI',
      'PREMIAR',
      'TRIVANI',
      'PROMA'
    ],
  },
  {
    name: 'Cotton Grey Fabrics',
    description: 'Premium cotton grey fabric varieties',
    features: [
      '40x60x68x68',
      '40x70x72x72',
      'Custom specifications available'
    ],
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900">
            Our Products & Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Quality fabric manufacturing and comprehensive yarn trading solutions
          </p>
        </div>

        {/* Featured Product Categories */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900">{category.name}</h3>
                <p className="mt-2 text-gray-600">{category.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">Available Variants:</h4>
                  <ul className="mt-2 space-y-2">
                    {category.variants.map((variant, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></span>
                        {variant}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Variants */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">Available Variants:</h4>
                  <ul className="mt-2 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-primary-700 font-semibold">
            60/64/67 counts available on booking
          </p>
        </div>

        {/* Color Chart */}
        <div className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-900">
              Color Options
            </h2>
            <p className="mt-4 text-gray-600">
              Explore our wide range of color options for different yarn types
            </p>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/color-chart.jpg"
              alt="Yarn Color Chart"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;