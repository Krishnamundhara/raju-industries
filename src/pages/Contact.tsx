import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
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

      {/* Social Media Links */}
      <div className="mt-12 text-center p-8 bg-gray-100 rounded-lg shadow-sm">
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

export default Contact; 