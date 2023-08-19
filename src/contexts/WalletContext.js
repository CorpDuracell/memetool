// src/contexts/WalletContext.js

import React, { useState, useEffect, useContext } from 'react';
import { useAccount } from 'wagmi';

// Create a context for the wallet. This will allow child components to access the wallet's state.
const WalletContext = React.createContext();

export const WalletProvider = ({ children }) => {
  // Use the useAccount hook from wagmi to get the account details.
  const account = useAccount();

  // Create a state to store the wallet address.
  const [walletAddress, setWalletAddress] = useState(null);

  // useEffect hook to listen for changes in the account.
  // If the account changes (i.e., a wallet is connected or disconnected), 
  // the wallet address state is updated.
  useEffect(() => {
    if (account) {
      setWalletAddress(account.address);
    }
  }, [account]);

  return (
    <WalletContext.Provider value={walletAddress}>
      {children}
    </WalletContext.Provider>
  );
};

  // Custom hook to allow components to easily access the wallet address from the context.
export const useWallet = () => {
    return useContext(WalletContext);
};