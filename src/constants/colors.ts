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
  
  // Shadow colors
  shadow: {
    light: 'rgba(12,12,13,0.05)',
    medium: 'rgba(0,0,0,0.15)',
  },
  
  // Navigation colors
  navigation: {
    link: 'rgba(140, 151, 168, 1)',
    linkHover: '#000000',
  },
  
  // Layout background
  layout: {
    body: 'rgba(190,219,242,0.95)',
  },
  
  // Border colors
  border: {
    gray: '#6C788F',
  },
  
  // Link colors
  link: {
    dark: '#1D2026',
  },
  
} as const;

