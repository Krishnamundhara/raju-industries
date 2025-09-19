import { Facebook, Instagram, X, Youtube, Globe, Phone } from 'lucide-react';

// Export the social links data for reuse in other components
export const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/profile.php?id=100083314218016',
    icon: Facebook,
    ariaLabel: 'Visit our Facebook page'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/raju_industries_',
    icon: Instagram,
    ariaLabel: 'Visit our Instagram page'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Raju_Industries',
    icon: Youtube,
    ariaLabel: 'Visit our YouTube channel'
  },
  {
    name: 'X',
    url: 'https://x.com/Raju_Industries',
    icon: X,
    ariaLabel: 'Visit our X profile'
  },
  {
    name: 'IndiaMART',
    url: 'https://www.indiamart.com/krishna-fine-fab/',
    icon: Globe,
    ariaLabel: 'Visit our IndiaMART page'
  },
  {
    name: 'JustDial',
    url: 'https://jsdl.in/RSL-FPC1742615488',
    icon: Phone,
    ariaLabel: 'Visit our JustDial listing'
  }
];

// Email contact information
export const contactEmail = {
  email: 'rajuind2024@gmail.com',
  label: 'Email us'
};

// Simple component that returns just the social media links
const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;