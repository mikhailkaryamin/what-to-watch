import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthStatus = (state) => {
  return state[NAME_SPACE].authStatus;
};

const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export {
  getAuthStatus,
  getUser,
};

