import { ADD_APPOINTMENTS } from '../../constants';

const appointments = (state = [], action) => {
  switch (action.type) {
    case ADD_APPOINTMENTS:
      return action.appointments;
    default:
      return state;
  }
};

export default appointments;
