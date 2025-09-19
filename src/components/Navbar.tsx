import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      scrolled ? 'py-1 shadow-lg border-b border-gray-200 backdrop-blur-sm bg-white/95' : 'py-2 shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/CompanyLogo/raju_c.jpg"
                alt="Raju Industries Logo"
                className="h-10 w-auto sm:h-12"
              />
              <span className="text-xl font-bold text-primary-600 hidden sm:block">
                RAJU INDUSTRIES
              </span>
            </Link>
          </div>
          
          {/* Navigation links on the right */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link
              to="/"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                ? 'text-primary-600 font-bold border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/products')
                ? 'text-primary-600 font-bold border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/about')
                ? 'text-primary-600 font-bold border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/contact')
                ? 'text-primary-600 font-bold border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/')
                ? 'bg-primary-50 text-primary-600 font-bold border-l-4 border-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 border-l-4 border-transparent'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/products')
                ? 'bg-primary-50 text-primary-600 font-bold border-l-4 border-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 border-l-4 border-transparent'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/about')
                ? 'bg-primary-50 text-primary-600 font-bold border-l-4 border-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 border-l-4 border-transparent'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/contact')
                ? 'bg-primary-50 text-primary-600 font-bold border-l-4 border-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 border-l-4 border-transparent'
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