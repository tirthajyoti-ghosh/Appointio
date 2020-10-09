import axios from 'axios';

const createAppointment = (date, apartmentId) => (
  axios.post('http://localhost:3001/appointments', {
    appointment: {
      date,
      apartment_id: apartmentId,
    },
  },
  {
    withCredentials: true,
  })
    .then(response => response.data.message)
    .catch(error => error.data.message)
);

export default createAppointment;
