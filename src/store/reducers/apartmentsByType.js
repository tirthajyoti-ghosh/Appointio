import { ADD_APARTMENTS_BY_TYPE } from '../../constants';

const apartmentsByType = (state = [], action) => {
  switch (action.type) {
    case ADD_APARTMENTS_BY_TYPE:
      return action.apartmentsByType;
    default:
      return state;
  }
};

export default apartmentsByType;
