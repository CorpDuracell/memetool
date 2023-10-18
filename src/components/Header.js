//Header.js
import styles from '../styles/Header.module.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useDrawer } from '../contexts/DrawerContext';
import { useWallet } from '../contexts/WalletContext';
import { useDisconnect } from 'wagmi';
import ConnectButton from './ConnectButton';

const famousWallets = [
    { label: "memeland.eth", address: "memeland.eth" },
    { label: "degensfund.eth", address: "degensfund.eth" },
];

export default function ResponsiveAppBar() {
    const { toggleDrawer, open } = useDrawer();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [walletAddress, setWalletAddress] = React.useState('0x1c593c...');

    const { walletAddress: walletAddressContext, setWalletAddress: setWalletAddressContext } = useWallet();
    const { disconnect } = useDisconnect(); // Use the disconnect function from useDisconnect

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = () => {
      // If there's a connected address, disconnect it
      if (walletAddressContext) {
          disconnect();
          
          // Introduce a small delay before manually setting the address
          setTimeout(() => {
              // Log and manually set the wallet address
              console.log("Manually setting walletAddress to:", walletAddress);
              setWalletAddressContext(walletAddress);
  
              // Close the Popover
              handleClose();
          }, 50); // 350ms delay
      } else {
          // If not connected, just set the address
          console.log("Manually setting walletAddress to:", walletAddress);
          setWalletAddressContext(walletAddress);
  
          // Close the Popover
          handleClose();
      }
  };
  

    return (
        <AppBar position="static" className={styles.appBar} sx={{ backgroundColor: '#1E1F1F', backgroundImage: 'none', borderBottom: '1px solid #282928', marginLeft: open ? '270px' : '0px', width: open ? `calc(100% - 270px)` : '100%', }}>
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
                    <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                        <Button onClick={handleOpen} variant="outlined" sx={{ marginRight: 1 }} disabled>Explore Wallet</Button>
                        {/* <ConnectButton/> */}
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
            slotProps={{
                paper: {
                    style: {
                        width: '400px',
                        backgroundColor: '#1E1F1F',
                    }
                }
            }}
            sx={{
                ".MuiPopover-paper": {
                    backgroundColor: '#1E1F1F',
                    backgroundImage: 'none'
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
                <SearchIcon sx={{ color: '#E2E3E3' }} />
            </InputAdornment>
        ),
        style: {
            color: '#E2E3E3',
        },
    }}
    InputLabelProps={{
        style: {
            color: '#E2E3E3',
        },
    }}
    sx={{
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#1762BF',
            },
            '&:hover fieldset': {
                borderColor: '#1762BF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1762BF',
            },
        },
    }}
/>

                <List component="nav">
                    {famousWallets.map(wallet => (
                        <ListItem
                            button
                            key={wallet.label}
                            onClick={() => setWalletAddress(wallet.address)}
                            sx={{ color: '#E2E3E3' }}
                        >
                            {wallet.label}
                        </ListItem>
                    ))}
                </List>
                <Button sx={{ backgroundColor: '#47A1FF' }} onClick={handleSubmit} variant="contained" style={{ marginTop: '10px' }}>
                    Submit
                </Button>
            </div>
        </Popover>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
