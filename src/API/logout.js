import axios from 'axios';
import { BASE_URL } from '../constants';

const logout = () => (
  axios
    .delete(`${BASE_URL}/logout`, { withCredentials: true })
);

export default logout;
