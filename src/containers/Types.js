import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getAllTypes from '../API/getAllTypes';
import { ADD_TYPES } from '../constants';

const Types = ({ types, typesAdder, user }) => {
  const { name } = user;

  useEffect(() => {
    getAllTypes().then(types => typesAdder(types));
  }, []);

  return (
    <div>
      <h1>Types</h1>
      <h2>
        Name:
        {' '}
        { name }
      </h2>

      <ul>
        {
          types.map(type => (
            <li key={type.id}>{type.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  types: state.types,
});

const mapDispatchToProps = dispatch => ({
  typesAdder: types => dispatch({ type: ADD_TYPES, types }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Types);
