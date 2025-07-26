import React from 'react';
import {Link} from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Online Notarization',
      description: 'Florida-approved remote online notarization through the secure Notary Geek platform. Complete your notarization from anywhere in Florida.',
      features: [
        'Florida state approved',
        'Notary Geek platform',
        '24/7 availability',
        'Secure digital process'
      ],
      cta: 'Start Online Now',
      featured: true
    },
    {
      icon: '📋',
      title: 'Document Apostilles',
      description: 'Fast apostille processing for most document types including birth certificates, diplomas, business documents, and legal papers.',
      features: [
        '2-day processing target',
        'Hand-carried to Tallahassee',
        'Most document types accepted',
        'Worldwide shipping available'
      ],
      cta: 'Get Apostille Service'
    },
    {
      icon: '⚡',
      title: 'Express Processing',
      description: 'Our express service processes your documents and returns them within 2 business days via secure worldwide delivery.',
      features: [
        '2-day turnaround',
        'Hand-carried service',
        'Worldwide shipping',
        'Process tracking'
      ],
      cta: 'Get Express Service'
    },
    {
      icon: '🌍',
      title: 'Foreign Signers Welcome',
      description: 'We welcome foreign signers and non-US citizens. No Social Security Number required for our online notarization services.',
      features: [
        'No SSN required',
        'Passport accepted for signers overseas',
        'International documents',
        'Multilingual support'
      ],
      cta: 'Learn More'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Florida-Approved Apostille & Notary Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional document authentication and online notarization through the Florida-approved Notary Geek platform with efficient 2-day turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
                service.featured ? 'ring-2 ring-orange-500 transform lg:scale-105' : ''
              }`}
            >
              {service.featured && (
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 font-semibold">
                  Florida Approved Platform
                </div>
              )}
              <div className="p-8">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/form"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                    service.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-green-200 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl">🌍</div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">No Social Security Number Required</h3>
              <p className="text-gray-700 mb-2">
                Our platform welcomes foreign signers and non-US citizens. You can complete your online notarization without a US Social Security Number.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <span className="font-bold">✓</span>
                <span>Passport accepted for signers overseas</span>
                <span className="font-bold ml-4">✓</span>
                <span>Foreign signers welcome</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://notary.im"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;