import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FuturaTheme } from 'assets/styles/FuturaTheme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={FuturaTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
