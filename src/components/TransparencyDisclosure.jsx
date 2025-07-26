import React from 'react';

const TransparencyDisclosure = () => {
  return (
    <section className="py-12 bg-yellow-50 border-t-4 border-b-4 border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-500">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Service Disclosure</h3>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-lg bg-yellow-50 p-2 rounded border border-yellow-200">
                  <strong className="text-red-600">We are NOT a government agency.</strong> We are a private intermediary service company that assists with apostille processing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Direct Government Option:</h4>
                    <p className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span>You can obtain Florida apostilles directly from the Florida Secretary of State for <strong className="text-blue-600">$10 per document</strong> at{' '}
                      <a href="https://dos.myflorida.com" target="_blank" rel="noopener" className="text-blue-600 underline font-bold">
                        dos.myflorida.com
                      </a></span>
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-2">Our Service Value:</h4>
                    <p className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>We provide comprehensive intermediary services including online notarization ($65), document preparation, hand-delivery to government offices, and worldwide shipping</span>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">Processing Time:</h4>
                    <p className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span>Government processing typically takes <strong>5-10 business days</strong> when done directly. Our service targets <strong className="text-green-600">2-day processing</strong> through expedited handling</span>
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-2">Pricing Transparency:</h4>
                    <p className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Our fees are <strong className="text-purple-600">$230 (US shipping)</strong> or <strong className="text-purple-600">$300 (international shipping)</strong> for single documents, which includes notarization + apostille + shipping</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-bold text-indigo-800 mb-2">Multi-State Capability:</h4>
                  <p className="flex items-start">
                    <span className="text-indigo-600 mr-2 font-bold">•</span>
                    <span>We also process apostilles for California, New Mexico, Wyoming, and New York City area documents, which you cannot do through Florida's office</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyDisclosure;