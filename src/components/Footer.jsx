import React from 'react';
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box id="footer" sx={{ bgcolor: 'primary.main', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
              THIRDY GOLDEN MASTER TRADING INC.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 2, maxWidth: '400px' }}>
              Registered with SEC – Registry No.: 2023090117463-06. 
              Providing organizations with quality solutions that improve efficiency, security, and operational capability.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Head Office</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              276-D Dansalan St., Barangay Barangka Ilaya,<br />
              Mandaluyong City, Philippines
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Contact Support</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Hotlines: +63 920 964 6468 | +63 917 516 6468<br />
              Email: thirdygoldenmaster@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        <Typography variant="caption" align="center" display="block" sx={{ opacity: 0.5 }}>
          © {new Date().getFullYear()} Thirdy Golden Master Trading Inc. | All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}