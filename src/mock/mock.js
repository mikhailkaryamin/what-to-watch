import {getRandomElement} from '../utils/utils.js';

const NAMES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`
];
const IMAGES = [
  `img/aviator.jpg`,
  `img/bg-the-grand-budapest-hotel.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/johnny-english.jpg`,
  `img/orlando.jpg`
];

const RELEASED = [
  2012,
  2013,
  2014,
  2015,
  2016
];

const GENRES = [
  `Comedy`,
  `Crime`,
  `Drama`,
  `Horror`,
  `Romance`,
];

const getFilmCard = () => {
  return ({
    name: getRandomElement(NAMES),
    released: getRandomElement(RELEASED),
    genre: getRandomElement(GENRES),
    posterImage: getRandomElement(IMAGES),
  });
};

const getFilmCardsList = (count) => {
  let filmCards = new Array(count).fill(``);

  return filmCards.map(() => getFilmCard());
};

export {
  getFilmCardsList,
};
