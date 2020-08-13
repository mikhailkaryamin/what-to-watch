import NameSpace from '../name-space.js';

const getComments = (state) => {
  return state[NameSpace.COMMENT].comments;
};

const getStatus = (state) => {
  return state[NameSpace.COMMENT].statusUploadComment;
};

export {
  getComments,
  getStatus,
};
