import NameSpace from '../name-space.js';

const getComments = (state) => {
  return state[NameSpace.COMMENT].comments;
};

export {
  getComments,
};
