import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { STORE_USER, UPDATE_LOGIN_STATUS, REMOVE_USER } from '../constants';
import checkLoggedInStatus from '../API/checkLoggedInStatus';
import Logout from './Logout';

const Profile = ({
  user, loggedInStatus, storeUser, removeUser, updateLoginStatus,
}) => {
  useEffect(() => {
    checkLoggedInStatus()
      .then(response => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          storeUser(response.data.user);
          updateLoginStatus('LOGGED_IN');
        } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
          removeUser();
          updateLoginStatus('NOT_LOGGED_IN');
        }
      });
  });

  return (
    <>
      {
        Object.keys(user).length === 0
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
  updateLoginStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
