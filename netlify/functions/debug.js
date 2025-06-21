exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Debug function is working!',
      timestamp: new Date().toISOString(),
      method: event.httpMethod,
      path: event.path,
      queryStringParameters: event.queryStringParameters,
      headers: event.headers,
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        WINSTON_API_KEY: process.env.WINSTON_API_KEY ? 'SET' : 'NOT SET'
      }
    })
  };
}; 