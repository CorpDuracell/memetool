// contexts/ETHPriceContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchETHPrice } from '../utils/coingecko';

const ETHPriceContext = createContext();

export const ETHPriceProvider = ({ children }) => {
  const [ethPrice, setETHPrice] = useState(null);

  useEffect(() => {
    const getETHPrice = async () => {
      try {
        // First, try to fetch the ETH price from our serverless function
        const response = await fetch('https://memetool.vercel.app/api/ethPrice');
        const data = await response.json();

        if (data && data.ethereum && data.ethereum.usd) {
          console.log("Setting ETH Price:", data.ethereum.usd);
          setETHPrice(data.ethereum.usd);
          return;
        }

        // If the above fails, throw an error to move to the catch block
        throw new Error('Failed to fetch from serverless function');
      } catch (error) {
        // If fetching from the serverless function fails, use the fetchETHPrice utility as a backup
        const backupPrice = await fetchETHPrice();
        setETHPrice(backupPrice);
      }
    };

    getETHPrice();
  }, []);

  return (
    <ETHPriceContext.Provider value={ethPrice}>
      {children}
    </ETHPriceContext.Provider>
  );
};

export const useETHPrice = () => {
  return useContext(ETHPriceContext);
};
