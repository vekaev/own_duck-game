import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/core";
import App from './App';
import './style.scss';
import {theme} from "./utils/theme";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

