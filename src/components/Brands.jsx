import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const brands = [
  { name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hikvision_logo.svg/1280px-Hikvision_logo.svg.png' },
  { name: 'Dahua', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dahua_Technology_logo.svg/1200px-Dahua_Technology_logo.svg.png' },
  { name: 'Honeywell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Honeywell_logo.svg/2560px-Honeywell_logo.svg.png' },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png' },
  { name: 'Axis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Axis_Communications_logo.svg/1200px-Axis_Communications_logo.svg.png' },
  { name: 'Samsung Wisenet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png' }
];

export default function Brands() {
  return (
    <Box sx={{ py: 6, bgcolor: '#f8f9fa', borderTop: '1px solid #eee' }}>
      <Container maxWidth="xl">
        <Typography variant="overline" align="center" display="block" sx={{ mb: 4, color: 'text.secondary', fontWeight: 'bold' }}>
          OUR STRATEGIC TECHNOLOGY PARTNERS
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {brands.map((brand) => (
            <Grid item xs={6} sm={4} md={2} key={brand.name}>
              <Box 
                component="img" 
                src={brand.logo} 
                alt={brand.name}
                sx={{ 
                  width: '100%', 
                  height: '40px', 
                  objectFit: 'contain', 
                  filter: 'grayscale(100%)', 
                  opacity: 0.6,
                  transition: '0.3s',
                  '&:hover': { filter: 'grayscale(0%)', opacity: 1 }
                }} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}