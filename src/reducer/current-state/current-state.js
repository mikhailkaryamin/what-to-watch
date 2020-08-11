import {extend} from '../../utils/utils.js';

const AMOUNT_RENDER_FILM_CARD = 8;
const DEFAULT_GENRE = `All genres`;

const initialState = {
  amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
  currentGenre: DEFAULT_GENRE,
  currentPlayingFilm: null,
};

const ActionType = {
  RESET_AMOUNT_RENDER_FILM_CARD: `RESET_AMOUNT_RENDER_FILM_CARD`,
  RESET_CURRENT_PLAYING_FILM: `RESET_CURRENT_WATCHED_FILM`,
  SET_AMOUNT_RENDER_FILM_CARD: `SET_AMOUNT_RENDER_FILM_CARD`,
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_CURRENT_PLAYING_FILM: `SET_CURRENT_PLAYING_FILM`,
};

const ActionCreator = {
  resetAmountRenderFilmCard: () => ({
    type: ActionType.RESET_AMOUNT_RENDER_FILM_CARD,
    payload: null,
  }),

  resetCurrentPlayingFilm: () => ({
    type: ActionType.RESET_CURRENT_PLAYING_FILM,
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

  setCurrentPlayingFilm: (film) => ({
    type: ActionType.SET_CURRENT_PLAYING_FILM,
    payload: film,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.RESET_AMOUNT_RENDER_FILM_CARD): {
      return extend(state, {
        amountRenderFilmCard: AMOUNT_RENDER_FILM_CARD,
      });
    }

    case (ActionType.RESET_CURRENT_PLAYING_FILM): {
      return extend(state, {
        currentPlayingFilm: action.payload,
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

    case ActionType.SET_CURRENT_PLAYING_FILM:
      return extend(state, {
        currentPlayingFilm: action.payload,
      });
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  reducer,
};
