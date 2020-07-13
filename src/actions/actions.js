import ActionType from './action-type.js';

const getFilmsByGenre = (genre) => ({
  type: ActionType.GET_FILMS_BY_GENRE,
  payload: genre,
});

const getFilmsLikeThis = (film) => ({
  type: ActionType.GET_FILMS_LIKE_THIS,
  payload: film,
});

const resetAmountRenderFilmCard = () => ({
  type: ActionType.RESET_AMOUNT_RENDER_FILM_CARD,
  payload: null,
});

const setAmountRenderFilmCard = () => ({
  type: ActionType.SET_AMOUNT_RENDER_FILM_CARD,
  payload: null,
});

const setCurrentFilm = (film) => ({
  type: ActionType.SET_CURRENT_FILM,
  payload: film,
});

const setCurrentGenre = (genre) => ({
  type: ActionType.SET_CURRENT_GENRE,
  payload: genre,
});

export {
  getFilmsByGenre,
  getFilmsLikeThis,
  resetAmountRenderFilmCard,
  setAmountRenderFilmCard,
  setCurrentGenre,
  setCurrentFilm
};
