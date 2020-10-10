import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Appointments from '../containers/Appointments';
import Types from '../containers/Types';
import Apartments from '../containers/Apartments';
import ApartmentDetails from '../containers/ApartmentDetails';
import ApartmentsByType from '../containers/ApartmentsByType';
import Login from '../containers/auth/Login';
import Registrations from '../containers/auth/Registrations';
import Logout from '../containers/Logout';
import Profile from '../containers/Profile';

const App = () => (
  <>
    <Profile />
    <Logout />
    <Router>
      <Switch>
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/types" component={Types} />
        <Route exact path="/types/:typeId/:typeName" component={ApartmentsByType} />
        <Route exact path="/" component={Apartments} />
        <Route exact path="/apartments/:apartmentId" component={ApartmentDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registrations} />
      </Switch>
    </Router>
  </>
);

export default App;
