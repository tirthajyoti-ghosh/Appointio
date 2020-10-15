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
    <>
      <h1 className="heading">
        <span>{typeName}</span>
        {' '}
        apartments
      </h1>
      <section className="apartments-list">
        {
          apartmentsByType.map(apartment => (
            <article className="apartment" key={apartment.id}>
              <a href={`/apartments/${apartment.id}`} className="link"> </a>

              <img src={apartment.images[0].url} alt="apartment" />

              <h3>{apartment.address}</h3>
              <hr />

              <h4 className="type">{apartment.type}</h4>

              <div className="stats">

                <h4>
                  $
                  {' '}
                  {apartment.rent}
                  <p className="side-text"> /month</p>
                </h4>

                <h4>
                  {apartment.reviews}
                  <p className="side-text"> rating</p>
                </h4>

                <h4>
                  {apartment.sq_ft}
                  <p className="side-text"> sq.ft.</p>
                </h4>
              </div>
            </article>
          ))
        }
      </section>
    </>
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
    sq_ft: PropTypes.string.isRequired,

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
