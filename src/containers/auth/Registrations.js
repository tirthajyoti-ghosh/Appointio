import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import register from '../../API/register';
import { STORE_AUTH, UPDATE_LOGIN_STATUS } from '../../constants';

const Registrations = ({ storeAuth, updateLoggedInStatus }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: [],
    loading: false,
  };

  const [user, setUser] = useState(initialState);

  const {
    // eslint-disable-next-line camelcase
    name, email, password, password_confirmation, errors, loading,
  } = user;

  const history = useHistory();

  const handleSuccessfulAuth = data => {
    localStorage.setItem('auth', JSON.stringify({ ...data }));

    storeAuth(data);
    updateLoggedInStatus('LOGGED_IN');
    history.push('/');
  };

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setUser({
      ...user,
      loading: true,
    });

    register(name, email, password, password_confirmation)
      .then(response => {
        if (response.data.token) handleSuccessfulAuth(response.data);
        else setUser({ ...user, errors: response.data.errors, loading: false });
      });
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1 className="heading">Register</h1>

      { errors.length === 0 ? '' : errors.map(error => <p key={error}>{error}</p>) }

      <div className="input-group">
        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={user.name} required />
      </div>

      <div className="input-group">
        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email} required />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />
      </div>

      <div className="input-group">
        <input type="password" placeholder="Password Confimation" name="password_confirmation" onChange={handleChange} value={user.password_confirmation} required />
      </div>

      <div className="input-group">
        <button type="submit">{ loading ? 'Submitting...' : 'Register' }</button>
      </div>

      <p>
        Already have an account?
        {' '}
        <a href="/login"> Login</a>
      </p>
    </form>

  );
};

const mapDispatchToProps = dispatch => ({
  storeAuth: auth => dispatch({ type: STORE_AUTH, auth }),
  updateLoggedInStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

Registrations.propTypes = {
  storeAuth: PropTypes.func.isRequired,
  updateLoggedInStatus: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Registrations);
