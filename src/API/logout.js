import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const logout = () => (
  axios
    .delete(`${REACT_APP_BASE_URL}/logout`, { withCredentials: true })
);

export default logout;
