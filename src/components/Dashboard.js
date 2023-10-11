// /src/components/Dashboard.js 
import React, { useState } from 'react';
import { DrawerProvider } from '../contexts/DrawerContext';
import ResponsiveAppBar from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Dashboard() {

const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <DrawerProvider>
      <ResponsiveAppBar />
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />   
      <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />  
    </DrawerProvider>
  );
}