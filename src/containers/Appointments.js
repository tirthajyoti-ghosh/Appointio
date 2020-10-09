import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getAllAppointments from '../API/getAllAppointments';
import { ADD_APPOINTMENTS } from '../constants';
import DeleteAppointment from './DeleteAppointment';

const Appointments = ({ appointments, appointmentsAdder, user }) => {
  const { name } = user;

  useEffect(() => {
    getAllAppointments().then(appointments => appointmentsAdder(appointments));
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <h2>
        Name:
        {' '}
        { name }
      </h2>

      <ul>
        {
          appointments.map(appointment => (
            <li key={appointment.id}>
              {appointment.date}
              {' '}
              |
              {' '}
              <DeleteAppointment appointmentId={appointment.id} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointments,
});

const mapDispatchToProps = dispatch => ({
  appointmentsAdder: appointments => dispatch({ type: ADD_APPOINTMENTS, appointments }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointments);
