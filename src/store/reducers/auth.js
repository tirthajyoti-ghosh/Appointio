import { STORE_AUTH, REMOVE_AUTH } from '../../constants';

const auth = (state = {}, action) => {
  switch (action.type) {
    case STORE_AUTH:
      return action.auth;
    case REMOVE_AUTH:
      return {};
    default:
      return state;
  }
};

export default auth;
