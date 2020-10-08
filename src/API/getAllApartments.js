import axios from 'axios';

const getAllApartments = () => axios
  .get('http://localhost:3001/apartments', { withCredentials: true })
  .then(response => (response.data.apartments));

export default getAllApartments;
