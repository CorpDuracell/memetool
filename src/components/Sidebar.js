// Sidebar.js
import styles from '../styles/Sidebar.module.css';

import { GiPirateSkull } from 'react-icons/gi';
import { GiPirateCoat } from 'react-icons/gi';
import { GiBarrel } from 'react-icons/gi';

import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useDrawer } from './DrawerContext';

const logo = "/Black_and_White_Skull_memetool_Animated_Logo.gif";

export default function Sidebar() {
  const { open, setActiveMenu } = useDrawer();


  return (
    <Drawer className={styles.sidebar} variant="persistent" anchor="left" open={open}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-start', 
          padding: '8px'
        }}
      >
        <img src={logo} alt="Your Logo" style={{ width: '80%', height: 'auto' }} />
      </Box>
      <Typography variant="h6" sx={{ mt: 2, mb: 2, ml: 2, color: '#666666' }}>Navigation</Typography>
      <List>
        <ListItem button onClick={() => setActiveMenu("Dashboard")}>
          <ListItemIcon sx={{ fontSize: '1.5rem', minWidth: '35px' }}><GiPirateSkull /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setActiveMenu("Collection")}>
          <ListItemIcon sx={{ fontSize: '1.5rem', minWidth: '35px' }}><GiPirateCoat /></ListItemIcon>
          <ListItemText primary="Collection" />
        </ListItem>
        <ListItem button onClick={() => setActiveMenu("Pirate Chat")}>
          <ListItemIcon sx={{ fontSize: '1.5rem', minWidth: '35px' }}><GiBarrel /></ListItemIcon>
          <ListItemText primary="Pirate Chat" />
        </ListItem>
      </List>
    </Drawer>
);
}
;