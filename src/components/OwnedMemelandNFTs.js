// src/components/OwnedNFTs.js

import React, { useState, useEffect, useContext } from 'react';
import { useWallet } from '../contexts/WalletContext';

function OwnedNFTs() {
    const [nfts, setNfts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const walletContext = useWallet();
    const walletAddress = walletContext ? walletContext.address : null;

    useEffect(() => {
        if (walletAddress) {
            fetch(`/api/getNFTsFromDesiredContracts?owner=${walletAddress}`)
                .then(response => response.json())
                .then(data => {
                    setNfts(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setIsLoading(false);
                });
        }
    }, [walletAddress]);

    if (!walletAddress) return <div>Please connect your wallet.</div>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Your NFTs from Specified Collections</h2>
            {nfts.map(nft => (
                <div key={nft.tokenId}>
                    <img src={nft.tokenUri} alt={nft.name} />
                    <p>{nft.name}</p>
                    <p>{nft.description}</p>
                    {/* Add other NFT properties you want to display */}
                </div>
            ))}
        </div>
    );
}

export default OwnedNFTs;
