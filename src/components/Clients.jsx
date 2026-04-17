import React from 'react';
import { Box, Container, Typography, Grid, Paper, Tooltip } from '@mui/material';

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
  return (
    <Box id='clients' sx={{ 
      py: { xs: 10, md: 15 }, // Increased vertical padding for a "bigger" feel
      bgcolor: '#ffffff', 
      borderBottom: '1px solid #f0f0f0' 
    }}>
      <Container maxWidth="xl"> {/* Wider container */}
        <Typography 
          variant="overline" 
          align="center" 
          display="block" 
          sx={{ 
            mb: 8, // More space below the title
            color: 'text.secondary', 
            fontWeight: 800, 
            letterSpacing: 4, // Increased letter spacing
            fontSize: '1rem' // Larger font for the label
          }}
        >
          OUR VALUED CLIENTS
        </Typography>
        
        <Grid 
          container 
          spacing={{ xs: 4, md: 8 }} // Much larger spacing between logos
          justifyContent="center" 
          alignItems="center"
        >
          {clients.map((client) => (
            <Grid item xs={12} sm={6} md={3} key={client.name} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tooltip title={client.fullName} arrow>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4, // Increased internal padding
                    width: '100%',
                    maxWidth: '300px', // Increased max width for logos
                    height: '180px', // Increased height
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    filter: 'grayscale(100%)',
                    opacity: 0.5,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transform: 'scale(1.15)', // Stronger zoom effect
                      bgcolor: 'rgba(212, 175, 55, 0.03)', // Subtle gold tint on hover
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
                        <span style="font-weight:900; color:#0A192F; font-size: 1.5rem; text-align:center; letter-spacing:1px;">
                          ${client.name}
                        </span>`;
                    }}
                    sx={{
                      maxWidth: '90%', // Logo fills more of the container
                      maxHeight: '80%',
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