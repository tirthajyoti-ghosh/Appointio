import { UPDATE_LOGIN_STATUS } from '../../constants';

const loggedInStatus = (state = 'NOT_LOGGED_IN', action) => {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default loggedInStatus;
