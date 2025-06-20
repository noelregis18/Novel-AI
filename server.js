const express = require('express');
const cors = require('cors');
// Use dynamic import for node-fetch
let fetch;
(async () => {
  fetch = (await import('node-fetch')).default;
})();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const WINSTON_API_KEY = 'DM2iLRgYPos3uQ0V9CqVLVvyo75d1KtJVYvcl4UE382db097';

app.post('/api/ai-content-detection', async (req, res) => {
  try {
    console.log('Proxy received:', req.body);
    // Wait for fetch to be loaded
    if (!fetch) fetch = (await import('node-fetch')).default;
    const response = await fetch('https://api.gowinston.ai/v2/ai-content-detection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WINSTON_API_KEY}`,
      },
      body: JSON.stringify({
        text: req.body.text,
        sentences: true,
      }),
    });
    const data = await response.json();
    console.log('Winston API response:', response.status, data);
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
}); 