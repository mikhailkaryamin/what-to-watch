import ActionType from './action-type.js';

const getFilms = () => ({
  type: ActionType.GET_FILMS,
  payload: null,
});

const getFilmsByGenre = (genre) => ({
  type: ActionType.GET_FILMS_BY_GENRE,
  payload: genre,
});

const getFilmsLikeThis = (genre) => ({
  type: ActionType.GET_FILMS_LIKE_THIS,
  payload: genre,
});

const setCurrentGenre = (genre) => ({
  type: ActionType.SET_CURRENT_GENRE,
  payload: genre,
});

const setCurrentFilm = (film) => ({
  type: ActionType.SET_CURRENT_FILM,
  payload: film,
});

export {
  getFilms,
  getFilmsByGenre,
  getFilmsLikeThis,
  setCurrentGenre,
  setCurrentFilm
};
