// components/ETHPriceDisplay.js

import React from 'react';
import { useETHPrice } from '../contexts/ETHPriceContext';

const ETHPriceDisplay = () => {
  const ethPrice = useETHPrice();

  return (
    <div>
      Current ETH Price: ${ethPrice}
    </div>
  );
};

export default ETHPriceDisplay;