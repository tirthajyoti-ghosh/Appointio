import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from '../components/App';
import reducer from '../store/reducers/index';

const initialState = {
  apartments: [],
  apartmentDetails: {},
  apartmentsByType: [],
  types: [],
  appointments: [],
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

const TestApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default TestApp;
