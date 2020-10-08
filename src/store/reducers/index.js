import { combineReducers } from 'redux';

import apartments from './apartments';
import apartmentsByType from './apartmentsByType';
import apartmentDetails from './apartmentDetails';
import types from './types';

export default combineReducers({
  apartments,
  apartmentsByType,
  types,
  apartmentDetails,
});
