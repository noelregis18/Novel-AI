const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const requestBody = JSON.parse(event.body);
    console.log('Function received:', requestBody);

    // Get Winston API key from environment variable
    const WINSTON_API_KEY = process.env.WINSTON_API_KEY;
    
    if (!WINSTON_API_KEY) {
      console.error('WINSTON_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Make request to Winston API
    const response = await fetch('https://api.gowinston.ai/v2/ai-content-detection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WINSTON_API_KEY}`,
      },
      body: JSON.stringify({
        text: requestBody.text,
        sentences: true,
      }),
    });

    const data = await response.json();
    console.log('Winston API response:', response.status, data);

    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify(data)
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error', 
        details: err.message 
      })
    };
  }
}; 