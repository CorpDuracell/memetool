// Sidebar.js
import styles from '../styles/Sidebar.module.css';

import { GiPirateSkull } from 'react-icons/gi';
import { GiPirateCoat } from 'react-icons/gi';
import { GiBarrel } from 'react-icons/gi';

import { Box, Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useDrawer } from './DrawerContext';

const logo = "/Black_and_White_Skull_memetool_Animated_Logo.gif";


export default function Sidebar() {
  const { open, setActiveMenu, activeMenu } = useDrawer();

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
        {['Dashboard', 'Collection', 'Pirate Chat'].map((text, index) => {
          const icons = [<GiPirateSkull />, <GiPirateCoat />, <GiBarrel />];
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setActiveMenu(text)} className={activeMenu === text ? 'activeMenu' : ''} 
              sx={{ backgroundColor: activeMenu === text ? '#282829' : 'transparent',
              color: "#666666",
                        
          "&:hover": {
            backgroundColor: "#282829",
            color: "#E2E3E3",
            "& .addIcon": {
              color: "#E2E3E3"
            }
          }
        }}  >
                <ListItemIcon sx={{ fontSize: 22, minWidth: '40px',  color: activeMenu === text ? '#E2E3E3' : 'inherit' }} className="addIcon">{icons[index]}</ListItemIcon>
                <ListItemText sx={{ color: activeMenu === text ? '#E2E3E3' : 'inherit' }} primary={text}/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
