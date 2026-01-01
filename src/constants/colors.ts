/**
 * Centralized color palette for the application
 * All colors should be defined here and referenced throughout the codebase
 */
export const colors = {
  // Primary brand colors
  primary: {
    blue: '#007AFF',
    blueLight: '#006FE8',
  },
  
  // Text colors
  text: {
    primary: '#0C0C0D',
    secondary: '#000000',
  },
  
  // Background colors
  background: {
    white: '#ffffff',
    lightBlue: 'rgba(232,244,255,0.95)',
  },
  
  // Utility colors
  utility: {
    black: '#000000',
    white: '#ffffff',
  },
} as const;

