import React from 'react';
import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbar';  // Importera Navbar-komponenten 
import Box from '@mui/material/Box';  // Importera Box från MUI
import Typography from '@mui/material/Typography';  // Importera Typography från MUI
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import "../Dash.css"; // Importera Dash.css
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';


export default function Analys() {
  return (
    <>
    <div className='background-hela-sidan'>
     <Navbar />    
      <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Dashboard />
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row" > 
                <Card sx={{ minWidth: 345, height: 15 + 'vh' }} className="gradient-card">           
                  <CardContent>
                    <div className='icon'>
                      <AccessibilityIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                      2,420
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total antal kunder
                    </Typography>
                  </CardContent>
                </Card>
                
                <Card sx={{ minWidth: 345, height: 15 + 'vh' }} className="gradient-card">           
                  <CardContent>
                    <div className='icon'>
                      <AccessibilityIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                      1,210
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Antal kunder idag
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 345, height: 15 + 'vh' }} className="gradient-card">           
                  <CardContent>
                    <div className='icon'>
                      <AccessibilityIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                      316
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Aktiva nu
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
          </Grid>
          <Box height={20}/>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + 'vh' }}>           
                <CardContent>
                  <BarChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} className='card'>  
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </Box>
    </Box>
  </div>
    </>
  )
}
