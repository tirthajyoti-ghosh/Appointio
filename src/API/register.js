import axios from 'axios';
import { BASE_URL } from '../constants';

// eslint-disable-next-line camelcase
const registrations = (name, email, password, password_confirmation) => (
  axios.post(`${BASE_URL}/registrations`, {
    user: {
      name, email, password, password_confirmation,
    },
  },
  { withCredentials: true })
    .then(response => response)
);

export default registrations;
