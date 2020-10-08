import { combineReducers } from 'redux';

import apartments from './apartments';
import apartmentDetails from './apartmentDetails';

export default combineReducers({
  apartments,
  apartmentDetails,
});
