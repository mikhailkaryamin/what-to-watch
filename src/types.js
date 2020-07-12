import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';

const filmPropTypes = shape({
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

const commentPropTypes = shape({
  id: number,
  user: shape({
    id: number,
    name: string,
  }),
  rating: number,
  comment: string,
  date: number,
});

export {
  filmPropTypes,
  commentPropTypes,
};
