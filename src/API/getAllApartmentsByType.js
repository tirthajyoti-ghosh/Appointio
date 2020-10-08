import axios from 'axios';

const getAllApartmentsByType = typeId => axios
  .get(`http://localhost:3001/types/${typeId}`, { withCredentials: true })
  .then(response => (response.data.apartments));

export default getAllApartmentsByType;
