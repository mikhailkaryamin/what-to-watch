import {reducer} from './reducer.js';
import ActionType from '../actions/action-type.js';

const initialState = {
  comments: [],
  currentFilm: null,
  currentGenre: ``,
  films: [],
  filmsByGenre: [],
  filmsLikeThis: [],
  genres: [],
  promoFilm: {},
};

describe(`reducer`, () => {
  test(`should handle initial state`, () => {
    expect(
        reducer(initialState, {})
    ).toEqual(initialState);
  });

  test(`should handle GET_FILMS`, () => {
    expect(
        reducer({films: [{
          film: `some film`
        }]}, {
          type: ActionType.GET_FILMS,
          payload: null,
        })).toEqual(
        {
          films: [{
            film: `some film`
          }]
        }
    );
  });

  test(`should handle GET_FILMS_BY_GENRE`, () => {
    expect(
        reducer({
          films: [{
            genre: `comedy`
          }],
          filmsByGenre: [],
        }, {
          type: ActionType.GET_FILMS_BY_GENRE,
          payload: `comedy`,
        })).toEqual(
        {
          films: [{
            genre: `comedy`
          }],
          filmsByGenre: [{
            genre: `comedy`
          }]
        }
    );
  });

  test(`should handle GET_FILMS_LIKE_THIS`, () => {
    expect(
        reducer({
          films: [{
            genre: `crime`,
          }],
        }, {
          type: ActionType.GET_FILMS_LIKE_THIS,
          payload: {genre: `crime`},
        })).toEqual(
        {
          films: [{
            genre: `crime`
          }],
          filmsLikeThis: [{
            genre: `crime`
          }],
        });
  });

  test(`should handle SET_CURRENT_FILM`, () => {
    expect(
        reducer({
          currentFilm: null,
        }, {
          type: ActionType.SET_CURRENT_FILM,
          payload: {
            name: `some film`
          }
        })).toEqual(
        {
          currentFilm: {
            name: `some film`
          }
        });
  });

  test(`should handle SET_CURRENT_GENRE`, () => {
    expect(
        reducer({
          currentGenre: `All genres`,
        }, {
          type: ActionType.SET_CURRENT_GENRE,
          payload: `Western`
        })).toEqual(
        {
          currentGenre: `Western`
        });
  });
});
