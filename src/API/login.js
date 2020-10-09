import axios from 'axios';

const login = (email, password) => (
  axios.post('http://localhost:3001/login', {
    user: {
      email, password,
    },
  },
  { withCredentials: true })
    .then(response => response)
);

export default login;
