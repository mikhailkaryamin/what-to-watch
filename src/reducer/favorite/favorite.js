import Film from '../../models/film.js';

import {FavoriteButtonPlace} from '../../const.js';
import {extend} from '../../utils/utils.js';

import {ActionCreator as ActionFilms} from '../films/films.js';
import {ActionCreator as ActionOptions} from '../options/options.js';

const RESPONSE_STATUS_OK = 200;

const initialState = {
  favoriteFilms: [],
};

const ActionType = {
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  REMOVE_FAVORITE_FILM: `REMOVE_FAVORITE_FILM`,
  SET_FAVORITE_FILM: `SET_FAVORITE_FILM`,
};

const ActionCreator = {
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  }),

  removeFavoriteFilm: (film) => ({
    type: ActionType.REMOVE_FAVORITE_FILM,
    payload: film,
  }),

  setFavoriteFilm: (film) => ({
    type: ActionType.SET_FAVORITE_FILM,
    payload: film,
  })
};

const onFilmFavoriteChange = (film, place, dispatch) => {
  if (FavoriteButtonPlace.MAIN === place) {
    dispatch(ActionFilms.setPromoFilm(film));
  }

  if (FavoriteButtonPlace.DETAILED === place) {
    dispatch(ActionOptions.setFilm(film));
  }
};

const Operation = {
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    const URL = `/favorite`;

    return api.get(URL)
      .then((response) => {
        const films = Film.parseFilms(response.data);
        dispatch(ActionCreator.loadFavoriteFilms(films));
      })
      .catch((err) => {
        throw err;
      });
  },

  removeFavoriteFilm: (film, place) => (dispatch, getState, api) => {
    const URL = `/favorite/${film.id}/0`;

    return api.post(URL)
      .then((response) => {
        const responseStatus = response.status;

        const filmNotFavorite = extend(film, {
          isFavorite: false,
        });

        if (responseStatus === RESPONSE_STATUS_OK) {
          dispatch(ActionCreator.removeFavoriteFilm(filmNotFavorite));
        }

        onFilmFavoriteChange(filmNotFavorite, place, dispatch);

      })
      .catch((err) => {
        throw err;
      });
  },

  setFavoriteFilm: (film, place) => (dispatch, getState, api) => {
    const URL = `/favorite/${film.id}/1`;

    return api.post(URL)
      .then((response) => {
        const responseStatus = response.status;
        const filmFavorite = extend(film, {
          isFavorite: true,
        });

        if (responseStatus === RESPONSE_STATUS_OK) {
          dispatch(ActionCreator.setFavoriteFilm(filmFavorite));
        }

        onFilmFavoriteChange(filmFavorite, place, dispatch);

      })
      .catch((err) => {
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });

    case ActionType.REMOVE_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: state.favoriteFilms.filter((film) => film.id !== action.payload.id)
      });

    case ActionType.SET_FAVORITE_FILM:

      return extend(state, {
        favoriteFilms: [action.payload, ...state.favoriteFilms]
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
