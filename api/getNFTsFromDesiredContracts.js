// /api/getNFTsFromDesiredContracts.js
import fetch from 'node-fetch';
import { NFT_CONTRACTS } from "../config/nftContracts";

export default async (req, res) => {
  const API_KEY = "blQyoZI9DR9e0ksuLiTGGf3kGv19V-fV";
  const BASE_URL = `https://eth-mainnet.g.alchemy.com/nft/v2/${API_KEY}/getNFTs`;
  
  const { owner } = req.query;
  
  try {
    const contractAddresses = NFT_CONTRACTS.join(",");
    const response = await fetch(`${BASE_URL}?owner=${owner}&contractAddresses[]=${contractAddresses}&withMetadata=true`);
    const data = await response.json();
    
    if (data && data.nfts) {
      res.status(200).json(data.nfts);
    } else {
      res.status(404).json({ error: 'No NFTs found for this owner from the desired contracts.' });
    }

  } catch (error) {
    console.error("Error fetching data from Alchemy:", error);
    return res.status(500).json({ error: 'Failed to fetch NFT data.' });
  }
};
