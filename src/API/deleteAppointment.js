import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const deleteAppointment = (appointmentId, token) => (
  axios.delete(`${REACT_APP_BASE_URL}/appointments/${appointmentId}`, { headers: { Authorization: `JWT ${token}` } })
    .then(response => response.status)
);

export default deleteAppointment;
