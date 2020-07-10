import {
  getRandomElement,
  getRandomNumber,
} from '../utils/utils.js';
import {
  ACTORS,
  DESCRIPTIONS,
  GENRES,
  IMAGES,
  NAMES,
  Rating,
  RunTime,
  ScoreCount,
  STARRING_MAX,
  YearReleased,
} from './consts.js';

const getIdCard = () => {
  const idCard = Number(Date.now() + Math.random() * 10);
  return idCard;
};

const getStarring = () => {
  let starring = new Set();
  for (let i = 0; i < STARRING_MAX; i++) {
    starring.add(ACTORS[getRandomNumber(ACTORS.length - 1)]);
  }

  return Array.from(starring);
};

const getFilmCard = () => {
  return ({
    backgroundImage: getRandomElement(IMAGES),
    description: getRandomElement(DESCRIPTIONS),
    director: getRandomElement(ACTORS),
    genre: getRandomElement(GENRES),
    id: getIdCard(),
    name: getRandomElement(NAMES),
    posterImage: getRandomElement(IMAGES),
    rating: getRandomNumber(Rating.MAX),
    released: getRandomNumber(YearReleased.MAX, YearReleased.MIN),
    runTime: getRandomNumber(RunTime.MAX, RunTime.MIN),
    scoreCount: getRandomNumber(ScoreCount.MAX),
    starring: getStarring(),
  });
};

const getFilmCardsList = (count) => {
  let filmCards = new Array(count).fill(``);

  return filmCards.map(() => getFilmCard());
};

export {
  getFilmCardsList,
};
