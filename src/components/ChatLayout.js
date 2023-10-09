import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatLayout = () => {
  const [chatbotIds, setChatbotIds] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY;

  useEffect(() => {
    fetchChatbots();
  }, []);


  const fetchChatbots = async () => {
    try {
      const response = await fetch('https://www.chatbase.co/api/v1/get-chatbots', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
  
      const memelandBot = data.chatbots.find(chatbot => chatbot.name === 'memelandBot');
      console.log('memelandBot:', memelandBot); // Log the memelandBot object
  
      if (memelandBot) {
        setChatbotIds([memelandBot.id]);
        setMessages([{ content: memelandBot.initial_messages[0], role: 'chatbot' }]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // In the component body
  console.log('messages:', messages); // Log the messages state

  const streamMessages = async (query) => {
    try {
      setMessages(prevMessages => [...prevMessages, { content: query, role: 'user' }]);
  
      const response = await fetch('https://www.chatbase.co/api/v1/chat', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [{ content: query, role: 'user' }],
          chatId: chatbotIds[0],
          stream: false,
          model: 'gpt-3.5-turbo',
          temperature: 0
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw Error(errorData.message);
      }
  
      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, { content: data.text, role: 'chatbot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSend = (content = message) => {
    streamMessages(content);
    setMessage('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 150px)', bgcolor: 'background.default', overflow: 'hidden'}}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', borderRadius: 1, border: '1px solid #282928', p: 1 }}>
        {messages.map((message, index) => (
          <Typography key={index} sx={{ 
            backgroundColor: message.role === 'user' ? '#e0e0e0' : '#4caf50', 
            color: message.role === 'user' ? '#000' : '#fff',
            borderRadius: 1, 
            m: 1, 
            p: 1 
          }}>
            {message.content}
          </Typography>
        ))}
      </Box>
      <Box sx={{ position: 'sticky', bottom: 0, overflow: 'hidden' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1, mb: 1, mt: 1, placeItems: 'center' }}>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleSend('Where are you Ray?')}>
          Where are you Ray?
          </Button>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleSend('What is the Max supply of $MEME Coin?')}>
            What is the Max supply of $MEME Coin?
          </Button>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', display: { xs: 'none', sm: 'block' }, borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleSend('How much $MEME will be for the Community')}>
            How much $MEME will be for the Community
          </Button>
          <Button sx={{ width: '250px', height: '60px', backgroundColor: 'transparent', display: { xs: 'none', sm: 'block' }, borderRadius: 1, border: '1px solid #282928' }} variant="outlined" onClick={() => handleSend('How many NFT Collections does Memeland have')}>
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