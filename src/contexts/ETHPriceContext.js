// contexts/ETHPriceContext.js

import React, { createContext, useState, useEffect, useContext  } from 'react';
import { fetchETHPrice } from '../utils/coingecko';

const ETHPriceContext = createContext();

export const ETHPriceProvider = ({ children }) => {
  const [ethPrice, setETHPrice] = useState(null);

  useEffect(() => {
    const getETHPrice = async () => {
      const price = await fetchETHPrice();
      setETHPrice(price);
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