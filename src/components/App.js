/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  const initialState = {
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  };

  const [state, setState] = useState(initialState);

  const handleLogin = data => {
    setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} handleLogin={handleLogin} loggedInStatus={state.loggedInStatus} />} />
        <Route exact path="/dashboard" render={props => <Dashboard {...props} loggedInStatus={state.loggedInStatus} />} />
      </Switch>
    </Router>
  );
};

export default App;
