import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Apartments = props => {
  const [apartments, setApartments] = useState([]);

  const getAllApartments = () => axios
    .get('http://localhost:3001/apartments', { withCredentials: true }).then(response => (response.data.apartments));

  useEffect(() => {
    getAllApartments().then(apartments => setApartments(apartments));
  }, []);

  return (
    <div>
      <h1>Apartments</h1>
      <h2>
        Name:
        {' '}
        { props.user.name }
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

export default Apartments;
