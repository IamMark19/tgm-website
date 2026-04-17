import React from 'react';
import { Box, Container, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

export default function TopBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      id='home' 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: { xs: 1.5, md: 1 }, // Slightly more padding on mobile for "breathability"
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 1101 
      }}
    >
      <Container maxWidth="xl">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" // Keeps items centered on mobile
          spacing={{ xs: 1.5, md: 0 }} // Adds space between the two stacks on mobile
        >
          {/* --- LEGAL INFO --- */}
          <Typography 
            variant="caption" 
            sx={{ 
              opacity: 0.9, 
              fontSize: { xs: '0.65rem', sm: '0.75rem' }, 
              textAlign: 'center',
              letterSpacing: 0.5
            }}
          >
            SEC Reg No: 2023090117463-06 <Box component="span" sx={{ mx: 1, opacity: 0.5 }}>|</Box> BIR TIN: 671-292-736-000
          </Typography>

          {/* --- CONTACT INFO --- */}
          <Stack 
            direction="row" 
            spacing={{ xs: 2, sm: 3 }} 
            justifyContent="center"
            sx={{ 
              flexWrap: 'wrap', // Vital: allows items to drop to next line if screen is tiny
              rowGap: 1 // Adds space between wrapped lines
            }}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Phone sx={{ fontSize: 14, color: 'secondary.main' }} />
              <Typography variant="caption" sx={{ fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                +63 920 964 6468
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Email sx={{ fontSize: 14, color: 'secondary.main' }} />
              <Typography variant="caption" sx={{ fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                thirdygoldenmaster@gmail.com
              </Typography>
            </Stack>

            {/* Hidden on very small phones to keep it clean, or keep it centered */}
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <LocationOn sx={{ fontSize: 14, color: 'secondary.main' }} />
              <Typography variant="caption" sx={{ fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                Mandaluyong City
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}