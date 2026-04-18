import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Card, CardContent, Stack,
  Dialog, DialogTitle, DialogContent, IconButton, CardMedia,
  useTheme, useMediaQuery 
} from '@mui/material';
import { 
  Security, SettingsInputComponent, PrecisionManufacturing, Window,
  Inventory, Close as CloseIcon 
} from '@mui/icons-material';

const productData = [
  {
    id: 'security',
    category: 'Security & Surveillance',
    icon: <Security sx={{ fontSize: 40 }} />,
    shortDesc: 'X-ray Baggage Scanners, Metal Detectors, and CCTV Systems.',
    details: 'Globally certified security solutions for high-traffic environments. High-performance scanning and detection technology.',
    items: [
      { name: 'X-ray Baggage Scanners', specs: 'Dual-view / Single-view options', img: '/product/baggage-xray-machine.jpg' },
      { name: 'Walk-Through Metal Detectors', specs: '', img: '/product/walk-through-metal-detector.png' },
      { name: 'CCTV Systems', specs: '4K IP & Thermal Imaging', img: '/product/cctv-camera.jpg' },
      { name: 'Access Control Systems', specs: 'Biometric & RFID solutions', img: '/product/access-control.jpg' },
      { name: 'Body Worn Camera', specs: 'HD Video & Audio Recording', img: '/product/body-worn-camera.jpg' }
    ]
  },
  {
    id: 'ict',
    category: 'ICT & Electronics',
    icon: <SettingsInputComponent sx={{ fontSize: 40 }} />,
    shortDesc: 'Enterprise Networking, Smart City, and Server Solutions.',
    details: 'Modernizing infrastructure with high-speed networking and IoT integrations.',
    items: [
      { name: 'Smart City Systems', specs: 'IoT Traffic & Lighting', img: '/product/smart-city.jpg' },
      { name: 'Server Infrastructure', specs: 'High-density rack solutions', img: '/product/Enterprise-networking.jpg' }
    ]
  },
  {
    id: 'industrial',
    category: 'Industrial & Engineering',
    icon: <PrecisionManufacturing sx={{ fontSize: 40 }} />,
    shortDesc: 'Precision Testing, Calibration, and Industrial Safety Equipment.',
    details: 'Technical instruments for engineering and maintenance operations.',
    items: [
      { name: 'Industrial Equipment', specs: 'Calibration-ready tools', img: '/product/industrial-equipment.jpg' }
    ]
  },
  {
    id: 'aluminum',
    category: 'Aluminum & Glass Works',
    icon: <Window sx={{ fontSize: 40 }} />,
    shortDesc: 'Custom Fabrication, Architectural Metal, and Installation.',
    details: 'Premium aluminum and glass solutions for commercial structures.',
    items: [
      { name: 'Aluminum Fabrication', specs: 'Heavy-duty structural frames', img: '/product/aluminum-fabrication.jpg' },
      { name: 'Glass Installation', specs: 'High-performance glazing solutions', img: '/product/glass-works.jpg' }
    ]
  },
  {
    id: 'general',
    category: 'General Trading',
    icon: <Inventory sx={{ fontSize: 40 }} />,
    shortDesc: 'Facility Supplies, Corporate Equipment, and Tools.',
    details: 'One-stop sourcing for office and industrial facility requirements.',
    items: [
      { name: 'Office Furniture', specs: 'Desks, chairs, and workstations', img: '/product/office-furniture.jpg' },
      { name: 'Construction Materials', specs: 'Building supplies and equipment', img: '/product/Construction-Materials.jpg' },
      { name: 'Office Supplies', specs: 'Furniture, stationery, and more', img: '/product/office-supplies.jpg' }
    ]
  }
];

export default function Categories() {
  const [open, setOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (category) => {
    setSelectedCat(category);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f4f7fa' }}>
      <Container maxWidth="xl">
        
        <Stack spacing={1} alignItems="center" sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 3, color: '#d4af37' }}>
            TGM PORTFOLIO
          </Typography>
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight={900} color="primary.main">
            Our Core Categories
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#d4af37', borderRadius: 2, mt: 1 }} />
        </Stack>

        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {productData.map((cat) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={2.4} 
              key={cat.id} 
              sx={{ display: 'flex', justifyContent: 'center' }} 
            >
              <Card 
                onClick={() => handleOpen(cat)}
                sx={{ 
                  width: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  borderRadius: 5, 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid #eef2f6',
                  '&:hover': { 
                    transform: isMobile ? 'none' : 'translateY(-10px)', 
                    borderColor: '#d4af37',
                    boxShadow: '0 20px 40px rgba(10,25,47,0.1)'
                  }
                }}
              >
                <CardContent sx={{ 
                  p: 4, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  flexGrow: 1 
                }}>
                  <Box sx={{ 
                    bgcolor: 'primary.main', 
                    color: '#d4af37', 
                    width: 75, height: 75, 
                    borderRadius: 4, mb: 3,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {cat.icon}
                  </Box>
                  
                  <Typography variant="h6" fontWeight="900" sx={{ 
                    mb: 1.5, 
                    color: 'primary.main',
                    minHeight: '3.5rem',
                    display: 'flex', 
                    alignItems: 'center',
                    lineHeight: 1.2
                  }}>
                    {cat.category}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ 
                    flexGrow: 1,
                    fontSize: '0.95rem'
                  }}>
                    {cat.shortDesc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog 
          open={open} 
          onClose={handleClose} 
          fullWidth 
          maxWidth="md" 
          fullScreen={isMobile}
          PaperProps={{ sx: { borderRadius: isMobile ? 0 : 6 } }}
        >
          {selectedCat && (
            <>
              <DialogTitle sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                bgcolor: 'primary.main', 
                color: 'white',
                p: 3
              }}>
                <Typography variant="h6" fontWeight="900">{selectedCat.category}</Typography>
                <IconButton onClick={handleClose} sx={{ color: 'white' }}><CloseIcon /></IconButton>
              </DialogTitle>
              
              <DialogContent sx={{ p: { xs: 2, md: 5 }, bgcolor: '#fdfdfd' }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontWeight: 500 }}>
                  {selectedCat.details}
                </Typography>

                <Grid container spacing={3}>
                  {selectedCat.items.map((item, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                      <Card variant="outlined" sx={{ borderRadius: 4, overflow: 'hidden', height: '100%' }}>
                        <CardMedia
                          component="img"
                          height="240"
                          image={item.img}
                          alt={item.name}
                          sx={{ filter: 'brightness(0.95)' }}
                        />
                        <CardContent>
                          <Typography variant="h6" fontWeight="900" color="primary.main">{item.name}</Typography>
                          <Typography variant="body2" color="#d4af37" fontWeight="800" sx={{ letterSpacing: 0.5 }}>
                            {item.specs}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>

      </Container>
    </Box>
  );
}