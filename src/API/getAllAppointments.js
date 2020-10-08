import axios from 'axios';

const getAllAppointments = () => axios
  .get('http://localhost:3001/appointments', { withCredentials: true })
  .then(response => (response.data.appointments));

export default getAllAppointments;
