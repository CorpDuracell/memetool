'use client'
// app/page.js

import styles from '../src/styles/Page.module.css';
import Link from 'next/link'

import { Grid, Card, Typography, Box, } from '@mui/material';

import ParticlesComponent from '../src/components/ParticlesComponent';

const logo = "/Black_and_White_Skull_memetool_Animated_Logo_trans.svg";

function Page() {
  return (
    <Box>
    <Box className={styles.Page}>
      <ParticlesComponent className={styles.particles} />
      <Card sx={{zIndex: 1, minHeight: 150, maxHeight: 150, minWidth: 140, maxWidth: 345, bgcolor: 'rgba(31, 30, 31, 0.8)', p: 2, border: 1, borderColor: '#282928' }}>
        <img src={logo} alt="Your Logo" style={{ width: '80%', height: 'auto' }} />
        <Typography variant="body1" letterSpacing={0} gutterBottom
        sx={{ color: '#E2E3E3', pr: '10px',}}>
          We are building for the Memeland Community
        </Typography>
        {
        /* <Link href="/app">Enter App</Link> */
        }
      </Card>
    </Box>
    </Box>
  );
}

export default Page;