import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getAllAppointments from '../API/getAllAppointments';
import { ADD_APPOINTMENTS } from '../constants';
import DeleteAppointment from './DeleteAppointment';

const Appointments = ({ appointments, appointmentsAdder }) => {
  useEffect(() => {
    getAllAppointments().then(appointments => appointmentsAdder(appointments));
  }, []);

  return (
    <div>
      <h1 className="heading">Your Appointments</h1>

      <table className="appointments-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Apartment</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            appointments.map((appointment, index) => (
              <tr className="appointment" key={appointment.id}>
                <td>{index + 1}</td>
                <td>
                  <a href={`/apartments/${appointment.apartment_id}`}>
                    {appointment.apartment_address}
                  </a>
                </td>
                <td>{appointment.date}</td>
                <td><DeleteAppointment appointmentId={appointment.id} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointments,
  loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => ({
  appointmentsAdder: appointments => dispatch({ type: ADD_APPOINTMENTS, appointments }),
});

Appointments.propTypes = {
  appointmentsAdder: PropTypes.func.isRequired,

  appointments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    apartment_id: PropTypes.number,
    apartment_address: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointments);
