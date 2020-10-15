import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const getApartmentDetails = apartmentId => axios
  .get(`${REACT_APP_BASE_URL}/apartments/${apartmentId}`, { withCredentials: true })
  .then(response => (response.data));

export default getApartmentDetails;
