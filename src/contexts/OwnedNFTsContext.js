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

    return (
        <OwnedNFTsContext.Provider value={{ nfts, isLoading, error }}>
            {children}
        </OwnedNFTsContext.Provider>
    );
};
