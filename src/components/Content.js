// Content.js

import './Content.css';
import React from 'react';
import { Grid, Card, Typography, Box, } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useDrawer } from './DrawerContext';

export default function Content({setActiveMenu }) {

let content;
const { open, activeMenu} = useDrawer();


if (activeMenu === "Dashboard") {
  content = (
    <Box> 
    <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>Dashboard</Typography>

  <Grid container spacing={3}  sx={{pr: 5 // padding right 
  }} >

    <Grid item xs={12} sm={12} md={3}>
      <Card sx={{ minHeight: 95, maxHeight: 95, minWidth: 140, maxWidth: 345, bgcolor: '#1f1e1f', p: 2, border: 1, borderColor: '#282928' }}>
          <Typography variant="h6" letterSpacing={0} gutterBottom>
            Total NFTs
          </Typography>
          <Box display="flex" alignItems="center" sx={{pb: 2,  }}>
          <Typography variant="h4" sx={{ color: '#E2E3E3', pr: '10px',}}>
            69,000
          </Typography>
          <Box sx={{ 
                      backgroundColor: '#111B2D',
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #1762BF',
                      borderRadius: 1,
                      p: '2px',
                      pl: '6px',
                      pr: '6px',
                  }}
          >
            <Typography variant="body2" sx={{ display: 'flex',
              alignItems: 'center', color: '#1762BF'}}>
            <TrendingUpIcon sx={{ mr: 1 , color: '#1762BF', fontSize: '14px'}} className="icon" />
              69.9%
            </Typography>  
          </Box>
          </Box>
          <Typography variant="body2" letterSpacing={0} sx={{span: {color: '#1762BF'} }}>
            You bought <span>69</span> this month
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
      <Card sx={{ minHeight: 95, maxHeight: 95, minWidth: 140, maxWidth: 345, bgcolor: '#1f1e1f', p: 2, border: 1, borderColor: '#282928' }}>
          <Typography variant="h6" letterSpacing={0} gutterBottom>
          Total Value
          </Typography>
          <Box display="flex" alignItems="center" sx={{pb: 2,  }}>
          <Typography variant="h4" sx={{ color: '#E2E3E3', pr: '10px',}}>
            $69,000
          </Typography>
          <Box 
        sx={{ 
          backgroundColor: '#111B2D',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #1762BF',
          borderRadius: 1,
          p: '2px',
          pl: '6px',
          pr: '6px',
        }}
      >
        <Typography variant="body2" sx={{ display: 'flex',
          alignItems: 'center', color: '#1762BF'}}>
        <TrendingUpIcon sx={{ mr: 1 , color: '#1762BF', fontSize: '14px'}} className="icon" />
          59.3%
        </Typography>  
      </Box>
          </Box>
          <Typography variant="body2" letterSpacing={0} sx={{span: {color: '#1762BF'} }}>
          You earned <span>$6900</span> this month
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
      <Card sx={{ minHeight: 95, maxHeight: 95, minWidth: 140, maxWidth: 345, bgcolor: '#1f1e1f', p: 2, border: 1, borderColor: '#282928' }}>
          <Typography variant="h6" letterSpacing={0} gutterBottom>
          Total ETH Value
          </Typography>
          <Box display="flex" alignItems="center" sx={{pb: 2,  }}>
          <Typography variant="h4" sx={{ color: '#E2E3E3', pr: '10px',}}>
            69.69
          </Typography>
          <Box sx={{ 
                      backgroundColor: '#2B2111',
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid rgb(216, 150, 20)',
                      borderRadius: 1,
                      p: '2px',
                      pl: '6px',
                      pr: '6px',
                  }}
          >
            <Typography variant="body2" sx={{ display: 'flex',
              alignItems: 'center', color: 'rgb(216, 150, 20)'}}>
            <TrendingDownIcon sx={{ mr: 1 , color: 'rgb(216, 150, 20)', fontSize: '14px'}} className="icon" />
              69.9%
            </Typography>  
          </Box>
          </Box>
          <Typography variant="body2" letterSpacing={0} sx={{span: {color: 'rgb(216, 150, 20)'} }}>
          You earned <span>69</span> ETH this month
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
      <Card sx={{ minHeight: 95, maxHeight: 95, minWidth: 140, maxWidth: 345, bgcolor: '#1f1e1f', p: 2, border: 1, borderColor: '#282928'}}>
          <Typography variant="h6" letterSpacing={0} gutterBottom>
          Liquid ETH
          </Typography>
          <Box display="flex" alignItems="center" sx={{pb: 2,  }}>
          <Typography variant="h4" sx={{ color: '#E2E3E3', pr: '10px',}}>
            6.9
          </Typography>
          <Box sx={{ 
                      backgroundColor: '#2B2111',
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid rgb(216, 150, 20)',
                      borderRadius: 1,
                      p: '2px',
                      pl: '6px',
                      pr: '6px',
                  }}
          >
            <Typography variant="body2" sx={{ display: 'flex',
              alignItems: 'center', color: 'rgb(216, 150, 20)'}}>
            <TrendingDownIcon sx={{ mr: 1 , color: 'rgb(216, 150, 20)', fontSize: '14px'}} className="icon" />
              69.9%
            </Typography>  
          </Box>
          </Box>
          <Typography variant="body2" letterSpacing={0} sx={{span: {color: 'rgb(216, 150, 20)'} }}>
          You earned <span>0.69</span> ETH this month
          </Typography>
        </Card>
      </Grid>

    </Grid>
    </Box> 
  );
}

if (activeMenu === "Collection") {
  content =     <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>Collection</Typography> ; 
  
}

if (activeMenu === "Pirate Chat") {
  content =     <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>Pirate Chat</Typography> ; 
}

if (activeMenu === "Pricing") {
  content = <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>Pricing</Typography>;
}

if (activeMenu === "About") {
  content = <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>About</Typography>;
}

    return (
      <Box className="contentArea" sx={{ marginLeft: open ? '270px' : '0px'  }}>
        {content} 
      </Box>
    );   
    } 
  