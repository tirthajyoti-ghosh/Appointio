import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

// eslint-disable-next-line camelcase
const registrations = (name, email, password, password_confirmation) => (
  axios.post(`${REACT_APP_BASE_URL}/register`, {
    user: {
      name, email, password, password_confirmation,
    },
  },
  { withCredentials: true })
    .then(response => response)
);

export default registrations;
