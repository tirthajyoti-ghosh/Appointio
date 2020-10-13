import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const checkLoggedInStatus = () => (
  axios
    .get(`${REACT_APP_BASE_URL}/logged_in`, { withCredentials: true })
    .then(response => response)
);

export default checkLoggedInStatus;
