import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const createAppointment = (date, apartmentId) => (
  axios.post(`${REACT_APP_BASE_URL}/appointments`, {
    appointment: {
      date,
      apartment_id: apartmentId,
    },
  },
  {
    withCredentials: true,
  })
    .then(response => response.data.message)
    .catch(() => 'Request failed. Try again.')
);

export default createAppointment;
