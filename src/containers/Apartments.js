import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
            <li key={apartment.id}>{apartment.address}</li>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Apartments);
