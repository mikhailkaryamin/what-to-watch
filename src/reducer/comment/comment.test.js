import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {
  ActionType,
  ActionCreator,
  Operation,
  reducer,
} from './comment.js';
import Comment from '../../models/comment.js';
import {API_COMMENT} from '../../mocks/testMock.js';

const api = createAPI(() => {});
const initialState = {
  comments: []
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
        }]
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
  });

  describe(`operation`, () => {
    test(`operation loadComment should make a correct API call /comments/{id}`, () => {
      const apiMock = new MockAdapter(api);
      const currentOpenFilmId = 100;
      const dispatch = jest.fn();
      const loaderComments = Operation.loadComments();
      const modelComment = Comment.parseComments(API_COMMENT);
      const mockState = () => ({
        CURRENT_STATE: {
          currentOpenFilm: {
            id: currentOpenFilmId,
          }
        }
      });
      const URL = `/comments/${currentOpenFilmId}`;

      apiMock
        .onGet(URL)
        .reply(200, API_COMMENT);

      return loaderComments(dispatch, mockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_COMMENTS,
            payload: modelComment,
          });
        });
    });
  });
});
