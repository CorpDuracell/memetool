import React, { useState } from 'react';
// import Button from '@mui/material/Button';
//import ChartComponent from './ChartComponent';

// Import components 
import { DrawerProvider } from '../contexts/DrawerContext';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';



function App() {

const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <DrawerProvider>

    <div className="app">

      <Header />

      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />   

      <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />  

    </div>
    </DrawerProvider>
  );
}

export default App;