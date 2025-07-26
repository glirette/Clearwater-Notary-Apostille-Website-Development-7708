import React from 'react';
import {Helmet} from 'react-helmet-async';
import {FaWhatsapp,FaStar} from 'react-icons/fa';

const FormPage=()=> {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Florida Apostille App Document Upload | Foreign Signers Welcome | No SSN Required</title>
        <meta name="description" content="Upload your documents directly for Florida apostille services. Foreign signers welcome - No Social Security Number required. Start your notarization process now with our secure online form." />
        <meta name="keywords" content="Florida apostille app,document upload,apostille service,Notary Geek platform,online notarization,foreign signers,no SSN required,LLC documents" />
      </Helmet>

      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Upload Your Documents for Apostille</h1>
            <p className="text-xl text-blue-200 font-semibold mb-4">Florida Apostille App</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            
            {/* Fixed text container with strong contrast - FIXED TEXT COLOR */}
            <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-2xl border-4 border-white">
              <p className="text-xl font-bold text-gray-900 mb-0 leading-relaxed">
                Complete the form below to start your Florida apostille process. Our Florida-approved notary service will process your documents with our 2-day turnaround target.
              </p>
            </div>

            {/* Enhanced Foreign Signers Notice with better visibility */}
            <div className="flex justify-center mt-8">
              <div className="bg-gradient-to-r from-orange-500 to-green-500 backdrop-blur-sm border-4 border-white rounded-2xl px-8 py-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-white text-3xl">🌍</span>
                  <span className="text-white font-bold text-xl drop-shadow-lg">
                    Foreign signers welcome • No Social Security Number required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe 
              id="JotFormIFrame-232608449081155" 
              title="Upload documents to notarize now!" 
              onLoad={()=> window.parent.scrollTo(0,0)} 
              allowTransparency="true" 
              allow="geolocation;microphone;camera;fullscreen;payment" 
              src="https://form.jotform.com/greg871/upload-documents-to-notarize-now" 
              frameBorder="0" 
              style={{minWidth: '100%',maxWidth: '100%',height: '800px',border: 'none'}} 
              scrolling="no" 
            />
          </div>

          {/* Trust Signals Section with SINGLE BBB Badge AND Trustpilot */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Trusted & Verified Service</h3>
              <p className="text-gray-600 mb-4">Our apostille service is BBB accredited and Florida state approved</p>
              
              {/* Trust badges grid with BBB and Trustpilot */}
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                {/* BBB Badge - SINGLE INSTANCE */}
                <a href="https://www.bbb.org/us/fl/clearwater/profile/notary-public/notary-geek-0653-90435385/#sealclick" 
                   target="_blank" 
                   rel="nofollow noreferrer" 
                   className="inline-block transition-transform hover:scale-105 mb-6" 
                   aria-label="BBB Accredited Business - Click for Profile">
                  <img 
                    src="https://seal-westflorida.bbb.org/seals/blue-seal-280-80-bbb-90435385.png" 
                    alt="Notary Geek BBB Business Review" 
                    className="h-32 w-auto mx-auto" 
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      minHeight: "128px", // Ensures minimum height on all devices
                    }} 
                    onError={(e)=> {
                      console.error("BBB image failed to load");
                      e.target.onerror=null;
                      e.target.src="https://seal-westflorida.bbb.org/seals/blue-seal-280-80-bbb-90435385.png";
                    }} 
                  />
                </a>

                {/* Trustpilot Badge - ADDED */}
                <div className="flex flex-col items-center justify-center">
                  <a href="https://www.trustpilot.com/review/notarygeek.net" 
                     target="_blank" 
                     rel="nofollow noreferrer"
                     className="transition-transform hover:scale-105 mb-2">
                    <div className="bg-[#00b67a] text-white rounded-lg p-4 w-40 h-20 flex items-center justify-center">
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
                  <p className="text-sm text-gray-600">Rated Excellent on Trustpilot</p>
                </div>
              </div>
            </div>

            {/* Additional Trust Signals (not BBB) */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Florida Approved Badge */}
              <div className="flex items-center bg-blue-50 px-5 py-3 rounded-lg">
                <span className="text-blue-600 text-xl mr-3">🏛️</span>
                <span className="font-semibold text-blue-800">Florida State Approved RON Platform</span>
              </div>

              {/* Secure Badge */}
              <div className="flex items-center bg-green-50 px-5 py-3 rounded-lg">
                <span className="text-green-600 text-xl mr-3">🔒</span>
                <span className="font-semibold text-green-800">Secure & Encrypted Processing</span>
              </div>

              {/* Foreign Signers Badge */}
              <div className="flex items-center bg-orange-50 px-5 py-3 rounded-lg">
                <span className="text-orange-600 text-xl mr-3">🌍</span>
                <span className="font-semibold text-orange-800">No SSN Required • Foreign Signers Welcome</span>
              </div>
            </div>
          </div>

          {/* Enhanced WhatsApp Help Section */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl text-green-500 animate-bounce">
                <FaWhatsapp />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Help? Contact Us on WhatsApp</h3>
                <p className="text-gray-700 text-lg mb-4">
                  Have questions about your apostille or need assistance with the form? Our team is available to help you via WhatsApp. <strong>International customers welcome!</strong>
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ Instant Support
                  </span>
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ Foreign Signers Welcome
                  </span>
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ No SSN Required
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://notary.im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span className="text-lg">Chat Now</span>
                </a>
                <p className="text-center text-sm text-gray-500">
                  Click to open WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6 text-center text-gray-600">
        <p className="flex items-center justify-center gap-2">
          <span>🔒</span>
          <span>Powered by the Florida-approved Notary Geek platform</span>
        </p>
        <p className="text-sm mt-2">Secure & Encrypted</p>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Florida Apostille App?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Florida Approved</h3>
              <p className="text-gray-600">Our platform is officially approved by the State of Florida for secure online notarization.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">2-Day Processing</h3>
              <p className="text-gray-600">We aim for a 2-day turnaround with documents hand-carried to the Tallahassee Secretary of State.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">International Access</h3>
              <p className="text-gray-600">Foreign signers welcome with no Social Security Number required for our notarization services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">Advanced security features with encrypted document storage and tamper-evident technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormPage;