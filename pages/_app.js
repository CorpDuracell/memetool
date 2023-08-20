// _app.js

import React from 'react';
import App from '../src/components/App';
import Content from '../src/components/Content';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';

// Get current Address from connected Wallet
import { WalletProvider } from '../src/contexts/WalletContext';
// Get current ETH price from Coingecko
import { ETHPriceProvider } from '../src/contexts/ETHPriceContext';

// WalletConnect and Web3Modal imports
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {mainnet} from 'wagmi/chains';

// Alchemy SDK imports
import { AlchemyProvider } from '../src/contexts/AlchemyContext';

import '../src/styles/_app.css';
import '../src/styles/App.css';

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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig config={wagmiConfig}>
      <WalletProvider>
      <ETHPriceProvider>
      <AlchemyProvider>
        <App>
        <Component {...pageProps}/>
        </App>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode="dark"/>
        </AlchemyProvider>
        </ETHPriceProvider>
        </WalletProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default MyApp;
