import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import { TypeAnimation } from 'react-type-animation';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const userAvatar = "/ChatAvatar_potatoz.png";
const rayAvatar = "/RayChanChatAvatar.png";

const ChatLayout = () => {
  const [chatbotIds, setChatbotIds] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY;

  const scrollToBottom = () => {
    const chatOutput = document.getElementById('chatOutput');
    chatOutput.scrollTop = chatOutput.scrollHeight;
  };

  useEffect(() => {
    fetchChatbots();
  }, []);

  useEffect(scrollToBottom, [messages]);


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
    if (typeof content === 'object') {
      content = message;
    }
    streamMessages(content);
    setMessage('');
  };

  // Keep track of the number of messages
const [messageCount, setMessageCount] = useState(0);

// Update the message count whenever a new message is sent
useEffect(() => {
  setMessageCount(messages.length);
}, [messages]);

  return (
    <Box id="chatContainer" sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 125px)', overflow: 'hidden', paddingBottom: '60px'}}>
      <Box id="chatOutput" sx={{ flexGrow: 1, overflow: 'auto', borderRadius: 1, border: '1px solid #282928', p: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1 }}>
          {messages.map((message, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: message.role === 'user' ? 'row-reverse' : 'row', m: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: message.role === 'user' ? 'row-reverse' : 'row', borderRadius: '0 16px 16px 16px', backgroundColor: message.role === 'user' ? '#282829' : 'transparent', alignItems: 'flex-start'  }}>
                <Avatar src={message.role === 'user' ? userAvatar : rayAvatar} sx={{ width: 48, height: 48, borderRadius: message.role === 'user' ? '0 16px 16px 0' : '16px 0 0 16px' }} />
                <IconButton
                        onClick={() => navigator.clipboard.writeText(message.content)}
                        sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                      >
                        <ContentCopyIcon sx={{ fontSize: 20, ml: 1 }} />
                      </IconButton>
                <Typography sx={{ p: 1, textAlign: message.role === 'user' ? 'right' : 'left' }}>
                  {message.role === 'chatbot' ? (
                    <>
                      <TypeAnimation
                        sequence={[message.content]}
                        wrapper="span"
                        speed={100}
                        cursor={false}
                      />
                    </>
                  ) : (
                    message.content
                  )}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ 
  display: 'grid',
  gridTemplateColumns: { sm: 'repeat(2, 1fr)' }, 
  gap: 1, 
  mb: 1, 
  mt: 1, 
  placeItems: 'center',
  transition: 'opacity 2s ease-in-out, max-height 2s ease-in-out',
  opacity: messageCount < 4 ? 1 : 0,
  maxHeight: messageCount < 4 ? '1000px' : 0,
  overflow: 'hidden'
}}>
          <Button sx={{ minWidth: 'fit-content', height: 'auto', borderRadius: 1, border: '1px solid #282928', p: 1 }} variant="outlined" onClick={() => handleSend('Where are you Ray?')}>
            Where are you Ray?
          </Button>
          <Button sx={{ minWidth: 'fit-content', height: 'auto', borderRadius: 1, border: '1px solid #282928', p: 1 }} variant="outlined" onClick={() => handleSend('Tell me more about Memeland.')}>
            Tell me more about Memeland.
          </Button>
          <Button sx={{ minWidth: 'fit-content', height: 'auto', display: { xs: 'none', sm: 'block' }, borderRadius: 1, border: '1px solid #282928', p: 1 }} variant="outlined" onClick={() => handleSend('The Max Supply of $MEME COIN?')}>
            The Max Supply of $MEME COIN?
          </Button>
          <Button sx={{ minWidth: 'fit-content', height: 'auto', display: { xs: 'none', sm: 'block' }, borderRadius: 1, border: '1px solid #282928', p: 1 }} variant="outlined" onClick={() => handleSend('What is your take on NFTs and $MEME?')}>
            What is your take on NFTs and $MEME?
          </Button>
        </Box>
      </Box>
      <Box sx={{ position: 'sticky', bottom: 0, minHeight: 60, overflow: 'hidden', mt: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevents the addition of a new line in the TextField by default
              handleSend();
            }
          }}
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
  );
};

export default ChatLayout;
