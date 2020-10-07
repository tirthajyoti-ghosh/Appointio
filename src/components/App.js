/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Dashboard from './Dashboard';
import Appointments from './Appointments';
import Types from './Types';
import Apartments from './Apartments';
import ApartmentDetails from './ApartmentDetails';
import ApartmentsByType from './ApartmentsByType';

const App = () => {
  const initialState = {
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  };

  const [state, setState] = useState(initialState);

  const checkLoggedInStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && state.loggedInStatus === 'NOT_LOGGED_IN') {
          setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
        } else if (!response.data.logged_in && state.loggedInStatus === 'LOGGED_IN') {
          setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {},
          });
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const handleLogin = data => {
    setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  };

  const handleLogout = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} handleLogin={handleLogin} handleLogout={handleLogout} loggedInStatus={state.loggedInStatus} />} />
        <Route exact path="/dashboard" render={props => <Dashboard {...props} loggedInStatus={state.loggedInStatus} />} />
        <Route exact path="/appointments" render={props => <Appointments {...props} user={state.user} />} />
        <Route exact path="/types" render={props => <Types {...props} user={state.user} />} />
        <Route exact path="/types/:typeId/:typeName" render={props => <ApartmentsByType {...props} user={state.user} />} />
        <Route exact path="/apartments" render={props => <Apartments {...props} user={state.user} />} />
        <Route exact path="/apartment/:apartmentId" render={props => <ApartmentDetails {...props} user={state.user} />} />
      </Switch>
    </Router>
  );
};

export default App;
