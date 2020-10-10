import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { STORE_USER, UPDATE_LOGIN_STATUS, REMOVE_USER } from '../constants';
import checkLoggedInStatus from '../API/checkLoggedInStatus';

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
          ? <a href="/login">Login</a>
          : (
            <>
              <h4>{user.name}</h4>
              <h4>{user.email}</h4>
            </>
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
