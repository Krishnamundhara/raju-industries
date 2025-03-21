import React, { useState } from 'react';
import { Send } from 'lucide-react';

const WhatsAppRedirect = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Remove any non-numeric characters and spaces
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    
    // Check if it's a valid Indian mobile number (10 digits)
    if (cleanNumber.length === 10) {
      // Format number for WhatsApp API (add country code)
      const whatsappNumber = `91${cleanNumber}`;
      const message = 'Welcome to Raju Industries! How can we help you today?';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="whatsapp" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
            Connect with Us on WhatsApp
          </h2>
          <form onSubmit={handleWhatsAppRedirect} className="mt-5">
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l-md sm:text-sm border-gray-300"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </div>
              <button
                type="submit"
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Send className="h-5 w-5" />
                <span>Chat Now</span>
              </button>
            </div>
          </form>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Enter your 10-digit mobile number to start a WhatsApp conversation
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppRedirect;