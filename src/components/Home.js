import React from 'react';
import Registrations from './auth/Registrations';

const Home = props => {
  const handleSuccessfulAuth = data => {
    props.history.push('/dashboard');
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>
        Status:
        {props.loggedInStatus}
      </h2>
      <Registrations handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
