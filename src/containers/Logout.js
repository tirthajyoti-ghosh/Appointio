import React from 'react';
import { connect } from 'react-redux';

import { REMOVE_USER, UPDATE_LOGIN_STATUS } from '../constants';
import logout from '../API/logout';

const Logout = ({ removeUser, updateLoginStatus }) => {
  const handleLogout = () => {
    logout()
      .then(() => {
        removeUser();
        updateLoginStatus('NOT_LOGGED_IN');
      });
  };
  return (
    <button type="button" onClick={handleLogout}>Logout</button>
  );
};

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch({ type: REMOVE_USER }),
  updateLoginStatus: status => dispatch({ type: UPDATE_LOGIN_STATUS, status }),
});

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
