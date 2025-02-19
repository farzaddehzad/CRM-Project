import React from 'react';
import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbar';  // Importera Navbar-komponenten 
import Box from '@mui/material/Box';  // Importera Box från MUI
import Typography from '@mui/material/Typography';  // Importera Typography från MUI
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import "../Dash.css"; // Importera Dash.css
import Tabell from '../Components/Tabell'; // Importera Tabell-komponenten

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Homes() {
  return (
    <>
<div className='background-hela-sidan'>
        <Navbar />    
      <Box height={70}/>
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
                  <Tabell />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} className='card'>  
                <CardContent>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  
    </>
  );
}
