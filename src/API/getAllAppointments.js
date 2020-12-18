import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const getAllAppointments = token => axios
  .get(`${REACT_APP_BASE_URL}/appointments`, { headers: { Authorization: `JWT ${token}` } })
  .then(response => (response.data.appointments));

export default getAllAppointments;
