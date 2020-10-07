import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApartmentsByType = ({ match, user }) => {
  const { name } = user;
  const { typeId, typeName } = match.params;

  const [apartments, setApartments] = useState([]);

  const getAllApartmentsByType = () => axios
    .get(`http://localhost:3001/types/${typeId}`, { withCredentials: true }).then(response => (response.data.apartments));

  useEffect(() => {
    getAllApartmentsByType().then(apartments => setApartments(apartments));
  }, []);

  return (
    <div>
      <h1>
        {typeName}
        {' '}
        apartments
      </h1>
      <h2>
        Name:
        {' '}
        { name }
      </h2>

      <ul>
        {
          apartments.map(apartment => (
            <li key={apartment.id}>{apartment.address}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default ApartmentsByType;
