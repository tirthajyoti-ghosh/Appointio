import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';

import App from './components/App';

import reducer from './store/reducers/index';

const initialState = {
  apartments: [],
  apartmentsByType: [],
  apartmentDetails: {},
  appointments: [],
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
