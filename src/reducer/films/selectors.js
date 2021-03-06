import {
  createSelector,
} from 'reselect';
import NameSpace from '../name-space.js';

const DEFAULT_GENRES = [`All genres`];
const LIKE_THIS_CARDS_COUNT = 4;

const getFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

const getCurrentFilterGenre = (state) => {
  return state[NameSpace.OPTIONS].genre;
};

const getOpenFilmGenre = (state) => {
  if (state[NameSpace.OPTIONS].film === null) {
    return null;
  }

  return state[NameSpace.OPTIONS].film.genre;
};

const getPromoFilm = (state) => {
  return state[NameSpace.FILMS].promoFilm;
};

const getStatusFilms = (state) => {
  return state[NameSpace.FILMS].statusLoadFilms;
};

const getStatusPromo = (state) => {
  return state[NameSpace.FILMS].statusLoadPromo;
};

const getFilmsByGenre = createSelector(
    getFilms,
    getCurrentFilterGenre,

    (films, currentGenre) => {
      if (currentGenre === DEFAULT_GENRES[0]) {
        return films;
      }

      return films
        .filter((film) => film.genre === currentGenre);
    }
);


const getFilmsLikeThis = createSelector(
    getFilms,
    getOpenFilmGenre,

    (films, currentGenre) => {
      return films
        .filter((film) => film.genre === currentGenre)
        .slice(0, LIKE_THIS_CARDS_COUNT);
    }
);

const getGenres = createSelector(
    getFilms,

    (films) => {
      const genres = new Set(films.map((film) => film.genre));
      return DEFAULT_GENRES.concat(Array.from(genres));
    }
);

export {
  getFilms,
  getFilmsByGenre,
  getFilmsLikeThis,
  getGenres,
  getPromoFilm,
  getStatusFilms,
  getStatusPromo,
};
