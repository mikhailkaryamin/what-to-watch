import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {
  AuthStatus,
  ActionCreator,
  Operation,
  reducer,
} from './user.js';
import User from '../../models/user.js';
import {API_USER} from '../../mocks/testMock.js';

const DEFAULT_USER = {
  id: -1,
  email: ``,
  name: ``,
  avatarUrl: ``,
};

const NEXT_USER = {
  id: 100,
  email: `some@email.ru`,
  name: `Vasya`,
  avatarUrl: `src/s`,
};

const api = createAPI(() => {});

const initialState = {
  authStatus: null,
  user: DEFAULT_USER,
};

describe(`user`, () => {
  describe(`reducer`, () => {
    test(`should handle initial state`, () => {
      expect(
          reducer(undefined, {})
      ).toEqual(initialState);
    });

    test(`should handle CHECK_AUTHORIZATION`, () => {
      expect(
          reducer({
            authStatus: AuthStatus.NO_AUTH
          }, {
            type: `CHECK_AUTHORIZATION`,
            payload: AuthStatus.AUTH,
          })
      ).toEqual({
        authStatus: AuthStatus.AUTH
      });
    });

    test(`should handle SET_USER`, () => {
      expect(
          reducer({
            user: DEFAULT_USER,
          }, {
            type: `SET_USER`,
            payload: NEXT_USER,
          })
      ).toEqual({
        user: NEXT_USER
      });
    });

  });

  describe(`action creator`, () => {
    test(`checkAuthorization should create CHECK_AUTHORIZATION action`, () => {
      expect(
          ActionCreator.checkAuthorization(`Auth`)
      ).toEqual({
        type: `CHECK_AUTHORIZATION`,
        payload: `Auth`,
      });
    });

    test(`signIn should create SET_USER action`, () => {
      expect(
          ActionCreator.signIn({
            user: `some user`
          })
      ).toEqual({
        type: `SET_USER`,
        payload: {
          user: `some user`
        },
      });
    });
  });

  describe(`operation`, () => {
    test(`operation checkAuthorization should make a correct API GET call /login`, () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const checkAuth = Operation.checkAuthorization();
      const mockState = () => {};
      const modelUser = User.parseUser(API_USER);
      const URL = `/login`;

      apiMock
        .onGet(URL)
        .reply(200, API_USER);

      return checkAuth(dispatch, mockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: `CHECK_AUTHORIZATION`,
            payload: `AUTH`,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: `SET_USER`,
            payload: modelUser,
          });
        });
    });
  });

  test(`operation signIn should make a correct API POST call /login`, () => {
    const MOCK_USER = {
      email: `email@email.ru`,
      password: `password`,
    };
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const signIn = Operation.signIn(MOCK_USER);
    const mockState = () => {};
    const modelUser = User.parseUser(API_USER);
    const URL = `/login`;

    apiMock
      .onPost(URL, MOCK_USER)
      .reply(200, API_USER);

    return signIn(dispatch, mockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `CHECK_AUTHORIZATION`,
          payload: `AUTH`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: `SET_USER`,
          payload: modelUser,
        });
        expect(apiMock.history.post[0].data).toBe(JSON.stringify(MOCK_USER));
      });
  });
});
