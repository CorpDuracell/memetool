'use client'
// app/app/page.js

import React from 'react';
import Dashboard from '../../src/components/Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/styles/theme';

// Get current Address from connected Wallet
import { WalletProvider } from '../../src/contexts/WalletContext';
// Get current ETH price from Coingecko
import { ETHPriceProvider } from '../../src/contexts/ETHPriceContext';
// Get currently owned Memeland NFTs from connected Wallet
import { OwnedNFTsProvider } from '../../src/contexts/OwnedNFTsContext';

// WalletConnect and Web3Modal imports
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';

// Alchemy SDK imports
import { AlchemyProvider } from '../../src/contexts/AlchemyContext';

import '../../src/styles/_app.css';
import '../../src/styles/App.css';

// Configuration for WalletConnect
const chains = [mainnet];
const projectId = '398501a83dfb5e2d04ae8a9a355a8587';
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig config={wagmiConfig}>
        <WalletProvider>
          <ETHPriceProvider>
            <AlchemyProvider>
              <OwnedNFTsProvider>
                <Dashboard>
                  <Component {...pageProps} />
                </Dashboard>
                <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode="dark" />
              </OwnedNFTsProvider>
            </AlchemyProvider>
          </ETHPriceProvider>
        </WalletProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
export default App;