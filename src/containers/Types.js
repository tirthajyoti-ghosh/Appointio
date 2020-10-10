import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getAllTypes from '../API/getAllTypes';
import { ADD_TYPES } from '../constants';

const Types = ({ types, typesAdder }) => {
  useEffect(() => {
    getAllTypes().then(types => typesAdder(types));
  }, []);

  return (
    <div className="types-list">
      <a href="/">ALL</a>

      {

        types.map(type => (
          <a href={`/types/${type.id}/${type.name}`} key={type.id}>{type.name}</a>
        ))
      }
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
