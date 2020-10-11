import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getApartmentDetails from '../API/getApartmentDetails';
import { ADD_APARTMENT_DETAILS } from '../constants';

import MakeAppointment from './MakeAppointment';
import ApartmentImageGallery from '../components/ApartmentImageGallery';

const ApartmentDetails = ({
  apartmentDetails, apartmentDetailsAdder, match,
}) => {
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
  }, []);

  return (
    <>
      {
        id !== parseInt(apartmentId, 10) ? 'Loading...' : (
          <div>
            <h1>ApartmentDetails</h1>

            <ApartmentImageGallery images={images} />

            <p>{address}</p>
            <p>{rent}</p>
            <p>{reviews}</p>
            <p>{amenities}</p>
            <p>{deposit}</p>
            <p>{squareFeet}</p>
            <p>{leaseLength}</p>
            <p>{type}</p>

            <MakeAppointment apartmentId={apartmentId} />

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
    id: PropTypes.number,
    address: PropTypes.string,
    rent: PropTypes.string,
    amenities: PropTypes.string,
    deposit: PropTypes.string,
    sq_ft: PropTypes.string,
    lease_length: PropTypes.string,
    type: PropTypes.string,
    reviews: PropTypes.number,

    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({ apartmentId: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentDetails);
