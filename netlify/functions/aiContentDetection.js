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

    // Validate input
    if (!requestBody.text || typeof requestBody.text !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Text field is required and must be a string' })
      };
    }

    // Get Winston API key from environment variable
    const WINSTON_API_KEY = process.env.WINSTON_API_KEY;
    
    if (!WINSTON_API_KEY) {
      console.error('WINSTON_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error - API key missing' })
      };
    }

    console.log('Making request to Winston API...');

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

    console.log('Winston API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Winston API error:', response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: 'Winston API error', 
          status: response.status,
          details: errorText
        })
      };
    }

    const data = await response.json();
    console.log('Winston API response data received');

    return {
      statusCode: 200,
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
        details: err.message,
        stack: err.stack
      })
    };
  }
}; 