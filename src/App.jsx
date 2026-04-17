import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreActivities from './components/CoreActivities';
import Categories from './components/Categories';

import Solutions from './components/Solutions';
// import Projects from './components/Projects';   // Added
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <Navbar />
        <Hero />
        <Clients />
        <About />
        <CoreActivities />
        <Categories />
        <Solutions />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;