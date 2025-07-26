import React from 'react';
import {Link} from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Access Florida Apostille App</h2>
          <p className="text-xl text-gray-500 font-medium mb-4">Your document solution</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get your documents notarized and apostilled? Access our Florida-approved platform now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you need online notarization or apostille services, our Florida-approved Notary Geek platform is ready to help. Experience our expedited apostille processing with worldwide shipping options.
            </p>

            <div className="space-y-6">
              <Link
                to="/form"
                className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl group-hover:bg-orange-600 transition-colors">
                  💻
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Start Online Process</h4>
                  <span className="text-orange-600 font-semibold">Start Now</span>
                </div>
              </Link>

              <a
                href="https://notary.im"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl group-hover:bg-green-600 transition-colors">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">WhatsApp Support</h4>
                  <span className="text-green-600 font-semibold">Chat Now</span>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                  🏛️
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Platform</h4>
                  <span className="text-gray-600">Florida-Approved Notary Geek</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                  🌍
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">International Access</h4>
                  <span className="text-gray-600">No SSN Required • Foreign Signers Welcome</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Why Choose Florida Apostille App?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-orange-300 text-xl">🏛️</span>
                <div>
                  <h4 className="font-semibold">Florida State Approved</h4>
                  <p className="text-blue-100 text-sm">Powered by the officially approved Notary Geek platform</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-orange-300 text-xl">⚡</span>
                <div>
                  <h4 className="font-semibold">Expedited Processing</h4>
                  <p className="text-blue-100 text-sm">Hand-carried to Tallahassee Secretary of State</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-orange-300 text-xl">🚚</span>
                <div>
                  <h4 className="font-semibold">Worldwide Shipping</h4>
                  <p className="text-blue-100 text-sm">FedEx and DHL options for domestic and international delivery</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-orange-300 text-xl">🔒</span>
                <div>
                  <h4 className="font-semibold">Secure & Compliant</h4>
                  <p className="text-blue-100 text-sm">Advanced security and state compliance</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-orange-300 text-xl">🌐</span>
                <div>
                  <h4 className="font-semibold">Foreign Signers Welcome</h4>
                  <p className="text-blue-100 text-sm">No Social Security Number required for notarization</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                to="/form"
                className="block w-full bg-orange-500 text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Start Now
              </Link>
              <a
                href="https://notary.im"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-center text-sm text-blue-200">
                Powered by Notary Geek Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;