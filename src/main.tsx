import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/theme.ts';

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
);
