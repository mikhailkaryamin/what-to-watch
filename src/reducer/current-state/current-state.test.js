import {
  ActionCreator,
  reducer,
} from './current-state.js';

const AMOUNT_RENDER_FILM_CARD = 8;
const DEFAULT_GENRE = `All genres`;

const initialState = {
  amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
  currentGenre: DEFAULT_GENRE,
  currentPlayingFilm: null,
};

describe(`current state`, () => {
  describe(`action creator`, () => {
    test(`resetAmountRenderFilmCard should create RESET_AMOUNT_RENDER_FILM_CARD action`, () => {
      expect(ActionCreator.resetAmountRenderFilmCard()).toEqual({
        type: `RESET_AMOUNT_RENDER_FILM_CARD`,
        payload: null,
      });
    });

    test(`resetCurrentPlayingFilm should create RESET_CURRENT_PLAYING_FILM action`, () => {
      expect(ActionCreator.resetCurrentPlayingFilm()).toEqual({
        type: `RESET_CURRENT_WATCHED_FILM`,
        payload: null,
      });
    });

    test(`setAmountRenderFilmCard should create SET_AMOUNT_RENDER_FILM_CARD action`, () => {
      expect(ActionCreator.setAmountRenderFilmCard()).toEqual({
        type: `SET_AMOUNT_RENDER_FILM_CARD`,
        payload: null,
      });
    });

    test(`setCurrentGenre should create SET_CURRENT_GENRE action`, () => {
      expect(ActionCreator.setCurrentGenre(`genre`)).toEqual({
        type: `SET_CURRENT_GENRE`,
        payload: `genre`,
      });
    });

    test(`setCurrentPlayingFilm should SET_CURRENT_PLAYING_FILM action`, () => {
      expect(ActionCreator.setCurrentPlayingFilm(`film`)).toEqual({
        type: `SET_CURRENT_PLAYING_FILM`,
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

    test(`should handle RESET_CURRENT_PLAYING_FILM`, () => {
      expect(
          reducer({
            currentPlayingFilm: {
              film: `name film`
            },
          }, {
            type: `RESET_CURRENT_PLAYING_FILM`,
            payload: null,
          })).toEqual(
          {
            currentPlayingFilm: null,
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

    test(`should handle SET_CURRENT_GENRE`, () => {
      expect(
          reducer({
            currentGenre: `All genres`,
          }, {
            type: `SET_CURRENT_GENRE`,
            payload: `Western`
          })).toEqual(
          {
            currentGenre: `Western`
          });
    });

    test(`should handle SET_CURRENT_PLAYING_FILM`, () => {
      expect(
          reducer({
            currentPlayingFilm: null,
          }, {
            type: `SET_CURRENT_PLAYING_FILM`,
            payload: {
              name: `some film`
            }
          })).toEqual(
          {
            currentPlayingFilm: {
              name: `some film`
            }
          });
    });
  });
});
