import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Card, CardContent, Chip, Stack,
  Dialog, DialogTitle, DialogContent, IconButton, Button, List, ListItem, 
  ListItemIcon, ListItemText, Avatar, Divider 
} from '@mui/material';
import { 
  Security, SettingsInputComponent, PrecisionManufacturing, Window,
  Inventory, Close as CloseIcon, CheckCircle as CheckIcon, ArrowForward as ArrowIcon 
} from '@mui/icons-material';

const productData = [
  {
    id: 'security',
    category: 'Security & Surveillance',
    icon: <Security sx={{ fontSize: 40 }} />,
    shortDesc: 'X-ray Baggage Scanners, Metal Detectors, and CCTV.',
    details: 'Globally certified security solutions for high-traffic environments. We offer both Sales and Rental options for scanning equipment.',
    items: [
      { name: 'X-ray Baggage Scanners', specs: 'Sales & Rental available', img: 'https://images.unsplash.com/photo-1590402444811-bfee29d1df67?auto=format&fit=crop&q=80&w=300' },
      { name: 'Walk-Through Metal Detectors', specs: '33-zone high sensitivity', img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=300' },
      { name: 'CCTV & Body-Worn Cameras', specs: '4K IP & EIS stabilized', img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=300' },
      { name: 'Perimeter Access Control', specs: 'Biometric & Gate solutions', img: 'https://images.unsplash.com/photo-1510511459019-5dee211c6fe2?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: 'ict',
    category: 'ICT & Electronics',
    icon: <SettingsInputComponent sx={{ fontSize: 40 }} />,
    shortDesc: 'Networking, Smart City, and Server Solutions.',
    details: 'Enterprise-grade ICT infrastructure and digital solutions designed to modernize Philippine organizations.',
    items: [
      { name: 'Smart City & Traffic Systems', specs: 'IoT & Transport solutions', img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=300' },
      { name: 'Networking & Infrastructure', specs: 'Switches, Fiber, & Wireless', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=300' },
      { name: 'Servers & Storage Systems', specs: 'Data management & Software', img: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: 'industrial',
    category: 'Industrial & Engineering',
    icon: <PrecisionManufacturing sx={{ fontSize: 40 }} />,
    shortDesc: 'Testing, Calibration, and Safety Equipment.',
    details: 'Supporting the engineering sector with high-quality diagnostic instruments and ISO-compliant safety gear.',
    items: [
      { name: 'Testing & Calibration Tools', specs: 'Precision measuring instruments', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300' },
      { name: 'Industrial Safety Devices', specs: 'Protective gear & PPE', img: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Engineering Equipment', specs: 'Meters & industrial tools', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: 'general',
    category: 'General Trading Supplies',
    icon: <Inventory sx={{ fontSize: 40 }} />,
    shortDesc: 'Office Equipment, Consumables, and Tools.',
    details: 'A reliable source for essential facility equipment and building materials for various industries.',
    items: [
      { name: 'Office & Facility Equipment', specs: 'Corporate supplies & furniture', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300' },
      { name: 'Consumables & Tools', specs: 'General facility consumables', img: 'https://images.unsplash.com/photo-1530124560676-4fbc91848b9b?auto=format&fit=crop&q=80&w=300' },
      { name: 'Construction Supplies', specs: 'Standard building materials', img: 'https://images.unsplash.com/photo-1503387762-5929c69d3978?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: 'aluminum',
    category: 'Aluminum & Glass Works',
    icon: <Window sx={{ fontSize: 40 }} />,
    shortDesc: 'Fabrication, Installation, and Architectural Metal.',
    details: 'Custom industrial and commercial aluminum solutions ranging from frames to tempered glass works.',
    items: [
      { name: 'Aluminum Fabrication', specs: 'Frames & structural solutions', img: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=300' },
      { name: 'Tempered Glass Works', specs: 'Safety-rated & Laminated', img: 'https://images.unsplash.com/photo-1503708995456-48317ca3c541?auto=format&fit=crop&q=80&w=300' },
      { name: 'Stainless Steel Railings', specs: 'Architectural metal works', img: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=300' }
    ]
  }
];

export default function Categories() {
  const [open, setOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const handleOpen = (category) => {
    setSelectedCat(category);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleInquiry = () => {
    handleClose();
    document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box id="products" sx={{ py: 15, bgcolor: '#f8fafd' }}>
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
            PRODUCT PORTFOLIO
          </Typography>
          <Typography variant="h3" fontWeight={900} color="primary.main">
            Specialized Solutions
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', borderRadius: 2 }} />
        </Stack>

        <Grid container spacing={3} justifyContent="center">
          {productData.map((cat) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={cat.id} sx={{ display: 'flex' }}>
              <Card 
                onClick={() => handleOpen(cat)}
                sx={{ 
                  width: '100%', cursor: 'pointer', borderRadius: 5, border: '1px solid #eef2f6',
                  transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { transform: 'translateY(-10px)', borderColor: 'secondary.main', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ bgcolor: 'primary.main', color: 'secondary.main', p: 2, borderRadius: 3, mb: 3, display: 'flex' }}>
                    {cat.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: 'primary.main' }}>{cat.category}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.9rem' }}>{cat.shortDesc}</Typography>
                  <Chip 
                    label="View Items" 
                    icon={<ArrowIcon style={{ fontSize: '1rem' }} />} 
                    sx={{ fontWeight: 'bold', cursor: 'pointer', px: 1 }} 
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog 
          open={open} 
          onClose={handleClose} 
          fullWidth 
          maxWidth="sm"
          PaperProps={{ sx: { borderRadius: 5, p: 1 } }}
        >
          {selectedCat && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 3 }}>
                <Typography variant="h5" fontWeight="900" color="primary.main">{selectedCat.category}</Typography>
                <IconButton onClick={handleClose}><CloseIcon /></IconButton>
              </DialogTitle>
              
              <DialogContent dividers sx={{ py: 3 }}>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>{selectedCat.details}</Typography>
                
                <List disablePadding>
                  {selectedCat.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 2 }}>
                      <ListItemIcon>
                        <Avatar 
                          variant="rounded" 
                          src={item.img} 
                          sx={{ width: 70, height: 70, mr: 2, border: '1px solid #eee', bgcolor: '#f0f0f0' }}
                        >
                          <CheckIcon color="disabled" />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography fontWeight="900" color="primary.main">{item.name}</Typography>} 
                        secondary={item.specs} 
                      />
                    </ListItem>
                  ))}
                </List>

                <Button 
                  fullWidth variant="contained" size="large" sx={{ mt: 4, py: 2, borderRadius: 3, fontWeight: 'bold' }}
                  onClick={handleInquiry}
                >
                  REQUEST QUOTATION
                </Button>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}