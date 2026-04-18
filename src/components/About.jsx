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
  { icon: <InnovationIcon />, title: 'Innovation', desc: 'Adopting new technologies and better solutions.' },
  { icon: <CustomerFocusIcon />, title: 'Customer Focus', desc: 'Building long-term partnerships.' }
];

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="about-us" sx={{ py: { xs: 8, md: 15 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        
        {/* --- HEADER SECTION --- */}
        <Stack spacing={2} alignItems="center" sx={{
          textAlign: 'center', mb: { xs: 6, md: 10 }, width: '100%'
        }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 3, display: 'block'}}>
            ESTABLISHED 2023
          </Typography>
          <Typography variant="h2" sx={{ 
            fontWeight: 900, 
            color: 'primary.main', 
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            mb: 2,
            px: { xs: 2, md: 0 },
            mx: 'auto',
            display: 'block'
          }}>
            Your Dynamic Partner in <span style={{ color: '#d4af37' }}>Philippine Trading</span>
          </Typography>
          <Box sx={{ width: 80, height: 5, bgcolor: 'secondary.main', borderRadius: 2, mb: 2, mx: 'auto' }} />
          <Typography variant="body1" sx={{ 
            color: 'text.secondary', 
            lineHeight: 1.8, 
            
            fontSize: { xs: '1rem', md: '1.1rem' },
            px: { xs: 2, md: 0 },
            mx: 'auto'
          }}>
            Thirdy Golden Master Trading Inc. is a rapidly expanding solutions provider supporting both government and private organizations. 
            We specialize in sourcing globally certified products—from procurement and logistics to installation and after-sales support.
          </Typography>
        </Stack>

        {/* --- MISSION & VISION CARDS --- */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 12 } }} justifyContent="center">
          {[
            { 
              icon: <VisionIcon color="secondary" sx={{ fontSize: 50, mb: 2 }} />, 
              title: 'Our Vision', 
              desc: 'To be the most trusted and respected trading company in the Philippines, known for bringing global innovation and operational excellence to our local partners.' 
            },
            { 
              icon: <MissionIcon color="secondary" sx={{ fontSize: 50, mb: 2 }} />, 
              title: 'Our Mission', 
              desc: 'To deliver high-quality, competitively priced products tailored to meet strict international standards while ensuring seamless logistics and technical support.' 
            }
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  textAlign: 'center', 
                  bgcolor: '#f8f9fa', 
                  borderRadius: 6, 
                  height: '100%',
                  border: '1px solid #eee',
                  transition: '0.3s',
                  '&:hover': { bgcolor: '#f0f2f5' }
                }}
              >
                {item.icon}
                <Typography variant="h4" fontWeight="900" gutterBottom color="primary.main" sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* --- CORE VALUES PILLARS --- */}
        {/* <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight="900" color="primary.main" sx={{ mb: 2 }}>
            The Five Pillars of TGM
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 4, md: 8 }, px: 2 }}>
            Our values define our commitment to our clients and our country.
          </Typography>
          
          <Grid container spacing={3} justifyContent="center" alignItems="stretch" > 
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index} sx={{ display: 'flex' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    width: '100%',
                    borderRadius: '30px',
                    bgcolor: '#ffffff',
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      transform: isMobile ? 'none' : 'translateY(-15px)',
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
                      width: 80, height: 80, borderRadius: '22px', 
                      bgcolor: 'primary.main', color: 'white', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 3, transition: 'all 0.6s ease',
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
        </Box> */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
  <Typography variant={isMobile ? "h4" : "h3"} fontWeight="900" color="primary.main" sx={{ mb: 2 }}>
    The Five Pillars of TGM
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 4, md: 8 }, px: 2 }}>
    Our values define our commitment to our clients and our country.
  </Typography>
  
  <Grid 
    container 
    spacing={3} 
    justifyContent="center" // Centers cards horizontally in the container
    alignItems="stretch" 
    sx={{ width: '100%', m: 0 }} 
  >
    {coreValues.map((value, index) => (
      <Grid 
        item 
        xs={12}   // Full width on mobile
        sm={6}    // Two per row on tablet
        md={4}    // Three per row on small desktop
        lg={2.4}  // Five per row on large desktop
        key={index} 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', // Centers the card within the grid space
          p: '12px !important' 
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: { xs: '320px', sm: '100%' }, // Keeps mobile cards from getting too wide
            borderRadius: '30px',
            bgcolor: '#ffffff',
            border: '1px solid #f0f0f0',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            '&:hover': {
              transform: isMobile ? 'none' : 'translateY(-15px)',
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
              width: 80, height: 80, borderRadius: '22px', 
              bgcolor: 'primary.main', color: 'white', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              mb: 3, transition: 'all 0.6s ease',
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
            width: { xs: '100%', md: 'auto' },
            px: { xs: 2, md: 6 },
            py: 3, 
            bgcolor: 'primary.main', 
            borderRadius: { xs: '12px', md: '20px' }, 
            color: 'white',
            boxShadow: '0 15px 35px rgba(10, 25, 47, 0.25)',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            <Typography variant="overline" sx={{ opacity: 0.8, fontWeight: 700, display: 'block', mb: 1, letterSpacing: 2 }}>
              OFFICIAL CORPORATE DATA
            </Typography>
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={{ xs: 1, md: 0 }} 
              alignItems="center" 
              justifyContent="center"
            >
              <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: 0.5 }}>
                SEC Registry No: <span style={{ color: '#d4af37' }}>2023090117463-06</span>
              </Typography>
              {!isMobile && <Box sx={{ mx: 2, opacity: 0.3 }}>|</Box>}
              <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: 0.5 }}>
                BIR TIN: <span style={{ color: '#d4af37' }}>671-292-736-00000</span>
              </Typography>
            </Stack>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}