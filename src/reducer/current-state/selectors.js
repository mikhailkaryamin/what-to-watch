import NameSpace from '../name-space.js';

const getAmountRenderFilmCard = (state) => {
  return state[NameSpace.CURRENT_STATE].amountRenderFilmCard;
};

const getCurrentGenre = (state) => {
  return state[NameSpace.CURRENT_STATE].currentGenre;
};

const getCurrentOpenFilm = (state) => {
  return state[NameSpace.CURRENT_STATE].currentOpenFilm;
};

const getCurrentWatchedFilm = (state) => {
  return state[NameSpace.CURRENT_STATE].currentWatchedFilm;
};

export {
  getAmountRenderFilmCard,
  getCurrentGenre,
  getCurrentOpenFilm,
  getCurrentWatchedFilm,
};
