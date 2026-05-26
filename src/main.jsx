import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Create a custom premium light theme inspired by Paws & Paths
const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f9f9ff', // Soft sky neutral background
      paper: '#ffffff'    // Pure white card/paper surface
    },
    primary: {
      main: '#855300',    // Golden retriever warm accent
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#0058be',    // Sky walk blue
    },
    text: {
      primary: '#151c27',  // Deep charcoal for reading readability
      secondary: '#534434' // Soft clay brown
    },
    divider: '#d3daea'     // Light ambient container edge
  },
  typography: {
    fontFamily: [
      'Outfit',
      'Noto Serif KR',
      'serif'
    ].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    }
  },
  shape: {
    borderRadius: 12 // Smooth curves
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // rounded.lg matching
          padding: '8px 20px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(133, 83, 0, 0.15)',
          }
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 88, 190, 0.15)',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid #d3daea',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: '#855300',
            boxShadow: '0 12px 24px -10px rgba(133, 83, 0, 0.15)',
          }
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
