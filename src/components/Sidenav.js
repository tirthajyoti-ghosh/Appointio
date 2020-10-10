import React from 'react';

import Profile from '../containers/Profile';
import Types from '../containers/Types';

const SideNav = () => (
  <div className="sidenav">
    <a href="/" className="logo"><img src="https://user-images.githubusercontent.com/57726348/95655344-3ae8de00-0b24-11eb-9c34-1fac11fecfcc.png" alt="logo" /></a>

    <Types />

    <a href="/appointments" className="appointments">Appointments</a>

    <Profile />
  </div>
);

export default SideNav;
