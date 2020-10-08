import { ADD_APARTMENTS } from '../../constants';

const apartments = (state = [], action) => {
  switch (action.type) {
    case ADD_APARTMENTS:
      return action.apartments;
    default:
      return state;
  }
};

export default apartments;
