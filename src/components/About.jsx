import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider } from '@mui/material';
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
  { 
    icon: <IntegrityIcon />, 
    title: 'Integrity', 
    desc: 'Ethical and transparent business practices.' 
  },
  { 
    icon: <ExcellenceIcon />, 
    title: 'Excellence', 
    desc: 'Commitment to continuous improvement.' 
  },
  { 
    icon: <ReliabilityIcon />, 
    title: 'Reliability', 
    desc: 'Delivering on time and exceeding expectations.' 
  },
  { 
    icon: <CustomerFocusIcon />, 
    title: 'Customer Focus', 
    desc: 'Building long-term partnerships.' 
  },
  { 
    icon: <InnovationIcon />, 
    title: 'Innovation', 
    desc: 'Adopting new technologies and better solutions.' 
  },
];

export default function About() {
  return (
    <Box id="about-us" sx={{ py: 15, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        
        {/* --- HEADER SECTION --- */}
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
            ESTABLISHED 2023
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: 'primary.main', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Your Dynamic Partner in <span style={{ color: '#d4af37' }}>Philippine Trading</span>
          </Typography>
          <Box sx={{ width: 80, height: 5, bgcolor: 'secondary.main', borderRadius: 2, mb: 2 }} />
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: '800px', fontSize: '1.1rem' }}>
            Thirdy Golden Master Trading Inc. is a rapidly expanding solutions provider supporting both government and private organizations. 
            We specialize in sourcing globally certified products—from procurement and logistics to installation and after-sales support.
          </Typography>
        </Stack>

        {/* --- MISSION & VISION CARDS --- */}
        <Grid container spacing={4} sx={{ mb: 12 }} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 5, 
                textAlign: 'center', 
                bgcolor: '#f8f9fa', 
                borderRadius: 6, 
                height: '100%',
                border: '1px solid #eee',
                transition: '0.3s',
                '&:hover': { bgcolor: '#f0f2f5' }
              }}
            >
              <VisionIcon color="secondary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h4" fontWeight="900" gutterBottom color="primary.main">Our Vision</Typography>
              <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                To be the most trusted and respected trading company in the Philippines, 
                known for bringing global innovation and operational excellence to our local partners.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 5, 
                textAlign: 'center', 
                bgcolor: '#f8f9fa', 
                borderRadius: 6, 
                height: '100%',
                border: '1px solid #eee',
                transition: '0.3s',
                '&:hover': { bgcolor: '#f0f2f5' }
              }}
            >
              <MissionIcon color="secondary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h4" fontWeight="900" gutterBottom color="primary.main">Our Mission</Typography>
              <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                To deliver high-quality, competitively priced products tailored to meet strict 
                international standards while ensuring seamless logistics and technical support.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* --- CORE VALUES PILLARS --- */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h3" fontWeight="900" color="primary.main" sx={{ mb: 2 }}>
            The Five Pillars of TGM
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
            Our values define our commitment to our clients and our country.
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: '30px',
                    bgcolor: '#ffffff',
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'default',
                    '&:hover': {
                      transform: 'translateY(-15px)',
                      boxShadow: '0 30px 60px rgba(10, 25, 47, 0.1)',
                      borderColor: 'secondary.main',
                      '& .icon-box': {
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                        transform: 'rotateY(360deg)'
                      }
                    }
                  }}
                >
                  <Box 
                    className="icon-box"
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '22px', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.6s ease',
                      boxShadow: '0 10px 20px rgba(10, 25, 47, 0.2)'
                    }}
                  >
                    {React.cloneElement(value.icon, { sx: { fontSize: 40 } })}
                  </Box>

                  <Typography variant="h6" fontWeight="800" gutterBottom color="primary.main">
                    {value.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, px: 1 }}>
                    {value.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- LEGAL COMPLIANCE BAR --- */}
        <Box sx={{ textAlign: 'center' }}>
            <Divider sx={{ mb: 5, width: '100%', opacity: 0.6 }} />
            <Box sx={{ 
              display: 'inline-block',
              px: { xs: 3, md: 6 },
              py: 3, 
              bgcolor: 'primary.main', 
              borderRadius: '20px', 
              color: 'white',
              boxShadow: '0 15px 35px rgba(10, 25, 47, 0.25)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <Typography variant="overline" sx={{ opacity: 0.8, fontWeight: 700, display: 'block', mb: 1, letterSpacing: 2 }}>
                OFFICIAL CORPORATE DATA
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                SEC Registry No: <span style={{ color: '#d4af37' }}>2023090117463-06</span> 
                <span style={{ margin: '0 20px', opacity: 0.3 }}>|</span> 
                BIR TIN: <span style={{ color: '#d4af37' }}>671-292-736-00000</span>
              </Typography>
            </Box>
        </Box>

      </Container>
    </Box>
  );
}