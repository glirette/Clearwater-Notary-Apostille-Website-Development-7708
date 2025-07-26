import { useState, useEffect } from 'react';
import { getCachedProcessingTimes } from '../utils/processingTimes';

export const useProcessingTimes = () => {
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
        // Set fallback data
        setProcessingData({
          apostilleProcessingDays: 35,
          certificationProcessingDays: 30,
          lastUpdated: new Date().toLocaleDateString(),
          sourceUrl: 'https://dos.fl.gov/sunbiz/document-processing-dates/',
          isFallback: true,
          isRealTimeData: false,
          rawDataFound: false,
          parsingSuccess: false,
          dataSource: 'FALLBACK_ERROR'
        });
      } finally {
        setLoading(false);
      }
    };

    loadProcessingTimes();
    
    // Refresh data every 4 hours
    const interval = setInterval(loadProcessingTimes, 4 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { processingData, loading, error };
};