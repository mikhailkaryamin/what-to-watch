import NameSpace from '../name-space.js';

const getAmountRenderFilmCard = (state) => {
  return state[NameSpace.CURRENT_STATE].amountRenderFilmCard;
};

const getCurrentGenre = (state) => {
  return state[NameSpace.CURRENT_STATE].currentGenre;
};

const getCurrentFilm = (state) => {
  return state[NameSpace.CURRENT_STATE].currentFilm;
};

export {
  getAmountRenderFilmCard,
  getCurrentGenre,
  getCurrentFilm,
};
