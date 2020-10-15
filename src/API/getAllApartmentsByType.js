import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const getAllApartmentsByType = typeId => axios
  .get(`${REACT_APP_BASE_URL}/types/${typeId}`, { withCredentials: true })
  .then(response => (response.data.apartments));

export default getAllApartmentsByType;
