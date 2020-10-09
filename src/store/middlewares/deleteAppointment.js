import deleteAppointment from '../../API/deleteAppointment';
import { DELETE_APPOINTMENTS } from '../../constants';

const deleteAppointmentAction = apartmentId => dispatch => {
  deleteAppointment(apartmentId)
    .then(status => {
      if (status === 200) {
        dispatch({ type: DELETE_APPOINTMENTS, apartmentId });
      }
    });
};

export default deleteAppointmentAction;
