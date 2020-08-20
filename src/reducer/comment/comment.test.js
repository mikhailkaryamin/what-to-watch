import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {
  ActionType,
  ActionCreator,
  Operation,
  reducer,
} from './comment.js';
import Comment from '../../models/comment.js';
import {StatusRequestServer} from '../../const.js';
import {API_COMMENT} from '../../mocks/testMock.js';

const api = createAPI(() => {});
const initialState = {
  comments: [],
  statusUploadComment: null,
};

describe(`comment`, () => {
  describe(`reducer`, () => {
    test(`should handle initial state`, () => {
      expect(
          reducer(undefined, {})
      ).toEqual(initialState);
    });

    test(`should handle LOAD_COMMENTS`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.LOAD_COMMENTS,
            payload: [{
              comment: `some text`
            }]
          })
      ).toEqual({
        comments: [{
          comment: `some text`
        }],
        statusUploadComment: null,
      });
    });

    test(`should handle RESET_STATUS_UPLOAD`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.RESET_STATUS_UPLOAD,
          })
      ).toEqual(initialState);
    });

    test(`should handle SET_STATUS_UPLOAD`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.SET_STATUS_UPLOAD,
            payload: true,
          })
      ).toEqual({
        comments: [],
        statusUploadComment: true,
      });
    });

    test(`should handle UPLOAD_COMMENT`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.UPLOAD_COMMENT,
            payload: `some text`
          })
      ).toEqual({
        comments: `some text`,
        statusUploadComment: null,
      });
    });
  });

  describe(`action creator`, () => {
    test(`loadComments should create LOAD_COMMENTS action`, () => {
      expect(
          ActionCreator.loadComments([{}, {}])
      ).toEqual({
        type: `LOAD_COMMENTS`,
        payload: [{}, {}],
      });
    });

    test(`resetStatusUpload should create RESET_STATUS_UPLOAD action`, () => {
      expect(
          ActionCreator.resetStatusUpload()
      ).toEqual({
        type: `RESET_STATUS_UPLOAD`,
      });
    });

    test(`setStatusUpload should create SET_STATUS_UPLOAD action`, () => {
      expect(
          ActionCreator.setStatusUpload(true)
      ).toEqual({
        type: `SET_STATUS_UPLOAD`,
        payload: true,
      });
    });

    test(`uploadComment should create UPLOAD_COMMENT action`, () => {
      expect(
          ActionCreator.uploadComment({})
      ).toEqual({
        type: `UPLOAD_COMMENT`,
        payload: {},
      });
    });
  });

  describe(`operation`, () => {
    test(`operation loadComment should make a correct API call GET /comments/{id}`, () => {
      const apiMock = new MockAdapter(api);
      const currentOpenFilmId = 100;
      const dispatch = jest.fn();
      const getMockState = () => ({});
      const loaderComments = Operation.loadComments(currentOpenFilmId);
      const modelComment = Comment.parseComments(API_COMMENT);
      const URL = `/comments/${currentOpenFilmId}`;

      apiMock
        .onGet(URL)
        .reply(200, API_COMMENT);

      return loaderComments(dispatch, getMockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_COMMENTS,
            payload: modelComment,
          });
        });
    });
  });

  test(`operation uploadComment should make a correct API call POST  /comments/{id}`, () => {
    const apiMock = new MockAdapter(api);
    const currentOpenFilmId = 100;
    const dispatch = jest.fn();
    const getMockState = () => ({});
    const modelComment = Comment.parseComments(API_COMMENT);
    const uploaderComment = Operation.uploadComment(modelComment, currentOpenFilmId);
    const URL = `/comments/${currentOpenFilmId}`;

    apiMock
      .onPost(URL)
      .reply(200, API_COMMENT);

    return uploaderComment(dispatch, getMockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_STATUS_UPLOAD,
          payload: StatusRequestServer.SUCCESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPLOAD_COMMENT,
          payload: modelComment,
        });
      });
  });
});
