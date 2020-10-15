import { STORE_USER, REMOVE_USER } from '../../constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case STORE_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default user;
