import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const globalTheme = {
  gray100: '#F2F2F2',
  gray200: '#D9D9D9',
  gray300: '#808080',
  gray400: '#333333',
  gray500: '#262626',
  gray600: '#1A1A1A',
  gray700: '#0D0D0D',
  purple: '#8284FA',
  purpleDark: '#5E60CE',
  blue: '#4EA8DE',
  blueDark: '#1E6F9F',
  danger: '#E25858'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
