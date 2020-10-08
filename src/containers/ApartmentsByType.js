import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getAllApartmentsByType from '../API/getAllApartmentsByType';
import { ADD_APARTMENTS_BY_TYPE } from '../constants';

const ApartmentsByType = ({
  apartmentsByType, apartmentsByTypeAdder, match, user,
}) => {
  const { name } = user;
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
      <h2>
        Name:
        {' '}
        { name }
      </h2>

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentsByType);
