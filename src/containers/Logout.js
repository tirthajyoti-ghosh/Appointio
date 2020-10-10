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
    <button type="button" onClick={handleLogout} className="logout-btn">
      <svg height="16px" viewBox="0 0 16 16" fill="none">
        <path d="M11 12.414L15.414 8 11 3.586 9.586 5l2 2H5v2h6.586l-2 2L11 12.414z" fill="#cfd0d6" />
        <path d="M12 14H3V2h9V0H2a1 1 0 00-1 1v14a1 1 0 001 1h10v-2z" fill="#cfd0d6" />
      </svg>
    </button>
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
