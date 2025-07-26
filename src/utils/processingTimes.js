// Utility to fetch and parse Florida processing times
export const fetchFloridaProcessingTimes = async () => {
  try {
    // Use a CORS proxy to fetch the Florida DOS page
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = 'https://dos.fl.gov/sunbiz/document-processing-dates/';
    
    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    const data = await response.json();
    
    if (data.contents) {
      return parseProcessingTimes(data.contents);
    }
    
    return getFallbackTimes();
  } catch (error) {
    console.error('Error fetching processing times:', error);
    return getFallbackTimes();
  }
};

const parseProcessingTimes = (htmlContent) => {
  try {
    // Create a temporary DOM element to parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    const processingInfo = {
      apostilleProcessingDays: null,
      apostilleProcessingDate: null,
      apostilleActualDays: null,
      certificationProcessingDays: null,
      lastUpdated: null,
      sourceUrl: 'https://dos.fl.gov/sunbiz/document-processing-dates/',
      isDateBased: false,
      dataSource: 'UNKNOWN', // Track data source
      rawDataFound: false,
      parsingSuccess: false
    };
    
    // Look specifically for "Apostille Requests" in the content
    const textContent = doc.body.textContent;
    console.log('Parsing Florida DOS website content...');
    
    // First try to find a table or content with "Apostille Requests"
    const apostilleRegex = /Apostille\s+Requests\s+(\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}-\d{1,2}-\d{2,4}|\d{1,2}\.\d{1,2}\.\d{2,4}|\d{1,2}\s+[a-zA-Z]+\s+\d{2,4})/i;
    const apostilleMatch = textContent.match(apostilleRegex);
    
    if (apostilleMatch) {
      // Found a date-based processing indicator
      processingInfo.apostilleProcessingDate = apostilleMatch[1];
      processingInfo.isDateBased = true;
      processingInfo.rawDataFound = true;
      processingInfo.dataSource = 'LIVE_WEBSITE_DATE';
      
      console.log(`✅ Found live data: Apostille Requests processing ${apostilleMatch[1]}`);
      
      // Calculate days from the date to today
      const today = new Date();
      let processingDate;
      
      // Handle different date formats
      if (apostilleMatch[1].includes('/')) {
        // MM/DD/YY or MM/DD/YYYY format
        const parts = apostilleMatch[1].split('/');
        // Check if year is 2-digit or 4-digit
        if (parts[2].length === 2) {
          parts[2] = '20' + parts[2]; // Assume 20xx for 2-digit years
        }
        processingDate = new Date(parts[2], parts[0] - 1, parts[1]);
      } else if (apostilleMatch[1].includes('-')) {
        // MM-DD-YYYY format
        const parts = apostilleMatch[1].split('-');
        if (parts[2].length === 2) {
          parts[2] = '20' + parts[2]; // Assume 20xx for 2-digit years
        }
        processingDate = new Date(parts[2], parts[0] - 1, parts[1]);
      } else if (apostilleMatch[1].includes('.')) {
        // MM.DD.YYYY format
        const parts = apostilleMatch[1].split('.');
        if (parts[2].length === 2) {
          parts[2] = '20' + parts[2]; // Assume 20xx for 2-digit years
        }
        processingDate = new Date(parts[2], parts[0] - 1, parts[1]);
      } else {
        // Try to parse with Date.parse
        processingDate = new Date(Date.parse(apostilleMatch[1]));
      }
      
      // Calculate business days difference
      if (processingDate && !isNaN(processingDate.getTime())) {
        // Calculate raw days difference
        const diffTime = Math.abs(today - processingDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // Estimate business days (approx 5/7 of calendar days)
        const businessDays = Math.round(diffDays * 5/7);
        
        // Calculate total turnaround time with shipping (4-5 days)
        processingInfo.apostilleActualDays = businessDays + 5; // Add 5 days for shipping
        processingInfo.apostilleProcessingDays = businessDays + 5; // Store the total days
        processingInfo.parsingSuccess = true;
        
        console.log(`✅ Successfully calculated: Processing date: ${processingDate.toLocaleDateString()}, Business days: ${businessDays}, Total with shipping: ${processingInfo.apostilleActualDays}`);
      } else {
        console.error("❌ Failed to parse processing date:", apostilleMatch[1]);
        // Use fallback days if date parsing fails
        processingInfo.apostilleProcessingDays = 35; // Conservative estimate
        processingInfo.dataSource = 'FALLBACK_PARSING_ERROR';
        processingInfo.parsingSuccess = false;
      }
    } else {
      // Try the old approach looking for days-based processing
      const daysMatch = textContent.match(/Apostille\s+Requests[^\d]*(\d+)(?:-(\d+))?\s*(?:business\s*)?days?/i);
      
      if (daysMatch) {
        // If it's a range like "5-10 days", use the higher number
        processingInfo.apostilleProcessingDays = parseInt(daysMatch[2] || daysMatch[1]);
        processingInfo.rawDataFound = true;
        processingInfo.dataSource = 'LIVE_WEBSITE_DAYS';
        processingInfo.parsingSuccess = true;
        console.log('✅ Found live data: Apostille processing days:', processingInfo.apostilleProcessingDays);
      } else {
        // Fallback to general apostille-related text
        const generalApostilleMatch = textContent.match(/apostille[^\d]*(\d+)(?:-(\d+))?\s*(?:business\s*)?days?/i);
        if (generalApostilleMatch) {
          processingInfo.apostilleProcessingDays = parseInt(generalApostilleMatch[2] || generalApostilleMatch[1]);
          processingInfo.rawDataFound = true;
          processingInfo.dataSource = 'LIVE_WEBSITE_GENERAL';
          processingInfo.parsingSuccess = true;
          console.log('✅ Found general apostille data:', processingInfo.apostilleProcessingDays);
        } else {
          // Further fallback to general processing times
          const generalMatch = textContent.match(/(?:processing|current)[^\d]*(\d+)(?:-(\d+))?\s*(?:business\s*)?days?/i);
          if (generalMatch) {
            processingInfo.apostilleProcessingDays = parseInt(generalMatch[2] || generalMatch[1]);
            processingInfo.rawDataFound = true;
            processingInfo.dataSource = 'LIVE_WEBSITE_PROCESSING';
            processingInfo.parsingSuccess = true;
            console.log('✅ Found general processing data:', processingInfo.apostilleProcessingDays);
          } else {
            // If no match found, use fallback
            console.log('❌ No processing time data found on website');
            processingInfo.apostilleProcessingDays = 35; // Conservative estimate for date-based processing
            processingInfo.dataSource = 'FALLBACK_NO_DATA';
            processingInfo.rawDataFound = false;
            processingInfo.parsingSuccess = false;
          }
        }
      }
    }
    
    // Try to find last updated date
    const dateMatch = doc.body.textContent.match(/(?:updated|as of)[^\d]*(\d{1,2}\/\d{1,2}\/\d{4})/i);
    if (dateMatch) {
      processingInfo.lastUpdated = dateMatch[1];
    } else {
      processingInfo.lastUpdated = new Date().toLocaleDateString();
    }
    
    return processingInfo;
  } catch (error) {
    console.error('❌ Error parsing processing times:', error);
    return getFallbackTimes();
  }
};

