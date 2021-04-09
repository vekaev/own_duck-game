import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#795548' },
    secondary: { main: '#cddc39' },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

