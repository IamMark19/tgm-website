import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, useTheme } from '@mui/material';
import { 
  FileDownload, 
  BusinessCenter, 
  LocalShipping, 
  Construction, 
  Handyman 
} from '@mui/icons-material';

const activities = [
  {
    title: 'Importation & Supply',
    desc: 'Direct sourcing and importation of globally certified equipment and industrial materials.',
    icon: <FileDownload fontSize="large" />,
  },
  {
    title: 'Procurement Services',
    desc: 'Full-scale procurement support for government bidding (LGU/National) and private sector projects.',
    icon: <BusinessCenter fontSize="large" />,
  },
  {
    title: 'Logistics & Distribution',
    desc: 'Efficient warehousing and secure nationwide distribution across Luzon, Visayas, and Mindanao.',
    icon: <LocalShipping fontSize="large" />,
  },
  {
    title: 'Installation & Commissioning',
    desc: 'Professional technical setup, configuration, and formal testing of specialized systems.',
    icon: <Construction fontSize="large" />,
  },
  {
    title: 'After-Sales Maintenance',
    desc: 'Dedicated technical support and preventive maintenance to ensure equipment longevity.',
    icon: <Handyman fontSize="large" />,
  }
];

export default function CoreActivities() {
  const theme = useTheme();

  return (
    <Box id="core-activities" sx={{ py: 15, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        
        {/* Section Header */}
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 4 }}>
            OUR CAPABILITIES
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 2 }}>
            Core Business <span style={{ color: '#d4af37' }}>Activities</span>
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', borderRadius: 2 }} />
          <Typography variant="body1" sx={{ color: 'text.secondary', }}>
            Thirdy Golden Master provides a comprehensive end-to-end service model, managing the entire lifecycle of equipment supply and technical integration.
          </Typography>
        </Stack>

        {/* Activities Grid */}
        <Grid container spacing={3} justifyContent="center">
          {activities.map((activity, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  height: '100%',
                  borderRadius: 4,
                  bgcolor: '#f8fafd',
                  border: '1px solid #eef2f6',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    bgcolor: 'white',
                    transform: 'translateY(-12px)',
                    boxShadow: '0 25px 50px rgba(10, 25, 47, 0.1)',
                    borderColor: 'secondary.main',
                    '& .icon-circle': {
                      bgcolor: 'primary.main',
                      color: 'secondary.main',
                    }
                  }
                }}
              >
                {/* Number Indicator */}
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 900, mb: 2, opacity: 0.6 }}>
                  0{index + 1}
                </Typography>

                <Box 
                  className="icon-circle"
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'white', 
                    color: 'primary.main', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 4,
                    transition: '0.4s',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
                  }}
                >
                  {activity.icon}
                </Box>

                <Typography variant="h6" fontWeight="800" gutterBottom color="primary.main">
                  {activity.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {activity.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}