import React, { useContext } from 'react';
import { OwnedNFTsContext } from '../contexts/OwnedNFTsContext';
import { useWallet } from '../contexts/WalletContext';

function OwnedNFTs() {
    const { nfts, isLoading, error } = useContext(OwnedNFTsContext);
    const walletContext = useWallet();
    const walletAddress = walletContext ? walletContext.address : null;

    if (!walletAddress) return <div>Please connect your wallet.</div>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Your NFTs from all Memeland Collections</h2>
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
