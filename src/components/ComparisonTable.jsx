import React from 'react';
import { Link } from 'react-router-dom';

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Comparison</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Understanding your options for Florida apostille services</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Direct Government<br/>(Florida Secretary of State)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Florida Apostille App<br/>(Our Service)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Cost</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">$10 per document</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">$230-$300 (includes all services)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Processing Time</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">5-10 business days</td>
                  <td className="px-6 py-4 text-center text-sm text-orange-600 font-semibold">2-day target</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Online Notarization</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Not provided</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓ Included</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Document Pickup/Delivery</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">You handle</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓ We handle</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">International Shipping</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">You arrange</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓ Included</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Foreign Signers (No SSN)</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Limited options</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓ Fully supported</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Multi-State Processing</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Florida only</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓ FL, CA, NM, WY, NYC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Customer Support</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Government office hours</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓ WhatsApp support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Both options are legitimate.</strong> Choose based on your needs for speed, convenience, and additional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://dos.myflorida.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors"
            >
              Visit FL Secretary of State
            </a>
            <Link 
              to="/form" 
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Use Our Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;