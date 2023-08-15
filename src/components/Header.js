import styles from '../styles/Header.module.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useDrawer } from './DrawerContext';

// Import the Web3Button
import { Web3Button } from '@web3modal/react';

const pages = ['About', 'Pricing', 'Blog'];
const settings = ['Account', 'Logout'];

function ResponsiveAppBar() {
  const { toggleDrawer, open, setActiveMenu } = useDrawer();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={styles.appBar} sx={{ backgroundColor: '#1E1F1F', borderBottom: '1px solid #282928', marginLeft: open ? '270px' : '0px',
    width: open ? `calc(100% - 270px)` : '100%',}}>
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
        >
        <MenuOpenIcon />
        </IconButton>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Box sx={{  display: {xs: 'flex', md: 'flex'} }}>
          {pages.map((page) => (
  page === "Blog" ? (
    <a href="https://cryptosyou.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page}
      </Button>
    </a>
  ) : (
    <Button
      key={page}
      onClick={() => {
        handleCloseNavMenu();
        setActiveMenu(page);  // <-- Set the active menu here
      }}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page}
    </Button>
  )
))}
          </Box>

          <Box sx={{ display: {xs: 'flex', md: 'flex'}, ml: 5}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ ml: 2, display: 'flex', alignItems: 'center'}}>
              <Web3Button />
            </Box>
          </Box>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;