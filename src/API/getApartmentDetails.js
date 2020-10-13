import axios from 'axios';
import { BASE_URL } from '../constants';

const getApartmentDetails = apartmentId => axios
  .get(`${BASE_URL}/apartments/${apartmentId}`, { withCredentials: true })
  .then(response => (response.data));

export default getApartmentDetails;
