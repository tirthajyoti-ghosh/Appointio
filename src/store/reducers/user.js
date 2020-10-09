import { STORE_USER } from '../../constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case STORE_USER:
      return action.user;
    default:
      return state;
  }
};

export default user;
