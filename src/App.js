import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Router from './Router/route';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}
export default App;
