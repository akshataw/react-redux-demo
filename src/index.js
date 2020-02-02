import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);
