import React, { useState } from 'react';
import { Box, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatLayout = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log(message);
    setMessage('');
  };

  const handleExampleClick = (example) => {
    console.log(example);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 150px)', bgcolor: 'background.default', overflow: 'hidden'}}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', borderRadius: 1, border: '1px solid #282928'}}>
        {/* Hier können Sie die Chat-Nachrichten anzeigen */}
      </Box>
      <Box sx={{ position: 'sticky', bottom: 0, overflow: 'hidden' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1, mb: 1, mt: 1, placeItems: 'center' }}>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleExampleClick('Example 1')}>
            Ask where Ray is at the moment
          </Button>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleExampleClick('Example 2')}>
            What is the Max supply of $MEME Coin
          </Button>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', display: { xs: 'none', sm: 'block' }, borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleExampleClick('Example 3')}>
            How much $MEME will be for the Community
          </Button>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', display: { xs: 'none', sm: 'block' }, borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleExampleClick('Example 4')}>
            How many NFT Collections does Memeland have
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSend} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <SendIcon sx={{ fontSize: 20, ml: 1 }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatLayout;