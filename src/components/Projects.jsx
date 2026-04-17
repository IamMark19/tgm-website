import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent , Stack} from '@mui/material';

const projects = [
  { title: 'Commercial Mall Security', location: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=600' },
  { title: 'Industrial Warehouse CCTV', location: 'Abu Dhabi, UAE', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600' },
  { title: 'Residential Luxury Villa', location: 'Laguna, PH', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600' },
];

export default function Projects() {
  return (
    <Box  id="projects"sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 6 }}>
          <Box>
            <Typography variant="h4" fontWeight="bold">Recent Projects</Typography>
            <Typography variant="body1" color="text.secondary">Proven track record of success across various industries.</Typography>
          </Box>
        </Stack>
        <Grid container spacing={3}>
          {projects.map((proj, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ borderRadius: 2, overflow: 'hidden', '&:hover img': { transform: 'scale(1.05)' } }}>
                <Box sx={{ overflow: 'hidden' }}>
                  <CardMedia 
                    component="img" 
                    height="250" 
                    image={proj.img} 
                    sx={{ transition: '0.5s ease-in-out' }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">{proj.title}</Typography>
                  <Typography variant="caption" color="primary">{proj.location}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}