import axios from 'axios';

const deleteAppointment = appointmentId => (
  axios.delete(`http://localhost:3001/appointments/${appointmentId}`, { withCredentials: true })
    .then(response => response.data.message)
    .catch(() => 'Request failed. Try again.')
);

export default deleteAppointment;
