import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const getAllTypes = () => axios
  .get(`${REACT_APP_BASE_URL}/types`, { withCredentials: true })
  .then(response => (response.data.types));

export default getAllTypes;
