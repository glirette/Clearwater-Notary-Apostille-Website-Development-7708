import React from 'react';

const LegalCompliance = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Legal & Compliance Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">🏛️ Government Relationships</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• We are NOT affiliated with any government agency</li>
                <li>• We do NOT represent the Florida Secretary of State</li>
                <li>• We are a private intermediary service company</li>
                <li>• All apostilles are issued by government offices, not us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">📋 Service Limitations</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• We cannot guarantee acceptance by foreign authorities</li>
                <li>• Processing times are targets, not guarantees</li>
                <li>• Some documents may require additional steps</li>
                <li>• International shipping times vary by destination</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">🔒 Privacy & Security</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Your documents are handled securely</li>
                <li>• We comply with privacy regulations</li>
                <li>• Data is encrypted during transmission</li>
                <li>• Documents are returned or securely destroyed</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">💰 Refund Policy</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Refunds available if service cannot be completed</li>
                <li>• Government fees are non-refundable</li>
                <li>• Processing fees may apply for cancellations</li>
                <li>• Contact us for specific refund questions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Questions about our service?</strong> Contact us via WhatsApp before placing your order. 
              We're here to help you understand if our service is right for your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance;