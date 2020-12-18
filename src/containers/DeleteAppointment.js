import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import deleteAppointmentAction from '../store/middlewares/deleteAppointment';

const DeleteAppointment = ({
  appointmentId, appointments, deleteAppointment, token,
}) => {
  const handleClick = () => {
    deleteAppointment(appointmentId, appointments, token);
  };

  return (
    <button className="delete-btn" type="button" onClick={handleClick}>Delete</button>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointments,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  deleteAppointment:
    (appointmentId, appointments, token) => {
      dispatch(deleteAppointmentAction(appointmentId, appointments, token));
    },
});

DeleteAppointment.propTypes = {
  appointmentId: PropTypes.number.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteAppointment);
