import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { STORE_AUTH, UPDATE_LOGIN_STATUS, REMOVE_AUTH } from '../constants';
import Logout from './Logout';

const Profile = ({
  auth, loggedInStatus, storeAuth, removeAuth, updateLoggedInStatus,
}) => {
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth'));
      storeAuth(auth);
      updateLoggedInStatus('LOGGED_IN');
    } else if (!localStorage.getItem('auth') && loggedInStatus === 'LOGGED_IN') {
      removeAuth();
      updateLoggedInStatus('NOT_LOGGED_IN');
    }
  }, []);

  return (
    <>
      {
        auth.user === undefined
          ? <a className="login-btn" href="/login">Login</a>
          : (
            <section className="profile">
              <div className="avatar">{auth.user.name.split('')[0]}</div>
              <div>
                <p className="name">{auth.user.name}</p>
                <p className="email">{auth.user.email}</p>
              </div>

              <Logout />
            </section>
          )
      }
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => ({
  storeAuth: auth => dispatch({ type: STORE_AUTH, auth }),
  removeAuth: () => dispatch({ type: REMOVE_AUTH }),
  updateLoggedInStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

Profile.propTypes = {
  storeAuth: PropTypes.func.isRequired,
  removeAuth: PropTypes.func.isRequired,
  updateLoggedInStatus: PropTypes.func.isRequired,

  auth: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,

  loggedInStatus: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
