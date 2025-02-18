import React from 'react';
import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbar';  // Importera Navbar-komponenten 
import Box from '@mui/material/Box';  // Importera Box från MUI
import Typography from '@mui/material/Typography';  // Importera Typography från MUI

export default function Homes() {
  return (
    <>
    <Navbar />    
      <Box height={30}/>
      <Box sx={{ display: 'flex' }}>
        <Dashboard />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Dashbord</h1> 
      </Box>
    </Box>
 
    </>
  )
}
