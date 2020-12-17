import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import login from '../../API/login';
import { STORE_AUTH, UPDATE_LOGIN_STATUS } from '../../constants';

const Login = ({ storeAuth, updateLoggedInStatus }) => {
  const initialState = {
    email: '',
    password: '',
    errors: '',
    loading: false,
  };

  const [user, setUser] = useState(initialState);

  const {
    email, password, loading, errors,
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

    login(email, password)
      .then(response => {
        if (response.data.token) handleSuccessfulAuth(response.data);
      })
      .catch(() => setUser({ ...user, errors: 'Invalid email/password. Try again.', loading: false }));
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1 className="heading">Login</h1>

      { errors !== '' ? <p>{errors}</p> : '' }

      <div className="input-group">
        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email} required />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />
      </div>

      <div className="input-group">
        <button type="submit">{ loading ? 'Submitting...' : 'Login' }</button>
      </div>

      <p>
        Don&apos;t have an account?
        {' '}
        <a href="/register"> Register</a>
      </p>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  storeAuth: auth => dispatch({ type: STORE_AUTH, auth }),
  updateLoggedInStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

Login.propTypes = {
  storeAuth: PropTypes.func.isRequired,
  updateLoggedInStatus: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
