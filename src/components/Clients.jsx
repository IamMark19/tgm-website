import React from 'react';
import { Box, Container, Typography, Grid, Paper, Tooltip, useTheme, useMediaQuery } from '@mui/material';

const clients = [
  { 
    name: 'PAGSS', 
    fullName: 'Philippine Airport Ground Support Solutions, Inc.',
    logo: '/clients/pagss.png' 
  },
  { 
    name: 'PSI', 
    fullName: 'Philippine Skylanders Inc.',
    logo: '/clients/psi.png' 
  },
  { 
    name: 'HICOM', 
    fullName: 'High Command Aviation Security Services',
    logo: '/clients/hcass.png' 
  },
  { 
    name: 'ONE TOLENTINO', 
    fullName: 'One Tolentino Residences',
    logo: '/clients/one-tolentino.png' 
  }
];

export default function Clients() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id='clients' sx={{ 
      py: { xs: 10, md: 15 }, 
      bgcolor: '#ffffff', 
      borderBottom: '1px solid #f0f0f0',
      overflow: 'hidden' // Prevents any horizontal scroll issues
    }}>
      <Container maxWidth="xl">
        <Typography 
          variant="overline" 
          align="center" 
          display="block" 
          sx={{ 
            mb: { xs: 6, md: 8 }, 
            color: 'text.secondary', 
            fontWeight: 800, 
            letterSpacing: 4, 
            fontSize: '1rem' 
          }}
        >
          OUR VALUED CLIENTS
        </Typography>
        
        <Grid 
          container 
          spacing={{ xs: 3, md: 6 }} // Balanced spacing for mobile
          justifyContent="center" 
          alignItems="stretch" // Ensures all cards in a row have the same height
        >
          {clients.map((client) => (
            <Grid 
              item 
              xs={12} // Full width on mobile
              sm={6} 
              md={3} 
              key={client.name} 
              sx={{ display: 'flex' }} // Important: allows the Paper to fill the grid item height
            >
              <Tooltip title={client.fullName} arrow disableHoverListener={isMobile}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 6, md: 4 }, // Extra padding on mobile to make cards feel "big"
                    width: '100%', // ACHIEVE FULL WIDTH
                    maxWidth: { xs: '100%', sm: '400px', md: '300px' }, // Maximized on mobile
                    height: { xs: '200px', md: '180px' }, // Uniform height
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#fcfcfc', // Light background so the card shape is visible
                    border: '1px solid #f0f0f0',
                    filter: isMobile ? 'none' : 'grayscale(100%)', // Grayscale looks better on desktop hover
                    opacity: isMobile ? 1 : 0.6,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(10, 25, 47, 0.08)',
                      borderColor: '#d4af37',
                      borderRadius: '20px'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={client.logo}
                    alt={client.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <span style="font-weight:900; color:#0A192F; font-size: 1.5rem; text-align:center; letter-spacing:1px; width:100%;">
                          ${client.name}
                        </span>`;
                    }}
                    sx={{
                      maxWidth: '85%',
                      maxHeight: '75%',
                      objectFit: 'contain'
                    }}
                  />
                </Paper>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}