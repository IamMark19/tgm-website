import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { 
  Language as GlobalIcon, 
  Gavel as StandardsIcon, 
  Payments as PricingIcon, 
  Engineering as TechSupportIcon 
} from '@mui/icons-material';

const reasons = [
  {
    title: 'Global Partnerships',
    desc: 'Strong partnerships with world-class suppliers and manufacturers ensuring premium product access.',
    icon: <GlobalIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Certified Standards',
    desc: 'Strict adherence to industry and international quality standards for every item we supply.',
    icon: <StandardsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Competitive Terms',
    desc: 'Strategic pricing and flexible procurement terms designed to meet your budgetary requirements.',
    icon: <PricingIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Technical Expertise',
    desc: 'Skilled technical and customer support teams ready to assist from installation to maintenance.',
    icon: <TechSupportIcon sx={{ fontSize: 40 }} />,
  }
];

export default function Solutions() {
  return (
    <Box id="solutions" sx={{ py: 15, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Side: Bold Heading */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
                THE TGM ADVANTAGE
              </Typography>
              <Typography variant="h2" fontWeight={900} sx={{ lineHeight: 1.1, color: 'white' }}>
                Why Industry Leaders <span style={{ color: '#d4af37' }}>Choose Us</span>
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We combine global reach with local expertise to provide a trading experience that is seamless, secure, and superior.
              </Typography>
            </Stack>
          </Grid>

          {/* Right Side: Reason Cards */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {reasons.map((reason, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      bgcolor: 'rgba(255, 255, 255, 0.04)', // Slightly more visible base
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        borderColor: '#d4af37', // Use explicit Gold color
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                      }
                    }}
                  >
                    <Box sx={{ color: '#d4af37', mb: 2 }}> {/* Gold Icons */}
                      {reason.icon}
                    </Box>
                    
                    {/* Explicitly White Title for Maximum Readability */}
                    <Typography 
                      variant="h6" 
                      fontWeight="900" 
                      gutterBottom 
                      sx={{ color: '#ffffff', letterSpacing: '0.5px' }}
                    >
                      {reason.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                      {reason.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}