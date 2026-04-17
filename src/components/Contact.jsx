import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, TextField, Button, 
  Stack, Paper, Avatar, useMediaQuery, useTheme, Alert, Zoom
} from '@mui/material';
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon, 
  LocationOn as LocationOnIcon,
  Send as SendIcon,
  Download as DownloadIcon,
  VerifiedUser as SafeIcon
} from '@mui/icons-material';

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <Box id="quotation" sx={{ py: { xs: 8, md: 15 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg"> {/* Using "lg" instead of "xl" to keep the full-width fields from getting TOO wide on giant monitors */}
        
        {/* --- HEADER SECTION --- */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 3, color: '#d4af37' }}>
            CONNECT WITH TGM
          </Typography>
          <Typography variant="h2" fontWeight={900} color="primary.main" sx={{ mt: 1, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            Official <span style={{ color: '#d4af37' }}>Quotations</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: '600px', mx: 'auto' }}>
            Submit your procurement requirements below. Our sales team will generate your formal quotation within one business day.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          
          {/* --- LEFT: BIG CONTACT CARDS --- */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              <ContactCard icon={<LocationOnIcon />} title="Office Address" detail="276-D Dansalan St., Mandaluyong City" />
              <ContactCard icon={<PhoneIcon />} title="Direct Hotline" detail="+63 920 964 6468" />
              <ContactCard icon={<EmailIcon />} title="Official Email" detail="sales@thirdygoldenmaster.com" />
              
              <Box sx={{ height: '300px', width: '100%', borderRadius: 4, overflow: 'hidden', border: '1px solid #e2e8f0', mt: 2 }}>
                <iframe
                  title="TGM Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.432857508494!2d121.0375!3d14.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83555555555%3A0x5555555555555555!2sDansalan%20St%2C%20Mandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                />
              </Box>
            </Stack>
          </Grid>

          {/* --- RIGHT: FULL WIDTH SINGLE COLUMN FORM --- */}
          <Grid item xs={12} lg={8}>
            <Zoom in={submitted}>
              <Box sx={{ display: submitted ? 'block' : 'none' }}>
                <Alert severity="success" variant="filled" sx={{ mb: 4, borderRadius: 2, fontWeight: 700 }}>
                  Form Submitted! We will get back to you shortly.
                </Alert>
              </Box>
            </Zoom>

            <Paper elevation={0} sx={{ 
              p: { xs: 3, md: 6 }, 
              borderRadius: 6, 
              boxShadow: '0 40px 100px -20px rgba(0,0,0,0.08)',
              border: '1px solid #eef2f6'
            }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}> {/* Spacing between each full-width row */}
                  
                  <CustomField 
                    label="Full Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter your complete name"
                  />

                  <CustomField 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter your corporate email"
                  />

                  <CustomField 
                    label="Subject / Project Name" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="e.g. Bulk Computer Procurement 2024"
                  />

                  <CustomField 
                    label="Specifications & Quantities" 
                    name="message" 
                    multiline 
                    rows={6} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Please list all items, brands, and quantities needed for your quotation..."
                  />

                  <Box sx={{ pt: 2 }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{ 
                        py: 3, 
                        borderRadius: 3, 
                        fontWeight: 900, 
                        fontSize: '1.1rem',
                        background: 'linear-gradient(45deg, #0a192f 30%, #112240 90%)',
                        boxShadow: '0 15px 30px rgba(10, 25, 47, 0.3)',
                        '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 20px 40px rgba(10, 25, 47, 0.4)' },
                        transition: 'all 0.3s'
                      }}
                    >
                      REQUEST FORMAL QUOTATION
                    </Button>
                    
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 4, opacity: 0.5 }}>
                      <SafeIcon sx={{ fontSize: 18, color: '#d4af37' }} />
                      <Typography variant="caption" fontWeight={800} sx={{ letterSpacing: 1 }}>
                        OFFICIAL TGM TRADING PROCUREMENT CHANNEL
                      </Typography>
                    </Stack>
                  </Box>

                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Sub-component for Info
function ContactCard({ icon, title, detail }) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 4, borderColor: '#e2e8f0', bgcolor: 'white' }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ bgcolor: 'rgba(212, 175, 55, 0.1)', color: '#d4af37' }}>{icon}</Avatar>
        <Box>
          <Typography variant="caption" fontWeight={800} color="text.secondary">{title.toUpperCase()}</Typography>
          <Typography variant="body1" fontWeight={700} color="primary.main">{detail}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

// Sub-component for Full-Width Fields
function CustomField(props) {
  return (
    <Box>
      <Typography variant="subtitle2" fontWeight={900} sx={{ mb: 1.5, ml: 1, color: '#1e293b', fontSize: '0.85rem' }}>
        {props.label.toUpperCase()}
      </Typography>
      <TextField 
        {...props} 
        label="" 
        variant="outlined" 
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: '#ffffff',
            borderRadius: '12px',
            fontSize: '1.05rem',
            '& fieldset': { borderColor: '#cbd5e1', borderWidth: '1px' },
            '&:hover fieldset': { borderColor: '#d4af37' },
            '&.Mui-focused fieldset': { borderColor: '#d4af37', borderWidth: '2px' },
          },
          '& .MuiInputBase-input::placeholder': {
            opacity: 0.5,
            fontSize: '0.9rem'
          }
        }}
      />
    </Box>
  );
}