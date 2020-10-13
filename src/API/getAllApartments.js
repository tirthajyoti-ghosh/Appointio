import axios from 'axios';
import { BASE_URL } from '../constants';

const getAllApartments = () => axios
  .get(`${BASE_URL}/apartments`, { withCredentials: true })
  .then(response => (response.data.apartments));

export default getAllApartments;
