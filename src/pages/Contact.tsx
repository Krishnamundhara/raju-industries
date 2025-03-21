import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Indian phone number (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid Indian phone number');
      return;
    }

    // Message to be sent
    const message = encodeURIComponent(
      'Welcome to RAJU INDUSTRIES.\nWe supply all types of yarns at competitive rates.\nMOB.9309531311/9322223600'
    );

    // Create WhatsApp URL with phone number and message
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear form and error
    setPhoneNumber('');
    setError('');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h2>
        <p className="mt-4 text-xl text-gray-600 text-center mb-12">
          Feel free to reach out to us for any queries or information.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Information */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="w-8 h-8 text-primary-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Visit Us</h3>
            <p className="mt-2 text-gray-600 text-center">
              67 Hassan bagh, opp hathi sizing,<br />
              dhamankar naka, bhiwandi<br />
              G.S.T. No.: 27AHFPM0511N1ZD
            </p>
          </div>

          {/* Phone Information */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="w-8 h-8 text-primary-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="mt-2 text-gray-600">
              <a href="tel:+919309531311" className="hover:text-primary-600">
                +91 93095 31311
              </a>
            </p>
          </div>

          {/* Email Information */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="w-8 h-8 text-primary-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Email Us</h3>
            <p className="mt-2 text-gray-600">
              <a href="mailto:rajuind2024@gmail.com" className="hover:text-primary-600">
                rajuind2024@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* WhatsApp Contact Form */}
        <div className="mt-16 max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Get Product Information on WhatsApp
          </h3>
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Enter your mobile number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">+91</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setError('');
                  }}
                  className={`block w-full pl-12 pr-4 py-2 border ${
                    error ? 'border-red-300' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                  placeholder="Enter 10 digit number"
                  maxLength={10}
                />
              </div>
              {error && (
                <p className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Send className="h-4 w-4 mr-2" />
              Send on WhatsApp
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center p-8 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.youtube.com/@Raju_Industries" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              YouTube
            </a>
            <a href="https://instagram.com/raju_industries_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              Instagram
            </a>
            <a href="https://x.com/Raju_Industries" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              X (Twitter)
            </a>
            <a href="https://facebook.com/profile.php?id=100083314218016" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 