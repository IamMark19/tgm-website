import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#0a192f' }, // Deep Navy
    secondary: { main: '#d4af37' }, // Gold accent for "Golden Master"
    background: { default: '#ffffff', paper: '#f4f7f9' },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700 },
  },
});

export default theme;