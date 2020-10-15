import deleteAppointment from '../../API/deleteAppointment';
import { DELETE_APPOINTMENTS } from '../../constants';

const deleteAppointmentAction = (appointmentId, appointments) => dispatch => {
  deleteAppointment(appointmentId)
    .then(status => {
      if (status === 200) {
        dispatch({ type: DELETE_APPOINTMENTS, appointmentId, appointments });
      }
    });
};

export default deleteAppointmentAction;
