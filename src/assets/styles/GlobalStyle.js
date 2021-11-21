import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after{
    box-sizing: inherit;
  } 

  body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    color: ${({ theme: { colors } }) => colors.primary};
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  a, button {
    font-family: inherit;
    font-size: inherit;
  }

  h1 {
    font-family: inherit;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  }

  h2, p {
    font-family: inherit;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  }

  ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.secondary};
    }
  }

`;
