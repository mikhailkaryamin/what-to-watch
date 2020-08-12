import NameSpace from '../name-space.js';

const getAmountRenderFilmCard = (state) => {
  return state[NameSpace.OPTIONS].amountRenderFilmCard;
};

const getGenre = (state) => {
  return state[NameSpace.OPTIONS].genre;
};

const getFilm = (state) => {
  return state[NameSpace.OPTIONS].film;
};

export {
  getAmountRenderFilmCard,
  getGenre,
  getFilm,
};
