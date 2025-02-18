import React from 'react'
import Dashboard from '../Components/Dashboard'
import Box from '@mui/material/Box';  // Importera Box från MUI
import Typography from '@mui/material/Typography';  // Importera Typography från MUI
import Navbar from '../Components/Navbar';

export default function Analys() {
  return (
    <>
     <Navbar />    
      <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Dashboard />
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Analys</h1> 
      </Box>
    </Box>
 
    </>
  )
}
