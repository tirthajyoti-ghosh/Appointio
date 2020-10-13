import axios from 'axios';
import { BASE_URL } from '../constants';

const getAllTypes = () => axios
  .get(`${BASE_URL}/types`, { withCredentials: true })
  .then(response => (response.data.types));

export default getAllTypes;
