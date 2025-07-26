import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TrustSignals from '../components/TrustSignals';
import { getCityData } from '../utils/cityData';
import ProcessingTimeComparison from '../components/ProcessingTimeComparison';

const CityPage = () => {
  const { cityName } = useParams();
  const cityData = getCityData(cityName);
  const displayName = cityData.name || cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <>
      <Helmet>
        <title>{cityData.metaTitle || `${displayName} FL Apostille Services | Florida Apostille App | Foreign Signers Welcome`}</title>
        <meta name="description" content={cityData.metaDescription} />
        <meta name="keywords" content={`${displayName} apostille, Florida apostille services, ${displayName} notary, online notarization ${displayName}, Notary Geek Florida, ${displayName} document authentication, foreign signers welcome, no SSN required, LLC documents, apostille intermediary`} />
        <link rel="canonical" href={`https://floridaapostille.app/city/${cityName}`} />

        {/* Schema.org structured data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Florida Apostille App - ${displayName}`,
            "description": `Florida-approved apostille and online notarization services serving ${displayName}, Florida. Foreign signers welcome - No Social Security Number required. Professional intermediary for government apostille services.`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": displayName,
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "url": `https://floridaapostille.app/city/${cityName}`,
            "areaServed": {
              "@type": "City",
              "name": displayName,
              "addressRegion": "FL"
            },
            "serviceType": [
              "Apostille Services",
              "Online Notarization",
              "Document Authentication",
              "Foreign Signer Services"
            ],
            "provider": {
              "@type": "Organization",
              "name": "Notary Geek",
              "description": "Florida-approved remote online notary platform"
            },
            "slogan": "Foreign signers welcome • No Social Security Number required"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How do I access the Florida Apostille App services from ${displayName}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Simply visit our website to access our Florida-approved Notary Geek platform. You can complete your online notarization and apostille request entirely online from ${displayName}. We serve as a professional intermediary to obtain government apostilles.`
                }
              },
              {
                "@type": "Question",
                "name": "What is your role in the apostille process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are a professional intermediary service. While the Florida Secretary of State issues apostilles directly for $10, we provide comprehensive service including online notarization, document preparation, hand-carrying to government offices, and worldwide shipping."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a Social Security Number to use your services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Our platform welcomes foreign signers and international clients. You can complete your online notarization without a US Social Security Number. We accept passports for signers overseas."
                }
              },
              {
                "@type": "Question",
                "name": "What are your pricing and turnaround times?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Florida documents: $300 for international shipping (single document), $230 for US shipping (FedEx 2nd day). Additional documents in the same package are $60 each. We aim for 2-day processing. Pricing for non-Florida states varies."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  {displayName} Apostille Services
                </h1>
                <p className="text-xl text-blue-200 font-semibold mb-4">Florida Apostille App</p>
                <p className="text-xl mb-8 text-blue-100">
                  Professional apostille intermediary service for {displayName} residents.{' '}
                  <strong className="text-orange-300">2-day processing</strong> target through our secure platform.
                </p>

                {/* Enhanced Foreign Signers Notice */}
                <div className="bg-gradient-to-r from-orange-500 to-green-500 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 mb-6 shadow-lg">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-white text-2xl">🌍</span>
                    <span className="text-white font-bold text-lg">
                      Foreign signers welcome • No Social Security Number required
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/form" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors text-center">
                    Start Online Notarization
                  </Link>
                  <div className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-center bg-white/10 backdrop-blur-sm">
                    Notary Geek Platform
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-300">⚡</span>
                    <span>2-Day Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-300">🏛️</span>
                    <span>Florida Approved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-300">🌍</span>
                    <span>Worldwide Service</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/zAj1vU1QOj8"
                    title={`Florida Apostille Services in ${displayName} - Powered by Notary Geek`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals />

        {/* Processing Time Comparison Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Current Processing Times in {displayName}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how much time you can save with our professional intermediary service
              </p>
            </div>

            <ProcessingTimeComparison />
          </div>
        </section>

        {/* Transparent Pricing Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing & Service Model</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>

              <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Role as Professional Intermediary</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>Important:</strong> While the Florida Secretary of State issues apostilles directly for $10, we provide comprehensive professional service including online notarization, document preparation, hand-carrying to government offices, and secure worldwide shipping. We also obtain apostilles for other states including California, New Mexico, Wyoming, and New York City area.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-4">🇺🇸 US Shipping (FedEx 2nd Day)</h4>
                    <div className="space-y-2">
                      <p className="text-lg"><strong>Single Document:</strong> $230</p>
                      <p className="text-lg"><strong>Additional Documents:</strong> +$60 each</p>
                      <p className="text-sm opacity-90">Same package delivery</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-4">🌍 International Shipping</h4>
                    <div className="space-y-2">
                      <p className="text-lg"><strong>Single Document:</strong> $300</p>
                      <p className="text-lg"><strong>Additional Documents:</strong> +$60 each</p>
                      <p className="text-sm opacity-90">Worldwide FedEx/DHL delivery</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing for non-Florida state documents varies. We specialize in California, New Mexico, Wyoming, and New York City area processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* City Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Florida Apostille App Services for {displayName}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {cityData.description}
                </p>
                <p className="text-gray-700 mb-8">
                  Our Florida-approved platform ensures your documents are processed securely and efficiently. Whether you need apostilles for business contracts, educational transcripts, birth certificates, or other important documents, our streamlined intermediary service delivers results with our 2-day processing target.
                </p>

                {/* Testimonial if available */}
                {cityData.testimonial && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
                    <p className="text-gray-700 italic mb-3">"{cityData.testimonial.text}"</p>
                    <p className="text-blue-700 font-semibold">— {cityData.testimonial.author}</p>
                    <div className="flex text-yellow-400 mt-2">
                      {[...Array(cityData.testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Why Choose Florida Apostille App for {displayName}?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Powered by Florida-approved Notary Geek platform</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Professional intermediary service for government apostilles</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Secure online notarization available 24/7</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Hand-carried to Tallahassee Secretary of State</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>2-day processing time target</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Serving all of {displayName} and worldwide shipping</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Foreign signers welcome - Passports accepted for signers overseas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Multi-state apostille processing (CA, NM, WY, NYC area)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">City Information</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Population:</span>
                      <span className="ml-2 text-gray-600">{cityData.population || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">State:</span>
                      <span className="ml-2 text-gray-600">Florida</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Platform:</span>
                      <span className="ml-2 text-gray-600">Notary Geek (FL Approved)</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Service Type:</span>
                      <span className="ml-2 text-gray-600">Professional Intermediary</span>
                    </div>

                    {/* Show landmarks if available */}
                    {cityData.landmarks && cityData.landmarks.length > 0 && (
                      <div>
                        <span className="font-medium text-gray-700">Notable Landmarks:</span>
                        <ul className="mt-1 ml-5 list-disc text-gray-600 text-sm">
                          {cityData.landmarks.map((landmark, index) => (
                            <li key={index}>{landmark}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Show business districts if available */}
                    {cityData.businessDistricts && cityData.businessDistricts.length > 0 && (
                      <div>
                        <span className="font-medium text-gray-700">Business Districts:</span>
                        <ul className="mt-1 ml-5 list-disc text-gray-600 text-sm">
                          {cityData.businessDistricts.map((district, index) => (
                            <li key={index}>{district}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Start Your Process</h3>
                  <p className="mb-4">
                    Access our Florida-approved online notarization platform and get your apostille process started immediately.
                  </p>
                  <div className="space-y-3">
                    <Link to="/form" className="block bg-orange-500 text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                      Start Now
                    </Link>
                    <div className="text-center text-sm text-blue-200">
                      Powered by Notary Geek Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our {displayName} Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3">Document Apostilles</h3>
                <p className="text-gray-600 mb-4">
                  Professional intermediary service for government apostille processing through our secure Florida platform.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Birth/Death Certificates</li>
                  <li>• Educational Transcripts</li>
                  <li>• Business Documents</li>
                  <li>• LLC Status Documents</li>
                  <li>• Legal Documents</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3">Online Notarization</h3>
                <p className="text-gray-600 mb-4">
                  Florida-approved remote online notarization through the Notary Geek platform.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Florida State Approved</li>
                  <li>• Secure Digital Platform</li>
                  <li>• 24/7 Availability</li>
                  <li>• Instant Processing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Foreign Signers Welcome</h3>
                <p className="text-gray-600 mb-4">
                  International access for non-US citizens without requiring a Social Security Number.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• No SSN Required</li>
                  <li>• Passports accepted for signers overseas</li>
                  <li>• International Documents</li>
                  <li>• Business & LLC Documents</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions - {displayName}
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I access the Florida Apostille App services from {displayName}?
                </h3>
                <p className="text-gray-600">
                  Simply visit our website to access our Florida-approved Notary Geek platform. You can complete your online notarization and apostille request entirely online. We serve as a professional intermediary to obtain government apostilles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What is your role in the apostille process?
                </h3>
                <p className="text-gray-600">
                  We are a professional intermediary service. While the Florida Secretary of State issues apostilles directly for $10, we provide comprehensive service including online notarization, document preparation, hand-carrying to government offices, and worldwide shipping. We also handle processing for all states, with specialization in California, New Mexico, Wyoming, and the New York City area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I need a Social Security Number to use your services?
                </h3>
                <p className="text-gray-600">
                  No. Our platform welcomes foreign signers and international clients. You can complete your online notarization without a US Social Security Number. We accept passports for signers overseas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are your pricing and turnaround times?
                </h3>
                <p className="text-gray-600">
                  For Florida documents: $300 for international shipping (single document), $230 for US shipping (FedEx 2nd day). Additional documents in the same package are $60 each. We aim for 2-day processing. Pricing for non-Florida states varies, with specialization in CA, NM, WY, and NYC area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is the Notary Geek platform approved for use in Florida?
                </h3>
                <p className="text-gray-600">
                  Yes! The Notary Geek platform is fully approved by the state of Florida for remote online notarization services, ensuring your documents are legally valid.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CityPage;