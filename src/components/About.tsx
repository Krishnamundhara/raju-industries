import { Award, Clock, Globe, ArrowUpRight, Shield, Banknote } from 'lucide-react';

const features = [
  {
    name: 'Quality Brokerage',
    description: 'Connecting buyers with premium yarn and fabric sources that meet international standards',
    icon: Award,
    color: 'bg-rose-50 text-rose-700',
    iconBg: 'bg-rose-100'
  },
  {
    name: 'Industry Experience',
    description: 'Over three decades of expertise in textile trading and brokerage services',
    icon: Clock,
    color: 'bg-amber-50 text-amber-700',
    iconBg: 'bg-amber-100'
  },
  {
    name: 'Pan-India Presence',
    description: 'Serving major textile hubs across Maharashtra, Gujarat, Madhya Pradesh, and Tamil Nadu',
    icon: Globe,
    color: 'bg-sky-50 text-sky-700',
    iconBg: 'bg-sky-100'
  },
  {
    name: 'Quality Assurance',
    description: 'Every product meets stringent quality control standards before reaching our clients',
    icon: Shield,
    color: 'bg-emerald-50 text-emerald-700',
    iconBg: 'bg-emerald-100'
  },
  {
    name: 'Competitive Pricing',
    description: 'Direct relationships with manufacturers ensure the best market rates',
    icon: Banknote,
    color: 'bg-purple-50 text-purple-700',
    iconBg: 'bg-purple-100'
  }
];

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Legacy of Excellence</h2>
          <div className="mt-3 h-1 w-40 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Image Section with overlay info card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/pj_b.png"
                alt="Various types of Yarns and Fabrics"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="h-1 w-12 bg-primary-500 mr-3"></div>
                  <span className="text-sm font-medium uppercase tracking-wider text-primary-300">Since 1993</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Three Decades of Trust</h3>
                <p className="text-sm text-gray-200">Serving the textile industry with integrity and excellence</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-8 border-white bg-primary-50 shadow-lg hidden lg:flex items-center justify-center">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-700">30+</span>
                <span className="text-xs font-medium text-primary-600">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 1993, Raju Industries has been a trusted textile broker and trader.
                With headquarters in Bhiwandi, Maharashtra, and a strong presence across 
                Central, Western, and Southern India, our commitment to quality and customer 
                satisfaction has made us a trusted name in the industry.
              </p>
              
              <div className="mt-6 inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors">
                <a href="/about" className="inline-flex items-center">
                  Learn more about our story
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.slice(0, 4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name} className="relative group">
                    <div className={`absolute -inset-1 ${feature.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative bg-white p-5 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md ${feature.iconBg}`}>
                          <Icon className="h-5 w-5 text-primary-700" aria-hidden="true" />
                        </div>
                        <h3 className="ml-4 text-lg font-semibold text-gray-900">
                          {feature.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;