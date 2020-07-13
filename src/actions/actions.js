import ActionType from './action-type.js';

const getFilms = () => ({
  type: ActionType.GET_FILMS,
  payload: null,
});

const getFilmsByGenre = (genre) => ({
  type: ActionType.GET_FILMS_BY_GENRE,
  payload: genre,
});

const getFilmsLikeThis = (film) => ({
  type: ActionType.GET_FILMS_LIKE_THIS,
  payload: film,
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
  getFilms,
  getFilmsByGenre,
  getFilmsLikeThis,
  setCurrentGenre,
  setCurrentFilm
};
