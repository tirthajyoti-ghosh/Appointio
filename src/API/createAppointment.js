import axios from 'axios';
import { BASE_URL } from '../constants';

const createAppointment = (date, apartmentId) => (
  axios.post(`${BASE_URL}/appointments`, {
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
