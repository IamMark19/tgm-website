import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, TextField, Button, 
  Stack, Paper, IconButton, Avatar, Tooltip 
} from '@mui/material';
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon, 
  LocationOn as LocationOnIcon,
  Send as SendIcon,
  Download as DownloadIcon,
  ContactPage as CardIcon,
  QueryStats,
  Schedule
} from '@mui/icons-material';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Update this path to where your PDF is stored (usually in the public folder)
  const PDF_URL = "/TGM-Calling-Card.pdf"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to Thirdy Golden Master Trading Inc.");
  };

  return (
    <Box id="footer" sx={{ py: 15, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="flex-start">
          
          {/* --- LEFT SIDE: CONTACT INFO --- */}
          <Grid item xs={12} md={5}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
              GET IN TOUCH
            </Typography>
            <Typography variant="h3" fontWeight={900} color="primary.main" sx={{ mb: 2 }}>
              Ready to <span style={{ color: '#d4af37' }}>Partner?</span>
            </Typography>
            
            {/* DIGITAL CALLING CARD BUTTON */}
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                mb: 6, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 2, 
                bgcolor: 'rgba(212, 175, 55, 0.08)', 
                border: '1px dashed #d4af37',
                borderRadius: 4
              }}
            >
              <Avatar sx={{ bgcolor: '#d4af37' }}>
                <CardIcon />
              </Avatar>
              <Box sx={{ mr: 2 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary.main">
                  Digital Business Card
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Download for your records (PDF)
                </Typography>
              </Box>
             <Button 
                variant="contained" 
                color="primary" 
                size="small" 
                startIcon={<DownloadIcon />}
                // This ensures it looks at the root of wherever the site is hosted
                href={`${window.location.origin}/TGM-Calling-Card.pdf`}
                download="TGM_Business_Card.pdf"
                sx={{ borderRadius: 2, fontWeight: 'bold' }}
                >
                Download
                </Button>
            </Paper>

            <Stack spacing={4} sx={{ mb: 6 }}>
              <ContactInfo 
                icon={<LocationOnIcon />} 
                title="Office Address" 
                detail="276-D Dansalan St., Barangay Barangka Ilaya, Mandaluyong City" 
              />
              <ContactInfo 
                icon={<PhoneIcon />} 
                title="Direct Lines" 
                detail="+63 920 964 6468 | +63 917 516 6468" 
              />
              <ContactInfo 
                icon={<EmailIcon />} 
                title="Official Email" 
                detail="thirdygoldenmaster@gmail.com" 
              />
            </Stack>

            {/* Map Placeholder */}
            <Box sx={{ height: '280px', bgcolor: '#f0f4f8', borderRadius: 4, overflow: 'hidden' }}>
               <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.341484136423!2d121.0392!3d14.5765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83696886e3f%3A0x67394348633!2sDansalan%20St%2C%20Mandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          {/* --- RIGHT SIDE: FORM (With Premium Inputs) --- */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 8 }, 
                borderRadius: 8, 
                bgcolor: '#f8fafd', 
                border: '1px solid #eef2f6',
              }}
            >
              <Typography variant="h4" fontWeight="900" color="primary.main" sx={{ mb: 4 }}>
                Request a Quotation
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField fullWidth label="Full Name" required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField fullWidth label="Email Address" type="email" required />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField 
                      fullWidth 
                      label="Nature of Inquiry" 
                      placeholder="e.g. X-ray Scanner Rental, Aluminum Works..."
                      required 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField 
                      fullWidth 
                      label="Message" 
                      multiline 
                      rows={5} 
                      placeholder="Tell us about your requirements..."
                      required 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large" 
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{ 
                        py: 2, 
                        fontWeight: '900', 
                        borderRadius: 3,
                        boxShadow: '0 10px 20px rgba(10, 25, 47, 0.15)',
                      }}
                    >
                      SEND MESSAGE
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// --- HELPER COMPONENTS ---

function ContactInfo({ icon, title, detail }) {
  return (
    <Stack direction="row" spacing={3} alignItems="flex-start">
      <Avatar variant="rounded" sx={{ bgcolor: 'rgba(10, 25, 47, 0.05)', color: 'primary.main', width: 50, height: 50 }}>
        {icon}
      </Avatar>
      <Box>
        <Typography variant="subtitle1" fontWeight="900" color="primary.main">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{detail}</Typography>
      </Box>
    </Stack>
  );
}

function StyledTextField(props) {
  return (
    <TextField 
      {...props} 
      variant="outlined" 
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: 'white',
          borderRadius: 2,
          '& fieldset': { borderColor: '#eef2f6' },
          '&:hover fieldset': { borderColor: '#d4af37' },
          '&.Mui-focused fieldset': { borderColor: '#d4af37' },
        },
        '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' }
      }}
    />
  );
}