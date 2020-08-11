import NameSpace from '../name-space.js';

const getAmountRenderFilmCard = (state) => {
  return state[NameSpace.CURRENT_STATE].amountRenderFilmCard;
};

const getCurrentGenre = (state) => {
  return state[NameSpace.CURRENT_STATE].currentGenre;
};

const getCurrentPlayingFilm = (state) => {
  return state[NameSpace.CURRENT_STATE].currentPlayingFilm;
};

export {
  getAmountRenderFilmCard,
  getCurrentGenre,
  getCurrentPlayingFilm,
};
