import React from 'react';
import { Box, Container, Typography, Button, Grid, Stack, Paper } from '@mui/material';
import { ArrowForward, Verified, GppGood, Engineering } from '@mui/icons-material';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{
      position: 'relative',
      minHeight: { xs: 'auto', md: '90vh' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
      py: { xs: 10, md: 0 },
      background: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070') center/cover no-repeat`,
    }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
              ESTABLISHED 2023 | TRUSTED TRADING PARTNER
            </Typography>
            <Typography variant="h2" sx={{ my: 2, fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Global Standards. <br />
              <span style={{ color: '#d4af37' }}>Local Excellence.</span>
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, maxWidth: '600px', lineHeight: 1.6 }}>
              Thirdy Golden Master Trading Inc. delivers end-to-end procurement, logistics, and technical solutions for government and private sectors.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 8 }}>
              {/* Jumps to Categories Section */}
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                endIcon={<ArrowForward />}
                onClick={() => scrollToSection('products')}
                sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
              >
                OUR PRODUCTS
              </Button>

              {/* Jumps to Contact Section */}
              <Button 
                variant="outlined" 
                onClick={() => scrollToSection('contact-us')}
                sx={{ 
                  color: 'white', 
                  borderColor: 'white', 
                  px: 4, 
                  py: 1.5, 
                  fontWeight: 'bold',
                  '&:hover': { borderColor: '#d4af37', color: '#d4af37' }
                }}
              >
                GET A QUOTE
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* --- HIGHLIGHT BOXES --- */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {[
            { icon: <Verified color="secondary" />, title: "Certified Sourcing", text: "ISO & Global Standards" },
            { icon: <GppGood color="secondary" />, title: "Secure Logistics", text: "Nationwide Distribution" },
            { icon: <Engineering color="secondary" />, title: "Technical Support", text: "Installation & Maintenance" }
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3, 
                  bgcolor: 'rgba(255, 255, 255, 0.05)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: 'white'
                }}
              >
                <Box sx={{ display: 'flex' }}>{item.icon}</Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>{item.text}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}