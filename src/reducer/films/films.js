import Film from '../../models/film.js';
import {extend} from '../../utils/utils.js';

const initialState = {
  films: [],
  promoFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    const URL = `films`;

    return api.get(URL)
      .then((response) => {
        const films = Film.parseFilms(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    const URL = `/films/promo`;

    return api.get(URL)
      .then((response) => {
        const promoFilm = Film.parseFilm(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
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
