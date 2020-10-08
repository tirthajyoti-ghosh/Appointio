import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getApartmentDetails from '../API/getApartmentDetails';
import { ADD_APARTMENT_DETAILS } from '../constants';

const ApartmentDetails = ({
  apartmentDetails, apartmentDetailsAdder, match, user,
}) => {
  const { name } = user;
  const { apartmentId } = match.params;

  useEffect(() => {
    getApartmentDetails(apartmentId)
      .then(apartmentDetails => apartmentDetailsAdder(apartmentDetails));
  }, [apartmentDetails.id]);

  const {
    id, address, rent, reviews, amenities, deposit, sq_ft: squareFeet, lease_length: leaseLength, images, type,
  } = apartmentDetails;

  return (
    <>
      {
        id !== parseInt(apartmentId, 10) ? 'Loading...' : (
          <div>
            <h1>ApartmentDetails</h1>
            <h2>
              Name:
              {' '}
              { name }
            </h2>

            <p>{address}</p>
            <p>{rent}</p>
            <p>{reviews}</p>
            <p>{amenities}</p>
            <p>{deposit}</p>
            <p>{squareFeet}</p>
            <p>{leaseLength}</p>
            <p>
              {
                images === undefined ? 'Loading...' : (
                  images.map(image => (
                    <img key={image.id} src={image.url} alt="" />
                  ))
                )
              }
            </p>
            <p>{type}</p>
          </div>
        )
      }
    </>
  );
};

const mapStateToProps = state => ({
  apartmentDetails: state.apartmentDetails,
});

const mapDispatchToProps = dispatch => ({
  apartmentDetailsAdder: apartmentDetails => dispatch({ type: ADD_APARTMENT_DETAILS, apartmentDetails }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentDetails);
