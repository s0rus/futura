import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FuturaTheme } from 'assets/styles/FuturaTheme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { FirestoreProvider } from './FirestoreProvider';
import { AuthProvider } from './AuthProvider';

export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={FuturaTheme}>
      <GlobalStyle />
      <AuthProvider>
        <FirestoreProvider>{children}</FirestoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
