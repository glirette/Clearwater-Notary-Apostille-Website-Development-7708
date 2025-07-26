import React, { useState, useEffect } from 'react';
import { getCachedProcessingTimes, getDataSourceDescription } from '../utils/processingTimes';

const ProcessingTimeBanner = () => {
  const [processingDays, setProcessingDays] = useState(35); // More conservative fallback
  const [processingDate, setProcessingDate] = useState(null);
  const [isDateBased, setIsDateBased] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [dataSource, setDataSource] = useState('FALLBACK_ERROR');
  const [isLiveData, setIsLiveData] = useState(false);

  useEffect(() => {
    const loadProcessingTime = async () => {
      try {
        const data = await getCachedProcessingTimes();
        setProcessingDays(data.apostilleProcessingDays);
        setProcessingDate(data.apostilleProcessingDate);
        setIsDateBased(data.isDateBased);
        setLastUpdated(data.lastUpdated);
        setDataSource(data.dataSource);
        setIsLiveData(data.rawDataFound && data.parsingSuccess);
      } catch (error) {
        console.error('Error loading processing time:', error);
        // Keep fallback values
      } finally {
        setLoading(false);
      }
    };

    loadProcessingTime();
  }, []);

  const savings = processingDays - 2;

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-3 px-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span className="font-semibold">Loading current processing times...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-4 px-6 text-center shadow-lg">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-bold">
          🚀 <span className="underline">Florida State Processing</span>: 
          {isDateBased && processingDate ? (
            <span>~{processingDays} days (processing {processingDate})</span>
          ) : (
            <span>{processingDays} days</span>
          )} • Our Service: 2-day target • 
          <span className="text-yellow-200"> Save {savings} {savings === 1 ? 'day' : 'days'}!</span>
          
          {/* Data Source Indicator */}
          <span className="ml-2">
            {isLiveData ? (
              <span className="inline-flex items-center gap-1 bg-green-500 bg-opacity-80 px-2 py-1 rounded-full text-xs">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                LIVE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-orange-600 bg-opacity-80 px-2 py-1 rounded-full text-xs">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                EST
              </span>
            )}
          </span>
        </p>
        <p className="text-sm opacity-90 mt-1">
          {isLiveData ? (
            <>Current Florida processing times • Updated {lastUpdated ? `${lastUpdated}` : 'daily'} from DOS website</>
          ) : (
            <>Estimated processing times • Unable to fetch live data from FL DOS website</>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProcessingTimeBanner;