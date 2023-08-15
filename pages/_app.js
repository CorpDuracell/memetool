import React from 'react';
import App from '../src/components/App';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';

// WalletConnect and Web3Modal imports
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

// Configuration for WalletConnect
const chains = [arbitrum, mainnet, polygon];
const projectId = '398501a83dfb5e2d04ae8a9a355a8587';
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

import '../src/styles/_app.css';
import '../src/styles/App.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig config={wagmiConfig}>
        <App>
          <Component {...pageProps} />
        </App>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default MyApp;
