// Sidebar.js
import styles from '../styles/Sidebar.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

import { GiPirateSkull } from 'react-icons/gi';
import { GiPirateCoat } from 'react-icons/gi';
import { GiBarrel } from 'react-icons/gi';

import { Box, Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Typography, Divider } from '@mui/material';
import { useDrawer } from '../contexts/DrawerContext';

const logo = "/Black_and_White_Skull_memetool_Animated_Logo.gif";

const pages = ['About', 'Pricing', 'Blog']; // Add this line

export default function Sidebar() {
  const { toggleDrawer, open, setActiveMenu, activeMenu } = useDrawer();
  const matches = useMediaQuery('(max-width:770px)'); // returns true if screen width is 600px or less

  const handleMenuItemClick = (text) => {
    if (text === 'Blog') {
      window.open('https://cryptosyou.com/', '_blank');
    } else {
      setActiveMenu(text);
      if (matches) { // if device is mobile, close the drawer
        toggleDrawer();
      }
    }
  };

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
              <ListItemButton   
                onClick={() => handleMenuItemClick(text)}
                className={activeMenu === text ? 'activeMenu' : ''} 
                disabled={text === 'Dashboard' || text === 'Collection'}
                sx={{ 
                  backgroundColor: activeMenu === text ? '#282829' : 'transparent',
                  color: "#666666",
                  "&:hover": {
                    backgroundColor: "#282829",
                    color: "#E2E3E3",
                    "& .addIcon": {
                      color: "#E2E3E3"
                    }
                  }
                }}
              >
                <ListItemIcon sx={{ fontSize: 22, minWidth: '40px',  color: activeMenu === text ? '#E2E3E3' : 'inherit' }} className="addIcon">{icons[index]}</ListItemIcon>
                <ListItemText sx={{ color: activeMenu === text ? '#E2E3E3' : 'inherit' }} primary={text}/>
              </ListItemButton>
            </ListItem>
          );
        })}
        <Divider sx={{ my: 2 }} /> {/* Add this line */}
        {pages.map((text) => ( // Add this block
          <ListItem key={text} disablePadding>
            <ListItemButton   
              onClick={() => handleMenuItemClick(text)}
              className={activeMenu === text ? 'activeMenu' : ''} 
              disabled={text === 'About' || text === 'Pricing'}
              sx={{ 
                backgroundColor: activeMenu === text ? '#282829' : 'transparent',
                color: "#666666",
                "&:hover": {
                  backgroundColor: "#282829",
                  color: "#E2E3E3",
                  "& .addIcon": {
                    color: "#E2E3E3"
                  }
                }
              }}
            >
              <ListItemText sx={{ color: activeMenu === text ? '#E2E3E3' : 'inherit' }} primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}