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

const getCommentList = (count) => {
  let filmCards = new Array(count).fill(``);

  return filmCards.map(() => getComment());
};

export {
  getCommentList
};
