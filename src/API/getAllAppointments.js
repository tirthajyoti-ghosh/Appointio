import axios from 'axios';
import { BASE_URL } from '../constants';

const getAllAppointments = () => axios
  .get(`${BASE_URL}/appointments`, { withCredentials: true })
  .then(response => (response.data.appointments));

export default getAllAppointments;
