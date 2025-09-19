import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found | Raju Industries" description="The page you are looking for does not exist." />
      
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-500">404</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto my-6 rounded-full"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 shadow-md"
          >
            Back to Home
          </Link>
          <Link 
            to="/contact"
            className="bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;