const getFallbackTimes = () => {
  console.log('⚠️ Using fallback processing times');
  return {
    apostilleProcessingDays: 35, // Conservative estimate for date-based processing
    apostilleProcessingDate: null,
    apostilleActualDays: 35,
    certificationProcessingDays: 15,
    lastUpdated: new Date().toLocaleDateString(),
    sourceUrl: 'https://dos.fl.gov/sunbiz/document-processing-dates/',
    isFallback: true,
    isDateBased: false,
    dataSource: 'FALLBACK_ERROR',
    rawDataFound: false,
    parsingSuccess: false
  };
};

// Cache processing times to avoid excessive requests
let cachedTimes = null;
let cacheTimestamp = null;
const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

export const getCachedProcessingTimes = async () => {
  const now = Date.now();
  
  if (cachedTimes && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedTimes;
  }
  
  cachedTimes = await fetchFloridaProcessingTimes();
  cacheTimestamp = now;
  
  return cachedTimes;
};

export const formatProcessingTimeComparison = (governmentDays, ourDays = 2) => {
  const savings = governmentDays - ourDays;
  return {
    governmentDays,
    ourDays,
    savings,
    savingsText: savings > 0 ? `${savings} ${savings === 1 ? 'day' : 'days'} faster` : 'Same day processing'
  };
};

// Helper function to get data source description
export const getDataSourceDescription = (dataSource) => {
  const descriptions = {
    'LIVE_WEBSITE_DATE': 'Live data from FL DOS website (date-based)',
    'LIVE_WEBSITE_DAYS': 'Live data from FL DOS website (days-based)', 
    'LIVE_WEBSITE_GENERAL': 'Live data from FL DOS website (general)',
    'LIVE_WEBSITE_PROCESSING': 'Live data from FL DOS website (processing)',
    'FALLBACK_PARSING_ERROR': 'Estimated (parsing error)',
    'FALLBACK_NO_DATA': 'Estimated (no data found)',
    'FALLBACK_ERROR': 'Estimated (connection error)'
  };
  
  return descriptions[dataSource] || 'Unknown source';
};