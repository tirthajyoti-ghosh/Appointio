import axios from 'axios';

const getApartmentDetails = apartmentId => axios
  .get(`http://localhost:3001/apartments/${apartmentId}`, { withCredentials: true })
  .then(response => (response.data));

export default getApartmentDetails;
