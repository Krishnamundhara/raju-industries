import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img
                src="/images/CompanyLogo/raju_c.jpg"
                alt="Raju Industries Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-primary-600 hidden sm:block">
                RAJU INDUSTRIES
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  ${isActive('/') 
                    ? 'border-primary-600 text-primary-600 font-bold' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  ${isActive('/products')
                    ? 'border-primary-600 text-primary-600 font-bold'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  ${isActive('/about')
                    ? 'border-primary-600 text-primary-600 font-bold'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  ${isActive('/contact')
                    ? 'border-primary-600 text-primary-600 font-bold'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                ${isActive('/')
                  ? 'bg-primary-50 border-primary-600 text-primary-600 font-bold'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                ${isActive('/products')
                  ? 'bg-primary-50 border-primary-600 text-primary-600 font-bold'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                ${isActive('/about')
                  ? 'bg-primary-50 border-primary-600 text-primary-600 font-bold'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                ${isActive('/contact')
                  ? 'bg-primary-50 border-primary-600 text-primary-600 font-bold'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;