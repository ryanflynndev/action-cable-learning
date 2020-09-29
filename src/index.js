import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ActionCableProvider } from 'react-actioncable-provider';
import {BrowserRouter} from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#2196f3' },
    secondary: {
      main: '#e3f2fd'
    }
  }
})


ReactDOM.render(
  <ActionCableProvider url='ws://localhost:3000/cable'>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </ActionCableProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
