import axios from 'axios';

const logout = () => (
  axios
    .delete('http://localhost:3001/logout', { withCredentials: true })
);

export default logout;
