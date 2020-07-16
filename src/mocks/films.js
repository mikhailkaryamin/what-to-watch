import {
  getId,
  getRandomElement,
  getRandomNumber,
} from '../utils/utils.js';
import {
  ACTORS,
  DESCRIPTIONS,
  GENRES,
  IMAGES,
  VIDEO_LINKS,
  NAMES,
  Rating,
  RunTime,
  ScoreCount,
  STARRING_MAX,
  YearReleased,
} from './consts.js';

const COUNT_FILM_CARDS = 20;

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
    id: getId(),
    name: getRandomElement(NAMES),
    previewVideoLink: getRandomElement(VIDEO_LINKS),
    posterImage: getRandomElement(IMAGES),
    rating: getRandomNumber(Rating.MAX),
    released: getRandomNumber(YearReleased.MAX, YearReleased.MIN),
    runTime: getRandomNumber(RunTime.MAX, RunTime.MIN),
    scoreCount: getRandomNumber(ScoreCount.MAX),
    starring: getStarring(),
    video: getRandomElement(VIDEO_LINKS),
  });
};

const getFilms = () => {
  let filmCards = new Array(COUNT_FILM_CARDS).fill(``);

  return filmCards.map(() => getFilmCard());
};

export {
  getFilms,
};
