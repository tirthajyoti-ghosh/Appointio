import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getApartmentDetails from '../API/getApartmentDetails';
import { ADD_APARTMENT_DETAILS } from '../constants';

const ApartmentDetails = ({
  apartmentDetails, apartmentDetailsAdder, match, user,
}) => {
  const { name } = user;
  const { apartmentId } = match.params;

  const {
    id,
    address,
    rent,
    reviews,
    amenities,
    deposit,
    sq_ft: squareFeet,
    lease_length: leaseLength,
    images,
    type,
  } = apartmentDetails;

  useEffect(() => {
    getApartmentDetails(apartmentId)
      .then(apartmentDetails => apartmentDetailsAdder(apartmentDetails));
  }, [id]);

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
  apartmentDetailsAdder:
    apartmentDetails => dispatch({ type: ADD_APARTMENT_DETAILS, apartmentDetails }),
});

ApartmentDetails.propTypes = {
  apartmentDetailsAdder: PropTypes.func.isRequired,

  apartmentDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    rent: PropTypes.string.isRequired,
    amenities: PropTypes.string.isRequired,
    deposit: PropTypes.string.isRequired,
    sq_ft: PropTypes.string.isRequired,
    lease_length: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,

    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired.isRequired,

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({ apartmentId: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentDetails);
