import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  spacing: (factor: number) => `${factor * 0.8}rem`,
  palette: {
    primary: {
      main: '#639A30',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    // fontSize: 10,
    h1: {
      fontSize: '6rem', // Equivalent to 25px..
    },
  },
});

export default theme;
