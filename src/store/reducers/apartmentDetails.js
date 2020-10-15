import { ADD_APARTMENT_DETAILS } from '../../constants';

const apartmentDetails = (state = {}, action) => {
  switch (action.type) {
    case ADD_APARTMENT_DETAILS:
      return action.apartmentDetails;
    default:
      return state;
  }
};

export default apartmentDetails;
