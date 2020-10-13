import axios from 'axios';
import { BASE_URL } from '../constants';

const checkLoggedInStatus = () => (
  axios
    .get(`${BASE_URL}/logged_in`, { withCredentials: true })
    .then(response => response)
);

export default checkLoggedInStatus;
