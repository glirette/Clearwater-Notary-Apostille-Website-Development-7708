import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Footer = () => {
  // Featured cities for footer (showing 12)
  const featuredCities = [
    'Jacksonville',
    'Miami',
    'Tampa',
    'Orlando',
    'Fort Lauderdale',
    'Tallahassee',
    'St. Petersburg',
    'Hialeah',
    'Port St. Lucie',
    'Cape Coral',
    'Pembroke Pines',
    'West Palm Beach'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FA</span>
              </div>
              <span className="text-lg font-bold">Florida Apostille App</span>
            </div>
            <p className="text-gray-300 mb-4">
              Powered by Notary Geek's Florida-approved remote online notary platform. Expert apostille services with 2-day turnaround times statewide.
            </p>
            
            {/* Enhanced Foreign Signers Notice */}
            <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-sm border border-orange-300/30 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-300 text-lg">🌍</span>
                <span className="text-white text-sm font-semibold">
                  Foreign signers welcome • No SSN required
                </span>
              </div>
            </div>
            
            {/* Single trust badge with Trustpilot reference */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.bbb.org/us/fl/clearwater/profile/notary-public/notary-geek-0653-90435385/#sealclick"
                target="_blank"
                rel="nofollow"
                className="inline-block transition-opacity hover:opacity-90"
              >
                <img
                  src="https://seal-westflorida.bbb.org/seals/blue-seal-280-80-bbb-90435385.png"
                  style={{border: 0}}
                  alt="Notary Geek BBB Business Review"
                  className="h-16 w-auto mb-2"
                />
              </a>
              
              <a 
                href="https://www.trustpilot.com/review/notarygeek.net" 
                target="_blank" 
                rel="nofollow noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
              >
                <span className="text-[#00b67a]">★★★★★</span>
                <span>Rated Excellent on Trustpilot</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Online Notarization</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Apostille Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Document Authentication</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Express Processing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Florida Cities</h4>
            <ul className="space-y-1 text-sm">
              {featuredCities.map(city => (
                <li key={city}>
                  <Link
                    to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    const citiesSection = document.getElementById('cities');
                    if (citiesSection) citiesSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-orange-400 hover:text-orange-500 transition-colors font-medium mt-2"
                >
                  View All Cities
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/form" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Notary Geek Platform
                </Link>
              </li>
              <li className="text-gray-300">Florida State Approved</li>
              <li className="text-gray-300">Serving All Florida</li>
              <li className="text-gray-300">24/7 Online Services</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Florida Apostille App. Powered by Notary Geek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;