import { ADD_TYPES } from '../../constants';

const apartments = (state = [], action) => {
  switch (action.type) {
    case ADD_TYPES:
      return action.types;
    default:
      return state;
  }
};

export default apartments;
