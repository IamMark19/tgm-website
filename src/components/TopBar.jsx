import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

export default function TopBar() {
  return (
    <Box id='home' sx={{ bgcolor: 'primary.main', color: 'white', py: 1, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="xl">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={1}>
          <Typography variant="caption">SEC Reg No: 2023090117463-06 | BIR TIN: 671-292-736-000</Typography>
          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Phone sx={{ fontSize: 14, color: 'secondary.main' }} />
              <Typography variant="caption">+63 920 964 6468</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Email sx={{ fontSize: 14, color: 'secondary.main' }} />
              <Typography variant="caption">thirdygoldenmaster@gmail.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <LocationOn sx={{ fontSize: 14, color: 'secondary.main' }} />
              <Typography variant="caption">Mandaluyong City, PH</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}