import React, { useState } from 'react';
import Dashboard from '../Components/Dashboard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'User1' }]);
      setInput('');
    }
  };

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Dashboard />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Chat
          </Typography>
          <List sx={{ maxHeight: '60vh', overflow: 'auto', mb: 2 }}>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <ListItemText primary={message.text} secondary={message.sender} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

