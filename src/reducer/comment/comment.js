import Comment from '../../models/comment.js';
import {extend} from '../../utils/utils.js';
import NameSpace from '../name-space.js';

const RESPONSE_STATUS_OK = 200;
const StatusUploadComment = {
  OK: `OK`,
  ERROR: `ERROR`,
};

const initialState = {
  comments: [],
  statusUploadComment: null,
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  STATUS_UPLOAD_COMMENT: `STATUS_UPLOAD_COMMENT`,
  UPLOAD_COMMENT: `UPLOAD_COMMENT`,
};

const ActionCreator = {
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  statusUploadComment: (status) => ({
    type: ActionType.STATUS_UPLOAD_COMMENT,
    payload: status,
  }),
  uploadComment: (comment) => ({
    type: ActionType.UPLOAD_COMMENT,
    payload: comment,
  })
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

  uploadComment: (commentData) => (dispatch, getState, api) => {
    const currentOpenFilm = getState()[NameSpace.CURRENT_STATE].currentOpenFilm;

    if (currentOpenFilm === null) {
      dispatch(ActionCreator.statusUploadComment(StatusUploadComment.ERROR));

      return new Error(`currentOpenFilm = null`);
    }

    const URL = `/comments/${currentOpenFilm.id}`;

    return api.post(URL, {
      rating: commentData.rating,
      comment: commentData.text,
    })
      .then((response) => {
        const responseStatus = response.status;

        if (responseStatus === RESPONSE_STATUS_OK) {
          const comments = Comment.parseComments(response.data);
          dispatch(ActionCreator.uploadComment(comments));
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

    case ActionType.UPLOAD_COMMENT:
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

