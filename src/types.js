import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';

const filmPropTypes = shape({
  backgroundImage: string.isRequired,
  description: string.isRequired,
  director: string.isRequired,
  genre: string.isRequired,
  isFavorite: bool.isRequired,
  id: number.isRequired,
  name: string.isRequired,
  posterImage: string.isRequired,
  previewImage: string.isRequired,
  previewVideoLink: string.isRequired,
  rating: number.isRequired,
  released: number.isRequired,
  runTime: number.isRequired,
  scoreCount: number.isRequired,
  starring: arrayOf(string).isRequired,
  video: string.isRequired,
});

const commentPropTypes = shape({
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    name: string.isRequired,
  }),
  rating: number.isRequired,
  text: string.isRequired,
  date: number.isRequired,
});

export {
  filmPropTypes,
  commentPropTypes,
};
