import Comment from '../../models/comment.js';

import {StatusUploadComment} from '../../const.js';
import {extend} from '../../utils/utils.js';

const RESPONSE_STATUS_OK = 200;

const initialState = {
  comments: [],
  statusUploadComment: null,
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  RESET_STATUS_UPLOAD: `RESET_STATUS_UPLOAD`,
  SET_STATUS_UPLOAD: `SET_STATUS_UPLOAD`,
  UPLOAD_COMMENT: `UPLOAD_COMMENT`,
};

const ActionCreator = {
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  resetStatusUpload: () => ({
    type: ActionType.RESET_STATUS_UPLOAD,
  }),

  setStatusUpload: (status) => ({
    type: ActionType.SET_STATUS_UPLOAD,
    payload: status,
  }),

  uploadComment: (comment) => ({
    type: ActionType.UPLOAD_COMMENT,
    payload: comment,
  })
};

const Operation = {
  loadComments: (id) => (dispatch, getState, api) => {
    const URL = `/comments/${id}`;

    return api.get(URL)
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.loadComments(comments));
      });
  },

  uploadComment: (commentData, id) => (dispatch, getState, api) => {
    const URL = `/comments/${id}`;

    return api.post(URL, {
      rating: commentData.rating,
      comment: commentData.comment,
    })
      .then((response) => {
        const responseStatus = response.status;

        if (responseStatus === RESPONSE_STATUS_OK) {
          const comments = Comment.parseComments(response.data);
          dispatch(ActionCreator.setStatusUpload(StatusUploadComment.SUCCESS));
          dispatch(ActionCreator.uploadComment(comments));
        } else {
          dispatch(ActionCreator.setStatusUpload(StatusUploadComment.FAIL));
        }
      })
      .catch((err) => {
        dispatch(ActionCreator.setStatusUpload(StatusUploadComment.FAIL));
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

    case ActionType.RESET_STATUS_UPLOAD:
      return extend(state, {
        statusUploadComment: null,
      });

    case ActionType.SET_STATUS_UPLOAD:
      return extend(state, {
        statusUploadComment: action.payload,
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

