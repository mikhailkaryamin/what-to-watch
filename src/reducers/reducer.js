import {getFilms} from '../mocks/films.js';
import {getCommentList} from '../mocks/comments.js';
import {extend} from '../utils/utils.js';
import ActionType from '../actions/action-type.js';

const DEFAULT_GENRES = [`All genres`];

const getFilmsByGenre = (films, genre, id = null) => {
  if (genre === DEFAULT_GENRES[0]) {
    return films;
  }

  return films.filter((film) => film.genre === genre && film.id !== id);
};

const films = getFilms();
const comments = getCommentList();

const getGenres = () => {
  const genres = new Set(films.map((film) => film.genre));
  return DEFAULT_GENRES.concat(Array.from(genres));
};

const initialState = {
  comments,
  currentFilm: null,
  currentGenre: DEFAULT_GENRES[0],
  films,
  filmsByGenre: films,
  filmsLikeThis: [],
  genres: getGenres(),
  promoFilm: films[0],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {
        filmsByGenre: state.films.slice(),
      });

    case ActionType.GET_FILMS_BY_GENRE:
      const filmsByGenre = getFilmsByGenre(state.films, action.payload);
      return extend(state, {
        filmsByGenre,
      });

    case ActionType.GET_FILMS_LIKE_THIS:
      const filmsLikeThis = getFilmsByGenre(state.films, action.payload.genre, action.payload.id);
      return extend(state, {
        filmsLikeThis,
      });

    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.SET_CURRENT_FILM:
      return extend(state, {
        currentFilm: action.payload,
      });

    default:
      return state;
  }
};

export {
  reducer,
};
