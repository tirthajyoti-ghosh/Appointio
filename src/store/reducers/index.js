import { combineReducers } from 'redux';

import apartments from './apartments';
import apartmentsByType from './apartmentsByType';
import apartmentDetails from './apartmentDetails';
import types from './types';
import appointments from './appointments';
import loggedInStatus from './loggedInStatus';
import auth from './auth';

export default combineReducers({
  apartments,
  apartmentsByType,
  types,
  apartmentDetails,
  appointments,
  loggedInStatus,
  auth,
});
