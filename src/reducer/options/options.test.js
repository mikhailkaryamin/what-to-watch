import {
  ActionCreator,
  reducer,
} from './current-state.js';

const AMOUNT_RENDER_FILM_CARD = 8;
const DEFAULT_GENRE = `All genres`;

const initialState = {
  amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
  genre: DEFAULT_GENRE,
  film: null,
};

describe(`current state`, () => {
  describe(`action creator`, () => {
    test(`resetAmountRenderFilmCard should create RESET_AMOUNT_RENDER_FILM_CARD action`, () => {
      expect(ActionCreator.resetAmountRenderFilmCard()).toEqual({
        type: `RESET_AMOUNT_RENDER_FILM_CARD`,
        payload: null,
      });
    });

    test(`resetFilm should create RESET_FILM action`, () => {
      expect(ActionCreator.resetFilm()).toEqual({
        type: `RESET_FILM`,
        payload: null,
      });
    });

    test(`setAmountRenderFilmCard should create SET_AMOUNT_RENDER_FILM_CARD action`, () => {
      expect(ActionCreator.setAmountRenderFilmCard()).toEqual({
        type: `SET_AMOUNT_RENDER_FILM_CARD`,
        payload: null,
      });
    });

    test(`setGenre should create SET_GENRE action`, () => {
      expect(ActionCreator.setGenre(`genre`)).toEqual({
        type: `SET_GENRE`,
        payload: `genre`,
      });
    });

    test(`setFilm should SET_FILM action`, () => {
      expect(ActionCreator.setFilm(`film`)).toEqual({
        type: `SET_FILM`,
        payload: `film`,
      });
    });
  });

  describe(`reducer`, () => {
    test(`should handle initial state`, () => {
      expect(
          reducer(undefined, {})
      ).toEqual(initialState);
    });

    test(`should handle RESET_AMOUNT_RENDER_FILM_CARD`, () => {
      expect(
          reducer({
            amountRenderFilmCard: 20,
          }, {
            type: `RESET_AMOUNT_RENDER_FILM_CARD`,
            payload: null,
          })).toEqual(
          {
            amountRenderFilmCard: 8,
          }
      );
    });

    test(`should handle RESET_FILM`, () => {
      expect(
          reducer({
            film: {
              film: `name film`
            },
          }, {
            type: `RESET_FILM`,
            payload: null,
          })).toEqual(
          {
            film: null,
          }
      );
    });

    test(`should handle SET_AMOUNT_RENDER_FILM_CARD`, () => {
      expect(
          reducer({
            amountRenderFilmCard: 8,
          }, {
            type: `SET_AMOUNT_RENDER_FILM_CARD`,
            payload: null,
          })).toEqual(
          {
            amountRenderFilmCard: 16,
          }
      );
    });

    test(`should handle SET_GENRE`, () => {
      expect(
          reducer({
            genre: `All genres`,
          }, {
            type: `SET_GENRE`,
            payload: `Western`
          })).toEqual(
          {
            genre: `Western`
          });
    });

    test(`should handle SET_FILM`, () => {
      expect(
          reducer({
            film: null,
          }, {
            type: `SET_FILM`,
            payload: {
              name: `some film`
            }
          })).toEqual(
          {
            film: {
              name: `some film`
            }
          });
    });
  });
});
