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
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';

export default function Message() { // Skapar en funktion som heter Message som är en React-komponent
  const [messages, setMessages] = useState([]); // Skapar en state-variabel för att lagra meddelanden
  const [input, setInput] = useState(''); // Skapar en state-variabel för att lagra texten som skrivs in
  const [currentUser, setCurrentUser] = useState('User1'); // Skapar en state-variabel för att hålla reda på vilken användare som skickar meddelandet
  const [selectedUser, setSelectedUser] = useState('Edrin'); // Skapar en state-variabel för att hålla reda på vilken användare som är vald att skicka meddelanden till
  const users = ['Edrin', 'Hiwan', 'Farzad', 'Isac']; // Skapar en lista med användare som man kan skicka meddelanden till

  const handleSendMessage = () => { // Skapar en funktion som hanterar att skicka meddelanden
    if (input.trim()) { // Kollar om texten som skrivits in inte är tom
      setMessages([...messages, { text: input, sender: currentUser, receiver: selectedUser }]); // Lägger till det nya meddelandet i listan med meddelanden
      setInput(''); // Tömmer textfältet
      setCurrentUser(currentUser === 'User1' ? 'User2' : 'User1'); // Växlar mellan User1 och User2 efter att ett meddelande skickats
    }
  };

  return ( // Returnerar JSX som beskriver hur komponenten ska se ut
    <>
      <Navbar /> {/* Visar Navbar-komponenten */}
      <Box height={70} /> {/* Skapar en tom box med höjden 70 pixlar */}
      <Box sx={{ display: 'flex' }}> {/* Skapar en box som innehåller Dashboard och huvudområdet */}
        <Dashboard /> {/* Visar Dashboard-komponenten */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}> {/* Skapar en huvudbox som växer och har padding */}
          <Typography variant="h4" gutterBottom> {/* Visar en rubrik med texten "Chat" */}
            Chat
          </Typography>
          <Box sx={{ display: 'flex' }}> {/* Skapar en box som innehåller användarlistan och meddelandeområdet */}
            <Box sx={{ width: '15%', borderRight: '1px solid #ccc', borderRadius: 1, boxShadow: 3, p: 2, bgcolor: 'background.paper' }}> {/* Skapar en inramad och skuggad box för användarlistan */}
              <List> {/* Skapar en lista med användare på vänster sida */}
                {users.map((user, index) => ( // Loopar igenom användarlistan och skapar en knapp för varje användare
                  <ListItemButton
                    key={index} // Sätter en unik nyckel för varje knapp
                    selected={selectedUser === user} // Markerar knappen om användaren är vald
                    onClick={() => setSelectedUser(user)} // Ändrar vald användare när knappen klickas
                  >
                    <ListItemText primary={user} /> {/* Visar användarnamnet */}
                  </ListItemButton>
                ))}
              </List>
            </Box>
            <Box sx={{ flexGrow: 1, pl: 2 }}> {/* Skapar en box för meddelandeområdet som växer och har padding till vänster */}
              <List sx={{ maxHeight: '60vh', overflow: 'auto', mb: 2 }}> {/* Skapar en lista för att visa meddelanden med maxhöjd och rullningsbar */}
                {messages
                  .filter((message) => message.receiver === selectedUser || message.sender === selectedUser) // Filtrerar meddelanden för att bara visa de som är skickade till eller från vald användare
                  .map((message, index) => ( // Loopar igenom filtrerade meddelanden och skapar en listpost för varje meddelande
                    <ListItem
                      key={index} // Sätter en unik nyckel för varje meddelande
                      sx={{
                        justifyContent: message.sender === 'User1' ? 'flex-end' : 'flex-start', // Justerar meddelandet till höger om det är från User1, annars till vänster
                      }}
                    >
                      <Paper
                        sx={{
                          backgroundColor: message.sender === 'User1' ? 'white' : '#007bff', // Sätter bakgrundsfärgen till vit för User1 och blå för andra användare
                          padding: 1, // Sätter padding till 1
                          width: '40%', // Sätter bredden till 40%
                        }}
                      >
                        <ListItemText primary={message.text} secondary={message.sender} /> {/* Visar meddelandetexten och avsändaren */}
                      </Paper>
                    </ListItem>
                  ))}
              </List>
              <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Skapar en box för textfältet och skicka-knappen */}
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type a message..." // Sätter en platshållartext i textfältet
                  value={input} // Sätter värdet i textfältet till input state-variabeln
                  onChange={(e) => setInput(e.target.value)} // Uppdaterar input state-variabeln när texten ändras
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') { // Kollar om Enter-tangenten trycks ned
                      handleSendMessage(); // Anropar handleSendMessage-funktionen
                    }
                  }}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}> {/* Skapar en knapp för att skicka meddelandet */}
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

