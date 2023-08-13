// App.js

import React, { useState } from 'react';
// import Button from '@mui/material/Button';
//import ChartComponent from './ChartComponent';

import { ThemeProvider } from '@mui/material/styles';

import './App.css';

// Import components 
import { DrawerProvider } from './components/DrawerContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import theme from './styles/theme';



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