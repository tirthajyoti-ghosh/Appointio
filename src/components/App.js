import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Appointments from '../containers/Appointments';
import Apartments from '../containers/Apartments';
import ApartmentDetails from '../containers/ApartmentDetails';
import ApartmentsByType from '../containers/ApartmentsByType';
import Login from '../containers/auth/Login';
import Registrations from '../containers/auth/Registrations';
import SideNav from '../containers/Sidenav';

const App = () => (
  <Router>
    <main>
      <SideNav />
      <Route exact path="/" component={Apartments} />
      <Route exact path="/appointments" component={Appointments} />
      <Route exact path="/types/:typeId/:typeName" component={ApartmentsByType} />
      <Route exact path="/apartments/:apartmentId" component={ApartmentDetails} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registrations} />
    </main>
  </Router>
);

export default App;
