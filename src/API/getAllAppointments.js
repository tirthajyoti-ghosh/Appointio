import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const getAllAppointments = () => axios
  .get(`${REACT_APP_BASE_URL}/appointments`, { withCredentials: true })
  .then(response => (response.data.appointments));

export default getAllAppointments;
