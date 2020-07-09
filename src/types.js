import {
  number,
  shape,
  string,
} from 'prop-types';

const filmCardPropTypes = shape({
  name: string,
  released: number,
  genre: string,
  posterImage: string,
});

export {
  filmCardPropTypes,
};
