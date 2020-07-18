import {extend} from '../../utils/utils.js';

const AMOUNT_RENDER_FILM_CARD = 8;
const DEFAULT_GENRE = `All genres`;

const initialState = {
  amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
  currentGenre: DEFAULT_GENRE,
  currentOpenFilm: null,
  currentWatchedFilm: null,
};

const ActionType = {
  RESET_AMOUNT_RENDER_FILM_CARD: `RESET_AMOUNT_RENDER_FILM_CARD`,
  RESET_CURRENT_WATCHED_FILM: `RESET_CURRENT_WATCHED_FILM`,
  SET_AMOUNT_RENDER_FILM_CARD: `SET_AMOUNT_RENDER_FILM_CARD`,
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_CURRENT_OPEN_FILM: `SET_CURRENT_OPEN_FILM`,
  SET_CURRENT_WATCHED_FILM: `SET_CURRENT_WATCHED_FILM`,
};

const ActionCreator = {
  resetAmountRenderFilmCard: () => ({
    type: ActionType.RESET_AMOUNT_RENDER_FILM_CARD,
    payload: null,
  }),

  resetCurrentWatchedFilm: () => ({
    type: ActionType.RESET_CURRENT_WATCHED_FILM,
    payload: null,
  }),

  setAmountRenderFilmCard: () => ({
    type: ActionType.SET_AMOUNT_RENDER_FILM_CARD,
    payload: null,
  }),

  setCurrentGenre: (genre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  }),

  setCurrentOpenFilm: (film) => ({
    type: ActionType.SET_CURRENT_OPEN_FILM,
    payload: film,
  }),

  setCurrentWatchedFilm: (film) => ({
    type: ActionType.SET_CURRENT_WATCHED_FILM,
    payload: film,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.RESET_AMOUNT_RENDER_FILM_CARD): {
      return extend(state, {
        amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
      });
    }

    case (ActionType.RESET_CURRENT_WATCHED_FILM): {
      return extend(state, {
        currentWatchedFilm: action.payload,
      });
    }

    case (ActionType.SET_AMOUNT_RENDER_FILM_CARD): {
      const amountRenderFilmCard = state.amountRenderFilmCard + AMOUNT_RENDER_FILM_CARD;
      return extend(state, {
        amountRenderFilmCard,
      });
    }

    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.SET_CURRENT_OPEN_FILM:
      return extend(state, {
        currentOpenFilm: action.payload,
      });

    case ActionType.SET_CURRENT_WATCHED_FILM:
      return extend(state, {
        currentWatchedFilm: action.payload,
      });
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  reducer,
};
