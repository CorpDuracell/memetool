// src/contexts/AlchemyContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { Network, Alchemy } from "alchemy-sdk";

const AlchemyContext = createContext(null);

export const AlchemyProvider = ({ children }) => {
  const [alchemy, setAlchemy] = useState(null);

  useEffect(() => {
    const settings = {
      apiKey: "blQyoZI9DR9e0ksuLiTGGf3kGv19V-fV", 
      network: Network.ETH_MAINNET,
    };
    const alchemyInstance = new Alchemy(settings);
    setAlchemy(alchemyInstance);
  }, []);

  if (!alchemy) return null;

  return (
    <AlchemyContext.Provider value={alchemy}>
      {children}
    </AlchemyContext.Provider>
  );
};

export const useAlchemy = () => {
  const context = useContext(AlchemyContext);
  if (!context) {
    throw new Error("useAlchemy must be used within an AlchemyProvider");
  }
  return context;
};
