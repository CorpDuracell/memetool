'use client'
// app/app/page.js
import '../src/styles/_app.css';
import '../src/styles/App.css';

import React from 'react';
import Dashboard from '../src/components/Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';

// Get current Address from connected Wallet
import { WalletProvider } from '../src/contexts/WalletContext';
// Get current ETH price from Coingecko
import { ETHPriceProvider } from '../src/contexts/ETHPriceContext';
// Get currently owned Memeland NFTs from connected Wallet
import { OwnedNFTsProvider } from '../src/contexts/OwnedNFTsContext';

// WalletConnect and Web3Modal imports
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';

// Alchemy SDK imports
import { AlchemyProvider } from '../src/contexts/AlchemyContext';

// Configuration for WalletConnect
const projectId = '398501a83dfb5e2d04ae8a9a355a8587';
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};
const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig config={wagmiConfig}>
        <WalletProvider>
          <ETHPriceProvider>
            <AlchemyProvider>
              <OwnedNFTsProvider>
                <Dashboard>
                </Dashboard>
              </OwnedNFTsProvider>
            </AlchemyProvider>
          </ETHPriceProvider>
        </WalletProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}