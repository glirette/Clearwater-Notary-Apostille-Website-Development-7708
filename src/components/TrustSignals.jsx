import React from 'react';
import {FaStar} from 'react-icons/fa';

const TrustSignals = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Thousands Across Florida
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is recognized by leading business organizations and satisfied customers statewide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* BBB Logo - Single instance */}
          <div className="text-center">
            <a
              href="https://www.bbb.org/us/fl/clearwater/profile/notary-public/notary-geek-0653-90435385/#sealclick"
              target="_blank"
              rel="nofollow"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://seal-westflorida.bbb.org/seals/blue-seal-280-80-bbb-90435385.png"
                style={{border: 0}}
                alt="Notary Geek BBB Business Review"
                className="mx-auto h-16 w-auto"
              />
            </a>
            <p className="text-xs text-gray-600 mt-2">BBB Accredited</p>
          </div>

          {/* Trustpilot Badge - CORRECTED LINK */}
          <div className="text-center">
            <a 
              href="https://www.trustpilot.com/review/notarygeek.net" 
              target="_blank" 
              rel="nofollow noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <div className="bg-[#00b67a] text-white rounded-lg p-3 w-32 h-14 flex items-center justify-center mx-auto mb-2">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-sm">Trustpilot</div>
                  <div className="flex">
                    <FaStar className="text-white text-xs" />
                    <FaStar className="text-white text-xs" />
                    <FaStar className="text-white text-xs" />
                    <FaStar className="text-white text-xs" />
                    <FaStar className="text-white text-xs" />
                  </div>
                </div>
              </div>
            </a>
            <p className="text-xs text-gray-600 mt-2">Verified Reviews</p>
          </div>

          {/* Florida Approved */}
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Florida Approved</h3>
            <p className="text-xs text-gray-600">State Certified Platform</p>
          </div>

          {/* 2-Day Processing */}
          <div className="text-center">
            <div className="bg-orange-500 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">2-Day Processing</h3>
            <p className="text-xs text-gray-600">Fast Turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;