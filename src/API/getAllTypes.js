import axios from 'axios';

const getAllTypes = () => axios
  .get('http://localhost:3001/types', { withCredentials: true })
  .then(response => (response.data.types));

export default getAllTypes;
