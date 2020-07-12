import {
  getId,
  getRandomElement,
  getRandomNumber,
} from '../utils/utils.js';
import {
  ACTORS,
  DESCRIPTIONS,
  Rating,
} from './consts.js';

const COUNT_FILM_COMMENTS = 5;
const MS_IN_WEEK = 604800000;
const DateSetting = {
  MIN: Date.now() - MS_IN_WEEK,
  MAX: Date.now()
};

const getComment = () => {
  return ({
    id: getId(),
    user: {
      id: getId(),
      name: getRandomElement(ACTORS),
    },
    rating: getRandomNumber(Rating.MAX),
    text: getRandomElement(DESCRIPTIONS),
    date: getRandomNumber(DateSetting.MAX, DateSetting.MIN),
  });
};

const getCommentList = () => {
  let filmCards = new Array(COUNT_FILM_COMMENTS).fill(``);

  return filmCards.map(() => getComment());
};

export {
  getCommentList
};
