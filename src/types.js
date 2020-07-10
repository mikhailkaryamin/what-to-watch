import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';

const filmCardPropTypes = shape({
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  name: string,
  posterImage: string,
  rating: number,
  released: number,
  runTime: number,
  scoreCount: number,
  starring: arrayOf(string),
});

export {
  filmCardPropTypes,
};
