import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import getAllTypes from '../API/getAllTypes';
import { ADD_TYPES } from '../constants';

const Types = ({ types, typesAdder }) => {
  useEffect(() => {
    getAllTypes().then(types => typesAdder(types));
  }, []);

  return (
    <section className="types-list">
      <NavLink exact to="/" activeClassName="active">ALL</NavLink>
      {
        types.map(type => (
          <NavLink exact to={`/types/${type.id}/${type.name}`} activeClassName="active" key={type.id}>{type.name}</NavLink>
        ))
      }
    </section>
  );
};

const mapStateToProps = state => ({
  types: state.types,
});

const mapDispatchToProps = dispatch => ({
  typesAdder: types => dispatch({ type: ADD_TYPES, types }),
});

Types.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  typesAdder: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Types);
