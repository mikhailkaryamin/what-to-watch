import * as actions from './actions.js';

describe(`actions`, () => {
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


  test(`resetAmountRenderFilmCard should create RESET_AMOUNT_RENDER_FILM_CARD action`, () => {
    expect(actions.resetAmountRenderFilmCard()).toEqual({
      type: `RESET_AMOUNT_RENDER_FILM_CARD`,
      payload: null,
    });
  });

  test(`setAmountRenderFilmCard should create SET_AMOUNT_RENDER_FILM_CARD action`, () => {
    expect(actions.setAmountRenderFilmCard()).toEqual({
      type: `SET_AMOUNT_RENDER_FILM_CARD`,
      payload: null,
    });
  });

  test(`setCurrentGenre should create SET_CURRENT_GENRE action`, () => {
    expect(actions.setCurrentGenre(`genre`)).toEqual({
      type: `SET_CURRENT_GENRE`,
      payload: `genre`,
    });
  });

  test(`setCurrentOpenFilm should SET_CURRENT_OPEN_FILM action`, () => {
    expect(actions.setCurrentOpenFilm(`film`)).toEqual({
      type: `SET_CURRENT_OPEN_FILM`,
      payload: `film`,
    });
  });
});
