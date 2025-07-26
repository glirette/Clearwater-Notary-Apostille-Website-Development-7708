import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Process = () => {
  const [activeTab, setActiveTab] = useState('online');

  const processes = {
    online: {
      title: 'Online Process via Notary Geek Platform',
      steps: [
        {
          number: 1,
          title: 'Access Platform',
          description: 'Visit our online platform to access the Florida-approved Notary Geek platform and begin your secure online session.'
        },
        {
          number: 2,
          title: 'Online Notarization',
          description: 'Complete your remote notarization through our secure, state-approved platform with identity verification and digital signing.'
        },
        {
          number: 3,
          title: 'Apostille Processing',
          description: 'Your notarized documents are processed and hand-carried to the Tallahassee Secretary of State office within our 2-day processing target.'
        },
        {
          number: 4,
          title: 'Worldwide Delivery',
          description: 'Your apostilled documents are securely shipped anywhere in the world via FedEx or DHL with international tracking available.'
        }
      ],
      cta: {
        text: 'Start Online Process Now'
      }
    },
    apostille: {
      title: 'Apostille Processing',
      steps: [
        {
          number: 1,
          title: 'Document Submission',
          description: 'Submit your documents through our secure platform. We accept most types of public documents for apostille processing.'
        },
        {
          number: 2,
          title: 'Platform Review',
          description: 'Our Florida-certified experts review your documents through the Notary Geek platform to ensure apostille requirements are met.'
        },
        {
          number: 3,
          title: 'Tallahassee Processing',
          description: 'Documents are hand-carried to the Florida Secretary of State office in Tallahassee for official apostille certification within our 2-day target.'
        },
        {
          number: 4,
          title: 'Worldwide Shipping',
          description: 'Apostilled documents are shipped via FedEx or DHL to any location worldwide with expedited delivery options available.'
        }
      ],
      cta: {
        text: 'Request Apostille Service'
      }
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Streamlined Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and secure processes through the Florida-approved Notary Geek platform.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('online')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'online'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Online Process
            </button>
            <button
              onClick={() => setActiveTab('apostille')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'apostille'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Apostille Process
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            {processes[activeTab].title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {processes[activeTab].steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  {index < processes[activeTab].steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/form"
              className="inline-block bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              {processes[activeTab].cta.text}
            </Link>
            <p className="text-sm text-gray-500 mt-3">Powered by Notary Geek Platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;