import axios from 'axios';

const deleteAppointment = appointmentId => (
  axios.delete(`http://localhost:3001/appointments/${appointmentId}`, { withCredentials: true })
    .then(response => response.status)
);

export default deleteAppointment;
