import React, { useState, useEffect } from 'react';
import { getCachedProcessingTimes, formatProcessingTimeComparison, getDataSourceDescription } from '../utils/processingTimes';

const ProcessingTimeComparison = ({ showFullComparison = true }) => {
  const [processingData, setProcessingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProcessingTimes = async () => {
      try {
        setLoading(true);
        const data = await getCachedProcessingTimes();
        setProcessingData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading processing times:', err);
        setError('Unable to load current processing times');
      } finally {
        setLoading(false);
      }
    };

    loadProcessingTimes();
  }, []);

  if (loading) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-blue-700">Loading current processing times...</span>
        </div>
      </div>
    );
  }

  if (error || !processingData) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="text-center">
          <p className="text-yellow-800 font-semibold">⚠️ Current Processing Times</p>
          <p className="text-yellow-700">
            Florida State Processing: ~35 business days (estimated) • Our Service: 2-day target
          </p>
          <p className="text-xs text-yellow-600 mt-2">
            Unable to fetch live data from FL DOS website
          </p>
        </div>
      </div>
    );
  }

  const comparison = formatProcessingTimeComparison(processingData.apostilleProcessingDays);

  // Determine data source indicator
  const getDataSourceBadge = () => {
    if (processingData.rawDataFound && processingData.parsingSuccess) {
      return (
        <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Live Data
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          Estimated
        </div>
      );
    }
  };

  if (!showFullComparison) {
    return (
      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
        <span className="text-green-600">⚡</span>
        <span>{comparison.savingsText} than state processing</span>
        {getDataSourceBadge()}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border-4 border-orange-200 p-8 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          📊 Current Processing Time Comparison
        </h3>
        <p className="text-gray-600">
          Real-time data from Florida Secretary of State
          {processingData.lastUpdated && (
            <span className="ml-2 text-sm">
              (Updated: {processingData.lastUpdated})
            </span>
          )}
        </p>
        <div className="mt-2 flex justify-center">
          {getDataSourceBadge()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* State Processing */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🏛️</div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Florida State Direct</h4>
          <div className="text-gray-700 mb-3 font-semibold">
            <span className="underline">Current Processing Time</span>
          </div>
          <div className="text-4xl font-black text-gray-700 mb-2">
            {processingData.isDateBased && processingData.apostilleProcessingDate ? (
              <div>
                <div className="text-3xl font-black">~{processingData.apostilleProcessingDays} Days</div>
                <div className="text-sm font-normal text-gray-500 mt-1">
                  Currently processing requests from: {processingData.apostilleProcessingDate}
                </div>
                <div className="text-sm font-normal text-gray-500">
                  (Includes shipping time to/from Tallahassee)
                </div>
              </div>
            ) : (
              <>{processingData.apostilleProcessingDays} Days</>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-3">Current processing time</p>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            $10 per document
          </div>
          <p className="text-xs text-gray-500 mt-2">
            You handle everything yourself
          </p>
        </div>

        {/* Our Service */}
        <div className="bg-gradient-to-br from-orange-100 to-green-100 border-2 border-orange-300 rounded-xl p-6 text-center relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            {comparison.savingsText}
          </div>
          <div className="text-4xl mb-3">⚡</div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Our Service</h4>
          <div className="text-gray-700 mb-3 font-semibold">
            Apostille Processing
          </div>
          <div className="text-4xl font-black text-orange-600 mb-2">
            2 Days
          </div>
          <p className="text-gray-600 text-sm mb-3">Target processing time</p>
          <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
            $230-$300 complete
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Full service included
          </p>
        </div>
      </div>

      {/* Savings Highlight */}
      <div className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-4 text-center">
        <p className="text-lg font-bold">
          ⏰ Save {comparison.savings} business {comparison.savings === 1 ? 'day' : 'days'} with our professional service
        </p>
        <p className="text-sm opacity-90 mt-1">
          Plus online notarization, document handling, and worldwide shipping included
        </p>
      </div>

      {/* Enhanced Data Source Information */}
      <div className="mt-4 text-center">
        <a 
          href={processingData.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm underline"
        >
          Data source: Florida Department of State - Document Processing Dates
        </a>
        
        {/* Data Source Status */}
        <div className="mt-2 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-1">
            Data Status: {getDataSourceDescription(processingData.dataSource)}
          </p>
          {processingData.rawDataFound && processingData.parsingSuccess ? (
            <p className="text-xs text-green-600">
              ✅ Successfully retrieved and parsed live data from FL DOS website
            </p>
          ) : processingData.rawDataFound && !processingData.parsingSuccess ? (
            <p className="text-xs text-orange-600">
              ⚠️ Found data on website but had trouble parsing - using conservative estimate of {processingData.apostilleProcessingDays} days
            </p>
          ) : (
            <p className="text-xs text-orange-600">
              ⚠️ Could not find specific apostille processing data on FL DOS website - using conservative estimate of {processingData.apostilleProcessingDays} days
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessingTimeComparison;