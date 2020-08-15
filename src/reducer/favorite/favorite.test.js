import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
} from './favorite.js';
import Film from '../../models/film.js';
import {
  API_FILM,
  API_FILM_FAVORITE,
  API_FILMS,
} from '../../mocks/testMock.js';

const initialState = {
  favoriteFilms: [],
};

const api = createAPI(() => {});

describe(`favorite`, () => {
  describe(`reducer`, () => {
    test(`should handle initial state`, () => {
      expect(
          reducer(undefined, {})
      ).toEqual(initialState);
    });

    test(`should handle LOAD_FAVORITE_FILMS`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.LOAD_FAVORITE_FILMS,
            payload: [{
              favoriteFilms: `favorite film`
            }]
          })
      ).toEqual({
        favoriteFilms: [{
          favoriteFilms: `favorite film`
        }],
      });
    });

    test(`should handle REMOVE_FAVORITE_FILM`, () => {
      expect(
          reducer({
            favoriteFilms: [{id: 10}, {id: 25}],
          }, {
            type: ActionType.REMOVE_FAVORITE_FILM,
            payload: {
              id: 10
            }
          })
      ).toEqual({
        favoriteFilms: [{id: 25}],
      });
    });

    test(`should handle SET_FAVORITE_FILM`, () => {
      expect(
          reducer({
            favoriteFilms: [`second film`, `first film`],
          }, {
            type: ActionType.SET_FAVORITE_FILM,
            payload: `third film`
          })
      ).toEqual({
        favoriteFilms: [`third film`, `second film`, `first film`],
      });
    });

  });

  describe(`action creator`, () => {
    test(`loadFavoriteFilms should create LOAD_FAVORITE_FILMS action`, () => {
      expect(
          ActionCreator.loadFavoriteFilms(`film`)
      ).toEqual({
        type: `LOAD_FAVORITE_FILMS`,
        payload: `film`,
      });
    });

    test(`removeFavoriteFilm should create REMOVE_FAVORITE_FILM action`, () => {
      expect(
          ActionCreator.removeFavoriteFilm(`film`)
      ).toEqual({
        type: `REMOVE_FAVORITE_FILM`,
        payload: `film`,
      });
    });

    test(`setFavoriteFilm should create SET_FAVORITE_FILM action`, () => {
      expect(
          ActionCreator.setFavoriteFilm(`films`)
      ).toEqual({
        type: `SET_FAVORITE_FILM`,
        payload: `films`,
      });
    });
  });

  describe(`operations`, () => {
    test(`operation loadFavoriteFilms should make a correct API call /favorite`, () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const loaderFavoriteFilms = Operation.loadFavoriteFilms();
      const modelFavoriteFilms = Film.parseFilms(API_FILMS);
      const mockState = () => {};
      const URL = `/favorite`;

      apiMock
        .onGet(URL)
        .reply(200, API_FILMS);

      return loaderFavoriteFilms(dispatch, mockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_FAVORITE_FILMS,
            payload: modelFavoriteFilms,
          });
        });
    });

    test(`operations removeFavoriteFilm should make a correct API call POST remove favorite`, () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const modelFavoriteFilm = Film.parseFilm(API_FILM);
      const removerFavoriteFilm = Operation.removeFavoriteFilm(modelFavoriteFilm, `src`);
      const mockState = () => {};
      const URL = `/favorite/1/0`;

      apiMock
        .onPost(URL)
        .reply(200, API_FILM);
      return removerFavoriteFilm(dispatch, mockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.REMOVE_FAVORITE_FILM,
            payload: modelFavoriteFilm,
          });
        });
    });
  });

  test(`operations setFavoriteFilm should make a correct API call POST add favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const modelFavoriteFilm = Film.parseFilm(API_FILM_FAVORITE);
    const setterFavoriteFilm = Operation.setFavoriteFilm(modelFavoriteFilm, `src`);
    const mockState = () => {};
    const URL = `/favorite/1/1`;

    apiMock
      .onPost(URL)
      .reply(200, API_FILM_FAVORITE);

    return setterFavoriteFilm(dispatch, mockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_FILM,
          payload: modelFavoriteFilm,
        });
      });
  });
});
