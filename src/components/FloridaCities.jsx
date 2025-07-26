import React from 'react';
import { Link } from 'react-router-dom';

const FloridaCities = () => {
  const cities = [
    'Jacksonville',
    'Miami',
    'Tampa',
    'Orlando',
    'St. Petersburg',
    'Hialeah',
    'Port St. Lucie',
    'Tallahassee',
    'Cape Coral',
    'Fort Lauderdale',
    'Pembroke Pines',
    'Hollywood',
    'Miramar',
    'Gainesville',
    'Coral Springs',
    'Palm Bay',
    'West Palm Beach',
    'Kissimmee',
    'Lakeland',
    'Brandon',
    'Davie',
    'Miami Gardens',
    'Clearwater',
    'Sunrise',
    'Boca Raton',
    'Plantation',
    'Springfield',
    'Pompano Beach',
    'Melbourne',
    'Deerfield Beach',
    'Palm Beach Gardens',
    'Sanford',
    'Delray Beach',
    'North Port',
    'Jupiter',
    'Ocala',
    'Palm Coast',
    'Wesley Chapel',
    'Fort Myers',
    'Cutler Bay'
  ];

  return (
    <section className="py-20 bg-white" id="cities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving All Florida Cities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Florida Apostille App provides statewide service through the Notary Geek platform. 
            Click on your city for local information and direct access to our services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <Link
              key={index}
              to={`/city/${city.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
              className="group bg-gray-50 hover:bg-blue-50 p-4 rounded-lg text-center transition-all duration-300 hover:shadow-md border border-transparent hover:border-blue-200"
            >
              <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {city}
              </div>
              <div className="text-xs text-gray-500 mt-1 group-hover:text-blue-500">
                Florida Apostille
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Serving all Florida cities through our state-approved platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/form"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Now
            </Link>
            <div className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold bg-blue-50">
              Notary Geek Platform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloridaCities;