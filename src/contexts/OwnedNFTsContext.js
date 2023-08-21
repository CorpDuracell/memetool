// OwnedNFTsContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useWallet } from './WalletContext';

export const OwnedNFTsContext = createContext();

export const OwnedNFTsProvider = ({ children }) => {
    const [nfts, setNfts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const walletContext = useWallet();
    const walletAddress = walletContext;

    useEffect(() => {
        if (walletAddress) {
            fetch(`https://memetool.vercel.app/api/getNFTsFromDesiredContracts?owner=${walletAddress}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("API Response:", data);
                    // Validate that the data contains an array of NFTs under the key 'nfts'
                    if (data && Array.isArray(data.nfts)) {
                        setNfts(data.nfts);
                    } else {
                        throw new Error('Unexpected data structure');
                    }
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setError(err);
                    setIsLoading(false);
                });
        }
    }, [walletAddress]);

    return (
        <OwnedNFTsContext.Provider value={{ nfts, isLoading, error }}>
            {children}
        </OwnedNFTsContext.Provider>
    );
};

export default OwnedNFTsProvider;
