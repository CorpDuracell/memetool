const fetch = require('node-fetch');

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

let cachedData;
let cacheTime;

module.exports = async (req, res) => {
  // Set CORS headers only for local development
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  // Check if we have cached data and it's less than 30 seconds old
  if (cacheTime && Date.now() - cacheTime < 30000) {
    return res.json(cachedData);
  }

  try {
    const response = await fetch(COINGECKO_API_URL);
    const data = await response.json();
    cachedData = data;
    cacheTime = Date.now();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ETH price' });
  }
};