import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from '@src/styles';
import { store } from '@src/store';

import App from '@src/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
