import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './redux';

// Wrap existing app in Provider - Step 2
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
