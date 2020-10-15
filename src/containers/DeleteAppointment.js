import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import deleteAppointmentAction from '../store/middlewares/deleteAppointment';

const DeleteAppointment = ({ appointmentId, appointments, deleteAppointment }) => {
  const handleClick = () => {
    deleteAppointment(appointmentId, appointments);
  };

  return (
    <button className="delete-btn" type="button" onClick={handleClick}>Delete</button>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointments,
});

const mapDispatchToProps = dispatch => ({
  deleteAppointment:
    (appointmentId, appointments) => dispatch(deleteAppointmentAction(appointmentId, appointments)),
});

DeleteAppointment.propTypes = {
  appointmentId: PropTypes.number.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteAppointment);
