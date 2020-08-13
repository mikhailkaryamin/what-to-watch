import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {
  ActionType,
  ActionCreator,
  Operation,
  reducer,
} from './films.js';
import Film from '../../models/film.js';
import {
  API_FILMS,
  API_PROMO_FILM,
} from '../../mocks/testMock.js';

const initialState = {
  films: [],
  promoFilm: null,
  statusLoad: false,
};

const api = createAPI(() => {});

describe(`films`, () => {
  describe(`reducer`, () => {
    test(`should handle initial state`, () => {
      expect(
          reducer(undefined, {})
      ).toEqual(initialState);
    });

    test(`should handle LOAD_FILMS`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.LOAD_FILMS,
            payload: [{
              films: `some text`
            }]
          })
      ).toEqual({
        films: [{
          films: `some text`
        }],
        promoFilm: null,
        statusLoad: false,
      });
    });

    test(`should handle LOAD_PROMO_FILM`, () => {
      expect(
          reducer(initialState, {
            type: ActionType.LOAD_PROMO_FILM,
            payload: [{
              promoFilm: `some text`
            }]
          })
      ).toEqual({
        films: [],
        promoFilm: [{
          promoFilm: `some text`
        }],
        statusLoad: false,
      });
    });
  });

  describe(`action creator`, () => {
    test(`loadFilms should create LOAD_FILMS action`, () => {
      expect(
          ActionCreator.loadFilms(`films`)
      ).toEqual({
        type: `LOAD_FILMS`,
        payload: `films`,
      });
    });

    test(`loadPromoFilm should create LOAD_PROMO_FILM action`, () => {
      expect(
          ActionCreator.loadPromoFilm(`film`)
      ).toEqual({
        type: `LOAD_PROMO_FILM`,
        payload: `film`,
      });
    });
  });

  describe(`operations`, () => {
    test(`operation loadFilms should make a correct API call /films`, () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const loaderFilms = Operation.loadFilms();
      const modelFilms = Film.parseFilms(API_FILMS);
      const mockState = () => {};
      const URL = `films`;

      apiMock
        .onGet(URL)
        .reply(200, API_FILMS);

      return loaderFilms(dispatch, mockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_FILMS,
            payload: modelFilms,
          });
        });
    });

    test(`operation loadPromoFilm should make a correct API call /films/promo`, () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const loaderPromoFilm = Operation.loadPromoFilm();
      const modelFilm = Film.parseFilm(API_PROMO_FILM);
      const mockState = () => {};
      const URL = `/films/promo`;

      apiMock
        .onGet(URL)
        .reply(200, API_PROMO_FILM);

      return loaderPromoFilm(dispatch, mockState, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_PROMO_FILM,
            payload: modelFilm,
          });
        });
    });
  });
});
