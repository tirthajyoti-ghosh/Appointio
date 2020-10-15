import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './styles/reset.css';
import './styles/index.css';
import './styles/style.sass';

import App from './components/App';

import reducer from './store/reducers/index';

const initialState = {
  apartments: [],
  apartmentDetails: {},
  apartmentsByType: [],
  types: [],
  appointments: [],
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
