import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getAllApartments from '../API/getAllApartments';
import { ADD_APARTMENTS } from '../constants';

const Apartments = ({ apartments, apartmentsAdder }) => {
  useEffect(() => {
    getAllApartments().then(apartments => apartmentsAdder(apartments));
  }, []);

  return (
    <>
      <h1 className="heading">Browse all apartments</h1>
      <div className="apartments-list">
        {
          apartments.map(apartment => (
            <div className="apartment" key={apartment.id}>
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
                  <p className="side-text">/month</p>
                </h4>

                <h4>
                  {apartment.reviews}
                  <p className="side-text">rating</p>
                </h4>

                <h4>
                  {apartment.sq_ft}
                  <p className="side-text">sq.ft.</p>
                </h4>
              </div>
            </div>
          ))
        }
      </div>
    </>
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
    id: PropTypes.number,
    address: PropTypes.string,
    rent: PropTypes.string,
    reviews: PropTypes.number,
    sq_ft: PropTypes.string,

    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  })).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Apartments);
