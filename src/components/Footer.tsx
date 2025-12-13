
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {/* Company Info */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-12 h-1 bg-primary-500 rounded-full"></div>
            <h3 className="text-white text-xl font-bold mt-4 mb-4">Raju Industries</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Yarn and Fabrics Trader, since 1993.<br />
              <span className="font-medium text-white">Govind Mundhara</span> <br />
              <span className="text-gray-400 text-xs">Bhiwandi - Mumbai</span>
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-12 h-1 bg-primary-500 rounded-full"></div>
            <h3 className="text-white text-xl font-bold mt-4 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-2 bg-primary-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-2 bg-primary-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-2 bg-primary-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-2 bg-primary-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-12 h-1 bg-primary-500 rounded-full"></div>
            <h3 className="text-white text-xl font-bold mt-4 mb-4">Connect With Us</h3>
            <SocialLinks className="mb-6 space-x-4" />
            <address className="mt-4 text-gray-300 text-sm not-italic leading-relaxed">
              67 Hassan Bagh, Opp Hathi Sizing,<br />
              Dhamankar Naka, Bhiwandi, Mumbai<br />
              {/* <a href="tel:+919309531311" className="hover:text-white transition-colors duration-300">Contact: +91 9309531311</a><br /> */}
              {/* <a href="tel:+919130977555" className="hover:text-white transition-colors duration-300">Contact: +91 9130977555</a><br /> */}
              <a href="mailto:rajuind2024@gmail.com" className="hover:text-white transition-colors duration-300">E-mail: rajuind2024@gmail.com</a>
            </address>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Raju Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;