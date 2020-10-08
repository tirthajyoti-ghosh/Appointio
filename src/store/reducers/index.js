import { combineReducers } from 'redux';

import apartments from './apartments';
import apartmentsByType from './apartmentsByType';
import apartmentDetails from './apartmentDetails';

export default combineReducers({
  apartments,
  apartmentDetails,
  apartmentsByType,
});
