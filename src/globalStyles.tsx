import { createGlobalStyle } from "styled-components";

export const globalTheme = {
  gray100: '#F2F2F2',
  gray200: '#D9D9D9',
  gray300: '#808080',
  gray350: '#454545',
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

export const GlobalStyle = createGlobalStyle`
  button, input, body, html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
  }

  body {
    background: #1A1A1A;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`