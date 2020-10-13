import axios from 'axios';
import { BASE_URL } from '../constants';

const login = (email, password) => (
  axios.post(`${BASE_URL}/login`, {
    user: {
      email, password,
    },
  },
  { withCredentials: true })
    .then(response => response)
);

export default login;
