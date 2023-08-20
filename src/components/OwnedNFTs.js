//OwnedNFTs.js
import React, { useContext } from 'react';
import { OwnedNFTsContext } from '../contexts/OwnedNFTsContext';
import { useWallet } from '../contexts/WalletContext';



function OwnedNFTs() {
    const { nfts, isLoading, error } = useContext(OwnedNFTsContext);
    const walletContext = useWallet();
    const walletAddress = walletContext;

    if (!walletAddress) return <div>Please connect your wallet. </div>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message} {walletAddress ? `Connected: ${walletAddress}` : 'Not Connected'}</div>;

    return (
        <div>
            <h2>Your NFTs from all Memeland Collections</h2>
            {nfts.map(nft => (
                <div key={nft.tokenId}>
                    <img src={nft.image} alt={nft.name} />
                    <p>Name: {nft.name}</p>
                    {/* Removed the description as per your request */}
                    <p>Token ID: {nft.tokenId}</p>
                    <p>Total Supply: {nft.totalSupply}</p>
                    <p>Token Type: {nft.tokenType}</p>
                    <p>Floor Price: {nft.floorPrice}</p>
                    {/* Display attributes if available */}
                    {nft.attributes && (
                        <div>
                            <h3>Attributes:</h3>
                            <ul>
                                {nft.attributes.map((attr, index) => (
                                    <li key={index}>
                                        {attr.trait_type}: {attr.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default OwnedNFTs;
