import axios from 'axios';
import { REACT_APP_BASE_URL } from '../constants';

const getAllApartments = () => axios
  .get(`${REACT_APP_BASE_URL}/apartments`, { withCredentials: true })
  .then(response => (response.data.apartments));

export default getAllApartments;
