import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, IconButton, 
  Drawer, List, ListItem, ListItemText 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Email as EmailIcon 
} from '@mui/icons-material';

const navItems = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT US', id: 'about-us' },
  { name: 'CLIENTS', id: 'clients' },
  { name: 'CORE ACTIVITY', id: 'core-activities' },
  { name: 'PRODUCTS', id: 'products' },
  { name: 'WHY CHOOSE US', id: 'solutions' },
  { name: 'CONTACT US', id: 'footer' }
];

const WEBMAIL_URL = "https://webmail.thirdygoldenmaster.com/";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false); 
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black', boxShadow: 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* --- LOGO SECTION --- */}
            <Box 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
            >
              <Box
                component="img"
                src="/company-logo.jpg" 
                alt="Thirdy Golden Master Logo"
                sx={{ 
                  height: { xs: 40, md: 50 }, 
                  width: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    lineHeight: 1, 
                    color: 'primary.main', 
                    fontWeight: 900,
                    fontSize: { xs: '0.9rem', md: '1.25rem' },
                    letterSpacing: '-0.5px'
                  }}
                >
                  THIRDY GOLDEN MASTER
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'secondary.main', 
                    fontWeight: 700, 
                    display: { xs: 'none', sm: 'block' },
                    letterSpacing: 1
                  }}
                >
                  TRADING INC.
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav Links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2.5 }}>
              {navItems.map((item) => (
                <Typography 
                  key={item.name} 
                  variant="body2" 
                  onClick={() => handleScroll(item.id)}
                  sx={{ 
                    cursor: 'pointer', 
                    fontWeight: 800, 
                    fontSize: '0.7rem',
                    color: 'primary.main',
                    '&:hover': { color: 'secondary.main' },
                    transition: '0.2s'
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Webmail Button - Desktop */}
              <Button 
                component="a"
                href={WEBMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined" 
                size="small"
                startIcon={<EmailIcon />}
                sx={{ 
                  fontWeight: '800', 
                  display: { xs: 'none', md: 'inline-flex' },
                  borderRadius: 1.5,
                  fontSize: '0.7rem',
                  px: 2
                }}
              >
                WEBMAIL
              </Button>

              <IconButton 
                onClick={handleDrawerToggle}
                sx={{ display: { xs: 'inline-flex', lg: 'none' }, ml: 1, color: 'primary.main' }}
              >
                <MenuIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: '280px', bgcolor: 'white' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Typography variant="subtitle1" fontWeight="900" color="primary.main">MENU</Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2, pt: 2 }}>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.name} 
              onClick={() => handleScroll(item.id)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ fontWeight: 800, fontSize: '0.8rem', color: 'primary.main' }} 
              />
            </ListItem>
          ))}
          
          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #eee' }}>
            <Button 
              fullWidth 
              component="a"
              href={WEBMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained" 
              color="primary" 
              startIcon={<EmailIcon />}
              sx={{ fontWeight: '800', py: 1, borderRadius: 2, fontSize: '0.8rem' }}
            >
              ACCESS WEBMAIL
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}