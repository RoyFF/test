import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Store from './Store';
import { Provider } from 'react-redux';
import { loadProducts } from './ActionCreators';

Store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
