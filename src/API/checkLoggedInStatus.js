import axios from 'axios';

const checkLoggedInStatus = () => (
  axios
    .get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => response)
);

export default checkLoggedInStatus;
