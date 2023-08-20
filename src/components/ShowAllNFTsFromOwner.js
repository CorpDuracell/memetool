// ShowAllNFTsFromOwner.js

import React, { useState, useEffect } from 'react';
import { useAlchemy } from '../contexts/AlchemyContext';

const Content = () => {
  const alchemy = useAlchemy();
  const [nfts, setNfts] = useState([]);
  
  useEffect(() => {
    if (!alchemy) return;

    const fetchNFTs = async () => {
      try {
        const nftsForOwner = await alchemy.nft.getNftsForOwner("cryptosyou.eth");
        setNfts(nftsForOwner.ownedNfts);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNFTs();
  }, [alchemy]);

  return (
    <div>
      <h2>NFTs owned by cryptosyou.eth</h2>
      <ul>
        {nfts.map((nft, index) => (
          <li key={index}>
            <strong>Contract Address:</strong> {nft.contract.address}<br />
            <strong>Token ID:</strong> {nft.tokenId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
