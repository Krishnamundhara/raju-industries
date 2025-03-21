import React from 'react';
import { Factory, Package, Users, Send } from 'lucide-react';

const services = [
  {
    name: 'Manufacturing Excellence',
    description: 'State-of-the-art manufacturing facilities ensuring premium quality yarn production',
    icon: Factory,
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored yarn solutions meeting specific requirements of our clients',
    icon: Package,
  },
  {
    name: 'Technical Support',
    description: 'Expert technical assistance and consultation for optimal product selection',
    icon: Users,
  },
  {
    name: 'Global Distribution',
    description: 'Efficient worldwide distribution network ensuring timely delivery',
    icon: Send,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive yarn solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">
                <service.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                {service.name}
              </h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;