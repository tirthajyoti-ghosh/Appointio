import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getAllApartmentsByType from '../API/getAllApartmentsByType';
import { ADD_APARTMENTS_BY_TYPE } from '../constants';

const ApartmentsByType = ({
  apartmentsByType, apartmentsByTypeAdder, match,
}) => {
  const { typeId, typeName } = match.params;

  useEffect(() => {
    getAllApartmentsByType(typeId)
      .then(apartments => apartmentsByTypeAdder(apartments));
  }, []);

  return (
    <div>
      <h1>
        {typeName}
        {' '}
        apartments
      </h1>

      <ul>
        {
          apartmentsByType.map(apartment => (
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
  apartmentsByType: state.apartmentsByType,
});

const mapDispatchToProps = dispatch => ({
  apartmentsByTypeAdder:
    apartmentsByType => dispatch({ type: ADD_APARTMENTS_BY_TYPE, apartmentsByType }),
});

ApartmentsByType.propTypes = {
  apartmentsByTypeAdder: PropTypes.func.isRequired,

  apartmentsByType: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    rent: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,

    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired).isRequired,
  
  match: PropTypes.shape({
    params: PropTypes.shape({
      typeId: PropTypes.string.isRequired,
      typeName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentsByType);
