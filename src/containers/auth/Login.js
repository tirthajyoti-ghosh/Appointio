import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import login from '../../API/login';
import { STORE_USER, UPDATE_LOGIN_STATUS } from '../../constants';

const Login = ({ storeUser, updateLoggedInStatus }) => {
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

  const redirectBack = () => {
    history.goBack();
  };

  const handleSuccessfulAuth = data => {
    storeUser(data);
    updateLoggedInStatus('LOGGED_IN');
    redirectBack();
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
        if (response.data.logged_in === true) handleSuccessfulAuth(response.data);
      })
      .catch(() => setUser({ ...user, errors: 'Invalid email/password. Try again.', loading: false }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email} required />
      <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />

      <button type="submit">{ loading ? 'Submitting...' : 'Login' }</button>
      { errors !== '' ? <p>{errors}</p> : '' }
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  storeUser: user => dispatch({ type: STORE_USER, user }),
  updateLoggedInStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

Login.propTypes = {
  storeUser: PropTypes.func.isRequired,
  updateLoggedInStatus: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
