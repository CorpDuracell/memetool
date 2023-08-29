'use client'
// app/page.js

import styles from '../src/styles/Page.module.css';
import Link from 'next/link'

import { Button, Grid, Card, Typography, Box, } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';


import ParticlesComponent from '../src/components/ParticlesComponent';

const logo = "/Black_and_White_Skull_memetool_Animated_Logo_trans.svg";
const potatoz = "/potatoz_building.webp";

function Page() {

  return (
    <Box>
    <Box className={styles.Page}>
      <ParticlesComponent className={styles.particles} />
      <Card 
  sx={{
    zIndex: 1, 
    minHeight: 145, 
    minWidth: 140, 
    bgcolor: 'rgba(31, 30, 31, 0.8)', 
    p: 2, 
    border: 1, 
    borderColor: '#282928',
    display: 'flex',         
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'center',
    position: 'relative'     // Set position to relative
  }}
>
  <Box sx={{ mt: -2 }}>
    <img src={logo} alt="Your Logo" />
  </Box>
  <Typography variant="body1" letterSpacing={0} gutterBottom sx={{ color: '#E2E3E3', pr: '10px', textAlign: 'center' }}>
  Crafting Epicness for the <br/>MEMELAND Legends!
  </Typography>
  <Box sx={{ 
    position: 'absolute',   // Set position to absolute
    bottom: '-12px',            // Adjust as needed
    right: '-5px',          // Adjust as needed
    // You can also use bottom and left properties if needed
  }}>
    <img src={potatoz} alt="Building Potatoz" width="80" height="80" />
  </Box>
  <Box sx={{ mt: 2 ,color: '#E2E3E3' }}>
    <Link href="https://twitter.com/memetoolai" passHref>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<TwitterIcon sx={{ color: '#E2E3E3' }} />}
          sx={{ color: '#E2E3E3' }}
        >
          Follow Us
        </Button>
    </Link>
  </Box>
</Card>

    </Box>
    </Box>
  );
}

export default Page;