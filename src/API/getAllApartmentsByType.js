import axios from 'axios';
import { BASE_URL } from '../constants';

const getAllApartmentsByType = typeId => axios
  .get(`${BASE_URL}/types/${typeId}`, { withCredentials: true })
  .then(response => (response.data.apartments));

export default getAllApartmentsByType;
