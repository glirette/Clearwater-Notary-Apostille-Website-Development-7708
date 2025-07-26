import React from 'react';
import {Link} from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';

const Platform = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">
            Powered by Notary Geek Platform
          </h2>
          <p className="text-xl text-blue-200 font-semibold mb-4">Florida Apostille App</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Florida Apostille App operates on the state-approved Notary Geek remote online notary platform, ensuring security, compliance, and reliability for all your document needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🏛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Florida State Approved</h3>
                  <p className="text-blue-100">
                    The Notary Geek platform is officially approved by the State of Florida for remote online notarization services, ensuring legal validity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
                  <p className="text-blue-100">
                    Advanced security features including identity verification, tamper-evident technology, and encrypted document storage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Processing</h3>
                  <p className="text-blue-100">
                    Complete your notarization instantly online, then we handle the apostille processing with our efficient 2-day turnaround target.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foreign Signers Welcome</h3>
                  <p className="text-blue-100">
                    No Social Security Number required for notarization. We welcome international users and accept passports for signers overseas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Access the Florida-approved Notary Geek platform and begin your secure online notarization and apostille process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/form"
                  className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors inline-block shadow-lg"
                >
                  Start Now
                </Link>
                <a
                  href="https://notary.im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors inline-block shadow-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </div>

            {/* Enhanced Foreign Signers Notice */}
            <div className="bg-gradient-to-r from-orange-500/40 to-green-500/40 backdrop-blur-sm border-2 border-white/30 rounded-xl p-5 mb-8 shadow-lg">
              <div className="flex items-center justify-center gap-3">
                <span className="text-white text-3xl">🌍</span>
                <span className="text-white font-bold text-xl">
                  Foreign signers welcome • No Social Security Number required
                </span>
              </div>
            </div>

            <div className="text-sm text-blue-200 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-300">✓</span> Florida State Approved
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-300">✓</span> Secure & Encrypted
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-300">✓</span> No SSN Required
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-300">✓</span> Passport accepted for signers overseas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;