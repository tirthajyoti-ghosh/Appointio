import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Profile from './Profile';
import Types from './Types';

const SideNav = ({ loggedInStatus }) => (
  <div className="sidenav">
    <a href="/" className="logo"><img src="https://user-images.githubusercontent.com/57726348/95655344-3ae8de00-0b24-11eb-9c34-1fac11fecfcc.png" alt="logo" /></a>

    <Types />

    {
      loggedInStatus === 'NOT_LOGGED_IN'
        ? ''
        : <NavLink exact to="/appointments" className="appointments" activeClassName="active">Appointments</NavLink>
    }

    <Profile />
  </div>
);

const mapStateToProps = state => ({
  loggedInStatus: state.loggedInStatus,
});

SideNav.propTypes = {
  loggedInStatus: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(SideNav);
