import React from 'react';
import Login from '../containers/auth/Login';
import Registrations from '../containers/auth/Registrations';

const Home = props => {

  return (
    <div>
      <h1>Home</h1>
      <h2>
        Status:
        {props.loggedInStatus}
      </h2>
      <button type="button" onClick={props.handleLogout}>Logout</button>
      <Registrations handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
