import axios from 'axios';
import { BASE_URL } from '../constants';

const deleteAppointment = appointmentId => (
  axios.delete(`${BASE_URL}/appointments/${appointmentId}`, { withCredentials: true })
    .then(response => response.status)
);

export default deleteAppointment;
