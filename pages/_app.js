import React from 'react';
import App from '../src/components/App'; // Importing the App component you've defined
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';

import '../src/styles/_app.css';
import '../src/styles/App.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <App>
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  );
}

export default MyApp;