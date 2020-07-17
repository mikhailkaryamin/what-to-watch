import {
  createSelector,
} from 'reselect';
import NameSpace from '../name-space.js';

const DEFAULT_GENRES = [`All genres`];

const getFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

const getCurrentGenre = (state) => {
  return state[NameSpace.CURRENT_STATE].currentGenre;
};

const getPromoFilm = (state) => {
  return state[NameSpace.FILMS].promoFilm;
};

const getFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,

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
    getCurrentGenre,

    (films, currentGenre) => {
      return films
        .filter((film) => film.genre === currentGenre)
        .slice(0, 4);
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
  getFilmsByGenre,
  getFilmsLikeThis,
  getGenres,
  getPromoFilm,
};
