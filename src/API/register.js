import axios from 'axios';

// eslint-disable-next-line camelcase
const registrations = (name, email, password, password_confirmation) => (
  axios.post('http://localhost:3001/registrations', {
    user: {
      name, email, password, password_confirmation,
    },
  },
  { withCredentials: true })
    .then(response => response)
);

export default registrations;
