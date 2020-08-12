import {extend} from '../../utils/utils.js';

const AMOUNT_RENDER_FILM_CARD = 8;
const DEFAULT_GENRE = `All genres`;

const initialState = {
  amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
  genre: DEFAULT_GENRE,
  film: null,
};

const ActionType = {
  RESET_AMOUNT_RENDER_FILM_CARD: `RESET_AMOUNT_RENDER_FILM_CARD`,
  RESET_PLAYING_FILM: `RESET_PLAYING_FILM`,
  SET_AMOUNT_RENDER_FILM_CARD: `SET_AMOUNT_RENDER_FILM_CARD`,
  SET_GENRE: `SET_CURRENT_GENRE`,
  SET_FILM: `SET_CURRENT_FILM`,
};

const ActionCreator = {
  resetAmountRenderFilmCard: () => ({
    type: ActionType.RESET_AMOUNT_RENDER_FILM_CARD,
    payload: null,
  }),

  resetPlayingFilm: () => ({
    type: ActionType.RESET_PLAYING_FILM,
    payload: null,
  }),

  setAmountRenderFilmCard: () => ({
    type: ActionType.SET_AMOUNT_RENDER_FILM_CARD,
    payload: null,
  }),

  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),

  setFilm: (film) => ({
    type: ActionType.SET_FILM,
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

    case (ActionType.RESET_PLAYING_FILM): {
      return extend(state, {
        film: action.payload,
      });
    }

    case (ActionType.SET_AMOUNT_RENDER_FILM_CARD): {
      const amountRenderFilmCard = state.amountRenderFilmCard + AMOUNT_RENDER_FILM_CARD;
      return extend(state, {
        amountRenderFilmCard,
      });
    }

    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.SET_FILM:
      return extend(state, {
        film: action.payload,
      });
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  reducer,
};
