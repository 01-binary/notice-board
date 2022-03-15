import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from '@src/styles';
import App from '@src/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
