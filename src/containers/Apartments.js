import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getAllApartments from '../API/getAllApartments';
import { ADD_APARTMENTS } from '../constants';

const Apartments = ({ apartments, apartmentsAdder, user }) => {
  const { name } = user;

  useEffect(() => {
    getAllApartments().then(apartments => apartmentsAdder(apartments));
  }, []);

  return (
    <div>
      <h1>Apartments</h1>
      <h2>
        Name:
        {' '}
        { name }
      </h2>

      <ul>
        {
          apartments.map(apartment => (
            <li key={apartment.id}>
              <p>{apartment.address}</p>
              <p>
                Rent:
                {' '}
                {apartment.rent}
              </p>
              <p>
                Reviews:
                {' '}
                {apartment.reviews}
              </p>
              <p><img src={apartment.images[0].url} alt="" /></p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  apartments: state.apartments,
});

const mapDispatchToProps = dispatch => ({
  apartmentsAdder: apartments => dispatch({ type: ADD_APARTMENTS, apartments }),
});

Apartments.propTypes = {
  apartmentsAdder: PropTypes.func.isRequired,
  apartments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    rent: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Apartments);
