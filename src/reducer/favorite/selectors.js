import NameSpace from '../name-space.js';

const getFavoriteFilms = (state) => {
  return state[NameSpace.FAVORITE].favoriteFilms;
};

export {getFavoriteFilms};
