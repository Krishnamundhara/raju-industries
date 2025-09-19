import { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, Globe, Building } from 'lucide-react';
import SEO from '../components/SEO';

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
      'Welcome to RAJU INDUSTRIES.\nWe supply all types of yarns at competitive rates.\nMOB.9309531311/9130977555\nVisit our website: https://rajuindustries.netlify.app/'
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
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <SEO 
        title="Contact Raju Industries | Yarn & Fabric Brokerage"
        description="Contact Raju Industries for all your yarn and fabric needs. Reach us in Bhiwandi, Maharashtra, or at our branches in Bhrahanpur, Surat, and Erode."
        pathname="/contact"
      />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/color.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Get In <span className="text-primary-400">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
            We're here to answer any questions about our products and services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16">
          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-primary-500/10 rounded-full p-3 w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <Building className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Visit Us</h3>
            <p className="text-gray-600 text-center">
              <span className="font-medium">Raju Industries</span><br />
              <span className="text-primary-600">Govind Mundhara</span> (Proprietor)<br />
              67 Hassan bagh, opp hathi sizing,<br />
              dhamankar naka, bhiwandi<br />
              G.S.T. No.: <span className="font-mono text-sm">27AHFPM0511N1ZD</span>
            </p>
          </div>

          {/* Phone Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-primary-500/10 rounded-full p-3 w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Call Us</h3>
            <div className="flex flex-col items-center space-y-2">
              <a 
                href="tel:+919309531311" 
                className="flex items-center px-6 py-3 bg-gray-50 hover:bg-primary-50 rounded-full transition-colors duration-300 hover:text-primary-600"
              >
                <Phone className="h-5 w-5 mr-2 text-primary-600" />
                <span className="font-medium">+91 93095 31311</span>
              </a>
              <a 
                href="tel:+919130977555" 
                className="flex items-center px-6 py-3 bg-gray-50 hover:bg-primary-50 rounded-full transition-colors duration-300 hover:text-primary-600"
              >
                <Phone className="h-5 w-5 mr-2 text-primary-600" />
                <span className="font-medium">+91 91309 77555</span>
              </a>
            </div>
          </div>

          {/* Email Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-primary-500/10 rounded-full p-3 w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Email Us</h3>
            <div className="flex justify-center">
              <a 
                href="mailto:rajuind2024@gmail.com" 
                className="flex items-center px-6 py-3 bg-gray-50 hover:bg-primary-50 rounded-full transition-colors duration-300 hover:text-primary-600"
              >
                <Mail className="h-5 w-5 mr-2 text-primary-600" />
                <span className="font-medium">rajuind2024@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Form and QR Code Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-primary-600/5 rounded-3xl transform rotate-1"></div>
          
          <div className="relative bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
                <span className="relative inline-block">
                  Connect With Us
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
                </span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Get product information or inquire about our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* WhatsApp Form */}
              <div className="bg-gray-50 rounded-xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Get Product Information on WhatsApp
                  </h3>
                </div>
                <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Enter your mobile number
                    </label>
                    <div className="relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500 sm:text-sm font-medium">+91</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          setError('');
                        }}
                        className={`block w-full pl-12 pr-4 py-3 border ${
                          error ? 'border-red-300' : 'border-gray-200'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900`}
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
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send on WhatsApp
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By clicking, you'll receive a message with our product information
                  </p>
                </form>
              </div>

              {/* QR Code Section */}
              <div className="bg-gray-50 rounded-xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                <div className="flex items-center mb-6">
                  <Globe className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Scan to Visit Our Website
                  </h3>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-3 border-8 border-white">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-500/10 rounded-lg transform translate-x-1 translate-y-1"></div>
                    <img 
                      src="/images/rajuindustries_qr.png"
                      alt="Raju Industries Website QR Code"
                      className="relative z-10 w-48 h-48 object-contain"
                    />
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Scan this QR code to visit<br />
                    <span className="text-primary-600 font-semibold">Raju Industries</span> website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 inline-block relative">
              <span className="relative inline-block">
                Follow Us On Social Media
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
              </span>
            </h2>
            <p className="mt-3 text-gray-600">Stay updated with our latest products and offers</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.youtube.com/@Raju_Industries" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white hover:bg-red-50 rounded-full transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              <span className="w-6 h-6 mr-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
              <span className="font-medium">YouTube</span>
            </a>
            
            <a 
              href="https://instagram.com/raju_industries_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white hover:bg-pink-50 rounded-full transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              <span className="w-6 h-6 mr-2 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </span>
              <span className="font-medium">Instagram</span>
            </a>
            
            <a 
              href="https://x.com/Raju_Industries" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white hover:bg-blue-50 rounded-full transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              <span className="w-6 h-6 mr-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
              <span className="font-medium">X (Twitter)</span>
            </a>
            
            <a 
              href="https://facebook.com/profile.php?id=100083314218016" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white hover:bg-blue-50 rounded-full transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              <span className="w-6 h-6 mr-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </span>
              <span className="font-medium">Facebook</span>
            </a>
            
            <a 
              href="https://www.indiamart.com/krishna-fine-fab/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white hover:bg-yellow-50 rounded-full transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              <img 
                src="/images/indiamart.png" 
                alt="IndiaMART" 
                className="w-6 h-6 mr-2" 
              />
              <span className="font-medium">IndiaMART</span>
            </a>
            
            <a 
              href="https://jsdl.in/RSL-FPC1742615488" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white hover:bg-green-50 rounded-full transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              <span className="w-6 h-6 mr-2 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm-2.001 12.25v-1h4v1h-4zm0-3v-5h1v6h-4v-1h3z"/>
                </svg>
              </span>
              <span className="font-medium">JustDial</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;