import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { STORE_USER, UPDATE_LOGIN_STATUS, REMOVE_USER } from '../constants';
import checkLoggedInStatus from '../API/checkLoggedInStatus';
import Logout from './Logout';

const Profile = ({
  user, loggedInStatus, storeUser, removeUser, updateLoggedInStatus,
}) => {
  useEffect(() => {
    checkLoggedInStatus()
      .then(response => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          storeUser(response.data.user);
          updateLoggedInStatus('LOGGED_IN');
        } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
          removeUser();
          updateLoggedInStatus('NOT_LOGGED_IN');
        }
      });
  }, [loggedInStatus]); // Does not work "on mount" because component mounts only once

  return (
    <>
      {
        user.name === undefined
          ? <a className="login-btn" href="/login">Login</a>
          : (
            <div className="profile">
              <div className="avatar">{user.name.split('')[0]}</div>
              <div>
                <p className="name">{user.name}</p>
                <p className="email">{user.email}</p>
              </div>

              <Logout />
            </div>
          )
      }
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => ({
  storeUser: user => dispatch({ type: STORE_USER, user }),
  removeUser: () => dispatch({ type: REMOVE_USER }),
  updateLoggedInStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

Profile.propTypes = {
  storeUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
  updateLoggedInStatus: PropTypes.func.isRequired,

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,

  loggedInStatus: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
