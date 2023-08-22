import styles from '../styles/Header.module.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useDrawer } from '../contexts/DrawerContext';
import { Web3Button } from '@web3modal/react';

const pages = ['About', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
    const { toggleDrawer, open, setActiveMenu } = useDrawer();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [walletAddress, setWalletAddress] = React.useState('0x1c593c369136264Abfb908b4B20e74c9a5949417');

    const famousWallets = [
        { label: "memeland.eth", address: "memeland.eth" },
        { label: "degensfund.eth", address: "degensfund.eth" },
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = () => {
        // Logic to use the walletAddress
        // ...
        handleClose();
    };

    return (
        <AppBar position="static" className={styles.appBar} sx={{ backgroundColor: '#1E1F1F', borderBottom: '1px solid #282928', marginLeft: open ? '270px' : '0px', width: open ? `calc(100% - 270px)` : '100%', }}>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    edge="start"
                >
                    <MenuOpenIcon />
                </IconButton>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Hidden mdUp>
                    <IconButton color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
            {pages.map((page) => (
              page === "Blog" ? (
                <a key={page} href="https://cryptosyou.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    {page}
                  </MenuItem>
                </a>
              ) : (
                <MenuItem key={page} onClick={() => {
                  handleCloseNavMenu();
                  setActiveMenu(page);
                }}>
                  {page}
                </MenuItem>
                  )
            ))}
            </Menu>
                    </Hidden>
                    <Hidden mdDown>
            {pages.map((page) => (
              page === "Blog" ? (
                <a key={page} href="https://cryptosyou.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button
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
                    setActiveMenu(page);
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              )
            ))}
                    </Hidden>
                    <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                        <Button onClick={handleOpen} variant="outlined" sx={{ marginRight: 1 }}>Explore Wallet</Button>
                        <Web3Button  />
                    </Box>
                    <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            PaperProps={{
                style: {
                    width: '400px',
                },
            }}
        >
            <div style={{ padding: "15px" }}>
                <TextField
                    label="Wallet Address"
                    variant="outlined"
                    fullWidth
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <List component="nav">
                    {famousWallets.map(wallet => (
                        <ListItem button key={wallet.label} onClick={() => setWalletAddress(wallet.address)}>
                            {wallet.label}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={handleSubmit} variant="contained" style={{ marginTop: '10px' }}>
                    Submit
                </Button>
            </div>
        </Popover>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
