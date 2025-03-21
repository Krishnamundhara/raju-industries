import React from 'react';
import { Award, Clock, Globe } from 'lucide-react';

const features = [
  {
    name: 'Quality Products',
    description: 'Premium yarn and fabric products meeting international quality standards',
    icon: Award
  },
  {
    name: 'Industry Experience',
    description: 'Over two decades of expertise in textile manufacturing and trading',
    icon: Clock
  },
  {
    name: 'Pan-India Presence',
    description: 'Serving major textile hubs across India with reliable service',
    icon: Globe
  }
];

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src="/images/pj_b.png"
              alt="Various types of Yarns and Fabrics"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content Section */}
          <div className="mt-12 lg:mt-0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Legacy of Excellence
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Since 2002, Raju Industries has been at the forefront of textile manufacturing 
                and trading. Our commitment to quality and customer satisfaction has made us 
                a trusted name in the industry.
              </p>
            </div>

            <dl className="mt-12 space-y-10">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-semibold leading-6 text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;