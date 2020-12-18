import deleteAppointment from '../../API/deleteAppointment';
import { DELETE_APPOINTMENTS } from '../../constants';

const deleteAppointmentAction = (appointmentId, appointments, token) => dispatch => {
  deleteAppointment(appointmentId, token)
    .then(status => {
      if (status === 200) {
        dispatch({ type: DELETE_APPOINTMENTS, appointmentId, appointments });
      }
    });
};

export default deleteAppointmentAction;
