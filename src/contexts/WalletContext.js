// src/contexts/WalletContext.js

import React, { useState, useContext, useEffect } from 'react'; // <-- Ensure useEffect is imported
import { useAccount } from 'wagmi';

// Create a context for the wallet. This will allow child components to access the wallet's state.
const WalletContext = React.createContext();

export const WalletProvider = ({ children }) => {
  // Create a state to store the wallet address.
  const [walletAddress, setWalletAddress] = useState(null);

  // Use the useAccount hook from wagmi to get the account details and set up onConnect and onDisconnect callbacks.
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected });
      setWalletAddress(address);
    },
    onDisconnect() {
      console.log('Disconnected');
      setWalletAddress(null);
    }
  });

  console.log("Account changed:", account ? account.address : 'No address');

  // Add the useEffect here to listen for changes to the walletAddress state
  useEffect(() => {
      console.log("Wallet address state changed:", walletAddress);
  }, [walletAddress]);

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>  
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to allow components to easily access the wallet address from the context.
export const useWallet = () => {
    return useContext(WalletContext);
};

export default WalletProvider;
