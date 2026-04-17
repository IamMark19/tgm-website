import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider, useTheme, useMediaQuery } from '@mui/material';
import { 
  Flag as MissionIcon, 
  Visibility as VisionIcon,
  Handshake as IntegrityIcon,
  Star as ExcellenceIcon,
  Update as ReliabilityIcon,
  SupportAgent as CustomerFocusIcon,
  Lightbulb as InnovationIcon
} from '@mui/icons-material';

const coreValues = [
  { icon: <IntegrityIcon />, title: 'Integrity', desc: 'Ethical and transparent business practices.' },
  { icon: <ExcellenceIcon />, title: 'Excellence', desc: 'Commitment to continuous improvement.' },
  { icon: <ReliabilityIcon />, title: 'Reliability', desc: 'Delivering on time and exceeding expectations.' },
  { icon: <CustomerFocusIcon />, title: 'Customer Focus', desc: 'Building long-term partnerships.' },
  { icon: <InnovationIcon />, title: 'Innovation', desc: 'Adopting new technologies and better solutions.' },
];

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cardStyle = {
    p: { xs: 4, md: 5 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 6,
    border: '1px solid #eee',
    transition: 'all 0.4s ease',
    bgcolor: '#f8f9fa',
    width: '100%', // FORCE full width of grid item
    height: '100%', // FORCE uniform height in rows
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(10, 25, 47, 0.1)',
      borderColor: '#d4af37',
    }
  };

  return (
    <Box id="about-us" sx={{ py: { xs: 8, md: 15 }, bgcolor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        
        {/* --- HEADER --- */}
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
            ESTABLISHED 2023
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: 'primary.main', fontSize: { xs: '2.2rem', md: '3.5rem' }, px: 2 }}>
            Your Dynamic Partner in <span style={{ color: '#d4af37' }}>Philippine Trading</span>
          </Typography>
          <Box sx={{ width: 80, height: 5, bgcolor: 'secondary.main', borderRadius: 2 }} />
        </Stack>

        {/* --- MISSION & VISION --- */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 12 }, width: '100%', m: 0 }} alignItems="stretch">
          {[
            { icon: <VisionIcon />, title: 'Our Vision', desc: 'To be the most trusted and respected trading company in the Philippines.' },
            { icon: <MissionIcon />, title: 'Our Mission', desc: 'To deliver high-quality, competitively priced products tailored to meet standards.' }
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} key={idx} sx={{ display: 'flex', p: '12px !important' }}>
              <Paper elevation={0} sx={cardStyle}>
                <Box sx={{ width: 80, height: 80, borderRadius: '22px', bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  {React.cloneElement(item.icon, { sx: { fontSize: 40 } })}
                </Box>
                <Typography variant="h4" fontWeight="900" gutterBottom color="primary.main">{item.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* --- CORE VALUES (THE FIX IS HERE) --- */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight="900" color="primary.main" sx={{ mb: 6 }}>
            The Five Pillars of TGM
          </Typography>
          
          <Grid 
            container 
            spacing={3} 
            alignItems="stretch" 
            sx={{ width: '100%', m: 0 }} // Ensures container doesn't overflow or shrink
          >
            {coreValues.map((value, index) => (
              <Grid 
                item 
                xs={12} // Forces one card per row on mobile
                sm={6}  // Two cards on tablets
                lg={2.4} // Five cards on desktop
                key={index} 
                sx={{ 
                  display: 'flex', 
                  width: '100%', // FORCE grid item to occupy 100% width
                  p: '12px !important' // Standardizes spacing
                }}
              >
                <Paper elevation={0} sx={{ ...cardStyle, bgcolor: '#ffffff' }}>
                  <Box className="icon-box" sx={{ 
                    width: 80, height: 80, borderRadius: '22px', bgcolor: 'primary.main', color: 'white', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 
                  }}>
                    {React.cloneElement(value.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="h6" fontWeight="800" color="primary.main" sx={{ mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {value.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}