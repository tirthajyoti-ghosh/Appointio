import { ADD_APPOINTMENTS, DELETE_APPOINTMENTS } from '../../constants';

const appointments = (state = [], action) => {
  switch (action.type) {
    case ADD_APPOINTMENTS:
      return action.appointments;
    case DELETE_APPOINTMENTS:
      return [
        ...action.appointments
          .filter(appointment => appointment.id !== action.appointmentId),
      ];
    default:
      return state;
  }
};

export default appointments;
