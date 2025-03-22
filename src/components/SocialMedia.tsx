import React from 'react';
import { BadgeX, Facebook, Instagram, Linkedin, Twitter, X, XCircle, XIcon, Youtube, Globe, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/profile.php?id=100083314218016',
    icon: Facebook,
    color: 'bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/raju_industries_',
    icon: Instagram,
    color: 'bg-pink-600 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 transition-all duration-300 hover:scale-110'
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@Raju_Industries',
    icon: Youtube,
    color: 'bg-red-500 hover:bg-red-600 transition-transform duration-300 hover:scale-110'
  },
  // {
  //   name: 'Twitter',
  //   url: 'https://x.com/Raju_Industries',
  //   icon: Twitter,
  //   color: 'bg-gray-500 hover:bg-gray-600'
  // }
  {
    name: 'X',
    url: 'https://x.com/Raju_Industries',
    icon: X,  // Make sure you have the correct X icon imported
    color: 'bg-black hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50'
  },
  {
    name: 'IndiaMART',
    url: 'https://www.indiamart.com/krishna-fine-fab/',
    icon: Globe,
    color: 'bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50'
  },
  {
    name: 'JustDial',
    url: 'https://jsdl.in/RSL-FPC1742615488',
    icon: Phone,
    color: 'bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50'
  }
];

const SocialMedia = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl ${social.color} text-white transform transition-all duration-200 hover:scale-105 hover:shadow-lg group`}
            >
              <Icon className="h-8 w-8 mb-3" />
              <span className="font-medium text-sm opacity-90 group-hover:opacity-100">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Or email us at:{' '}
          <a
            href="mailto:rajuind2024@gmail.com"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            rajuind2024@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default SocialMedia; 