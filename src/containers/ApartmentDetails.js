import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getApartmentDetails from '../API/getApartmentDetails';
import { ADD_APARTMENT_DETAILS } from '../constants';

import MakeAppointment from './MakeAppointment';
import ApartmentImageGallery from '../components/ApartmentImageGallery';

const ApartmentDetails = ({
  apartmentDetails, apartmentDetailsAdder, match, loggedInStatus,
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
          <div className="apartment-details">
            <div className="gallery">
              <ApartmentImageGallery images={images} />
            </div>

            <div className="apartment-info">
              <h1>{address}</h1>
              <p>
                <span className="label">Rent</span>
                <span className="text">
                  $
                  {' '}
                  {rent}
                </span>
              </p>
              <p>
                <span className="label">Reviews</span>
                <span className="text">{reviews}</span>
              </p>
              <p>
                <span className="label">Amenities</span>
                <span className="text">{amenities}</span>
              </p>
              <p>
                <span className="label">Deposit</span>
                <span className="text">
                  $
                  {' '}
                  {deposit}
                </span>
              </p>
              <p>
                <span className="label">Sq.Ft.</span>
                <span className="text">{squareFeet}</span>
              </p>
              <p>
                <span className="label">Lease Length</span>
                <span className="text">{leaseLength}</span>
              </p>
              <p>
                <span className="label">Type</span>
                <span className="text">{type}</span>
              </p>

              {
                loggedInStatus === 'NOT_LOGGED_IN'
                  ? <p>You need to login to make an appointment</p>
                  : <MakeAppointment apartmentId={apartmentId} />
              }
            </div>
          </div>
        )
      }
    </>
  );
};

const mapStateToProps = state => ({
  apartmentDetails: state.apartmentDetails,
  loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => ({
  apartmentDetailsAdder:
    apartmentDetails => dispatch({ type: ADD_APARTMENT_DETAILS, apartmentDetails }),
});

ApartmentDetails.propTypes = {
  apartmentDetailsAdder: PropTypes.func.isRequired,
  loggedInStatus: PropTypes.string.isRequired,

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
