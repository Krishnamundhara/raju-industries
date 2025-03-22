import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Raju Industries</h3>
            <p className="text-gray-400">
              Leading manufacturer and supplier of premium quality yarns since 1993.<br />
              <span className="font-medium">Govind Mundhara</span> (Proprietor)<br />
              G.S.T. No.: 27AHFPM0511N1ZD
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/raju_industries_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100083314218016" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/Raju_Industries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@Raju_Industries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.indiamart.com/krishna-fine-fab/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Globe className="h-6 w-6" />
              </a>
              <a href="https://jsdl.in/RSL-FPC1742615488" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Globe className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              67 Hassan bagh, opp hathi sizing,<br />
              dhamankar naka, bhiwandi<br />
              Contact: +91 9309531311
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Raju Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;