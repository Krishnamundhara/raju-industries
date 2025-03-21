import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with us for any inquiries about our products
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="w-8 h-8 text-primary-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="mt-2 text-gray-600">
              <a href="tel:+919130977555" className="hover:text-primary-600">
                +91 91309 77555
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="w-8 h-8 text-primary-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Email Us</h3>
            <p className="mt-2 text-gray-600">
              <a href="mailto:contact@rajuindustries.com" className="hover:text-primary-600">
                contact@rajuindustries.com
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="w-8 h-8 text-primary-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Visit Us</h3>
            <p className="mt-2 text-gray-600 text-center">
              Raju Industries,<br />
              Industrial Area,<br />
              Your City, State
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;