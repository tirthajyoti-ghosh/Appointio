import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const deleteAppointment = appointmentId => (
  axios.delete(`${REACT_APP_BASE_URL}/appointments/${appointmentId}`, { withCredentials: true })
    .then(response => response.status)
);

export default deleteAppointment;
