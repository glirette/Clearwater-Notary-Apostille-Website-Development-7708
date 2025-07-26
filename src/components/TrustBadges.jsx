import React from 'react';
import {FaStar} from 'react-icons/fa';

const TrustBadges=()=> {
  React.useEffect(()=> {
    // Load TrustIndex script dynamically
    const trustScript=document.createElement('script');
    trustScript.defer=true;
    trustScript.async=true;
    trustScript.src='https://cdn.trustindex.io/loader.js?2ae73d920e2d9601337691991a4';
    document.head.appendChild(trustScript);

    return ()=> {
      // Cleanup on unmount
      if (document.head.contains(trustScript)) {
        document.head.removeChild(trustScript);
      }
    };
  },[]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted & Verified Service</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Florida Apostille App is a verified and trusted provider of Florida apostille services,
            powered by the Notary Geek platform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* BBB Badge - Standardized height */}
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <a 
                href="https://www.bbb.org/us/fl/clearwater/profile/notary-public/notary-geek-0653-90435385/#sealclick" 
                target="_blank" 
                rel="nofollow noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="https://seal-westflorida.bbb.org/seals/blue-seal-280-80-bbb-90435385.png" 
                  alt="Notary Geek BBB Business Review" 
                  className="h-20 w-auto"
                  style={{maxWidth: "100%", height: "80px", width: "auto"}} 
                  onError={(e)=> {
                    console.error("BBB image failed to load");
                    e.target.onerror=null;
                    e.target.src="https://seal-westflorida.bbb.org/seals/blue-seal-280-80-bbb-90435385.png";
                  }}
                />
              </a>
            </div>
            <p className="text-sm text-gray-600 text-center">BBB Accredited Business</p>
          </div>

          {/* Trustpilot Badge - CORRECTED LINK */}
          <div className="flex flex-col items-center">
            <a 
              href="https://www.trustpilot.com/review/notarygeek.net" 
              target="_blank" 
              rel="nofollow noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="bg-[#00b67a] text-white rounded-lg p-4 w-40 h-20 flex items-center justify-center mx-auto mb-2">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-xl mb-1">Trustpilot</div>
                  <div className="flex">
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                  </div>
                </div>
              </div>
            </a>
            <p className="text-sm text-gray-600 text-center">Rated Excellent on Trustpilot</p>
          </div>

          {/* Florida Approved */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mb-3">
              🏛️
            </div>
            <p className="text-lg font-semibold text-gray-900">Florida State Approved</p>
            <p className="text-sm text-gray-600 text-center">Official RON Service Provider</p>
          </div>

          {/* Secure Badge */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl mb-3">
              🔒
            </div>
            <p className="text-lg font-semibold text-gray-900">Secure Processing</p>
            <p className="text-sm text-gray-600 text-center">Advanced Security Features</p>
          </div>
        </div>

        {/* TrustIndex Widget Container */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
            <p className="text-gray-600">See what our clients say about our apostille services</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            {/* TrustIndex Widget */}
            <div 
              className="trustindex-widget" 
              data-widget-id="2ae73d920e2d9601337691991a4" 
              style={{minHeight: '450px'}}
            >
              {/* Fallback content while loading */}
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading customer reviews...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;