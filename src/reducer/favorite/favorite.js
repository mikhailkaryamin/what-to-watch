import Film from '../../models/film.js';

import {extend} from '../../utils/utils.js';

import {ActionCreator as ActionFilm} from '../options/options.js';

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

  removeFavoriteFilm: (id) => (dispatch, getState, api) => {
    const URL = `/favorite/${id}/0`;

    return api.post(URL)
      .then((response) => {
        const responseStatus = response.status;

        if (responseStatus === RESPONSE_STATUS_OK) {
          const film = Film.parseFilm(response.data);
          dispatch(ActionCreator.removeFavoriteFilm(film));
          dispatch(ActionFilm.setFilm(film));
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  setFavoriteFilm: (id) => (dispatch, getState, api) => {
    const URL = `/favorite/${id}/1`;

    return api.post(URL)
      .then((response) => {
        const responseStatus = response.status;

        if (responseStatus === RESPONSE_STATUS_OK) {
          const film = Film.parseFilm(response.data);
          dispatch(ActionCreator.setFavoriteFilm(film));
          dispatch(ActionFilm.setFilm(film));
        }
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
