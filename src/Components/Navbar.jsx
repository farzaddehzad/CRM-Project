import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import "../Dash.css"; // Importera CSS-filen

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon /> {/* Menyikon */}
          </IconButton>
          <Box sx={{ flexGrow: 1 }} /> {/* Flexbox för att skjuta CRM-titeln till höger */}
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            CRM {/* Titel */}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
