import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const login = (email, password) => (
  axios.post(`${REACT_APP_BASE_URL}/login`, {
    user: {
      email, password,
    },
  },
  { withCredentials: true })
    .then(response => response)
);

export default login;
