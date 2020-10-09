/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Appointments from '../containers/Appointments';
import Types from '../containers/Types';
import Apartments from '../containers/Apartments';
import ApartmentDetails from '../containers/ApartmentDetails';
import ApartmentsByType from '../containers/ApartmentsByType';
import Login from '../containers/auth/Login';
import Registrations from '../containers/auth/Registrations';
import Logout from '../containers/Logout';

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

  return (
    <>
      <Logout />
      <Router>
        <Switch>
          <Route exact path="/appointments" render={props => <Appointments {...props} user={state.user} />} />
          <Route exact path="/types" render={props => <Types {...props} user={state.user} />} />
          <Route exact path="/types/:typeId/:typeName" render={props => <ApartmentsByType {...props} user={state.user} />} />
          <Route exact path="/" render={props => <Apartments {...props} user={state.user} />} />
          <Route exact path="/apartments/:apartmentId" render={props => <ApartmentDetails {...props} user={state.user} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registrations} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
