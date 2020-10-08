import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApartmentDetails = ({ match, user }) => {
  const { name } = user;
  const { apartmentId } = match.params;

  const [apartment, setApartment] = useState({});

  const getApartmentDetails = () => axios
    .get(`http://localhost:3001/apartments/${apartmentId}`, { withCredentials: true }).then(response => (response.data));

  useEffect(() => {
    getApartmentDetails().then(apartment => setApartment(apartment));
  }, []);

  return (
    <>
      {
        apartment.id !== parseInt(apartmentId, 10) ? 'Loading...' : (
          <div>
            <h1>ApartmentDetails</h1>
            <h2>
              Name:
              {' '}
              { name }
            </h2>

            <p>{apartment.address}</p>
            <p>{apartment.rent}</p>
            <p>{apartment.reviews}</p>
            <p>{apartment.amenities}</p>
            <p>{apartment.deposit}</p>
            <p>{apartment.sq_ft}</p>
            <p>{apartment.lease_length}</p>
            <p>
              {
                apartment.images === undefined ? 'Loading...' : (
                  apartment.images.map(image => (
                    <img key={image.id} src={image.url} alt="" />
                  ))
                )
              }
            </p>
            <p>{apartment.type}</p>
          </div>
        )
      }
    </>
  );
};

export default ApartmentDetails;
