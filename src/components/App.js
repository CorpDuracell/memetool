import React, { useState } from 'react';
// import Button from '@mui/material/Button';
//import ChartComponent from './ChartComponent';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';



// Import components 
import { DrawerProvider } from './DrawerContext';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';



function App() {

const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <DrawerProvider>
    <ThemeProvider theme={theme}>
    <div className="app">

      <Header />

      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />   

      <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />  

    </div>

    </ThemeProvider>
    </DrawerProvider>
  );
}

export default App;