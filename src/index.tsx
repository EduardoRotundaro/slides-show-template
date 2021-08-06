import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import './assets/sass/base.scss';

import { THEME } from './data/config';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
