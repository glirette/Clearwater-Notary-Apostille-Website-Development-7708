import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      title: 'Online Notarization',
      description: 'Florida-approved remote notarization',
      price: {
        amount: '$65',
        period: 'per document'
      },
      features: [
        'Notary Geek platform access',
        'State-approved process',
        'Secure digital notarization',
        'Instant completion',
        '24/7 availability'
      ],
      cta: 'Start Online',
      popular: false
    },
    {
      title: 'Apostille Service',
      description: 'Complete apostille processing',
      price: {
        amount: '$230-$300',
        period: 'per document'
      },
      features: [
        '2-day processing standard',
        'Hand-carried to Tallahassee',
        'Worldwide shipping options',
        'Most document types accepted',
        'Process tracking available'
      ],
      cta: 'Get Apostille',
      popular: true
    },
    {
      title: 'Complete Service',
      description: 'Online notarization + apostille',
      price: {
        amount: '$295-$365',
        period: 'complete package'
      },
      features: [
        'Full online process',
        'Notary Geek platform',
        '2-day apostille processing',
        'International shipping options',
        'Statewide Florida service'
      ],
      cta: 'Get Complete Service',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional Florida apostille services with no hidden fees, powered by the state-approved Notary Geek platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {/* Pricing Display - ENHANCED FOR VISIBILITY */}
                <div className="text-center mb-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price.amount}
                  </div>
                  <div className="text-gray-500 text-lg">
                    {plan.price.period}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/form"
                  className={`block w-full text-center py-4 px-6 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Powered by Notary Geek Platform
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Pricing Information - ENHANCED VISIBILITY */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed Pricing Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-bold text-blue-800 mb-4">🇺🇸 US Shipping (FedEx 2nd Day)</h4>
              <div className="space-y-3">
                <p className="text-lg font-bold"><span className="text-blue-600">Single Document:</span> $230</p>
                <p className="text-lg font-bold"><span className="text-blue-600">Additional Documents:</span> +$60 each</p>
                <p className="text-sm text-gray-600">Same package delivery</p>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h4 className="text-xl font-bold text-orange-800 mb-4">🌍 International Shipping</h4>
              <div className="space-y-3">
                <p className="text-lg font-bold"><span className="text-orange-600">Single Document:</span> $300</p>
                <p className="text-lg font-bold"><span className="text-orange-600">Additional Documents:</span> +$60 each</p>
                <p className="text-sm text-gray-600">Worldwide FedEx/DHL delivery</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <p className="text-base text-gray-700 font-medium">
              <strong className="text-yellow-700">Important Note:</strong> Pricing includes online notarization ($65) + apostille processing + shipping. 
              We are a private intermediary service. Government direct option available for $10 at dos.myflorida.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;