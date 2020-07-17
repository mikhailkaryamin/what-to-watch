import Comment from '../../models/comment.js';
import {extend} from '../../utils/utils.js';
import NameSpace from '../name-space.js';

const initialState = {
  comments: [],
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};

const Operation = {
  loadComments: () => (dispatch, getState, api) => {
    const currentOpenFilm = getState()[NameSpace.CURRENT_STATE].currentOpenFilm;

    if (currentOpenFilm === null) {
      return new Error(`currentOpenFilm = null`);
    }

    const URL = `/comments/${currentOpenFilm.id}`;

    return api.get(URL)
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.loadComments(comments));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};

