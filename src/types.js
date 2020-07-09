import {
  number,
  shape,
  string,
} from 'prop-types';

const filmCardPropTypes = shape({
  id: number,
  name: string,
  released: number,
  genre: string,
  posterImage: string,
});

export {
  filmCardPropTypes,
};
