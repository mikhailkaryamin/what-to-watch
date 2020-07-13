import * as actions from './actions.js';

describe(`actions`, () => {
  test(`getFilms should create GET_FILMS action`, () => {
    expect(actions.getFilms()).toEqual({
      type: `GET_FILMS`,
      payload: null,
    });
  });

  test(`getFilmsByGenre should create GET_FILMS_BY_GENRE action`, () => {
    expect(actions.getFilmsByGenre(`genre`)).toEqual({
      type: `GET_FILMS_BY_GENRE`,
      payload: `genre`,
    });
  });

  test(`getFilmsLikeThis should create GET_FILMS_LIKE_THIS action`, () => {
    expect(actions.getFilmsLikeThis(`like`)).toEqual({
      type: `GET_FILMS_LIKE_THIS`,
      payload: `like`,
    });
  });

  test(`setCurrentGenre should create SET_CURRENT_GENRE action`, () => {
    expect(actions.setCurrentGenre(`genre`)).toEqual({
      type: `SET_CURRENT_GENRE`,
      payload: `genre`,
    });
  });

  test(`setCurrentFilm should SET_CURRENT_FILM action`, () => {
    expect(actions.setCurrentFilm(`film`)).toEqual({
      type: `SET_CURRENT_FILM`,
      payload: `film`,
    });
  });
});
